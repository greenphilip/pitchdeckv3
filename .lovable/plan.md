

## Slide 10 — Enlarge logos and unify their sizing

Make the logos under Rainhard (Pioneers) and Philip (OSCE, WBCSD, INSEAD) larger and visually consistent in size on screen.

### Changes in `src/slides/Slide10.tsx`

1. **Logo dimensions** (in the `m.logos.map(...)` block):
   - Increase `height` from `28px` → `48px`.
   - Increase `maxWidth` from `140px` → `200px`.
   - Keep `objectFit: "contain"` so each logo scales proportionally inside the same bounding box (this is what makes mixed aspect ratios *look* the same size).

2. **Stack spacing**:
   - Bump container `gap` from `12px` → `18px` so the larger logos still breathe.

3. **Inverted vs native**:
   - No change to the filter logic — Pioneers keeps `invert(1) brightness(1.1)`; OSCE / WBCSD / INSEAD render in native colors.

### What stays the same
- Vertical column stacking (`flexDirection: "column"`, centered).
- Avatars, names, titles, backgrounds, header, eyebrow, headline, bottom anchor.
- Grid layout, animations, palette, SlideFrame variant, mobile scroll behavior.

### Files touched
- `src/slides/Slide10.tsx` only.

