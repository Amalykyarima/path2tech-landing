# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Path2tech-landing is the marketing/informational website for Path2Tech: a home page plus static content pages for programs, communities, events, donations, impact stats, and contact. There is no backend — all content served to components today is hardcoded (`src/app/data.service.ts`).

## Tech Stack

- Angular 17.3 (standalone components, no NgModules for features)
- Angular Material 17 + Angular CDK
- RxJS
- SCSS (Angular Material `indigo-pink` prebuilt theme)
- AOS (`aos` package) for scroll animations
- TypeScript 5.4, strict mode (`tsconfig.json`)
- Karma + Jasmine for unit tests

## Key Directories

- `src/app/pages/` — one folder per routed page (`donate`, `programs`, `contact`, `impact`, `communities`, `events`, `join-our-community`, `explore-communities`, `about-us`). Each route in `src/app/app.routes.ts` lazy-loads one of these.
- `src/app/components/` — reusable UI pieces composed into pages (`header`, `footer`, `hero`, `metrics`, `programs`, `testimonial`, `testimonials`).
- `src/app/home/` — the `/` route, composes several `components/`.
- `src/app/data.service.ts` — single injectable data source for the whole app.
- `src/assets/images/`, `src/assets/team/`, `src/assets/communities/` — static image assets.
- `src/assets/styles/variables.scss`, `src/assets/styles/_pages.scss` — shared SCSS partials, available globally via `stylePreprocessorOptions` in `angular.json:20-22`.

## Build & Test Commands

- `npm start` (`ng serve`) — dev server at `http://localhost:4200`
- `npm run build` (`ng build`) — production build, output to `dist/`
- `npm run watch` — development-config build with `--watch`
- `npm test` (`ng test`) — run the full Karma/Jasmine suite
- `ng test --include='**/hero.component.spec.ts'` — run a single spec file
- `ng deploy` — publishes `dist/` to GitHub Pages via `angular-cli-ghpages` (target defined in `angular.json:105-107`)

Production deploys to Azure Static Web Apps happen automatically on push to `main` via `.github/workflows/azure-static-web-apps-witty-smoke-0efa1a210.yml`, which builds and uploads `dist/browser`.

## Architecture Notes

- Routing is defined in `src/app/app.routes.ts` and wired up in `src/app/app.config.ts:9` via `provideRouter(routes)`. `src/app/app-routing.module.ts` defines a second, overlapping NgModule-style route table but is never imported anywhere — it is dead code. Only edit `src/app/app.routes.ts` when adding or changing routes.
- `src/app/app.component.ts:17-21` renders `<app-header>` and `<app-footer>` around every route's `<router-outlet>`, so individual pages/components should not render their own header or footer.

## Additional Documentation

- `.claude/docs/architectural_patterns.md` — component conventions, data-flow pattern, and known inconsistencies to be aware of before editing routing or adding a new page/component.
