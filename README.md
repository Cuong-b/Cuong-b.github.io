# Cuong-b.github.io

Cuong Bui's personal portfolio site — a lightweight hub that introduces who he is and presents
his projects to employers and visitors. Built as a static site with vanilla HTML, CSS, and
JavaScript (ES modules), no build step, and hosted on GitHub Pages.

**Live:** https://cuong-b.github.io/

## Tech stack

- Plain HTML/CSS/JS — no framework, no bundler, no package manager
- ES modules for JS (`js/`), loaded directly by the browser
- A hand-built "drafting-paper" design system (`css/styles.css`) with a title-block-style navbar
- Hosted on GitHub Pages

## Structure

- `index.html`, `about.html`, `projects.html`, `resume.html`, `contact.html` — top-level pages
- `seniorthesis.html`, `woodworking.html`, `gravitationallensing.html` — dedicated project pages
- `pages/projects/project-template.html` — template for cloning new project pages
- `css/` — stylesheets (`styles.css` for the site-wide theme, `project.css` for project pages)
- `js/` — rendering/state logic (`render.js`, `state.js`, etc.) and reusable UI pieces
  (`js/components/`, `js/background/`)
- `data/` — content registries: `projects.js` (project cards), `pageLinks.js` (nav),
  `projectFilters.js` (filter config)
- `tests/` — unit tests (run with `node --test tests/*.test.js`)

## Running locally

No build step — just serve the repo root and open it in a browser:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding a new project

1. Add an entry to `data/projects.js` (id, title, subtitle, categories, description,
   technologies, image, page, github, demo, file, featured, display).
2. Clone `pages/projects/project-template.html` for the project's dedicated page.
3. Wire up its assets (images, files, links).

## Tests

```bash
node --test tests/*.test.js
```
