// Names of the glyphs in src/components/Icons.astro (the sprite). Keep the two in sync.
export const ICON_NAMES = [
  'mark', 'signpost', 'quest', 'turnin', 'flame', 'book', 'gate', 'anvil', 'rune', 'coin', 'lantern', 'star',
  'pin', 'person', 'pouch', 'crosshair', 'copy', 'check', 'next',
  'keep', 'bank', 'sell', 'auction', 'buy', 'use', 'destroy',
  'info', 'warn', 'danger', 'unknown',
  'menu', 'close', 'list', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right',
  'minus', 'plus', 'search', 'sun', 'moon', 'auto', 'external', 'flag',
] as const;
export type IconName = (typeof ICON_NAMES)[number];
