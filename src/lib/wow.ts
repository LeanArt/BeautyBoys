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
