## Plan: Re-export full deck to PDF

The current `glacier-deck.pdf` has 8 pages, matching all 8 slides in `src/slides/` (Slide1–Slide8). Note: the project brief mentions 10 slides, but only 8 exist in the codebase today — I'll export all 8 that exist. If you intended for there to be 10, let me know which two are missing and I'll flag it.

### Steps

1. Re-run the Puppeteer export script (`/tmp/export-pdf.js`) against the published URL, capturing slides 1–8 at 1920×1080 (2× device scale).
2. Wait for each slide's entrance animations to settle (~700ms) before screenshot, so no fade-in artifacts.
3. Stitch the 8 PNGs into `/mnt/documents/glacier-deck.pdf` (overwriting the existing file) via PIL.
4. **QA pass**: render each PDF page back to JPEG with `pdftoppm` and inspect every page for clipping, missing content, or blank slides. Report findings.
5. Deliver the PDF artifact link.

No code in the app changes — this is purely a re-export of the existing deck.  
make sure all boxes, texts and logos are included in the pdf

&nbsp;