#!/usr/bin/env node
// ───────────────────────────────────────────────────────────────────────────
// sync-portfolio.mjs — build the site's show data from Jorsby's productions.
//
// What it does, per show in portfolio.config.mjs:
//   1. gets the finished episode list (live Supabase if --supabase + creds,
//      else the committed snapshot in portfolio-snapshot.mjs)
//   2. extracts a 9:16 poster from each video's first second (ffmpeg over URL)
//   3. (--mirror only) downloads each video, burns a jorsby.ai + @handle
//      watermark, uploads it to the blog's R2 bucket, and rewrites the URL
//   4. writes src/data/shows.generated.ts (the file the Astro site imports)
//
// Runs with ZERO installs in its default mode (snapshot + posters + emit).
// --mirror needs @aws-sdk/client-s3 + R2 creds; --supabase needs
// @supabase/supabase-js + SUPABASE_SERVICE_ROLE_KEY.
//
//   node scripts/sync-portfolio.mjs                 # posters + data, existing URLs
//   node scripts/sync-portfolio.mjs --only=jorsby-bilim
//   node scripts/sync-portfolio.mjs --dry-run
//   node --env-file=.env scripts/sync-portfolio.mjs --supabase --mirror
// ───────────────────────────────────────────────────────────────────────────

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir, writeFile, access, readFile } from "node:fs/promises";
import { constants as FS } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";

import { PORTFOLIO_SHOWS, ALPHA_EPISODES, R2, WATERMARK } from "./portfolio.config.mjs";
import { SNAPSHOT } from "./portfolio-snapshot.mjs";

const execFileP = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTER_DIR = path.join(ROOT, "public", "posters");
const OUT_FILE = path.join(ROOT, "src", "data", "shows.generated.ts");
const MANIFEST = path.join(ROOT, "scripts", ".sync-manifest.json");
const TMP = path.join(os.tmpdir(), "jorsby-portfolio-sync");

// ── flags ───────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : undefined;
};
const OPTS = {
  only: opt("only"),
  dryRun: flag("dry-run"),
  mirror: flag("mirror"),
  supabase: flag("supabase"),
  force: flag("force"),
  noWatermark: flag("no-watermark"),
};

const log = (...a) => console.log(...a);
const pad = (n) => String(n).padStart(2, "0");
const fmtDur = (sec) => {
  const s = Math.round(Number(sec) || 0);
  return `${Math.floor(s / 60)}:${pad(s % 60)}`;
};
const exists = (p) => access(p, FS.F_OK).then(() => true).catch(() => false);

// simple concurrency pool
async function pool(items, limit, fn) {
  const out = [];
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return out;
}

// ── episode sources ──────────────────────────────────────────────────────────
async function fetchEpisodesFromSupabase(show) {
  const { createClient } = await import("@supabase/supabase-js");
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("--supabase needs SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY");
  const sb = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await sb
    .from("episodes")
    .select("order_index,title,merged_video_asset_id,render_status,generated_assets!episodes_merged_video_asset_id_fkey(url,measured_duration_sec,status)")
    .eq("project_id", show.id)
    .eq("render_status", "done")
    .order("order_index");
  if (error) throw error;
  return (data || [])
    .filter((e) => e.generated_assets?.status === "READY" && e.generated_assets?.url)
    .map((e) => [e.title, e.generated_assets.measured_duration_sec, e.generated_assets.url]);
}

async function episodesFor(show) {
  if (show.slug === "married-to-the-alpha") return ALPHA_EPISODES; // already shaped
  const rows = OPTS.supabase ? await fetchEpisodesFromSupabase(show) : SNAPSHOT[show.slug] || [];
  const capped = rows.slice(0, show.epCap ?? rows.length);
  return capped.map(([title, durSec, url], i) => ({
    number: i + 1,
    title: typeof title === "string" ? { en: title } : title,
    synopsis: { en: "" },
    duration: fmtDur(durSec),
    poster: `/posters/${show.slug}/ep-${pad(i + 1)}.jpg`,
    video: { [show.primaryLang]: url },
    _sourceUrl: url,
  }));
}

// ── media ops ─────────────────────────────────────────────────────────────────
async function extractPoster(sourceUrl, outPath) {
  if (!OPTS.force && (await exists(outPath))) return "cached";
  if (OPTS.dryRun) return "dry";
  await mkdir(path.dirname(outPath), { recursive: true });
  // Seek to ~2s: past the hook's scale-in animation (t=1 caught motion blur),
  // where the headline has settled into a clean, static frame.
  await execFileP("ffmpeg", [
    "-y", "-ss", "2", "-i", sourceUrl,
    "-frames:v", "1", "-q:v", "3", "-vf", "scale=720:-1",
    "-update", "1", outPath,
  ], { timeout: 120000 });
  return "made";
}

function watermarkFilter(handle) {
  const f = WATERMARK.fontFile && `:fontfile=${WATERMARK.fontFile}`;
  const font = (extra) => (f ? f : "") + extra;
  return [
    "drawbox=x=0:y=ih*0.86:w=iw:h=ih*0.09:color=black@0.42:t=fill",
    `drawtext=text='${WATERMARK.brand}'${font(":fontcolor=white:fontsize=h*0.028:x=(w-text_w)/2:y=h*0.882:shadowcolor=black@0.6:shadowx=1:shadowy=1")}`,
    `drawtext=text='${handle}'${font(":fontcolor=white@0.9:fontsize=h*0.022:x=(w-text_w)/2:y=h*0.925:shadowcolor=black@0.6:shadowx=1:shadowy=1")}`,
  ].join(",");
}

let _s3;
async function r2Put(key, filePath, contentType) {
  if (!_s3) {
    const { S3Client } = await import("@aws-sdk/client-s3");
    const account = process.env.R2_ACCOUNT_ID;
    _s3 = new (await import("@aws-sdk/client-s3")).S3Client({
      region: "auto",
      endpoint: process.env.R2_ENDPOINT || `https://${account}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });
    void S3Client;
  }
  const { PutObjectCommand } = await import("@aws-sdk/client-s3");
  const body = await readFile(filePath);
  await _s3.send(new PutObjectCommand({ Bucket: R2.bucket, Key: key, Body: body, ContentType: contentType }));
  return `${R2.publicBase}/${key}?v=${WATERMARK.cacheVersion}`;
}

async function mirrorEpisode(show, ep, manifest) {
  const srcVideo = show.slug === "married-to-the-alpha" ? null : ep._sourceUrl;
  if (!srcVideo || ep._prehosted) return; // Alpha already hosted+watermarked
  const key = `${R2.keyPrefix}/${show.slug}/ep-${pad(ep.number)}.${show.primaryLang}.mp4`;
  const prior = manifest[srcVideo];
  if (!OPTS.force && prior?.key === key) {
    ep.video = { [show.primaryLang]: prior.url };
    return "cached";
  }
  if (OPTS.dryRun) return "dry";
  await mkdir(TMP, { recursive: true });
  const raw = path.join(TMP, `${show.slug}-${pad(ep.number)}.raw.mp4`);
  const marked = path.join(TMP, `${show.slug}-${pad(ep.number)}.wm.mp4`);
  // download
  const res = await fetch(srcVideo);
  if (!res.ok) throw new Error(`download ${srcVideo} → ${res.status}`);
  await writeFile(raw, Buffer.from(await res.arrayBuffer()));
  // watermark (or copy)
  const vfArgs = OPTS.noWatermark ? [] : ["-vf", watermarkFilter(show.handle || "@jorsby")];
  await execFileP("ffmpeg", [
    "-y", "-i", raw, ...vfArgs,
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-c:a", "copy", marked,
  ], { timeout: 600000 });
  const publicUrl = await r2Put(key, marked, "video/mp4");
  ep.video = { [show.primaryLang]: publicUrl };
  manifest[srcVideo] = { key, url: publicUrl, at: new Date().toISOString() };
  return "mirrored";
}

// ── main ──────────────────────────────────────────────────────────────────────
async function build() {
  const chosen = PORTFOLIO_SHOWS.filter((s) => !OPTS.only || s.slug === OPTS.only).sort(
    (a, b) => a.order - b.order,
  );
  if (!chosen.length) throw new Error(`no shows match --only=${OPTS.only}`);

  let manifest = {};
  if (await exists(MANIFEST)) manifest = JSON.parse(await readFile(MANIFEST, "utf8"));

  const shows = [];
  for (const cfg of chosen) {
    const episodes = await episodesFor(cfg);
    log(`\n▸ ${cfg.slug} — ${episodes.length} episodes`);

    // posters (skip Alpha — committed at /posters/ep-NN.jpg)
    if (cfg.slug !== "married-to-the-alpha") {
      const results = await pool(episodes, 4, (ep) =>
        extractPoster(ep._sourceUrl, path.join(POSTER_DIR, cfg.slug, `ep-${pad(ep.number)}.jpg`)),
      );
      log(`  posters: ${results.filter((r) => r === "made").length} new, ${results.filter((r) => r === "cached").length} cached`);
    }

    // mirror + watermark
    if (OPTS.mirror) {
      const results = await pool(episodes, 3, (ep) => mirrorEpisode(cfg, ep, manifest).catch((e) => {
        console.error(`  mirror ep-${pad(ep.number)} failed: ${e.message}`);
        return "error";
      }));
      log(`  mirror: ${results.filter((r) => r === "mirrored").length} new, ${results.filter((r) => r === "cached").length} cached`);
    }

    // strip internal fields → the final Show shape
    const cleanEpisodes = episodes.map(({ _sourceUrl, _prehosted, ...e }) => e);
    shows.push({
      slug: cfg.slug,
      title: cfg.copy.title,
      tagline: cfg.copy.tagline,
      synopsis: cfg.copy.synopsis,
      genre: cfg.genre,
      format: cfg.format,
      languages: cfg.languages,
      primaryLang: cfg.primaryLang,
      poster: cleanEpisodes[0]?.poster ?? `/posters/${cfg.slug}/ep-01.jpg`,
      ...(cfg.social ? { social: cfg.social } : {}),
      episodes: cleanEpisodes,
      episodeCount: cleanEpisodes.length,
      order: cfg.order,
    });
  }

  if (OPTS.dryRun) {
    log(`\n[dry-run] would write ${shows.length} shows / ${shows.reduce((n, s) => n + s.episodeCount, 0)} episodes to ${path.relative(ROOT, OUT_FILE)}`);
    return;
  }

  const header = `// AUTO-GENERATED by scripts/sync-portfolio.mjs — do not edit by hand.\n// Re-run the pipeline to update. Source of truth: portfolio.config.mjs + Supabase.\nimport type { Show } from "./shows";\n\nexport const shows: Show[] = `;
  await writeFile(OUT_FILE, header + JSON.stringify(shows, null, 2) + ";\n", "utf8");
  if (OPTS.mirror) await writeFile(MANIFEST, JSON.stringify(manifest, null, 2), "utf8");
  log(`\n✓ wrote ${path.relative(ROOT, OUT_FILE)} — ${shows.length} shows, ${shows.reduce((n, s) => n + s.episodeCount, 0)} episodes`);
  log("  next: review the diff, then `pnpm build` (or push → Vercel rebuild).");
}

build().catch((e) => {
  console.error("sync-portfolio failed:", e);
  process.exit(1);
});
