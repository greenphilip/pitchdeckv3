
# Mobile rebuild — fluid layout, swipe, on-slide chrome

## Goal

Below 768 px, the deck stops behaving like a scaled PowerPoint and starts behaving like a real responsive web page. Above 768 px, nothing changes — the desktop/projector experience stays pixel-identical to today.

## Current behaviour (baseline)

- Every slide renders inside `SlideFrame` at hard-coded **1920×1080** with `padding: 80`.
- `ScaledSlide` applies `transform: scale(min(w/1920, h/1080))`. At 390×843 the scale is ~0.20, so the slide collapses to a ~390×219 letterboxed band; text is unreadable.
- Slide-level `useIsMobile` branches DO fire (matchMedia targets the device viewport), but they execute inside the 1920px canvas, so stacked single-column layouts get squashed by the same 0.20× scale anyway.
- Chevrons + progress dots in `Presentation.tsx` are anchored to the viewport, so on mobile they sit on the black letterbox bars, not on the slide.
- No touch / swipe handling.
- No mobile cap on giant `clamp()` headlines (`Slide8.tsx` goes to `144px` ceiling, etc.) — but the ceilings are only relevant once we render at native size on mobile.
- Off-palette `#0F2A4D` (navy) and `#A8E6CF` (mint) are hardcoded in `SlideFrame.tsx` and `Presentation.tsx`. Project rule says `#143560` and `#6DD4AD`. Out of scope for this plan; flagged for a separate cleanup.

## Strategy

A single new component, `ResponsiveSlideShell`, decides between two render modes:

```
viewport ≤ 768  →  fluid mode  (slide fills 100vw × 100dvh, native CSS, clamp() typography)
viewport > 768  →  desktop mode (existing ScaledSlide + 1920×1080 canvas, untouched)
```

`SlideFrame` becomes mode-aware: in fluid mode it drops the fixed 1920×1080 box and the fixed `padding: 80`, replacing them with `width: 100%; min-height: 100dvh; padding: clamp(20px, 5vw, 32px)` per the project knowledge rule. In desktop mode it stays exactly as today.

Slides themselves need almost no changes — the `useIsMobile` branches they already have become *load-bearing* for the first time. A small per-slide pass tightens the worst remaining fixed-px values (Slide 7 avatar `160×160`, Slide 2 center-pulse `120×120`, hero font sizes that lack `clamp()` in Slides 1/2/4/5/6/7).

## Step-by-step

### 1. New `ResponsiveSlideShell` (`src/components/ResponsiveSlideShell.tsx`)
- Reads `useIsMobile()`.
- If desktop → renders the existing `<ScaledSlide>{children}</ScaledSlide>`.
- If mobile → renders children directly into a `position: absolute; inset: 0; overflow-y: auto` wrapper (no scale transform).
- Replaces the direct `<ScaledSlide>` call inside `Presentation.tsx`.

### 2. `SlideFrame` — fluid variant (`src/components/SlideFrame.tsx`)
- Detect mobile via `useIsMobile`.
- Mobile branch: outer `div` becomes `width: 100%; min-height: 100dvh; padding: clamp(20px, 5vw, 32px)` (replaces the 1920/1080/padding:80 trio). Hairline inset border → `inset: 16` or hidden. Logo + slide-number indicator scale down (`height: 28` for logo, `fontSize: 12` for indicator) and reposition (`top: 16, left: 16` / `right: 16`).
- Desktop branch: untouched.
- Background, glow, noise, grid: unchanged in both modes.
- Same call: while in here, swap the two off-palette hex constants (`#0F2A4D` → `#143560`, `#A8E6CF` → `#6DD4AD`) to match brand rules. Tiny visual delta.

### 3. `Presentation.tsx` — chrome + swipe
- Use `ResponsiveSlideShell` instead of `ScaledSlide`.
- Add `useSwipe` hook (or inline `onTouchStart`/`onTouchEnd` with a 50px horizontal threshold and ignore vertical-dominant gestures so internal scroll on mobile slides isn't hijacked). Calls `next()` / `prev()`.
- Mobile-only chrome adjustments:
  - Chevrons: hidden on mobile (swipe replaces them), or moved to `bottom: 64px` with 44×44 hit area if we want both. **Default: hide on mobile.**
  - Progress dots: move from `bottom: 24` to `bottom: 16` with `paddingBottom: env(safe-area-inset-bottom)` and increase gap to 14px for fat-finger spacing. Dots themselves stay 8/10 px.
  - Swap the two off-palette hex constants here as well.

### 4. Per-slide tightening (mobile-only impact)

Only the values that visibly break at 390 px in fluid mode. All edits are minimal — adding `clamp()` or an `isMobile ? ... : ...` to existing fixed numbers. **No structural rewrites.**

| Slide | Edit |
|---|---|
| 1 | Headline `fontSize: 76px` → `clamp(28px, 7vw, 76px)`. Logo `height: 140` mobile → `clamp(80px, 22vw, 140px)`. Tagline & meta-row already fine. |
| 2 | Headline `64px` → `clamp(26px, 6.5vw, 64px)`. Center-column `width/height: 120px` → `clamp(72px, 18vw, 120px)`. Bottom italic `36px` → `clamp(18px, 3.5vw, 36px)`. Item text `22px` → `clamp(14px, 3.6vw, 22px)`. |
| 3 | Already uses `clamp()` extensively + a `maxHeight: 45vh; overflowY: auto` panel. No changes needed. |
| 4 | Header `64px` → `clamp(28px, 7vw, 64px)`. Verify mobile vertical budget after fluid switch (this slide is the densest); if it still overflows, the existing single-column stack + page scroll absorbs it. |
| 5 | Headline `44px` → `clamp(22px, 5.5vw, 44px)`. Stat numbers `56px` → `clamp(36px, 9vw, 56px)`. Recharts already responsive. |
| 6 | Headline `64px` → `clamp(26px, 6.5vw, 64px)`. Phase title `32px` → `clamp(20px, 5vw, 32px)`. |
| 7 | Headline `64px` → `clamp(26px, 6.5vw, 64px)`. Avatar `160×160` → `clamp(96px, 26vw, 160px)`. Currently 5-col grid → already 2-col on mobile, but confirm container scroll under 55vh. |
| 8 | Already uses `clamp()` everywhere — no changes. |

### 5. PasswordGate sanity check
- Quick read of `src/components/PasswordGate.tsx` to confirm `h-12`, `text-base`, and the unlock button render OK with on-screen keyboard. Likely no change. If anything's tight, add `min-h-dvh` and `pb-8`.

## Out of scope (call out for a future loop)

- Per-slide narrative reorder for portrait reading flow (e.g. Slide 5's left-column-then-logo-wall stacking order may want logos first on mobile).
- Animation perf on low-end Android (the noise SVG + radial gradients may want a `prefers-reduced-motion` and/or low-end fallback).
- Replacing `useIsMobile` with a true container query (only matters if we ever embed slides at non-viewport widths).

## Files touched

- **New:** `src/components/ResponsiveSlideShell.tsx`
- **Edited:** `src/components/SlideFrame.tsx`, `src/components/Presentation.tsx`, `src/slides/Slide1.tsx`, `Slide2.tsx`, `Slide4.tsx`, `Slide5.tsx`, `Slide6.tsx`, `Slide7.tsx`
- **Untouched:** `Slide3.tsx`, `Slide8.tsx`, `ScaledSlide.tsx`, `useIsMobile.ts`

## Risk

Low. Desktop path is byte-identical (same `ScaledSlide` + same `SlideFrame` desktop branch). Mobile path is a new code branch that can't regress desktop. Per-slide edits are isolated `clamp()` swaps.
