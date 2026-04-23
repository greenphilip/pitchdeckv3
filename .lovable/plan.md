

## Bump `totalSlides` from 10 → 11 across all slide files

### Change
In every file under `src/slides/`, update the `SlideFrame` prop `totalSlides={10}` to `totalSlides={11}`. Leave `slideNumber` and all other content untouched.

### Files to modify
- `src/slides/Slide1.tsx`
- `src/slides/Slide2.tsx`
- `src/slides/Slide3.tsx`
- `src/slides/Slide5.tsx`
- `src/slides/Slide6.tsx`
- `src/slides/Slide7.tsx`
- `src/slides/Slide8.tsx`
- `src/slides/Slide9.tsx`
- `src/slides/Slide10.tsx`

(`Slide11.tsx` already has `totalSlides={11}` — skipped. No `Slide4.tsx` exists after the prior renumber.)

### Method
Single search/replace per file: `totalSlides={10}` → `totalSlides={11}`. No other edits.

### Report
After applying, I'll list each file actually modified.

