# maxstruever.com

Personal site for Max Struever. Static SPA on Netlify, deployed from GitHub `madmaxlax/maxstruever-site`.

## Stack

- Node 26 LTS (`.nvmrc`), npm (`package-lock.json`)
- Vite 8, React 19, React Router 8 in declarative mode, imported from `react-router`
- MUI 9 with CSS variables and light/dark `colorSchemes` in `src/theme.ts`. Fonts are Fraunces for headings and Inter for body, via Fontsource.
- TypeScript 7, oxlint, Prettier 3

Rebuilt on 2026-11-06 from a 2019 Material Kit React / CRA / MUI v4 template. The old code is in git history before that date.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Typecheck and build to `dist/` |
| `npm run preview` | Serve the production build on port 3000 |
| `npm run lint` / `npm run format` | oxlint / Prettier |

Non-interactive shells need `zsh -i -c "fnm use 26 && npm run ..."`. CI in `.github/workflows/ci.yml` runs `npm ci` and `npm run build` on pushes and PRs to `main` and `develop`.

## Layout

- `src/pages/` has one file per route, including `/privacy-and-terms` and `/shruggie/privacy` for the Shruggie Chrome extension listing. Routes are in `src/App.tsx`. Trello-backed pages are lazy-loaded.
- `src/components/` holds the shared layout: `SiteHeader`, `SiteFooter`, `PageHero`, `PublicationCard`. `SiteHeader` is a priority+ nav. It folds links into "More" as width shrinks and switches to a drawer below `sm`.
- `index.html` has an inline script that applies the saved `mui-mode` color scheme before the bundle loads.
- `src/data/publications.ts` is the publications list. To add one, add an object and drop a 1200x630 image in `public/img/publications/`. The home page shows the newest three.
- `src/data/site.ts` holds nav items, social links and hero photos.
- `src/lib/trello.ts` fetches content. Portfolio and Referrals read public Trello board JSON at runtime. Edit content on Trello, not in code.

## Deploy

- `netlify.toml` pins the build command, `publish = "dist"` and `NODE_VERSION`. It overrides the Netlify UI settings.
- `main` deploys to production. `develop` and PRs get deploy previews.
- `public/_redirects` provides the SPA fallback.

## Notes

- Google Analytics UA-9932775-5 was removed in the rebuild because Universal Analytics no longer collects data. Add GA4 or Plausible in `index.html` if analytics are wanted.
- The Fortune thumbnails in `public/img/publications/` are Getty stock pulled from the article og:image. Swap them for generated tiles if licensing is a concern.
