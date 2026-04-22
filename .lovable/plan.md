

## Slide 9 — Real team, 5 cards in a single row

### Content updates
Replace the 4 placeholder team members with the 5 real members below. Remove the placeholder banner at top and the advisors line near the bottom.

| Name | Title | Background |
|---|---|---|
| Rainhard Fuchs | CEO & Founder | Ex-Head of Public Sector, Pioneers.io. 10+ years corporate and government sales. |
| Philip | VP of AI & ESG | 20 years sustainability and strategy consulting. Built 3 ESG SaaS data science tools. INSEAD MBA. |
| David Anders | Head of ESG Delivery | Previously PWC; Head of ESG at Burgenland Energie; ÖAMTC. |
| Kishan Chimminiyan | CTO & Head of Engineering | Technical leadership across multiple AI ventures. |
| Nina Aichinger | Head of People | Previously Head of HR at Bitpanda and Shpock. |

### Layout updates
- **Grid columns**: desktop `repeat(5, minmax(0, 1fr))`; tablet/narrower (still desktop, but tighter) handled implicitly by fr units; mobile stays `repeat(2, …)` with the 5th card wrapping to its own row (acceptable, scrollable).
- **Avatar size**: shrink from `clamp(88px, 10.5vw, 148px)` to `clamp(72px, 7.5vw, 110px)` to fit 5 across.
- **Grid maxWidth**: bump from `min(1200px, 100%)` to `min(1400px, 100%)` so 5 cards have breathing room.
- **Name font**: trim from `clamp(17px, 1.6vw, 26px)` to `clamp(15px, 1.35vw, 22px)` so longer names (Kishan Chimminiyan) don't wrap awkwardly.
- **Title font**: trim from `clamp(13px, 1.2vw, 20px)` to `clamp(12px, 1vw, 17px)`.
- **Background text**: keep current size; line-clamp stays at 3.
- **Gap**: tighten desktop column gap from `clamp(28px, 3.5vw, 56px)` to `clamp(20px, 2.4vw, 40px)`.

### Removals
- Delete the placeholder banner block (lines 57–84).
- Delete the advisors line block (lines 256–274).

### Bottom anchor
Keep the "Headcount … Hiring …" line — values stay as `[X]` / `[Y]` placeholders since no numbers were supplied.

### Files touched
- `src/slides/Slide9.tsx`

