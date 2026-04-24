---
name: Deck structure & slide numbering
description: Authoritative deck inventory (8 slides), filename↔slideNumber mapping, eyebrow labels, and slide-number visibility rules
type: feature
---

## Deck inventory (8 slides — NOT 10)

The deck is exactly **8 slides**. Older project notes mentioning "10 slides" are stale — do not add slides 9/10 unless explicitly asked.

`Presentation.tsx` imports Slide1…Slide8 in order. `totalSlides={8}` everywhere.

| # | File | Variant | Eyebrow / Section label |
|---|------|---------|-------------------------|
| 1 | Slide1.tsx | minimal | *(cover — no eyebrow; tagline "ESG Reporting — Fast, Defensible")* |
| 2 | Slide2.tsx | minimal | `THE CUSTOMER'S SITUATION` |
| 3 | Slide3.tsx | technical | `WHY NOW — AND WHY NOBODY'S SOLVED IT` |
| 4 | Slide4.tsx | technical | `THE PRODUCT` |
| 5 | Slide5.tsx | technical-light | `TRACTION` |
| 6 | Slide6.tsx | technical | `MARKET & EXPANSION` |
| 7 | Slide7.tsx | minimal | `TEAM` |
| 8 | Slide8.tsx | minimal | `BRIDGE ROUND · THE ASK` |

Filename number == `slideNumber` prop == position in `Presentation.tsx`. Keep them in lockstep.

## Eyebrow style (consistent across all non-cover slides)

JetBrains Mono, mint (#6DD4AD or `MINT`), uppercase, `letterSpacing: 0.12em`, weight 600, size `clamp(13px, 1vw, 20px)` (or `20px` flat on minimal slides). Always precedes the headline.

## Slide-number indicator (`SLIDE N / 8`)

Lives in `SlideFrame.tsx`, top-right, JetBrains Mono 16px, mint at 60% opacity, `letterSpacing: 0.05em`.

Visibility is controlled by the **`showSlideNumber` prop** (default `true`) — no longer gated by variant.

- Slide 1 (cover) is the **only** opt-out: passes `showSlideNumber={false}` alongside `showLogo={false}`.
- Slides 2–8 all show the indicator.

When adding a new slide, do NOT pass `showSlideNumber` unless it's a cover/divider that should hide it.

## Slide 8 specifics (current state)

- Headline equation: `€250k` *unlocks* `→` `€425k*` (mint italic "unlocks" label sits left of the arrow).
- Asterisk footnote at bottom in mint italic mono: `* €450k AWS "double equity loan" tranche`.
- Followed by the existing investor footer line.
