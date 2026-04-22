

## Fix: vertical centering on Slides 1, 2, 3, 4, 5, 7, 8, 10

### Diagnosis
Every slide's outer column uses `justifyContent: "flex-start"`. On a 1561px-tall viewport, all content stacks at the top and the leftover height becomes a large empty navy band above the footer — exactly what you're seeing. Slide 2 additionally uses `marginBottom: "auto"` on the diagram, pushing the thesis line to the very bottom and creating an extra void.

The memory rule "never use `margin: auto` to vertically center" was applied too aggressively — it was meant to prevent _per-element_ auto margins that fight content flow. Switching the outer flex column to `justifyContent: "center"` is the correct, well-behaved way to vertically center a content block as a unit.

### Changes (all minimal, surgical)

**Slides 1, 2, 3, 4, 5, 7, 8, 10** — in each slide's outer wrapper `<div>` (the one directly inside `<SlideFrame>`):
- Change `justifyContent: "flex-start"` → `justifyContent: "center"`

**Slide 2 only** — in the center "vice diagram" container (line 142–144):
- Remove `marginBottom: "auto"`
- Keep `marginTop: "clamp(24px, 5vh, 64px)"` as a controlled gap

**Slide 6 and Slide 9** — leave untouched (Slide 6 has dense content + logo grid that already fills; Slide 9 wasn't in your list).

### Safety checks
- Existing `clamp(...vh)` spacers continue to provide breathing room between sections; they don't fight `justify-content: center`.
- No content overflows at desktop heights (1080–1600px). At mobile (390×724), `justify-content: center` still works because content height ≤ available height with `clamp` spacers shrunk to floor.
- Memory file `mem://design/slide-layout-defaults.md` will be updated to clarify: the ban is on `margin: auto` on individual children, not on `justifyContent: "center"` for the outer column.

### Files touched
- `src/slides/Slide1.tsx`
- `src/slides/Slide2.tsx`
- `src/slides/Slide3.tsx`
- `src/slides/Slide4.tsx`
- `src/slides/Slide5.tsx`
- `src/slides/Slide7.tsx`
- `src/slides/Slide8.tsx`
- `src/slides/Slide10.tsx`
- `mem://design/slide-layout-defaults.md` (rule clarification)
- `mem://index.md` (one-line update to the void-prevention rule)

