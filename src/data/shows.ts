import type { Lang } from "../i18n/utils";

// ───────────────────────────────────────────────────────────────────────────
// MULTI-SHOW PORTFOLIO MODEL
//
// Jorsby is a mass AI video-production studio. This file describes the SHAPE of
// a show; the actual data lives in `shows.generated.ts`, produced by
// `scripts/sync-portfolio.mjs` (queries Supabase, mirrors + watermarks videos
// to R2, extracts posters, and rewrites the generated file).
//
// The one rule every .astro consumer follows: read localized strings through
// `L(value, lang)` — never touch `.tr` directly — so a missing TR string
// degrades cleanly to EN.
// ───────────────────────────────────────────────────────────────────────────

/** A per-language string bag. `en` is always present (the fallback); `tr` optional. */
export interface Localized {
  en: string;
  tr?: string;
}

export type Genre =
  | "drama"
  | "moral"
  | "science"
  | "history"
  | "dark-history"
  | "finance";

/** Episodic narrative series vs. high-volume standalone short-form. */
export type Format = "series" | "shorts";

/** Audio languages a show is actually available in. */
export type ShowLang = "EN" | "TR";

/** The SHOW's own channels (per language) — not Jorsby's corporate accounts. */
export interface Social {
  youtube?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  x?: string;
}

export interface ShowEpisode {
  number: number;
  title: Localized;
  synopsis: Localized;
  duration: string; // "1:34" — derived from measured_duration_sec
  poster: string; // "/posters/<slug>/ep-NN.jpg"
  /** Watermarked video per language; at least one of en/tr is present. */
  video: { en?: string; tr?: string };
}

export interface Show {
  slug: string; // stable kebab id — URL segment, R2 prefix, poster dir
  title: Localized;
  tagline: Localized;
  synopsis: Localized;
  genre: Genre;
  format: Format;
  languages: ShowLang[]; // audio languages available
  primaryLang: Lang; // the show's native audio ("en" | "tr")
  poster: string; // show cover, 9:16
  reel?: { en?: string; tr?: string }; // optional sizzle
  social?: Partial<Record<Lang, Social>>; // channels per language (Alpha is bilingual)
  episodes: ShowEpisode[]; // ordered
  episodeCount: number; // = episodes.length (convenience)
  order: number; // display order on the wall
}

// ── The data (machine-generated, committed) ─────────────────────────────────
export { shows } from "./shows.generated";
import { shows as _shows } from "./shows.generated";

// ── Helpers ─────────────────────────────────────────────────────────────────

/** The single localized-string chokepoint. `L(show.title, lang)` everywhere. */
export const L = (v: Localized, lang: Lang): string => v[lang] ?? v.en;

export const getShow = (slug: string): Show | undefined =>
  _shows.find((s) => s.slug === slug);

/** The flagship drama — used for spotlights and default hero video. */
export const flagship = (): Show =>
  getShow("married-to-the-alpha") ?? _shows[0];

/** The show's channels for a given language, falling back to its native lang. */
export const showSocial = (show: Show, lang: Lang): Social | undefined =>
  show.social?.[lang] ?? show.social?.[show.primaryLang];

/** Distinct genres across all shows, in first-seen order. */
export const allGenres = (): Genre[] => [
  ...new Set(_shows.map((s) => s.genre)),
];

/** Portfolio-wide headline numbers, computed so they never go stale. */
export const portfolioStats = () => ({
  shows: _shows.length,
  genres: allGenres().length,
  languages: new Set(_shows.flatMap((s) => s.languages)).size,
  episodes: _shows.reduce((n, s) => n + s.episodeCount, 0),
});
