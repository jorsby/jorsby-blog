// Portfolio traction stats. Types + helpers here; numbers in stats.generated.ts,
// refreshable via `scripts/sync-portfolio.mjs --stats` (rolls up
// social_auth.post_engagement + production velocity). Snapshot: 2026-07-01.

export interface Totals {
  views: number;
  likes: number;
  comments: number;
  posts: number;
  episodes: number;
  shows: number;
  genres: number;
  languages: number;
}

export interface PlatformStat {
  platform: string;
  label: string;
  posts: number; // published posts (post_accounts.published_at)
}

export interface MonthPoint {
  month: string; // "2026-06" — display label derived per-language at render
  posts: number;
  episodes: number;
  partial?: boolean; // month still in progress at snapshot time
}

export interface ShowReach {
  slug: string;
  views: number;
}

export interface Stats {
  totals: Totals;
  platforms: PlatformStat[];
  velocity: MonthPoint[];
  reach: ShowReach[]; // sorted desc by views
  updated: string; // ISO date
}

export { stats } from "./stats.generated";
