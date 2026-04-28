## Slide 7 — Allow 4-line descriptions

**File:** `src/slides/Slide7.tsx`

**Change:** In the description block, increase `WebkitLineClamp` from `3` to `4`, and update the reserved `minHeight` to match 4 lines so logos sit on a consistent baseline across all cards.

### Technical detail
- `WebkitLineClamp: 3` → `WebkitLineClamp: 4`
- `minHeight: calc(18px * 1.45 * 3)` → `calc(18px * 1.45 * 4)` (desktop only, mobile stays auto)

This pushes the logo row down by ~one line of body text on every card while keeping all logo rows aligned.

No other layout, typography, or color changes.