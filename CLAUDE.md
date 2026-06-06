# Jorsby — jorsby.ai

## What This Is
A cinematic marketing + lead-gen site for **Jorsby**, an AI **story studio** that
produces episodic content — **vertical AI dramas and long-form video** — which
businesses run on their **own channels** (Instagram, TikTok, YouTube) to grow an
audience through story, not ads. Four service pillars: **educational storytelling,
vertical drama series, history & documentary, consistent characters**. The site
showcases the flagship series, explains the offering, and converts via a contact
form. (It replaced the previous dev-blog.)

## Tech Stack
- **Astro** (static output, `output: "static"`) — deployed to Vercel
- **Tailwind CSS** with a dark + **gold/amber** cinematic theme
- **i18n**: English at `/`, Turkish at `/tr/` (see `src/i18n/`)
- Videos: self-hosted MP4s expected on **Cloudflare R2 / CDN**, played via a
  configurable URL per episode

## Pages
1. **Home** (`/`) — Hero (autoplay teaser) → Featured drama → Services → Value props → Process → CTA
2. **Work** (`/work`) — The series: featured player + 15-episode grid with a click-to-play lightbox
3. **About** (`/about`) — The studio story
4. **Contact** (`/contact`) — Web3Forms contact form + direct email
Each has a Turkish mirror under `src/pages/tr/`.

## Design tokens
`tailwind.config.mjs`: dark base `#0a0a0a`; gold accent `#e8b14c` (`accent-warm`,
`accent-deep`); warm heading `ink #f5f0e6`; fonts Inter (sans), JetBrains Mono
(mono), Bricolage Grotesque (display). Cinematic utilities (`bg-cinematic`,
`poster-vignette`, `film-grain`, `gold-text`) live in `src/styles/global.css`.

## Real assets (already wired)
1. **Series data → `src/data/episodes.ts`**
   - Flagship: **"Married to the Alpha Who Ruined Me"** — 15 episodes, EN + TR.
     Eps 1–10 titles/synopses are final (from the episode dialogue + the production
     glossary); **eps 11–15 titles/synopses are placeholders** (marked
     `(Placeholder — confirm.)`) — no transcripts existed.
   - Videos live on Cloudflare **R2 bucket `jorsby-media`**, key prefix
     `married-to-the-alpha/`, served from `R2_BASE` (currently the public r2.dev
     dev URL). Eps 1–10 have `.en.mp4` + `.tr.mp4`; eps 11–15 are `.en.mp4` only —
     the TR site falls back to EN audio via `TR_AUDIO_THROUGH`.
   - **Production upgrade:** connect custom domain `media.jorsby.ai` to the bucket
     and replace `R2_BASE` with `https://media.jorsby.ai`.
2. **Posters → `public/posters/ep-01.jpg`…`ep-15.jpg`** (+ `teaser.jpg`)
   - Real frames cut from the episodes, committed in-repo (~1.7 MB). Shared across
     languages. Swap = drop a new `ep-NN.jpg`.
   - Re-encode/upload pipeline (masters live OUTSIDE the repo on the Desktop):
     `ffmpeg` → 1080×1920 H.264 faststart ~3 Mbps; upload with
     `npx wrangler r2 object put jorsby-media/married-to-the-alpha/<file> --file=… --remote -y --content-type=video/mp4 --cache-control="public, max-age=31536000, immutable"`.
     (OAuth `wrangler login` already grants R2 on this machine.)
3. **Contact form key → Web3Forms**
   - Set `PUBLIC_WEB3FORMS_KEY` in Vercel env (key is tied to your email and is
     public-safe), or replace the fallback constant in
     `src/components/ContactForm.astro`. Until set, the form shows a graceful error.
4. **OG image → `public/og-default.svg`**
   - Replace with a real **1200×630 PNG/JPG** for best social-scraper support
     (most scrapers don't render SVG), then update the `ogImage` default in
     `src/layouts/BaseLayout.astro`.
5. **Translations** — refine Turkish copy in `src/i18n/translations.ts` (placeholder
   translations are in place; `t()` falls back EN → key).

## Video notes (R2)
- Encode H.264 + faststart (moov atom at front), ~1080×1920.
- Set long `Cache-Control` on R2 objects; R2 supports HTTP Range so seeking works.
- A custom domain (`media.jorsby.ai`) is recommended for clean URLs.
- `<video>` playback needs no CORS; only set a bucket CORS policy if you add
  captions (`<track>`) or `crossorigin`.

## SEO
Meta/OG/Twitter + hreflang + Organization JSON-LD in `BaseLayout`; `/work` adds
`CreativeWorkSeries` JSON-LD. Sitemap auto-generated (`@astrojs/sitemap`).

## Do NOT
- Add a CMS/admin, analytics, or comments (later)
- Re-introduce the blog (removed in the pivot; recoverable from git history)
- Put large video files in the repo — they belong on R2/CDN
