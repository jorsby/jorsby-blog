# Portfolio sync pipeline

`sync-portfolio.mjs` builds the site's show data (`src/data/shows.generated.ts`)
and posters (`public/posters/<slug>/`) from Jorsby's productions.

## What feeds it

- **`portfolio.config.mjs`** — the curated layer: which 6 shows are public (by
  project UUID — this allowlist is what keeps The Sin Clause / pilots off the
  site), their bilingual marketing copy, social handles, and Alpha's 15 curated
  episodes (already hosted + watermarked on R2).
- **`portfolio-snapshot.mjs`** — a committed snapshot of the 5 Turkish shows'
  finished episodes (title / duration / source URL), pulled from Supabase. Lets
  the pipeline run with **no DB credentials**.

## Modes

```bash
# Default: posters + data file, using the videos' existing public URLs.
# Zero installs, no credentials. Safe to run anytime.
node scripts/sync-portfolio.mjs

node scripts/sync-portfolio.mjs --only=jorsby-bilim   # one show
node scripts/sync-portfolio.mjs --dry-run             # plan, no writes

# Live pull from Supabase instead of the snapshot (refreshes the episode list).
#   needs @supabase/supabase-js + SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
node --env-file=.env scripts/sync-portfolio.mjs --supabase

# Mirror each video to the blog's own R2 with a jorsby.ai + @handle watermark,
# then rewrite the data file to the branded, stable R2 URLs.
#   needs @aws-sdk/client-s3 + R2_* creds (see below). ffmpeg must be on PATH.
node --env-file=.env scripts/sync-portfolio.mjs --supabase --mirror
```

Flags: `--only=<slug>`, `--dry-run`, `--force` (ignore the poster/mirror cache),
`--no-watermark`.

## `.env` for `--mirror`

```
SUPABASE_URL=https://njfezrlytrqxngmaucfx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...        # read-only queries
R2_ACCOUNT_ID=...                    # or R2_ENDPOINT
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET=jorsby-blog-media
R2_PUBLIC_BASE_URL=https://pub-acd1440124614ccb9c0b6dcdfd9cd4af.r2.dev
```

Install the optional deps once: `npm i -D @aws-sdk/client-s3 @supabase/supabase-js`.

## Publishing

The site is static (Vercel). New data reaches production via git:

1. Run the pipeline → it updates `src/data/shows.generated.ts` and
   `public/posters/<slug>/*.jpg` (videos go to R2, not git).
2. Review the diff, commit on a branch, push → Vercel rebuilds.

Until `--mirror` is run with R2 creds, the 5 Turkish shows play from their
original Supabase/Remotion URLs (unwatermarked). Run `--mirror` to move them onto
the blog's own branded R2 bucket. Alpha is already hosted + watermarked and is
never re-mirrored.

## Traction stats (the homepage charts)

The `/` traction section (views, likes, reach-by-show, platform mix, output
velocity) reads `src/data/stats.generated.ts`. To refresh it, run the queries in
`scripts/refresh-stats.sql` against the jorsby-media Supabase and transcribe the
results into `stats.generated.ts`, then rebuild.

Reconciliation rules (keep the section internally consistent):

- **posts** everywhere = `post_accounts.published_at` rows (query 1). The
  counter, platform donut and monthly chart must all come from this one query.
- **views/likes/comments** = latest `post_engagement` snapshot per post (query 2).
- Mark the in-progress month `partial: true` — it renders as a dashed "MTD"
  point instead of looking like a crash.
- The reach chart only renders shows with ≥1K views; the rest are summarized in
  the "+N newer shows in early rollout" footnote (see `REACH_FLOOR` in
  `Traction.astro`).

## Notes

- **Watermark**: a lightweight ffmpeg `drawbox` + `drawtext` post-pass (bottom
  band + `jorsby.ai` / `@handle`), sized as a fraction of frame height so it
  scales on any 9:16 resolution. Drop `Inter-Bold.ttf` in `scripts/assets/` for
  the exact brand font (falls back to a system font otherwise).
- **Idempotent**: `.sync-manifest.json` (gitignored) tracks mirrored objects so
  re-runs only process new/changed episodes. Posters are skipped if they exist
  (use `--force` to regenerate).
