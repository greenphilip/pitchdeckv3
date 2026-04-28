## Add Alissa Kvarik to Slide 7

**Position**: Insert as the 2nd team member, between Rainhard Fuchs (1st) and Philip Reuchlin (now 3rd).

**Person details**:
- Name: Alissa Kvarik
- Title: Head of Product
- Background: "former President JA Austria and 6+ years building sustainability products."
- Photo: `user-uploads://Alissa_Kovarik_-_Casual-removebg-preview-2.png`
- Logo: `user-uploads://JA_Austria_lockups_JA-b_edited-2.avif` (JA Austria)

### Steps

1. **Copy assets into the project**
   - `src/assets/team/alissa-kvarik.png` (her portrait)
   - `src/assets/logos/ja-austria.avif` (JA Austria lockup) — note: AVIF works fine in Vite/modern browsers; if rendering issues appear we'll convert to PNG.

2. **Edit `src/slides/Slide7.tsx`**
   - Add two imports: `alissaPhoto` and `jaAustriaLogo`.
   - Insert a new entry in the `team` array at index 1 (between Rainhard and Philip):
     ```ts
     {
       name: "Alissa Kvarik",
       title: "Head of Product",
       background: "former President JA Austria and 6+ years building sustainability products.",
       photo: alissaPhoto,
       logos: [{ src: jaAustriaLogo }],
     }
     ```
   - The grid already uses `repeat(5, minmax(0, 1fr))` on desktop and `repeat(2, 1fr)` on mobile. With 6 members:
     - **Desktop**: bump grid to `repeat(6, minmax(0, 1fr))` so all six fit one row, keeping Rainhard left and Nina right (preserves intended order without re-flowing other logos awkwardly).
     - **Mobile**: stays `repeat(2, 1fr)` → 3 rows of 2, naturally reflows.
   - Reduce the `gap` slightly on desktop only (`32px` instead of `40px`) so 6 cards fit comfortably within `maxWidth: 1400px` without shrinking text boxes or logos.
   - No changes to font sizes, bio `WebkitLineClamp`, logo heights, or other members' configurations.

3. **Verify**
   - Read updated file back, confirm order: Rainhard → Alissa → Philip → David → Kishan → Nina.
   - TypeScript check (auto by harness).

### Notes
- Alignment: existing card template (centered avatar, name, title, bio with `WebkitLineClamp: 3`, logo column) handles the new entry uniformly — no per-card overrides needed.
- The JA Austria logo will inherit the default treatment (no `invert`, no `mono`, height 48px). If it reads dark-on-dark once rendered, we can add `invert: true` in a follow-up — flagging now so you can call it out after seeing it.
- No other slides touched.
