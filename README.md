<div align="center">

# Claude Code, Practically

**A fun, practical guide to Claude Code — pick a 30-minute path and actually get somewhere.**

[![Live Site](https://img.shields.io/badge/live-claudecodeguide.abdallahgaber.dev-d97757?style=flat-square)](https://claudecodeguide.abdallahgaber.dev)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro%20%2B%20Starlight-BC52EE?style=flat-square)](https://starlight.astro.build)

</div>

---

## What this is

Most Claude Code material out there is either a lecture or a wall of reference docs — useful,
but not exactly something you'd choose to spend half an hour with. This guide tries to be the
third option: land on the homepage, pick one of three curated tours based on where you're
starting from, and follow a short, timed path instead of a full sidebar of documentation.

It started as course notes a teammate shared with our Flutter team at [LinkDev](https://abdallahgaber.dev),
credit to [Ismail Elmogy](https://www.linkedin.com/in/ismail-elmogy/) for that. What's here now
goes well beyond the original material — it's rewritten for people actually shipping client
apps, plus a whole section the course never covered: handling client data safely, a shared
`CLAUDE.md` convention, model/cost tradeoffs, and Flutter-specific workflows.

It's public and free. Built by [Abdallah Gaber](https://abdallahgaber.dev), shared as a
give-back to whoever finds it useful.

**→ [claudecodeguide.abdallahgaber.dev](https://claudecodeguide.abdallahgaber.dev)**

## What makes it different from "just docs"

- **Three 30-minute tours** — "New to Claude Code," "Already using it daily," or "Evaluating
  for my team" — each a curated, time-tagged sequence through the content instead of a flat
  sidebar dump.
- **A live progress pill** that tracks your tour as you go, with an actual payoff (confetti,
  not a badge nobody asked for) when you finish one.
- **A scripted terminal demo** right on the homepage, so you see Claude actually reasoning
  through a real bug before committing to reading anything.
- **Click-to-reveal knowledge checks** on the denser pages, so it doesn't read as a wall of
  text.
- Everything's **static, fast, and searchable** — no backend, no tracking beyond basic
  analytics, nothing to sign up for.

## What's inside

| Section | What it covers |
|---|---|
| Getting Started | Install, config tiers, models, the CLI/keyboard-shortcut reference |
| Core Workflow | Context & memory, prompt engineering, Plan Mode |
| Extending Claude | MCP, subagents, Agent Skills, custom commands, hooks, plugins |
| Automation & Feedback Loops | Tests, browser-driven verification, the "Ralph loop" |
| Beyond the Terminal | Desktop app, mobile dispatch, Remote Control, cloud sessions, scheduling |
| **Team Playbook** *(original — not from any course)* | Client-data security, a shared CLAUDE.md template, model/cost guidance, Flutter-specific workflows, onboarding checklist |
| Reference | A condensed, printable cheat sheet, glossary, FAQ & troubleshooting |

## Tech stack

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) for the site itself
(static output, built-in search via Pagefind, dark/light theming) — plus a touch of
[React](https://react.dev) as an Astro "island" for the one component that needs real
client-side state (the scripted terminal demo). Everything else ships as plain HTML/CSS with
small vanilla-JS enhancements (the tour picker, progress tracking, scroll reveals), keeping the
page weight close to zero JS for most of the site.

## Running it locally

```bash
npm install
npm run dev        # dev server at localhost:4321
```

Search only works against a production build (Pagefind builds its index at build time), so to
try that too:

```bash
npm run build
npm run preview    # serves the production build at localhost:4322
```

## Project structure

```
src/
  content/docs/                     # one .mdx file per page, organized by section (see table above)
  components/
    CompareCard.astro                # two-column "this vs that" card
    QuickRefTable.astro              # styled wrapper for reference tables
    Recap.astro                      # click-to-reveal knowledge check
    Checklist.astro                  # localStorage-persisted checkboxes
    TerminalDemo.tsx                 # scripted fake-terminal playback (React island)
    TourPicker.astro / TourProgress.astro  # the 30-minute-tour mechanic
    overrides/                       # Starlight component overrides (header, page frame)
  data/tours.ts                      # the three tour definitions (stops + time estimates)
```

The `~` import alias maps to `src/` (see `tsconfig.json`), so components are always imported as
`~/components/Name.astro` regardless of a content file's nesting depth.

## Contributing

Found something wrong, out of date, or missing? Every page has an **Edit page** link straight
to its source on GitHub — open a PR. Small, focused PRs welcome.

## Credits

Course material seed: [Ismail Elmogy](https://www.linkedin.com/in/ismail-elmogy/). Guide,
Team Playbook content, and site: [Abdallah Gaber](https://abdallahgaber.dev).
