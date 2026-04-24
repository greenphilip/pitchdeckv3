# Slide 8 — Add "unlocks" label, asterisk reference, and AWS footnote

Three small additions to the headline equation on Slide 8.

## Changes

### 1. Add "unlocks" left of the arrow + center the equation

Currently the €250k → €425k equation uses a 3-column grid (`auto auto auto`) that's centered on the page already, but the arrow connector has no text label.

- Add the word **"unlocks"** as a small mint italic label, positioned just to the **left of the arrow** (above or beside it), aligned with the arrow's vertical center.
- Style: `'JetBrains Mono'`, `clamp(13px, 1.1vw, 18px)`, color `MINT` at ~80% opacity, lowercase, italic, letter-spacing `0.08em`.
- Keep the existing arrow icon as the visual connector — "unlocks" sits as a caption to its left.
- Ensure the entire equation block (€250k + unlocks + arrow + €425k) remains horizontally centered on the slide. The grid already centers via `justifyItems: "center"` on the parent; we'll wrap "unlocks + arrow" together in the middle column so spacing stays balanced.

### 2. Add asterisk next to "IN NEW CAPITAL"

- Append a mint `*` immediately after the "IN NEW CAPITAL" caption under €425k.
- Same mint color as the caption, slightly elevated (superscript style) using `verticalAlign: "super"` and a smaller font size.

### 3. Add footnote at the bottom

- Insert a small footnote line **above** the existing "2 Existing Investors Participating · Names on Request" footer (or just below it — see note below).
- Text: `* €450k AWS "double equity loan" tranche`
- Style: `'JetBrains Mono'`, `clamp(11px, 0.85vw, 14px)`, color `MINT` at ~80% opacity, letter-spacing `0.08em`, centered.
- Placement recommendation: **directly above** the investor footer so the asterisk reference is visually close to the figures, with a small gap (`clamp(4px, 0.6vh, 8px)`) separating the two footer lines.

## Technical detail

File: `src/slides/Slide8.tsx`

- **Middle grid column** (currently just the arrow `motion.div` around line 138): wrap in a flex row containing `<span>unlocks</span>` + `<ArrowRight />`, both vertically centered. On mobile (rotated 90°), stack "unlocks" above the rotated arrow.
- **€425k caption** (line ~196): change `IN NEW CAPITAL` to `IN NEW CAPITAL<sup>*</sup>` using a styled span (not raw `<sup>`) for precise control.
- **Footnote**: add a new `motion.div` between the bottom `Divider` and the existing investor footer (around line 322), with the asterisk reference text in mint mono.

No other slides affected. No new dependencies.
