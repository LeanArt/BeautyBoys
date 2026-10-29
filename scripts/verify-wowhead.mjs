// Checks every Wowhead id in src/data/*.json against Wowhead's Forever tooltip API:
// the id must exist and its name must match the name next to it in our data.
// Usage: node scripts/verify-wowhead.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data');
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
// "Summon Felsteed" should match our label "Felsteed (mount)".
const core = (s) => norm(s.replace(/^summon /i, '').replace(/\(.*?\)/g, ''));

// Collect { file, path, name, type, id } for every object that has `wh` and a name-ish field.
const refs = [];
function walk(node, file, path) {
  if (Array.isArray(node)) return node.forEach((n, i) => walk(n, file, `${path}[${i}]`));
  if (!node || typeof node !== 'object') return;
  if (node.wh && typeof node.wh === 'object') {
    const name = node.name ?? node.talent ?? node.npc;
    if (name) refs.push({ file, path, name, ...node.wh });
  }
  for (const [k, v] of Object.entries(node)) if (k !== 'wh') walk(v, file, `${path}.${k}`);
}
for (const f of readdirSync(dataDir).filter((f) => f.endsWith('.json'))) {
  walk(JSON.parse(readFileSync(join(dataDir, f), 'utf8')), f, '$');
}

const cache = new Map();
async function lookup(type, id) {
  const key = `${type}/${id}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      fetch(`https://nether.wowhead.com/forever/tooltip/${type}/${id}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => j?.name ?? null)
        .catch(() => null),
    );
  }
  return cache.get(key);
}

let bad = 0;
const queue = [...refs];
async function worker() {
  while (queue.length) {
    const r = queue.shift();
    const actual = await lookup(r.type, r.id);
    // Our names may add context ("Summon Succubus / Incubus"), so accept either containing the other.
    const ok =
      actual &&
      [norm(r.name), core(r.name)].some((ours) => ours.includes(core(actual)) || core(actual).includes(ours));
    if (!ok) {
      bad++;
      console.error(`✗ ${r.file} ${r.path}: "${r.name}" → ${r.type}/${r.id} is "${actual ?? 'not found'}"`);
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
console.log(`${refs.length - bad}/${refs.length} Wowhead ids verified (${cache.size} unique).`);
process.exit(bad ? 1 : 0);
