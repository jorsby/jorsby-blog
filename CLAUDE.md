# Jorsby Blog — jorsby.ai

## What This Is
A minimal dark modern blog for Jorsby — documenting lessons learned building a multi-agent AI system with OpenClaw.

## Tech Stack
- **Astro** with MDX support
- **Tailwind CSS** for styling
- **Deployed to Vercel** (static output)
- **Content as Markdown/MDX files** in `src/content/blog/`

## Design Requirements
- **Dark theme** — deep dark background (#0a0a0a or similar), light text
- **Minimal and modern** — lots of whitespace, clean typography
- **Monospace accents** — code-like feel for a tech blog
- **Accent color**: Electric blue (#3b82f6) or similar
- **Mobile-first responsive**
- **No JavaScript frameworks in the client** — Astro islands only if needed

## Pages
1. **Home** (`/`) — Hero with tagline + latest 3 blog posts
2. **Blog** (`/blog`) — All posts, newest first, with date and reading time
3. **Blog Post** (`/blog/[slug]`) — Individual post with proper typography, code highlighting, TOC
4. **About** (`/about`) — What Jorsby is, who's behind it

## Blog Post Schema
```
---
title: "Post Title"
description: "Short description for SEO/cards"
date: 2026-03-02
tags: ["agents", "architecture", "openclaw"]
draft: false
---
```

## Content
Create 1 sample blog post:
**Title**: "Constraints Over Instructions: What Building 6 AI Agents Taught Us"
**Content**: Write a compelling ~800 word blog post about the lesson that removing tools is more effective than writing rules. Use our real example: we had a tool called xurl for posting to X/Twitter, but agents kept using it instead of our unified socialpost tool — despite explicit instructions not to. The fix wasn't better instructions, it was `brew uninstall xurl`. Make the wrong thing impossible, not just discouraged. Include other examples from our architecture:
- One tool per job principle
- Why we killed 4 legacy overlay tools instead of writing "don't use these"
- The parallel to real engineering (removing footguns > documentation)

Tone: Direct, practical, slightly opinionated. Not corporate. Like explaining to a smart friend over coffee.

## SEO
- Proper meta tags, Open Graph, Twitter cards
- RSS feed at `/rss.xml`
- Sitemap at `/sitemap.xml`

## Vercel Config
- `output: "static"` in astro.config
- Include `vercel.json` if needed

## Do NOT
- Add a CMS or admin panel
- Add analytics (we'll add later)
- Add comments (we'll add later)
- Over-engineer — ship minimal, iterate later
