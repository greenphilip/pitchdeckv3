## Fix Philip's photo alignment on Slide 7

### Steps
1. **Revert the padded `philip.png`** back to the original (no transparent extent) so the head fills the frame at the same zoom as the others.
2. **Per-member `objectPosition` override**: add an optional `photoPosition` field to the team member type. Default stays `"center top"`. Set Philip's to something like `"center 20%"` (or `"center -10%"`) so his head sits higher in the circle, aligning with the rest of the row.
3. Visually verify by screenshot at the current viewport — adjust the offset if heads still aren't aligned.

### Technical detail
- `src/slides/Slide7.tsx`: extend the member object with `photoPosition?: string`, pass it into the `<img>` `style.objectPosition` (fallback `"center top"`).
- Image file restored from the pre-padding version (re-copy from the user's original upload).
