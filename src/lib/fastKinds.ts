import type { FastStep } from './data';
import type { IconName } from './icons';

// Fast route actions: the verb shown at the start of each row and the glyph inside the waymark node.
export const FAST_DO: Record<FastStep['do'], { word: string; glyph: IconName }> = {
  accept: { word: 'Accept', glyph: 'quest' },
  turnin: { word: 'Turn in', glyph: 'turnin' },
  quest: { word: 'Quest', glyph: 'crosshair' },
  kill: { word: 'Kill', glyph: 'sword' },
  loot: { word: 'Loot', glyph: 'pouch' },
  grind: { word: 'Grind', glyph: 'sword' },
  travel: { word: 'Travel', glyph: 'signpost' },
  fly: { word: 'Fly', glyph: 'signpost' },
  boat: { word: 'Boat', glyph: 'signpost' },
  hearth: { word: 'Hearth', glyph: 'home' },
  bind: { word: 'Set hearth', glyph: 'home' },
  train: { word: 'Train', glyph: 'book' },
  class: { word: 'Class quest', glyph: 'flame' },
  dungeon: { word: 'Dungeon', glyph: 'gate' },
  buy: { word: 'Buy', glyph: 'buy' },
  sell: { word: 'Sell', glyph: 'sell' },
  system: { word: 'Forever system', glyph: 'rune' },
  tip: { word: 'Tip', glyph: 'lantern' },
  milestone: { word: 'Milestone', glyph: 'star' },
};

// What happens to a quest at this step.
export const QUEST_OP: Record<'accept' | 'do' | 'turnin' | 'skip', string> = {
  accept: 'Accept',
  do: 'Do',
  turnin: 'Turn in',
  skip: 'Skip',
};

// "Lv 7" for whole levels, "Lv 7.5" when the route expects you halfway into a level.
export const fastLevel = (lvl: number) => `Lv ${Number.isInteger(lvl) ? lvl : lvl.toFixed(1).replace(/\.0$/, '')}`;
