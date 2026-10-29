import type { Confidence } from './data';

// The four trust levels. Words are exact (voice rule 6); pips are ordinal and monochrome.
export const CONFIDENCE: Record<Confidence, { word: string; pips: number; meaning: string }> = {
  official: { word: 'Official', pips: 3, meaning: 'From Blizzard or in-game data' },
  'beta-tested': { word: 'Beta-tested', pips: 2, meaning: 'Seen in the beta by several players or guides' },
  community: { word: 'Community', pips: 1, meaning: 'One guide or player claim, not cross-checked yet' },
  theory: { word: 'Theory', pips: 0, meaning: 'Not testable yet: the beta stopped at level 30' },
};
