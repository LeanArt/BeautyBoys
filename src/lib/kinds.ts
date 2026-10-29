import type { Step } from './data';
import type { IconName } from './icons';

// Step kinds: the word shown in the facts row and the glyph inside the waymark node.
export const KIND: Record<Step['kind'], { word: string; glyph: IconName }> = {
  travel: { word: 'Travel', glyph: 'signpost' },
  quests: { word: 'Quests', glyph: 'quest' },
  class: { word: 'Class quest', glyph: 'flame' },
  train: { word: 'Train', glyph: 'book' },
  dungeon: { word: 'Dungeon', glyph: 'gate' },
  profession: { word: 'Profession', glyph: 'anvil' },
  system: { word: 'Forever system', glyph: 'rune' },
  shopping: { word: 'Shopping', glyph: 'coin' },
  tip: { word: 'Tip', glyph: 'lantern' },
  milestone: { word: 'Milestone', glyph: 'star' },
};
