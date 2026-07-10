# Architectural Patterns

## Standalone components only

Every component in `src/app/components/` and `src/app/pages/` is declared with `standalone: true` and lists its own `imports` array — there is no shared `NgModule` for features. Examples: `src/app/components/hero/hero.component.ts:6`, `src/app/components/header/header.component.ts:11`, `src/app/pages/contact/contact.component.ts:6`.

Several `*.module.ts` files still exist next to standalone components (`src/app/components/hero/hero.module.ts`, `src/app/components/metrics/metrics.module.ts`, `src/app/components/programs/programs.module.ts`, `src/app/components/testimonials/testimonials.module.ts`), but their contents are entirely commented out and unused — they are leftovers from before the migration to standalone components. Do not use them as a template; when adding a new component, follow the standalone pattern only.

## Route-level code splitting

Every entry in `src/app/app.routes.ts` uses `loadComponent: () => import('./path').then(m => m.XComponent)` rather than eager imports, so each page ships as its own chunk. Follow this pattern for any new routed page.

## Single injectable data service, `$`-suffixed Observable + async pipe

`src/app/data.service.ts` is one `providedIn: 'root'` service exposing methods like `getMetrics()` (`data.service.ts:7-13`), `getPrograms()` (`data.service.ts:15-21`), and `getTestimonials()` (`data.service.ts:23-38`), each returning `Observable<any[]>` built from a hardcoded array via RxJS `of()`. There is no HTTP backend yet.

Components that need this data follow the same shape, e.g. `src/app/components/metrics/metrics.component.ts`:
- Inject `DataService` through the constructor (`metrics.component.ts:21`).
- Declare a `name$: Observable<any[]>` field and assign it in `ngOnInit` (`metrics.component.ts:19,23-25`), not in the constructor.
- Consume the observable in the template with the `async` pipe rather than subscribing manually.

Follow this same constructor-injection + `$`-suffixed field + `async` pipe pattern for any new component that needs `DataService` data.

## Per-component Angular Material imports

There is no shared Material module. Each component imports only the specific Material modules it uses directly in its own `imports` array, e.g. `MatIconModule` in `src/app/components/metrics/metrics.component.ts:6`, and `MatButtonModule` + `MatIconModule` in `src/app/components/header/header.component.ts:3-5`. Follow this per-component pattern rather than introducing a shared Material barrel module.

## Pages vs. components split

- `src/app/pages/*` holds one container per route registered in `src/app/app.routes.ts` — these are the components lazy-loaded by the router.
- `src/app/components/*` holds smaller reusable pieces (header, footer, hero, metrics, programs, testimonial(s)) composed together by page-level components such as `src/app/home/home.component.ts`.
- Every component/page follows the same four-file layout: `.component.ts`, `.component.html`, `.component.scss`, `.component.spec.ts`.

## Global layout shell

`src/app/app.component.ts:17-21` wraps every routed page with a persistent `<app-header>` above and `<app-footer>` below `<router-outlet>`. Page and feature components should not render their own header/footer.

## Known inconsistency: duplicate routing definitions

`src/app/app-routing.module.ts` defines a second, `NgModule`-based `Routes` array that overlaps with `src/app/app.routes.ts` but is never imported into `src/app/app.config.ts` (which wires up `src/app/app.routes.ts` via `provideRouter(routes)` at `app.config.ts:9`). Treat `src/app/app.routes.ts` as the single source of truth; `app-routing.module.ts` is dead code left over from an earlier NgModule-based router setup.
