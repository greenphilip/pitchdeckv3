

## Slide 10 — Stack Philip's logos vertically, remove white pill backgrounds

Make the OSCE / WBCSD / INSEAD logos under Philip readable by stacking them vertically and rendering them in their native colors directly on the dark blue slide background (no white pill).

### Changes in `src/slides/Slide10.tsx`

1. **Logo container** (the `m.logos` block under each member):
   - Change `flexDirection` to `column` so logos stack one under another.
   - Keep `alignItems: center`, `justifyContent: center`.
   - Bump `gap` from `10px` to `12px` for vertical breathing room.
   - Remove `flexWrap: "wrap"` (no longer needed in a column).
   - Remove `minHeight: 32px`.

2. **Non-inverted logos** (OSCE, WBCSD, INSEAD):
   - Drop the white pill wrapper (`background: LIGHT`, `borderRadius`, `padding`).
   - Render the `<img>` directly with no background.
   - Increase `height` from `20px` to `28px` and `maxWidth` from `70px` to `140px` so each logo reads clearly when stacked.
   - Keep native colors (no filter). The OSCE, WBCSD, INSEAD SVGs contain colored marks that read fine on `#143560`; they were only being hidden by the previous `brightness(0) invert(1)` filter, which the pill was compensating for.

3. **Inverted logos** (Pioneers under Rainhard):
   - Unchanged behavior — still uses the `invert(1) brightness(1.1)` filter to render white against the dark background.
   - Match the new height (`28px`) and `maxWidth` (`140px`) so Rainhard's column visually aligns with Philip's.

### What stays the same
- Avatar size, name/title/background typography, header, eyebrow, headline, bottom anchor.
- Grid structure, animations, palette, SlideFrame variant, slide numbering.
- Mobile behavior (the column stack works the same in the 2-col mobile grid; the scroll panel absorbs added height).

### Files touched
- `src/slides/Slide10.tsx` only.

