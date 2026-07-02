// AUTO-GENERATED snapshot (2026-07-01) — refresh via scripts/refresh-stats.sql.
// Single source of truth: posts = social_auth.post_accounts with published_at
// (platform mix + velocity + totals.posts all reconcile to the same query);
// views/likes = latest social_auth.post_engagement snapshot per post.
import type { Stats } from "./stats";

export const stats: Stats = {
  totals: {
    views: 104067,
    likes: 6732,
    comments: 81,
    posts: 281,
    episodes: 75,
    shows: 6,
    genres: 6,
    languages: 2,
  },
  platforms: [
    { platform: "youtube", label: "YouTube", posts: 79 },
    { platform: "tiktok", label: "TikTok", posts: 67 },
    { platform: "instagram", label: "Instagram", posts: 61 },
    { platform: "facebook", label: "Facebook", posts: 60 },
    { platform: "twitter", label: "X", posts: 14 },
  ],
  velocity: [
    { month: "2026-05", posts: 5, episodes: 0 },
    { month: "2026-06", posts: 229, episodes: 47 },
    { month: "2026-07", posts: 47, episodes: 16, partial: true },
  ],
  reach: [
    { slug: "ahlak-masallari", views: 79054 },
    { slug: "married-to-the-alpha", views: 18673 },
    { slug: "jorsby-bilim", views: 4341 },
    { slug: "kara-sayfa", views: 1581 },
    { slug: "para-hikayeleri", views: 405 },
    { slug: "buyuk-zihinler", views: 13 },
  ],
  updated: "2026-07-01",
};
