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
