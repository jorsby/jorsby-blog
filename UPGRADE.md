# Blog Upgrade: Make It World-Class

## Design Overhaul
Make this look like a top-tier tech blog (think Vercel blog, Linear blog, Resend blog). Current design is too basic.

- **Hero section on landing page**: Bold headline about what Jorsby does — AI automation & AI media generation
- **Gradient text/accents**: Subtle gradients on headings (electric blue → purple or similar)
- **Better typography**: Larger hero text, better line heights, more whitespace
- **Card hover effects**: Subtle lift/glow on post cards
- **Reading time** on blog posts
- **Better code blocks**: Syntax highlighting with a dark theme
- **Smooth scroll animations**: Fade-in on scroll for sections (use Astro's built-in or minimal JS)
- **Better footer**: Multi-column with links, social, newsletter

## New Features

### 1. Newsletter Subscription
- Add email signup form (prominent on homepage hero + footer)
- Use Buttondown.email (free tier, no backend needed) — form action posts to `https://buttondown.com/api/emails/embed-subscribe/jorsby`
- CTA: "Get weekly insights on AI automation & agent systems"

### 2. Discord Community Link
- Add "Join our Discord" button/link on homepage and footer
- Discord invite: https://discord.gg/clawd (placeholder — will update)
- Style it with Discord's brand purple (#5865F2)

### 3. Landing Page Rewrite
The homepage should communicate:
- **What we do**: Build AI agent systems that automate content creation, media generation, and publishing
- **Our niche**: AI automation, AI media generation, multi-agent orchestration
- **What readers get**: Real lessons from building in production — not theory
- **Tools we use**: OpenClaw, Claude, Astro, custom pipelines
- Three sections minimum:
  1. Hero with tagline + subscribe
  2. Latest posts
  3. "What we write about" — 3-4 topic cards (AI Agents, Media Generation, Automation, Build in Public)

### 4. About Page Update
- Explain Jorsby: AI-powered content studio
- The team: Serhat (founder) + Jorsby (AI co-founder) + 6 specialized agents
- Our stack: OpenClaw, Claude, custom tools
- Link to Discord

### 5. RSS + Social Links
- Twitter/X: @jorsby_en
- Discord: https://discord.gg/clawd
- GitHub: https://github.com/jorsby
- RSS prominently linked

## Tech Constraints
- Keep it static (no server-side)
- Buttondown for newsletter (no custom backend)
- Minimal JS — Astro islands only where needed
- Mobile-first responsive
- Keep the dark theme but make it PREMIUM dark

## Reference Blogs for Style
- https://vercel.com/blog
- https://linear.app/blog  
- https://resend.com/blog
- https://turbo.build/blog

When done, run: `npm run build` to verify, then run:
`openclaw system event --text 'Done: jorsby.ai blog upgraded — premium design, newsletter, Discord, landing page' --mode now`
