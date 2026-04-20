

# Slide 1 — Title Slide

Build the deck's opening slide: a customer-situation hook framed by the Glacier wordmark on top and a meta line on bottom.

## What gets built

**File touched:** `/src/slides/Slide1.tsx` (rewrite). Nothing else.

**Structure (top → middle → bottom, all centered horizontally):**

```text
            Glacier                          ← wordmark, Mint
                                              
                                              (auto gap)
                                              
   Between regulatory chaos and              ← Line 1, big
   relentless pressure.                        "chaos" Blue, "pressure" Mint
                                              
   Glacier helps companies get ESG           ← Line 2, smaller
   reporting done — faster, with               "faster" + "quality they can
   quality they can defend.                    defend" Mint
                                              
                                              (auto gap)
                                              
   Glacier • April 2026 • Bridge round       ← meta, mono, dim
   • €250k → unlocks €425k
```

**Layout mechanics**
- Outer flex column, `justify-start`, `align-items: center`, full width/height.
- Headline block uses `margin-top: auto` and `margin-bottom: auto` to vertically float between the wordmark anchor and the meta anchor.
- Headline `max-width: min(1300px, 92vw)`, centered text.
- Inter-line gap: `clamp(16px, 3vh, 36px)`.
- All padding handled by `SlideFrame` (no extra outer padding added).

**Typography (all clamp-based, brand hex only)**
- Wordmark: `clamp(20px, 2.2vw, 32px)`, weight 600, letter-spacing 0.08em, Mint `#6DD4AD`.
- Line 1: `clamp(28px, 4.5vw, 64px)`, weight 700, tracking -0.02em, line-height 1.15, Light Gray `#F1F1F1`. Spans: "chaos" in Blue `#539ADB`, "pressure" in Mint `#6DD4AD`.
- Line 2: `clamp(16px, 2vw, 28px)`, weight 400, line-height 1.5, Light Gray at 85%. Spans: "faster" and "quality they can defend" in Mint, weight 500.
- Meta: `clamp(11px, 1vw, 14px)`, JetBrains Mono, Light Gray at 55%, letter-spacing 0.02em. "Glacier" token in Mint, weight 600.

**Mobile behavior (`useIsMobile` at 768px)**
- Headline lines wrap naturally — no forced breaks.
- Meta line splits into two stacked rows on mobile: `Glacier • April 2026` / `Bridge round • €250k → unlocks €425k`. Desktop renders as one row.
- Vertical budget at 390×724 fits within ~490px of content + SlideFrame padding.

**Animations (Framer Motion, transform/opacity only)**
| Element | From → To | Duration | Delay |
|---|---|---|---|
| Wordmark | opacity 0 → 1 | 0.4s | 0s |
| Headline Line 1 | y 20 → 0, opacity 0 → 1 | 0.5s | 0.4s |
| Headline Line 2 | y 20 → 0, opacity 0 → 1 | 0.5s | 0.9s |
| Meta line | opacity 0 → 1 | 0.3s | 1.4s |

All ease-out, all under 0.5s individually, well under deck-wide animation rules.

## Guardrails

Do not touch: `SlideFrame`, `useIsMobile`, `Presentation`, navigation, progress dots, transitions, theme tokens, or Slides 2–10.

## Verification after build

- Desktop (1440×900) and current preview viewport: wordmark top-centered, headline visually centered, meta bottom-centered. No clipping, no horizontal scroll.
- Mobile (390×724): all three anchors visible, meta stacks into two rows, headline wraps naturally, no overflow.
- Console clean.
- Confirm "chaos" renders Blue and "pressure" / "faster" / "quality they can defend" render Mint.

