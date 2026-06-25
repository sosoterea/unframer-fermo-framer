# Project 1 — Fermo · Framer Template Reconstruction

Faithful reconstruction of the **Fermo** portfolio template (by Federico Esposito)
assembled from the Framer → "Design to AI" / unframer component exports and running
on **React + Vite**.

This project intentionally keeps the **exported Framer runtime** (`framer-motion` +
the bundled `_framer-runtime.js`) so the rendering, animations and interactions match
the original published site as closely as possible. The fully independent, runtime-free
rewrite lives in `../project-2-react-typescript-clone`.

## Stack

- React 18 + Vite 5
- `framer-motion` (peer dependency of the exports)
- The self-contained Framer runtime bundled with the exports (no `framer` package)

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview
```

## Structure

```
src/
├── main.jsx              # mounts <App/> inside the runtime FetchClientProvider
├── App.jsx               # page composition (island, nav, sections, footer)
├── index.css            # page shell + layout + export-runtime fixes
├── assets/              # avatar + project images + monitor-stand SVG (from Framer CDN)
└── framer/              # the exported components (verbatim) + shared runtime
    ├── _framer-runtime.js     # bundled Framer runtime (shared by all sections)
    ├── tokens.css             # merged design tokens (colors, fonts, text presets)
    ├── DynamicInfo.js         # top dynamic-island (avatar, clock, weather, status)
    ├── Navigation.js          # left rail / mobile bottom pill (1–4 → Home/Experience/About/Works)
    ├── Hero.js                # "Hello 👋, I'm James Doe." + intro + CTAs
    ├── Experience.js          # "Now" block + CV / experience CTAs
    ├── Works.js               # project showcase in a Studio-Display mockup
    ├── Footer.js              # location, theme switch, copyright, credits
    ├── PageDivider.js         # 1px hairline divider
    ├── LayoutIsland.tsx       # isolates each section's framer-motion LayoutGroup
    └── ResponsiveWrapper.tsx  # viewport → Framer variant switching
```

## How the page is assembled

- **Dynamic island** (`DynamicInfo`) — fixed, flush to the top edge; live clock; **click to
  expand** to reveal weather + availability status.
- **Navigation** (`Navigation`) — fixed left rail flush to the left edge, collapsed to the
  number badges 1–4; **hover expands** it to the full Home / Experience / About / Works
  labels. Below 810px it switches to the horizontal "Navigation mobile" bottom pill.
- **Content column** — centred 640px measure: `Hero` → divider → `Experience` → divider → `Works`.
- **Footer** (`Footer`) — responsive variant (Desktop / Desktop L / Tablet / Phone) with the
  working light/dark theme switch.

Each section is wrapped in `LayoutIsland` so repeated internal `layoutId`s (the two dividers,
the shared CTA button in Hero/Experience) don't collide under framer-motion's shared-layout.

## Integration notes (export-runtime fidelity)

The Design-to-AI exports are individual components, not a full page export, so a couple of
page-level concerns the published Framer site handled are reproduced here:

1. **Runtime providers** — the exports call `usePrefetch` / data hooks, so `<App/>` is mounted
   inside the runtime's `FetchClientProvider` (see `main.jsx`).
2. **Edge attachment** — the island and nav build their concave "connector" corners from solid
   offset box-shadows that only blend when the component is flush against the viewport edge.
   They are positioned at `top:0` / `left:0` accordingly, and the standalone-only stray shadow
   tabs are neutralised in `index.css`.
3. **Collapsed rail** — the nav frame is pinned to its 32px intrinsic width so each button keeps
   only its number badge on-screen (labels overflow off the left edge) until hover, exactly like
   the published site.

## Validated breakpoints

Desktop 2560 / 1920 / 1728 / 1440, tablet 1024 / 810 / 768, mobile 480 / 430 / 390 — compared
against `https://fermo.framer.website/` and the supplied reference screenshots.
