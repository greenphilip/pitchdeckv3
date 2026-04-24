## Slide 4 — fix bottom crowding and align the compounding chart with box 03

### Diagnosis

Two visual issues, one root cause for each:

1. **Chart not aligned with the box above (box 03 "Report / Gap")**
   The bottom-row grid uses the same 5-column template as the top row (`1fr | auto | 1fr | auto | 1fr`), so the rightmost cell sits exactly under box 03 — *but* the chart wrapper currently has `maxWidth: 360px` and `paddingLeft: 8px`. That shrinks the chart and pushes it 8px off the column's left edge, so the eyebrow "THE COMPOUNDING EFFECT" no longer lines up with box 03's left edge above it, and the bars terminate well before box 03's right edge.

2. **Crammed at the bottom**
   Vertical stack at 1080px is: header → 64px gap → top row of boxes → 20px → arrow row → 16px → bottom row (CKP + chart) → 40px → bottom strip. Because the chart adds visual mass on the right side of the bottom row, the row reads taller than before and the 40px-then-strip tail feels squeezed.

### Fixes (in `src/slides/Slide4.tsx`)

1. **Make the chart fill its column** — drop `maxWidth: 360px` and `paddingLeft: 8px` from the chart wrapper. The wrapper becomes `{ alignSelf: "center", width: "100%" }`. Result: chart's left/right edges match box 03's column edges exactly. The eyebrow, all three bar labels, and the "1 week" anchor sit perfectly under box 03's outline above.

2. **Recover vertical space** — tighten the four gaps that compound into the crowding:
   - Header → top row: `64px` → `40px`
   - Top row → downward arrow: `marginTop: 20px` → `12px`
   - Arrow → bottom row: `marginTop: 16px` → `8px` (desktop only)
   - Bottom row → strip: `40px` → `20px`

   Total reclaimed: ~60px. Bottom row + strip get noticeable breathing room without changing any element's intrinsic size.

### What stays the same

- Animation timings unchanged.
- Mobile layout unchanged (still stacks chart under CKP with its own 20px gap; the desktop-only `marginTop: 16 → 8` change explicitly preserves the mobile value).
- Box sizes, fonts, colors, content — all unchanged.
- Slide 5 untouched.

### File touched

- `src/slides/Slide4.tsx` — five small edits, all in the existing JSX (no structural changes).
