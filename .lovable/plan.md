## Delete display Slide 5 ("The Compounding Effect") and renumber the deck to 9 slides

### Mapping

Current deck array:
```
[Slide1, Slide2, Slide3, Slide4, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11]
display: 1       2       3       4      5       6       7       8       9        10
```

Display Slide 5 is the file `src/slides/Slide6.tsx` ("THE COMPOUNDING EFFECT" — three time-compression bars). Its content already lives as a free-floating chart inside Slide 4 (the duplicate added earlier), so removing the standalone slide loses no information.

New deck (9 slides):
```
[Slide1, Slide2, Slide3, Slide4, Slide7, Slide8, Slide9, Slide10, Slide11]
display: 1       2       3       4      5       6       7       8        9
```

### Changes

**1. `src/components/Presentation.tsx`**
- Remove `import Slide6 from "@/slides/Slide6";`
- Remove `Slide6` from the `slides` array.
- Update overview grid template from `gridTemplateColumns: repeat(5, 1fr); gridTemplateRows: repeat(2, 1fr)` to `gridTemplateColumns: repeat(3, 1fr); gridTemplateRows: repeat(3, 1fr)` so 9 tiles fit cleanly (3×3).
- Keyboard `/^[1-9]$/` shortcut range already covers 1–9. No change.

**2. Renumber `slideNumber` & `totalSlides` on each remaining slide**
All `totalSlides` go from `10` → `9`. `slideNumber` updates per new position:

| File | Old `slideNumber` | New `slideNumber` |
|---|---|---|
| `Slide1.tsx` | 1 | 1 |
| `Slide2.tsx` | 2 | 2 |
| `Slide3.tsx` | 3 | 3 |
| `Slide4.tsx` | 4 | 4 |
| `Slide7.tsx` | 6 | 5 |
| `Slide8.tsx` | 7 | 6 |
| `Slide9.tsx` | 8 | 7 |
| `Slide10.tsx` | 9 | 8 |
| `Slide11.tsx` | 10 | 9 |

(File names stay as-is to keep the diff small and avoid rewriting many import statements; the user only sees display numbers.)

**3. Delete dead files**
- `src/slides/Slide6.tsx` — no longer referenced anywhere.
- `src/slides/Slide5.tsx` — already orphaned from a previous removal (still on disk, not in the deck). Delete to clean up.

### What stays untouched

- All slide content, copy, animations.
- Keyboard navigation logic.
- The compounding-effect chart on Slide 4 (the user's free-floating duplicate) stays as is — it now becomes the only place this content lives.

### Verification

After edits I'll run `tsc --noEmit` to confirm no broken imports.
