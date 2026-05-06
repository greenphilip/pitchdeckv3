
## Export Slide Deck as PDF

### Approach
Use Puppeteer to open the presentation at 1920×1080, bypass the password gate, navigate through all 8 slides, capture each as a full-page screenshot, and combine them into a single landscape PDF.

### Steps

1. **Write a Node.js script** (`/tmp/export-pdf.js`) that:
   - Launches headless Chromium at 1920×1080
   - Navigates to the preview URL
   - Unlocks the password gate (sets localStorage or enters the password)
   - Screenshots each slide sequentially (arrow-key navigation)
   - Combines all 8 screenshots into a single PDF at 1920×1080 landscape

2. **Run the script** and save the output to `/mnt/documents/glacier-deck.pdf`

3. **QA** — convert pages to images, inspect each for rendering issues

### Output
A single `glacier-deck.pdf` with 8 landscape pages, one per slide.
