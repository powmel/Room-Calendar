# Room Calendar

Sample project to extract schedule information from PDF and display it as a simple web page.

## Requirements
- Node.js 20 or higher

## Setup
Install dependencies:
```bash
npm install
```

## Extract schedule from PDF
Use `node scripts/extract-pdf.js` to convert a PDF file to JSON.
```bash
node scripts/extract-pdf.js <input.pdf> data/sample.json
```
The script uses [`pdf-parse`](https://www.npmjs.com/package/pdf-parse) and writes a JSON file with extracted lines. Parsing logic should be adjusted to match the layout of your timetable PDF.

## View sample web page
Open `public/index.html` in a browser. It loads `data/sample.json` and renders a simple table of entries.
