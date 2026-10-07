import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../src/content/', import.meta.url).pathname;
const collections = ['usluge', 'projekti', 'vodic'];
const errors = [];

for (const collection of collections) {
  const dir = join(root, collection);
  if (!existsSync(dir)) errors.push(`Missing content directory: ${collection}`);
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  if (!files.length) errors.push(`Empty content collection: ${collection}`);
  for (const file of files) {
    const text = readFileSync(join(dir, file), 'utf8');
    if (!text.startsWith('---')) errors.push(`Missing frontmatter: ${collection}/${file}`);
    if (!/^title:\s*.+/m.test(text)) errors.push(`Missing title: ${collection}/${file}`);
    if (!/^description:\s*.+/m.test(text)) errors.push(`Missing description: ${collection}/${file}`);
  }
}

const required = [
  ['usluge', 'ai-chatbot.md'], ['usluge', 'ai-asistent.md'], ['usluge', 'ai-automatizacija.md'],
  ['usluge', 'web-stranice-za-obrte.md'], ['usluge', 'web-stranice-za-tvrtke.md'],
  ['projekti', 'smart-troskovnik.md'], ['projekti', 'driveq.md'], ['projekti', 'epr-check.md'], ['projekti', 'epr-report.md'], ['projekti', 'brandistiq.md'],
];
for (const [collection, file] of required) if (!existsSync(join(root, collection, file))) errors.push(`Missing required content: ${collection}/${file}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Content validation passed.');
