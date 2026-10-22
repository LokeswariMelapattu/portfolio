# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for Lokeswari Melapattu — single-page, dark-themed, built from resume content with no invented facts. React 19 + TypeScript + Vite, CSS Modules only (no CSS framework), no backend, no test framework.

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build      # tsc -b (type-check) && vite build → dist/
npm run lint        # oxlint (config: .oxlintrc.json)
npm run preview      # serve the production build locally
```

There is no test suite — do not add one unless asked. `npm run build` (which type-checks via `tsc -b`) and `npm run lint` are the correctness gates for any change.

## Architecture

The site is one long scrolling page (`src/App.tsx`) that mounts a fixed sequence of section components: Hero → About → Skills → Experience → Projects → Education → Thesis → Contact, wrapped by `Nav`, `CursorFollower`, and `Footer`.

**Content is fully separated from presentation.** All copy and structured data lives in `src/data/*.ts` (`profile`, `skills`, `experience`, `projects`, `education`, `thesis`), typed against the interfaces in `src/types/content.ts`. Editing a bullet point, adding a project, or updating a date should always be a one-file change in `src/data/`, never a change to a section component's JSX. When adding a new data shape, extend `src/types/content.ts` first.

**`src/sections/`** holds one component per page section; each pairs a `.tsx` with a same-named `.module.css`. Sections render their data through shared primitives in **`src/components/`** (`Section`, `Container`, `Badge`, `Button`, `ProjectCard`, `TimelineItem`, `Avatar`, `Nav`, `Footer`, `CursorFollower`), also each paired with a `.module.css`.

**Icons** (`src/components/Icon.tsx`) are a single inline-SVG component driven by an `IconName` union and a `paths` record — there is no icon library. Adding an icon means adding a name to the union and a path string to the map.

**Design tokens** live in `src/styles/tokens.css` as CSS custom properties (color, type scale, spacing, radii, shadows, motion) consumed by every CSS Module; `src/styles/global.css` holds the reset and base styles. Prefer referencing existing tokens (`--color-*`, `--space-*`, `--fs-*`, `--radius-*`, etc.) over introducing new hard-coded values.

**Scroll behavior** is handled by two hooks: `useScrollReveal` (IntersectionObserver-driven fade/slide-in on scroll, respects `prefers-reduced-motion`) and `useActiveSection`/`useScrollProgress` (nav highlighting and scroll progress). Section and card components typically attach `useScrollReveal`'s ref and a `reveal` class to their root element.

**Deployment** is GitHub Pages via `.github/workflows/deploy.yml`, triggered on push to `main`: `npm ci` → `npm run lint` → `npm run build` → upload `dist/` → deploy. Vite's `base` in `vite.config.ts` is hard-coded to `/my-portfolio/` to match the GitHub Pages repo path — if the repo is ever renamed, that value must change too.

## Known gaps (see README "Outstanding items")

- `public/Lokeswari Melapattu_Resume.pdf` does not exist; the Hero's "Download Resume" button links to `/Lokeswari Melapattu_Resume.pdf` and will 404 until the file is added.
- The Hero avatar is an initials-based placeholder (`src/components/Avatar.tsx`) by design, not a missing feature — only replace it with a real `<img>` if asked.
- No OG/social-preview image is wired into `index.html`.
