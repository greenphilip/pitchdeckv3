## Fuse Slides 3 + 6 → new Slide 3, then renumber

### The new Slide 3 — "Why now, and why nobody's solved it"

A single slide that delivers both arguments back-to-back: the market context (three forces pushing demand) and the competitive gap (three tool categories failing customers). The forces explain *why now*; the tools explain *why us*.

**Visual structure (1920×1080, technical variant):**

```text
┌─────────────────────────────────────────────────────────────────────┐
│  WHY NOW — AND WHY NOBODY'S SOLVED IT                  SLIDE 3 / 8 │
│                                                                     │
│  Three forces pushing the market.                                   │
│  Three tools failing to meet it.                                    │
│                                                                     │
│  ─── THREE FORCES IN MOTION ──────────────────────────────────────  │
│                                                                     │
│  ◐ REGULATION         ◐ AI                  ◐ DEMAND               │
│  Rules keep changing  Generic AI            One company,           │
│                       hallucinates          N stakeholders         │
│                                                                     │
│  ─── THREE TOOLS, THREE GAPS ─────────────────────────────────────  │
│                                                                     │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐          │
│  │ WORKFLOW     │    │ GENERAL AI   │    │ CONSULTANCIES│          │
│  │              │    │              │    │              │          │
│  │ Built for    │    │ Fast, can't  │    │ Expert, but  │          │
│  │ docs, not    │    │ be trusted   │    │ expensive    │          │
│  │ decisions    │    │ at audit     │    │ and slow     │          │
│  │              │    │              │    │              │          │
│  │ GAP:         │    │ GAP:         │    │ GAP:         │          │
│  │ regulatory   │    │ quality &    │    │ leverage &   │          │
│  │ knowledge    │    │ traceability │    │ retention    │          │
│  └──────────────┘    └──────────────┘    └──────────────┘          │
└─────────────────────────────────────────────────────────────────────┘
```

**Composition rationale:**
- Top band (forces) = compact, horizontal, mint left-border treatment kept from old Slide 6 but shrunk to single-line title + one-sentence body. They set the *macro context*.
- Bottom band (tools) = the three full bordered cards from current Slide 3, unchanged in structure but with reduced internal padding so they fit alongside the forces band. They deliver the *competitive read*.
- Slim mint divider rule between the two bands so the eye reads it as "context → conclusion."
- Single eyebrow + headline at the top covers both halves; the band labels ("THREE FORCES IN MOTION" / "THREE TOOLS, THREE GAPS") act as section dividers.

**Copy on the new slide:**
- Eyebrow: `WHY NOW — AND WHY NOBODY'S SOLVED IT`
- Headline: `Three forces pushing the market.` *new line* `Three tools failing to meet it.` (with "failing to meet it" in mint)
- Forces band label: `THREE FORCES IN MOTION` (mono, mint, small)
  - Regulation — *Rules keep changing.* Omnibus I in force, ESRS simplified, VSME drafting through 2027.
  - AI — *General AI is table stakes.* Hallucinations and missing traceability fail at audit.
  - Demand — *One company, N stakeholders.* Customers, banks, investors, regulators — each in a different format.
- Tools band label: `THREE TOOLS, THREE GAPS` (mono, blue, small)
  - Three existing cards from current Slide 3, content preserved verbatim.

**Layout/spec details (sticking to brand rules):**
- `SlideFrame variant="technical" slideNumber={3} totalSlides={8}`
- Outer column: `flex-col`, `justify-center`, `gap: clamp(24px, 4vh, 48px)`
- Header block: eyebrow + 2-line headline, max-width 1400px, centered
- Forces row: `grid-template-columns: repeat(3, minmax(0, 1fr))` desktop / stacked mobile, each cell with `border-left: 2px solid #6DD4ADB3`, `padding-left: 24px`, icon 28px mint, title 22px semibold, body 16px at 80% opacity (~3 lines max)
- Divider: full-width `1px solid #539ADB26`
- Tools row: existing `repeat(3, minmax(0, 1fr))` grid, but card padding reduced to 22px and internal gap to 14px so the slide stays inside the 1080 vertical budget. GAP tag treatment unchanged.
- Mobile: both rows stack to single column, panel scrolls (`maxHeight: 50vh; overflowY: auto`) per existing Slide 3 pattern.

### Renumbering after deletion

Delete old `Slide6.tsx`. Promote subsequent slides in both file naming and `totalSlides` props.

| Current file | New file | New `slideNumber` |
|---|---|---|
| Slide6.tsx | (deleted) | — |
| Slide7.tsx | Slide6.tsx | 6 |
| Slide8.tsx | Slide7.tsx | 7 |
| Slide9.tsx | Slide8.tsx | 8 |

Update inside every slide:
- All `totalSlides={9}` → `totalSlides={8}` (Slides 1–8)
- `slideNumber` prop on the renamed files matches the table above
- Default export function name renamed to match file (`Slide7` → `Slide6`, etc.)

Update `src/components/Presentation.tsx`:
- Drop the `Slide9` import, keep the chain `Slide1`…`Slide8`
- `slides` array becomes `[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8]`
- Overview grid stays 3×3 (one empty cell) — fine, no code change needed.

### Files touched

- `src/slides/Slide3.tsx` — rewritten as the fused slide
- `src/slides/Slide6.tsx` — deleted
- `src/slides/Slide7.tsx` → renamed `Slide6.tsx`, function + `slideNumber` updated, `totalSlides=8`
- `src/slides/Slide8.tsx` → renamed `Slide7.tsx`, same updates
- `src/slides/Slide9.tsx` → renamed `Slide8.tsx`, same updates
- `src/slides/Slide1.tsx`, `Slide2.tsx`, `Slide4.tsx`, `Slide5.tsx` — `totalSlides` updated to `8`
- `src/components/Presentation.tsx` — imports + slides array updated

### Out of scope
- The old "Volatility is our friend" headline is dropped — it was a tone outlier (close to a manifesto line) and the new fused headline carries the same idea more grounded.
- No changes to design tokens, SlideFrame, or any other slide content.
