

## Slide 11 — Elevate the existing-investor signal

Promote the existing-investor line from a faint bottom-anchored placeholder into a styled trust-signal row positioned between the two-column block and the italic close. For a family-office reader, this is one of the strongest underwriting signals on the slide and must read as a deliberate, on-register element — not a footnote.

Note: the current Slide11.tsx no longer has a faint bottom placeholder (it was removed in a prior pass). The existing-investor row is currently absent. This plan adds it as a new block.

### 1. Insert a new block between the two-column grid and the italic close
Location: directly after the `TWO-COLUMN BLOCK` `motion.div` (closes at line 201) and before the `ITALIC CLOSE` `motion.div` (line 204).

### 2. Structure — single centered row, overline + value
A vertical `motion.div` containing two stacked elements, both center-aligned:

- **Overline** (mono Mint, same register as USE OF FUNDS / MILESTONES labels)
  - Text: `EXISTING INVESTORS PARTICIPATING`
  - Style: `fontFamily: "'JetBrains Mono', monospace"`, `fontSize: "20px"`, `fontWeight: 600`, `color: MINT`, `textTransform: "uppercase"`, `letterSpacing: "0.1em"`

- **Value** (Light Gray, mid-weight, fluid)
  - Text: `2 existing investors — names on request`
  - Style: `fontSize: "clamp(14px, 1.5vw, 20px)"`, `fontWeight: 500`, `color: LIGHT`, `marginTop: "10px"`

### 3. Container styling
- `maxWidth: "min(1100px, 100%)"`
- `margin: "0 auto"`
- `width: "100%"`
- `textAlign: "center"`
- `marginTop: "clamp(20px, 3vh, 40px)"` — matches the spacing rhythm of the italic close so the three blocks (columns / investors / italic) feel evenly metered.
- `display: "flex"`, `flexDirection: "column"`, `alignItems: "center"`

### 4. Animation
- `initial={{ opacity: 0, y: 8 }}`, `animate={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.4, ease: EXPO_OUT, delay: 1.15 }}`
- Lands after the columns finish (~1.0s) and before the italic close (1.3s) — reads top-down in the natural eye path.

### 5. Italic close — push delay slightly
Change italic close `delay: 1.3` → `delay: 1.45` so it still arrives last after the new investor row.

### 6. Bottom placeholder — confirm removed
The current file has no faint bottom-anchored placeholder. The 16-32px bottom spacer (line 229) stays as-is to keep clearance from the progress dots.

### Vertical rhythm after change
```text
THE ASK                 (eyebrow, Mint)
€250k unlocks €425k.    (hero)
Twelve months …         (sub)
[ USE OF FUNDS | MILESTONES ]   (two columns)
EXISTING INVESTORS PARTICIPATING
2 existing investors — names on request
We're building for the customers who can't afford to be wrong … (italic)
```

### Files touched (when implemented)
- `src/slides/Slide11.tsx` only.

### Not touched
- SlideFrame, palette, slide numbering, Column component, headline, eyebrow, two-column block, animation easing, mobile responsive behavior.

