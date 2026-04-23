

## Memory updates based on recent successful edits

### Why update
Three recurring patterns emerged from the last batch of edits (Slide 6 logo restructure, Slide 9 5-card grid, Slide 7 quote removal) that aren't yet captured in memory. They're worth saving so future slide work applies them automatically.

### Proposed changes

**1. New memory: `mem://design/grid-vertical-fill.md`**
Captures the Slide 6 logo wall fix — when a grid lives in a flex column and you want it to absorb vertical space evenly, use `flex: 1` on the grid + `gridAutoRows: "1fr"` + parent `alignItems: "stretch"`. This avoids the "logos clumped at top, void below" symptom. Type: `design`.

**2. Update `mem://design/slide-layout-defaults.md`**
Add a small section on **column-count vs avatar/card sizing** — when bumping a card grid from 4→5 columns, avatar and name/title type need to shrink proportionally (recipe: avatar `clamp(72px, 7.5vw, 110px)`, name `clamp(15px, 1.35vw, 22px)`, title `clamp(12px, 1vw, 17px)`, gap `clamp(20px, 2.4vw, 40px)`). Prevents the next "names wrap awkwardly" round.

**3. Update `mem://index.md`**
- Add Memories entry pointing to the new `grid-vertical-fill.md` file.
- Add one Core line: "When a grid must fill a flex column's vertical space, use `flex: 1` + `gridAutoRows: 1fr` on the grid and `alignItems: stretch` on its parent — never `margin: auto` on children."

### Not changing
- `slide-audit-checklist.md` — still accurate, no new audit failures to add.
- Project knowledge / custom instructions — those are user-owned, out of scope.
- Brand colors, type ceilings, gap scale — all current values held up across the recent edits.

### Files touched
- `mem://design/grid-vertical-fill.md` (new)
- `mem://design/slide-layout-defaults.md` (append column-count sizing recipe)
- `mem://index.md` (one Core line + one Memories reference)

