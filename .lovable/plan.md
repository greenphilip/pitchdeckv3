## Add Glacier logo prominently to password gate

Place the existing `src/assets/glacier-logo.svg` mark front-and-center on the `PasswordGate` screen, above the unlock card.

### Changes (single file: `src/components/PasswordGate.tsx`)

1. Replace the small text-only "Glacier" wordmark row at the top with a larger, centered logo presentation:
   - Import the SVG: `import glacierLogo from "@/assets/glacier-logo.svg";`
   - Render an `<img>` with the logo, sized responsively (`width: clamp(180px, 22vw, 280px)`, auto height), centered above the card.
   - Keep the small mint pulse dot as a subtle accent below or remove it in favor of the logo as the sole brand mark.
2. Adjust spacing so the logo + card still vertically center comfortably at common laptop heights (use `clamp()` margins, not fixed px).
3. Keep all existing functionality identical: passcode field, error shake, unlock flow, ambient gradients, footer line.
4. Add `alt="Glacier"` for accessibility; the existing "Glacier" text label becomes redundant and is removed.

### Notes
- The SVG is white-filled and works directly on the `#143560` background — no recoloring needed.
- No new dependencies, no logic changes, no other files touched.
