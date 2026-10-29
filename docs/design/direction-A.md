# Direction A: Ley Line Atlas

Design lead: direction A. Lens: identity and immersion first.
Inputs read in full: `BRIEF.md`, `research-wowhead-blizzard.md`, `research-guide-wikis.md`, `research-audit.md`, the current code in `/home/user/BeautyBoys/src`, and the reference skills (frontend-design; UI/UX Pro Max `SKILL.md`, `quick-reference.md`, `pro-rules.md`, CSV data; the design-system skill). No skill scripts were run, nothing was installed, committed, pushed or deployed.

Prototype (reference only, not repo code) and screenshots used to critique this spec:
- `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/proto-A/tokens.css`, `.../proto-A/route.html`, `.../proto-A/bags.html`
- Screens: `.../shots/dirA/route2-390-dark.png`, `route2-390-light.png`, `route-1280-dark-top.png`, `route-1280-light-top.png`, `bags-390-dark.png`, `bags-390-light.png`, `type-specimen.png`
- Scripts: `.../scripts/dirA-type.js` (type specimen and tabular-figure test), `dirA-contrast.js`, `dirA-final-contrast.js` (WCAG), `dirA-shoot.js` (screenshots).

---

## 1. Concept

**Name: Ley Line Atlas.**

Waypoint is the pocket atlas a gnome warlock carries from Coldridge Valley to Mount Hyjal. Every page is set in two materials that swap places between themes: **night** (deep tooltip-navy) and **vellum** (map paper), written in **ink** and gold-link conventions players already read in WoW and on Wowhead. Through it runs a single inked route, the **ley line**. Behind you it is solid ink, ahead of you it is dashed, and where you stand it burns with fel fire.

**Signature element: the ley line.** It is a continuous 3px route line down the left edge of the Route page. Every step hangs off it as a round **waymark**, and that waymark is the checkbox. Every level bracket is a diamond **waystone** on the line. The line shows three states from real data:
- **Travelled** (solid ink): ticked steps and levels below yours.
- **Lit** (fel, with a glow in dark mode): your current level's stretch, plus the **Next step** marker.
- **Ahead** (dashed): everything later.

The same line, drawn smaller, is the progress meter, the journey rail (TOC), the milestone timeline and the home-page hero (the whole road with your position lit). This element gets the boldness and nothing else does. Every other surface is flat, quiet and dense.

Why this and not ornament: the most characteristic thing in a leveling companion's world is the **road**, meaning the route, the waymarks and "where am I". The line is information (sequence, progress, your position), not decoration. It also replaces three weak current devices with one strong one: the faint 2px `data-now` halo, the non-sticky gradient progress bar and the pill bracket nav.

---

## 2. Process: two passes (frontend-design)

### 2.1 Pass 1: draft plan (as first written)

- **Name:** "Fel-lit Atlas".
- **Colour:** night navy `#0f1424` ground with **fel lime `#a6dc5c` as the UI accent** for links, primary buttons, active nav and progress. Light theme on cream parchment `#f4ecdc` with deep fel.
- **Type:** Texturina for every heading including step titles. Atkinson Hyperlegible Next for body.
- **Layout:** route steps as separate 8px-rounded cards along a ley line. A level range label above each bracket H2. Quest-difficulty "con" colours (red/orange/yellow/green/grey) on every step relative to My level. Static fact cards on navy "tooltip" surfaces in both themes. A slow glow pulse on the you-are-here node.
- **Semantics:** keep the current confidence hues (blue/green/gold/grey). Bag verdicts colour-coded, with *Use* in fel.
- **Principles:** "feel like the game": glow, tooltips, con colours.

### 2.2 Pass 2: review against the brief and the "generated design tells"

I asked whether a similar prompt ("dark gaming companion, warlock") would give the same plan. For most of it the answer was yes, so I revised the following.

| # | Draft choice | Problem found | Revision |
|---|---|---|---|
| 1 | Navy-black ground + fel lime as *the* UI accent | Tell #2 (near-black + one acid accent) and tell #5 (tinted near-black standing in for black). It is the default "gaming dark". | Fel is demoted from UI accent to **light source**. It appears only on the lit ley line, the Next-step marker, the Tip label and success feedback, at most 2–3 places per screen. The UI's own accents are **ink-filled primary buttons** and **gold links** (WoW/Wowhead's link convention). The navy is now justified by function: it is the in-game tooltip family (`#050a1e`), so Wowhead quality colours render as designed. |
| 2 | Cream parchment `#f4ecdc` + Texturina headings everywhere | Tell #1 (cream near `#F4F1EA` + serif display). | The light ground moves to an **ochre map vellum `#e9dfc6`** (clearly yellower and darker than cream), with lighter `#f5efe1` sheets for reading. Text is **night-navy ink**, not warm near-black. No terracotta. Texturina is limited to H1, H2, waystone titles and the wordmark, and it is a low-contrast textura-derived face, not a Didone. |
| 3 | Level range label above every bracket H2 | Tell #5 (label above heading). | The level range becomes an inline **level tag** at the start of the H2 line (`Lv 12–20 Loch Modan…`). The breadcrumb above H1 stays because it is navigation (a real link), in sentence case. |
| 4 | One rounded card per step | Tell #4 (SaaS card kit; audit M3). | Steps in a bracket share **one sheet** with hairline dividers. Radii follow a hierarchy (section 3.5). Shadows only on overlays. |
| 5 | Keep confidence hues | Audit M4: green meant both "beta-tested" and "buy". | Confidence becomes **monochrome ordinal pips** (●●● / ●●○ / ●○○ / ○○○) plus the word. Only *Theory* adds the warn colour and a dashed edge. No hue means two things. |
| 6 | Con colours on every step | Five extra hues fighting quality colours and verdicts on the same rows. | Con colours exist as tokens only for teaching contexts (Start page monster colours, talent/quest level gates). The route uses the ley line states instead. |
| 7 | Navy tooltip cards inside the light theme | A second bold element, and visually heavy at 78 bag rows. | Rejected. Tooltip anatomy (name in quality colour, facts, gold secondary line) is kept, on theme surfaces. |
| 8 | Glow pulse on the here-node | Non-user-triggered motion. | Removed. The one orchestrated moment is the **ignite** when you tick a step (section 3.7). |
| 9 | Step titles in Texturina | Textura rhythm at 19px bold on a phone at arm's length is less legible. | Step titles use Atkinson Hyperlegible Next 700 / 19px. |
| 10 | *Use* verdict in fel | Gives fel a second meaning. | *Use* is **rose** ("potion"). Fel keeps one meaning: **your next good move** (next step, tip, success). |
| 11 | Coordinates shown as text next to a separate "/way" button | Audit H3/L2: 19px button, mono label, reflow on "Copied". | **The coordinates are the button**: crosshair + `28.6, 66.1` + copy glyph, 44px tall, tabular Atkinson figures, no monospace. Feedback swaps only the glyph and announces through one toast. |
| 12 | Meta strings "Dun Morogh · Anvilmar" | Tell #5 (middle-dot meta). | Facts are separate items, each with its own glyph or label ("Anvilmar, Dun Morogh" with a pin glyph; "Updated 29 Oct 2026" as a label/value pair). |
| 13 | Nine-item top nav | Audit H7 (overflows, cut to "Gloss"). | Six top-level items. Route, Talents and Professions live in the guide sub-nav. Below 900px the nav sits in a Menu panel. |

### 2.3 Prototype critique (screenshots) and what changed

| Seen in the screenshot | Change |
|---|---|
| Header scrolls sideways: 397px of content in a 390px viewport (`route-390-*.png`) | 8px header gaps, 20px wordmark. Below 400px the Menu button is icon-only (with aria-label) and the "Lv" text is visually hidden. Measured 360/360 afterwards. |
| Level field showed "1⁴" (two digits clipped) | Fixed 32px input width. |
| Ref rows on a phone squeezed "Bring 3 Feather Charms…" into a 90px column | Fixed slots on phones: name / detail / action, each on its own line. Three columns from 600px. |
| Fel on stone + bracket tag + node + "Next step" tag + bar dot competed | The bracket level tag is neutral. Fel stays on the stone, the lit line, the next node and the "Next step" tag. |
| Done steps inside the current bracket drew the line in fel | Order of precedence: travelled (done/past) wins over lit. |
| Dashed "ahead" line measured 2.4:1 (light) / 2.9:1 (dark) | The ahead line uses `--edge` (3.4:1 / 4.0:1). |
| Trust seal 32px tall | 32px visual with a 44px hit area. |
| Pressed filter chip looked like an unpressed one in light mode | Pressed means a solid verdict fill with on-colour text and a check glyph. |

---

## 3. Tokens

All values are final for this direction. Contrast is computed (WCAG 2.x relative luminance) in section 3.9.

### 3.1 Named base palette (primitives)

| Name | Hex | Role |
|---|---|---|
| Night | `#0f1424` | dark ground; light-theme ink is its sibling `#1c2337` |
| Night sheet | `#161c30` | dark reading surface |
| Vellum | `#e9dfc6` | light ground (map paper, ochre, not cream) |
| Vellum sheet | `#f5efe1` | light reading surface |
| Parchment ink | `#ece4cf` | dark-theme text |
| Night ink | `#1c2337` | light-theme text |
| Gold (link) | `#e9c46a` / `#7a5200` | links, quest "!", money, auction |
| Fel | `#a6dc5c` / `#346610` (line `#3f7a14`) | the signature light only |
| Warlock periwinkle | `#a5a3ff` / `#4b45b5` | guide/class accent, never item names |

### 3.2 Semantic and component tokens (drop-in for `src/styles/global.css`)

Keep the existing three-path theme mechanism (`:root` = light, system dark via `@media (prefers-color-scheme: dark) :root:not([data-theme='light'])`, manual `:root[data-theme='dark']`). The dark block appears twice with identical values, and the comment marks it "keep in sync". `light-dark()` would remove the duplicate, but older iOS Safari (before 17.5) does not support it, so it is not used.

```css
/* ============================================================
   Waypoint tokens, Direction A "Ley Line Atlas"
   Light = day atlas (vellum + night ink). Dark = night atlas (night + parchment ink).
   ============================================================ */
:root {
  /* Surfaces */
  --ground: #e9dfc6;          /* page */
  --sheet: #f5efe1;           /* reading surfaces: route legs, ledger, tables, header */
  --raised: #fbf8f0;          /* inputs, secondary buttons, trust seals */
  --sunken: #e2d6b9;          /* kbd keycaps, inline code */
  --hover: #efe6d2;           /* hover layer */
  --pressed: #e4d8bd;         /* pressed layer */
  --scrim: rgb(28 35 55 / 45%);

  /* Lines */
  --rule: #d2c5a5;            /* decorative separators (no contrast duty) */
  --edge: #80755d;            /* control boundaries, meaningful lines: >= 3:1 */

  /* Text */
  --ink: #1c2337;
  --ink-2: #363d54;           /* secondary text, done titles */
  --ink-3: #55596a;           /* muted text (floor: 5.2:1 on ground) */
  --on-ink: #f5efe1;          /* text on ink-filled primary buttons */

  /* Links and focus */
  --link: #7a5200;
  --link-hover: #5c3d00;
  --focus: #1c2337;

  /* Fel: the signature light. Use ONLY for: lit ley line, next-step marker, tip label, success. */
  --fel: #346610;             /* text and fills */
  --fel-line: #3f7a14;        /* the lit line and here-node ring */
  --fel-glow: transparent;    /* light theme: ink on paper, no glow */
  --on-fel: #f5efe1;

  /* Guide accent (per guide; Warlock now). Never used for item names or site chrome. */
  --class: #4b45b5;

  /* Semantic */
  --info: #155f78;
  --warn: #984000;
  --danger: #b02a1e;
  --success: var(--fel);
  --on-color: #f5efe1;        /* text on any solid semantic/verdict fill */
  --tint: 12%;                /* tinted tile = color-mix(in srgb, X var(--tint), var(--sheet)) */

  /* Ley line */
  --ley-travelled: var(--ink-2);
  --ley-ahead: var(--edge);
  --ley-lit: var(--fel-line);

  /* Confidence: ordinal pips, monochrome; only theory gets a colour */
  --conf-fg: var(--ink);
  --conf-pip: var(--ink-2);
  --conf-border: var(--rule);
  --conf-bg: var(--raised);
  --conf-theory: var(--warn);

  /* Bag verdicts (icon + word always; colour third) */
  --v-keep: #2a4c9a;          /* bag, blue */
  --v-bank: #0d665a;          /* vault, teal */
  --v-sell: #4b5263;          /* silver coin */
  --v-auction: #7a5200;       /* gold coin, gavel */
  --v-buy: #8f431c;           /* copper coin */
  --v-use: #9c2a78;           /* potion rose */
  --v-destroy: #b02a1e;       /* bin, danger */

  /* Step kinds: icon colour only (the word is always shown) */
  --kind-travel: var(--ink-3);
  --kind-quests: var(--link);      /* quest "!" is gold, as in game */
  --kind-class: var(--class);
  --kind-train: var(--ink-3);
  --kind-dungeon: var(--danger);
  --kind-profession: var(--ink-3);
  --kind-system: var(--info);
  --kind-shopping: var(--ink-3);
  --kind-tip: var(--ink-3);
  --kind-milestone: var(--link);

  /* Quest difficulty ("con") colours: teaching contexts only, always with a word */
  --con-red: #b3261e;
  --con-orange: #984000;
  --con-yellow: #6b5900;
  --con-green: #1b691b;
  --con-grey: #5f5f5f;

  /* Wowhead item quality (tooltips.js colours links with !important; we override per theme) */
  --q0: #5f5f5f;  /* poor */
  --q1: #1c2337;  /* common (white in game: unreadable on vellum, so it becomes ink) */
  --q2: #1d6b00;  /* uncommon */
  --q3: #0052a6;  /* rare */
  --q4: #7a1fb5;  /* epic */
  --q5: #9a4100;  /* legendary */

  /* Typography */
  --font-display: 'Texturina', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif;
  --font-body: 'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --fs-xs: 0.875rem;    /* 14 / 1.4  : tags, captions, group labels (floor) */
  --fs-sm: 0.9375rem;   /* 15 / 1.45 : secondary lines, meta, nav */
  --fs-table: 1rem;     /* 16 / 1.45 : table cells, ref names on phones */
  --fs-md: 1.0625rem;   /* 17 / 1.55 : body, inputs */
  --fs-lg: 1.1875rem;   /* 19 / 1.35 : step titles, item names, lede >= 600px */
  --fs-xl: 1.375rem;    /* 22 / 1.25 : H3 in prose pages */
  --fs-2xl: 1.75rem;    /* 28 / 1.15 : H2, waystone titles (display) */
  --fs-3xl: clamp(1.875rem, 1.4rem + 2.2vw, 2.75rem);  /* 30-44 / 1.1 : H1 (display) */
  --fs-hero: clamp(2.25rem, 1.5rem + 3.6vw, 3.75rem);  /* 36-60 / 1.05 : home hero */
  --lh-tight: 1.1; --lh-head: 1.25; --lh-title: 1.35; --lh-body: 1.55;
  --fw-regular: 400; --fw-semibold: 600; --fw-bold: 700;

  /* Spacing (4px base) */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px; --sp-5: 20px; --sp-6: 24px;
  --sp-8: 32px; --sp-10: 40px; --sp-12: 48px; --sp-16: 64px; --sp-20: 80px;
  --section-gap: var(--sp-12);          /* 64px from 900px */

  /* Layout */
  --gutter: 16px;                        /* 24px >= 600, 32px >= 1200 */
  --measure: 66ch;                       /* prose */
  --page-max: 1200px;
  --main-max: 760px;
  --rail-w: 240px;
  --header-h: 56px;                      /* 64px >= 900 */
  --jbar-h: 60px;

  /* Radii: only places on the map are round */
  --r-0: 0;          /* ley line, rules, table cells */
  --r-tag: 3px;      /* level tags, trust seals, verdict stamps, keycaps, callout label */
  --r-ctl: 5px;      /* buttons, inputs, chips, callouts, coordinate button */
  --r-sheet: 8px;    /* sheets on >= 900px, popovers, menus, home guide card */
  --r-node: 50%;     /* waymarks, here-node, progress node, pips */

  /* Borders and focus */
  --bw-hair: 1px; --bw-strong: 2px; --bw-ley: 3px;
  --focus-w: 3px; --focus-offset: 2px;

  /* Elevation: flat by default; only overlays lift */
  --elev-pop: 0 1px 2px rgb(28 35 55 / 20%), 0 10px 28px rgb(28 35 55 / 18%);

  /* Component sizes */
  --hit: 44px;          /* minimum target */
  --ctl-h: 44px;        /* buttons, chips, stepper */
  --input-h: 48px;      /* text inputs/selects on phones (44px >= 900) */
  --node: 26px;         /* waymark */
  --node-here: 30px;
  --stone: 22px;        /* waystone diamond */
  --ley-w: 3px;
  --ley-x: 24px;        /* line centre from the leg's left edge (20px >= 900) */
  --ley-gutter: 48px;   /* 56px >= 900 */
  --icon-sm: 16px; --icon: 20px; --icon-lg: 24px;

  /* Motion */
  --dur-press: 80ms; --dur-quick: 140ms; --dur-base: 220ms; --dur-ley: 480ms;
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);

  /* Z-index */
  --z-node: 1; --z-sticky: 20; --z-header: 30; --z-jbar: 40; --z-popover: 50;
  --z-scrim: 59; --z-sheet: 60; --z-toast: 70; --z-skip: 100;

  color-scheme: light;
}

/* Dark: night atlas. KEEP THIS BLOCK AND THE ONE BELOW IN SYNC. */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --ground: #0f1424; --sheet: #161c30; --raised: #1e2540; --sunken: #0b0f1c;
    --hover: #232b47; --pressed: #2a3352; --scrim: rgb(4 6 12 / 65%);
    --rule: #2c3554; --edge: #6c7596;
    --ink: #ece4cf; --ink-2: #c9c0aa; --ink-3: #a39b88; --on-ink: #0f1424;
    --link: #e9c46a; --link-hover: #f5d88e; --focus: #e9c46a;
    --fel: #a6dc5c; --fel-line: #a6dc5c; --fel-glow: rgb(166 220 92 / 45%); --on-fel: #0f1424;
    --class: #a5a3ff;
    --info: #72c8e6; --warn: #f2a65a; --danger: #ff8a7a; --on-color: #0f1424; --tint: 14%;
    --ley-travelled: #c9c0aa;
    --v-keep: #8fb0ff; --v-bank: #5fd0bd; --v-sell: #c5ccd8; --v-auction: #e9c46a;
    --v-buy: #eba27c; --v-use: #f08bcf; --v-destroy: #ff8a7a;
    --con-red: #ff6b5e; --con-orange: #ff9f43; --con-yellow: #f2df4b; --con-green: #5fd35a; --con-grey: #9a9a9a;
    --q0: #9d9d9d; --q1: #f3eee2; --q2: #1eff00; --q3: #4aa3ff; --q4: #c27cf7; --q5: #ff8000;
    --elev-pop: 0 0 0 1px #2c3554, 0 12px 32px rgb(0 0 0 / 55%);
    color-scheme: dark;
  }
}
:root[data-theme='dark'] {
  /* identical to the block above */
}

/* Breakpoint-scoped tokens */
@media (min-width: 600px)  { :root { --gutter: 24px; } }
@media (min-width: 900px)  { :root { --header-h: 64px; --input-h: 44px; --ley-gutter: 56px; --ley-x: 20px; --section-gap: var(--sp-16); } }
@media (min-width: 1200px) { :root { --gutter: 32px; } }

/* Reduced motion: every duration collapses; glows stay (they are static light, not motion) */
@media (prefers-reduced-motion: reduce) {
  :root { --dur-press: 0ms; --dur-quick: 0ms; --dur-base: 0ms; --dur-ley: 0ms; }
  html { scroll-behavior: auto; }
}

/* Quality overrides beat tooltips.js (keep !important; selector already proven in current CSS) */
a.q0 { color: var(--q0) !important; } a.q1 { color: var(--q1) !important; }
a.q2 { color: var(--q2) !important; } a.q3 { color: var(--q3) !important; }
a.q4 { color: var(--q4) !important; } a.q5 { color: var(--q5) !important; }
/* Wowhead links stay recognisable as links whatever their quality colour (q0 grey, q1 ink/white) */
a[href*='wowhead.com'] { text-decoration: underline dotted; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
```

**Warlock accent vs epic purple:** `--class` is periwinkle (hue ~242°), while `--q4` epic is ~275° in both themes. `--class` is never applied to an `a.q*` link and never to item names.

### 3.3 Typography

**Families (Google Fonts only):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,400..700;1,400..700&family=Texturina:opsz,wght@12..72,600..700&display=swap" rel="stylesheet" />
```
(The URL was verified to return 200. Spectral is dropped.)

| Family | Role | Why this one |
|---|---|---|
| **Texturina** (opsz 12–72, 600–700) | H1, H2, waystone titles, wordmark, home hero. Never body, never step titles, never labels. | Textura-derived but built for legibility, so it reads as a lore tome without costume lettering. It has lining figures (`Lv 12–20` stays level; Vollkorn's oldstyle figures failed this test). It is low contrast, so not tell #1's Didone look. It is not a flared glyphic, so it stays clear of the in-game Friz Quadrata. |
| **Atkinson Hyperlegible Next** (400–700, italics) | Body, UI, data, step titles, tables, coordinates. | Built by the Braille Institute for distinguishable glyphs (I/l/1, O/0), which suits brand-new players reading coordinates at arm's length. Verified true tabular figures in Chromium: `11.1` and `88.8` both measure 35.8px with `tabular-nums` (`dirA-type.js`). This removes the monospace tell. |

**Type scale** (Bringhurst-style steps, 14px floor, nothing below 14px anywhere):

| Token | px / line-height | Weight | Face | Used for |
|---|---|---|---|---|
| `--fs-hero` | 36–60 / 1.05 | 700 | Texturina | Home hero headline only |
| `--fs-3xl` | 30–44 / 1.1 | 600 | Texturina | H1 |
| `--fs-2xl` | 28 / 1.15 | 600 | Texturina | H2, waystone title |
| `--fs-xl` | 22 / 1.25 | 700 | Atkinson | H3 in prose pages (Start, Systems) |
| `--fs-lg` | 19 / 1.35 | 700 | Atkinson | Step title, bag item name, glossary term, lede (≥600px, weight 400) |
| `--fs-md` | 17 / 1.55 | 400 | Atkinson | Body, inputs (≥16 avoids iOS zoom) |
| `--fs-table` | 16 / 1.45 | 400/700 | Atkinson | Table cells, ref names on phones |
| `--fs-sm` | 15 / 1.45 | 400/600 | Atkinson | Nav, facts rows, ref detail lines, breadcrumbs |
| `--fs-xs` | 14 / 1.4 | 600/700 | Atkinson | Tags, trust seal, group labels ("Quests"), callout label |

Rules:
- Sentence case everywhere. **No** `text-transform: uppercase` and **no** letter-spacing on labels or table headers. Texturina H1 gets `letter-spacing: -0.005em`. Body text is never tracked.
- Hierarchy uses size **and** weight (fixing Tavern's flat 400/400): display 600 vs body 400; titles 700.
- Prose max `--measure` (66ch ≈ 580px at 17px Atkinson). The route body sits at about 40 characters per line on a 390px phone and about 64 on desktop (audit M1 measured 36 and 90).
- `text-wrap: balance` on H1–H3; `text-wrap: pretty` on paragraphs (progressive).
- **Numeric style:** utility `.num { font-variant-numeric: tabular-nums lining-nums; }` on levels, counts (`3 of 12 done`), coordinates, prices, dates, talent ranks (`0/5`). Coordinates are shown as `28.6, 66.1` in `--fs-sm` 700 Atkinson inside the coordinate button. Never monospace. Atkinson Next's slashed zero is kept on purpose: it makes `30.0` unambiguous in game coordinates.
- `kbd` (hotkeys from the Start page): Atkinson 700 `--fs-sm`, `--sunken` bg, 1px `--edge` border with 2px bottom border, `--r-tag`. A keycap, not a code chip.
- Font loading: `display=swap`. Optional later: a `size-adjust` fallback `@font-face` for Atkinson so swaps do not shift lines.

### 3.4 Spacing and layout

- Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80. Rhythm tiers: inline gaps 8, stack 12–16, component padding 16, between components 24, between sections 48 (64 from 900px).
- **One owner for main padding** (fixes audit H6): `main#main { padding-block: var(--sp-6) calc(var(--sp-16) + var(--jbar-safe, 0px)); padding-inline: var(--gutter); max-width: var(--page-max); margin-inline: auto; }`. Remove `.wrap` from `<main>`. On the Route page, `--jbar-safe: calc(var(--jbar-h) + env(safe-area-inset-bottom))` applies below 900px.
- Grid at ≥900px for guide pages: `grid-template-columns: var(--rail-w) minmax(0, var(--main-max))`, 40px gap, left-aligned inside the 1200px page. At ≥1200px the 1200 container leaves about 200px of unused right margin by design (no right rail, no ads, no clutter).
- Alignment: everything left-aligned, including the H1, hero and callouts. Nothing is centred except icons inside buttons.

### 3.5 Radii (a hierarchy with a rule)

**"Only places on the map are round."** Waymarks, the here-node, the progress node, confidence pips and the home-map stops are circles. Paper and tools are near-square:

| Token | Value | What and why |
|---|---|---|
| `--r-0` | 0 | Ley line, table cells, rules: ink lines are not rounded. |
| `--r-tag` | 3px | Level tag, trust seal, verdict stamp, keycap, callout label: small stamped marks. |
| `--r-ctl` | 5px | Buttons, inputs, chips, coordinate button, callouts: hand tools, slightly softened for touch. |
| `--r-sheet` | 8px | Sheets (≥900px), popovers, the menu panel, the home guide card: paper. On phones sheets go full-bleed with **no** radius, so content is not boxed. |
| `--r-node` | 50% | Places and progress only. |

The pill shape (`999px`) is **retired**. Nothing is a pill.

### 3.6 Elevation, borders, focus

- **Flat by default.** Surfaces separate by tone plus a 1px `--rule` border. Card shadows are removed (audit: the identical soft shadow everywhere is tell #4).
- `--elev-pop` only on: menu panel, journey sheets (mobile), trust/sources popover on desktop, toast. Each comes with a `--scrim` where it is modal-ish (the mobile sheets).
- Sticky header and journey bar: **opaque** `--sheet` + 1px `--rule`. No `backdrop-filter`, no translucency (audit H7, rule `blur-purpose`).
- Borders: `--rule` for decoration (sheets, dividers, dashed ref separators); `--edge` (≥3:1) for every control boundary, form field, chip, the ahead line and table header underline (2px).
- Focus: `:focus-visible { outline: var(--focus-w) solid var(--focus); outline-offset: var(--focus-offset); }`. Gold in dark (11.0:1), night ink in light (11.8:1). Waymark checkboxes show the ring around the 44px label (`.node:focus-within`). Sticky bars use `scroll-padding-top: calc(var(--header-h) + 16px)` and `scroll-padding-bottom: calc(var(--jbar-h) + 16px)` so focus is never hidden (WCAG 2.2 `focus-not-obscured`).

### 3.7 Motion

| Token | Value | Use |
|---|---|---|
| `--dur-press` | 80ms | Pressed background on buttons and chips |
| `--dur-quick` | 140ms | Colour and border on hover; check glyph appears |
| `--dur-base` | 220ms | Menu panel, sheets (enter); exit at 150ms (about 70%) |
| `--dur-ley` | 480ms | **The ignite**: the only orchestrated moment |

**The ignite (signature motion).** When a waymark is ticked:
1. The node fills with ink and the check glyph appears (`--dur-quick`).
2. The line segment beside that step redraws from lit/dashed to travelled ink: a `::after` overlay with `transform: scaleY(0 → 1)`, `transform-origin: top`, `--dur-ley`, `--ease-out`.
3. The Next-step marker jumps to the new next step instantly, and that node's fel ring fades in (opacity 0 → 1, `--dur-ley`).

Nothing else animates on its own: no entrance fades, no card hovers, no shimmer, no pulsing glow. Use transform and opacity only. Under `prefers-reduced-motion` the durations are 0 (states still change), and `progress.ts` must pass `behavior: 'auto'` to `scrollIntoView` when `matchMedia('(prefers-reduced-motion: reduce)')` matches (it currently always passes `smooth`).

### 3.8 Breakpoints and z-index

Breakpoints (mobile-first; custom properties cannot be used inside `@media`, so these are the literal values):

| Name | Min width | What changes |
|---|---|---|
| floor | 360 | Everything works, no horizontal scroll (prototype measured 360/360). Menu icon-only and "Lv" hidden below 400. |
| `sm` | 600 | 24px gutters. Ref rows go to 3 columns. Tables are real tables again. Lede 19px. |
| `md` | 900 | Header 64px with inline nav and theme toggle. Rail layout. Sheets get borders and radius. The journey bar moves from the fixed bottom into the rail. Ley gutter 56. |
| `lg` | 1200 | 32px gutters. The "On this page" TOC becomes a sticky rail on prose pages. |

z-index: node 1 · sticky sub-bars (bag chip row) 20 · header 30 · journey bar 40 · popovers 50 · scrim 59 · sheets 60 · toast 70 · skip link 100.

### 3.9 WCAG contrast (computed; ≥4.5:1 text, ≥3:1 non-text)

| Pair | Light fg / bg | Light | Dark fg / bg | Dark |
|---|---|---|---|---|
| Body text on ground | `#1c2337` / `#e9dfc6` | 11.8 | `#ece4cf` / `#0f1424` | 14.5 |
| Body text on sheet | `#1c2337` / `#f5efe1` | 13.6 | `#ece4cf` / `#161c30` | 13.3 |
| Secondary text (ink-2) on sheet | `#363d54` / `#f5efe1` | 9.4 | `#c9c0aa` / `#161c30` | 9.3 |
| Muted text (ink-3) on ground (the floor) | `#55596a` / `#e9dfc6` | 5.2 | `#a39b88` / `#0f1424` | 6.6 |
| Muted text on sheet | `#55596a` / `#f5efe1` | 6.1 | `#a39b88` / `#161c30` | 6.1 |
| Link on ground | `#7a5200` / `#e9dfc6` | 5.2 | `#e9c46a` / `#0f1424` | 11.0 |
| Link on sheet | `#7a5200` / `#f5efe1` | 6.0 | `#e9c46a` / `#161c30` | 10.1 |
| Focus ring vs ground | `#1c2337` / `#e9dfc6` | 11.8 | `#e9c46a` / `#0f1424` | 11.0 |
| Control edge vs raised | `#80755d` / `#fbf8f0` | 4.3 | `#6c7596` / `#1e2540` | 3.3 |
| Control edge / ahead line vs ground | `#80755d` / `#e9dfc6` | 3.4 | `#6c7596` / `#0f1424` | 4.0 |
| Lit ley line vs ground | `#3f7a14` / `#e9dfc6` | 4.0 | `#a6dc5c` / `#0f1424` | 11.4 |
| Fel text on sheet | `#346610` / `#f5efe1` | 6.0 | `#a6dc5c` / `#161c30` | 10.5 |
| Class accent on sheet | `#4b45b5` / `#f5efe1` | 6.5 | `#a5a3ff` / `#161c30` | 7.5 |
| Info / warn / danger text on sheet | `#155f78` / `#984000` / `#b02a1e` | 6.2 / 6.0 / 5.7 | `#72c8e6` / `#f2a65a` / `#ff8a7a` | 8.9 / 8.3 / 7.4 |
| Primary button text on ink fill | `#f5efe1` / `#1c2337` | 13.6 | `#0f1424` / `#ece4cf` | 14.5 |
| "Next step" tag text on fel | `#f5efe1` / `#346610` | 6.0 | `#0f1424` / `#a6dc5c` | 11.4 |
| Callout label on colour (warn / info / danger / tip) | on-color / colour | 6.0 / 6.2 / 5.7 / 6.0 | on-color / colour | 9.1 / 9.7 / 8.0 / 11.4 |
| Ink on warn callout tint | `#1c2337` / `#eadac6` | 11.4 | `#ece4cf` / `#352f36` | 10.3 |
| q0 poor on sheet / on ground | `#5f5f5f` | 5.6 / 4.8 | `#9d9d9d` | 6.2 / 6.8 |
| q1 common on sheet | `#1c2337` | 13.6 | `#f3eee2` | 14.6 |
| q2 uncommon on sheet | `#1d6b00` | 5.8 | `#1eff00` | 12.4 |
| q3 rare on sheet / on ground | `#0052a6` | 6.6 / 5.7 | `#4aa3ff` | 6.4 / 7.0 |
| q4 epic on sheet / on ground | `#7a1fb5` | 6.8 / 5.9 | `#c27cf7` | 6.1 / 6.6 |
| q5 legendary on sheet | `#9a4100` | 5.9 | `#ff8000` | 6.7 |
| Verdict text on own tint tile (keep, bank, sell, auction, buy, use, destroy) | each `--v-*` | 5.8, 5.0, 5.7, 5.1, 5.1, 5.0, 4.7 | each `--v-*` | 6.0, 6.8, 7.5, 7.4, 6.2, 5.8, 5.8 |
| On-colour text on solid verdict fill (pressed chip) | `#f5efe1` on `--v-*` | 7.0, 6.0, 6.8, 6.0, 6.1, 6.1, 5.7 | `#0f1424` on `--v-*` | 8.6, 9.8, 11.3, 11.0, 8.7, 8.1, 8.0 |
| Con colours on sheet (red, orange, yellow, green, grey) | | 5.7, 6.0, 6.0, 5.9, 5.6 | | 6.0, 8.3, 12.4, 8.8, 6.0 |
| Sheet vs ground (decorative; the `--rule` border carries the edge) | | 1.2 | | 1.1 |

Fixed against the audit: the light community/beta badges (4.17 and 4.40) are replaced by monochrome seals (13.6). Light q0/q5 move from 3.84/4.12 to 5.6/5.9. Control borders move from 1.25–1.38 to 3.3–4.3. Done steps no longer use `opacity: .55` (2.35:1); they use `--ink-2` at 9.3–9.4.

### 3.10 Migration map (current token → new)

| Current | New | Notes |
|---|---|---|
| `--bg` | `--ground` | |
| `--surface` | `--sheet` | |
| `--surface-2` | `--raised` (fields, buttons) or `--sunken` (kbd, tracks) | decide per use |
| `--text` | `--ink` | |
| `--muted` | `--ink-3` (meta) or `--ink-2` (secondary copy) | |
| `--border` | `--rule` (decoration) or `--edge` (controls) | every form control must use `--edge` |
| `--accent` | split: links → `--link`; primary buttons and active nav → `--ink`; class-related markers → `--class` | the purple chrome goes away |
| `--accent-soft`, `--fel-soft`, `--gold-soft`, `--danger-soft`, `--info-soft` | `color-mix(in srgb, <colour> var(--tint), var(--sheet))` | one recipe for every tint |
| `--fel` | `--fel` (signature only) | no longer the "Buy/Use" colour |
| `--gold` | `--link` (money, quest) or `--warn` (warnings) | |
| `--danger`, `--info`, `--focus` | same names, new values | |
| `--shadow` | none (`--elev-pop` for overlays only) | |
| `--radius` / `--radius-sm` | `--r-sheet` / `--r-ctl` | plus `--r-tag`, `--r-node` |
| `--font-mono` | removed | kbd uses the body face as a keycap |
| `--max` | `--page-max` / `--main-max` | |
| `--q0..--q5` | same names, new values | keep the `a.q* !important` rule |

Temporary aliases (`--bg: var(--ground)` etc.) are fine during the migration and should be deleted once the pages are converted.

---

## 4. Components

Format for each: **Anatomy**, **States**, **Light/dark**, **Mobile**, **Contract** (selectors and scripts that must keep working).

### 4.1 Site header and nav

- **Anatomy:** `[mark + "Waypoint"] [primary nav ≥900] [level widget] [theme toggle ≥900] [Menu <900]`. Height `--header-h` (56 / 64). Opaque `--sheet`, 1px `--rule` bottom. Sticky, `--z-header`.
- **Brand:** 24px mark (a filled diamond waystone on a vertical ley line; section 5) in `--fel-line`, plus the wordmark "Waypoint" in Texturina 700 20px (22px ≥900) `--ink`. The mark is the only fel in the header at rest.
- **Primary nav (6 items):** Start here · Warlock guide · Bag advisor · Forever systems · Library books · Glossary. (The middle dots here separate list items in this document only; the UI shows them as separate links.) Links are 44px tall, 15px 600 `--ink-2`. Active: `--ink` plus a 3px `--ink` bar on the header's bottom edge. "Warlock guide" is active (`aria-current="true"`) on all four guide pages. Hover: 3px `--rule` bar. No pill backgrounds.
- **Menu (<900px):** a button with the menu icon and the word "Menu" (icon-only below 400px, `aria-label="Menu"`), plus `aria-expanded` and `aria-controls="site-menu"`. The panel drops below the header: full width, `--sheet`, `--elev-pop`, `max-height: calc(100dvh - var(--header-h))`, scrollable. It holds the nav as 52px rows (19px 600), an "Appearance" row holding `#theme-btn`, and a "Report a problem" link. Close it with the same button (label becomes "Close" with an X icon), Esc, a link tap, or a tap on the scrim. On open, focus moves to the first link; on close it returns to the button.
- **States:** hover (bar), active (bar + ink), focus ring, open (panel + scrim).
- **Light/dark:** same structure; only tokens change.
- **Contract:** `#my-level`, `#theme-btn` and the skip link stay. New `src/scripts/menu.ts` (about 20 lines) toggles `data-menu-open` on `.site-header`. CSS shows `#site-menu` inline at ≥900px and as the panel below that, so it is one DOM in two presentations. Remove `backdrop-filter`.

### 4.2 Level widget ("My level")

- **Anatomy:** a stepper group `[−] [Lv 14] [+]`. 1px `--edge` border, `--r-ctl`, `--raised` bg, inner dividers `--rule`. The buttons are 44×44 (minus/plus icons, `aria-label` "Level down"/"Level up"). The field is `input#my-level` (type number, min 1, max 60, `inputmode=numeric`, `aria-label="My level"`), 32px wide, 19px 700 tabular, centred. A "Lv" prefix sits inside the group (14px 700 `--ink-3`), visually hidden below 400px.
- **States:**
  - *Unset:* placeholder "?" and a **2px dashed `--fel-line` border** (setting your level is the first "good move", so it gets the fel invitation). On level-aware pages (Route, Bag advisor, Overview, Talents) a one-line note sits under the page head: "Set your level in the top bar to see what matters now."
  - *Set:* solid `--edge`.
  - *At 1 / 60:* the matching button is `disabled` (opacity .45).
  - *Changed:* a `--dur-quick` background flash to `--hover`.
  - *Focus:* ring on the group via `:focus-within`.
- **Behaviour:** −/+ call `input.stepDown()` / `stepUp()`, then `input.dispatchEvent(new Event('change', { bubbles: true }))`, so `level.ts` runs unchanged (clamping, storage, `data-now`, the `waypoint:level` event).
- **Where "My level" shows up** (the `data-now` visuals, replacing the invisible 2px halo):
  - Route: ley line states and waymarks (4.7).
  - Rail and journey list: a fel waystone for your bracket.
  - Tables: a 3px fel inset bar on the current row plus a "Now" tag; past rows in `--ink-2`.
  - Timeline: a fel node.
  - Bag ledger: "Only my level" filter.
  - Never by opacity.
- **Mobile:** stays in the header (header total at 360px = 349px of 328 + gutters; measured with no overflow).

### 4.3 Theme toggle

- **Anatomy:** `button#theme-btn` with an icon (auto = half-filled circle, sun, moon) and a **visible text label** `[data-theme-label]`: "Auto", "Light" or "Dark". 44px tall, quiet style (transparent, `--edge` border on hover). The `aria-label` is dynamic: "Theme: Dark. Change theme". It cycles in the existing order Auto → Light → Dark.
- **States:** default, hover, focus, pressed. The change is announced through the global toast ("Theme: Dark").
- **Placement:** ≥900px in the header tools after the level widget. <900px inside the Menu panel as a full-width 52px row reading "Appearance" plus the button. It is the same element in both places.
- **Contract:** `theme.ts` keeps its storage key and order. Add 3 lines to update the label, `aria-label` and icon `href`. The inline FOUC script stays.

### 4.4 Page head

- **Anatomy:**
  1. Optional breadcrumb: guide pages only, e.g. "Gnome Warlock guide" as a link, 15px `--ink-2`, underlined, `inline-flex` with 44px min-height.
  2. H1: Texturina 600 `--fs-3xl`.
  3. Lede: `--ink-2`, ≤62ch, 17px (19px ≥600).
  4. Facts `<dl>` as inline label/value pairs: "**Updated** 29 Oct 2026", "**Played in beta** Levels 1–30". Label 700 `--ink-2`, value `--ink-3` `.num`, wrapping with 4px/20px gaps. No middots.
  5. Optional level prompt (4.2).
- **Spacing:** 20px above (32px ≥900), 24px below.
- **Contract:** `PageHead.astro` drops the `eyebrow` prop and gains `trail?: {href,label}[]` and `facts?: {label,value}[]`. Every current `eyebrow` value becomes either a breadcrumb (guide pages) or is deleted (it repeated the nav).

### 4.5 Guide sub-nav

- **Anatomy:** four links: Overview · Route · Talents, spells & demons · Professions & alts. Each is 44px tall, 15px 600 `--ink-2`, active `--ink` with a 3px `--ink` bottom bar over a 1px `--rule` baseline. `aria-current="page"`.
- **Mobile:** one row, `overflow-x: auto`, `scroll-snap-type: x proximity`, scrollbar hidden. A right-edge fade mask appears only when the row overflows. The active tab is scrolled into view on load (`scrollIntoView({inline:'nearest'})`). Never wraps.
- **Not sticky** (the Route has the journey bar; other guide pages are short).
- **Pager (new):** at the bottom of each guide page there are "Previous: Overview" / "Next: Talents, spells & demons" links. They are 56px tall, 1px `--edge` border, `--r-ctl`, chevrons as icons, and no "→" text.

### 4.6 TOC and section navigation

- **Route:** the **journey list**, which is a mini ley line.
  - Anatomy: a vertical 2px dashed line with 10px diamonds. Each row is a 40px link: "Coldridge Valley" plus a right-aligned `.num` count "2/6".
  - States: your bracket gets a fel diamond with glow and 700 text, with `aria-current="location"`; complete brackets get a filled ink diamond; future brackets a hollow one.
  - Placement: the sticky rail on desktop, and the stops sheet from the journey bar on mobile (4.8).
- **Prose pages (Start, Talents, Systems, Professions):** "On this page".
  - ≥1200px: a sticky left rail (top: `--header-h` + 24) listing H2s only, as 40px rows. The active item (optional IntersectionObserver) gets 700 `--ink` plus a 3px `--ink` left bar, so it is not shown by colour alone.
  - <1200px: an in-flow `<details class="toc">` right after the page head. The summary is a 48px row "On this page (6 sections)" with a chevron, opening a list of 44px links.
  - This replaces the current `.toc` pill row (audit M5).
- All headings get `scroll-margin-top: calc(var(--header-h) + 16px)`.

### 4.7 Route step: the waymark row (the central component)

**Anatomy** (top to bottom, inside one shared `.sheet` per bracket; the line runs in the gutter to the left):

```
 gutter │ sheet
  ◉─────┤ [kind glyph 20] Step title (Atkinson 700 19/26, ink)
  ┃     │ facts row: [Next step] [Lv 1–4] Class quest  (pin) Anvilmar, Dun Morogh  [●●○ Beta-tested ▾]
  ┃     │ body (17/26, ≤64ch, links gold)
  ┃     │ "Quests"  (14px 700 ink-3, sentence case)
  ┃     │  !  Tainted Memorandum            (ref row)
  ┃     │     From Sten Stoutarm
  ┃     │  !  Beginnings
  ┃     │     Bring 3 Feather Charms to Alamar Grimm
  ┃     │     [⌖ 28.6, 66.1 ⧉]
  ┃     │ "People" ...  "Items" ...
```

- **Waymark = checkbox.** `label.node` is 44×44, absolutely positioned on the line (`left: calc(-1 * var(--ley-gutter) + var(--ley-x) - 22px)`, `top: 10px`). Inside it, the real `input[type=checkbox][data-step]` is restyled (`appearance: none`): a 26px circle, 2.5px `--ink-2` ring, `--ground` fill. The visually hidden text "Mark "{title}" done" stays. **Only the node is the hit target.** The label no longer spans the full card height, which stops accidental ticks while scrolling (audit H3).
- **Kind glyph:** 20px icon before the title in `--kind-*` colour, `aria-hidden`. The **kind word** sits in the facts row ("Class quest", "Travel", "Train", "Dungeon", "Profession", "Forever system", "Shopping", "Tip", "Milestone"), 15px `--ink-2`, not boxed.
- **Facts row** (wraps, 6px/16px gaps): Next-step tag (when applicable) → level tag `Lv 1–4` → kind word → place (pin glyph + "Anvilmar, Dun Morogh", built as `hub + ", " + zone`) → "Optional" tag (dashed `--rule` border, `--ink-3`) → trust seal (4.21).
- **Ref lists:** group label "Quests" / "People" / "Items" (14px 700 `--ink-3`, sentence case, replacing tracked caps "KEY QUESTS"/"WHO"), then ref rows (4.20).
- **Sources and Report:** no longer a footer row on every step. They live inside the trust seal's panel (4.21), which removes 130 low-value controls from the Route.
- **States:**

| State | Trigger | Line beside the row | Node | Text |
|---|---|---|---|---|
| Ahead | `data-now="future"` | dashed `--ley-ahead` | hollow `--ink-2` ring | normal |
| Lit | `data-now="current"`, not done | solid `--ley-lit`, glow `--fel-glow` (dark only) | hollow, ring in `--fel-line` | normal |
| **Next step** | `data-here` (first unchecked step in your level range; else first unchecked overall) | travelled above the node, lit below | 30px: fel ring + inner fel dot + glow | `Next step` tag (fel fill, on-fel text) first in the facts row; `aria-current="step"` on the article |
| Past, not done | `data-now="past"` | solid `--ley-travelled` | hollow `--ink-2` | normal (it may still be worth doing) |
| **Done** | `.done` (checkbox checked) | solid `--ley-travelled` (wins over lit) | filled `--ink-2` with a 2.5px `--sheet` check | title `--ink-2` 600 plus a "Done" tag (1px `--rule`, `--ink-2`); `.detail` folds away (CSS `display: none`); no strikethrough, no opacity |
| Hidden | `html.hide-done .step.done` | the bracket's base line (`.leg::before`) stays continuous | n/a | `display: none` (unchanged contract) |
| Flash (Next step / Jump) | `.flash` | n/a | n/a | background `color-mix(--fel 10%, --sheet)` fading over `--dur-ley`; no box-shadow halo |
| Untested | `confidence: theory` | dashed | dashed node ring (`--warn`) | Theory seal |
| Focus | `.node:focus-within` | n/a | 3px `--focus` ring around the 44px label | n/a |

- **Light/dark:** same states. The dark theme adds `--fel-glow` (box-shadow on the lit line and here-node). The light theme is ink on paper with no glow.
- **Mobile (<600):** the bracket section breaks out of the left gutter (`margin-left: calc(-1 * var(--gutter))`). The line centre is 24px from the screen edge, content starts 48px in, and the sheet is full-bleed with no radius and no side borders. That gives roughly 326px of text width at 390 (~40 characters). Facts wrap to two lines. Ref rows use the stacked slot layout (4.20).
- **Desktop (≥900):** the sheet has a 1px `--rule` border and `--r-sheet`, the gutter is 56px, and the line is centred at 20px. Rows have 20px left padding inside the sheet.
- **Markup skeleton:**

```html
<section class="leg" id="coldridge-1-6" data-group data-lmin="1" data-lmax="6"> <!-- waystone header (4.9) -->
  <div class="sheet">
    <article class="step kind-class" id="cv-imp" data-lmin="1" data-lmax="4">
      <label class="node"><input type="checkbox" data-step="cv-imp" /><span class="visually-hidden">Mark "Imp quest…" done</span></label>
      <h3 class="step-title"><svg class="i k" aria-hidden="true"><use href="#i-flame"/></svg><span>Imp quest: Tainted Memorandum → Beginnings</span></h3>
      <div class="facts">…</div>
      <div class="detail"> body, refs </div>
    </article>
  </div>
</section>
```

- **Contract:** `input[data-step]`, `.step` + `.done`, `[data-group]`, `[data-group-count]`, `.complete`, `.flash`, `[data-lmin][data-lmax]`→`data-now`, `html.hide-done` and the step `id` anchors are all unchanged. **Additive:** `progress.ts` `render()` sets `data-here` on exactly one `.step` (first unchecked with `data-now="current"`, else first unchecked) and re-renders on the `waypoint:level` event. The "Next step" button (`[data-action="resume"]`) should prefer `[data-here]`.

### 4.8 Checklist and progress: the journey bar

- **Anatomy:**
  - **Progress line:** 3px dashed `--ley-ahead`. The travelled fill is solid `--ley-travelled`; the existing `[data-progress-bar]` element is the fill, so its width % keeps working. A 13px fel node with glow (dark) marks the fill's end.
  - **Count:** `[data-progress-text]` "20 of 65 steps done" (`.num`, 15px 700).
  - **Actions:** **Next step** (primary; `[data-action="resume"]`); **Jump to my level** (`[data-action="my-level"]`); **Hide done steps** (`[data-action="hide-done"]`, a switch row with `aria-pressed`); **Move progress to another device** (the existing backup `<details>` with textarea, Make backup code, Restore from code); **Untick everything** (danger, separated by a rule, keeps the `confirm()`).
- **Mobile (<900):** fixed to the bottom, `--jbar-h` 60px plus `env(safe-area-inset-bottom)`, `--sheet`, 1px `--rule` top, with the progress line riding the top edge. From left to right:
  1. **Stops button**: a chevron-up plus two lines ("20 of 65 done" 14px `--ink-3`; "Lv 12–20 Loch Modan, Hall of Thanes & Redridge" 15px 600, truncated with an ellipsis; the full name is in the sheet). It opens the journey list as an upward sheet.
  2. **More** (icon + "More", 44px). It opens a sheet with Jump to my level, Hide done steps, Move progress…, and Untick everything.
  3. **Next step** (primary).

  Sheets: `--z-sheet`, `--elev-pop`, `max-height: 70dvh`, scrim, Esc and scrim-tap close, focus trapped while open, swipe not required. The page reserves `--jbar-h` plus 24px at the bottom so the last step is never covered.
- **Desktop (≥900):** the same element sits at the top of the sticky rail (`top: calc(var(--header-h) + 24px)`): the line plus count, then Next step (primary, full width), Jump to my level (secondary, full width), the Hide-done switch, and "Move progress…" as a details row. The journey list follows below.
- **Library books:** same component, `levelJump={false}`. The stops list lists zones instead of brackets.
- **Contract (important):** keep **one** DOM instance of every `[data-action]` button, because `progress.ts` binds with `querySelector` (first match only). Mobile and desktop are the same element positioned by CSS. Sheets are `<details>` (zero JS) or popovers. At ≥900px the stops `<details>` gets `open` from a 3-line `matchMedia` call in the route script.

### 4.9 Bracket header: the waystone

- **Anatomy:**
  - **Waystone:** a 22px diamond (rotated square, `--r-tag` 2px) on the line, 2.5px `--ink-2` border, `--ground` fill, with a 4px `--ground` halo so the line visibly "enters" the stone.
  - **H2:** level tag `Lv 12–20` (neutral) followed by the title in Texturina 600 28px, all on one line that wraps naturally.
  - **Facts line** (15px `--ink-2`): "You are here, at level **14**." (current bracket only), then "Zones: Loch Modan, Dun Morogh, Ironforge…" as a comma list.
  - **Mini meter:** the dashed line to 220px with a travelled fill, plus "3 of 12 done" (`[data-group-count]` text, `.num`, 700).
  - Bracket summary paragraph.
  - **Trainer note:** `details.bracket-extras`, summary "New talents and spells at levels 12–20" (48px row). Inside: two short lists with level tags and spell refs, and the link "Full talent plan and spell list" (no "→").
- **States:**
  - Future: hollow stone, dashed line.
  - Current (`data-now="current"`): **fel-filled stone with glow** (dark) and the "You are here" sentence.
  - Past: ink outline.
  - Complete (`.complete`): ink-filled stone.
  - Untested (all steps theory or level >30): dashed stone border in `--warn` plus one **Untested** callout under the header, instead of a Theory badge repeated on every step.
- **Mobile:** same layout, with the H2 wrapping under the tag. The stone stays on the line.
- **Contract:** `section.bracket[data-group][data-lmin][data-lmax]` stays (rename the class to `.leg` or keep `.bracket` with new styles). `[data-group-count]` stays. The old `.bracket-nav` pill row is removed; the journey list replaces it.

### 4.10 Callouts

- **Set:**

| Variant | Label word | Icon | Colour | Replaces |
|---|---|---|---|---|
| Tip | "Tip" | lantern | `--fel` | `.callout.fel` |
| Good to know | "Good to know" | info circle | `--info` | `.callout` (default) |
| Careful | "Careful" | warning triangle | `--warn` | `.callout.warn` |
| Danger | "Danger" | octagon | `--danger` | `.callout.danger` |
| Untested | "Untested" | flask with "?" | `--warn`, **dashed** border | new (beta caveat) |

- **Anatomy:** a box with 1px border (`color-mix(--c 55%, --rule)`), `--r-ctl`, background `color-mix(--c var(--tint), --sheet)`, padding 22/16/14, max-width `--measure`. The label is a **tab attached to the top-left edge** (`top: -12px; left: 12px`): solid `--c` fill, `--on-color` text, 14px 700, 16px icon, `--r-tag`. This is a margin-note shape, deliberately **not** a left stripe. The body text is `--ink`, so it is never dimmed.
- **Compact** (`.callout.small`, for in-list notes such as "How to read this"): padding 18/12/10.
- **Spacing:** 24px above (clears the label), 20px below.
- **Mobile:** full content width; the label never wraps (short words).

### 4.11 Tables

- **Desktop/tablet (≥600):** `table.data` at full width.
  - **Header:** sentence case, 15px 700 `--ink-2`, `--sheet` bg, 2px `--edge` bottom border, sticky inside its section where long (`position: sticky; top: var(--header-h)`).
  - **Cells:** 16px, padding 12px, min row height 48px, 1px `--rule` row lines, no zebra.
  - **Columns:** level column first as a level tag. Numbers right-aligned `.num`.
  - **Level states:** `tr[data-now="current"]` gets an inset 3px fel bar on the first cell plus a "Now" tag; past rows use `--ink-2`, never opacity.
  - **Sortable** tables (if any) use `aria-sort` and a chevron icon.
- **Phones (<600): stacked two-line rows, not label cards.** Each `tr` becomes a grid:
  - Line 1: level tag plus primary cell (bold).
  - Line 2: secondary cells inline as "label value" pairs (label 14px 700 `--ink-3` via `td[data-label]::before { content: attr(data-label) }`).
  - The **"Why"** column becomes a full-width paragraph at 16px.

  Target 64–96px per row (Tavern's label cards were about 150px). The **Trust** column renders the trust seal inline (audit H1: the systems table clipped it).
- **Wide content that cannot stack** (rare): a `.table-scroll` wrapper with an edge-shadow scroll hint (`background-attachment: local` gradients), a visible "Swipe to see more" caption, `tabindex="0"` and a role region label.
- **Light/dark:** tokens only.

### 4.12 Tags and badges (replacing `.pill` soup)

| Primitive | Look | Interactive? | Examples |
|---|---|---|---|
| `.tag` (level) | 14px 700 `.num`, padding 5/7, 1px `--edge`, `--r-tag`, transparent | no | `Lv 1–4`, `Lv 60` |
| `.tag.next` | fel fill, `--on-fel` text | no | `Next step` (one per page) |
| `.tag.done` | 1px `--rule`, `--ink-2` | no | `Done` |
| `.tag.now` | fel 1.5px border, `--ink` text | no | `Now` (tables, timeline) |
| `.tag.optional` | dashed `--rule`, `--ink-3` | no | `Optional` |
| `.count` | plain 15px 700 `.num`, no box | no | `3 of 12 done`, `2/6` |
| `.kind` | plain word, 15px `--ink-2` (icon sits at the title) | no | `Class quest` |
| `.trust` | see 4.21 | **yes** (disclosure) | `●●○ Beta-tested ▾` |
| `.verdict` | see 4.14 | no | `Sell` stamp |
| `.chip` | see 4.13 | **yes** (toggle) | filter chips |

Rule: **status never looks like a control, and a control never looks like status.** Interactive elements always have a 44px target, an `--edge` border and a hover/pressed layer. Status marks have neither.

### 4.13 Filter chips and search (Bag advisor, Library, Glossary)

- **Search:**
  - **Field:** visible label "Search your bags" (15px 700 `--ink-2`) above a 48px field (44 ≥900): `--raised`, 1px `--edge`, `--r-ctl`, leading 20px search icon in `--ink-3`, 17px text.
  - **Placeholder:** an example only ("Cloth, wand, crate…"), never the label.
  - **Clear:** a 44px clear (X) button appears when there is text.
- **Category select:** 48px, same field style, custom chevron icon.
- **"Only my level":** a switch row (44px, 22px control, label 15px 600). Replaces the 13px checkbox. Disabled with the hint "Set your level first" when level is unset.
- **Verdict chips:**
  - **Anatomy:** each chip is a `button.chip[data-act][aria-pressed]` 44px tall: verdict icon (20px, in `--v-*`) + word (15px 700) + count (`.num`, `--ink-3`), `--raised` bg, 1px `--edge`, `--r-ctl`, 8px gaps.
  - **Pressed:** **solid `--v-*` fill, `--on-color` text and icon, a leading check glyph** (shape cue), no border change in size.
  - **Hover:** `--hover`. **Focus:** ring.
- **Mobile:** search and selects are in flow. The chip row is **sticky** under the header (`top: var(--header-h)`, `--z-sticky`, `--ground` bg, 1px `--rule` bottom), scrolls horizontally with a right fade mask, and never wraps.
- **Desktop (≥900):** the whole filter form is a sticky left rail (240px) next to the ledger. Chips wrap in the rail.
- **Status line:** `#bag-status` (`aria-live="polite"`), 15px `--ink-2`: "Showing **3** of 78 items: Sell, level 14."
- **Empty state:** an info callout: "No items match "wand" at level 14. Clear the search or turn off Only my level." plus a "Clear filters" button.
- **Contract:** `#bag-filters`, `[data-act]`, `[data-cat]`, `[data-text]`, `#bag-items`, `#bag-status` and the saved filter key stay.

### 4.14 Bag item: the ledger row

- **Concept:** a merchant's ledger, not 78 identical cards (audit M3). The answer, the **verdict**, is the first and largest thing on each row, so scanning down the left edge reads like a ledger column.
- **Anatomy:**
  - **Verdict stamp** `.verdict.v-*`: a 32px tall, min 92px wide box with 1.5px border in `--v-*`, tint bg, `--r-tag`, 16px icon plus the word in 15px 700 `--v-*`.
  - **Item name:** h3, 19px 700, the Wowhead link in quality colour with a dotted underline.
  - **Facts row:** level tag, category word ("Food & drink"), trust seal.
  - **Why:** 17px, ≤64ch.
  - **Where:** vendor ref rows (4.20). The vendor row adds the **price** as in game ("25c each", `.num` 700 `--ink-2`; coin colours are not used for text).
- **States:** hover none (rows are not links). `[data-now]` out of level range is handled by the filter. A filtered-out row gets `hidden`. Focus goes to the inner links and buttons only.
- **Mobile (<900):** a single full-bleed `--sheet` list with 1px `--rule` dividers and 14/16 padding. The stamp and name share line 1 (the name wraps beside the stamp); facts, why and where stack below.
- **Desktop (≥900):** the ledger column next to the filter rail, as a three-column grid per row: `120px stamp | 1fr (name, facts, why) | 280px where`. The sheet has a border and `--r-sheet`.
- **Rules of thumb** (the four generic tips above the filters): **one** `--sheet` block "Rules of thumb" with four rows. Each row is a bold lead-in ("**Grey item?** Sell it to any vendor. Always.") with the verdict icon in its colour. These are not four cards in a 3-column grid (that left an orphan).
- **Contract:** `article.item[data-act][data-cat][data-lmin][data-lmax][data-text]` stays. The `act-*` classes map to `v-*` tokens.

### 4.15 Milestone timeline (guide overview)

- **Anatomy:** an `ol` drawn as a vertical mini ley line (2px). Columns: `64px` level (`Lv 10`, `.num` 700, right-aligned) | 20px node column on the line | content (title link 17px 700 gold, body 17px `--ink-2`).
- **States** (from `data-now`):
  - Past: filled `--ink-2` circle, solid line above it, text stays full contrast (no `opacity: .6`).
  - Current: fel circle with glow plus a "Now" tag.
  - Future: hollow circle, dashed line.
- **Mobile:** the level column shrinks to 52px, and the title and body stack.
- **Contract:** `li[data-lmin][data-lmax]` stays.

### 4.16 Glossary entries

- **Anatomy:** `dl.gloss`. Each entry is a `div` with `dt` (19px 700 `--ink`, with an anchor `id`) and `dd` (17px, ≤64ch, `--ink-2`). Entries are separated by 1px `--rule` with 16px padding. Terms used elsewhere link here via `.term` (dotted underline, `cursor: help`, unchanged).
- **Search:** a 48px search field at the top that filters `dl > div`. It is sticky under the header on phones, with a live count "Showing 12 of 43 terms."
- **A–Z jump:** ≥900px a sticky left rail of letters (40px squares, `--r-ctl`; letters without entries are rendered disabled at `--ink-3` with `aria-disabled`). <900px an in-flow `details` "Jump to a letter".
- **States:** `:target` gets a `--raised` bg, a 3px fel left bar and a small fel waymark before the term ("you arrived here").
- **Light/dark:** tokens only.

### 4.17 Buttons

| Variant | Look | Use |
|---|---|---|
| Primary | `--ink` fill, `--on-ink` text, 1px `--ink` | One per view: Next step, Open the route, Make backup code |
| Secondary | transparent, 1px `--edge`, `--ink` text | Jump to my level, Restore from code |
| Quiet | no border, `--ink-2`, underline on hover | Inline utilities ("Clear filters") |
| Danger | transparent, 1px `--danger`, `--danger` text; confirm dialog | Untick everything |
| Icon | 44×44, 20px icon, always an `aria-label`; prefer icon plus a visible word when space allows | Level ±, clear search, close |

- **Size:** height 44 (48 for the hero CTA on phones), padding 0 14px, 15px 600, gap 8, `--r-ctl`, `touch-action: manipulation`, `cursor: pointer`.
- **States:** hover `--hover` layer (primary: `color-mix(--ink 88%, --sheet)`); pressed `--pressed` with `--dur-press`, **no scale or translate** (no layout jitter); focus ring; disabled opacity .45, `cursor: not-allowed`, `disabled` or `aria-disabled`.
- **Copy:** verb-first, sentence case, no trailing "→".

### 4.18 Inputs

- Text, search, number and select: height `--input-h` (48 phone / 44 desktop), 17px, `--raised` bg, 1px `--edge`, `--r-ctl`, padding 0 12px, `color: --ink`, placeholder `--ink-3`. There is always a visible label above (15px 700 `--ink-2`); helper text below in 15px `--ink-3`.
- Textarea (backup code): min 96px, 15px Atkinson (not monospace), `word-break: break-all` allowed for the code only.
- Checkbox outside the Route (Library books, filters): a 24px **square** (`--r-tag`) inside a 44px label. It is checked with an ink fill and a sheet-coloured check. The Route uses round waymarks because steps are places.
- Switch (Hide done steps, Only my level): a 44px row with a 40×24 track: `--edge` border; on = `--ink` fill with a sheet-coloured knob. It is a button with `aria-pressed`, keeping the current contract.
- **Error:** 2px `--danger` border, a 16px danger icon, and a message below linked with `aria-describedby`. Example: "That code is for a different checklist. Make the code on this page."
- **Focus:** the 3px ring (the field border does not change colour).

### 4.19 Footer

- **Anatomy:** `--ground` bg, 1px `--rule` top border, `padding-block: 32px 48px` (plus `--jbar-h` on the Route at <900). Three blocks, in this order:
  1. **"How much to trust a fact"**: the four trust seals in a row, each with a one-line meaning ("Official: from Blizzard or in-game data." …). This is where the pips are taught.
  2. **About**: "Waypoint is a fan-made guide built from beta data (17 Sep – 22 Oct 2026). Data updated 29 Oct 2026."
  3. **Legal line** (15px `--ink-3`): "Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft and Warcraft are trademarks of Blizzard Entertainment, Inc. Item tooltips by Wowhead."
- The footer is no longer flush with content, because `main` owns its bottom padding (audit H6).

### 4.20 Ref row and coordinate button (RefItem)

- **Anatomy:** a grid with fixed slots (fixes audit M2):
  - 20px glyph column: quest "!" (filled, `--link`), person (NPC, `--ink-3`), pouch (item, `--ink-3`), coin (vendor, `--ink-3`).
  - **Name** (16px 700; Wowhead link in quality colour, dotted underline; plain names `--ink`).
  - **Detail** (15px `--ink-3`): "From Sten Stoutarm" / role "Warlock trainer, Imp quest" / note / "Kharanos, Dun Morogh".
  - **Coordinate button** (when coords exist).
- **Coordinate button:** `button.way[data-copy]`, 44px tall, padding 0 10px, 1px `--edge`, `--raised`, `--r-ctl`. Contents: crosshair icon 16, then `28.6, 66.1` (15px 700 `.num`), then a copy icon 16 in `--ink-3`. `aria-label="Copy /way Dun Morogh 28.6 66.1 Alamar Grimm"`, with a `title` for mouse users.
  - **Copied:** `data-state="copied"` swaps the copy icon for a fel check and turns the border fel for 1.4s. **The width never changes** (no text replacement). The global toast (4.23) says "Copied /way Dun Morogh 28.6 66.1".
  - **Failed:** a danger icon plus the toast "Copy didn't work. Long-press the coordinates to copy them."
- **Layout:**
  - <600: line 1 name (spans), line 2 detail, line 3 the coordinate button left-aligned under the name.
  - ≥600: name and detail in column 2 and the button in column 3, spanning both rows and right-aligned.
  - Rows are separated by a 1px **dashed** `--rule` (a map-dotted feel, quiet).
- **"Copy all /way" (Library books, per zone):** a secondary button "Copy all 6 waypoints" in the zone header.
- **Contract:** `[data-copy]` stays. `copy.ts` changes so that when the button contains `[data-copy-icon]`, it toggles `data-state` instead of replacing `textContent` (the current code wipes inner SVG and reflows), and it writes to the toast. Buttons without the icon keep the text-swap fallback.
- **Wowhead icons:** to stop third-party layout shift (audit L1), set `iconizeLinks: false` for ref rows, which use our own glyph column. Hover tooltips stay. Whether bag item names may keep Wowhead's icon is an open test (section 9).

### 4.21 Trust seal (merged Badge + Sources)

- **Anatomy:** `details.trust`. Its `summary` is the seal: 3 pips (8px circles; filled = `--conf-pip`, empty = 1.5px ring) plus the word plus a chevron. 14px 600 `--conf-fg`, 1px `--conf-border`, `--conf-bg`, `--r-tag`, 32px visual height with a **44px hit area** (`::before` inset −6px 0).

| Level | Pips | Border | Word | Meaning shown in the panel and footer |
|---|---|---|---|---|
| Official | ●●● | solid `--rule` | Official | From Blizzard or in-game data |
| Beta-tested | ●●○ | solid `--rule` | Beta-tested | Seen in the beta by several players or guides |
| Community | ●○○ | solid `--rule` | Community | One guide or player claim, not cross-checked yet |
| Theory | ○○○ | **dashed `--conf-theory`** | Theory (in `--warn`) | Not testable yet: the beta stopped at level 30 |

- **Open panel:** below the seal (phones, in flow) or as a popover (≥900, `--elev-pop`, 320px). It contains the meaning sentence, "Sources (3)" with the link list (15px, 44px rows, `label()` formatting kept), and "Something wrong? Report it" (the existing `reportHref`).
- **Light/dark:** monochrome in both. The hue meanings no longer collide with verdicts or kinds (audit M4).
- **Contract:** `Badge.astro` + `Sources.astro` become `Trust.astro` (props `c`, `urls`, `report?`). `Badge` stays as a summary-only variant for the footer legend and tables.

### 4.22 Home hero: the road (the signature at full size)

- **Anatomy:**
  - **H1** (Texturina 700 `--fs-hero`, max 18ch): "From Coldridge Valley to Mount Hyjal".
  - **Lede:** "A level 1 to 60 route for a brand-new gnome warlock in WoW: Forever. Tick the steps as you play; the road remembers where you are."
  - **The road:** an inline SVG ley line meandering through the **11 real brackets** as waystones. Each stop is labelled with its short name and level range. Each stop is an `<a>` to its route anchor, 44px hit circle.
  - **CTA row:** primary "Open the route", or "Continue: {next step title}" when progress exists; secondary "New to WoW? Start here".
  - **Launch line:** "Forever launches Wed 4 Nov 2026 at 3:00 pm PST, in 6 days." (`<time datetime>`, updated once a minute; after launch: "Live since 4 Nov 2026").
- **The road SVG:** generated at build time in Astro from `route.brackets`. It is a single cubic path:
  - Desktop: a gentle S across a 1100×220 viewBox.
  - Phone: vertical, about 320×640, beside the text.

  Stops are evenly spaced by arc length. Segment styles are the ley states: travelled stops (below My level) solid `--ley-travelled`, your stop a fel diamond with glow plus "You are here, level 14", ahead dashed `--ley-ahead`. Labels are 15px Atkinson 600, never on the line. The line is hand-built from data, so there is no map art and no Blizzard imagery.
- **Mobile:** H1, lede, CTA (48px, full width), then the vertical road. The Gnome Warlock guide card must be above the fold at 390×844 (fixes audit L6), so the road goes below the CTA.
- **Motion:** none on load.

### 4.23 Toast and live status

- **Anatomy:** one global `#toast` (`role="status"`, `aria-live="polite"`), fixed bottom-centre above the journey bar, `--ink` fill, `--on-ink` text, 15px 600, `--r-ctl`, `--elev-pop`, max 90vw. Auto-dismisses after 3s, never steals focus. Messages: "Copied /way …", "Theme: Dark", "Restored 12 ticked steps", "Progress saved on this device" (first tick only).

### 4.24 Library book row

This is the waymark row's sibling for collectibles. It uses a square checkbox (4.18) and no ley line, because books are things, not stops. The row has: checkbox | name (Wowhead link) + detail ("In the Thelsamar inn, upstairs") | coordinate button | trust seal. Zones are `section[data-group]` with an H2 header, a count and "Copy all 6 waypoints".

---

## 5. Icon plan (hand-drawn inline SVG only)

**Style:** 24×24 viewBox, `fill: none`, `stroke: currentColor`, stroke width **1.75** at 20/24px display, **2** at 16px, round caps and joins, no gradients. Filled glyphs are used only where the game's own symbol is solid (quest "!" and "?", brand diamond, next-step triangle, auto-theme half). All icons are drawn for Waypoint (no icon library, no game art, no Blizzard shapes).

**Delivery:** `src/components/Icon.astro` (`name`, `size` 16|20|24, `label?`). It renders inline `<svg class="i">`, `aria-hidden="true"` unless `label` is given (then `role="img"` + `aria-label`). Alternatively, use one `<symbol>` sprite in `Base.astro` plus `<use href>`; the prototype used the sprite.

| Name | Use | Path data (validated in the prototype unless marked "draft") |
|---|---|---|
| `mark` | Brand (waystone on a ley line) | `M12 1.5v21` + filled `M12 6.5l5 5.5-5 5.5-5-5.5z` |
| `signpost` | Kind: travel | `M12 21.5V2.5` `M5 5h11l3 2.5-3 2.5H5z` `M19 12.5H8l-3 2.5 3 2.5h11z` |
| `quest` ("!") | Kind: quests; quest refs | filled `M10.4 3.5h3.2l-.7 11.2h-1.8z` + filled circle (12,19) r1.8 |
| `turnin` ("?") | Quest turn-in (future data) | draft: `M8.8 8.6a3.3 3.3 0 1 1 4.9 2.9c-1 .6-1.7 1.3-1.7 2.5v.8`, stroke 2.5, dot (12,19) |
| `flame` | Kind: class (fel flame) | `M12 21.5c-3.6 0-6.5-2.6-6.5-6.3 0-3.6 3-5.6 3.7-8.7 1.5 1.2 2 2.7 2 4.2 1.5-.9 2.6-3.3 2.3-6.2 3.3 2 5.5 6 5.5 10.2 0 3.9-3 6.8-7 6.8z` + inner tongue |
| `book` | Kind: train | `M3.5 5.5c2.8-1.2 5.8-1.2 8.5.6 2.7-1.8 5.7-1.8 8.5-.6v13.4c-2.8-1.1-5.8-1.1-8.5.6-2.7-1.7-5.7-1.7-8.5-.6z` `M12 6.1v13.4` |
| `gate` | Kind: dungeon (portcullis arch) | draft: `M5 21V10.5a7 7 0 0 1 14 0V21` `M3 21h18` `M9 21v-7.5M12 21v-9M15 21v-7.5` |
| `anvil` | Kind: profession | draft: `M3.5 7.5h12.5a4.5 4.5 0 0 0 4.5 4.5l-4.5 1-1.5 2.5h-6l-1.5-2.5A3.5 3.5 0 0 1 3.5 9.5z` `M9 15.5 8 20.5h8l-1-5` |
| `rune` | Kind: Forever system | draft: circle r9 + `M12 5.5l1.7 4.8 4.8 1.7-4.8 1.7L12 18.5l-1.7-4.8L5.5 12l4.8-1.7z` |
| `coin` | Kind: shopping; vendor refs | draft: circles r8.5 and r5 |
| `lantern` | Kind: tip; Tip callout | `M12 2v2.5M9 4.5h6` `M8 7.5h8l-.8 11H8.8z` `M7 21h10` + flame `M12 11.5c1 1 1.3 2 0 3.5-1.3-1.5-1-2.5 0-3.5z` |
| `star` | Kind: milestone | draft: `M12 3.5l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.8l-5.4 2.9 1.2-5.9L3.4 9.7l6-.7z` |
| `pin` | Place in facts rows | `M12 21.5s-6.5-6.4-6.5-11.5a6.5 6.5 0 0 1 13 0c0 5.1-6.5 11.5-6.5 11.5z` + circle (12,10) r2.3 |
| `person` | NPC refs | circle (12,8) r3.6 + `M4.8 20.5c.9-3.9 3.7-6 7.2-6s6.3 2.1 7.2 6` |
| `pouch` | Item refs | draft: `M7 8V6a5 5 0 0 1 10 0v2` `M4.5 8h15l-1.2 12.5H5.7z` |
| `crosshair` | Coordinate button | circle r6.5 + `M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5` |
| `copy` / `check` | Copy state | rect 8.5,8.5 11.5² rx1.5 + back sheet / `M5 12.5l4.5 4.5L19 7.5` |
| `next` | Next step button | circle r8.5 + filled `M10.5 8.5l4 3.5-4 3.5z` |
| `keep` | Verdict | `M9 6.5 7.5 3.5h9L15 6.5` + bag body + check `M9.5 14l2 2 3.5-3.5` |
| `bank` | Verdict | `M3.5 10a8.5 5.5 0 0 1 17 0v10h-17z` `M3.5 13.5h17` + lock rect |
| `sell` / `buy` | Verdict (coin with arrow out / in) | coin circle (9,12) r6 + `M15.5 12H22M19 9l3 3-3 3` / mirrored |
| `auction` | Verdict (gavel) | `M13.6 3.2l6.4 6.4-2.6 2.6L11 5.8z` `M14.3 9 5 18.3` `M3 21h9` |
| `use` | Verdict (potion) | `M9.5 3h5M10.5 3v5.5L5.6 17A2.8 2.8 0 0 0 8 21h8a2.8 2.8 0 0 0 2.4-4l-4.9-8.5V3` `M7.5 14.5h9` |
| `destroy` | Verdict (bin) | `M4 7h16M9.5 7V4h5v3M6 7l1 13.5h10L18 7` `M10 11v6M14 11v6` |
| `info` / `warn` / `danger` / `flask` | Callouts | info circle; triangle `M12 3.5l9 16H3z` + bar + dot; octagon (draft) `M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z`; flask with "?" (validated) |
| `menu`, `close`, `chevron-down/up/right`, `minus`, `plus`, `search`, `more` | UI | standard geometric strokes; search = circle (10.5,10.5) r6.5 + `M15.5 15.5 21 21` |
| `sun`, `moon`, `auto` | Theme | sun: circle r4 + 8 rays; moon: `M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z`; auto: circle r8.5 + filled right half |
| `external`, `arrow-up`, `flag` | External link mark, back to top, report | draft geometric strokes |

Icon sizes are tokens (`--icon-sm/--icon/--icon-lg`). Meaningful icons need ≥3:1 against their surface: `--ink-3` gives 5.2–6.6, and the verdict and kind colours give ≥4.7. The word always accompanies the icon, so the icon carries no meaning on its own.

---

## 6. ASCII wireframes

### 6.1 Route, 390px (dark shown; light identical in structure)

```
┌──────────────────────────────────────────┐ 390
│ ◆ Waypoint      [ − │Lv 14│ + ]   [≡ Menu]│ 56  sticky, opaque --sheet, 1px rule
├──────────────────────────────────────────┤
│ Gnome Warlock guide                      │ breadcrumb (link, 44px tap)
│ Leveling route                           │ H1 Texturina 600 30/33
│ Hub by hub, with the quests that matter. │ lede 17/26 ink-2
│ Tick each stop when you've done it.      │
│ Updated 29 Oct 2026                      │ facts dl (label bold / value)
│ Played in beta  Levels 1–30              │
│ Overview  [Route]  Talents, spells & d…▸ │ sub-nav 44, scrolls, fade edge
│──────────────────────────────────────────│
│ ┌ Good to know ┐                         │ callout label tab
│ │ Do the steps roughly in order. Copy a  │
│ │ waypoint and paste it in chat.         │
│ └────────────────────────────────────────│
│                                          │
│◆  [Lv 12–20] Loch Modan, Hall of Thanes  │ waystone: fel diamond (current)
│┃  & Redridge                             │ H2 Texturina 28
│┃  You are here, at level 14.             │
│┃  Zones: Loch Modan, Dun Morogh, …       │
│┃  ━━━━━━┄┄┄┄┄┄┄┄┄  3 of 12 done           │ mini meter
│┃  ▸ New talents and spells at levels…    │ details 48
│┃ ┌───────────────────────────────────────│ sheet: full-bleed, no radius
│●─│ !  Thelsamar quests   [Done]          │ done: filled ink node, folded
│┃ ├───────────────────────────────────────│
│◉─│ {flame} Imp quest: Tainted Memorandum →    │ NEXT: 30px fel node; title 19/26 700
│┃ │    Beginnings                         │ ({flame} = flame glyph, drawn SVG)
│┃ │ [Next step] [Lv 12–14] Class quest    │ facts row wraps
│┃ │ ⌖ Thelsamar, Loch Modan               │
│┃ │ [●●○ Beta-tested ▾]                   │ trust seal, 44 hit
│┃ │ Your first demon comes from a class   │ body 17/26 (~40 ch)
│┃ │ quest. Take the letter from …         │
│┃ │ Quests                                │ group label 14/700 ink-3
│┃ │ !  Tainted Memorandum                 │ name (quality colour, dotted)
│┃ │    From Sten Stoutarm                 │ detail 15 ink-3
│┃ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄    │ dashed rule
│┃ │ !  Beginnings                         │
│┃ │    Bring 3 Feather Charms to Alamar   │
│┃ │    [⌖ 28.6, 66.1 ⧉]                   │ coordinate button 44, own line
│┃ ├───────────────────────────────────────│
│○─│ {book} Train at level 14                   │ lit (fel ring), not next
│┃ │ [Lv 14] Train  ⌖ Ironforge            │
│┊ └───────────────────────────────────────│
│◇  [Lv 20–25] Succubus, Blackfathom Deeps…│ ahead: hollow stone, dashed line
│┊                                         │
│ … (page reserves 60 + 24 px at bottom)   │
├══════════════●┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┤ progress line on the bar's top edge
│ ⌃ 20 of 65 done           [⋯ More][▶ Next│ 60 fixed journey bar + safe area
│   Lv 12–20 Loch Modan, H…        step]   │ stops sheet ↑   more sheet ↑  primary
└──────────────────────────────────────────┘
 ┃ lit (fel)   │ travelled (ink)   ┊ ahead (dashed edge)   ◆ current waystone   ◇ ahead waystone
```

### 6.2 Route, 1280px

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ◆ Waypoint       Start here  [Warlock guide]  Bag advisor  Forever systems  Library books  Glossary   [−│Lv 14│+]  [◐ Auto] │ 64
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│   Gnome Warlock guide                                                                          │
│   Leveling route                                     (H1 Texturina 44)                         │
│   Hub by hub, with the quests that matter. Tick each stop when you've done it.  (≤62ch)        │
│   Updated 29 Oct 2026    Played in beta  Levels 1–30                                           │
│   Overview  [Route]  Talents, spells & demons  Professions & alts                              │
│   ───────────────────────────────────────────────────────────────────────────────────────────  │
│   ┌ rail 240 (sticky) ┐   gap 40    ┌ main 760 ────────────────────────────────────────────┐   │
│   │ ━━━━━┄┄┄┄┄ 20 of 65│             │ ┌ Good to know ┐ How to read this …                │   │
│   │ [▶ Next step     ] │        ◆    │ [Lv 12–20] Loch Modan, Hall of Thanes & Redridge     │   │
│   │ [Jump to my level] │        ┃    │ You are here, at level 14. Zones: Loch Modan, …      │   │
│   │ Hide done steps [○]│        ┃    │ ━━━━━━┄┄┄┄┄┄┄  3 of 12 done                           │   │
│   │ ▸ Move progress…   │        ┃    │ ▸ New talents and spells at levels 12–20              │   │
│   │                    │        ┃   ╭──────────────────────────────────────────────────────╮ │   │
│   │ Journey            │        ●───│ ! Thelsamar quests   [Done]                          │ │   │
│   │ ◆ Coldridge     6/6│        ┃   ├──────────────────────────────────────────────────────┤ │   │
│   │ ◆ Kharanos     11/11│       ◉───│ {flame} Imp quest: Tainted Memorandum → Beginnings         │ │   │
│   │ ◆ Loch Modan   3/12│ (fel)  ┃   │ [Next step] [Lv 12–14] Class quest ⌖ Thelsamar, Loch │ │   │
│   │ ◇ Blackfathom   0/9│        ┃   │ Modan  [●●○ Beta-tested ▾]                           │ │   │
│   │ ◇ Southshore    0/8│        ┃   │ Body text, ~64 characters per line …                 │ │   │
│   │ ◇ Stranglethorn 0/3│        ┃   │ Quests                                               │ │   │
│   │ ◇ … (11 stops)     │        ┃   │ !  Beginnings                       [⌖ 28.6, 66.1 ⧉] │ │   │
│   └────────────────────┘        ┃   │    Bring 3 Feather Charms to Alamar Grimm            │ │   │
│                                 ┃   │ People                                               │ │   │
│                                 ┃   │ {npc}  Alamar Grimm                     [⌖ 28.6, 66.2 ✓] │ │   │
│                                 ┃   │    Warlock trainer, Imp quest                        │ │   │
│                                 ○───├──────────────────────────────────────────────────────┤ │   │
│                                 ┃   │ {book} Train at level 14 …                                 │ │   │
│                                 ┊   ╰──────────────────────────────────────────────────────╯ │   │
│                                 ◇    [Lv 20–25] Succubus, Blackfathom Deeps & the Wetlands   │   │
│                                 ┊    ┌ Untested ┐ (only on brackets above level 30)          │   │
│                                                                                               │   │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ footer: How much to trust a fact (4 seals) · About · legal line                                │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(The ley line sits in a 56px gutter between rail and sheet. The sheet has a 1px rule border and 8px radius.)
```

### 6.3 Bag advisor, 390px

```
┌──────────────────────────────────────────┐ 390
│ ◆ Waypoint      [ − │Lv 14│ + ]   [≡ Menu]│ 56 sticky
├──────────────────────────────────────────┤
│ Bag advisor                              │ H1 Texturina
│ Bags fill up fast. Here's what to keep,  │ lede
│ sell, bank or buy at your level.         │
│ ┌ Rules of thumb ────────────────────────│ ONE sheet, 4 rows (not 4 cards)
│ │ ⊙→ Grey item? Sell it to any vendor.   │ verdict icon in its colour + bold lead-in
│ │ {bag} Quest letter? Keep it until done.    │
│ │ {bag} Cloth? Keep it. Tailoring eats it.   │
│ │ ⊙→ Mail or plate? You can't wear it.   │
│ └────────────────────────────────────────│
│ Search your bags                         │ visible label
│ [{search} Cloth, wand, crate…            ✕]    │ 48
│ [All categories      ⌄]  [■] Only my level│ 48 select + 44 switch row
├──────────────────────────────────────────┤ ← sticky under header when scrolled
│ [✓⊙→ Sell 12] [{bag} Keep 19] [→⊙ Buy 14] [{chest}…▸│ 44 chips, scroll, fade; pressed = solid fill + ✓
├──────────────────────────────────────────┤
│ Showing 3 of 78 items: Sell, level 14.   │ live status
│┌─────────────────────────────────────────│ full-bleed ledger sheet
││[⊙→ Sell   ]  Grey items (any)           │ stamp 92×32 + name 19/700 (q0)
││ [Lv 1–60] Junk  [●●● Official ▾]         │
││ Grey means junk. Any vendor pays coins   │ why 17/26
││ for it.                                  │
│├─────────────────────────────────────────│
││[→⊙ Buy    ]  Refreshing Spring Water     │ (q1 ink)
││ [Lv 5–15] Food & drink [●●○ Beta-tested▾]│
││ Drinking restores mana between fights.   │
││ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄    │
││ {npc} Innkeeper Belm   25c each              │ vendor ref row: name + price
││   Kharanos, Dun Morogh                   │
││   [⌖ 47.4, 52.5 ⧉]                       │ coordinate button, own line
│├─────────────────────────────────────────│
││[{bin} Destroy ]  Worn trainee gear          │
││ [Lv 10–60] Gear                          │
│└─────────────────────────────────────────│
│ (empty state: Good-to-know callout +     │
│  [Clear filters])                        │
└──────────────────────────────────────────┘
({name} markers and ⊙→ / →⊙ / ⌖ / ⧉ / ✓ in these wireframes stand for the hand-drawn SVG icons in section 5; no emoji or icon font ships.)
```

---

## 7. Voice and copy rules

1. **Sentence case for everything:** headings, buttons, tabs, table headers, labels, callout tabs ("Good to know", not "GOOD TO KNOW"). There are no ALL CAPS anywhere, including `th` (the current `th` uppercase rule goes).
2. **Plain, player-side words, defined once.** Use "My level", "Next step", "Copy /way", "Jump to my level", "Hide done steps", "Move progress to another device", "Untick everything". Jargon links to the glossary with the dotted `.term` underline the first time it appears on a page.
3. **Verbs on controls; one name per action.** If the button says "Next step", the bar, the rail and the hero continue-CTA all say "Next step"/"Continue: …". Copy says "Copy /way" and its toast says "Copied /way …". Backup says "Make backup code", then "Restore from code".
4. **No decorative typography in text:** no "→" appended to links or buttons (route step titles may contain "→" because it is data: quest A leads to quest B), no " · " meta strings (use commas, "in", line breaks or separate labelled facts), no "WORD — fragment" labels, no single accented word in a headline.
5. **Numbers:**
   - Level tags `Lv 12–20` (en dash, no spaces); prose "levels 12–20".
   - Counts "3 of 12 done"; compact rails "3/12".
   - Coordinates `28.6, 66.1`; the `/way` command keeps TomTom format (`/way Dun Morogh 28.6 66.1 Name`).
   - Money as in game: `1s 25c`.
   - Dates "29 Oct 2026"; times always with zone: "Wed 4 Nov 2026, 3:00 pm PST".
6. **Honest about certainty.** Confidence words are exactly Official, Beta-tested, Community and Theory. For untested content, say so once per bracket ("Nobody has played past level 30 yet…"), not on every line.
7. **Errors and empties give direction**, in the interface's voice, without apology. For example: "That code is for a different checklist. Make the code on this page." and "No items match "wand" at level 14. Clear the search or turn off Only my level."
8. **Flavour in one place.** World words are welcome where they are true: zone names, "waystone", the hero line "From Coldridge Valley to Mount Hyjal". Avoid lore-purple prose in UI ("Azeroth awaits, champion"). Keep the current site's plain "For you:" lines; they are the best copy on the site.
9. **Address the reader as "you".** Keep one action per sentence in steps (Blizzard's starter-guide pattern: **bold imperative lead-in.** then one sentence of detail).

---

## 8. What not to do

### 8.1 Brand-impersonation guardrails (fan site, not Blizzard)

- No Blizzard or WoW logos, the Forever medallion/lockup, the circled "W" emblem, Wowhead's logo or mascot, class crests or faction crests drawn to look official.
- No **Friz Quadrata**, Semplicita Pro, the Blizzard display face, brother-1816, and no lookalikes of the in-game UI face (flared glyphic caps such as Marcellus). No Cinzel-style tracked capitals.
- No gold-gradient or metallic headline lettering, bevels, ornate corner flourishes, scrollwork dividers, torn-parchment edges, pennant/banner graphics, or the starter guide's gold-fade copper divider.
- No game UI chrome: no stone/gold-trim frames, no action-bar or quest-log frame recreations, no in-game button art. The quest "!" is our own simple glyph, not the bevelled game art.
- No key art, screenshots, class or race renders, or Blizzard map art. The home road is drawn from our own data. The only Blizzard-derived imagery remains what Wowhead's `tooltips.js` serves on hover.
- No "World of Warcraft: Forever" lockup. Plain-text references and the footer disclaimer only.
- Do not imitate Wowhead's chrome either: no game-switcher strip, no illustrated nav tiles, no ad-shaped slots.

### 8.2 Generated-design tells we are explicitly not doing

- **Cream + high-contrast serif + terracotta (tell #1):** the light ground is ochre vellum `#e9dfc6` with night-navy ink. The display face is low-contrast textura-derived and limited to H1/H2. There is no terracotta.
- **Near-black + one acid accent (tell #2):** fel is a light source on 2–3 elements per screen. The UI accents are ink buttons and gold links. The navy has a functional reason (the tooltip family).
- **Broadsheet hairline/zero-radius columns (tell #3):** there is a radius hierarchy and a single-column reading measure.
- **SaaS card kit (tell #4):** no identical rounded cards, no one-radius-everywhere, no soft grey shadow under each card, no gradient washes (the progress bar is not a gradient).
- **Template chrome (tell #5):** no tracked ALL-CAPS eyebrows, no "A · B · C" meta, no "WORD — fragment", no monospace data labels, no "→" on links and buttons.
- **Numbered markers on non-sequences:** route steps are a real sequence and are marked by waymarks, not "01 / 02". No numbered decoration elsewhere.
- **Motion everywhere:** no entrance fade-ups, no hover lifts on cards, no shimmer, no pulsing glow. Only the ignite and state transitions.

### 8.3 Other don'ts (from the research and audit)

- No `opacity` for state (done or past); use `--ink-2`.
- No hue-only meaning: every quality, verdict, kind, confidence and difficulty mark carries a word or shape.
- No new hue that duplicates a quality colour on text links. `--class` is never used for items.
- No translucent or blurred sticky bars, and nothing under 44px for primary controls.
- No pills. No 12px or 13px text. No horizontal page scroll at 360px.
- No tables that clip columns on phones; stack them or provide a labelled scroll region.
- No hover-only information; the trust panel and tooltips must open on tap.
- No ads, floating video, link walls or `[edit]` chrome. No hero art that pushes the first useful action below the fold.

---

## 9. Implementation notes for the build node

**Order of work** (each step builds clean with `npx astro build`):
1. Tokens: `global.css` tokens, base and utilities. Retire `.pill`, `.eyebrow` and `.card` shadow; add `.tag`, `.num`, `.visually-hidden` (keep).
2. Base layout: `Base.astro` header, Menu, theme label, footer, the `main` padding owner, Google Fonts link swap, icon sprite or `Icon.astro`.
3. Components: `StepCard`, `RefItem` (coordinate button), `Trust` (Badge + Sources), `ChecklistBar` (journey bar), `PageHead`, `GuideNav`, `Callout` (optional component).
4. Route page: legs, waystones, journey rail/list, pager.
5. Bag advisor: ledger rows, rules of thumb, filter rail and sticky chips.
6. Tables (talents, systems, professions), timeline, glossary, library books, start, home hero road.

**Script deltas** (additive, contracts kept):
- `progress.ts`: set and clear `data-here`; re-render on `waypoint:level`; prefer `[data-here]` for resume; respect reduced motion in `scrollIntoView`.
- `copy.ts`: `data-state="copied"` when `[data-copy-icon]` exists (no `textContent` replacement); write to `#toast`.
- `theme.ts`: update the visible label, `aria-label` and icon.
- `level.ts`: unchanged. The stepper buttons dispatch `change` on `#my-level`.
- New `menu.ts`: header menu toggle, Esc and focus return.

**Verification checklist** (Playwright, both themes, 360/390/1280):
- `scrollWidth == clientWidth`.
- Every `button`, `summary` and `label.node` has a hit area ≥44×44.
- Contrast spot checks match section 3.9.
- Keyboard: tab through header → sub-nav → waymark → trust → coordinate button; the focus ring is never hidden under the header or journey bar.
- Reduced motion: no transitions.
- Real `tooltips.js` loaded: `a.q1` reads ink in light and `--q1` in dark; links keep the dotted underline.
- Ticking a step moves `data-here`, updates the line and keeps the existing localStorage keys (`waypoint:v1:*`).

**Open questions (to test, not guess):**
1. Do Wowhead's iconized links work inside a reserved 20px slot for bag item names, without shifting layout? If not, keep `iconizeLinks: false` site-wide.
2. Does `tooltips.js` offer a touch "peek" on real phones? If not, the trust and sources pattern (tap to open in place) is the model for an optional "item peek" later.
3. Texturina at 30px on low-DPI Windows: check H1 rendering; if it is too spiky, use weight 700 with opsz 72.
4. Home road label collisions on 11 stops at 390px: build-time layout may need 2-line labels for the long bracket names (use the short names already used in the rail).
