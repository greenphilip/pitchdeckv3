# Slide Audit + Show Slide Numbers on All Slides

## Audit findings

### Files vs. counts
- `src/slides/` contains **8 files**: `Slide1.tsx` … `Slide8.tsx`. ✅ Filenames match their `slideNumber` prop and import order in `Presentation.tsx`.
- `Presentation.tsx` registers all 8. `totalSlides={8}` is consistent everywhere.
- Project knowledge says "Exactly 10 slides" — the deck currently has **8**. Flagging this as a discrepancy. **No change made** unless you want us to either (a) update the project knowledge to 10→8, or (b) add the 2 missing slides. Please confirm separately.

### Eyebrow / section labels (current state)

| # | File | Variant | Eyebrow / Section label | Slide number shown? |
|---|------|---------|-------------------------|---------------------|
| 1 | Slide1.tsx | minimal | *(cover — no eyebrow; tagline "ESG Reporting — Fast, Defensible")* | ❌ no |
| 2 | Slide2.tsx | minimal | `THE CUSTOMER'S SITUATION` | ❌ no |
| 3 | Slide3.tsx | technical | `WHY NOW — AND WHY NOBODY'S SOLVED IT` | ✅ yes |
| 4 | Slide4.tsx | technical | `THE PRODUCT` | ✅ yes |
| 5 | Slide5.tsx | technical-light | `TRACTION` | ✅ yes |
| 6 | Slide6.tsx | technical | `MARKET & EXPANSION` | ✅ yes |
| 7 | Slide7.tsx | minimal | `TEAM` | ❌ no |
| 8 | Slide8.tsx | minimal | `BRIDGE ROUND · THE ASK` | ❌ no |

The eyebrow naming is **consistent in style** (mono, mint, uppercase, 0.12em tracking) and the labels are coherent. No renames needed.

### Why slide numbers are inconsistent
In `src/components/SlideFrame.tsx` line 25:
```ts
const showSlideNumber = showGrid; // only true for 'technical' / 'technical-light'
```
The `SLIDE N / 8` indicator is **gated by variant**, so minimal slides (1, 2, 7, 8) never show it.

## Changes

### Single edit — `src/components/SlideFrame.tsx`

Decouple slide-number visibility from variant so it appears on every slide — except an opt-out for the cover.

1. Change `showSlideNumber` to **always true** by default, controlled by a new prop `showSlideNumber?: boolean` (default `true`).
2. In `Slide1.tsx` (the cover), pass `showSlideNumber={false}` alongside the existing `showLogo={false}` — covers conventionally hide pagination.
3. Keep the existing visual treatment (top-right, JetBrains Mono 16px, mint at 60% opacity, `SLIDE N / 8`).

### Result

| # | Slide number visible after change |
|---|-----------------------------------|
| 1 | ❌ (intentional — cover) |
| 2 | ✅ new |
| 3 | ✅ |
| 4 | ✅ |
| 5 | ✅ |
| 6 | ✅ |
| 7 | ✅ new |
| 8 | ✅ new |

## Technical detail

Files modified:
- `src/components/SlideFrame.tsx` — add `showSlideNumber?: boolean` prop (default `true`); replace the `const showSlideNumber = showGrid` line.
- `src/slides/Slide1.tsx` — add `showSlideNumber={false}` to the `<SlideFrame>` opening tag.

No other slide files need to change. No layout shifts (the indicator is absolutely positioned in the top-right, outside the content flow).

## Open question (not blocking)

Project knowledge states the deck should be **10 slides**, but only 8 exist. Want me to (a) update the project knowledge note to reflect 8, or (b) plan the 2 additional slides? I'd suggest handling that as a separate task once you decide.
