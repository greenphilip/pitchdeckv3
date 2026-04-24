## Slide 4 — tighten boxes, align compounding chart, add arrow CKP → chart

### 1. Tighten all four workflow boxes

In `WorkflowBox` (lines 131–185), shrink the internal spacing:
- `padding: "32px"` → `padding: "20px 22px"` (less vertical, slightly less horizontal)
- `gap: "16px"` → `gap: "10px"`
- Icon `size={44}` → `size={36}` (and inline `width: 44px` → `width: 36px`)
- Headline `fontSize: 22px` → `fontSize: 20px`
- Body `fontSize: 16px` → `fontSize: 15px`, `lineHeight: 1.5` → `lineHeight: 1.45`

Combined effect: each box loses ~50–60px of height while keeping the same content readable. Boxes 01/02/03 get visibly tighter; box 04 (CKP, same component) tightens with them — preserving uniformity across the row.

### 2. Left-align the chart with box 03's content edge

Right now the chart wrapper is `{ alignSelf: "center", width: "100%" }` — its left edge sits flush with box 03's outer border above. The user wants it aligned with box 03's **inner content** (where "Report / Gap", the icon, and the body text begin). Add `paddingLeft: 22px` (matching the new horizontal padding of `WorkflowBox`) and a matching `paddingRight: 22px` so the bars also terminate flush with box 03's right content edge.

The eyebrow "THE COMPOUNDING EFFECT" already left-aligns inside the chart's flex column, so no change inside `CompoundingChart` itself.

### 3. Add a horizontal arrow from CKP → compounding chart

The bottom row currently lays out (desktop): `<div /> | <div /> | CKP | <div /> | Chart`. The fourth cell (the `auto` slot between CKP and chart) is currently an empty `<div />`. Replace it with `<ArrowCell delay={tArrowCKP} vertical={false} />` so a mint `ArrowRight` appears between CKP and the chart, matching the 01→02 and 02→03 arrows visually (same icon, same size, same color, same scaleX entrance animation).

New timing constant: `tArrowCKP = tBox4 + 0.4`, then bump `tChart = tArrowCKP + 0.3` (chart now reveals after the arrow finishes drawing). `tStrip = tChart + 0.6` stays as is (just shifted by the arrow duration).

### 4. Reclaim a bit more vertical room

Because the boxes are now ~50px shorter each row, the slide has noticeably more breathing room — but to make the bottom not feel "sucked toward the strip" either, leave the existing gaps as they are (40px header→row, 12px row→arrow-down, 8px arrow-down→bottom-row, 20px bottom-row→strip). The diet on the boxes does the work.

### File touched

- `src/slides/Slide4.tsx` — only this file. No new components, no asset changes.

### What stays unchanged

- Slide 5 untouched.
- `CompoundingChart` internals unchanged (font sizes, bar heights, colors).
- All copy, all icons, all colors — same.
- Mobile layout unchanged (chart still stacks below CKP; the new horizontal `ArrowCell` will simply not render between them on mobile because the bottom-row grid stays in `1fr` single-column on mobile and the chart is rendered in its own conditional block underneath).
