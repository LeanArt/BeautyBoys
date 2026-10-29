// Colour tokens as data, for the living style guide (/design-system/) and docs/DESIGN.md.
// The source of truth is src/styles/global.css: keep these values in sync when a token changes.
export type ColorToken = { name: string; light: string; dark: string; use: string };
export type TokenGroup = { title: string; note?: string; tokens: ColorToken[] };

export const COLOR_GROUPS: TokenGroup[] = [
  {
    title: 'Surfaces',
    note: 'Vellum by day, tooltip navy by night. Surfaces separate by tone plus a 1px rule, never by shadow.',
    tokens: [
      { name: '--ground', light: '#e9dfc6', dark: '#121a2d', use: 'Page' },
      { name: '--sheet', light: '#f5efe1', dark: '#19213a', use: 'Reading surfaces: steps, ledger, tables, header' },
      { name: '--raised', light: '#fbf8f0', dark: '#212a48', use: 'Inputs, buttons, chips, coordinate buttons' },
      { name: '--sunken', light: '#e2d6b9', dark: '#0c1120', use: 'Keycaps, inline code' },
      { name: '--hover', light: '#efe6d2', dark: '#263052', use: 'Hover layer' },
      { name: '--pressed', light: '#e4d8bd', dark: '#2d385d', use: 'Pressed layer' },
      { name: '--lit', light: '#e4e3ce', dark: '#24303d', use: 'The one "Next step" row (and glossary :target)' },
    ],
  },
  {
    title: 'Lines',
    tokens: [
      { name: '--rule', light: '#d2c5a5', dark: '#323d60', use: 'Decorative separators only (no contrast duty)' },
      { name: '--edge', light: '#80755d', dark: '#717ca0', use: 'Every control boundary and the ahead line (>= 3:1)' },
    ],
  },
  {
    title: 'Ink',
    tokens: [
      { name: '--ink', light: '#1c2337', dark: '#ece4cf', use: 'Body text, primary button fill, active nav' },
      { name: '--ink-2', light: '#363d54', dark: '#cbc2ac', use: 'Secondary text, done titles, travelled line' },
      { name: '--ink-3', light: '#55596a', dark: '#a69e8b', use: 'Muted text (floor 4.8:1)' },
      { name: '--on-ink', light: '#f5efe1', dark: '#121a2d', use: 'Text on ink fills' },
    ],
  },
  {
    title: 'Links and focus',
    tokens: [
      { name: '--link', light: '#7a5200', dark: '#e9c46a', use: 'Links (gold, as on Wowhead and in game)' },
      { name: '--link-hover', light: '#5c3d00', dark: '#f5d88e', use: 'Link hover' },
      { name: '--focus', light: '#1c2337', dark: '#e9c46a', use: '3px focus ring' },
    ],
  },
  {
    title: 'Fel (the signature light)',
    note: 'Only for your next good move: the lit line, the next-step node, flag and row edge, Tip callouts, success.',
    tokens: [
      { name: '--fel', light: '#346610', dark: '#a6dc5c', use: 'Fel text and fills' },
      { name: '--fel-line', light: '#3f7a14', dark: '#a6dc5c', use: 'Lit line, next ring, row edge' },
      { name: '--on-fel', light: '#f5efe1', dark: '#121a2d', use: 'Text on fel ("Next step" flag)' },
    ],
  },
  {
    title: 'Guide accent',
    note: 'Per race/class guide (data-guide on <html>). Class markers only: never item names, never site chrome.',
    tokens: [{ name: '--class', light: '#4b45b5', dark: '#a5a3ff', use: 'Warlock: class-quest glyph, alt profession line' }],
  },
  {
    title: 'Semantic',
    tokens: [
      { name: '--info', light: '#155f78', dark: '#72c8e6', use: '"Good to know" callouts' },
      { name: '--warn', light: '#984000', dark: '#f2a65a', use: '"Careful" and "Untested" callouts, Theory seal' },
      { name: '--danger', light: '#b02a1e', dark: '#ff8a7a', use: '"Danger" callouts, destructive buttons, copy failed' },
      { name: '--on-color', light: '#f5efe1', dark: '#121a2d', use: 'Text on solid semantic or verdict fills' },
    ],
  },
  {
    title: 'Bag verdicts',
    note: 'Icon + word always; colour third.',
    tokens: [
      { name: '--v-keep', light: '#2a4c9a', dark: '#8fb0ff', use: 'Keep' },
      { name: '--v-sell', light: '#4b5263', dark: '#c5ccd8', use: 'Sell' },
      { name: '--v-buy', light: '#8f431c', dark: '#eba27c', use: 'Buy' },
      { name: '--v-auction', light: '#7a5200', dark: '#e9c46a', use: 'Auction' },
      { name: '--v-bank', light: '#0d665a', dark: '#5fd0bd', use: 'Bank' },
      { name: '--v-use', light: '#9c2a78', dark: '#f08bcf', use: 'Use' },
      { name: '--v-destroy', light: '#b02a1e', dark: '#ff8a7a', use: 'Destroy' },
    ],
  },
  {
    title: 'Quest difficulty ladder',
    note: 'The in-game "con" colours, as a dot + word on route level tags.',
    tokens: [
      { name: '--con-red', light: '#b3261e', dark: '#ff6b5e', use: 'Too hard' },
      { name: '--con-orange', light: '#984000', dark: '#ff9f43', use: 'Hard' },
      { name: '--con-yellow', light: '#6b5900', dark: '#f2df4b', use: 'On level' },
      { name: '--con-green', light: '#1b691b', dark: '#5fd35a', use: 'Easy' },
      { name: '--con-grey', light: '#5f5f5f', dark: '#9a9a9a', use: 'Trivial' },
    ],
  },
  {
    title: 'Item quality (Wowhead links)',
    note: 'tooltips.js colours item links; these tokens win per theme. Never used outside a link.',
    tokens: [
      { name: '--q0', light: '#5f5f5f', dark: '#9d9d9d', use: 'Poor (grey)' },
      { name: '--q1', light: '#1c2337', dark: '#f3eee2', use: 'Common (white)' },
      { name: '--q2', light: '#1d6b00', dark: '#1eff00', use: 'Uncommon (green)' },
      { name: '--q3', light: '#0052a6', dark: '#4aa3ff', use: 'Rare (blue)' },
      { name: '--q4', light: '#7a1fb5', dark: '#c27cf7', use: 'Epic (purple)' },
      { name: '--q5', light: '#9a4100', dark: '#ff8000', use: 'Legendary (orange)' },
    ],
  },
];

export const TYPE_SCALE = [
  { token: '--fs-hero', size: '36–60px / 1.05', weight: '700', face: 'Texturina', use: 'Home hero H1 only' },
  { token: '--fs-3xl', size: '30–44px / 1.1', weight: '600', face: 'Texturina', use: 'H1' },
  { token: '--fs-2xl', size: '24–28px / 1.15', weight: '600', face: 'Texturina', use: 'H2, waystone titles' },
  { token: '--fs-xl', size: '22px / 1.25', weight: '700', face: 'Atkinson Hyperlegible Next', use: 'H3 on prose pages' },
  { token: '--fs-lg', size: '19px / 1.35', weight: '700', face: 'Atkinson Hyperlegible Next', use: 'Step titles, item names, glossary terms' },
  { token: '--fs-md', size: '17px / 1.55', weight: '400', face: 'Atkinson Hyperlegible Next', use: 'Body, inputs' },
  { token: '--fs-table', size: '16px / 1.45', weight: '400', face: 'Atkinson Hyperlegible Next', use: 'Table cells, ref names' },
  { token: '--fs-sm', size: '15px / 1.45', weight: '600', face: 'Atkinson Hyperlegible Next', use: 'Nav, facts, detail lines, buttons' },
  { token: '--fs-xs', size: '14px / 1.4', weight: '700', face: 'Atkinson Hyperlegible Next', use: 'Tags, seals, group labels (floor)' },
];

export const SPACING = [
  ['--sp-1', 4], ['--sp-2', 8], ['--sp-3', 12], ['--sp-4', 16], ['--sp-5', 20], ['--sp-6', 24],
  ['--sp-8', 32], ['--sp-10', 40], ['--sp-12', 48], ['--sp-16', 64], ['--sp-20', 80],
] as const;

export const RADII = [
  { token: '--r-tag', value: '3px', use: 'Level tags, seals, verdict stamps, keycaps, callout label' },
  { token: '--r-ctl', value: '5px', use: 'Buttons, inputs, chips, coordinate buttons, callouts' },
  { token: '--r-sheet', value: '8px', use: 'Sheets from 600px, cards, menu panel, bottom sheet' },
  { token: '--r-node', value: '50%', use: 'Waymarks, progress node, pips, road stops' },
];
