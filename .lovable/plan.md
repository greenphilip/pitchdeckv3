## Fix Kishan's name wrap on Slide 7

**Problem**: "Kishan Chimminiyan" wraps to two lines in the now 6-col grid, making his card taller than the others and pushing the row's bio/logo blocks out of vertical alignment.

**Root cause**: Card width shrank when grid went from 5 → 6 columns, but `m.name` has no shrink/wrap control. The surname is the only one long enough to break.

### Fix

In `src/slides/Slide7.tsx`, on the name `<div>` (around line 231–240):
- Reserve a fixed 2-line vertical slot for every name so cards align even when one wraps:
  - Add `minHeight: "calc(22px * 1.2 * 2)"` (≈ 53px — two lines at current 22px / lh 1.2).
  - Add `display: "flex"`, `alignItems: "center"`, `justifyContent: "center"` so single-line names sit centered in the slot.
- Add `hyphens: "auto"` and `wordBreak: "normal"` so wrapping is graceful.

This keeps Kishan's two-line name from pushing his card's title/bio/logo down relative to neighbours. No font-size shrink, no name change, no other slides touched.

### Verify
Read the file back and visually audit Slide 7 at desktop width to confirm all six cards' titles, bios, and logos line up on the same baselines.
