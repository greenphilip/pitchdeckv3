# Fix: Bitpanda logo invisible under Nina (Slide 7)

## What's happening

Nina's card lists two logos — Bitpanda and Shpock — both configured with `invert: true`. Shpock renders fine; Bitpanda does not appear.

## Likely causes (in order of probability)

1. **SVG load failure.** The Bitpanda SVG was added recently. If Vite isn't resolving the import (case mismatch, stale dev server, or the file landed in the wrong path), the `<img>` renders 0×0 and is silently invisible. Easy to confirm via DevTools Network tab or by temporarily adding a red border to the `<img>`.

2. **Fill color + filter mismatch.** The SVG's single path uses `fill="#282828"` (near-black). The `invert: true` branch applies `filter: invert(1) brightness(1.1)`, which should turn it into ~`#dadada` (light gray) — visible on navy. If the filter isn't being applied (e.g. inherited `mixBlendMode: screen` from a sibling, or browser quirk on `<img src=*.svg>` with single-color paths), the logo renders as `#282828` on `#143560` navy — effectively invisible (contrast ratio ~1.3:1).

3. **Aspect-ratio squeeze.** Bitpanda's intrinsic viewBox is 772×200 (3.86:1, very wide). On mobile the cap is `height: 36px` + `maxWidth: 120px`. `objectFit: contain` will shrink it to ~31px tall — small but still visible. Not the primary cause, but worth tightening.

## Proposed fix

Treat Bitpanda the same way BMDW/WBCSD are treated (`mono: true`), which uses a more reliable color-flip pipeline:

```ts
filter: "grayscale(1) invert(1) brightness(1.1)"
mixBlendMode: "screen"
```

Plus give it more horizontal room since it's a wide wordmark.

### Concrete change in `src/slides/Slide7.tsx`

Nina's logos array becomes:

```ts
logos: [
  { src: bitpandaLogo, mono: true, height: 28 },  // wide wordmark, allow more width
  { src: shpockLogo, invert: true },
],
```

And, defensively, raise the mobile `maxWidth` for `mono` logos from 120px to ~160px so the wide Bitpanda mark has room to breathe.

## Verification

1. Open Slide 7 in the preview at desktop and at 390px width.
2. Confirm Bitpanda renders as a light-gray wordmark above Shpock.
3. Check DevTools Network panel — confirm the SVG returns 200 OK.
4. If still invisible after the `mono` swap, the SVG isn't loading — re-import it and confirm the asset path.

## Files touched

- `src/slides/Slide7.tsx` — change Nina's `logos` array (1 line) and optionally bump the `mono` mobile maxWidth (1 line).

No other slides affected.
