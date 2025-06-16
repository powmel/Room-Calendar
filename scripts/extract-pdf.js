const fs = require('fs');
const pdfParse = require('pdf-parse');

async function extract(pdfPath, outPath) {
  const buffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(buffer);
  const lines = data.text.split(/\r?\n/).filter(Boolean);
  const result = { raw: lines };
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`Wrote ${outPath}`);
}

const [,, input, output] = process.argv;
if (!input || !output) {
  console.error('Usage: node extract-pdf.js <input.pdf> <output.json>');
  process.exit(1);
}
extract(input, output).catch(err => {
  console.error(err);
  process.exit(1);
});
