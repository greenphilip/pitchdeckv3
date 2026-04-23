

## Rename Slide10 → Slide11

### Changes
1. **Create `src/slides/Slide11.tsx`** — copy of current `Slide10.tsx` with one edit: `<SlideFrame variant="minimal" slideNumber={10} totalSlides={10}>` becomes `<SlideFrame variant="minimal" slideNumber={11} totalSlides={11}>`.
2. **Delete `src/slides/Slide10.tsx`**.
3. **Update `src/components/Presentation.tsx`** — the only file importing Slide10. Change the import path from `@/slides/Slide10` to `@/slides/Slide11` and update the component reference (`Slide10` → `Slide11`) in the slides array.

### Not changing
- No other slide files touched.
- `totalSlides` is bumped to 11 only inside the renamed file (since the slide number itself moved to 11). If you want every slide's footer to read "/ 11" instead of "/ 10", that's a separate pass — flag if you want it included.

### Files touched
- `src/slides/Slide11.tsx` (new, copied from Slide10)
- `src/slides/Slide10.tsx` (deleted)
- `src/components/Presentation.tsx` (import + reference rename)

