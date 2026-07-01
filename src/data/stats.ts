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
  posts: number;
  views: number;
  likes: number;
}

export interface MonthPoint {
  month: string; // "2026-06"
  label: string; // "Jun"
  posts: number;
  episodes: number;
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
