Plan to fix Slide 7 title alignment:

1. Change each team card’s internal row structure so the name and title are separate grid rows instead of one flexible block.
2. Give the name row a reserved two-line height, top-aligned, so one-line and two-line names occupy the same vertical slot.
3. Put the title in the next row with a shared baseline across all six cards.
4. Keep the existing photo, description, and logo alignment behavior unchanged.

Technical details:
- In `src/slides/Slide7.tsx`, replace the combined name/title wrapper with separate name and title elements.
- Update the card grid rows from `auto auto 1fr auto` to a structure like `auto [name-slot] [title-slot] 1fr auto`.
- Use a clamp-based `minHeight` for the name slot, e.g. two lines at the current name font size, rather than relying on content height.
- Preserve existing responsive behavior and brand styling.