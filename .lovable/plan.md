## Match Philip's photo framing to the rest of the team

### Problem
The other team photos are 612×408 landscape headshots tightly framed on the head & shoulders. Philip's source is a 408×612 full upper-body shot with lots of empty space above and around — that's why scale/offset overrides keep being needed.

### Plan
1. **Crop Philip's source PNG** to a tight square around his head & shoulders (roughly the top ~45% of the image, centered horizontally). Save back to `src/assets/team/philip.png`.
2. **Remove the per-photo overrides** (`photoPosition`, `photoScale`, `photoOffsetY`) for Philip in `src/slides/Slide7.tsx` so it uses the same default `objectFit: cover; object-position: center top` as everyone else.
3. Visually compare — if the head still sits lower/higher than the row, fine-tune the crop box (not the React code).

### Technical detail
- Use ImageMagick: `convert philip.png -gravity north -crop 408x408+0+40 +repage philip.png` (numbers tuned after inspecting the actual image).
- Keep the file path the same so no import changes are needed.
