## Fix: Align name/title block heights across team cards

**Problem:** On Slide 7, Kishan Chimminiyan's name wraps to two lines, which pushes his bio down compared to neighbors. Because the card grid uses `auto` rows for the name/title block, each card's bio starts at a different Y position.

**Fix:** Reserve a fixed vertical slot for the name+title block so every bio starts at the same baseline, regardless of name wrap.

### Changes (single file: `src/slides/Slide7.tsx`)

1. **Pin the name+title block to a fixed minimum height** sized for two lines of name + one line of title:
   - Add `minHeight: clamp(72px, 7vh, 96px)` and `justifyContent: "flex-start"` to the name/title flex container.
   - This way single-line names (everyone else) still align their bio at the same Y as Kishan's two-line name.

2. **Anchor the block to the top** so when the name is short, the empty space sits below the title (not above it):
   - Already handled via `justifyItems: "center"` on the grid + `justifyContent: "flex-start"` on the inner column.

3. **No changes** to avatar size, bio typography, or logo grid — those already share baselines correctly.

### Result
- Avatar row: shared baseline (already correct, `auto` row + identical avatar size).
- Name/title row: shared baseline (new fixed min-height absorbs the 2-line wrap).
- Bio row: shared start baseline across all 6 cards.
- Logo row: shared bottom baseline (already correct via `1fr` + `alignSelf: end`).
