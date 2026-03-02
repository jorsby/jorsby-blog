# Task: Write Blog Posts — Lessons from Building Multi-Agent AI Systems

## Context
We (Jorsby) are building a social media automation platform powered by 6 AI agents orchestrated through OpenClaw. We've been building this from scratch and learned hard lessons. Our blog at jorsby.ai documents these lessons for other developers.

## Your Job
Write **3-5 high-quality blog posts** based on the lessons below. These should be:

- **Industry-standard tech blog quality** (think Vercel, Linear, Resend, Stripe engineering blogs)
- **Practical and specific** — real code examples, real architecture decisions, real mistakes
- **Useful to developers building AI agent systems** — if someone was starting from scratch, what would they NEED to know?
- **No fluff, no filler** — every paragraph earns its place
- **Honest about mistakes** — we screwed up, here's what happened, here's what we learned

## Our Niche
AI automation, AI media generation, multi-agent orchestration, content pipeline automation. We use OpenClaw to manage agent memory, workspaces, and coordination.

## Audience
Developers and technical founders building with AI agents. They're smart, they don't need hand-holding, but they'll appreciate war stories and concrete patterns.

## What We Learned (Raw Material — USE THIS)

### Lesson 1: Constraints > Instructions
We wrote beautiful "DO NOT" rules in agent system prompts. Agents ignored them. We had a tool called `xurl` for posting to X/Twitter, and a unified tool called `socialpost`. We banned xurl in 3 different AGENTS.md files. Every agent still used it because it was faster. Solution: `brew uninstall xurl`. Physically removed it. Problem solved instantly. The principle: if you can enforce a rule by removing the capability, do that. Written instructions are suggestions to LLMs.

### Lesson 2: One Tool Per Job
Having two tools that do the same thing (xurl + socialpost both posted to X) caused chaos. Agents picked whichever was convenient, inconsistently. Token management split across two systems. Fix: pick ONE tool, delete the other. socialpost now handles all 5 platforms (Instagram, Facebook, TikTok, YouTube, X).

### Lesson 3: Never Bake Text Into AI-Generated Images  
We asked Gemini/fal.ai to generate images with text overlays. Results: broken emojis, misspelled words, garbage typography, especially in non-Latin scripts (Arabic, Turkish). Solution: two-step pipeline. AI generates text-free base images → separate `image-overlay` tool adds professional typography using real fonts (Poppins, Amiri for Arabic, Cairo). Night and day difference.

### Lesson 4: The Manager Agent Shouldn't Write Code
Our main orchestrator agent (Jorsby) was supposed to delegate coding to the dev agent. One day it edited the dashboard code directly — "just a quick fix." The code worked but it violated the architecture. Rule now: main agent CANNOT edit files in ~/Development/. If it's code, spawn the dev agent. Enforced by instructions (ideally would be enforced by file permissions too). A manager who does the engineer's job is a bad manager AND a bad engineer.

### Lesson 5: Preference Files Explode If You're Not Careful
We started with 1 preference file per agent. Then platform-specific ones (IG prefs, FB prefs, X prefs). Then language-specific (EN prefs, TR prefs, AR prefs). Plus feedback files. We hit 15 files loaded at startup per agent — massive token burn. Solution: collapsed to 2 files. `platforms.md` (static rules, rarely changes) and `brand.md` (voice + audiences + lessons learned — one living document). 15 files → 4 files at startup. Lesson: configuration sprawl is a real problem with agents.

### Lesson 6: Separate Creation from Publishing (But Don't Bottleneck)
Content agents generate drafts → post to Discord for review → human approves → then dispatch to platforms. Initially we bottlenecked ALL publishing through the main agent. Doesn't scale. Content agents should be able to dispatch themselves after approval. The key: the approval gate exists, but the execution is distributed.

### Lesson 7: Thread-per-Draft for Review
We used to dump all language versions of a draft into a single Discord channel. 5+ messages per draft, impossible to manage. Solution: one parent message per draft in the channel (keeps it clean) → auto-create a thread → each language version (image + caption) as a separate message in the thread. Reviewable, discussable, organized.

### Lesson 8: Agent Memory Architecture
Agents wake up with zero context every session. Files ARE their memory. We use: daily raw journals (`memory/YYYY-MM-DD.md`) for logging + curated long-term memory (`MEMORY.md`) for patterns and principles. The daily files are like a journal. MEMORY.md is like the lessons you actually internalized. Periodically, the agent reviews daily files and updates MEMORY.md.

### Lesson 9: Escalation Chains Over Flat Communication
With 6 agents, letting everyone talk to everyone = chaos. Solution: clear escalation chain. Content agents escalate to techops (one target, no decision fatigue). Techops escalates to dev (code changes) or main (strategic decisions). Dev reports back to techops for verification. Each agent has ONE escalation target.

### Lesson 10: Engineering Tasks Need Proof
"I fixed it" without evidence is meaningless. Every engineering task must produce proof: screenshot, curl output, test result, before/after diff. This applies to AI agents too. No proof = not done.

## Blog Post Guidelines

- Each post: 800-1500 words
- Include a compelling title (SEO-friendly but not clickbait)
- Include frontmatter: title, description, date (use 2026-03-02), tags
- Use real examples from our system (the ones above)
- Code snippets where relevant (directory structures, config examples, CLI commands)
- Each post should stand alone — a reader finding one via Google should get full value
- End with a clear takeaway or principle
- Write in first person plural ("we") — we're a team (human + AI)
- Tone: direct, technical, slightly opinionated. Not corporate. Not try-hard casual.

## File Location
Blog posts go in: `src/content/blog/` as `.mdx` files.
Filename format: `kebab-case-title.mdx`

There's already one post there (`constraints-over-instructions.mdx`) — you can update it if your version is better, and create the rest as new files.

## When Done
Run: `npm run build` to verify everything compiles.
Then run: `openclaw system event --text 'Done: blog posts written — lessons learned series' --mode now`
