const fs = require('fs');
const pdfParse = require('pdf-parse');

async function extract(pdfPath, outPath) {
  const buffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(buffer);
  const lines = data.text.split(/\r?\n/).filter(Boolean);

  const entries = [];
  for (const line of lines) {
    const cols = line.trim().split(/\s+/);
    if (cols.length >= 10) {
      const [ , weekday, period, , , , subject, , , room] = cols;
      entries.push({ weekday, period, subject, room });
    }
  }
  fs.writeFileSync(outPath, JSON.stringify({ entries }, null, 2));
  console.log(`Wrote ${outPath} with ${entries.length} entries`);
}

const [,, input, output] = process.argv;
if (!input || !output) {
  console.error('Usage: node extract-timetable.js <input.pdf> <output.json>');
  process.exit(1);
}

extract(input, output).catch(err => {
  console.error(err);
  process.exit(1);
});
