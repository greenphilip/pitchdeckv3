## Reshuffle Slide 4 — add input box above Glacier AI

### What changes

Add a new box (visually identical to 01/03/04) directly above the "02 Glacier AI" box, with a downward arrow pointing into Glacier AI. The current top row (Documents → Glacier AI → Report/Gap/Policy) and bottom section (CKP + chart) stay in place but get tightened vertically to absorb the new row.

### New box content

- Number: `00`
- Icon: `FileText` (lucide) — distinct from the other icons; reads as "questionnaire"
- Headline: `ESG Questionnaires`
- Body: `Varying standards, different formats, validity criteria for evidence`

### New layout

```text
                    [ 00 · ESG Questionnaires ]
                              │
                              ▼
[ 01 Documents ] ──▶ [ 02 Glacier AI ] ──▶ [ 03 Report / Gap / Policy ]
                              │
                              ▼
                    [ 04 Client Knowledge Profile ] ──▶ [ Compounding chart ]
```

The new top box sits in the center column of the same `1fr 48px 1fr 48px 1fr` grid (left/right cells empty), so it lines up exactly above Glacier AI, mirroring how box 04 currently sits below it.

### Spacing tightening (to absorb the new row)

To prevent vertical overflow, condense the existing rhythm:

- WorkflowBox padding: `20px 22px` → `16px 20px`
- WorkflowBox internal gap: `10px` → `8px`
- WorkflowBox icon size: `36` → `32`
- Header → workflow gap: `40px` → `20px`
- Subtitle "One evidence graph…" marginTop: `4px` → `0`; header inner gap `20px` → `14px`
- Top-row arrow row spacers (between new top box and main row, and between main row and box 04): `12px` / `8px` marginTop kept tight (~`8px` each)
- Bottom strip top gap: `20px` → `16px`

These are the standard knobs and keep the slide inside the 1080px budget without changing any typography floors.

### Animation timing

Insert the new box + its downward arrow at the start of the sequence so the visual flow reads top-down:

- `tBoxQ` (new box) = `0.18`
- `tArrowQ` (arrow into Glacier AI) = `tBoxQ + 0.4`
- `tBox1` (Documents) shifts to `tArrowQ + 0.2`
- All downstream delays cascade from there using the existing `+0.3` / `+0.4` increments.

### Files touched

- `src/slides/Slide4.tsx` — only file changed. Add `FileText` to the lucide import, add a new top grid row (mirroring the existing "downward arrow" row pattern), insert the new `WorkflowBox`, retune the spacing constants listed above, and re-thread the animation delays.

Mobile: the new box stacks at the top of the single-column flow with a vertical arrow below it, consistent with the existing mobile pattern.
