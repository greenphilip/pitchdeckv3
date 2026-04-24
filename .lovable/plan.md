## Remove Slide 5 ("Quality is the moat") and renumber the deck

### What changes

The deck currently has 11 slides. Slide 5 (the five-pillar "Quality is the moat" differentiation slide, file `src/slides/Slide5.tsx`) gets removed from the playback sequence. The remaining 10 slides slide up one position from slide 5 onward.

New order:

```text
Position  File             Was      Now
   1      Slide1.tsx        1/11     1/10
   2      Slide2.tsx        2/11     2/10
   3      Slide3.tsx        3/11     3/10
   4      Slide4.tsx        4/11     4/10
   —      Slide5.tsx        5/11     (removed from sequence)
   5      Slide6.tsx        6/11     5/10
   6      Slide7.tsx        7/11     6/10
   7      Slide8.tsx        8/11     7/10
   8      Slide9.tsx        9/11     8/10
   9      Slide10.tsx      10/11     9/10
  10      Slide11.tsx      11/11    10/10
```

### Files touched

1. **`src/components/Presentation.tsx`**
   - Remove the `import Slide5 from "@/slides/Slide5";` line
   - Remove `Slide5` from the `slides` array

2. **All 10 remaining slide files** — update their `<SlideFrame>` props:
   - `Slide1.tsx`: `slideNumber={1} totalSlides={11}` → `totalSlides={10}`
   - `Slide2.tsx`: `slideNumber={2} totalSlides={11}` → `totalSlides={10}`
   - `Slide3.tsx`: `slideNumber={3} totalSlides={11}` → `totalSlides={10}`
   - `Slide4.tsx`: `slideNumber={4} totalSlides={11}` → `totalSlides={10}`
   - `Slide6.tsx`: `slideNumber={6} totalSlides={11}` → `slideNumber={5} totalSlides={10}`
   - `Slide7.tsx`: `slideNumber={7} totalSlides={11}` → `slideNumber={6} totalSlides={10}`
   - `Slide8.tsx`: `slideNumber={8} totalSlides={11}` → `slideNumber={7} totalSlides={10}`
   - `Slide9.tsx`: `slideNumber={9} totalSlides={11}` → `slideNumber={8} totalSlides={10}`
   - `Slide10.tsx`: `slideNumber={10} totalSlides={11}` → `slideNumber={9} totalSlides={10}`
   - `Slide11.tsx`: `slideNumber={11} totalSlides={11}` → `slideNumber={10} totalSlides={10}`

3. **`src/slides/Slide5.tsx`** — leave the file on disk (no longer imported anywhere). Avoids touching git history; we can delete it later if confirmed it won't come back.

### Notes

- Filenames intentionally NOT renamed. Renaming `Slide6.tsx`→`Slide5.tsx` etc. would create dozens of cascading import/path changes for no functional benefit — `slideNumber` is the only thing the user sees on-screen.
- The Presentation overview grid auto-derives count from the `slides` array, so it updates from 11 to 10 automatically.
- Keyboard shortcut `5` will now jump to what was previously slide 6 (current `Slide6.tsx`), which is the new slide 5 — correct behavior.
- The "SLIDE N / 10" indicator (top-right on technical variants) will read 1/10 through 10/10.
