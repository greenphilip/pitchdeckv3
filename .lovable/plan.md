## Slide 4 — replace the screenshot block with a 4th workflow box hanging below "Glacier AI"

### Goal

Remove the dashboard screenshot + "EVIDENCE TRACE VIEW" caption block. Replace it with a fourth `WorkflowBox` (visually identical to the three top-row boxes) positioned **below the middle "Glacier AI" box**, connected by a downward arrow. Content of the new box:

- **Number**: 04
- **Headline**: Client Knowledge Profile
- **Body**: A compounding knowledge base to accelerate each future reporting questionnaire. Provides defensible moat and increases accuracy at scale.

### Visual layout after change

```text
┌─────────────┐  →  ┌─────────────┐  →  ┌─────────────┐
│ 01          │     │ 02          │     │ 03          │
│ Documents   │     │ Glacier AI  │     │ Report/Gap  │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                           ▼   (mint downward arrow)
                    ┌─────────────┐
                    │ 04          │
                    │ Client      │
                    │ Knowledge   │
                    │ Profile     │
                    └─────────────┘
```

The new box sits in the **middle column** of the existing 3-column grid. Left and right columns of the second row stay empty so the new box is visually anchored under "Glacier AI". On mobile (single column), it just stacks at the end of the workflow with a vertical arrow above it, same as the existing boxes do.

### Implementation in `src/slides/Slide4.tsx`

1. **Remove**:
   - The `useState` for `imgFailed` and the `dashboardScreenshot` import
   - The `SCREENSHOT_SRC` const
   - `ScreenshotPlaceholder` helper component (no longer used)
   - The entire "SCREENSHOT + CAPTION" `<div>` block (~lines 254–336) including the "EVIDENCE TRACE VIEW" caption
   - One of the GAP spacers (40px) that surrounded that block

2. **Add** below the existing 3-box workflow grid: a second grid row (or a separate flex block) containing:
   - A small mint downward `<ArrowDown>` arrow centered on the middle column, animated in
   - A new `<WorkflowBox number="04" Icon={Sparkles or Database} headline="Client Knowledge Profile" body="..." delay={tBox4} />` constrained to the same width as the middle column (use a 3-column grid: `1fr | 1fr | 1fr` with the box in column 2, arrow above it)

3. **Icon choice for box 04**: use `Database` from lucide-react (semantically: a knowledge base) — fits the existing icon tone (UploadCloud, Link2, ShieldCheck).

4. **Animation timing**: insert `tArrow3 = tBox3 + 0.4` and `tBox4 = tArrow3 + 0.3` into the existing timing chain. Push `tStrip` to `tBox4 + 0.4 + 0.1` so the bottom "Deterministic · Auditable · Multi-framework" strip still appears last.

5. **Vertical budget**: removing the screenshot block (~340px tall + caption + 40+48px gaps ≈ 450px) frees plenty of room for the new box (~220px tall + arrow ~32px + small gap). Net reduction in slide height, so no risk of clipping.

6. **Keep unchanged**: header ("THE PRODUCT" / "Meet Glacier." / subhead), the three top-row WorkflowBoxes and arrows, the bottom "Deterministic · Auditable · Multi-framework" strip.

### Files touched

- `src/slides/Slide4.tsx` — only this file. No changes to `WorkflowBox` or `ArrowCell` components themselves; the new box reuses `WorkflowBox` exactly.
- The `glacier-csrd-dashboard.png` asset stays on disk (no longer imported); harmless.
