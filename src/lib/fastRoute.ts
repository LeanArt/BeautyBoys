import type { FastLeg, FastRoute } from './data';

// Shared helpers for the fastest-route pages (overview + one page per leg).

// Whole-level range of a leg: decimals in the data mean "partway into a level".
export const wholeLevels = (l: [number, number]): [number, number] => [Math.floor(l[0]), Math.max(Math.floor(l[0]), Math.floor(l[1]))];
export const levelRange = (l: [number, number]) => (l[0] === l[1] ? `${l[0]}` : `${l[0]}–${l[1]}`);

export const fastBase = (guide: string) => `/guides/${guide}/fast-route/`;
export const legHref = (guide: string, leg: FastLeg | string) => `${fastBase(guide)}${typeof leg === 'string' ? leg : leg.id}/`;

// Each leg page is its own checklist (progress.ts scope), so ticks never collide across pages.
export const legScope = (guide: string, legId: string) => `fast-route:${guide}:${legId}`;

// The short time label for tables: the `time` field, else the start of the estimate up to its first bracket or full stop.
export const legTime = (leg: FastLeg) => leg.time ?? leg.estTime?.split(/\s[(:]|\.\s/)[0] ?? '–';

// The journey list in the checklist rail: every leg, linking to its own page.
export const legSections = (guide: string, route: FastRoute, current?: string) =>
  route.legs.map((l) => ({
    id: l.id,
    label: l.short,
    level: wholeLevels(l.level),
    total: l.steps.length,
    href: l.id === current ? `#${l.id}` : `${legHref(guide, l)}#${l.id}`,
  }));

// Dungeons a leg runs, by name, in order; `optional` when every step of that run is optional.
const DUNGEONS = [
  'Hall of Thanes', 'Deadmines', 'Stockade', 'Excavation Site', 'Gnomeregan', 'City of Dalaran', "Krol'dok Stronghold",
  'Uldaman', "Zul'Farrak", 'Blackrock Depths', 'Stratholme', 'Scholomance',
];
export function dungeonsOf(leg: FastLeg): { name: string; optional: boolean }[] {
  const out: { name: string; optional: boolean }[] = [];
  for (const s of leg.steps.filter((s) => s.do === 'dungeon')) {
    const hay = `${s.zone} ${s.at ?? ''} ${s.text}`;
    for (const name of DUNGEONS.filter((n) => hay.includes(n))) {
      const seen = out.find((d) => d.name === name);
      if (seen) seen.optional &&= !!s.optional;
      else out.push({ name, optional: !!s.optional });
    }
  }
  return out;
}
