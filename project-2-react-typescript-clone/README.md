# Fermo — React + Vite + TypeScript Clone

A fully independent, framework-free reconstruction of the **Fermo** portfolio
(by Federico Esposito) built from scratch in **React + Vite + TypeScript**.

This is **Project 2** of the conversion. Unlike the Framer-runtime reconstruction
(Project 1), this version contains **no Framer runtime, no Unframer runtime, no
property controls, and no Framer-generated code**. Every section, animation, and
interaction is reimplemented with clean, typed, maintainable components.

## Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** for dev/build
- **Framer Motion** for entrance/scroll reveals, the dynamic-island spring, the
  nav expand, and the Works crossfade (used purely as an animation library)
- **@fontsource-variable/inter** for the Inter / Inter Display typefaces
- **@phosphor-icons/react** for inline icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # production build -> dist/
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
```

## Architecture

```
src/
├── assets/        # avatar, project shots, monitor-stand svg
├── components/    # reusable UI: Button, Divider, Reveal, ThemeToggle, icons
├── sections/      # DynamicIsland, SideNav, Hero, Now, Works, Footer
├── pages/         # Home (page composition)
├── hooks/         # useClock, useTheme, useMediaQuery
├── utils/         # smooth scroll helper
├── styles/        # tokens.css (design tokens), global.css (reset + page shell)
└── types/         # shared TypeScript types
```

- **Design tokens** (colors with a full dark-mode map, typography, spacing,
  radius, shadows, breakpoints) live in `styles/tokens.css` and drive every
  component via CSS variables.
- **Component styles** are colocated CSS Modules (`*.module.css`).
- All content (profile, nav, hero, experience, works, footer) is centralized and
  typed in `data/content.ts`, so the site is fully customizable from one file.

## Features & interactions (parity with the original)

- **Dynamic island** — collapsed avatar + name + live clock; **click** (or
  Enter/Space) expands to reveal location/weather/status.
- **Side navigation** — collapses to numbered badges (1–4), **hover-expands** to
  labels on desktop, and becomes a fixed bottom pill below 810px. Keyboard
  shortcuts `1`–`4` jump to each section.
- **Light / dark theme** — toggle in the footer, persisted to `localStorage` and
  respecting `prefers-color-scheme` on first load.
- **Works** — auto-cycling Studio-Display showcase with a crossfade transition.
- **Scroll reveals** — entrance animations that respect `prefers-reduced-motion`.
- **Responsive** — validated against the original across desktop (2560 → 1440),
  tablet (1024 / 810 / 768) and mobile (480 / 430 / 390).
