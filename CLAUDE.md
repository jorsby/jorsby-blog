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
- **Tailwind CSS** with a black + **acid-lime** editorial theme
- **i18n**: English at `/`, Turkish at `/tr/` (see `src/i18n/`)
- Videos: self-hosted MP4s expected on **Cloudflare R2 / CDN**, played via a
  configurable URL per episode

## Pages
1. **Home** (`/`) — four-format video mosaic → services → process → CTA
2. **Work** (`/work`) — filterable six-show portfolio
3. **About** (`/about`) — The studio story
4. **Contact** (`/contact`) — Web3Forms contact form + direct email
5. **Show detail** (`/shows/[slug]`) — show overview, social channels, and episode lightbox
Each has a Turkish mirror under `src/pages/tr/`.

## Design tokens
`tailwind.config.mjs`: black base `#070707`; acid-lime accent `#e8ff47`; warm
white heading `ink #f2f0eb`; fonts Archivo (sans), Space Mono (mono), Anton
(display). Editorial/cinematic utilities (`bg-cinematic`, `poster-vignette`,
`film-grain`, `display-outline`) live in `src/styles/global.css`.

The motion system is vanilla JS in `BaseLayout.astro` and `Hero.astro`: a
first-visit curtain, hero line reveals, the four-format video mosaic, lazy autoplay
previews, reel parallax/glare, magnetic CTAs, work-card tilt, nav scramble, and
floating service previews. Every interaction is disabled under
`prefers-reduced-motion` and pointer effects only run on fine pointers.

## Real assets (already wired)
1. **Portfolio data → `src/data/shows.generated.ts`**
   - Six shows and the current generated episode set are exposed through the
     typed model/helpers in `src/data/shows.ts`.
   - `scripts/portfolio-snapshot.mjs` is the committed fallback; regenerate with
     `node scripts/sync-portfolio.mjs`. Live Supabase sync requires service-role
     credentials and should never broaden beyond the UUID allowlist in
     `scripts/portfolio.config.mjs`.
   - Kara Sayfa's requested **Paper Throne — Episode 1** render is curated first,
     followed by the existing four showcase films.
   - The flagship lives on Cloudflare **R2 bucket `jorsby-media`** and has EN + TR
     audio where available. Other generated shows currently use their production
     render URLs until the portfolio mirror pipeline is run with `--mirror`.
   - **Production upgrade:** connect custom domain `media.jorsby.ai` to the bucket
     and replace `R2_BASE` with `https://media.jorsby.ai`.
2. **Posters → `public/posters/`**
   - Real frames are organized by show slug; flagship posters remain at the root.
   - Re-encode/upload pipeline (masters live OUTSIDE the repo on the Desktop):
     `ffmpeg` → 1080×1920 H.264 faststart ~3 Mbps; upload with
     `npx wrangler r2 object put jorsby-media/married-to-the-alpha/<file> --file=… --remote -y --content-type=video/mp4 --cache-control="public, max-age=31536000, immutable"`.
     (OAuth `wrangler login` already grants R2 on this machine.)
3. **Contact form key → Web3Forms**
   - Set `PUBLIC_WEB3FORMS_KEY` in Vercel env (key is tied to your email and is
     public-safe), or replace the fallback constant in
     `src/components/ContactForm.astro`. Until set, the form shows a graceful error.
4. **OG image → `public/og-default.jpg`**
   - Real 1200×630 social image used by `src/layouts/BaseLayout.astro`.
5. **Translations** — refine Turkish copy in `src/i18n/translations.ts` (placeholder
   translations are in place; `t()` falls back EN → key).
6. **Hero video mosaic** — `Hero.astro` presents one curated scene from four
   distinct formats with no project or episode names. Hero clips are muted,
   subtitle-free scene exports shared by both locales; local posters prevent
   captioned opening frames from flashing while media loads. Reduced-motion
   visitors receive the same clean poster mosaic. The dedicated R2 sources live
   under `kara-sayfa/hero-gates-silent.mp4`,
   `the-paper-throne/hero-confrontation-silent.mp4`, and
   `jorsby-films/hero-flor-storm-silent.mp4` in the `jorsby-media` bucket.
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
