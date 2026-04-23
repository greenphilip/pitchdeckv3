

## Slide 11 — Polish pass

Fix the data inconsistency, tame the typography, and clean up the developer placeholder so the closing slide lands cleanly.

### 1. Sync the ask figures with Slide 1
Update the headline numbers in `src/slides/Slide11.tsx` to match the canonical ask used elsewhere in the deck:
- `€300k unlocks €750k` → `€250k unlocks €425k`

(If you'd prefer Slide 1 to change instead, say so — I'll flip the direction. Default is to align Slide 11 to Slide 1.)

### 2. Tighten typography hierarchy
Current sizes are 104px and 80px, both bold — they fight each other and crowd out the columns below.
- Line 1 (`€250k unlocks €425k.`): `104px` → `clamp(34px, 5.2vw, 88px)`
- Line 2 (`Twelve months to a Series A on €2.4M ARR.`): `80px` → `clamp(22px, 3vw, 48px)`, font-weight `500` (was 700)

Result: line 1 stays the hero, line 2 reads as the supporting clause.

### 3. Calm the icon column
Six identical Mint `CheckCircle` icons + Mint code/chart icons + Mint headline numbers + Mint eyebrow + Mint italic close = mint overload.
- Change the three `MILESTONES` `CheckCircle` icons from Mint to Light Gray (`#F1F1F1`) at 70% opacity.
- Keep the `USE OF FUNDS` icons (Code, TrendingUp, Server) Mint — they're the differentiated set.

### 4. Layout breathing room
- Column block `maxWidth`: `1100px` → `1300px` (matches headline width)
- Gap between headline block and columns: `marginTop: 44px` → `clamp(24px, 4vh, 56px)`
- Gap between italic close and bottom: `marginTop: 56px` → `clamp(20px, 3vh, 40px)`
- Reduce the explicit `60px` spacer above the bottom placeholder to `clamp(16px, 2vh, 32px)` so the placeholder stops getting clipped by the progress dots.

### 5. Remove the developer placeholder
The bracketed line `[Existing investor participation: add here if applicable — critical signal]` is internal scaffolding, not investor-facing. Delete the entire bottom placeholder `motion.div` block.

### 6. Sharpen the italic close
`color: ${MINT}E6` (90% Mint) reads soft on Navy. Change to solid `LIGHT` (`#F1F1F1`) and keep the inline emphasis span Mint. The emphasis still pops, the surrounding sentence is legible.

### Files touched
- `src/slides/Slide11.tsx` only

### Not touched
- SlideFrame, animations, brand palette, slide numbering, Column component structure, eyebrow, or the `USE OF FUNDS` icons.

