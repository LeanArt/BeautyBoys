// Helpers for Wowhead links and TomTom waypoints.
export type WhType = 'item' | 'quest' | 'npc' | 'spell' | 'zone' | 'object';
export type Wowhead = { type: WhType; id: number };

export function wowheadUrl(wh: Wowhead): string {
  return `https://www.wowhead.com/forever/${wh.type}=${wh.id}`;
}

export function wowheadSearch(name: string): string {
  return `https://www.wowhead.com/forever/search?q=${encodeURIComponent(name)}`;
}

// TomTom: /way <zone> <x> <y> <description>
export function wayCommand(zone: string, coords: [number, number], label: string): string {
  const [x, y] = coords;
  return `/way ${zone} ${x.toFixed(1)} ${y.toFixed(1)} ${label}`;
}

export function levelLabel([a, b]: [number, number]): string {
  return a === b ? `Lv ${a}` : `Lv ${a}–${b}`;
}

// "29 Oct 2026" (day month year, UTC so build time and browser agree).
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

// "28.6, 66.1": how coordinates are shown on the page (the /way command keeps TomTom format).
export function coordLabel([x, y]: [number, number]): string {
  return `${x.toFixed(1)}, ${y.toFixed(1)}`;
}
