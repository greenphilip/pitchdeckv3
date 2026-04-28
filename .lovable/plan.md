## Add Alissa Kovarik to Slide 7

Insert a new team member card between Rainhard Fuchs and Philip Reuchlin on Slide 7, matching the existing card style.

### Person details
- **Name:** Alissa Kovarik
- **Title:** Head of Product
- **Background:** Former President JA Austria, 5+ years building sustainability products
- **Photo:** Provided headshot (casual navy shirt, gray background)
- **Logo:** JA Austria lockup (provided .avif)

### Asset handling
1. Copy the headshot → `src/assets/team/alissa-kovarik.png` (convert/rename from the uploaded JPG).
2. Copy the JA Austria logo → `src/assets/logos/ja-austria.png` (convert from .avif to .png so it works reliably in `<img>`; .avif is fine in modern browsers but we'll standardize on .png to match other team logos like `pioneers.png`, `bmdw.png`).

### Code changes (`src/slides/Slide7.tsx`)
1. Add two imports: `alissaPhoto` and `jaAustriaLogo`.
2. Insert a new entry into the `team` array at index 1 (between Rainhard and Philip):
   ```ts
   {
     name: "Alissa Kovarik",
     title: "Head of Product",
     background: "Former President JA Austria. 5+ years building sustainability products.",
     photo: alissaPhoto,
     logos: [{ src: jaAustriaLogo, invert: true }],
   }
   ```
3. The JA Austria lockup appears to be dark on light — apply `invert: true` so it reads cleanly on the Dark Blue background, consistent with other dark-on-light logos (e.g., Pioneers, Bitpanda).

### Layout impact
- Team grows from 5 → 6 members.
- Desktop grid is currently `repeat(5, 1fr)` → change to `repeat(6, 1fr)` so all members stay on one row (matches the current single-row visual rhythm).
- Mobile grid stays `repeat(2, 1fr)` → 6 members render as a clean 3-row × 2-col layout (was 3 rows with a half-empty last row, now perfectly balanced).
- Bottom anchor headcount stays "15 today / Hiring 4-5" — no change requested.

### QA
- Verify on desktop (1920×1080) that 6 cards fit comfortably in the row without crowding logos or bios.
- Verify on mobile (390 wide) that the new 2×3 grid stays readable and avatar floor (120px) still works.
- Confirm Alissa's photo crops well with `objectPosition: "center top"` (face is centered in the source).