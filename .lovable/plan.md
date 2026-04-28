## Goal

On Slide 7 (Team), make the bio descriptions more legible and ensure every card's logo row sits on the same horizontal baseline across the grid.

## Changes to `src/slides/Slide7.tsx`

### 1. Larger, non-truncated description text

Current: fixed `18px`, clamped to 3 lines, can cut off bios.

New:
- `fontSize: clamp(15px, 1.05vw, 19px)` (slightly larger ceiling, fluid)
- Remove `WebkitLineClamp` / `-webkit-box` truncation so full bio always shows
- Keep `lineHeight: 1.5` for readability
- Drop the `minHeight` hack (replaced by the alignment strategy below)

### 2. Logos aligned across all cards (shared baseline)

Current: card is a simple `flex column` — logos float right after the bio, so different bio lengths push logos to different vertical positions.

New: turn each card into a 4-row CSS grid with fixed track roles, so the same row index lines up across all 6 cards:

```
gridTemplateRows: "auto auto 1fr auto"
   row 1: avatar
   row 2: name + title block
   row 3: description (1fr — absorbs slack, top-aligned)
   row 4: logos (always pinned to bottom of card → aligned across row)
```

The grid container itself uses `alignItems: stretch` and `gridAutoRows` is not needed since rows are explicit. The parent grid (the team grid) already lays cards in `repeat(6, 1fr)` with stretch by default — so all cards will match the tallest card's height, and row 4 (logos) lands at the same Y on every card.

### 3. Logo block — consistent internal alignment

- Wrap logos in a container with `minHeight: clamp(80px, 10vh, 120px)` and `justifyContent: "flex-start"` (top of the logo zone) so single-logo cards (Alissa, Kishan) don't visually float mid-zone while multi-logo cards (Rainhard, Philip, Nina) stack downward.
- Keep current per-logo height caps; no logo-size changes.

### 4. Mobile

On mobile (2-column grid), the same row-track approach still works — cards in the same row align to each other. No structural change needed beyond what's above.

## Out of scope

- No copy changes, no photo swaps, no layout column-count changes.
- No changes to header, thesis line, or footer anchor.