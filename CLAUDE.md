# Jorsby — jorsby.ai

## What This Is
A cinematic marketing + lead-gen site for **Jorsby**, an AI agency that produces
**vertical AI drama series** (9:16 short-form) for brands, in multiple languages.
The site showcases a launch series, explains the offering, and converts via a
contact form. (It replaced the previous dev-blog.)

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

## Swapping in real assets (the two files that matter)
1. **Episodes / videos / drama copy → `src/data/episodes.ts`**
   - Replace `SAMPLE_VIDEO` and each episode `videoUrl` with your R2/CDN MP4 URLs
     (e.g. `https://media.jorsby.ai/the-glass-tower/ep-01.mp4`).
   - Edit `drama.en` / `drama.tr` (title, tagline, synopsis, genre, episode
     titles + synopses, `teaserVideoUrl`).
2. **Posters → `public/posters/`**
   - Placeholders are gradient SVGs `ep-01.svg`…`ep-15.svg` + `teaser.svg`
     (vertical 1080×1920). Drop in real images (e.g. `ep-01.jpg`) and update the
     matching `posterUrl` in `episodes.ts`.
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
