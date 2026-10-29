// Validates every JSON data file against src/data/schema.js.
// Usage: node scripts/validate-data.mjs            (all files)
//        node scripts/validate-data.mjs route      (only files whose name contains "route")
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as S from '../src/data/schema.js';

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data');

// File name prefix -> schema
const schemas = [
  ['route-', S.Route],
  ['bags', S.Bags],
  ['professions-', S.Professions],
  ['library-books', S.LibraryBooks],
  ['class-', S.ClassData],
];

const filter = process.argv[2] ?? '';
let failed = false;

for (const file of readdirSync(dataDir).filter((f) => f.endsWith('.json') && f.includes(filter))) {
  const match = schemas.find(([prefix]) => file.startsWith(prefix));
  if (!match) continue;
  let json;
  try {
    json = JSON.parse(readFileSync(join(dataDir, file), 'utf8'));
  } catch (e) {
    console.error(`✗ ${file}: invalid JSON – ${e.message}`);
    failed = true;
    continue;
  }
  const result = match[1].safeParse(json);
  if (!result.success) {
    failed = true;
    console.error(`✗ ${file}`);
    for (const issue of result.error.issues.slice(0, 30)) {
      console.error(`   ${issue.path.join('.')}: ${issue.message}`);
    }
    continue;
  }
  // Ids must be unique within a file.
  const ids = [];
  JSON.stringify(json, (key, value) => {
    if (key === 'id' && typeof value === 'string') ids.push(value);
    return value;
  });
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) {
    failed = true;
    console.error(`✗ ${file}: duplicate ids ${[...new Set(dupes)].join(', ')}`);
    continue;
  }
  console.log(`✓ ${file}`);
}

process.exit(failed ? 1 : 0);
