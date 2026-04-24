## Slide 2 — give the center "companies" pressure point more breathing room

### Change

In `src/slides/Slide2.tsx`, the 3-column vice diagram currently uses:

```tsx
gridTemplateColumns: "1fr minmax(140px, 220px) 1fr"
gap: "48px"
```

The narrow center column packs the pulsing "companies" focal point right up against the left (UNCERTAINTY) and right (PRESSURE) text rails.

Update to:

```tsx
gridTemplateColumns: "1fr minmax(260px, 360px) 1fr"
gap: "72px"
```

That widens the center column by ~140px and increases the column gap by 24px, pushing the left and right text outward and giving the center pressure-point its own clear airspace.

### Files touched

- `src/slides/Slide2.tsx` — only the grid line (~line 147–150).

No changes to mobile (still single-column stack), no changes to copy, icons, or animations. Inward arrows on the left/right sides re-anchor automatically to the new column width.
