# AGENTS.md — Landing Page

[Astro](https://astro.build) 7 portfolio landing page. Single page, no integrations, no tests.

## Commands

| Command | Action |
| -------- | -------- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

## Structure

- **Pages** — `src/pages/index.astro` (uses `Layout.astro`)
- **Layouts** — `src/layouts/Layout.astro` (html, head, Header, slot, Footer)
- **Components** — `src/components/` (`.astro`)
- **Data** — `src/data/` (`skills.ts`, `projects.ts`, `socials.ts`)
- **Styles** — `src/styles/global.css` (reset + font-family)
- **Assets** — `src/assets/images/` (static image imports)
- **Static** — `public/` (favicon)
- **Build output** — `dist/` (gitignored)
- **Generated types** — `.astro/` (gitignored)

## Data files

| File | Purpose |
| ------ | --------- |
| `src/data/skills.ts` | 10 tech skills + `skillMap` for slug-based icon lookup |
| `src/data/projects.ts` | 3 sample projects (id, title, description, techs, githubUrl) |
| `src/data/socials.ts` | `GITHUB_URL`, `LINKEDIN_URL`, `EMAIL`, `CV_URL` |

## Design conventions

- **Typography**: Space Grotesk (`h1`–`h6`) + Inter (body), loaded via Google Fonts in Layout
- **Colors**: Violet `#6366f1`, Blue `#3b82f6`, Cyan `#06b6d4`, Slate neutrals
- **Glass cards**: `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)` + `1px solid rgba(226,232,240,0.8)`
- **Gradients**: `linear-gradient(135deg, #6366f1, #3b82f6)` for titles, buttons, accent lines
- **Buttons**: Gradient background `#6366f1 → #3b82f6` with glow on hover
- **Chips (Skills)**: Pill-shaped flex-wrap chips with brand color on hover (`--chip-color`)
- **Hover effects**: `translateY(-1px)` or `(-2px)` with shadow/glow transitions
- **Hero**: Animated gradient background, glass buttons (primary = white solid), blob decorations
- **Header**: Glass sticky bar with underline-from-center animation on nav links
- **Styles**: Scoped `<style>` inside each component. No global CSS besides reset + font.

## Conventions

- TypeScript strict mode via `astro/tsconfigs/strict`
- Node >=22.12.0 required
- No linter, formatter, or test suite configured
- VS Code: install `astro-build.astro-vscode` extension
- Web3Forms for contact form; access key via `PUBLIC_WEB3FORMS_KEY` env var
- Script in Contact uses JSDoc annotations (not `<script lang="ts">`) to avoid VS Code Astro extension false errors
- Astro 7: image imports from `src/assets/` return `ImageMetadata` objects; use `image.src ?? image` in `<img>` tags
