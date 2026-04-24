## Audit results & rename plan

### Audit

The user-facing slide numbering (the `slideNumber` prop displayed in the top-right of each slide) is correct everywhere — all 9 slides number 1 through 9. **No on-screen labels are wrong.**

The naming inconsistency is internal:

| File | Display position | Internal function name | File-name match? |
|---|---|---|---|
| `Slide1.tsx` | 1 | `Slide1` | ✓ |
| `Slide2.tsx` | 2 | `Slide2` | ✓ |
| `Slide3.tsx` | 3 | `Slide3` | ✓ |
| `Slide4.tsx` | 4 | `Slide4` | ✓ |
| `Slide7.tsx` | 5 | `Slide6` | ✗ both stale |
| `Slide8.tsx` | 6 | `Slide7` | ✗ both stale |
| `Slide9.tsx` | 7 | `Slide8` | ✗ both stale |
| `Slide10.tsx` | 8 | `Slide9` | ✗ both stale |
| `Slide11.tsx` | 9 | `Slide10` | ✗ both stale |

This is leftover drift from the two earlier "remove a slide" passes. It's harmless functionally but confusing for navigation, search, and future edits.

### Fix

Rename files **and** function names so file ↔ function ↔ display-position all match:

| Move | New function name |
|---|---|
| `Slide7.tsx` → `Slide5.tsx` | `Slide5` |
| `Slide8.tsx` → `Slide6.tsx` | `Slide6` |
| `Slide9.tsx` → `Slide7.tsx` | `Slide7` |
| `Slide10.tsx` → `Slide8.tsx` | `Slide8` |
| `Slide11.tsx` → `Slide9.tsx` | `Slide9` |

Order of operations matters because `Slide7.tsx` exists when we want to write `Slide7.tsx` from old `Slide9.tsx`. I'll move from low number first (`Slide7→Slide5` clears Slide7 slot) then chain (`Slide8→Slide6` clears Slide8, etc.) — this works because each move's destination is freed by the previous move.

Inside each renamed file:
- Update `export default function SlideX()` to the new number.

Then in `src/components/Presentation.tsx`:
- Replace `Slide7..Slide11` imports with `Slide5..Slide9` from their new paths.
- Update the `slides` array accordingly: `[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9]`.
- Drop the no-longer-needed blank line where the old import gap sat.

### What stays unchanged

- All slide content, copy, animations, assets.
- `slideNumber` props (already correct).
- Asset imports inside each slide (they reference `@/assets/...`, not sibling slides).

### Verification

`tsc --noEmit` after the renames to confirm imports resolve.
