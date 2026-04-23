

## Slide 4 — Update workflow box copy & shrink screenshot

### Copy changes (3 boxes in `src/slides/Slide4.tsx`)

**Box 01 — "Documents"**
- headline: `"What you bring"` → `"Documents"`
- body: `"Your documents, data, interviews. Any format."` → `"Any format: PDF/PPT/DOC/XLS"`

**Box 02 — "Glacier AI"**
- headline: `"What Glacier does"` → `"Glacier AI"`
- body: `"Extract, cite, draft. Every claim linked to its source. Every step human-reviewed."` → `"Match evidence to requirements, cite, draft, delegate, review, approve, export"`

**Box 03 — "Report / Gap"**
- headline: `"What you get"` → `"Report / Gap"`
- body: `"CSRD-grade reports. EcoVadis questionnaires. Evidence ready for the next framework."` → `"CSRD-grade reports, Ecovadis questionnaires, gap analysis, policy builders, + more ESG standards soon"`

### Layout fix — screenshot too tall, no breathing room at bottom

The screenshot block currently uses `width: 100%` of its 3fr column with `height: auto` (image's native aspect ratio), pushing the bottom strip past the canvas edge. Constrain its height instead so it stops bleeding to the bottom.

In the screenshot motion.div (lines 266-292):
- Add `maxHeight: "340px"` and `display: "flex"` to the wrapper.
- On the `<img>`: change `width: "100%", height: "auto"` → `maxWidth: "100%", maxHeight: "340px", width: "auto", height: "auto", objectFit: "contain"`.
- On `ScreenshotPlaceholder`: cap `aspectRatio` container with `maxHeight: 340px`.

Also reduce the gap above the screenshot from `56px` → `40px` (line 252) so the new compact image sits with comfortable air above the bottom strip.

### Files touched
- `src/slides/Slide4.tsx` (copy in 3 WorkflowBox calls + screenshot sizing)

### Not touched
SlideFrame, animations, brand palette, other slides, the icons, the bottom "Deterministic · Auditable · Multi-framework" strip.

