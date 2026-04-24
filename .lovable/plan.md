## Slide 4 — fix bottom overflow / clipped text

The added "00 · ESG Questionnaires" row pushed the bottom strip and chart text past the slide. Fix by shrinking the WorkflowBox vertical footprint further and tightening the inter-row gaps. No layout restructure — just dimensional tuning.

### Changes (all in `src/slides/Slide4.tsx`)

WorkflowBox (used by 00, 01, 02, 03, 04):
- `padding`: `16px 20px` → `12px 16px`
- inner `gap`: `8px` → `6px`
- icon `size`: `32` → `28`
- number label `fontSize`: `14px` → `13px`
- headline `fontSize`: `20px` → `18px`
- body `fontSize`: `15px` → `14px`; `lineHeight`: `1.45` → `1.4`

Inter-row gaps:
- Header → questionnaire row gap (existing `<div style={{ height: "20px" }}/>`): `20px` → `12px`
- Down-arrow row between questionnaire box and main row (`marginTop`/`marginBottom`): `8px`/`8px` → `4px`/`4px`
- Down-arrow row between Glacier AI and box 04 (`marginTop: "12px"` on the grid wrapper): `12px` → `4px`
- Box-04 row `marginTop`: `8px` → `4px`
- Bottom strip preceding gap (already `16px`): `16px` → `12px`

Down-arrow icon `size`: `40` → `32` (both arrow rows) so the vertical arrows take less height.

### Why this works

The new row + arrow added ~140px of content to a slide that was already filling 1080px. The above changes reclaim:
- WorkflowBox shrink: ~24px per row × 3 stacked rows ≈ 72px
- Tighter row gaps: ~28px
- Smaller arrows: ~16px

Total reclaimed: ~115px — enough to bring the chart and "Deterministic · Auditable · Multi-framework" strip back inside the frame at 1920×1080.

### File touched

- `src/slides/Slide4.tsx` only.
