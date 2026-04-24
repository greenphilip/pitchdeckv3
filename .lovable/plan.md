## Slide 2 — make the inward-pointing arrows bolder and more visible

### Why

The two SVG arrows that connect the UNCERTAINTY (left, blue) and PRESSURE (right, mint) columns to the central "companies" pulse currently use:

- 1px stroke
- 14px tall viewBox / arrowheads only ~8px tall
- Stroke opacity 0.7
- Width 18% of column, offset only 12% outside the column

After widening the center column in the previous step, these thin arrows now look insignificant — the "vice closing in" metaphor is lost.

### Change

In `src/slides/Slide2.tsx`, update both arrow SVGs (the left/blue at ~lines 200–234 and the right/mint at ~lines 369–403):

- **Stroke width**: 1 → 2.5
- **ViewBox / svg height**: 14 → 22 (room for a chunkier arrowhead)
- **Arrowhead points**: widen from `188,3 196,7 188,11` (8px tall) to `178,3 196,11 178,19` (16px tall) — twice as tall and ~2× as long. Mirror for the right arrow: `22,3 4,11 22,19`.
- **Stroke opacity**: 0.7 → 1.0 (gradient still fades from 0 at the column-edge end, so the look stays directional, not flat)
- **Arrow span**: width 18% → 30%, offset right/left -12% → -22% (now reaches further across the gap toward the center pulse)
- **Line caps/joins**: add `strokeLinecap="round"` + `strokeLinejoin="round"` on the arrowhead polyline for a cleaner head

### Files touched

- `src/slides/Slide2.tsx` — only the two `<motion.svg>` arrow blocks. No changes to copy, layout, mobile behavior, or the center pulse.
