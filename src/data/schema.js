// Data contract for every guide data file in src/data.
// Plain JS (not TS) so `node scripts/validate-data.mjs` can import it without a build step.
import { z } from 'zod';

// How much to trust a fact. Shown as a badge next to every step/item.
//   official    – Blizzard post, dev notes or in-game data shown on Wowhead Forever
//   beta-tested – seen in the beta (Sept 17 – Oct 22, 2026) by several players or guides
//   community   – a single guide or player claim, not cross-checked
//   theory      – nobody could test it yet (the beta was capped at level 30)
export const Confidence = z.enum(['official', 'beta-tested', 'community', 'theory']);

export const LevelRange = z.tuple([z.number().int().min(1).max(60), z.number().int().min(1).max(60)]);

// Map coordinates as shown in game (0–100, one decimal).
export const Coords = z.tuple([z.number().min(0).max(100), z.number().min(0).max(100)]);

// Wowhead Forever database reference. Only include an id you have confirmed via
// https://nether.wowhead.com/forever/tooltip/<type>/<id> returning the same name.
export const WowheadRef = z.object({
  type: z.enum(['item', 'quest', 'npc', 'spell', 'zone', 'object']),
  id: z.number().int().positive(),
});

const Sources = z.array(z.string().url()).min(1);

// Anything with a name that may be linked, located or explained.
export const Ref = z.object({
  name: z.string().min(1),
  wh: WowheadRef.optional(),
  zone: z.string().optional(), // zone name as TomTom expects it, e.g. "Dun Morogh"
  coords: Coords.optional(),
  note: z.string().optional(),
});

export const QuestRef = Ref.extend({ giver: z.string().optional() });
export const NpcRef = Ref.extend({ role: z.string() });

export const StepKind = z.enum([
  'travel', // move to a new hub / take a boat or flight
  'quests', // a quest hub: pick up and do these
  'class', // warlock class quest or demon
  'train', // visit the trainer
  'dungeon',
  'profession',
  'system', // Forever systems: camping, Legacy, sleeping bag, library books, Merchant's Favor
  'shopping',
  'tip',
  'milestone', // big moment: mount, dual spec, capstone talent
]);

const Id = z.string().regex(/^[a-z0-9-]+$/, 'lowercase-kebab ids only');

// Body text supports **bold**, *italic* and [links](https://…). Keep it short and beginner-friendly.
export const Step = z.object({
  id: Id,
  title: z.string(),
  kind: StepKind,
  level: LevelRange,
  zone: z.string(),
  hub: z.string().optional(),
  body: z.string(),
  quests: z.array(QuestRef).optional(),
  npcs: z.array(NpcRef).optional(),
  items: z.array(Ref).optional(),
  optional: z.boolean().optional(),
  confidence: Confidence,
  sources: Sources,
});

export const Bracket = z.object({
  id: Id,
  title: z.string(),
  short: z.string().optional(), // short label for the journey list and the home road, e.g. "Loch Modan & Redridge"
  level: LevelRange,
  zones: z.array(z.string()),
  summary: z.string(),
  steps: z.array(Step),
});

export const Route = z.object({
  guide: Id,
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  brackets: z.array(Bracket).min(1),
});

// ---------- Bag advisor ----------
export const BagAction = z.enum(['keep', 'sell', 'bank', 'buy', 'use', 'auction', 'destroy']);
export const BagCategory = z.enum(['consumable', 'reagent', 'quest', 'profession', 'gear', 'junk', 'container', 'class']);

export const Vendor = z.object({
  npc: z.string(),
  wh: WowheadRef.optional(),
  zone: z.string(),
  hub: z.string().optional(),
  coords: Coords.optional(),
  price: z.string().optional(), // as shown in game, e.g. "1s 25c"
});

export const BagItem = z.object({
  id: Id,
  name: z.string(),
  wh: WowheadRef.optional(),
  action: BagAction,
  category: BagCategory,
  level: LevelRange, // when this advice applies
  why: z.string(),
  where: z.array(Vendor).optional(), // where to buy (for "buy") or where to hand in / sell
  confidence: Confidence,
  sources: Sources,
});

export const Bags = z.object({
  updated: z.string(),
  items: z.array(BagItem).min(1),
});

// ---------- Professions & support alts ----------
export const Milestone = z.object({
  skill: z.number().int().min(0).max(300),
  level: z.number().int().min(1).max(60).optional(), // character level you are likely at
  title: z.string(),
  body: z.string(),
  crafts: z.array(Ref).optional(),
  confidence: Confidence,
  sources: Sources,
});

export const ProfessionPlan = z.object({
  id: Id,
  name: z.string(),
  type: z.enum(['primary', 'secondary']),
  role: z.string(), // one line: why this character takes it
  trainers: z.array(NpcRef),
  milestones: z.array(Milestone),
  needsFromOthers: z
    .array(z.object({ item: Ref, from: z.string(), usedFor: z.string() }))
    .optional(), // reagents this profession needs that another profession produces
});

export const SupportAlt = z.object({
  id: Id,
  title: z.string(),
  suggestion: z.string(), // race/class suggestion and why
  professions: z.array(z.string()),
  feeds: z.array(z.object({ item: Ref, usedFor: z.string() })),
  why: z.string(),
  confidence: Confidence,
  sources: Sources,
});

export const Professions = z.object({
  updated: z.string(),
  guide: Id,
  summary: z.string(),
  plans: z.array(ProfessionPlan),
  alts: z.array(SupportAlt),
  howToShare: z.array(z.object({ title: z.string(), body: z.string(), confidence: Confidence, sources: Sources })),
});

// ---------- Class data (talents, spells, demons, racials) ----------
const Tree = z.enum(['Affliction', 'Demonology', 'Destruction']);

export const TalentStep = z.object({
  level: LevelRange,
  tree: Tree,
  talent: z.string(),
  wh: WowheadRef.optional(),
  ranks: z.string(), // e.g. "5/5"
  why: z.string(),
});

export const ClassData = z.object({
  updated: z.string(),
  guide: Id,
  racials: z.array(
    z.object({ name: z.string(), wh: WowheadRef.optional(), effect: z.string(), forYou: z.string(), confidence: Confidence, sources: Sources }),
  ),
  spec: z.object({
    name: Tree,
    summary: z.string(),
    note: z.string(),
    talents: z.array(TalentStep),
    alternatives: z.array(z.object({ name: z.string(), summary: z.string(), confidence: Confidence, sources: Sources })),
    confidence: Confidence,
    sources: Sources,
  }),
  dualSpec: z.object({ level: z.number().int(), cost: z.string(), body: z.string(), confidence: Confidence, sources: Sources }),
  spells: z.array(z.object({ level: z.number().int(), spells: z.array(Ref) })),
  spellsNote: z.string(),
  demons: z.array(
    z.object({
      id: Id,
      name: z.string(),
      wh: WowheadRef.optional(),
      level: z.number().int(),
      how: z.string(),
      use: z.string(),
      confidence: Confidence,
      sources: Sources,
    }),
  ),
  rotations: z.array(z.object({ level: LevelRange, title: z.string(), steps: z.array(z.string()), confidence: Confidence, sources: Sources })),
  shards: z.array(z.string()),
});

// ---------- Library books ----------
export const LibraryBook = z.object({
  id: Id,
  title: z.string().optional(),
  zone: z.string(),
  coords: Coords,
  location: z.string(), // plain-language hint: "upstairs in the inn"
  faction: z.enum(['alliance', 'horde', 'both']),
  level: z.number().int().optional(), // rough safe level to reach it
  note: z.string().optional(),
  confidence: Confidence,
  sources: Sources,
});

export const LibraryBooks = z.object({
  updated: z.string(),
  turnIn: z.array(NpcRef),
  rewards: z.array(z.object({ books: z.number().int(), level: z.number().int().optional(), choices: z.array(Ref) })),
  books: z.array(LibraryBook).min(1),
});

// ---------- Fast route (step-by-step fastest 1–60) ----------
// A separate, much finer route than Route: one step = one stop or one action, RestedXP style.
// `lvl` is the character level you should have when you reach the step (decimals allowed: 7.5 = halfway into 7).
const FastLvl = z.number().min(1).max(60);

export const FastQuest = Ref.extend({ op: z.enum(['accept', 'do', 'turnin', 'skip']) });
export const FastMob = Ref.extend({ lvl: z.tuple([FastLvl, FastLvl]).optional() });

export const FastStepDo = z.enum([
  'accept', 'turnin', 'quest', 'kill', 'loot', 'grind', 'travel', 'fly', 'boat', 'hearth', 'bind',
  'train', 'class', 'dungeon', 'buy', 'sell', 'system', 'tip', 'milestone',
]);

export const FastStep = z.object({
  id: Id,
  do: FastStepDo,
  text: z.string().min(3), // imperative, short; **bold** quest names
  lvl: FastLvl,
  zone: z.string(),
  at: z.string().optional(), // hub or landmark
  coords: Coords.optional(),
  quests: z.array(FastQuest).optional(),
  npcs: z.array(NpcRef).optional(),
  mobs: z.array(FastMob).optional(),
  items: z.array(Ref).optional(),
  note: z.string().optional(),
  optional: z.boolean().optional(),
  confidence: Confidence,
  sources: Sources,
});

export const FastLeg = z.object({
  id: Id,
  title: z.string(),
  short: z.string(),
  level: z.tuple([FastLvl, FastLvl]),
  zones: z.array(z.string()).min(1),
  summary: z.string(),
  why: z.string(), // why this order is the fastest
  estTime: z.string().optional(),
  start: z.string(),
  end: z.string(),
  skipped: z.array(z.object({ name: z.string(), wh: WowheadRef.optional(), why: z.string() })).optional(),
  steps: z.array(FastStep).min(1),
  openQuestions: z.array(z.string()).optional(),
  sources: Sources,
});

// A fork in the road where the route picks one option over another, with the evidence.
export const FastDecision = z.object({
  level: z.tuple([FastLvl, FastLvl]),
  fork: z.string(), // "Westfall or Darkshore at 15–20?"
  choice: z.string(),
  why: z.string(),
  confidence: Confidence,
  sources: Sources,
});

export const FastRoute = z.object({
  guide: Id,
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  summary: z.string(),
  estTime: z.string().optional(),
  assumptions: z.array(z.string()).min(1),
  decisions: z.array(FastDecision).optional(),
  legs: z.array(FastLeg).min(1),
});
