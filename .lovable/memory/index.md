# Memory: index.md
Updated: now

# Project Memory

## Core
Deck is exactly 8 slides (Slide1.tsx…Slide8.tsx). `totalSlides={8}`. Ignore stale "10 slides" note.
Slide-number indicator (`SLIDE N / 8`) is on by default in SlideFrame; only Slide 1 (cover) passes `showSlideNumber={false}`.
Filename number == `slideNumber` prop == position in `Presentation.tsx` — keep in lockstep.
Every slide: centered layout (`alignItems: center`, header text centered, thesis/footer blocks `margin: 0 auto`).
Outer slide column uses `justifyContent: "center"` to vertically center content as a block (prevents big-screen voids above the footer).
Mono labels & card headers: `clamp(13px, 1vw, 20px)` weight 600 — floor 12px, ceiling 20px so 2K projectors are legible.
Section gaps `clamp(36px, 6vh, 80px)`; card inner gap `clamp(14px, 2vh, 20px)`; card title `clamp(20px, 2.2vw, 32px)` weight 600.
Headline ceilings: technical `clamp(26px, 3.8vw, 64px)`; minimal (Slides 1, 2, 7, 8) `clamp(34px, 5.2vw, 104px)` — required for 2K+ screens.
Eyebrow style (all non-cover): JetBrains Mono, mint, uppercase, `letterSpacing: 0.12em`, weight 600.
NEVER use `marginTop/Bottom: auto` on individual children to vertically center — use `justifyContent: "center"` on the outer column, or explicit `clamp(48px, Xvh, 140px)` spacer divs.
SlideFrame caps content at maxWidth 1700px to prevent stretched horizon on ultra-wide.
Always self-audit centering, label size, gap scale, AND vertical voids before declaring a slide done.

## Memories
- [Deck structure](mem://feature-deck-structure.md) — 8-slide inventory, filename↔number mapping, eyebrow labels, slide-number visibility rules, Slide 8 specifics
- [Slide layout defaults](mem://design/slide-layout-defaults.md) — Full centering rules, raised type ceilings (2K+), gap scale, void-prevention rule
- [Slide audit checklist](mem://preferences/slide-audit-checklist.md) — Pre-finish checks to avoid repeat centering/sizing fixes
