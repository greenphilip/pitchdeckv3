

## Slide 6 — Visual audit & restructure

### Current problem
Slide 6 stacks four heavy blocks vertically (chart → 4 stats → customer-impact card → 9 logos + caption). On a 1561px-tall viewport the content compresses; on shorter screens it can't breathe. The chart spans the full 1400px width even though its two data points only need ~40% of that horizontal space — wasting prime real estate while the logo wall waits below.

### New layout — two-column composition

```text
┌────────────────────────────── HEADER (centered) ──────────────────────────────┐
│  TRACTION                                                                     │
│  7.5× ARR growth. Burn down 48%.                                              │
│  Closed with the companies hardest to close.                                  │
└───────────────────────────────────────────────────────────────────────────────┘

┌─────────────────── LEFT (≈58%) ───────────────────┐  ┌──── RIGHT (≈42%) ────┐
│  ┌─────────────────────────────────────────────┐  │  │  TRUSTED BY          │
│  │ ARR ↑ 7.5×  |  BURN ↓ 48%                   │  │  │  Enterprise & mid-   │
│  │                                             │  │  │  market customers.   │
│  │  [narrower bar+line chart]                  │  │  │                      │
│  │                                             │  │  │  ┌──┐ ┌──┐ ┌──┐      │
│  └─────────────────────────────────────────────┘  │  │  │L1│ │L2│ │L3│      │
│                                                   │  │  └──┘ └──┘ └──┘      │
│  ┌──── 2x2 stats grid ────┐                       │  │  ┌──┐ ┌──┐ ┌──┐      │
│  │  26      │  €526k      │                       │  │  │L4│ │L5│ │L6│      │
│  │  CLIENTS │  ARR        │                       │  │  └──┘ └──┘ └──┘      │
│  │  €20k    │  −48%       │                       │  │  ┌──┐ ┌──┐ ┌──┐      │
│  │  ACV     │  BURN YoY   │                       │  │  │L7│ │L8│ │L9│      │
│  └────────────────────────┘                       │  │  └──┘ └──┘ └──┘      │
│                                                   │  │                      │
│  Customer impact: 2,250h → 1,137h. €100k → €68k.  │  │                      │
└───────────────────────────────────────────────────┘  └──────────────────────┘
```

### Changes (surgical)

**Outer body** — wrap chart/stats/impact-card and logo wall in a 2-col grid:
- Desktop: `gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)"`, gap `clamp(24px, 3vw, 56px)`, `alignItems: "stretch"`
- Mobile (`useIsMobile`): single column, current stacking order preserved (chart → stats → impact → logos)

**Left column**
- Chart: keep existing component, now naturally narrower (~55% width). Reduce bar `barCategoryGap`/maxBarSize so the two bars don't look balloon-wide in the narrower frame (set `maxBarSize={80}` on the `<Bar>`).
- Stats strip: change from 4-col to **2x2** grid (`repeat(2, minmax(0, 1fr))`) so it fits the narrower column without shrinking numbers.
- Customer-impact card: keep, but `maxWidth: "100%"` (drop the 480px cap) so it spans the left column cleanly.

**Right column**
- "TRUSTED BY" eyebrow + caption move to the **top** of the right column (currently sit above the logo grid in the bottom block).
- Logo grid: change from `repeat(5, …)` to **`repeat(3, minmax(0, 1fr))`** with `rowGap: "clamp(20px, 3vh, 36px)"`. Nine logos → clean 3×3. Logo height bumped to `clamp(52px, 7vh, 80px)` since each cell is wider.
- Right column uses `display: flex; flexDirection: column; justifyContent: center` so the 3×3 grid centers vertically next to the taller left column.

**Header & overall column** — unchanged: outer `justifyContent: "flex-start"` stays (was intentional for Slide 6 per recent memory note), header keeps current centered styling.

### Files touched
- `src/slides/Slide6.tsx` — restructure body into 2-col grid; stats to 2×2; logos to 3×3; move "TRUSTED BY" block into right column; cap bar width on chart.

No new dependencies. No memory updates needed (slide-specific layout, not a global rule).

