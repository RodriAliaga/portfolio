# Portfolio (Astro)

A clean, fast, and accessible portfolio starter built with Astro and Tailwind CSS. It focuses on strong UI/UX defaults: content-first layout, good typography, theming with dark mode, semantic HTML, and performant defaults (no client JS by default, minimal hydration).

## Quick start

- Prerequisites: Node 18+ and npm/pnpm/yarn
- Install deps:
  - `npm install`
- Run locally:
  - `npm run dev`
- Build for production:
  - `npm run build`
  - `npm run preview`

## Configure

- Set your site URL in `astro.config.mjs` (`site: 'https://your-domain.com'`) to enable correct sitemap and canonical URLs.
- Update contact links and email in `src/pages/contact.astro`.
- Replace the logo in `public/favicon.svg` and update manifest if desired.
- Edit copy and your name in `src/pages/*.astro` and `Footer`.
- Add projects in `src/data/projects.ts` (or evolve to Markdown/content collections later).

## Structure

- `src/layouts/BaseLayout.astro`: Global layout, metadata, header/footer, theme.
- `src/components/*`: Header, Footer, ThemeToggle, SEO, ProjectCard.
- `src/pages/*`: Home, Projects, About, Contact, 404.
- `src/styles/globals.css`: Design tokens, Tailwind layers, utilities.

## UI/UX highlights

- Accessible navigation with skip link and focus styles.
- Dark mode toggle that respects OS preference, persisted with `localStorage`.
- Tight content width (`max-w-6xl`), generous spacing, and color contrast.
- Minimal client JS — only for theme toggle and mobile menu.
- Responsive cards and buttons with clear affordances.

## Next steps (nice-to-haves)

- Add analytics (e.g., Plausible) via a tiny script tag.
- Add `@astrojs/image` for responsive image optimization.
- Swap static data for content collections (`@astrojs/content`).
- Add RSS/Blog if you plan to write.
- Hook up the contact form to a backend or a forms service.

---

Licensed for personal use. Replace content and ship!

