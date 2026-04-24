## Slide 1 visual audit + fix

### What's wrong

Slide 1 renders inside a fixed 1920×1080 canvas with 80px padding (top + bottom = 160px), giving **920px of vertical room** for content. The current content stack measures roughly:

```text
Logo (280)            ~280
Logo→tagline gap       20
Tagline                ~22
Spacer                 80
Headline (104px,      ~460   (3-4 wrapped lines of the long sentence)
  3-4 lines)
Gap                    44
Accent line            44
Gap                    44
Subhead (28×1.55,     ~87
  ~2 lines)
Spacer                120
Bottom meta            ~30
                    ─────
Total                ~1231   ← exceeds 920 budget by ~310px
```

The outer column also uses `justifyContent: center` with `overflow: hidden` on the canvas, so the overflow gets clipped symmetrically — top tagline and bottom meta get cut off, exactly the symptom reported.

This regression appeared when the headline grew (`"Glacier helps companies get ESG reporting done — faster, with quality they can defend."` is much longer than the original two-word headline the 104px size was designed for).

### Fix

Rebalance Slide 1 so the stack fits in 920px and the column self-distributes:

1. **Switch `justifyContent` from `center` → `space-between`** on the outer column, with small explicit `paddingTop` / `paddingBottom`. Removes the clipping risk and removes the need for hardcoded 80px / 120px spacers.
2. **Logo height: 280 → 180** (mobile 180 → 140). Recovers ~100px and matches a hero-mark scale, not a giant brand splash.
3. **Headline fontSize: 104px → 76px**. The longer sentence wraps to 2-3 lines comfortably inside 1500px; saves another ~120-160px.
4. **Inner gap on headline block: 44px → 32px**, accent line height 44 → 32. Tightens the cluster without losing rhythm.
5. **Subhead: 28px → 26px, lineHeight 1.55 → 1.5**. Minor tightening.
6. **Remove the two hard 80px / 120px spacer divs.** `space-between` distributes the leftover room automatically.

### New vertical budget (post-fix)

```text
Top block (logo+tag)  ~218
Center block          ~430   (headline ~340 + accent 32 + gaps 64 + subhead ~80)
Bottom meta           ~30
Distributed gaps      ~242   (auto)
                    ─────
Total                  920   ✓ fits
```

### File touched

- `src/slides/Slide1.tsx` — only this file. No changes to `SlideFrame`, `ScaledSlide`, or any other slide.

### Notes

- Brand emphasis is preserved: Glacier statement still leads, mint underline on "faster", mint span on "quality they can defend".
- The "Built for companies caught between regulatory chaos and relentless pressure." subhead stays untouched in copy.
- Bottom meta dot + "Glacier • April 2026 • Bridge round • €250k → unlocks €425k" remains as-is.
