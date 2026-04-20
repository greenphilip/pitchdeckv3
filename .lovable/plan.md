

# Slide 3 — Audit & Polish Pass

## Issues to fix

1. **Card header (mono eyebrow) too small** — currently `clamp(10px, 0.9vw, 11px)`. At 2181px viewport this caps at 11px which reads as a label, not a header. Bumping to `clamp(12px, 1.1vw, 16px)` and increasing font-weight from default to 600 gives it presence.

2. **Card footer gap too tight** — the `paddingTop` above the bottom tag border is `clamp(6px, 1vh, 10px)`. Bumping to `clamp(14px, 2vh, 22px)` and increasing the inner card vertical gap from `clamp(10px, 1.5vh, 16px)` to `clamp(14px, 2vh, 20px)` gives the bottom tag breathing room.

3. **Centering audit — what's NOT centered today:**
   - Header block (`maxWidth min(1400px, 100%)`) is centered as a block, but its children (eyebrow, headline, subhead) are `text-align: left` inside it → reads as left-aligned on wide viewports.
   - Thesis stamp uses `display: flex` with the Mint bar on the left → entire stamp is left-aligned within the slide because there's no `marginLeft/Right: auto` or `alignSelf: center` on a centered container.
   - Grid is centered correctly.

   **Fix:** Make the header block content `text-align: center` and center the eyebrow's flex/inline placement. For the thesis stamp, wrap it so the stamp itself is centered as a block (`marginLeft/Right: auto`), keeping the Mint bar on the left of the text but the whole composition centered on the slide.

## Changes (single file: `/src/slides/Slide3.tsx`)

| Element | Before | After |
|---|---|---|
| Header eyebrow | left-aligned | `textAlign: center`, centered block |
| Headline | `textAlign: left` | `textAlign: center` |
| Subhead | `margin: 0`, left | `margin: 0 auto`, `textAlign: center` |
| Card mono header | `clamp(10px, 0.9vw, 11px)` | `clamp(12px, 1.1vw, 16px)`, weight 600 |
| Card inner gap | `clamp(10px, 1.5vh, 16px)` | `clamp(14px, 2vh, 20px)` |
| Card footer paddingTop | `clamp(6px, 1vh, 10px)` | `clamp(14px, 2vh, 22px)` |
| Thesis stamp wrapper | implicit left | `marginLeft/Right: auto` to center as a block |

## Guardrails

Do not touch SlideFrame, useIsMobile, navigation, transitions, theme tokens, animation timings, or other slides. Card body text, icon size, and short headline size stay as they are (already correct from last pass).

## Verification

- Desktop (2181px and 1440px): eyebrow / headline / subhead visually centered above the grid. Thesis stamp horizontally centered as a unit. Card mono headers read with clear weight. Footer tag has visible breathing room above its top border.
- Mobile (390×724): centered alignment holds, no overflow, gaps proportional.
- Console clean.

