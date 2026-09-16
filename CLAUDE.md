# CLAUDE.md — Cuong-b.github.io (Portfolio Website)

Context for Claude sessions working in this repo. Read this before making changes.

## What this is

Cuong's personal portfolio: a lightweight "hub/museum" that shows who he is and presents his
projects to employers/visitors — not an app-heavy monolith. Static site, vanilla HTML/CSS/JS
(ES modules), no build step, hosted on GitHub Pages (CNAME configured).

## Repo layout

- `index.html`, `about.html`, `projects.html`, `resume.html`, `contact.html` — top-level pages
- `seniorthesis.html`, `woodworking.html` — dedicated project pages (built, live)
- `pages/projects/project-template.html` — template for cloning new project pages
- `css/styles.css` — main stylesheet, including the drafting-paper theme
- `css/project.css` — project-page-specific styles
- `js/main.js`, `js/render.js`, `js/renderProjects.js`, `js/renderProjectPage.js`,
  `js/renderFilters.js`, `js/state.js` — rendering/state logic (JS changes state, CSS determines
  presentation — keep following this split)
- `js/theme.js` — **dead code**: an abandoned dark-mode experiment, not wired into the site.
  Don't build on it unless dark mode is explicitly revisited.
- `js/background/`, `js/components/` — reusable UI/background pieces
- `data/projects.js` — the project registry (see below)
- `data/pageLinks.js`, `data/projectFilters.js` — nav links and filter config

## Project status (don't build these out without checking first)

- **Live/featured:** Senior thesis — "Using Convolutional Neural Networks for Event Pileup
  Discrimination in CUPID." Full page (`seniorthesis.html`), `featured: true`, `display: true`.
- **On hold, ignore for now:** `SolarOpt` and `Art du Trait` — both exist as stub entries in
  `data/projects.js` (`display: false`, no tech/images/pages). These are unstarted/early-roadmap
  ideas. Don't develop them unless explicitly asked.
- **Woodworking:** stub entry, `display: false`, has a page (`woodworking.html`) but isn't
  surfaced as a project card yet.
- **Gravitational Lensing Explorer:** lives in its own separate repo, actively in progress. It's
  also Cuong's React learning project. Do **not** merge it into this repo or add it to
  `data/projects.js` until it's finished — it gets wired into the portfolio once complete.
- **Galaxy-merger visualization:** a series of animations Cuong created; needs its own project
  page eventually, but the animation files/code haven't been located yet. Don't scaffold this
  until the source material is found and the scope is clearer.
- **Never add to the site:** Omnium LLC work (proprietary to the company) and the UC Berkeley
  Game Dev DeCal materials (belong to the university). These can appear on the resume but not as
  portfolio project entries or code.

## Adding a new project (existing pattern — follow it, but flag improvements)

1. Add an entry to `data/projects.js` (id, title, subtitle, categories, description,
   technologies, image, page, github, demo, file, featured, display).
2. Clone `pages/projects/project-template.html` for the project's dedicated page.
3. Wire up assets (images, files, links).

This pattern only has one real precedent (the thesis page) — if a change would make it more
consistent or easier to repeat, say so, but don't silently deviate from it.

## Architecture conventions

- Stay vanilla JS/HTML/CSS in **this** repo. Don't introduce a framework (React, etc.) without an
  explicit, good reason — this was originally how Cuong learned HTML/CSS/JS and it's fine for it
  to evolve, but the default is "don't rewrite working pages for the sake of a framework."
- React experimentation belongs in the separate Gravitational Lensing Explorer repo, not here.

## Design system

- The "drafting-paper" theme (color/texture) and title-block-style navbar are already implemented
  in `css/styles.css` — this is the real design language, not aspirational.
- **Known improvement area:** the drafting-paper theme's CSS variables/classes aren't well
  organized yet. A refactor to make them easier to find and reuse is welcome when relevant —
  raise it as a suggestion rather than doing a silent large refactor.
- Animated backgrounds must stay subtle, behind content, and never distracting.
- Responsive rules: navbar becomes a dropdown on mobile; hero/title visual identity should stay
  "identical or very close" between mobile and desktop.
- Thesis PDF opens in a new tab, not embedded (Safari iframe issues previously caused problems —
  see git history around PDF handling).

## Working style for this repo

- **Default mode here is efficient, terse repo work.** Don't turn routine changes into a lecture.
- Deeper learning — first-principles explanations, quizzes, comprehension checks, checkpoints —
  happens in a **separate, parallel learning conversation**, not inline during repo work. Cuong
  wants full understanding and ownership of the system, but wants that kept out of the way of
  getting things done here. When he wants that mode, treat it as its own thread.
- Teach and apply standard industry git practices as we go, rather than just running commands
  silently:
  - Test changes locally (serve the site locally, e.g. a simple local HTTP server, and check
    the affected pages/responsive behavior) before pushing.
  - Use a feature branch per in-progress feature/project rather than committing directly to
    `main`; explain the branch → commit → push → merge/PR workflow as it comes up, since learning
    this is an explicit goal, not just a means to an end.
  - Currently the repo has been pushed to `main` directly (see git log) — moving toward a
    branch-based workflow is a deliberate change, not a correction of something broken.
