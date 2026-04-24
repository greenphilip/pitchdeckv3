## Add the compounding-effect bar chart to Slide 4 (lower right)

### What

Duplicate the three time-compression bars from Slide 5 ("THE COMPOUNDING EFFECT" — `1st framework — CSRD / 2 months`, `2nd framework — EcoVadis / 1 month`, `3rd framework onward / 1 week`) onto Slide 4 (`src/slides/Slide4.tsx`). Place them free-floating in the rightmost column of the bottom row, alongside the "Client Knowledge Profile" (CKP) box that sits in the middle column. Slide 5 itself is unchanged.

### Why this layout

Slide 4's bottom row uses a 5-column grid: `1fr | auto | 1fr | auto | 1fr`. The CKP box anchors the middle `1fr`; the trailing two cells are currently empty placeholders. The right placeholder is the natural "lower right" slot — vertically centered with the CKP box, no card chrome, no extra grid math. Free-floating = no border, no background, just bars + labels (which themes well with the bars on Slide 5 — they aren't carded there either).

### Implementation in `src/slides/Slide4.tsx`

1. **Imports / constants (top of file)**
   - Add `BLUE = "#539ADB"` and `TEAL = "#2D9D90"` constants (palette already used elsewhere).
   - Add `EXPO_OUT` easing tuple.
   - Add a `CompoundingBar` interface and a `compoundingBars` data array — same three entries as Slide 5.

2. **New `CompoundingChart` component** in the same file (kept local — only Slide 4 uses this density). It renders:
   - A small JetBrains Mono eyebrow `THE COMPOUNDING EFFECT` (12px, Mint, uppercase).
   - Three rows. Each row: label on top (13px), then a flex line with the bar (`height: 22px`, scaleX-animated from 0 → widthPct/100, transformOrigin left) and the duration text (16px, color = bar color, bold for the emphasized last bar).
   - Sizes are scaled down from Slide 5 (which uses 22/30/52px) so it sits compactly in the column without dominating.
   - Animations stagger off a `baseDelay` prop, identical pattern to Slide 5.

3. **Slot it into the bottom row**
   - Add a new timing constant: `tChart = tBox4 + 0.2`. Push `tStrip = tChart + 0.6`.
   - In the bottom-row grid (lines 261–285), the rightmost cell — currently the second `<div />` after the CKP box — becomes a wrapper that renders `<CompoundingChart baseDelay={tChart} />`. The wrapper aligns center vertically (`alignSelf: "center"`) and constrains width with `maxWidth: 360px` so the chart looks like a free-floating panel rather than stretching across the full column.
   - Mobile: keep the current single-column stack. Render the chart as an additional stacked block beneath the CKP box (no grid changes needed — just append after the CKP `<WorkflowBox>` inside the `isMobile` branch).

### Visual / interaction notes

- No card border, no background fill — matches the user's "free floating" intent.
- Bars use the existing brand palette (Teal → Blue → Mint), preserving the third-bar Mint emphasis with the soft glow.
- Final bottom strip ("Deterministic · Auditable · Multi-framework") still animates last because `tStrip` is pushed after the chart finishes.

### Files touched

- `src/slides/Slide4.tsx` — single file. New constants + `CompoundingChart` component + bottom-row slotting + delay adjustment.

### Files NOT touched

- `src/slides/Slide6.tsx` (Slide 5 in display order) — unchanged. The chart on Slide 5 stays exactly as it is; Slide 4 gets a smaller-scale duplicate.
