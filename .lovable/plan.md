## Replace Otto Group logo with EVN on the "Trusted by" wall (Slide 6)

### Background

Slide 6 (file `src/slides/Slide7.tsx` — file numbering doesn't match display numbering) renders a 2-column logo wall under "TRUSTED BY". One of the entries is Otto Group, which the user says is wrong and should be EVN (Energieversorgung Niederösterreich AG, Austrian utility, evn.at).

I already downloaded the official EVN wordmark SVG from Wikimedia Commons (`Logo_EVN.svg`) and placed it at `src/assets/logos/evn.svg`. The file is 1.7 KB, vector, and includes EVN's red-and-black brand colors — which is fine because the slide applies `filter: brightness(0) invert(1)` to every logo, normalizing them all to monochrome white at 0.75 opacity.

### Change

In `src/slides/Slide7.tsx`:

1. **Line 22** — replace the import:
   ```tsx
   // before
   import ottoGroupLogo from "@/assets/logos/otto-group.svg";
   // after
   import evnLogo from "@/assets/logos/evn.svg";
   ```

2. **Line 52** — replace the entry in the `logos` array:
   ```tsx
   // before
   { src: ottoGroupLogo, alt: "Otto Group" },
   // after
   { src: evnLogo, alt: "EVN" },
   ```

That's it — no layout, sizing, ordering, or styling changes. EVN takes the same slot Otto Group occupied (second entry, top row right column).

### Files touched

- `src/assets/logos/evn.svg` — already on disk (downloaded).
- `src/slides/Slide7.tsx` — two single-line edits.
- `src/assets/logos/otto-group.svg` — left on disk, no longer imported. Harmless.

### Notes

- The same monochrome treatment as the other 9 logos applies, so visual consistency is preserved.
- The logo is sized via `maxHeight: 56px / maxWidth: 100%` with `objectFit: contain` — no risk of distortion.
