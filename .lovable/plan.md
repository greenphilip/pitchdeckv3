

# Slide 3 — Layout Centering, Larger Titles, Bigger Gaps

## What gets fixed

**File touched:** `/src/slides/Slide3.tsx` (rewrite). Nothing else.

**Three changes:**

1. **Centered layout** — Add `alignItems: "center"` to the outer flex container (matches Slides 1 & 2 structure). All children remain full-width within the centered container.

2. **Bigger card titles** — Short headline font-size increases from `clamp(14px, 1.6vw, 20px)` to `clamp(20px, 2.2vw, 28px)` (line-height scales accordingly 1.25 → 1.2). More prominent hierarchy.

3. **Larger gaps** — All vertical spacing increases ~50%:
   - Eyebrow → Headline: `clamp(8px, 1vh, 16px)` → `clamp(12px, 2vh, 24px)`
   - Headline → Subhead: `clamp(12px, 2vh, 24px)` → `clamp(18px, 3vh, 32px)`
   - Subhead → Grid: `clamp(24px, 4vh, 56px)` → `clamp(36px, 6vh, 80px)`
   - Grid → Thesis: `clamp(24px, 4vh, 56px)` → `clamp(36px, 6vh, 80px)`

   Horizontal card gap: `clamp(16px, 2vw, 32px)` → `clamp(24px, 3vw, 48px)`

## Guardrails

Do not touch: SlideFrame, useIsMobile, navigation, transitions, theme tokens, or other slides.

## Verification

- Desktop: All content centered horizontally. Cards feel spacious, titles command attention.
- Mobile (390×724): Single-column stack centered, no overflow, gaps proportionally scaled.
- Console clean.

