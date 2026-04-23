

## Lock the deck to a fixed PowerPoint canvas (1920×1080)

### Why
Right now every slide is `100vw × 100vh` and uses `clamp()` everywhere, so layouts shift at every screen size — text wraps differently, gaps shrink, graphics overflow. PowerPoint avoids this by authoring at a fixed resolution and scaling the whole slide as one unit. We'll do the same. Once locked, what you see in the editor is exactly what you'll see when projected.

### Target format
**1920 × 1080 (16:9)** — the standard PowerPoint widescreen size. Every slide is authored at these exact pixel dimensions and scaled uniformly to fit the browser window (or fullscreen projector) with letterboxing if the screen aspect differs.

### Approach

**1. New `ScaledSlide` wrapper (`src/components/ScaledSlide.tsx`)**
- Outer container: full viewport, black background, `overflow: hidden`, `position: relative`, flex-centered.
- Inner stage: absolutely positioned `1920 × 1080` element, centered via `left: 50%; top: 50%; margin-left: -960px; margin-top: -540px`, with `transform: scale(var(--scale))` and `transform-origin: center center`.
- A `ResizeObserver` on the outer container computes `scale = Math.min(width / 1920, height / 1080)` and writes it to the CSS variable. No re-renders, no layout thrash.
- `Presentation.tsx` wraps the active slide in `<ScaledSlide>` so the chevrons, dots, and overview UI stay in real viewport pixels (they don't get scaled).

**2. Rework `SlideFrame.tsx` to a fixed canvas**
- Replace `width: 100vw; height: 100vh` with `width: 1920px; height: 1080px`.
- Replace `padding: clamp(32px, 5vw, 80px)` with a fixed padding (`80px`).
- Replace the inner content cap of `maxWidth: 1700` with the full `1760px` usable width (1920 − 2×80).
- Slide-number indicator, hairline, grid overlay, glows — all keep working, just at fixed coordinates now.

**3. Convert all `clamp()` typography and gaps to fixed pixels**
- Every slide currently uses `clamp(min, vw, max)` for fonts and `clamp(min, vh, max)` for gaps. At a fixed canvas these are unnecessary and harmful (the `vw`/`vh` values resolve against the *browser*, not the 1920 stage, so they no longer match the design intent).
- New fixed scale derived from the existing ceilings (which were tuned for 2K projectors):
  - Minimal headline: `96px` / weight 700
  - Technical headline: `56px` / weight 600
  - Subhead: `22px`
  - Body: `18px`
  - Big stat: `144px` / Mint
  - Eyebrow / mono label: `16px`
  - Card title: `28px`
  - Card body: `16px`
  - Section gap: `64px`
  - Header → subhead gap: `20px`
  - Card inner gap: `16px`
- Apply consistently across all 11 slides.

**4. Per-slide audit + fix overflow**
After conversion, walk slides 1–11 at the fixed 1920×1080 canvas and fix anything that no longer fits:
- Re-check Slide 4 workflow boxes (three-box grid + arrows) at full width.
- Re-check Slide 6 logo wall, Slide 9 card grid, Slide 7 quote area.
- Verify nothing clips against the 1080px height — especially headers + footers stacking.
- Confirm screenshot blocks have explicit pixel dimensions instead of `width: 100%`.

**5. Browser/window behavior**
- At any viewport the slide letterboxes (black bars on top/bottom or sides) — exactly like PowerPoint slideshow mode.
- Fullscreen (F key) still works via the existing `requestFullscreen` call.
- The mobile-stacking branch in `useIsMobile` becomes obsolete on the canvas itself (the canvas is always 1920×1080), so mobile-only code paths inside slides can be removed in a later pass — out of scope here unless something breaks.

### Trade-offs you should know
- **No more responsive reflow inside slides.** That's the point — it's a deck, not a webpage. On phones, the slide will appear small but identical to the projected version, with letterboxing.
- **Mobile-stacking branches become dead code** on the slide canvas. Leaving them in doesn't hurt, but they'll never fire. We can prune them in a follow-up.
- All previously-tuned `clamp()` ceilings convert directly to their max value, so the look on a 2K projector stays the same.

### Files touched
- `src/components/ScaledSlide.tsx` (new)
- `src/components/SlideFrame.tsx` (fixed dimensions + padding, drop `vw`/`vh`)
- `src/components/Presentation.tsx` (wrap active slide in `ScaledSlide`)
- `src/slides/Slide1.tsx` through `Slide11.tsx` (replace `clamp()` font/gap values with fixed pixels, fix any overflow surfaced at 1920×1080)

### Not touched
Navigation/keyboard handlers, progress dots, overview grid, theme tokens, brand palette, animation logic, slide content/copy, project knowledge.

### Audit before finishing
For each slide at exactly 1920×1080: outer column centered, no content beyond the 1760×920 inner area, mono labels ≥16px, no leftover `clamp()` calls in slide files, and no `100vw`/`100vh` references outside `ScaledSlide`'s outer container.

