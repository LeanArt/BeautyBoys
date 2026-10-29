# BeautyBoys – Waypoint

**Waypoint** is an interactive, beginner-friendly leveling companion for **World of Warcraft: Forever** (launch: Nov 4, 2026).
The MVP is the **Gnome Warlock** (Alliance): route, talents & demons, professions & support alts, bag advisor, Forever systems,
library books and a glossary.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

Requires Node 18.20+ / 20 / 22 (Astro 5).

## How it's built

- [Astro](https://astro.build) static site, no backend. Interactivity is small vanilla TypeScript in `src/scripts/`.
- Progress, "My level", filters and theme are stored in the browser (`localStorage`, keys prefixed `waypoint:v1:`).
- Item/quest/spell links use Wowhead's Forever tooltips (`https://www.wowhead.com/forever/...`).

## Content is data

Everything guide-specific lives in `src/data/*.json`, validated by the zod schemas in `src/data/schema.js`:

| File | What |
|---|---|
| `route-<guide>.json` | Level brackets → hub-and-zone steps with key quests, NPCs, items, coords |
| `class-<guide>.json` | Racials, talent plan, spells by level, demons, rotations, shard tips |
| `professions-<guide>.json` | Profession milestones, cross-profession needs, support alts |
| `bags.json` | Bag advisor: keep / sell / bank / buy / auction / destroy, by level, with vendors |
| `library-books.json` | Library books with coordinates and rewards |

To add a race/class guide: add it to `src/lib/guides.ts` and create its `route-`, `class-` and `professions-` files.

Every fact carries a `confidence` (`official`, `beta-tested`, `community`, `theory`) and at least one source URL.

```bash
node scripts/validate-data.mjs     # schema check for all data files
npm run verify:wowhead             # checks every Wowhead id still resolves to the same name
```

## Research

`research/` holds the source notes the data was built from (Blizzard posts, Blizzard forum threads, YouTube, guide sites,
existing tools). Reddit couldn't be reached from the research environment.

Not affiliated with Blizzard Entertainment. World of Warcraft is a trademark of Blizzard Entertainment, Inc.
