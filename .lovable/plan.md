# Slide 3 — Split into two clearly-titled bands

## Audit findings

Two pieces of "title" overlap right now:
- **Top H1** says: *"3 forces pushing the market — 3 alternatives failing to meet it."* (covers BOTH halves of the slide)
- **Two mono labels** further down repeat the same idea:
  - "Three forces in motion" (above top row)
  - "Three tools, three gaps" (above bottom row)

So you read "3 forces…" twice in the top half, and the bottom half's "3 alternatives" is announced 100vh away from the cards it describes. The structure is hard to scan.

Other observations:
- Spacing between the divider and the bottom band is the same as between header and top band, so the bottom band reads as a continuation, not a parallel section.
- Bottom mono label uses BLUE while top uses MINT — inconsistent emphasis for two equally important sections.

## Proposed change — give each band its own title

Restructure into **two stacked sections**, each with its own headline:

```text
─────────────────────────────────────────────
EYEBROW: WHY NOW — AND WHY NOBODY'S SOLVED IT

[ Section title 1 ]
3 forces pushing the market.

[ 3 force columns ]

────────── divider ──────────

[ Section title 2 ]
3 alternatives failing to meet it.

[ 3 tool/gap cards ]
─────────────────────────────────────────────
```

### Specific edits

1. **Replace the combined H1** with just a section title for the top band:
   - Text: `3 forces pushing the market.`
   - Same H1 styling (`clamp(28px, 3.6vw, 56px)`, weight 700, mint accent on a key word — e.g. mint on "pushing").

2. **Remove the redundant mono label** "Three forces in motion" above the top row — the new H1 already names the section.

3. **Add a second H1 under the divider** for the bottom band:
   - Text: `3 alternatives — all <span mint>failing to meet it.</span>`
   - Same style as the top H1 (matching weight, size, alignment) so the two bands feel like a parallel pair.

4. **Remove the redundant mono label** "Three tools, three gaps" above the bottom row.

5. **Increase the vertical gap around the divider** to `clamp(32px, 5vh, 64px)` so the divider reads as a section break, not a continuation.

6. Keep the eyebrow (`WHY NOW — AND WHY NOBODY'S SOLVED IT`) at the top as the slide-level frame for both bands.

### Resulting hierarchy

- L1 — Eyebrow: `WHY NOW — AND WHY NOBODY'S SOLVED IT` (slide identity)
- L2 — Section title 1: `3 forces pushing the market.`
- L3 — 3 force columns (regulation / AI / demand)
- (divider)
- L2 — Section title 2: `3 alternatives failing to meet it.`
- L3 — 3 gap cards (workflow / general AI / consultancies)

No text repeats. Each title sits directly above what it describes.

## Vertical fit check

The slide currently fits 1920×1080 with the H1 + 2 mono labels + 2 grids. Replacing 1 H1 + 2 mono labels with 2 H1s is a small net increase (~30–40px). To absorb it:
- Tighten outer column gap from `clamp(20px, 3.2vh, 40px)` to `clamp(16px, 2.6vh, 32px)`.
- Card `minHeight` already has a clamp ceiling — no change needed.
- If anything overflows on 1080p we'll trim card body line-height; flagged for QA after build.

## Technical detail

File: `src/slides/Slide3.tsx`

- **Lines 125-142** — replace the combined H1 with a shorter "3 forces…" H1.
- **Lines 155-170** — delete the "Three forces in motion" mono label motion.div.
- **Lines 280-295** — delete the "Three tools, three gaps" mono label motion.div, and insert a new H1 ("3 alternatives…") in its place, using the same styling as the new top H1.
- **Line 93** — adjust outer gap clamp.
- Mint accent words: pick one short word per H1 to color mint (suggest "pushing" on top, "failing to meet it." on bottom — keeps existing mint accent pattern).

No other slides affected. No new imports.
