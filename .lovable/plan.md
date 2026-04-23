

## Build Slide 4 — "Meet Glacier" product slide

### Scope
Create new file `src/slides/Slide4.tsx` per spec. Insert it into the slides array in `Presentation.tsx` between Slide3 and Slide5 so it appears in the 4th position. No other slides touched.

### Slide structure
`SlideFrame variant="technical" slideNumber={4} totalSlides={11}` wrapping a flex column (`justify-content: flex-start`, `align-items: center`).

**1. Header (centered)**
- Eyebrow "THE PRODUCT" — JetBrains Mono, Mint, uppercase, letter-spacing 0.12em, clamp(12px, 1.1vw, 16px)
- Headline "Meet Glacier." — clamp(28px, 5vw, 64px), weight 700, "Glacier" wrapped in Mint span
- Subhead "One evidence graph. Every ESG framework reads from it." — clamp(14px, 1.4vw, 20px), Light Gray @ 70%, max-width 900px, centered
- Internal gaps clamp(10px, 1.5vh, 20px) and clamp(12px, 2vh, 20px)

Section gap: clamp(36px, 6vh, 80px)

**2. Workflow row (hero)**
- Grid `1fr auto 1fr auto 1fr`, gap clamp(12px, 1.8vw, 24px), max-width min(1400px, 100%), margin 0 auto, align-items stretch
- Three boxes: Dark Blue fill, 1px Mint @ 30% border, radius 12px, padding clamp(20px, 2.4vw, 32px), flex column centered, gap clamp(10px, 1.4vh, 16px)
  - Box 1 — `01` / UploadCloud / "What you bring" / "Your documents, data, interviews. Any format."
  - Box 2 — `02` / Link2 / "What Glacier does" / "Extract, cite, draft. Every claim linked to its source. Every step human-reviewed."
  - Box 3 — `03` / ShieldCheck / "What you get" / "CSRD-grade reports. EcoVadis questionnaires. Evidence ready for the next framework."
- Two arrow cells: ArrowRight Lucide, Mint @ 70%, stroke 2, clamp(20px, 2.4vw, 32px)
- Mobile (useIsMobile): switch to single-column stack, replace ArrowRight with ArrowDown

Section gap: clamp(32px, 5vh, 56px)

**3. Screenshot + caption row**
- Grid `minmax(0, 3fr) minmax(0, 2fr)`, gap clamp(24px, 3vw, 56px), max-width min(1300px, 100%), margin 0 auto, align-items center
- Left: `<img>` from `/src/assets/glacier-csrd-dashboard.png`, width 100%, 1px Mint @ 40% border, radius 8px, shadow
  - Image is not yet uploaded — use the import path as specified; render a placeholder fallback (Dark Blue tile with dashed Mint @ 30% border + "Screenshot loading…" mono caption) wrapped in `onError` on the `<img>` so the slide doesn't break if the asset is missing. Document the expected path in a code comment.
- Right: overline "EVIDENCE TRACE VIEW" + body copy per spec
- Mobile: stack vertically, screenshot first

Section gap: clamp(28px, 4.5vh, 48px)

**4. Bottom strip (centered)**
- "Deterministic · Auditable · Multi-framework" — clamp(15px, 1.6vw, 22px), weight 700
- Three words in Mint, dots Light Gray @ 40%, letter-spacing 0.04em

### Animation (Framer Motion)
- Header eyebrow → headline → subhead, 0.08s stagger, opacity + y:20→0, 0.4s ease-out
- Workflow: Box 1 (scale 0.97→1 + opacity, 0.4s) → Arrow 1 (scaleX 0→1, origin left, 0.3s) → Box 2 → Arrow 2 → Box 3, sequenced via delays
- Screenshot: x:20→0 + opacity, 0.4s, delay 0.2s after Box 3
- Caption: opacity 0.3s, delay 0.15s after screenshot
- Bottom strip: opacity 0.3s last
- All transform/opacity only

### Presentation.tsx update
- Add `import Slide4 from "@/slides/Slide4";`
- Update slides array to `[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11]` (11 entries, matches `totalSlides=11`)

### Audit before finishing
Per `mem://preferences/slide-audit-checklist.md`: A) verify centering on outer column + each row, B) confirm gaps use clamp+vh, C) mono labels ≥12px floor, D) workflow boxes equal-height via `align-items: stretch`, no `margin: auto` on children.

### Files touched
- `src/slides/Slide4.tsx` (new)
- `src/components/Presentation.tsx` (one import + array entry)

### Not touched
SlideFrame, useIsMobile, navigation, theme, slides 1-3 and 5-11.

