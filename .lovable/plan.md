

## Visual audit — findings & fix plan

### Diagnosis (what's wrong, deck-wide)

**A. Type ceilings cap too low for big screens.** Every clamp ceiling was tuned for a 1440px laptop. On 1920–2300px displays, mono labels render at 11–16px (visually tiny) and headlines top out around 52–76px while the slide has 1080px+ to fill. That mismatch is the "small text + huge gaps" problem.

**B. Slide 1 uses `margin: auto` to push the headline to vertical center.** When the headline can't scale past 76px, `auto` margins absorb the surplus → 600px of empty navy above and below. Same pattern (less severe) on Slides 9 & 10.

**C. Section gaps scale with `vh` but content doesn't.** Slides 5–8 have `gap: clamp(36px, 6vh, 80px)` between sections, but the chart bars, stat numbers, and card paddings cap at fixed pixel ceilings. Result: gaps grow on big screens, content stays small.

**D. Emphasis is inconsistent.** Slides 1, 2, 6 do it well (Mint span + underline). Slides 5, 8, 9 underuse it — key numbers and punchline words don't pop.

**E. Footer/eyebrow text floor is ≤ 12px on Slides 1, 3, and SlideFrame's slide-number indicator.** Below the Knowledge File rule (12–16px floor for mono labels).

---

### Fixes (one pass, all 10 slides)

**1. Raise clamp ceilings, deck-wide.**
- Mono eyebrow / label: `clamp(12px, 1.1vw, 16px)` → `clamp(13px, 1vw + 0.2rem, 20px)` (target ~18–20px on 2K)
- Mono caption / footer: `clamp(11px, 0.9vw, 13px)` → `clamp(12px, 0.85vw, 17px)`
- SlideFrame "SLIDE N / 10" indicator: `clamp(10px, 0.8vw, 12px)` → `clamp(12px, 0.9vw, 16px)`
- Subhead body: `clamp(14px, 1.4vw, 20px)` → `clamp(15px, 1.3vw, 24px)`
- Card body text: `clamp(13px, 1.1vw, 16px)` → `clamp(14px, 1.05vw, 19px)`
- Headlines (technical slides): `clamp(24px, 4vw, 52px)` → `clamp(26px, 3.8vw, 64px)`
- Headlines (minimal slides — 1, 2, 9, 10): `clamp(32px, 5.5vw, 80px)` → `clamp(34px, 5.2vw, 104px)`
- Big stat numbers (Slide 6): `clamp(28px, 4vw, 56px)` → `clamp(32px, 4vw, 72px)`
- Bar right-labels (Slides 5, 8): `clamp(18px, 2.2vw, 28px)` → `clamp(20px, 2.2vw, 36px)`

**2. Kill the "auto-margin void" on Slide 1.**
Replace `marginTop: auto / marginBottom: auto` on the center headline block with explicit `vh` gaps: top spacer `clamp(48px, 10vh, 140px)`, bottom spacer `clamp(48px, 8vh, 120px)`. Headline now sits in a controlled, breathable column instead of a 600px void.

**3. Apply same fix to Slides 9 & 10** where bottom anchors float far from the content.

**4. Tighten emphasis (color + weight) on under-emphasized headlines.**
- Slide 5: lift "hardest standard" to Mint weight 700 in the subhead.
- Slide 8: wrap "€1.3bn" Blue, "€7.8bn" Mint 700, "21%" Mint 700 in subhead.
- Slide 9: wrap "Regulatory depth" Blue, "Product discipline" Light, "Applied AI" Mint 700.
- Slide 10 italic close: lift "can't afford to be wrong" Mint 700.

**5. Cap the deck at a sensible max content width.**
SlideFrame children currently span 100% of `100vw - 2×clamp(32,5vw,80px)`. On a 2301px screen that's ~1900px of usable width. Add a `maxWidth: 1700px; margin: 0 auto` wrapper inside SlideFrame's content container so all slides share the same reading width — prevents the "stretched horizon" feel and keeps gap math predictable.

**6. SlideFrame slide-number indicator** moves from `top/right: clamp(16, 2vw, 28px)` to `clamp(20, 2vw, 36px)` so it doesn't kiss the hairline border on big displays.

---

### Files touched
- `src/components/SlideFrame.tsx` — slide-number ceiling, content max-width wrapper
- `src/slides/Slide1.tsx` — kill auto margins, raise type ceilings, raise tagline floor to 13px
- `src/slides/Slide2.tsx` — raise eyebrow + body ceilings, raise serif italic ceiling
- `src/slides/Slide3.tsx` — raise eyebrow (10→13 floor), card body, thesis mono tag
- `src/slides/Slide4.tsx` — raise pillar body ceiling, mono "01–05" labels
- `src/slides/Slide5.tsx` — raise bar right-label, callout body, lift "hardest standard" emphasis
- `src/slides/Slide6.tsx` — raise stat numbers, legend mono, mono caption
- `src/slides/Slide7.tsx` — raise body ceilings, mono attribution
- `src/slides/Slide8.tsx` — raise bar right-labels, badge mono, lift subhead emphasis
- `src/slides/Slide9.tsx` — kill bottom-margin void, headline emphasis spans, raise card text
- `src/slides/Slide10.tsx` — raise mono ceilings, lift italic close emphasis, anchor bottom placeholder

### Memory updates
- Update `mem://design/slide-layout-defaults.md` with the new ceiling table.
- Add new core rule: **never use `marginTop: auto` to center a block — use explicit `vh`-clamped spacers so big-screen voids don't appear.**

### Out of scope
- Mobile (390×724) layout — already overflowY:auto on each slide; raised ceilings stay within mobile floors.
- Animation timings, color palette, SlideFrame variants, navigation.

### Verification plan after implementation
- Screenshot Slides 1, 5, 6, 9 at 2301px (current viewport) and confirm headline + footer cluster within ~70% of vertical surface, no >25vh empty bands.
- Spot-check Slides 3, 4, 8 at 1366×768 (laptop projector) to confirm nothing overflows.

