

# Visual Upgrade — What a Message Auditor Would Say

## The audit (Slides 1 & 2 today)

**What works**
- Clean palette discipline. Type hierarchy is legible.
- Color spans on key words land the message.
- Vice diagram on Slide 2 communicates the concept on first read.

**What a senior visual-message auditor would flag**

1. **No atmosphere.** Pure flat navy reads like a wireframe, not a deck. Investor decks at this stage need *production value* — depth, light, texture — to signal "we sweat the details." The optional radial gradient is too faint to register.
2. **No brand mark.** "Glacier" is set in the body sans (Inter). For a company named after a geological object, the wordmark is a missed identity moment. There's no logomark, no glyph, nothing memorable to anchor recall.
3. **Slide 1 headline is two paragraphs of equal-ish weight.** Line 2 is doing the work of a subhead but isn't styled as one — same color, same family, only size differs. The eye doesn't know where to land first.
4. **Slide 2's center "Reporting Team" box is the weakest element.** It's the emotional core of the slide but it looks like a UI card. A stock Lucide `Users` icon plus a mono label is generic — it doesn't *feel* squeezed.
5. **No directional tension on Slide 2.** The "vice" metaphor is named but not drawn. Left and right columns sit politely beside the center; nothing visually pushes inward.
6. **Typographic rhythm is flat.** Everything is Inter. No serif/display contrast, no oversized numerals, no editorial moments. Decks that win meetings have *one* strong typographic gesture per slide.
7. **Color is monochromatic-by-accident.** Mint and Blue are both cool, both mid-saturation. Without a warm or a deep dark to push against, the whole deck reads at one tonal level.
8. **No texture or grain.** Flat gradients on dark backgrounds band visibly on projectors. A 1-2% noise overlay fixes this and adds the "expensive" feel.
9. **Animations are functional, not expressive.** Everything fades + translates 20px. No element earns a signature motion (e.g., the vice closing, a number counting, a line drawing).

## The upgrade (concrete, brand-safe)

### A. Frame-level polish (`SlideFrame.tsx`) — every slide benefits

1. **Atmospheric background.** Replace the flat navy with a layered composition:
   - Base: `#0F2A4D` (slightly darker than current navy, gives Mint more pop)
   - Top-left soft Mint glow: `radial-gradient(ellipse at 20% 0%, rgba(109,212,173,0.08), transparent 50%)`
   - Bottom-right soft Blue glow: `radial-gradient(ellipse at 100% 100%, rgba(83,154,219,0.10), transparent 55%)`
   - 1.5% SVG noise overlay (tiny inline SVG, no asset) to kill banding
2. **Vignette** on minimal variant: subtle inner shadow at edges to focus the eye.
3. **Hairline frame** option (1px Blue at 10% opacity, inset 24px) for technical variants — reads as "engineered."

### B. Slide 1 — give it identity and a hero moment

1. **Real wordmark treatment.** "Glacier" gets:
   - A small geometric glyph to its left — a stacked-triangle "G" mark drawn in SVG (two overlapping triangles forming a glacier silhouette). Mint stroke, 1.5px, ~24px tall.
   - Optional letter-spacing kept, but pair with a mono tagline beneath: `ESG REPORTING — FAST, DEFENSIBLE` in JetBrains Mono at 10px, Light Gray 50%.
2. **Headline restructure for clear hierarchy:**
   - Line 1 stays as the hero — but bumped to `clamp(32px, 5.5vw, 76px)` and tracking tightened to `-0.025em`. Add a 1px Mint underline accent under "pressure" only (drawn-in animation).
   - Line 2 becomes a true subhead: `clamp(15px, 1.6vw, 22px)`, max-width narrower (`min(820px, 80vw)`), Light Gray at 70% (not 85%) — pushes it back so Line 1 dominates.
3. **Center accent.** A single thin Mint vertical line (1px × 40px, 30% opacity) between the two headline lines — a confident editorial gesture, drawn-in on load.
4. **Bottom meta upgrade.** Add small status dot before "Bridge round" — 6px Mint circle with a soft pulse animation. Signals "live, active raise."
5. **Signature motion.** The Mint vertical accent line draws top→bottom (scaleY 0→1, 0.6s) — that's the slide's one expressive moment.

### C. Slide 2 — make the vice actually squeeze

1. **Center block becomes a *person*, not a card.**
   - Replace the bordered box + `Users` icon with a custom SVG silhouette: a single human figure outline in Mint stroke (1.5px), ~80px tall, on a soft Mint radial glow. Below it, the label `THE REPORTING TEAM`.
   - Or, if a figure feels too literal, use a single large Mint dot (24px) with concentric rings pulsing outward — a "pressure point" on the page.
2. **Draw the vice.** Add two horizontal arrows pointing inward:
   - Left arrow: 1px Blue gradient line (transparent → Blue 60%) ending in a small chevron, animating in left→right.
   - Right arrow: 1px Mint gradient line (transparent → Mint 60%) ending in a chevron, animating right→left.
   - Both arrows nudge the center element slightly (`x: ±2px` keyframe) on entry — the squeeze is *animated*, not just implied. Hidden on mobile.
3. **Column labels get small numerals.** `01 — UNCERTAINTY` and `02 — PRESSURE` in mono. Tiny, but adds editorial polish.
4. **Item rows gain a 1px divider** below each (Blue at 15% opacity, full row width). Makes the list feel like a structured manifest, not a bullet list.
5. **Headline emphasis.** Add a thin Mint underline to "can't wait" only (Blue underline to "don't know" optional but I'd skip — one accent is stronger than two).
6. **Bottom thesis** gets a serif treatment for contrast — load a single weight of a display serif (e.g., Fraunces 400 italic, one weight via fontsource) for *just this line*. One typographic moment per slide. If you'd rather not add a font, italic Inter at `font-weight 300` is the fallback.

### D. Cross-cutting polish

- **Easing upgrade:** swap `easeOut` for a custom cubic-bezier `[0.22, 1, 0.36, 1]` (expo-out). Same duration, much more refined feel.
- **Stagger Slide 2's six items** as a single unified sequence (left top, right top, left mid, right mid, left bot, right bot) at 0.06s — feels coordinated rather than two parallel lists.
- **Cursor-reactive parallax** (desktop only): center element on Slide 2 shifts ±4px based on mouse position. Subtle, premium.

## Files that would change

| File | Change |
|---|---|
| `src/components/SlideFrame.tsx` | Layered background, noise overlay, optional vignette/hairline |
| `src/components/GlacierMark.tsx` | New — SVG logomark |
| `src/slides/Slide1.tsx` | Wordmark + glyph, subhead demotion, vertical accent line, status dot, signature motion |
| `src/slides/Slide2.tsx` | Replace center card with figure/pulse, add inward vice arrows, numbered labels, row dividers, serif italic thesis |
| `package.json` | Optionally add `@fontsource/fraunces` (one weight, ~15kb) for thesis serif |

## What I'd ship first (highest impact / lowest risk)

If you want a single round of changes rather than all of it:

1. SlideFrame atmospheric background + noise (lifts every slide for free)
2. Glacier logomark glyph on Slide 1
3. Slide 2 vice arrows + replace center card with pulse/figure
4. Custom expo-out easing globally

That's ~70% of the perceived quality jump.

## Out of scope for this pass

- Net-new color tokens (staying strictly within brand palette)
- Photography or stock imagery (per project rules)
- Slides 3–10 (apply learnings as we build each)

