// Every race/class guide. Adding a guide = adding an entry here plus its data files
// (route-<id>.json, class-<id>.json, professions-<id>.json).
export type Guide = {
  id: string;
  race: string;
  className: string;
  faction: 'Alliance' | 'Horde';
  status: 'ready' | 'planned';
  blurb: string;
};

export const guides: Guide[] = [
  {
    id: 'gnome-warlock',
    race: 'Gnome',
    className: 'Warlock',
    faction: 'Alliance',
    status: 'ready',
    blurb:
      'A forgiving first character: your demon tanks, your spells heal you, and you rarely need to stop and drink. Starts in snowy Dun Morogh.',
  },
];

export const getGuide = (id: string) => guides.find((g) => g.id === id);

// The four pages of every guide, in reading order (sub-nav, menu and pager all use this).
export type GuidePage = { href: string; label: string };
export function guidePages(guide: Guide | string): GuidePage[] {
  const id = typeof guide === 'string' ? guide : guide.id;
  const base = `/guides/${id}/`;
  return [
    { href: base, label: 'Overview' },
    { href: `${base}route/`, label: 'Route' },
    { href: `${base}talents/`, label: 'Talents, spells & demons' },
    { href: `${base}professions/`, label: 'Professions & alts' },
  ];
}
