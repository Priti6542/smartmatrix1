# SmartMatrix Frontend

Marketing site for SmartMatrix Digital Services Pvt. Ltd.

**Stack:** React 19 · Vite 6 · TypeScript (strict) · Tailwind CSS 4 · React Router 7 · MUI 6 · ESLint 9

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the EmailJS values
npm run dev
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR                      |
| `npm run typecheck` | `tsc -b` across both project configs          |
| `npm run build`     | Typecheck, then production build into `dist/` |
| `npm run lint`      | ESLint (type-aware rules enabled)             |
| `npm run preview`   | Serve the built `dist/` locally               |

## Environment

Only `VITE_*` variables reach the browser bundle. The contact form needs the
three EmailJS values listed in [.env.example](.env.example); they are read
through [src/config/env.ts](src/config/env.ts), which throws a named error if
one is missing rather than failing silently at submit time.

## Project layout

```text
src/
├── app/            App shell: providers, route table, root component
├── assets/         Images, icons, and video imported by components
├── components/
│   ├── cards/      Reusable cards (service, industry, stat, icon+info)
│   ├── common/     Small cross-cutting pieces (scroll reset, loader)
│   ├── layout/     Navbar, footer, and the layout that frames every page
│   └── sections/   Reusable page sections (hero, card grid)
├── config/         Typed environment access
├── constants/      Routes, navigation, site copy, service and industry lists
├── features/       One folder per page area: `data.ts` + `components/`
├── hooks/          useParallax, useScrollAnimation, useScrollToTop
├── pages/          One thin component per route, composed from features
├── styles/         globals.css — Tailwind entry, breakpoint variants, keyframes
├── types/          Shared domain types
└── utils/          Small helpers (cx, slugify, radialTransform)
```

### Conventions

- **`.tsx`** for anything containing JSX, **`.ts`** for everything else
  (data, constants, hooks without JSX, types, config, utilities).
- **Routes** come from `ROUTES` in
  [src/constants/routes.ts](src/constants/routes.ts) — never hardcode a path.
  `LEGACY_ROUTE_REDIRECTS` in the same file keeps older URLs working.
- **Page content** lives in the owning feature's `data.ts`, typed against
  `src/types/`. Components render data; they do not embed copy.
- **Styling is Tailwind utilities only.** There are no component stylesheets;
  [src/styles/globals.css](src/styles/globals.css) is the single CSS file. It
  holds the Tailwind entry, the global reset, and the two things utilities
  cannot express:
  - **Breakpoint variants** — `upto-1400` … `upto-320`, `from-1200`,
    `from-1400`, `wide-desktop`, `landscape-short`. The site was written
    against inclusive `max-width` queries, so prefer these over Tailwind's own
    exclusive `max-*` variants (`max-md:` skips a viewport sitting exactly on
    768px, which is iPad portrait). Narrower variants are declared last and so
    win, matching `max-width` cascade order.
  - **`@keyframes` plus an `--animate-*` token per animation.** Add both, then
    use the generated `animate-<name>` utility; never hand-write an
    `animation` shorthand in a component.
- The `brand-*` palette lives in [tailwind.config.ts](tailwind.config.ts),
  loaded via the `@config` directive at the top of `globals.css`.
- Styling a **MUI component** needs Tailwind's `!` modifier (`px-5!`) for any
  property MUI also sets, since Emotion injects its styles after the
  stylesheet and would otherwise win.
- **TypeScript is strict**, with `noUnusedLocals`, `noUnusedParameters`, and
  `verbatimModuleSyntax` on. Fix type errors rather than relaxing the config.
