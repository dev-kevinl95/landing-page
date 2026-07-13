# AGENTS.md — Landing Page

Minimal [Astro](https://astro.build) 7 project. Single page, no integrations, no tests.

## Commands

| Command | Action |
| -------- | -------- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

## Structure

- **Pages** — `src/pages/` (`.astro` or `.md`), each file maps to a route
- **Components** — `src/components/` (any framework or plain `.astro`)
- **Static assets** — `public/`
- **Build output** — `dist/` (gitignored)
- **Generated types** — `.astro/` (gitignored)

## Conventions

- TypeScript strict mode via `astro/tsconfigs/strict`
- Node >=22.12.0 required
- No linter, formatter, or test suite configured
- VS Code: install `astro-build.astro-vscode` extension
