

## Slide 9 — Anchor the eye on SOM

Reframe the left-column market funnel so SOM (the credible, near-term opportunity) becomes the primary visual anchor for a conservative family-office reader, while TAM and SAM recede into supporting context.

### 1. Bar height hierarchy (invert the visual weight)
Currently all three bars are `height: 64px`. Make height inversely proportional to abstraction:
- **TAM**: `64px` → `40px`
- **SAM**: `64px` → `48px`
- **SOM**: `64px` → `88px` (and add `borderRadius: 6` instead of 4 to subtly differentiate)

Result: SOM is more than 2× the height of TAM despite being 8% of its width. The eye reads "this is the important one" before parsing labels.

### 2. SOM bar — add a Mint glow + left accent
On the SOM bar only:
- `boxShadow: 0 0 0 1px ${MINT}, 0 8px 32px ${MINT}40` — crisp 1px outline plus a soft Mint halo on Navy.
- Add a 4px-wide solid Mint vertical accent bar flush to the left of the bar container (inside the flex row, before the bar track), height matching the SOM bar. Reads as a "you are here" marker.

TAM and SAM get no shadow, no accent — flat color blocks.

### 3. Left-label typography (TAM/SAM/SOM mono labels)
Currently all three are `20px / weight 600 / Light`.
- **TAM**: `16px`, weight `400`, color `${LIGHT}80` (50% opacity)
- **SAM**: `16px`, weight `400`, color `${LIGHT}A6` (65% opacity)
- **SOM**: `22px`, weight `700`, color `${MINT}` (full Mint, was Light)

### 4. Right-label typography (the descriptions)
Currently all three are `24px / weight 500 / Light`.
- **TAM** (`TAM €1.3bn → €7.8bn`): `18px`, weight `400`, color `${LIGHT}80`
- **SAM** (`SAM €520m`): `18px`, weight `400`, color `${LIGHT}A6`
- **SOM** (`SOM €100m ≈ 5,000 customers @ €20k ACV`): `28px`, weight `700`, color `${LIGHT}`, with the `€100m` and `5,000 customers` numerics wrapped in `<span style={{ color: MINT }}>` for in-line emphasis.

### 5. SOM gets a one-line subcaption
Directly under the SOM right-label, add a small line:
- Text: `Our 5-year target — credible, bottom-up`
- Style: `13px`, italic, color `${LIGHT}99`, `marginTop: 6px`
- Purpose: tells a conservative investor SOM is our actual plan, not a marketing TAM hand-wave.

### 6. Animation reordering — SOM lands last and lingers
Currently bars animate top-to-bottom (TAM → SAM → SOM) at `delay: 0.35 + i * 0.18`. Keep order but:
- Slow SOM's bar fill from `0.5s` to `0.7s` (others stay 0.5s).
- Add a one-time pulse to the SOM accent marker after the bar lands: `scale 1 → 1.15 → 1` over 0.6s, delay 1.4s. Done once, not looped — pulses can feel cheap if repeated.

### 7. Restructure the data array
Add per-row config to `marketBars` so the rendering logic stays clean:
```ts
{ key: 'TAM' | 'SAM' | 'SOM',
  emphasis: 'muted' | 'medium' | 'primary',
  height: number,
  ... }
```
Render branches off `emphasis` for opacity, weight, shadow, accent bar, and subcaption. No new components — just conditional styles inside the existing `.map()`.

### 8. Bottom helper text — keep, soften
The `+ €7bn adjacent regulatory reporting market.` line below the bars stays as-is (already at 65% opacity), but reduce from `18px` → `15px` so it doesn't compete with the new SOM weight.

### Visual outcome
```text
TAM  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬   TAM €1.3bn → €7.8bn         (faded, thin)
SAM  ▬▬▬▬▬▬▬▬▬▬▬                       SAM €520m                    (medium, thin)
SOM  ▮▬▬   ◀ glowing                   SOM €100m ≈ 5,000 customers… (BOLD, tall, Mint)
                                       Our 5-year target — credible, bottom-up
```

### Files touched (when implemented)
- `src/slides/Slide9.tsx` only.

### Not touched
- Right column (expansion roadmap), header, bottom strip, brand palette, SlideFrame, slide numbering, animation easing, mobile layout (responsive behavior preserved — just heights/sizes/weights change).

