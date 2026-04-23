

## Center the screenshot row on Slide 4

The lower section (screenshot + caption) currently uses a `3fr / 2fr` grid which makes the screenshot sit left-of-center relative to the three workflow boxes above it. I'll re-balance so the screenshot is visually centered on the slide.

### Change

In `src/slides/Slide4.tsx`, the screenshot+caption grid (around lines 254–264):

- Switch grid columns from `minmax(0, 3fr) minmax(0, 2fr)` to a centered layout: `auto minmax(0, 420px)` with the whole grid `justifyContent: "center"`, OR simpler — wrap the screenshot in a container with `margin: 0 auto` and let the caption sit beside it without forcing 3/5 width.

Concretely:
- Set `gridTemplateColumns` (desktop) to `minmax(0, 560px) minmax(0, 360px)` and add `justifyContent: "center"` on the grid so the pair is centered as a block under the three workflow cards.
- Keep mobile as `1fr` stacked (unchanged).
- Screenshot motion.div: add `margin: "0 auto"` and `justifySelf: "center"` so the image itself stays centered within its column.

### Result

The screenshot sits visually centered beneath the middle workflow card, with the caption to its right, matching the centered alignment of the rest of the slide.

