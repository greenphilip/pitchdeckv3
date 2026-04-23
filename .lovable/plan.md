

## Add the official Glacier logo to every slide

Replace the placeholder `GlacierMark` glyph with the official 4-color vertical logo asset across the deck — large and centered on Slide 1, small and consistent on Slides 2–11.

### 1. Add the logo asset
- Copy `user-uploads://glacier_logo_vertical_4C.svg` to `src/assets/glacier-logo.svg`.
- Import it in components as a static URL: `import glacierLogo from "@/assets/glacier-logo.svg"`.
- The SVG ships with brand colors baked in (Dark Blue, Dark Teal, Mint, Blue) — it sits cleanly on the Navy background, no recoloring needed.

### 2. Slide 1 — make it the hero
Replace the small `GlacierMark` glyph + "Glacier" wordmark line with the **full vertical logo, large and present**.
- Render `<img src={glacierLogo} />` at `height: 280px` (desktop) / `180px` (mobile), `width: auto`.
- Keep the existing fade-in animation (`opacity 0→1`, 0.5s).
- Drop the separate `<GlacierMark>` + "Glacier" `<span>` row (the wordmark is part of the logo now).
- Keep the "ESG Reporting — Fast, Defensible" tagline below it, with a slightly larger gap (`gap: 20px`) since the logo is the dominant element.
- Reduce the spacer below the top anchor from `140px` → `80px` to keep the headline well-positioned given the larger logo.

### 3. Slides 2–11 — small persistent mark
Add a small logo to **every other slide** in a consistent fixed position so it reads as branding, not content.
- Place inside `SlideFrame` (best done by adding an optional `showLogo` prop, default `true`, and rendering it absolutely positioned in `SlideFrame.tsx`).
- Position: `top: 32px, left: 32px`, `zIndex: 2`, `opacity: 0.85`.
- Size: `height: 44px, width: auto`.
- On Slide 1, pass `showLogo={false}` (the hero logo replaces it).
- On technical slides the existing top-right "SLIDE N / 10" indicator stays — logo on the left balances it visually.

### 4. Files touched
- `src/assets/glacier-logo.svg` (new — copy of upload)
- `src/components/SlideFrame.tsx` (new `showLogo` prop + corner mark rendering)
- `src/slides/Slide1.tsx` (swap glyph + wordmark for hero logo, pass `showLogo={false}`, remove unused `GlacierMark` import)

### 5. Not touched
- `src/components/GlacierMark.tsx` stays in the codebase (unused now, harmless to keep).
- All other slides require no edits — the logo appears automatically via SlideFrame.
- No changes to navigation, animations, color palette, copy, or layout of slides 2–11.

