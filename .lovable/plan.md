

## Fix Slides 6 & 7 cutting off at the bottom

Both slides exceed the 1080×1920 fixed canvas (usable area ≈1760×920 after SlideFrame's 80px padding). Tighten vertical rhythm and trim oversized elements so each slide fits without scroll.

### Slide 6 — "The product gets better"
Currently overflowing because: 80px section gap × 2, three bars at 72px tall each + 20px gaps, and the right callout uses 36px padding plus generous interior gaps. Two empty placeholder `<div>` blocks (lines 194-211) also add silent height.

Changes (file: `src/slides/Slide6.tsx`):
- Outer column: keep `justifyContent: "center"` but reduce gap from `80px` → `56px`.
- Headline: `64px` → `52px`, subhead `24px` → `20px`, header internal margin-top `20px` → `16px`.
- Bars: height `72px` → `52px`, between-bar gap `20px` → `14px`, label-to-bar gap `10px` → `6px`, right-side number `36px` → `30px`.
- Remove the two empty placeholder divs (lines 194-211) — they contribute no content, only silent vertical space via the parent gap.
- Right callout: padding `36px` → `28px`, internal gap `20px` → `14px`, headline `32px` → `26px`, body `19px` → `17px`, RESULT line `17px` → `15px`.
- Bottom strip: `24px` → `20px`.

### Slide 7 — "Traction" (chart + logos)
Currently overflowing because: header + 32px gaps × 2 + chart card (~380px) + 2×2 stats (each row ~120px) + impact card + right column logos. Right column is 5 logo rows at ~80px each + 32px gaps = pushes past 920px.

Changes (file: `src/slides/Slide7.tsx`):
- Outer column gap: `80px` → `48px`.
- Header headline: `56px` → `44px`, marginTop `20px` → `14px`.
- Body grid gap: `56px` → `40px`.
- Left column inner gap: `32px` → `24px`.
- Chart card: padding `28px` → `20px`, chart height `300px` → `230px`, legend marginBottom `16px` → `10px`.
- Stats grid: rowGap `36px` → `20px`, columnGap `40px` → `24px`, big number `72px` → `56px`, label `18px` → `15px`.
- Impact card: padding `22px` → `16px`, gap `12px` → `8px`, label `18px` → `15px`, body `19px` → `16px`.
- Right column gap: `32px` → `20px`. Logo grid `rowGap: 32px` → `18px`, `columnGap: 48px` → `28px`, max logo height `80px` → `56px`.
- TRUSTED BY block: eyebrow `20px` → `16px`, subline `20px` → `15px`, internal gap `14px` → `10px`.

### Audit
After edits, mentally sum vertical budget for each slide at exactly 1080px height − 160px padding − 48px hairline allowance = 872px content area. Both should land comfortably under that with no scroll.

### Files touched
- `src/slides/Slide6.tsx`
- `src/slides/Slide7.tsx`

### Not touched
SlideFrame, ScaledSlide, navigation, content/copy, animations, brand palette, other slides.

