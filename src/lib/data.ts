// Loads and validates the JSON data files. A schema error fails the build loudly,
// a missing file returns null so pages can show "coming soon" instead.
import type { z } from 'zod';
import * as S from '../data/schema.js';

const files = import.meta.glob('../data/*.json', { eager: true, import: 'default' });

function load<T extends z.ZodTypeAny>(name: string, schema: T): z.infer<T> | null {
  const raw = files[`../data/${name}.json`];
  if (raw === undefined) return null;
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const issues = parsed.error.issues.slice(0, 10).map((i) => `  ${i.path.join('.')}: ${i.message}`);
    throw new Error(`Invalid data in src/data/${name}.json\n${issues.join('\n')}`);
  }
  return parsed.data;
}

export type Confidence = z.infer<typeof S.Confidence>;
export type Ref = z.infer<typeof S.Ref>;
export type Step = z.infer<typeof S.Step>;
export type Bracket = z.infer<typeof S.Bracket>;
export type BagItem = z.infer<typeof S.BagItem>;

export const routeFor = (guide: string) => load(`route-${guide}`, S.Route);
export const classFor = (guide: string) => load(`class-${guide}`, S.ClassData);
export const professionsFor = (guide: string) => load(`professions-${guide}`, S.Professions);
export const bags = () => load('bags', S.Bags);
export const libraryBooks = () => load('library-books', S.LibraryBooks);
