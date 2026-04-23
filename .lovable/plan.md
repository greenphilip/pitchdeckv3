

## Slide 10 — Enlarge team avatars so faces are visible

Bump the avatar circles on Slide 10 from `110px` to `160px` and adjust surrounding spacing so names + descriptions move down naturally without breaking the 5-column grid or the slide's vertical rhythm.

### 1. Avatar size
In `src/slides/Slide10.tsx`, the team grid renders each member's avatar as a `110px × 110px` circle. Change both `width` and `height` to `160px`.

- Larger faces become legible at projector distance.
- 160px × 5 columns + 40px gaps = ~960px — still fits comfortably in the `min(1400px, 100%)` grid container at 1379px viewport.

### 2. Photo framing — show full face, not cropped
Current `objectPosition: "center 20%"` was tuned for the small circle. With a 160px circle the existing photo will read better with `objectPosition: "center top"` so Rainhard's full face (not just forehead) sits in frame. Keep `objectFit: "cover"`.

### 3. Fallback icon scaling
The `User` lucide icon uses `width: 50%, height: 50%` — relative, so it scales automatically with the larger circle. No change needed.

### 4. Card vertical rhythm
The card column currently uses `gap: "20px"` between avatar / name-block / description. With a larger avatar this gap reads tight. Increase to `gap: "24px"` so the name sits a touch lower and the description has breathing room.

### 5. Grid top offset
The grid currently has `marginTop: "80px"` below the header. With taller cards the whole block grows by ~50px. Reduce `marginTop` to `"56px"` to preserve the slide's overall vertical balance and avoid pushing the bottom anchor ("Headcount: 15…") into the progress dots.

### 6. Mobile behavior
On mobile (`isMobile === true`) the grid is `repeat(2, minmax(0, 1fr))` with `maxHeight: 55vh` and `overflowY: auto`. A 160px avatar is fine in a 2-col mobile grid (~50vw wide cells). No layout change needed — the existing scroll panel absorbs the extra height.

### 7. What stays the same
- Name typography (`22px`, weight 600, Light)
- Title typography (`17px`, Mint)
- Background line (`18px`, Light at 70%, 3-line clamp)
- Header, eyebrow, headline, bottom anchor, animations, delays, palette, SlideFrame variant, slide numbering.

### Files touched
- `src/slides/Slide10.tsx` only.

