

## Renumber Slides 4–9 upward by one

Shift each slide file up by one number, in reverse order so no two files ever claim the same name. Update each file's `SlideFrame` `slideNumber` prop, and update the import + array reference in `Presentation.tsx`.

### Rename order (strict)
1. `Slide9.tsx` → `Slide10.tsx` (set `slideNumber={10}`)
2. `Slide8.tsx` → `Slide9.tsx`  (set `slideNumber={9}`)
3. `Slide7.tsx` → `Slide8.tsx`  (set `slideNumber={8}`)
4. `Slide6.tsx` → `Slide7.tsx`  (set `slideNumber={7}`)
5. `Slide5.tsx` → `Slide6.tsx`  (set `slideNumber={6}`)
6. `Slide4.tsx` → `Slide5.tsx`  (set `slideNumber={5}`)

### Per-file edit
Inside each renamed file, update only the `slideNumber` prop on `<SlideFrame …>`. Leave `totalSlides` untouched (separate concern — flag if a deck-wide bump to 11 is wanted). Leave all other content unchanged.

### Presentation.tsx update
Single pass after all renames:
- Update imports: `Slide4`–`Slide9` paths/identifiers shift to `Slide5`–`Slide10`.
- Update the slides array so the order on screen is unchanged: the file formerly known as `Slide4` still appears in the 4th position, now imported as `Slide5`, etc.
- `Slide11` (the existing closing slide) stays last and untouched.

### Not changing
- Slides 1, 2, 3, 11 — untouched.
- `totalSlides` values inside any slide — untouched.
- No content, layout, or styling edits inside any slide body.

### Files touched
- `src/slides/Slide4.tsx` → renamed to `Slide5.tsx` (+ slideNumber bump)
- `src/slides/Slide5.tsx` → renamed to `Slide6.tsx` (+ slideNumber bump)
- `src/slides/Slide6.tsx` → renamed to `Slide7.tsx` (+ slideNumber bump)
- `src/slides/Slide7.tsx` → renamed to `Slide8.tsx` (+ slideNumber bump)
- `src/slides/Slide8.tsx` → renamed to `Slide9.tsx` (+ slideNumber bump)
- `src/slides/Slide9.tsx` → renamed to `Slide10.tsx` (+ slideNumber bump)
- `src/components/Presentation.tsx` (imports + array references)

