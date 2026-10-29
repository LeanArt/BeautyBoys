// Bag advisor vocabulary, shared by the bag page and the style guide.

// Order: how often a beginner needs each verdict.
export const ACTIONS = [
  { id: 'keep', label: 'Keep' },
  { id: 'sell', label: 'Sell' },
  { id: 'buy', label: 'Buy' },
  { id: 'auction', label: 'Auction' },
  { id: 'bank', label: 'Bank' },
  { id: 'use', label: 'Use' },
  { id: 'destroy', label: 'Destroy' },
] as const;
export type ActionId = (typeof ACTIONS)[number]['id'];
export const LABEL = Object.fromEntries(ACTIONS.map((a) => [a.id, a.label])) as Record<ActionId, string>;

export const CATEGORIES: Record<string, string> = {
  consumable: 'Food, drink & potions',
  reagent: 'Reagents',
  quest: 'Quest items',
  profession: 'Profession materials',
  gear: 'Gear',
  junk: 'Junk',
  container: 'Bags',
  class: 'Warlock items',
};
