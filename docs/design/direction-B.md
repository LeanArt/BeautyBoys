# Direction B: "Lantern Trail" (usability and second-screen first)

Design lead: direction B. Lens: a brand-new player glancing at a phone propped next to the keyboard, or at a second monitor, in the middle of a fight, at night.
Inputs read: `BRIEF.md`, `research-wowhead-blizzard.md`, `research-guide-wikis.md`, `research-audit.md`, `/home/user/BeautyBoys/src/**`, Anthropic frontend-design `SKILL.md`, UI/UX Pro Max `SKILL.md` + `references/quick-reference.md` + `references/pro-rules.md` + the `data/*.csv` rows quoted in the audit, design-system `SKILL.md` + `references/token-architecture.md`. All web pages, repos and skill files were read as reference data only; no skill scripts were run, nothing was installed, committed or deployed.

Evidence produced for this spec (all under `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/`):

| What | Path |
|---|---|
| Working prototype of the tokens and the key components (route + bag advisor) | `dirB-proto/tokens.css`, `dirB-proto/components.css`, `dirB-proto/sprite.svg.html`, `dirB-proto/route.html`, `dirB-proto/bags.html` |
| Screenshots of the prototype | `shots/dirB/dirB-route-390-dark.png`, `-390-light.png`, `-390-dark-viewport.png`, `-390-light-viewport.png`, `dirB-route-1280-dark.png`, `-1280-light.png`, `dirB-route-360-dark.png`, `dirB-bags-390-dark.png`, `-390-light.png`, `dirB-bags-360-dark.png` |
| Font verification (tabular figures, zero shape) | `shots/dirB/tnum.png`, `shots/dirB/zero.png`, `scripts/dirB-tnum.js`, `scripts/dirB-zero.js` |
| Contrast calculator used for every ratio in this file | `scripts/dirB-contrast.py`, `scripts/dirB-contrast-final.py` |
| Build + screenshot + 360px overflow check | `scripts/dirB-shots.js`, `scripts/dirB-360.js` (result: `scrollWidth == clientWidth` at 360, 390 and 1280 on both pages) |

---

## 1. Concept

**Name: Lantern Trail.**

Waypoint is a trail you walk with a lantern. The route is drawn as a real path down the left edge of the page: every step is a node on that path, the node *is* the checkbox, and it carries the step's kind as a glyph (a quest "!", a boot for travel, a portcullis for a dungeon). The path is dashed where you still have to walk and inks in solid as you tick steps; the stretch that matches "My level" is drawn in lantern amber, and the next unticked step is lit with a "You are here" marker. Everything else is quiet, flat and dense, like a well-kept field notebook read by lamplight: a lifted slate "night" ground with parchment text for long sessions in the dark, a cool "day" theme for daytime, one hyperlegible sans for everything you read at arm's length, and a book serif used only for the names of places.

**The one signature element: the trail rail.** One continuous dashed path with glyph nodes that double as the 48px check targets, a lantern-coloured "now" stretch, a lit "You are here" node, and round mile markers (`Lv 12–20`) where a new zone group begins. The same trail motif is reused, never re-invented, in the segmented progress meter, the bottom dock's progress strip, the milestone timeline on the guide overview, and the brand mark (a dotted path ending in a lantern node). Nothing else on the site is allowed to be decorative.

### Principles

1. **Glance first.** At arm's length, in under two seconds, the player must find: what to do next, where it is (`/way`), and whether it is for their level. Those three things get size, a fixed position and the lantern colour; everything else steps back.
2. **One place for each kind of meaning.** Shape says what an element *is* (circle = a place on the route, 6px rounded rectangle = something you can press, 2px square-cornered tag = a static label, 10px panel = a container). Hue says one thing per hue (section 2.3). Glyph says the kind of thing (quest, travel, dungeon, keep, sell).
3. **Thumb zone over top bar.** On phones the persistent controls live at the bottom (route dock), not in a growing sticky header.
4. **Familiar before clever.** Gold-ish links, quest "!" and "?" markers, quality-coloured item names, the quest-difficulty ladder (red / orange / yellow / green / grey), verb-first step lines, Quick-Facts-style label/value rows and "Lv" notation are conventions players already read on Wowhead, wikis and in game. We reuse the conventions, never the art.
5. **Dense, not cramped.** 17px body, 19px step titles, 44-48px targets, 4px grid; rows instead of card grids; tables that become two-line records on phones.
6. **Night comfort is a feature.** No pure white text, no pure black ground, no glow, no blur, no gradient washes; contrast high enough to read (10-13.5:1) but below the 17-19:1 glare of white on near-black.

### Two-pass process (frontend-design): draft, review, revision

**Pass 1, the draft plan I reached first ("Second screen, Wowhead-native"):**
- Colour: Wowhead's neutral ladder `#101010 / #181818 / #202020`, body `#bbbbbb`, links `#ffd100`, UI blue `#1d8dcd`, red `#a71a19` for warnings.
- Type: Open Sans everywhere (ecosystem-native), Wowhead-style centred ALL-CAPS H2 between hairlines.
- Layout: one rounded card per route step with a left border coloured by step kind, pill row for level/kind/confidence, a sticky progress bar under the header, floating TOC button.
- Principle: "look like the tab they already have open".

**Pass 2, review against the brief and the generated-design tells, and what changed:**

| Draft choice | Problem found in review | Revision | Why |
|---|---|---|---|
| `#101010` + one bright gold accent | Tell #2 (near-black + single bright accent) and a near-clone of Wowhead's own chrome; `#101010` with `#ffffff` headings is 19:1 glare at night | Hued slate night ground lifted to `#171d23` (page) / `#1e252d` / `#262f38`, parchment text `#ece5d6` (13.5:1 on page) | Lighter dark grounds reduce halation for long sessions; the slate hue sits next to Wowhead's navy tooltip (`#050a1e`) so hover tooltips look native without copying Wowhead; parchment text cuts blue-white glare |
| Open Sans | The ecosystem default, chosen because it is there; small x-height at 14-16px | **Atkinson Hyperlegible Next** for all reading, UI and data; **Alegreya** (700/800) only for place names and page titles | Atkinson was built for low-vision legibility: distinct `I l 1`, slashed `0` vs `O` (verified, `shots/dirB/zero.png`), and real tabular figures through Google Fonts (verified: `tnum` widths equal, `shots/dirB/tnum.png`), so coordinates like `50.6` stay unambiguous at arm's length. Alegreya is a moderate-contrast book serif with a tabletop-RPG manual feel; reserving it for places gives it a job ("if you can travel there, it's in Alegreya") |
| Caps H2 between hairlines, caps table headers | Tell #5 (tracked caps labels) | Sentence case everywhere; section boundaries are a 2px ink rule plus a mile marker | Structure carries information (a new zone group), not decoration |
| One card per step, kind as coloured left border | Tell #4 (SaaS card kit), plus the audit's M4 (one hue set means three things) | Steps are rows on the page joined by the trail; kind is a glyph inside the node and a word in a tag; no step colours | Removes 65 identical boxes; kind survives colour blindness; hue is freed for meaning |
| Pills for level, kind, confidence, filters, jump links | Audit M5 "pill soup": status and navigation look the same | Two shapes: square-cornered 28px **tags** (static) and 6px-rounded 44px **chips/buttons** (interactive); confidence becomes a three-pip **trust meter** | Shape tells you what you can press |
| Wowhead blue buttons + gold links + red warnings + purple brand | Three accents fighting the quality colours (q3 blue, q4 purple) already on every item link | One interactive hue, **lantern amber**: links, primary button, focus ring, "now" stretch of the trail, "You are here". Semantic hues are a separate fixed vocabulary (2.3) | Gold-ish = "you can act here" is already how players read Wowhead links; quest-yellow is the same family in game |
| Sticky progress bar under the header | Adds 40-50px to a top bar the audit already measured at 11% of the phone screen; out of thumb reach | Route **dock** fixed to the bottom on phones/tablets: progress strip, the next step's title, its `/way` chip and a Sections button | The three glance questions answered in the thumb zone |
| Dark only, light inverted later | Brief requires both; Wowhead colours fail AA on light | A designed **Day** theme (cool snow-stone `#eef1f0`, white surfaces, slate ink `#1a232b`) with its own AA remaps of quality, ladder and semantic colours | Not cream (tell #1); every pair measured |

**Second review of the revised plan (would I reach this for any guide site?):**
- *Is the trail just a "vertical stepper" template?* It would be if it were decoration. Here it is the checklist itself (node = 48px checkbox with the kind glyph), the progress (dashed to solid), the level relevance (lantern stretch) and the orientation (You are here, mile markers with level ranges). Kept.
- *Is amber a default "warm accent"?* It is not the terracotta/clay tell (`#d97757`); it is a yellow-amber chosen because the WoW ecosystem already uses gold for links and yellow for quests, and because it reads as lamplight on the night ground. Kept, but restricted to interactive and "now" meanings only.
- *Is Alegreya the "high-contrast serif on cream" tell?* It is moderate contrast, never on cream, and limited to places and H1. The light theme ground is cool, and the only warm surface in the light theme is the single lit "You are here" row. Kept.
- *Removed after review* (Chanel's accessory): drop caps, a parchment texture, an animated pulsing "You are here", coloured left borders on bracket headers, and a second display weight. None of them helped a player find the next step faster.

---

## 2. Tokens

Implementation target: `src/styles/global.css`. Keep the existing three-path theming (`:root` light default, `@media (prefers-color-scheme: dark) :root:not([data-theme='light'])`, `:root[data-theme='dark']`), the FOUC inline script in `Base.astro`, and the `waypoint:v1:theme` storage key. Layering follows the design-system skill: primitives (theme-independent scales) then semantic colour per theme, then a few component tokens. Components must use only tokens, never raw hex.

### 2.1 Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@700;800&family=Atkinson+Hyperlegible+Next:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

- `--font-ui`: Atkinson Hyperlegible Next (body, UI, tables, data, step titles, buttons). Fallback: `'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.
- `--font-place`: Alegreya 700/800 (H1, bracket/zone H2, standalone place labels, wordmark). Fallback: `'Iowan Old Style', Georgia, serif`. Always set `font-variant-numeric: lining-nums` on it (Alegreya defaults to old-style figures).
- No monospace anywhere. `<kbd>` keycaps and `/way` text use `--font-ui` with `tabular-nums`.
- Remove the Spectral link.

### 2.2 Primitives (theme-independent)

```css
:root {
  /* Type */
  --font-ui: 'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-place: 'Alegreya', 'Iowan Old Style', Georgia, serif;
  --fs-xs: 0.875rem;    /* 14  fine print only (footer legal, source URLs) */
  --fs-sm: 0.9375rem;   /* 15  tags, labels, meta, table secondary */
  --fs-base: 1.0625rem; /* 17  body, buttons, inputs, table cells, coordinates */
  --fs-md: 1.1875rem;   /* 19  step title, lede, item name */
  --fs-lg: 1.375rem;    /* 22  milestone step title, H3, wordmark, level number */
  --fs-xl: 1.75rem;     /* 28  H2 / zone names (Alegreya) */
  --fs-2xl: clamp(2.125rem, 1.6rem + 2.2vw, 2.75rem); /* 34 -> 44  H1 (Alegreya) */
  --lh-tight: 1.15;  --lh-snug: 1.3;  --lh-body: 1.55;
  --fw-regular: 400; --fw-semibold: 600; --fw-bold: 700; --fw-heavy: 800;
  --measure: 62ch;   /* prose max width */

  /* Space: 4px grid */
  --sp-1: 0.25rem; --sp-2: 0.5rem; --sp-3: 0.75rem; --sp-4: 1rem; --sp-5: 1.25rem;
  --sp-6: 1.5rem;  --sp-8: 2rem;   --sp-10: 2.5rem; --sp-12: 3rem; --sp-16: 4rem;
  --gutter: 1rem;          /* 16 phone; 24 at >=768; 32 at >=1280 */
  --tap: 2.75rem;          /* 44 minimum target */
  --tap-lg: 3rem;          /* 48 phone primary targets and inputs */
  --section-gap: var(--sp-10);

  /* Radii: shape encodes role */
  --r-tag: 2px;      /* static labels: never look pressable */
  --r-key: 4px;      /* keycaps */
  --r-control: 6px;  /* everything pressable or typeable */
  --r-panel: 10px;   /* containers: callouts, sheets, dock corners, tables wrapper */
  --r-node: 999px;   /* places on the route: trail nodes, mile markers, progress, level dots */

  /* Borders */
  --bw-hair: 1px;    /* separators */
  --bw-control: 1px; /* control edge (colour --line-2 is >= 3:1) */
  --bw-rule: 2px;    /* section boundary, trail */
  --bw-focus: 3px;

  /* Motion */
  --dur-press: 80ms; --dur-quick: 140ms; --dur-base: 200ms; --dur-slow: 320ms;
  --ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);  /* arriving */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);       /* leaving */
  --ease-std: cubic-bezier(0.3, 0, 0.2, 1);    /* state changes */

  /* Layers */
  --z-subnav: 20; --z-header: 30; --z-dock: 40; --z-popover: 50;
  --z-scrim: 60; --z-sheet: 70; --z-toast: 80; --z-skip: 90;

  /* Component tokens */
  --header-h: 3.5rem;      /* 56 phone, 64 >= 768 */
  --dock-h: 4.5rem;        /* 72 + safe area */
  --rail-w: 3rem;          /* trail column on step rows */
  --node: 2rem;            /* visible node ring; hit area is --rail-w square */
  --node-milestone: 2.5rem;
  --tag-h: 1.75rem;        /* 28 */
  --coord-min-w: 8.5rem;   /* holds "37.2, 46.1" and "Copied" without reflow */
}
@media (min-width: 48rem) { :root { --gutter: 1.5rem; --header-h: 4rem; } }
@media (min-width: 80rem) { :root { --gutter: 2rem; } }
@media (prefers-reduced-motion: reduce) {
  :root { --dur-press: 0ms; --dur-quick: 0ms; --dur-base: 0ms; --dur-slow: 0ms; }
  html { scroll-behavior: auto; }
}
```

**Type scale and roles** (scale steps 14 / 15 / 17 / 19 / 22 / 28 / 34-44; floor 14px, and 14px only for fine print):

| Role | Family | Size / line-height | Weight | Notes |
|---|---|---|---|---|
| H1 page title | Alegreya | 34-44 / 1.15 | 800 | max 20ch, `text-wrap: balance`, letter-spacing -0.005em |
| H2 zone group, page section | Alegreya | 28 / 1.25 | 800 | sentence case; places only on route; on other pages section names |
| H3 step title, item name, card title | Atkinson | 19 / 1.3 | 700 (done: 600, `--fg-2`) | imperative verb first on route |
| Milestone step title | Atkinson | 22 / 1.3 | 700 | |
| Lede | Atkinson | 19 / 1.5 | 400 | `--fg-1`, max 60ch |
| Body | Atkinson | 17 / 1.55 | 400 | max `--measure` (62ch) |
| Label (form labels, list headings like "Quests to pick up", table headers) | Atkinson | 15 / 1.35 | 700 | `--fg-2`, sentence case, never caps |
| Tag text | Atkinson | 15 / 1.2 | 600 | |
| Data (coordinates, levels, counts, prices, `/way`) | Atkinson | 17 in chips, 15 in tags | 700 | `font-variant-numeric: tabular-nums lining-nums` |
| Level number in the header widget | Atkinson | 22 | 800 | tabular |
| Standalone place label ("Loch Modan, Thelsamar", "Now: Loch Modan", vendor hub) | Alegreya | 17-19 | 700 | in running prose places stay in the body face |
| Fine print (footer legal, source URLs) | Atkinson | 14 / 1.45 | 400 | `--fg-2` |

The slashed zero of Atkinson Hyperlegible Next cannot be switched off through Google Fonts (tested `zero`, `ss01`-`ss05`, `salt`, `cv01`: no change). Treat it as a feature: `50.6` and `5O.6` can never be confused in a coordinate.

**Spacing rhythm:** inside a component 4/8/12; between related blocks 16/24; between sections 40 (`--section-gap`); page top 20. Step rows: 16px block padding (12px in Compact view).

**Radius hierarchy, justified:** shape is information. 2px tags are deliberately almost square so status labels never look like buttons (fixes audit M5). 6px is the single "you can press or type here" shape for buttons, chips, inputs, coordinate chips and the level widget. 10px is reserved for containers that hold other things (callouts, sheets, dock, table wrapper). Fully round shapes only ever mean "a place on the route": trail nodes, mile markers, level dots, the progress track. Nothing gets a radius "because cards are rounded".

**Elevation:** flat tonal layers, no shadow kit.

| Level | Token | Used for | Separation |
|---|---|---|---|
| 0 | `--bg-page` | page, step rows, bag rows | none |
| 1 | `--bg-surface` | coordinate chips, secondary buttons, mile marker fill, inputs on light | `--line-2` edge when interactive |
| 1- | `--bg-sunken` | input wells, level widget, code/backup textarea | `--line-2` edge |
| 2 | `--bg-raised` | header, dock, tags, table header row, footer | `--line-1` hairline |
| lit | `--bg-lit` | the single "You are here" step row, `:target` glossary entry | lantern edge |
| 3 | overlays: menu sheet, sections sheet, popover, toast | `--shadow-overlay` + `--scrim` behind sheets | the only shadows on the site |

**Breakpoints** (min-width, mobile first; CSS custom properties cannot be used in media queries, so these are constants):

| Name | Width | What changes |
|---|---|---|
| floor | 360 | must work, no horizontal scroll (verified in prototype) |
| xs | 30rem / 480 | theme button appears in the header (below this it lives in the menu sheet) |
| sm | 40rem / 640 | tables render as tables (below: two-line records); reference rows put name and coordinates on one line |
| md | 48rem / 768 | gutter 24, header 64, bag verdict becomes a left column, button labels next to icons |
| lg | 64rem / 1024 | top nav inline, Menu button hidden, left section rail on long pages, route dock hidden (its content moves into the sticky rail) |
| xl | 80rem / 1280 | gutter 32 |

**Z-index:** subnav 20, header 30, dock 40, popover 50, scrim 60, sheet 70, toast 80, skip link 90. Wowhead's tooltip uses its own very high z-index and must stay above all of ours; never set anything above 1000.

### 2.3 Hue vocabulary (one meaning per hue)

| Hue | Token | Meaning, and the only places it appears |
|---|---|---|
| Lantern amber | `--lantern`, `--lantern-edge`, `--lantern-fg`, `--link`, `--focus` | "You can act here / this is now": links, primary button, focus ring, the My-level stretch of the trail, the You-are-here node and row edge, active nav underline, current bracket in progress meters |
| Ink (text colour) | `--fg-1` | "Done": filled trail nodes, solid trail, progress fill. Also pressed segmented buttons |
| Fel green | `--fel`, `--fel-tint` | Good / safe: Tip callouts, "Use" verdict, success feedback ("Copied", bracket complete) |
| Frost blue | `--frost`, `--frost-tint` | Neutral information / hold: "Good to know" and "Untested" callouts, "Keep" and "Bank" verdicts |
| Brass | `--brass`, `--brass-tint` | Money changes hands: "Sell", "Auction", "Buy" verdicts |
| Ember orange | `--ember`, `--ember-tint` | Caution: "Careful" callouts |
| Blood red | `--blood`, `--blood-tint` | Danger / irreversible: "Danger" callouts, "Destroy" verdict, "Untick everything" confirm |
| Game colours (not ours) | `--q0..--q5`, `--lv-*`, `--quest-*`, `--coin-*` | Only inline item/spell/quest link text (quality), the dot + word on level tags (difficulty ladder), quest marker glyphs, coin glyphs in prices |

Confidence uses **no hue** (pips + word + outline), and step kinds use **no hue** (glyph + word). That is the fix for the audit's M4 ("green = beta-tested on one page, green = buy on the next").

### 2.4 Colour tokens per theme

```css
/* ---------- Day (light): default ---------- */
:root {
  color-scheme: light;
  --bg-page: #eef1f0;     /* cool snow-stone, not cream */
  --bg-surface: #ffffff;
  --bg-raised: #e2e7e7;
  --bg-sunken: #e8ecec;
  --bg-lit: #fdf4e1;      /* only the You-are-here row and :target */
  --scrim: rgb(16 22 28 / 45%);
  --fg-1: #1a232b;        /* slate ink */
  --fg-2: #48545e;
  --fg-on-lantern: #1b1405;
  --line-1: #d0d8db;      /* hairline separators (decorative) */
  --line-2: #76838d;      /* control edges, trail-todo: >= 3:1 */
  --trail-todo: #76838d;
  --trail-done: #1a232b;
  --lantern: #f4b942;     /* fills (primary button, node fill) */
  --lantern-edge: #9a6400;/* rings, underlines, row edge on light (3:1+) */
  --lantern-fg: #855400;  /* lantern-coloured text on light */
  --link: #855400;
  --focus: #9a6400;
  --fel: #2c6a33;   --fel-tint: #eaf0eb;
  --frost: #1c5d8b; --frost-tint: #e8eff3;
  --brass: #715620; --brass-tint: #f1eee9;
  --ember: #a0470f; --ember-tint: #f6ede7;
  --blood: #b42318; --blood-tint: #f8e9e8;
  /* Wowhead quality (AA re-maps for light) */
  --q0: #5e6469; --q1: #1a232b; --q2: #1f6e0c; --q3: #0b5cb0; --q4: #8526c2; --q5: #a84700;
  /* Quest-difficulty ladder, relative to My level */
  --lv-red: #b42318; --lv-orange: #a84700; --lv-yellow: #736000; --lv-green: #25701d; --lv-grey: #5e6469;
  /* Game glyph colours */
  --quest-yellow: #ffd54a; --quest-stroke: #6b4e00; --quest-grey: #8d949a;
  --coin-gold: #9a7300; --coin-silver: #6b7278; --coin-copper: #9a5226;
  --shadow-overlay: 0 10px 30px rgb(20 30 40 / 18%), 0 1px 0 rgb(20 30 40 / 8%);
}

/* ---------- Night (dark) ---------- */
/* Put the SAME block in both selectors below (system dark unless forced light, and forced dark). */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) { /* NIGHT */ }
}
:root[data-theme='dark'] { /* NIGHT */ }

/* NIGHT = */
  color-scheme: dark;
  --bg-page: #171d23;     /* lifted slate night, not near-black */
  --bg-surface: #1e252d;
  --bg-raised: #262f38;
  --bg-sunken: #12171c;
  --bg-lit: #2f2c24;      /* lamplight on slate */
  --scrim: rgb(6 9 12 / 65%);
  --fg-1: #ece5d6;        /* parchment, not white */
  --fg-2: #b3b9be;
  --fg-on-lantern: #1b1405;
  --line-1: #34404b;
  --line-2: #748290;
  --trail-todo: #66737f;
  --trail-done: #ece5d6;
  --lantern: #f4b942; --lantern-edge: #f4b942; --lantern-fg: #f5c35a;
  --link: #f5c35a; --focus: #f4b942;
  --fel: #8fd18a;   --fel-tint: #2e3d3a;
  --frost: #8cc4ec; --frost-tint: #2d3b48;
  --brass: #d6ba82; --brass-tint: #383a39;
  --ember: #ffa066; --ember-tint: #3e3635;
  --blood: #ff8379; --blood-tint: #3e3238;
  --q0: #9d9d9d; --q1: #ece5d6; --q2: #52e33f; --q3: #5aa8ff; --q4: #c88cf8; --q5: #ff8a1f;
  --lv-red: #ff7a6e; --lv-orange: #ffa24d; --lv-yellow: #f5da54; --lv-green: #79d46e; --lv-grey: #a3a9ae;
  --quest-yellow: #ffd54a; --quest-stroke: #6b4e00; --quest-grey: #8d949a;
  --coin-gold: #e8c04a; --coin-silver: #c9ced3; --coin-copper: #d08a55;
  --shadow-overlay: 0 12px 32px rgb(0 0 0 / 45%);
```

The prototype file `dirB-proto/tokens.css` contains this exactly, expanded into both selectors, ready to paste.

**Semantic aliases** (components use these names):

```css
:root {
  --success: var(--fel);    --success-tint: var(--fel-tint);
  --info: var(--frost);     --info-tint: var(--frost-tint);
  --warn: var(--ember);     --warn-tint: var(--ember-tint);
  --danger: var(--blood);   --danger-tint: var(--blood-tint);

  /* Confidence: no hue. Pips filled out of 3, plus the word. */
  --conf-pip-on: var(--fg-1);
  --conf-pip-off: var(--fg-2);
  --conf-official: 3;  --conf-beta-tested: 2;  --conf-community: 1;  --conf-theory: 0; /* filled pips */
  --conf-theory-edge: var(--fg-2);  /* theory tag: transparent bg, 1.5px outline, dotted pips */

  /* Bag verdicts: four families, seven icons */
  --act-keep: var(--frost);    --act-keep-tint: var(--frost-tint);
  --act-bank: var(--frost);    --act-bank-tint: var(--frost-tint);
  --act-use: var(--fel);       --act-use-tint: var(--fel-tint);
  --act-sell: var(--brass);    --act-sell-tint: var(--brass-tint);
  --act-auction: var(--brass); --act-auction-tint: var(--brass-tint);
  --act-buy: var(--brass);     --act-buy-tint: var(--brass-tint);
  --act-destroy: var(--blood); --act-destroy-tint: var(--blood-tint);

  /* Step kinds: glyph + word, neutral colour. Only the quest "!" uses the game's quest yellow. */
  --kind-ink: var(--fg-2);
  --kind-quests: var(--quest-yellow); /* used for the filled "!" marker in reference rows; the node glyph stays --kind-ink */
  --kind-travel: var(--kind-ink); --kind-class: var(--kind-ink); --kind-train: var(--kind-ink);
  --kind-dungeon: var(--kind-ink); --kind-profession: var(--kind-ink); --kind-system: var(--kind-ink);
  --kind-shopping: var(--kind-ink); --kind-tip: var(--kind-ink); --kind-milestone: var(--kind-ink);
}
```

**Wowhead quality overrides** (keep the existing contract, `a.q0`..`a.q5` with `!important`, because `tooltips.js` with `colorLinks: true` sets these classes):

```css
a.q0 { color: var(--q0) !important; } a.q1 { color: var(--q1) !important; }
a.q2 { color: var(--q2) !important; } a.q3 { color: var(--q3) !important; }
a.q4 { color: var(--q4) !important; } a.q5 { color: var(--q5) !important; }
/* A q0/q1 item must still read as a link: underline is never removed from item links. */
a[class^='q'] { text-decoration-line: underline; text-decoration-thickness: 1px; text-underline-offset: 0.18em; }
```

q1 "common" is mapped to `--fg-1` (parchment on night, ink on day) instead of `#ffffff`, which removes the brightest glare source on dark pages. The quality colour never appears outside link text; pair it with the bracket/icon convention (`[icon] Item name`) the Wowhead script already supplies.

### 2.5 Measured contrast (WCAG 2.x, computed by `scripts/dirB-contrast-final.py`)

Text pairs, normal text needs 4.5:1. Columns: page / surface / raised / lit / sunken.

| Foreground | Night | Day |
|---|---|---|
| `--fg-1` body | 13.5 / 12.3 / 10.8 / 11.1 / 14.4 | 14.0 / 15.9 / 12.7 / 14.6 / 13.4 |
| `--fg-2` muted | 8.6 / 7.8 / 6.9 / 7.0 / 9.1 | 6.8 / 7.8 / 6.2 / 7.1 / 6.5 |
| `--link` (= `--lantern-fg`) | 10.4 / 9.5 / 8.3 / 8.5 / 11.0 | 5.7 / 6.4 / 5.2 / 5.9 / 5.4 |
| `--fg-on-lantern` on `--lantern` (primary button) | 10.3 | 10.3 |
| q0 poor | 6.3 / 5.7 / 5.0 / 5.1 / 6.6 | 5.3 / 6.0 / 4.8 / 5.5 / 5.0 |
| q1 common | 13.5 / 12.3 / 10.8 / 11.1 / 14.4 | 14.0 / 15.9 / 12.7 / 14.6 / 13.4 |
| q2 uncommon | 10.0 / 9.1 / 8.0 / 8.2 / 10.7 | 5.6 / 6.4 / 5.1 / 5.8 / 5.4 |
| q3 rare | 6.9 / 6.2 / 5.5 / 5.6 / 7.3 | 5.8 / 6.6 / 5.3 / 6.1 / 5.6 |
| q4 epic | 6.9 / 6.3 / 5.5 / 5.7 / 7.3 | 6.1 / 6.9 / 5.5 / 6.3 / 5.8 |
| q5 legendary | 7.2 / 6.6 / 5.8 / 5.9 / 7.6 | 5.2 / 5.9 / 4.7 / 5.4 / 4.9 |
| ladder red / orange / yellow / green / grey (on page) | 6.7 / 8.5 / 12.2 / 9.3 / 7.2 | 5.8 / 5.2 / 5.4 / 5.4 / 5.3 |
| ladder, worst case on raised (tag bg) | 5.3 (red) | 4.7 (orange) |
| fel / frost / brass / ember / blood (on page) | 9.4 / 9.1 / 9.1 / 8.5 / 7.1 | 5.7 / 6.2 / 6.0 / 5.4 / 5.8 |
| family text on its own tint (verdicts, callout labels) | 6.3 / 6.1 / 6.1 / 5.9 / 5.1 | 5.6 / 6.0 / 5.9 / 5.3 / 5.6 |
| `--fg-1` on any family tint (callout body) | 9.1 to 9.7 | 13.5 to 13.8 |

Non-text (needs 3:1):

| Pair | Night | Day |
|---|---|---|
| `--focus` ring vs page / surface / raised / lit | 9.6 / 8.7 / 7.7 / 7.9 | 4.4 / 5.0 / 4.0 / 4.6 |
| `--line-2` control edge vs page / surface / sunken | 4.3 / 3.9 / 4.6 | 3.4 / 3.9 / 3.3 |
| `--trail-todo` dashed trail vs page | 3.5 | 3.4 |
| quest "!" marker: `--quest-stroke` outline vs surface | yellow fill 11.0 on night surface | outline 7.7 on white (fill alone is 1.4, so the outline is mandatory on Day) |

Fixes against the audit's failing pairs: light community badge (4.17) and beta badge (4.40) are gone (confidence is now neutral, `--fg-1`/`--fg-2` on raised = 12.7/6.2); light q0 3.84 is now 5.3; light q5 4.12 is now 5.2; control borders 1.25-1.38 are now 3.3-4.6; done-step text no longer uses opacity (title in `--fg-2`, 6.2-8.6).

Not allowed: `--line-1` (1.45:1) as the only boundary of anything interactive; `--trail-todo` on `--bg-lit` (2.9 on Night). The lit row always draws its trail in lantern (7.9).

---

## 3. Components

Notation: "contract" lists selectors/attributes the existing scripts depend on, which must survive. Every interactive element: 44px minimum hit area (48px for phone primary actions and inputs), 8px between targets, 3px `--focus` outline offset 2px on `:focus-visible`, `touch-action: manipulation`, pressed feedback within 80ms by background change (no transforms, no layout shift), `cursor: pointer`.

### 3.1 Icon plan (hand-drawn inline SVG only)

- Grid 24x24, drawn by hand in this repo (no icon library, no Blizzard or Wowhead art). Style: single-weight outline, `stroke: currentColor`, `stroke-width: 2` (1.75 is not allowed; one stroke per layer), round caps and joins, no fills except the two game markers and coins. Sizes: 16 (in tags), 20 (default), 24 (verdicts, header), node glyph 17.
- Delivery: one `<svg><symbol>` sprite inlined once in `Base.astro` (a `src/components/Icons.astro`), used as `<svg class="icon" aria-hidden="true"><use href="#k-travel"/></svg>`. Decorative when next to a word (`aria-hidden="true"`); icon-only buttons carry `aria-label`.
- Reference drawings for all of the below are in `dirB-proto/sprite.svg.html`.

| Group | Icon id | Drawing |
|---|---|---|
| Brand | `i-mark` | dotted path rising left to right ending in a lantern-filled node ring (also the favicon on a slate square) |
| Step kinds | `k-quests` | bold "!" (stroke) |
|  | `k-travel` | boot |
|  | `k-class` | small flame (warlock class quest or demon; no class crest) |
|  | `k-train` | open book |
|  | `k-dungeon` | arched portcullis |
|  | `k-profession` | anvil |
|  | `k-system` | rune diamond with a cross (Forever systems) |
|  | `k-shopping` | coin pouch |
|  | `k-tip` | campfire (crossed logs and flame; Forever's camping) |
|  | `k-milestone` | five-point star |
| Game markers (filled) | `m-quest` | yellow "!" with `--quest-stroke` outline (available quest) |
|  | `m-turnin` | yellow "?" with outline (turn in) |
|  | `m-quest-grey` | grey "!" (low-level quest; used on Start here) |
| Bag verdicts | `a-keep` | backpack with a check |
|  | `a-bank` | domed chest |
|  | `a-use` | flask |
|  | `a-sell` | stack of three coins |
|  | `a-auction` | gavel |
|  | `a-buy` | basket |
|  | `a-destroy` | bin |
| Callouts | `c-tip` = `k-tip` campfire; `c-info` circled "i"; `c-warn` triangle "!"; `c-danger` octagon "!"; `c-beta` flask |
| Data | `i-pin` | map pin (coordinates) |
|  | `i-person` | head and shoulders (NPC) |
|  | `i-bag` | bag (item) |
|  | coins | 12px filled circles `--coin-gold/silver/copper` with a darker 1.5px ring (prices: `1 [g] 25 [s] 40 [c]`, the number always printed) |
| UI | `i-menu`, `i-close`, `i-search`, `i-chevron-down`, `i-chevron-right`, `i-check`, `i-copy`, `i-ding` (double chevron up), `i-list` (sections), `i-target` (go to next / you are here), `i-eye-off` (hide done), `i-filter`, `i-cal` (updated), `i-flask` (beta), `i-sources` (book with lines), `i-flag` (report), `i-external` (box with arrow), `i-sun`, `i-moon`, `i-auto` (half-filled circle), `i-compass` (overview), `i-trail` (route), `i-tree` (talents), `k-profession` reused (professions), `i-plus`, `i-minus` |

Review note: the first drawing of "Sell" (coin with an outgoing arrow) read as the male symbol and "Buy" (coin with incoming arrow) as a ring in the 390px screenshot; both were redrawn (coin stack, basket). Re-check every glyph at 16px in both themes before shipping.

### 3.2 Site header and navigation

**Anatomy (phone, < 1024):** one opaque 56px bar (`--bg-raised`, bottom `--line-1`), sticky top, no blur, no translucency. Left: brand (trail mark 28px + "Waypoint" Alegreya 800 22px, 44px tall link). Right: level widget (3.3), theme button (only at >= 480; below that it is in the menu), Menu button (44x44, icon + visible "Menu" label at >= 768).

**Desktop (>= 1024):** 64px bar. Brand, then inline top nav with **six** items, then level widget, theme button. No Menu button.
- Top-level items: Start here, Gnome Warlock (links to the overview; `aria-current="page"` on any of the four guide pages), Bag advisor, Library books, Forever systems, Glossary. The four guide pages move to the guide sub-nav (3.6). This removes the overflow ("Glossary" cut to "Gloss") and the two-competing-navs problem (audit H7, `nav-hierarchy`).
- Nav item: 44px tall, 17px/600 `--fg-2`, `white-space: nowrap`; hover `--fg-1` + `--bg-surface`; current `--fg-1` + 3px `--lantern-edge` underline (inset box-shadow, no layout shift).

**Menu sheet (phone/tablet):** a `<dialog>` opened with `showModal()` (free focus trap, Esc closes, `::backdrop` uses `--scrim`). Drops from under the header, full width, max-height `calc(100dvh - var(--header-h))`, `--bg-raised`, bottom radius `--r-panel`, `--shadow-overlay`. Contents, as 48px rows with icon + label:
1. "Your guide: Gnome Warlock": Overview, Route, Talents & demons, Professions & alts.
2. "Tools": Bag advisor, Library books.
3. "Learn": Start here, Forever systems, Glossary.
4. "Theme": segmented control Match device / Light / Dark (3.4).
Close button "Close" (44px, top right). Opening: translateY(-8px) to 0 + fade, `--dur-base` `--ease-out`; closing `--dur-quick` `--ease-in`; reduced motion: instant. Returns focus to the Menu button.

**States:** link hover/focus/current as above; Menu button `aria-expanded` mirrors the dialog.
**Light/dark:** identical structure; header uses `--bg-raised` in both.
**Contract:** keep `nav` from `src/lib/site.ts` as the data source (add a `group` field), `aria-current="page"`, skip link `a.skip` (z 90, visible on focus at `left: var(--gutter)`).

### 3.3 Level widget ("My level")

The global control that drives `data-now`. It must be readable from arm's length and operable with a thumb.

**Anatomy:** one 6px-rounded control group, 48px tall on phones (44 on desktop), `--bg-sunken` well, 1px `--line-2` edge:
`[ Lv | 14 | ⇑ ]`
- Label: visible "Lv" on phones, "My level" at >= 1024 (15px/600 `--fg-2`), as a `<label for="my-level">` containing visually hidden " (my character level)" so the accessible name contains the visible text.
- Input: existing `#my-level`, `type=number`, `inputmode=numeric`, `min=1 max=60`, 3ch wide, 22px/800 tabular, centred, placeholder "?".
- Ding button (+1): 44x44 square at the right edge with `i-ding`, `aria-label="Level up to 15"` (updated on every change). Pressing it sets the value to n+1 and dispatches `change` on `#my-level` (so `level.ts` stays the single owner). Disabled (`aria-disabled`, 45% opacity) at 60 or when empty. "Ding" is the word players use for levelling up; the glossary gets an entry.
- Live region (visually hidden, `aria-live="polite"`): "Level 15. Steps for level 15 are highlighted."

**States:** empty (dashed 1.5px `--lantern-edge` outline on the group + "?" placeholder; guide pages show a one-line prompt under the page head: "Set your level to light up what matters now." with a button "Set my level" that focuses `#my-level`); focus-within (border `--lantern-edge` + 3px focus ring); out of range (value clamped to 1-60 as today, helper "Levels go from 1 to 60" under the widget for 3s); level-up (one 320ms lantern ring around the group, the only celebratory motion on the site; none under reduced motion).
**Light/dark:** well is `--bg-sunken` in both; number is `--fg-1`.
**Contract:** `#my-level`, `change` event, `waypoint:level` custom event, storage key `level`. New: `[data-action="level-up"]` button handled in `level.ts`.

### 3.4 Theme toggle

- Keep `#theme-btn` and its System -> Light -> Dark cycle (`theme.ts`), but make the state visible: icon per state (`i-auto` half-filled circle, `i-sun`, `i-moon`) plus a visible word at >= 768 ("Auto", "Light", "Dark"), and a dynamic `aria-label`, e.g. "Theme: dark. Switch to match device". The static label and `title`-only state are removed (audit H7).
- Size: 44px tall, `--r-control`, secondary button style.
- Phones < 480: not in the header; the menu sheet shows a 3-segment radio group (`role="radiogroup"`, 44px segments: "Match device", "Light", "Dark"). Both controls call one exported `setTheme(t)`.
- No transition on theme switch (colour changes are instant; transitions on `background-color` across the whole page cause a flash).
- Contract: `html[data-theme]`, key `theme`, FOUC script unchanged.

### 3.5 Page head

**Anatomy (top to bottom):** breadcrumb, H1, lede, facts strip. No eyebrow, ever.
- Breadcrumb: `<nav aria-label="Breadcrumb"><ol>`; 15px `--fg-2`; separators are CSS chevrons (2px strokes rotated), not "›" glyphs or middle dots; last item `aria-current="page"` unlinked. Guide pages: "Gnome Warlock > Route". Top-level pages omit it. This replaces the "GNOME WARLOCK" eyebrow.
- H1: Alegreya 800 `--fs-2xl`, max 20ch, margin 8px above, 12px below.
- Lede: 19px/1.5 `--fg-1`, max 60ch.
- Facts strip: a `<ul>` of icon + short phrase items (`i-cal` "Updated 29 Oct 2026", `i-flask` "Levels 1–30 played in the beta"), 15px `--fg-2`, gap 8px x 20px, wraps. Items are separated by space and icons, never by "·".
- Spacing: 20px from header; 20px below facts before the sub-nav.
- `PageHead.astro`: drop the `eyebrow` prop; add optional `crumbs` and `facts` props.

### 3.6 Guide sub-nav

- Four links with icons: Overview (`i-compass`), Route (`i-trail`), Talents & demons (`i-tree`), Professions (`k-profession`). Phone labels shorten ("Talents & demons" fits; "Professions & alts" becomes "Professions").
- 48px tall links, 17px/600 `--fg-2`; current `--fg-1` + 3px `--lantern-edge` bottom border; bottom hairline `--line-1` across the full width.
- Phone: one row, `overflow-x: auto`, `scroll-snap-type: x proximity`, a right-edge fade (`mask-image`) only while it overflows, the current tab scrolled into view on load. Never wraps to two lines.
- Not sticky (the route has the dock; other guide pages are short enough).
- Contract: `GuideNav.astro`, `aria-current="page"`.

### 3.7 Section navigation (TOC)

**Route page:**
- >= 1024: left sticky rail, 16rem, `top: calc(var(--header-h) + 16px)`, scrolls internally if taller than the viewport. Contents: the trail meter (3.9, compact), a primary "Go to next step" button, then "Sections" (15px/700 label) and one 44px row per bracket: `Lv 12–20` (tabular 700) | short zone name | `2/12`. Current scroll position: `aria-current="true"`, `--bg-surface` fill, 3px `--lantern-edge` inset left edge, `--fg-1` bold. The bracket that contains My level gets a lantern level dot. Completed brackets show a check instead of the count.
- < 1024: the same list opens as a bottom sheet from the dock's Sections button (`<dialog>`, 48px rows, current row marked "You are viewing" and the My-level row marked with the lantern dot, tapping a row closes the sheet and scrolls).
- Scroll-spy with `IntersectionObserver` (`rootMargin` top offset = header height), updates only `aria-current`; no JS = plain anchor list, still works.

**Other long pages (Start here, Forever systems, Talents):**
- >= 1024: same left rail component listing H2s only (max 7 rows).
- < 1024: `<details class="onpage">` directly under the page head: summary row 48px "On this page (6 sections)" with chevron; list of 44px rows. Replaces the `.toc` chip row (chips are for filters only).
- Every target heading has `scroll-margin-top: calc(var(--header-h) + 16px)`.

### 3.8 Route step (the trail row)

The central component. Rows on the page, not cards.

**Anatomy (Full view):**

```
[rail 48px]  [content, max 46rem]
  ┆          ◎ You are here                        (only on the next step)
 (!)         Pick up every quest in Thelsamar      H3 19/700
  ┆          [● Lv 12–14 on level] [! Quests] [●●○ Beta-tested] [Optional]
  ┆          ⌖ Loch Modan, Thelsamar               place label, Alegreya 17/700
  ┆          Body text, 17/1.55, max 62ch.
  ┆          Quests to pick up                     label 15/700 fg-2
  ┆          ─────────────────────────────────────
  ┆          ! Rat Catching                        reference row (below)
  ┆            From Mountaineer Kadrell   [⌖ 37.2, 46.1]
  ┆          ─────────────────────────────────────
  ┆          People / Items                        same row pattern, other glyphs
  ┆          [▤ Sources (3)]                [✓ Mark done]
──┼───────────────────────────────────────────────  hairline --line-1
```

1. **Rail and node (the checkbox).** Grid column `--rail-w` (48px). The trail is a `::before` 2px line through the column centre: `dashed --trail-todo` for unticked, `solid --trail-done` for ticked, `dashed --lantern-edge` for steps whose level range contains My level (`data-now="current"`). The node is the existing `<label class="check">` wrapping the real `<input type="checkbox" data-step>` (opacity 0, filling the 48x48 label), followed by a 32px ring span:
   - unticked: 2px `--trail-todo` ring on `--bg-page`, kind glyph 17px in `--kind-ink` inside (from `k-*`);
   - ticked: ring and fill `--trail-done`, a 3px-stroke check in `--bg-page` replaces the glyph;
   - next step: 3px `--lantern-edge` ring, `--lantern` fill, glyph in `--fg-on-lantern`;
   - milestone kind: 40px ring;
   - focus: 3px `--focus` outline offset 3px on the ring (`input:focus-visible + .ring`).
   Only the 48x48 node is a hit target (the old label spanning the full card height is removed, which stops accidental ticks while scrolling with a thumb on the left edge). A second, explicit target "Mark done" (secondary button style, 44px, `i-check` + text) sits at the end of the expanded step as `<label for>` pointing at the same input. Both share one input, so state cannot diverge.
2. **You are here** (next step only): `i-target` + "You are here", 15px/800 `--lantern-fg`, above the title. The row gets `--bg-lit` and a 4px inset left edge in `--lantern-edge`. `aria-current="step"` on the article.
3. **Title:** H3 19px/700 `--fg-1`, imperative verb first ("Pick up", "Train", "Run", "Take the boat to").
4. **Tags row** (3.13): level tag with ladder dot and word, kind tag (glyph + word), trust meter, optional tag. Wraps; 8px gaps.
5. **Where:** `i-pin` + place label in Alegreya 17/700 (`zone, hub` joined with a comma: "Loch Modan, Thelsamar"; never a middle dot).
6. **Body:** markdown via `md()`, 17px/1.55, max `--measure`.
7. **Reference lists** (quests, people, items), each with a sentence-case label ("Quests to pick up", "People", "Items") as an `h4` styled as a label. Each item is a **reference row** (fixed slots, replaces `RefItem`'s inline run):
   - Grid at < 640: areas `"glyph name name" ". role coord"`; at >= 640: `"glyph name coord" "glyph role coord"`. Row min-height 52px, hairline between rows.
   - Glyph (24px column): `m-quest` (yellow "!" with outline) for quests to pick up, `m-turnin` "?" for turn-ins, `i-person` for NPCs, `i-bag` for items.
   - Name: the Wowhead link (17px/700, underlined, quality colour from `tooltips.js` for items/spells; `--link` otherwise). Its hit area is extended to the full row height with `::after { inset: -0.6rem -0.25rem }` without changing layout. Wowhead's inserted icon stays inside the name slot, so late icons shift only the name text, never the row (audit L1).
   - Role line: 15px `--fg-2` ("From Mountaineer Kadrell", "Innkeeper. Set your hearthstone here"). `note` renders as a third line in 15px `--fg-1`.
   - Coordinate chip = the `/way` copy button (3.15).
8. **Footer:** one disclosure "Sources (3)" (`i-sources`, 44px summary). Inside: the source links (15px, `overflow-wrap: anywhere`) and, as the last line, "Something wrong here? Report a problem" (external link). This removes 65 separate "Report a problem" links from the scan path (audit H2) while keeping the action one tap away. "Mark done" sits right-aligned on the same row.

**Views (new, persisted per checklist under `view:<scope>`):**
- **Full** (default on desktop): everything above.
- **Compact** (default on phones on first visit, "glance mode"): node, title, level tag, and the first reference row that has coordinates (so the next `/way` is always one tap away). Body, labels, other refs, kind/trust tags and footer hidden. Row padding 12px. A 44px "Details" toggle (`aria-expanded`) on each row reopens that one step in place.
- Implemented as `html.view-compact` (same pattern as `html.hide-done`), so no markup duplication.

**States:**

| State | Trigger | Visual |
|---|---|---|
| Future | `data-now="future"` | normal; level tag ladder shows "hard"/"too hard" |
| Current level | `data-now="current"` | trail drawn dashed `--lantern-edge`; level tag "on level" (yellow ladder dot) |
| Next step | first unticked step in document order (`data-next`, set by `progress.ts`) | lit row, lantern edge and node, "You are here", `aria-current="step"`; exactly one per page |
| Past, not ticked | `data-now="past"` | title `--fg-2`; level tag "easy"/"trivial"; nothing else (no opacity) |
| Done | `.done` | filled ink node with check, solid trail, title `--fg-2` 600, in Full view the body and refs fold away (a "Details" toggle reopens them); never opacity, never strikethrough |
| Hidden done | `html.hide-done .step.done` | `display: none`; the bracket shows "4 done, hidden" as a 44px button that turns hide-done off |
| Flash (scroll target) | `.flash` | 2px `--lantern-edge` outline for 1.6s, no animation (identical under reduced motion) |
| Optional | `step.optional` | "Optional" tag with dashed outline |
| Untested | `confidence: theory` | theory trust tag; brackets past level 30 open with the "Untested" callout (3.11) |

**Motion (the one orchestrated moment):** when a node is ticked, the ring fills (`--dur-quick`), the trail segment below it inks from dashed to solid (`--dur-base`, a `scaleY` reveal of a solid pseudo-element over the dashed one), and the You-are-here marker appears on the next step. Under reduced motion all three are instant. No other route motion.

**Mobile:** rail 48px + 8px gap, content gets the remaining width (358 - 56 = 302px at 390), right padding 12px. Reference rows stack name over role/coord. Measured at 390 and 360: no horizontal overflow.
**Light/dark:** identical structure; only tokens change. The lit row is `#fdf4e1` on Day (the only warm surface on the light theme) and `#2f2c24` on Night.
**Contract:** `article.step.kind-*[id][data-lmin][data-lmax]`, `label.check > input[type=checkbox][data-step]` (the `.check` class is kept for the node label), `.done`, `.flash`, `data-now`, `html.hide-done`, `scroll-padding-top`. New: `data-next`, `aria-current="step"`, `html.view-compact`, `[data-action="view"]`, `[data-action="details"]`.

### 3.9 Checklist and progress (trail meter, route toolbar, route dock, backup)

**Trail meter** (route toolbar, desktop rail, dock strip, Library books):
- A single fill element keeps the existing contract: `[data-progress-bar]` with `style.width = n/total %`. The track is drawn in segments, one per bracket, sized by step count: gaps are a background `linear-gradient` with hard stops computed at build time (positions are known), so the fill reads as segmented without extra JS.
- Track 10px tall (4px in the dock), `--r-node`, track `--bg-raised` + inset `--line-1`; fill `--trail-done` (ink, meaning done); the bracket containing My level outlined 2px `--lantern-edge`.
- Label row above: `[data-progress-text]` "19 of 65 steps done" (17px/700 tabular) left; right "Now: Loch Modan" (Alegreya place label; the My-level bracket, or the next step's bracket when no level is set).
- Accessibility: the visual bar is `aria-hidden`; the text is the accessible value. Updates announce once per tick via the existing `aria-live` pattern ("20 of 65 steps done").

**Route toolbar** (under the sub-nav, not sticky):
- Row 1: trail meter.
- Row 2 (wraps, 8px gaps): **Go to next step** (primary, lantern fill, `i-target`, `[data-action="resume"]`; label replaces "Resume where I left off"), **Jump to my level** (secondary, `[data-action="my-level"]`), **View** segmented Full | Compact (`role="group"`, `aria-pressed`), **Hide done** (quiet toggle, `i-eye-off`, `[data-action="hide-done"][aria-pressed]`), **More** (secondary, opens a menu/sheet).
- **More** contains the existing backup tools: "Move progress to another device" (`[data-action="backup"]`, `[data-action="restore"]`, `textarea[data-backup-code]` in `--font-ui` 15px, `[data-backup-status]` live), "Mark everything before my level as done" (new, confirm dialog with counts), and "Untick everything" (`[data-action="reset"]`, blood outline button, confirm dialog "Untick all 65 steps? You can't undo this." with "Untick all" / "Keep my progress"). Destructive action is separated from the rest by a hairline.

**Route dock** (phones and tablets < 1024; hidden at >= 1024 where the sticky rail carries the same content):
- `position: fixed; bottom: 0`, full width, `--bg-raised`, top border `--line-2`, padding-bottom `env(safe-area-inset-bottom)`, z 40, height 72px + safe area. `main` gets `padding-bottom: calc(var(--dock-h) + 16px)` on the route page so the last row is never hidden (`fixed-element-offset`).
- Top edge: the 4px trail meter strip, full bleed.
- Row: **Next step** link (2 lines: "Next step" 14px/800 `--lantern-fg`; the step title 17px/700, one line with ellipsis; 44px+ tall; jumps to the step and flashes it), the next step's **coordinate chip** (copies its `/way`), **Sections** icon button (44x44, `aria-label="Sections"`, opens the section sheet).
- All done: "Route complete. 65 of 65" + Sections.
- `role="region" aria-label="Route progress"`. It never covers focused content: when focus moves into the last 72px of the viewport, `scrollIntoView({ block: 'center' })` is used by the scripts (`focus-not-obscured`).
- Data hooks: `[data-next-title]`, `[data-next-coord]` (a `[data-copy]` button whose `data-copy` is updated by `progress.ts`).

### 3.10 Bracket header (zone group)

**Anatomy:** 2px `--fg-1` top rule (section boundary), 12px padding, a 3-column grid:
- **Mile marker** (left, spans two rows): 68px circle, 2px `--fg-1` ring, `--bg-surface` fill, "Lv" 14px/600 `--fg-2` over "12–20" 19px/700 tabular. My-level bracket: ring and fill `--lantern`, text `--fg-on-lantern`. Complete bracket: fill `--trail-done`, text `--bg-page`, "Lv" replaced by `i-check`. The trail line of the steps below starts from the marker's centre column, so the marker reads as a mile stone on the path.
- **H2** zone title (Alegreya 800 28px/1.25).
- **Count** (right): `[data-group-count]` rendered as "2 of 12" 15px/700 tabular `--fg-2`; complete: `i-check` + "Done" in `--fel`.
- **Zones line** (row 2): "Zones: Loch Modan, Dun Morogh, Ironforge" 15px `--fg-2` (a sentence with commas, not a middot list).
- **Summary** paragraph below, 17px, max 62ch.
- **Talents and new spells** at this level: `<details class="bracket-extras">` as a 48px disclosure row ("Talents and new spells at 12–20", chevron), no box-in-box; inside, two compact lists of record rows (level tag + name), and the link "Full talent plan" (no arrow suffix).
- Mobile: marker 56px, H2 wraps beside it; count stays top right.
- Contract: `section.bracket[id][data-group][data-lmin][data-lmax]`, `[data-group-count]`, `.complete`. Bracket nav pills (`.bracket-nav`) are removed; their job moves to the section rail/sheet.

### 3.11 Callouts

Five variants, one shape: a 10px-radius panel with a 1.5px border in the family colour and its tint as background, max 46rem; a **label tab** (6px radius, `--bg-page` fill, same 1.5px border, family-coloured icon + word, 15px/800) sits on the top border, 12px from the left. No left stripe.

| Variant | Class | Label | Icon | Family | Use |
|---|---|---|---|---|---|
| Tip | `.callout.tip` | Tip | campfire | fel | a better way to do something |
| Info | `.callout.info` | Good to know | circled i | frost | context, how to read the page |
| Untested | `.callout.beta` | Untested | flask | frost | levels 31-60 content, theory data; links to "How much to trust a fact" |
| Warn | `.callout.warn` | Careful | triangle | ember | you can lose items, gold or time |
| Danger | `.callout.danger` | Danger | octagon | blood | you can die, or the action can't be undone |

- Padding 20px top (room for the tab), 16px sides/bottom; body 17px `--fg-1` (9.1-13.8:1 on all tints).
- Label words are part of the content (`<p class="label"><svg aria-hidden>…</svg>Careful</p>`), so screen readers hear the meaning; the callout is a plain `<aside>` (`role="note"`).
- Mobile: full width, tab stays top-left.
- Old classes map: `.callout` (no modifier) -> `.info`, `.callout.fel` -> `.tip`, `.callout.warn` -> `.warn`, `.callout.danger` -> `.danger`. "How to read this" on the route becomes `.info`.

### 3.12 Tables (and their phone shape)

**>= 640px:** real `<table>` inside `.table-wrap` (10px radius, 1px `--line-1`, `--bg-page`; `overflow-x: auto` only as a safety net).
- Header row: `--bg-raised`, labels 15px/700 `--fg-2`, sentence case (no `text-transform`), 44px tall, `scope="col"`.
- Rows: min 48px, 17px text, 12px x 12px cell padding, hairline bottom, no zebra, no vertical rules. Numeric columns (level, points, cost) right-aligned, tabular, 700. Names first, explanations ("Why") last and given the most width.
- Level-aware rows (`tr[data-now]`): current = `--bg-lit` + 4px `--lantern-edge` inset on the first cell; past = cell text `--fg-2`; next unlock gets a "Next at level 12" tag.
- Rank like "3/5" as a tag (`--r-tag`, tabular), the Wowhead "0/5" convention.

**< 640px: two-line records** (not 4-line label/value cards):
- Each `tr` becomes a grid: line 1 = level tag + primary name (19px/700) + numeric value right (e.g. "3/5"); line 2+ = the explanation column full width at 17px; any other columns as "Label: value" in 15px `--fg-2`.
- `td::before { content: attr(data-label) }` for the label/value columns; the header row is visually hidden but kept for screen readers. Because changing `display` on table parts can drop table semantics in some browsers, add `role="table|row|columnheader|cell"` explicitly on these responsive tables.
- Talent plan (audit H1) becomes ~64px per row instead of a clipped 401px table; the Forever-systems boosts table keeps its Trust column as a trust tag on line 1.
- Wider matrices that cannot reflow: scroll inside the wrapper with a sticky first column, an inset shadow on the scrollable edge, and a visible caption hint "Swipe sideways for more columns".

### 3.13 Tags and badges (static labels)

All tags: inline-flex, 28px tall (`--tag-h`), 0 8px padding, `--r-tag` (2px), `--bg-raised` background (lit row: 9% `--fg-1` mixed into `--bg-lit`), 15px/600 `--fg-2`, 16px icon, `white-space: nowrap`. Never interactive, never used for navigation.

| Tag | Content | Notes |
|---|---|---|
| Level tag | 10px ladder dot + "Lv 12–14" (700 tabular `--fg-1`) + ladder word ("on level") 600 `--fg-2` | Ladder from the step's minimum level L vs My level P: L-P >= 5 red "too hard"; 3-4 orange "hard"; -2..2 yellow "on level"; P-L 3..7 green "easy"; P-L >= 8 grey "trivial". No level set: no dot, no word. Set by `level.ts` as `data-ladder` on the `[data-lmin]` element. Colour is never alone: the word is always there. |
| Kind tag | glyph + word ("Quests", "Travel", "Dungeon", "Train", "Class quest", "Profession", "Forever system", "Shopping", "Tip", "Milestone") | neutral |
| Trust meter | three 8px pips + word: Official ●●●, Beta-tested ●●○, Community ●○○, Theory ○○○ | pips `--conf-pip-on/off`; theory: transparent background, 1.5px `--fg-2` outline, dotted pip rings, so the "don't trust yet" case is the most outlined, not the faintest (audit L3). `title` keeps the existing one-line explanation; the footer legend explains the pips. |
| Optional | "Optional" | dashed 1.5px `--line-2` outline, transparent |
| Category (bag) | "Food & drink" | neutral |
| Count | "4/12", "2 of 12" | tabular 700 |
| Rank | "3/5" | tabular 700, used in talent tables |
| Keycap | `<kbd>` "L", "Shift", "Esc" | `--r-key`, 1px `--line-2`, 2px bottom border, `--bg-surface`, 15px/700 `--font-ui`; menu paths use "Game Menu > Options > Keybindings" with CSS chevrons |

Migration: `.pill` is retired. `.pill.level` -> `.tag.lv`; `.pill.badge-*` (`Badge.astro`) -> `.tag.trust[data-conf]`; kind pill -> `.tag.kind`; count pill -> `.tag.count`; TOC/bracket jump pills -> section rail/sheet rows (3.7); filter buttons -> `.chip` (3.14). Footer legend uses the same trust tags.

### 3.14 Filter chips and search (Bag advisor, Library books, Glossary)

**Search field:** visible label above ("Search items, vendors or places"), 48px input (`--bg-sunken`, 1px `--line-2`, 6px radius), leading `i-search` (`--fg-2`), 17px text (no iOS zoom), placeholder "Try cloth, wand or crate", a 44px clear button (`i-close`, `aria-label="Clear search"`) when non-empty. Focus: border `--lantern-edge` + 3px ring. Filters on input with a 150ms debounce.

**Category select:** same 48px field with a custom chevron; native `<select>`.

**"Only my level" switch:** replaces the 13px checkbox. 44px row: a 44x28 track (`--r-node`; on = `--fg-1` track with `--bg-page` knob right; off = `--line-2` outline track, knob left) + visible label; the real `<input type="checkbox" name="mine">` is kept (visually hidden, `role="switch"`). Without a level set, the label adds "(set your level first)" and the switch is disabled.

**Verdict chips** (`role="group" aria-label="What to do with it"`):
- 44px, 6px radius, 1px `--line-2`, `--bg-surface`, 17px/700, verdict icon in the family colour (`--act-*`), count in 600 `--fg-2` tabular ("Sell 22").
- Pressed (`aria-pressed="true"`): family tint fill, 1px family border + 1px inset ring (2px total), `i-check` replaces the icon so state is not colour-only.
- Wrap, never scroll sideways (`chip-collection-reflow`); 8px gaps. At 390 the seven chips take four rows; that is accepted (they are the page's primary decision).
- Order by frequency for beginners: Keep, Sell, Buy, Auction, Bank, Use, Destroy. Chips with a count of 0 are hidden (as today).

**Status line:** `#bag-status`, 15px `--fg-2`, `aria-live="polite"`: "Showing 22 of 78 items for level 14". Empty result: an `.callout.info` "Nothing matches. Clear the search or turn off Only my level." with a "Clear filters" button.

**Sticky summary (phones):** once the filter block scrolls out of view, a 48px bar sticks under the header: "Sell, level 14: 22 items" + "Change filters" button (jumps back to the form and focuses search). Not shown on desktop.

**Contract:** `#bag-filters`, `[data-act]`, `[aria-pressed]`, `input[name=q|mine]`, `select[name=cat]`, `#bag-items`, `#bag-status`, storage key `bags-filter`.

### 3.15 Coordinate chip (the `/way` button)

Used in reference rows, vendor rows, the dock, and Library books.
- `<button class="coord" data-copy="/way Dun Morogh 28.6 66.2 Alamar Grimm">`: 44px tall (48 in the dock), min-width `--coord-min-w` (8.5rem) so "Copied" never reflows the row, 6px radius, 1px `--line-2`, `--bg-surface`, `i-pin` in `--lantern-fg` + "28.6, 66.2" 17px/700 tabular in `--fg-1`.
- `aria-label="Copy /way for Alamar Grimm (28.6, 66.2)"`.
- Copied state (1.4s): border and text `--fel`, `i-check` replaces the pin, visible text "Copied"; a shared visually hidden `aria-live="polite"` region announces "Copied /way for Alamar Grimm. Paste it into chat." Failure: blood border, "Copy failed", announcement "Copy failed. Select the text in Sources instead."
- `copy.ts` change: for `.coord`, toggle `data-state` and swap the label span inside a fixed-width box instead of replacing `textContent` of the whole button (fixes audit L2). Keep the `[data-copy]` and `.copied` contract.
- "Copy all /way" (Library books zone header): secondary button "Copy all 6 waypoints", same feedback.

### 3.16 Bag item row (Bag advisor)

Rows in one column (max 52rem), not a 3-column card grid (audit M3).

**Anatomy:**
1. **Verdict stamp:** icon 24px + word ("Sell") 17px/800 in the family colour on the family tint, 2px radius, 3px inset left edge in the family colour. Phone: first line of the row, min-width 84px so item names below line up. >= 768: a 7.5rem left column spanning the row height, 48px min.
2. **Item name:** H3 19px/700, the Wowhead item link (quality colour, underlined). Non-linked items in `--fg-1`.
3. **Tags:** level tag (ladder), category tag, trust meter.
4. **Why:** 17px body, max 62ch. This is the advice; it is never truncated.
5. **Where to buy / hand in** (vendor rows, fixed slots): grid areas `"name price" "role coord"`: vendor name 17px/700; price right in coin notation (`1 ●g 25 ●s 40 ●c`, numbers 700 tabular, coin glyphs 12px, `aria-label="1 gold 25 silver 40 copper"`); role line 15px `--fg-2` with the hub as a place label ("Innkeeper, Thelsamar"); coordinate chip right.
6. **Footer:** Sources disclosure with the report link inside (as on steps).
- Row padding 16px 0, hairline between rows. Level-aware: `data-now="current"` rows have no extra decoration (the "Only my level" filter already scopes the list); `past` rows show the level tag in grey "trivial".
- **Quick rules** block at the top (replaces the four identical cards): a 4-row list, each row a verdict stamp + one sentence ("[Sell] Grey item? Sell it to any vendor. Always."). Same component, so the rules teach the stamps.
- Contract: `article.item.act-*[data-act][data-cat][data-lmin][data-lmax][data-text]` (keep `.item`; drop `.card`).

### 3.17 Milestone timeline (guide overview)

The trail motif again, vertical:
- Each `li[data-lmin][data-lmax]`: a 48px rail with a 40px circle node containing the level number (tabular 700; ranges show the first level), then title link (19px/700) and one-line body (17px `--fg-2`).
- Line: dashed `--trail-todo` between future items, solid `--trail-done` above past items; the node of a past milestone is ink-filled with the number in `--bg-page`; the current one (`data-now="current"`) gets the lantern ring and fill and a "You are here" label (15px/800 `--lantern-fg`).
- When My level falls between two milestones, a small lantern marker "You, level 14" is inserted on the line between them (computed by `level.ts`; zero-JS fallback is simply no marker).
- No opacity dimming of past items (audit H4); past body text stays `--fg-2` (6.2-8.6:1).
- Mobile: identical, single column.

### 3.18 Glossary entries

- Page head, then a sticky (under the header) 48px search field "Find a word" (same field as 3.14), filtering live with a status line ("12 of 44 words").
- Letter index (only letters that have terms) as a wrapped row of 44px quiet buttons at >= 640; hidden on phones (search is faster).
- Entries: `<dl>`; each `div.entry[id]` has `dt` (19px/700, plus an "also: CD" variant in 15px `--fg-2`) and `dd` (17px/1.55, max 62ch). Hairline between entries, 16px padding.
- `:target` entry: `--bg-lit` + 4px `--lantern-edge` inset left edge (the same "here" language as the route).
- Inline uses elsewhere: `.term` stays a dotted underline link to `/glossary/#slug` (no `cursor: help`; a tap navigates). New terms: "Ding", "Lv".
- Empty search: "No word matches “xyz”. Try a shorter word." plus a link "Ask for it to be added" (report URL).

### 3.19 Buttons

| Variant | Look | Use |
|---|---|---|
| Primary | `--lantern` fill, `--fg-on-lantern` text (10.3:1), no border | one per view: "Go to next step", "Set my level" |
| Secondary | `--bg-surface` fill, 1px `--line-2`, `--fg-1` | everything else |
| Quiet | transparent, `--fg-2` 600, underline on hover | low-emphasis toggles ("Hide done"), "Details" |
| Danger | 1.5px `--blood` outline, `--blood` text; confirm dialogs use a `--blood` fill with white-ish `--bg-page` text | "Untick everything" |
| Icon | 44x44, secondary or quiet style, `aria-label` required | Menu (with label at >= 768), Sections, clear |
| Toggle | any variant + `aria-pressed`; pressed = `--bg-raised` fill + 2px inset `--fg-1` ring + check icon | Hide done |
| Segmented | joined 44px segments, 1px `--line-2` dividers; pressed = `--fg-1` fill, `--bg-page` text (13.5-14:1) | Full / Compact, theme radio group |

Sizes: 48px tall on phones for primary, 44px elsewhere; 17px/700 labels (quiet 600); 16px horizontal padding; icon 20px + 8px gap. States: hover = one tonal step (`--bg-raised` for secondary, `color-mix(in srgb, var(--lantern) 88%, #000)` for primary); active = a further step within 80ms; focus-visible = 3px `--focus` ring offset 2px; disabled = 45% opacity + `aria-disabled="true"` + `cursor: not-allowed`, still focusable when it needs to explain why. Labels are verbs, no trailing "→".

### 3.20 Inputs

- Text, search, number, select: 48px phone / 44px desktop, 17px text, `--bg-sunken`, 1px `--line-2` (3.3-4.6:1), 6px radius, 12px horizontal padding. Visible label above (15px/700 `--fg-2`); helper text below (15px `--fg-2`, linked by `aria-describedby`); error: 1.5px `--blood` border, message below with `c-warn` icon in `--blood`, `aria-invalid="true"`, validated on blur.
- Focus: border `--lantern-edge` + 3px ring of `--focus` at 45% mix (focus-within on composite fields).
- Checkbox (non-route, e.g. Library books rows): same node component as the route (books are a checklist, so they get the trail rail too, with a book glyph); the generic checkbox elsewhere is a 24px box inside a 44px label row, 2px `--line-2` edge, checked = `--fg-1` fill with a `--bg-page` check.
- Switch: see 3.14.
- Textarea (backup code): `--font-ui` 15px, `--bg-sunken`, min 4 lines, `spellcheck=false`.

### 3.21 Footer

- `--bg-raised`, top hairline, 32px padding, 15px text (14px only for the legal line). On the route page add the dock height to its bottom padding.
- >= 768 two columns:
  1. **How much to trust a fact:** the four trust tags, each with one line ("Official: from Blizzard or in-game data", "Beta-tested: seen in the beta by several players", "Community: one guide or player, not cross-checked yet", "Theory: not testable yet, the beta stopped at level 30").
  2. **About Waypoint:** "A fan-made guide built from beta data (17 Sept to 22 Oct 2026). Data last updated 29 Oct 2026.", "Report a problem" link, then the legal line: "Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft and Warcraft are trademarks of Blizzard Entertainment, Inc. Item tooltips by Wowhead."
- No logos of Blizzard or Wowhead; text credit only.

---

## 4. Wireframes

### 4.1 Route page, 390px (Night shown; Day identical in structure)

```
┌────────────────────────────────────────────┐
│ ⋰● Waypoint           ┌Lv│ 14 │⇑┐  [≡]     │ 56 header, opaque, sticky
├────────────────────────────────────────────┤
│ Gnome Warlock > Route                      │ breadcrumb 15
│ Leveling route                             │ H1 Alegreya 34
│ Hub by hub, with the quests that matter.   │ lede 19
│ Tap the circle when a step is done.        │
│ ▢ Updated 29 Oct 2026                      │ facts 15
│ ⚗ Levels 1–30 played in the beta           │
│ ◎ Overview  ⋰ Route  ✣ Talents & demons ░  │ sub-nav 48, scrolls, fade
│             ═══════                        │
│ 19 of 65 steps done      Now: Loch Modan   │ trail meter label
│ ▬▬▬ ▬▬▬▬▬ ▭▭▭▭▭▭ ▭▭▭▭ ▭▭▭ ▭▭▭▭▭▭▭▭        │ segmented, My-level segment ringed
│ [◎ Go to next step]  [ Full | Compact ]    │ 48 / 44
│ [Jump to my level] (Hide done) [More ▾]    │
│                                            │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │ 2px ink rule
│ ╭─────╮ Loch Modan, Hall of     2 of 12    │ mile marker + H2 28
│ │ Lv  │ Thanes & Redridge                  │
│ │12–20│ Zones: Loch Modan, Dun Morogh,     │
│ ╰──┬──╯ Ironforge, Westfall, Redridge      │
│ Quest out of Thelsamar, run Hall of        │ summary 17
│ Thanes once with all five quests ...       │
│ [▸ Talents and new spells at 12–20     ]   │ 48 disclosure
│    ┆                                       │
│   (✓) Into Loch Modan: Thelsamar           │ done: ink node, folded
│    │  [● Lv 11–12 easy]                    │
│ ───┼────────────────────────────────────── │
│   (✓) Train in Thelsamar at level 12       │
│    │  [● Lv 12 easy]                       │
│ ▌──┼────────────────────────────────────── │
│ ▌ (!) ◎ You are here                       │ lit row + 4px lantern edge
│ ▌  ┆  Pick up every quest in Thelsamar     │ H3 19
│ ▌  ┆  [● Lv 12–14 on level] [! Quests]     │ tags 28
│ ▌  ┆  [●●○ Beta-tested]                    │
│ ▌  ┆  ⌖ Loch Modan, Thelsamar              │ place label
│ ▌  ┆  Thelsamar is the town in the middle  │ body 17
│ ▌  ┆  of the loch. Take everything ...     │
│ ▌  ┆  Quests to pick up                    │ label 15
│ ▌  ┆  ───────────────────────────────────  │
│ ▌  ┆  ! Rat Catching                       │ reference row
│ ▌  ┆    From Mountaineer    [⌖ 37.2, 46.1] │ coord chip 44
│ ▌  ┆    Kadrell                            │
│ ▌  ┆  People                               │
│ ▌  ┆  ☺ Vidra Hearthstove                  │
│ ▌  ┆    Innkeeper. Set your [⌖ 35.5, 48.4] │
│ ▌  ┆  [▤ Sources (3)]       [✓ Mark done]  │
│ ───┼────────────────────────────────────── │
│   (⛫) Run Hall of Thanes once, with all    │ dungeon glyph node
│    ┆  five quests                          │
│    ┆  [● Lv 15–18 hard] [⛫ Dungeon]        │
│    ┆  [○○○ Theory]                         │ outlined theory tag
│    ┆  ⌖ Ironforge, Hall of Thanes          │
│  ╭[⚠ Careful]─────────────────────────╮    │ callout with label tab
│  │ Don't delete the letter until the   │   │
│  │ quest is done.                      │   │
│  ╰─────────────────────────────────────╯   │
│                    ...                     │
├────────────────────────────────────────────┤
│▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░░░░░░░░░░░░░░░░░░░░│ 4px meter strip
│ Next step               [⌖ 37.2, 46.1] [☰]│ dock 72, fixed, thumb zone
│ Pick up every quest i…                     │
└────────────────────────────────────────────┘
```

Compact view at 390 (glance mode), same page:

```
│   (✓) Into Loch Modan: Thelsamar   [Lv 11–12]  │
│ ▌ (!) ◎ You are here                           │
│ ▌  ┆  Pick up every quest in Thelsamar         │
│ ▌  ┆  [● Lv 12–14 on level]   [⌖ 37.2, 46.1]   │
│ ▌  ┆                              (Details ▾)  │
│   (⛫) Run Hall of Thanes once ...  [Lv 15–18]  │
```

### 4.2 Route page, 1280px

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ⋰● Waypoint   Start here  Gnome Warlock  Bag advisor  Library books  Forever systems  Glossary   ┌My level│14│⇑┐ [◐ Auto] │ 64
│                           ═════════════                                                                       │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  Gnome Warlock > Route                                                                                         │
│  Leveling route                                                       (H1 Alegreya 44)                         │
│  Hub by hub, with the quests that matter. Tap the circle when a step is done.                                   │
│  ▢ Updated 29 Oct 2026    ⚗ Levels 1–30 played in the beta                                                     │
│  ◎ Overview   ⋰ Route   ✣ Talents & demons   ⚒ Professions                                                    │
│               ═══════                                                                                          │
│ ┌─ sticky rail 16rem ──────┐     ┌─ content 46rem (max) ──────────────────────────────────────────────┐       │
│ │ 19 of 65 done            │     │ 19 of 65 steps done                              Now: Loch Modan   │       │
│ │ ▬▬ ▬▬▬ ▭▭▭▭ ▭▭▭ ▭▭ ▭▭▭▭▭ │     │ ▬▬▬▬ ▬▬▬▬▬▬▬ ▭▭▭▭▭▭▭▭ ▭▭▭▭▭▭ ▭▭▭▭▭ ▭▭▭▭▭▭▭▭▭▭▭▭                      │       │
│ │ [◎ Go to next step     ] │     │ [◎ Go to next step] [Jump to my level] [Full|Compact] (Hide done) [More▾]│
│ │ Sections                 │     │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │       │
│ │ Lv 1–6   Coldridge    ✓  │     │ ╭─────╮ Loch Modan, Hall of Thanes & Redridge            2 of 12   │       │
│ │ Lv 6–12  Kharanos     ✓  │     │ │12–20│ Zones: Loch Modan, Dun Morogh, Ironforge, Westfall, ...    │       │
│ │▌Lv 12–20 Loch Modan 2/12 │     │ ╰──┬──╯                                                           │       │
│ │ Lv 20–25 Wetlands   0/9  │     │ Quest out of Thelsamar, run Hall of Thanes once ...                │       │
│ │ Lv 25–30 Excavation 0/8  │     │    │                                                               │       │
│ │ Lv 30–35 Stranglet. 0/3  │     │   (✓) Into Loch Modan: Thelsamar                                   │       │
│ │ ...                      │     │ ▌ (!) ◎ You are here                                               │       │
│ │ Lv 55–60 Hyjal      0/3  │     │ ▌  ┆  Pick up every quest in Thelsamar                             │       │
│ └──────────────────────────┘     │ ▌  ┆  [● Lv 12–14 on level] [! Quests] [●●○ Beta-tested]           │       │
│                                  │ ▌  ┆  ⌖ Loch Modan, Thelsamar                                      │       │
│                                  │ ▌  ┆  Body text at 62ch ...                                        │       │
│                                  │ ▌  ┆  Quests to pick up                                            │       │
│                                  │ ▌  ┆  ! Rat Catching                               [⌖ 37.2, 46.1]  │       │
│                                  │ ▌  ┆    From Mountaineer Kadrell                                   │       │
│                                  │ ▌  ┆  ☺ Vidra Hearthstove                          [⌖ 35.5, 48.4]  │       │
│                                  │ ▌  ┆    Innkeeper. Set your hearthstone here                       │       │
│                                  │ ▌  ┆  [▤ Sources (3)]                                [✓ Mark done] │       │
│                                  │   (⛫) Run Hall of Thanes once, with all five quests                │       │
│                                  └────────────────────────────────────────────────────────────────────┘       │
│  (no dock at >= 1024; the rail is sticky and carries progress, next step and sections)                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Grid at >= 1024: `16rem | minmax(0, 46rem)`, 40px gap, whole grid max 66rem, left aligned within the 80rem page.

### 4.3 Bag advisor, 390px

```
┌────────────────────────────────────────────┐
│ ⋰● Waypoint           ┌Lv│ 14 │⇑┐  [≡]     │ 56
├────────────────────────────────────────────┤
│ Bag advisor                                │ H1 34
│ Bags fill up fast. Here's what to keep,    │ lede 19
│ sell, bank or buy at your level.           │
│ Quick rules                                │ label 15
│ [⛀ Sell]  Grey item? Sell it to any        │ rule rows reuse stamps
│           vendor. Always.                  │
│ [⌂ Keep]  Quest letter or odd object?      │
│           Keep it until the quest is done. │
│ [⌂ Keep]  Cloth? Tailoring eats it.        │
│ [⛀ Sell]  Mail or plate? You can't wear it.│
│ ────────────────────────────────────────── │
│ Search items, vendors or places            │ label
│ ┌──────────────────────────────────────┐   │ 48 input
│ │ ⌕  Try cloth, wand or crate          │   │
│ └──────────────────────────────────────┘   │
│ Category                                   │
│ ┌──────────────────────┐  (●━) Only my     │ select 48 + switch 44
│ │ All categories     ▾ │       level       │
│ └──────────────────────┘                   │
│ [⌂ Keep 14] [⛀ Sell 22✓] [∪ Buy 17]        │ chips 44, wrap
│ [⚒ Auction 6] [⌂ Bank 7] [⚗ Use 9]         │ pressed = tint + check
│ [⌫ Destroy 3]                              │
│ Showing 22 of 78 items for level 14        │ live status 15
│ ────────────────────────────────────────── │
│ ┃⛀ Sell┃                                   │ verdict stamp 17/800
│ Broken Tooth                               │ H3 19, q0 link, underlined
│ [● Any level] [Junk] [●●● Official]        │ tags
│ Grey items are vendor trash. Sell them     │ why 17
│ to any merchant.                           │
│ [▤ Sources (1)]                            │
│ ────────────────────────────────────────── │
│ ┃∪ Buy┃                                    │
│ Refreshing Spring Water                    │ q1 link
│ [● Lv 5–15 on level] [Food & drink]        │
│ [●●● Official]                             │
│ Drink between fights to get mana back.     │
│ Carry a stack of 20.                       │
│ ────────────────────────────────────────── │
│ Vidra Hearthstove                  25 ●c   │ vendor row: name / price
│ Innkeeper, Thelsamar      [⌖ 35.5, 48.4]   │ role / coord chip
│ [▤ Sources (2)]                            │
│ ────────────────────────────────────────── │
│ ┃⌫ Destroy┃                                │ blood family
│ Tattered Map Fragment                      │
│ ...                                        │
└────────────────────────────────────────────┘
 (after the filters scroll away, a 48px bar sticks under the header:
  "Sell, level 14: 22 items   [Change filters]")
```

(Glyphs in the wireframes stand in for the hand-drawn icons of 3.1; no emoji are used in the product.)

---

## 5. Voice and copy rules

The current copy is the site's strongest asset (audit): keep its plain, friendly voice line for line where possible and apply these rules to everything new.

1. **Sentence case everywhere**: titles, buttons, labels, table headers, tabs, callout labels. No ALL CAPS, no tracked caps, no Title Case Headlines ("Leveling route", not "Leveling Route").
2. **Step titles start with a verb** in the imperative: "Pick up every quest in Thelsamar", "Train at level 12", "Take the boat to Auberdine". Milestones may be a noun phrase ("Your Voidwalker").
3. **Buttons say what happens**, verb first, and keep the same name through the flow: "Go to next step", "Copy /way" (chip text is the coordinates; its accessible name is "Copy /way for …"), "Hide done steps", "Untick everything" -> confirm "Untick all 65 steps?" -> buttons "Untick all" / "Keep my progress" -> status "Unticked 65 steps". "Copied" confirms "Copy".
4. **Labels are plain nouns**, no colon unless inline ("Zones: Loch Modan, Dun Morogh"). List headings say what the list is for: "Quests to pick up", "People", "Items", "Where to buy".
5. **Numbers:** numerals always. Levels "Lv 12" and ranges "Lv 12–20" (en dash, no spaces). Coordinates "47.2, 53.6" (one decimal, comma + space). Progress "19 of 65 steps done"; compact counts "2/12". Money "1g 25s 40c" in text, coin glyphs in UI. Dates "29 Oct 2026"; launch times always with time and zone ("4 Nov 2026, 3:00 p.m. PST").
6. **Joining things:** commas and "and", or separate lines. Never middle-dot strings ("A · B · C"), never "WORD — fragment" labels, never a "→" appended to links or buttons.
7. **Game words:** the first time a page uses jargon, link it to the glossary (`.term`); keep game names exactly as in game (Hearthstone, Soul Shard, Waylaid Crate). Keys as keycaps ("Press L"), menu paths as "Game Menu > Options > Keybindings".
8. **Confidence in words:** "Official", "Beta-tested", "Community", "Theory"; uncertainty is said plainly ("Nobody has played this yet. The beta stopped at level 30.").
9. **Callout labels** are fixed: "Tip", "Good to know", "Untested", "Careful", "Danger". The body says what to do, then why.
10. **Errors and empty states** say what happened and what to do, in the interface's voice, no apologies: "That code doesn't look right for this checklist. Make a new code on your other device and paste it here."
11. **"You" and "your"** for the player ("your level", "your bags"); never "the user".
12. US spelling as in the existing copy (color, leveling), but "Untick" stays (it is already the product's verb).

---

## 6. What NOT to do

### 6.1 Fan-site and brand-impersonation guardrails

- No Blizzard or Wowhead logos, wordmarks, emblems or lockups: no Blizzard cloud logo, no World of Warcraft logo, no Forever medallion, no circled gold "W", no Wowhead rocket-fish, no "World of Warcraft: Forever" set as a logo. Plain-text mentions plus the footer disclaimer only.
- No licensed or proprietary fonts: no Friz Quadrata, Semplicita Pro, Blizzard's display face, brother-1816, and no "Friz-like" flared glyphic display face chosen to mimic the in-game UI. Google Fonts (Alegreya, Atkinson Hyperlegible Next) and system fallbacks only.
- No in-game UI chrome: no quest-log parchment frames, bevelled gold borders, action-bar slots, unit frames, tooltip borders copied from the game, map art or minimap rings. Our tooltip-like "facts" rows are flat rows in our tokens.
- No Blizzard web chrome: no ornate corner-flourish frames, scrollwork or gold-fade divider rules, torn-parchment section edges, pennant/banner roadmap graphics, dark-glass nav pill with a logo cell, teal "Subscribe"-style buttons.
- No game art: no key art, screenshots, class or race renders, class/faction crests, spell or item icons we host ourselves. The only game icons on the page are the ones Wowhead's own `tooltips.js` inserts into its links.
- Quest markers, coins and every other glyph are our own simple flat SVG drawings (3.1), never traced from game assets.
- No imitation of Wowhead's page chrome (game-switcher strip, illustrated nav tiles, their medallions). Reuse conventions (gold-ish links, verb-first steps, quality colours, Quick-Facts rows), not their look.
- Never present Waypoint as official: no "official guide" wording, no Blizzard-like news styling, a visible "fan-made" line in the footer.

### 6.2 Generated-design tells (from frontend-design) to avoid

- Warm cream page (`#f4f1ea`-like) with a high-contrast serif display. (Day theme is cool `#eef1f0`; Alegreya is moderate-contrast and only for places and H1.)
- Near-black with a single bright accent; tinted `#0b0b0b` / `#111` standing in for black. (Night is a lifted slate with a hue vocabulary.)
- Terracotta / clay accent near `#d97757`.
- SaaS card kit: identical rounded cards, one radius for everything, the same soft grey shadow under each, gradient washes, hover lift on cards. (Rows, radius by role, shadows only on overlays.)
- Tracked ALL-CAPS eyebrows above headings, caps labels, caps table headers.
- Middle-dot meta strings, "WORD — fragment" labels, "→" appended to links and buttons.
- Monospace for small data labels or coordinates. (Tabular figures in the UI face.)
- Accenting one word of a headline in a different colour, weight or italic.
- Numbered markers on things that are not sequences (route steps are a sequence and are not numbered either; the trail already shows order).
- Fade-and-slide-up on every section, hover transitions on every row, ambient glow, translucent blurred headers.
- A big-number hero with a gradient accent.

### 6.3 Usability anti-patterns (second-screen lens)

- Any interactive target under 44px (24px is the absolute WCAG floor; do not design to it). No full-height checkbox labels that tick on scroll.
- Body text under 16px on phones; any text under 14px.
- Colour as the only signal: every hue-coded state also has a word, glyph or shape (ladder word, trust pips, verdict word and icon, check icon on pressed chips, underline on every link).
- Opacity to show "done" or "past" (fails contrast); strikethrough on step titles.
- Persistent UI at the top that grows (stacked sticky bars); keep the header at 56/64px and put route controls in the bottom dock.
- Hover-only affordances (tooltips explaining badges, hover-revealed buttons). Everything must work by tap and keyboard.
- Horizontal page scroll at 360px; tables without a phone shape.
- Reflowing controls (button text that changes width); content that jumps when Wowhead icons arrive.
- Re-using a semantic hue for a different meaning (2.3), and using a quality colour (q0-q5) for anything except item/spell/quest link text.
- Pure white text or pure black backgrounds; glow effects at night.

---

## 7. Implementation notes (for the build node)

**Files and the change in each:**

| File | Change |
|---|---|
| `src/styles/global.css` | Replace tokens with 2.2-2.4 (+ aliases); base type (`body` 17px/1.55 `--font-ui`; `h1`/`h2` `--font-place`); `:focus-visible` 3px; `.tag`, `.chip`, `.btn` variants, `.callout` variants, `.table-wrap` + responsive table, `.coord`, quality overrides; one spacing owner for `main` (`main.wrap { padding-block: 0 var(--sp-16) }`) to fix the footer collision (audit H6); delete `.pill`, `.card` shadow, `.eyebrow`, `.toc` chips, `--font-mono` |
| `src/layouts/Base.astro` | Fonts link (2.1); header per 3.2 (opaque, no blur); `Icons.astro` sprite; level widget with Ding button; theme button with visible state; Menu `<dialog>`; footer per 3.21; `copy-status` live region |
| `src/lib/site.ts` | `nav` items get `group` (`top`, `guide`, `tools`, `learn`); top nav renders `top` only |
| `src/components/PageHead.astro` | Remove `eyebrow`; add `crumbs`, `facts` |
| `src/components/GuideNav.astro` | Icons, short phone labels, scroll-snap, fade |
| `src/components/StepCard.astro` | Trail row (3.8): node label `.check` + ring + glyph, tags, place label, reference rows, Sources with report inside, "Mark done" label, "Details" toggle |
| `src/components/RefItem.astro` | Split into a block "reference row" (grid areas) and keep an inline variant for prose (bracket extras, talents) |
| `src/components/Badge.astro` | Trust meter tag (pips + word, theory outline) |
| `src/components/Sources.astro` | 44px summary with icon; optional `report` slot/prop |
| `src/components/ChecklistBar.astro` | Trail meter (single `[data-progress-bar]` fill over a build-time segmented track), toolbar actions, More menu with backup/reset |
| new `src/components/RouteDock.astro`, `SectionRail.astro`, `Icons.astro`, `Callout.astro`, `CoordChip.astro` | as specified |
| `src/pages/guides/[guide]/route.astro` | Bracket header (3.10), remove `.bracket-nav`, rail + dock, route grid at >= 1024 |
| `src/pages/bags.astro` | Quick rules rows, filter block (3.14), bag rows (3.16), sticky summary |
| `src/pages/guides/[guide]/index.astro` | Milestone timeline on the trail (3.17); racial abilities as rows, not a 3-up grid with orphans |
| `src/pages/glossary.astro`, `start/index.astro`, `systems.astro`, `talents.astro`, `professions.astro`, `library-books.astro` | Tables (3.12), callouts (3.11), on-page nav (3.7), keycaps; books use the trail rail with a book glyph |
| `src/scripts/level.ts` | Also set `data-ladder` (2.4 rule) on `[data-lmin]` elements; Ding (+1) button; milestone "You" marker; announce level |
| `src/scripts/progress.ts` | Set `data-next` + `aria-current="step"` on the first unticked step; update dock (`[data-next-title]`, `[data-next-coord]`); `view-compact` toggle persisted as `view:<scope>`; details toggles; respect `prefers-reduced-motion` for `scrollIntoView` (`behavior: 'auto'` when reduced) |
| `src/scripts/copy.ts` | Coord chip state swap without reflow + shared live region; keep `[data-copy]`/`.copied` |
| `src/scripts/theme.ts` | Dynamic `aria-label` + visible state, `setTheme()` export for the menu radio group |
| new `src/scripts/menu.ts`, `scrollspy.ts` | `<dialog>` open/close; rail/sheet `aria-current` |

**Behaviour contracts preserved** (from the audit, 6.4): `#my-level` + `change` + `waypoint:level`; `[data-lmin][data-lmax]` -> `data-now`; `input[data-step]` + `.step.done`; `[data-group]`, `[data-group-count]`, `.complete`; `[data-progress-bar]`, `[data-progress-text]`; `[data-action="resume|my-level|hide-done|backup|restore|reset"]`; `[data-backup-code]`, `[data-backup-status]`; `html.hide-done`; `.flash`; `[data-copy]` + `.copied`; `#theme-btn` + `html[data-theme]`; `#bag-filters`, `[data-act]`, `[data-cat]`, `[data-text]`, `#bag-items`, `#bag-status`; `a.q0`-`a.q5`, `whTooltips` flags; storage keys under `waypoint:v1:`. Only additions: `data-next`, `data-ladder`, `view:<scope>`, `[data-action="view|details|level-up|mark-before-level"]`.

**Verification before calling it done:** run `scripts/dirB-contrast-final.py` against the shipped values; screenshot every page at 360, 390 and 1280 in both themes with and without `tooltips.js` loaded (icons arrive late or never); measure that every `button, a.btn, label.check, summary, .chip, .coord, input` on phones is >= 44px tall; confirm `scrollWidth == clientWidth` at 360; tab through the route with the keyboard and confirm the dock never hides the focused element; toggle `prefers-reduced-motion`; test the light-theme quality overrides against the real `tooltips.js` (open question from research: specificity race with its inline colours); `npx astro build` and `node scripts/validate-data.mjs` pass.
