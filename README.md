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
Because the page fetches JSON via HTTP, you should serve the files using a local web server. After installing dependencies you can run:
```bash
npm run serve
```
Then open [http://localhost:8080/public/](http://localhost:8080/public/) in your browser. Alternatively, you can use the VS Code **Live Server** extension to preview `public/index.html`.
