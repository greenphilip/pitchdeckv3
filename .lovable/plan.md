
# Presentation Slide Deck App — Foundation

Build the architectural foundation for a 10-slide presentation app. No real content yet — just the frame, navigation, and slide scaffolding ready for content prompts.

## What gets built

**1. Slide frame system (`SlideFrame.tsx`)**
- Full-viewport container (100vw × 100vh) with deep navy background (#143560) and off-white text (#F1F1F1)
- Three visual variants:
  - `minimal` — clean, optional soft radial gradient
  - `technical` — dotted blue grid overlay (#539ADB, 7% opacity, 32px spacing)
  - `technical-light` — same grid at 3% opacity
- Responsive padding: `clamp(32px, 5vw, 80px)`
- Inner content flows top-down (flex column, never centered vertically)
- Technical variants show "SLIDE n / 10" in mono font, top-right, mint at 60% opacity
- Layered z-index so grid/number sit behind content

**2. Ten placeholder slides (`Slide1.tsx` … `Slide10.tsx`)**
- Each wraps `SlideFrame` with `variant='minimal'`
- Centered "Slide N" label in large mint type as a placeholder
- Ready to be individually rewritten by future prompts

**3. App shell (`App.tsx`)**
- Tracks current slide (0–9)
- Smooth horizontal slide transitions via `AnimatePresence` (fade + 40px x-shift, 0.4s easeOut)
- Renders navigation chrome on top of the active slide

**4. Navigation system**

Keyboard shortcuts (window listener, cleaned up on unmount):
| Key | Action |
|---|---|
| → / Space / Enter | Next slide |
| ← | Previous slide |
| Home / End | Jump to first / last |
| 1–9 | Jump to slide N |
| O / Escape | Toggle 2×5 overview grid |
| F | Toggle fullscreen |
| B | Toggle black screen overlay |

On-screen controls:
- Left/right chevron buttons at edges (30% opacity, 100% on hover)
- Progress dots bottom-center — current is mint 10px filled, others light gray 30% 8px, all clickable
- Overview mode: 2×5 thumbnail grid, click to jump
- Black screen: full-viewport black overlay (z-index 999)

**5. Typography**
- `@fontsource/inter` and `@fontsource/jetbrains-mono` installed and imported
- Tailwind config extended: `font-sans` → Inter, `font-mono` → JetBrains Mono
- Inter applied globally to body

**6. Mobile hook (`useIsMobile.ts`)**
- Synchronous initial read from `matchMedia('(max-width: 767px)')` to avoid hydration flicker
- Listener with proper cleanup

## Verification I'll run after build

**Desktop (1440×900):** all 10 slides render, every keyboard shortcut works, progress dots update and are clickable, transitions are smooth, overview shows a clean 2×5 grid, B/F toggles function, no console errors. I'll temporarily flip a slide to `technical` to confirm the grid overlay renders, then revert.

**Mobile (390×724):** all 10 slides render with no clipping, no horizontal scroll, progress dots tappable, no console errors.

## Out of scope (intentionally)
- No real slide content — that comes from follow-up prompts
- No editor, presenter view, or notes panel
- No persistence — slide state is in-memory only

