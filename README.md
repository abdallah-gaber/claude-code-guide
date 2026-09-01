# Claude Code: The Practical Guide

A fun, practical guide to Claude Code — built by a Flutter team lead at LinkDev for his team,
and shared publicly as a free resource. Built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build).

**Live target:** `claudecodeguide.abdallahgaber.dev` (not yet deployed — see below).

## Project structure

```
src/
  content/docs/
    getting-started/               # install, config, models, CLI reference
    core-workflow/                 # sessions/memory, prompt engineering, plan mode
    extending-claude/              # MCP, subagents, skills & commands, hooks, plugins
    automation-and-feedback-loops/ # tests/browser feedback, the Ralph loop
    beyond-the-terminal/           # Desktop app, mobile, remote control, cloud, routines
    team-playbook/                 # original content: Flutter teams, security, conventions,
                                    # model/cost guidance, onboarding checklist
    reference/                     # cheat sheet, glossary, FAQ
  components/
    CompareCard.astro    # two-column "this vs that" card
    QuickRefTable.astro  # styled wrapper for reference tables
    Recap.astro          # click-to-reveal knowledge check (native <details>)
    Checklist.astro      # localStorage-persisted checkboxes
    TerminalDemo.tsx     # scripted fake-terminal playback (React island, client:load)
```

The `~` import alias maps to `src/` (see `tsconfig.json`), so components are always imported
as `~/components/Name.astro` regardless of a content file's nesting depth.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Local dev server at `localhost:4321`          |
| `npm run build`     | Production build to `./dist/`                 |
| `npm run preview`   | Preview the production build locally          |

## A note on where this project lives

This repo lives at `~/dev/claude-code-guide` — a plain local path, deliberately **not** under
the OneDrive-synced folder. A symlink at
`~/Library/CloudStorage/OneDrive-LinkDevelopment/private/claude-code-guide` points here so it
still shows up in Finder next to `private/portfolio`. Don't move the real files back into the
OneDrive tree: `node_modules`' large file count syncs as OneDrive cloud placeholders on this
machine, which hangs `npm install`/`astro build` indefinitely the first time it's stalled on
sync. If you ever need to relocate this project, move the real directory (not the symlink) and
re-point the symlink.

## Deploying (claudecodeguide.abdallahgaber.dev)

1. Push this repo to GitHub (a fresh repo, or under your existing account/org).
2. In Vercel: **New Project** → import that repo. Framework preset can stay **Astro** (Vercel
   detects it automatically) — no custom build command needed, this is a plain static Astro
   site (`npm run build` → `dist/`).
3. In the Vercel project's **Settings → Domains**, add `claudecodeguide.abdallahgaber.dev`. Vercel
   will show you the exact DNS record to add (typically a `CNAME` for the `claudecodeguide`
   subdomain pointing at `cname.vercel-dns.com`).
4. Add that record wherever `abdallahgaber.dev`'s DNS is currently managed (whatever registrar
   or DNS provider that domain uses). Propagation is usually fast (minutes), sometimes up to a
   few hours.
5. Once DNS resolves, Vercel issues an SSL certificate for the subdomain automatically.

No environment variables or secrets are needed for this deploy — it's a fully static site.
