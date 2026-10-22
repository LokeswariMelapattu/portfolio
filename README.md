# Lokeswari Melapattu — Developer Portfolio

A personal portfolio site built with React, TypeScript, and Vite. Single-page, dark-themed, built from resume content with no invented facts.

## Stack

- **React 19 + TypeScript + Vite** — component-based, static build
- **CSS Modules + design tokens** (`src/styles/tokens.css`) — no CSS framework
- **oxlint** for linting, TypeScript strict mode for type safety
- No backend, no test framework — a static content site doesn't need either

## Project structure

```text
src/
├─ data/        # typed content (profile, skills, experience, projects, education, thesis)
├─ types/       # shared content interfaces
├─ sections/    # one component per page section
├─ components/  # shared primitives (Nav, Footer, Section, Button, Badge, ProjectCard, ...)
├─ hooks/       # useScrollReveal, useActiveSection
└─ styles/      # tokens.css (design tokens), global.css (reset + base styles)
```

All page content lives in `src/data/*.ts` — editing a bullet point, adding a project, or updating a date is a one-file change with compiler-checked shape (`src/types/content.ts`).

## Local development

```bash
npm install
npm run dev       # starts Vite dev server
npm run build      # type-checks and builds to dist/
npm run lint        # runs oxlint
npm run preview      # serves the production build locally
```

## Outstanding items (need to be supplied before this is fully launch-ready)

- **`public/Lokeswari Melapattu_Resume.pdf`** — does not exist yet. The "Download Resume" button in the Hero and points at `/Lokeswari Melapattu_Resume.pdf`; it will 404 until you add the file at that path.
- **Professional photo** — not supplied. The Hero currently shows an initials-based placeholder avatar (`src/components/Avatar.tsx`) by design. Swap it for an `<img>` if you'd like a real photo.
- **OG/social-preview image** — omitted from `index.html`'s meta tags. Add a 1200×630 image at `public/og-image.png` and add `<meta property="og:image" content="/my-portfolio/og-image.png" />` to `index.html` if you want rich social link previews.

## Deployment (GitHub Pages)

This repo is set up to deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

**One-time setup required in GitHub** (cannot be scripted):

1. Push this repo to GitHub as `my-portfolio` under your account (the Vite `base` path in `vite.config.ts` is set to `/my-portfolio/` — if you use a different repo name, update that value to match).
2. In the repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. The live URL will be `https://<your-github-username>.github.io/my-portfolio/`.
