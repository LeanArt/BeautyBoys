# Waypoint design system: FINAL SPEC

**Name: Ley Line Atlas** (direction A as the base, with the second-screen ideas from direction B "Lantern Trail" grafted in).
Status: final, self-contained. An implementer can build everything from this file alone. Where this file disagrees with `direction-A.md` or `direction-B.md`, this file wins.

Repo: `/home/user/BeautyBoys` (branch `claude/design-system`). Stack stays Astro 5 + vanilla CSS custom properties + small vanilla TS. No CSS framework, no new npm packages, no icon library, no web fonts other than the two Google Fonts below. Do not commit, push or deploy as part of this work.

Judge evidence (reference only, not repo code):
- Merged prototype: `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/proto-final/route.html` + `tokens.css`
- Screens: `.../design/shots/judge/final-route-{360,390,1280}-{light,dark}.png`, `final-route-360-light-mid.png` (measured `scrollWidth == clientWidth` at 360, 390 and 1280 in both themes)
- Contrast calculator for every ratio in this file: `.../design/scripts/judge/contrast.py` (WCAG 2.x relative luminance)

---

## 0. Decision summary

### 0.1 Scores (1 to 10, higher is better)

| Criterion | A "Ley Line Atlas" | B "Lantern Trail" |
|---|---|---|
| 1. Beginner readability, scannable dense data | **8**. Fixed-slot ref rows with the coordinate on its own line on phones; verdict-first bag ledger; trust seal folds sources away. Fails: no "is this too hard for me?" cue on steps; kind glyph before the title eats title width. | **7**. Ladder words ("on level", "hard") and verb-first titles are great. Fails: role text squeezed beside the coordinate chip on phones (3 lines for "From Mountaineer Kadrell"); four tags per step; serif place labels inside data rows. |
| 2. Second screen / mobile mid-game | **7**. 44px waymarks, sticky journey bar. Fails: the bar has no next-step title or `/way`, so you still scroll to copy a waypoint; the lit state is a 3px line plus a node ring, weak at arm's length. | **9**. Bottom dock with the next step title and its `/way` chip; full-row lit "You are here"; opt-in compact view; 48px phone targets. Fails: toolbar wraps on phones; compact as phone default would hide explanations from first-timers. |
| 3. WoW ecosystem fit without impersonation | **8**. Tooltip-navy night, gold links, gold quest "!", waystones, textura-derived tome face (not Friz). No Blizzard chrome. | **8**. In-game difficulty ladder, quest "!"/"?" markers, gold links. Coin glyphs assume structured prices, but the data is free text ("1s 25c for 5 (Haunch)", "45s / 20g"). |
| 4. Distinctiveness (avoids generated tells) | **8**. The ley line is information (sequence, progress, position), used once and reused at every scale. Risk: ochre vellum + serif display brushes tell #1; navy + fel glow brushes tell #2 (mitigated below). | **6**. Cool grey day theme + white surfaces + amber primary reads as a generic docs/SaaS kit; a dashed vertical trail is close to a stock stepper; amber carries six meanings (link, primary, focus, now, you-are-here, active nav). |
| 5. Accessibility | **8**. Every pair computed; no opacity states; 3px focus ring. Fails: trust seal is a control but uses a decorative 1.5:1 border; sticky sideways chip row hides 3 of 7 verdicts at 390. | **8**. Explicit table roles for stacked tables, chips that wrap, live regions. Fails: "Ding" (+1 only) level control has no way down without typing; a second theme control is needed for the menu dialog. |
| 6. Implementation cost and risk in Astro + vanilla CSS | **6**. Respects the `querySelector` contract (one DOM per `[data-action]`). Costly: absolute-positioned waymarks, arc-length home road SVG, desktop popovers, `display: contents` menu, inline nav at 900px that does not fit. | **5**. Most new JS (dock, scroll-spy, compact view, details toggles, mark-before-level, menu `<dialog>`, theme radio group, sticky summary, milestone marker insertion). Two "Go to next step" buttons while `progress.ts` binds only the first match (contract break not addressed). |
| **Total** | **45** | **43** |

**Winner: A, Ley Line Atlas.** It has the stronger, subject-specific identity and better data slots; B wins the second-screen lens, so its best second-screen mechanics are grafted onto A's identity.

### 0.2 Grafted from B (and how they were adapted)

1. **Route dock = journey bar**: on phones the fixed bottom bar shows the next step's title (tap to scroll to it), the next step's `/way` coordinate button (tap to copy without scrolling) and one "Sections and options" button. The same element becomes the top of the sticky rail on desktop.
2. **Lit next-step row**: the next step gets a tinted row (`--lit`) with a 4px fel inset edge and a "Next step" flag above the title. B's amber is recoloured to A's fel, so fel keeps one meaning: your next good move.
3. **Quest-difficulty ladder** on route step level tags: a coloured dot plus a word ("too hard", "hard", "on level", "easy", "trivial") computed from My level. Only on route steps.
4. **Kind glyph inside the waymark node** (check replaces it when done) instead of a glyph before the title.
5. **Full | Compact view** (opt-in, remembered per checklist) with a per-step "Show details" toggle. Full is the default everywhere.
6. **A second "Mark done" target** at the end of an expanded step (a `<label for>` of the same checkbox).
7. **Menu lists the guide's sub-pages** (Overview, Route, Talents, Professions) so Route is one tap from the menu.
8. **Verdict chips wrap** (never scroll sideways); "Only my level" keeps the real checkbox, styled as a switch with `role="switch"`.
9. **Stacked two-line table records** on phones with explicit `role="table|row|columnheader|cell"`.
10. **Lifted night ground** (`#0f1424` became `#121a2d`, body text 13.7:1 instead of 14.5:1) for long night sessions and to sit further from the near-black tell.
11. Verb-first control copy: "Go to next step" (button) vs "Next step" (marker).

### 0.3 Judge fixes to A (conflicts resolved)

| Problem in A | Resolution here |
|---|---|
| Inline top nav from 900px needs ~1,110px (6 links + level + theme) | Inline nav from **1200px**; Menu panel below that. |
| Trust seal is interactive but drawn with `--rule` (1.5:1) | Trust seal border is `--edge` (≥3:1) plus `--raised` fill and a chevron; static seals keep `--rule`. |
| Waymarks absolutely positioned with `calc()` | Each step is a 2-column grid (`--ley-gutter` + content); the node and line live in column 1. |
| Desktop trust popover (clipping, positioning) | Trust panel always opens in flow, on its own line. |
| Home road as an arc-length SVG path | Home road is an `ol` of 11 stops styled as a ley line (CSS only), vertical on phones, horizontal from 900px. |
| "Use" verdict potion vs "Untested" flask glyph (two flasks, two meanings) | Untested uses a circled "?" glyph. |
| `progress.ts` binds the first `[data-action]` only | `progress.ts` binds **all** instances of each action (additive change); still one backup textarea. |
| Next step depended on `data-now` being set before `initProgress` runs | `progress.ts` computes "in my level range" itself from `getLevel()`. |
| Stops sheet "focus trapped" with zero JS | Sheets are non-modal disclosures (`<details>`), closed by summary/scrim tap, Esc, or link tap. No trap. |
| `iconizeLinks: false` proposal | Keep Wowhead icons on (`iconizeLinks: true`): the icon sits inside the name slot, so a late icon only shifts the name text, never the row. |
| Coin glyph prices (B) | Rejected: prices are free text. Print them as text in tabular figures. |

### 0.4 Rejected from B (with reason)

Cool grey day theme (generic); amber as the single interactive hue (overloaded, fights gold links); Alegreya place labels inside rows (mixes faces in scan lines); "Ding" +1-only level control (no minus); menu `<dialog>` plus duplicate theme radio group (more code for the same job); compact as phone default (hides explanations from first-time players); scroll-spy, "mark everything before my level", sticky bag summary bar, milestone "You" marker insertion (cost without a matching gain for v1; see section 13 "Later").

---

## 1. Concept

Waypoint is the pocket atlas a gnome warlock carries from Coldridge Valley to Mount Hyjal. Two materials swap places between themes: **night** (deep tooltip navy) and **vellum** (ochre map paper), written in **ink**, with **gold** links as on Wowhead and in game. Through it runs one inked route, the **ley line**: solid ink behind you, dashed ahead, lit with fel where your level is, and the **next step** glows.

**Signature element: the ley line.** One continuous 3px line down the left edge of the Route. Each step is a round **waymark** on the line, and the waymark is the checkbox. Each level bracket is a diamond **waystone**. The same line, smaller, is the progress meter, the journey list (sections), the milestone timeline and the home road. Nothing else gets boldness: every other surface is flat, quiet and dense.

**Principles**
1. **Glance first.** In two seconds at arm's length a player finds: what to do next, where it is (`/way`), and whether it is for their level. Those three get size, a fixed place (the dock) and fel.
2. **One meaning per hue.** Fel = your next good move (next step, lit stretch, tip, success). Gold = link (and quest "!", as in game). Ink = primary action and "done". Quality colours = item links only. Verdict colours = bag verdicts only. Confidence has no hue (pips + word).
3. **Shape says what it is.** Circles = places and progress on the map. 3px-radius stamps = static status. 5px-radius tools with a 44px target = things you press or type in. 8px paper = containers. No pills.
4. **Dense, not cramped.** 17px body, 19px step titles, 14px floor, 44px targets, rows instead of card grids.
5. **Night comfort.** No pure white text, no pure black ground, glow only on the lit line and next node, no blur, no gradient washes.

---

## 2. Tokens (`src/styles/global.css`)

Keep the three-path theme mechanism: `:root` = light; `@media (prefers-color-scheme: dark) { :root:not([data-theme='light']) {…} }` = system dark; `:root[data-theme='dark'] {…}` = forced dark. The two dark blocks are **identical**; both are written out in full below. Do not use `light-dark()` (older iOS Safari).

### 2.1 Complete token block (paste as the top of `global.css`, replacing the current tokens and the separate `--q*` blocks)

```css
/* ============================================================
   Waypoint tokens: "Ley Line Atlas"
   Light = day atlas (vellum + night ink). Dark = night atlas (navy + parchment ink).
   ============================================================ */
:root {
  /* Surfaces */
  --ground: #e9dfc6;          /* page */
  --sheet: #f5efe1;           /* reading surfaces: step sheets, ledger, tables, header, sheets */
  --raised: #fbf8f0;          /* inputs, buttons, chips, coordinate buttons, trust seals */
  --sunken: #e2d6b9;          /* kbd keycaps, inline code, waymark rail on sheets */
  --hover: #efe6d2;           /* hover layer */
  --pressed: #e4d8bd;         /* pressed layer */
  --lit: #e4e3ce;             /* the one "Next step" row (fel 9% into --sheet) */
  --scrim: rgb(28 35 55 / 45%);

  /* Lines */
  --rule: #d2c5a5;            /* decorative separators only (no contrast duty) */
  --edge: #80755d;            /* control boundaries and meaningful lines: >= 3:1 */

  /* Text */
  --ink: #1c2337;
  --ink-2: #363d54;           /* secondary text, done titles, travelled line */
  --ink-3: #55596a;           /* muted text; floor 4.8:1 on any surface */
  --on-ink: #f5efe1;          /* text on ink-filled primary buttons and toast */

  /* Links and focus */
  --link: #7a5200;
  --link-hover: #5c3d00;
  --focus: #1c2337;

  /* Fel: the signature light. ONLY for: lit line, next-step node/flag/row edge, Tip callout, success. */
  --fel: #346610;             /* text and fills */
  --fel-line: #3f7a14;        /* lit line, next-node ring, row edge */
  --fel-glow: transparent;    /* light theme: ink on paper, no glow */
  --on-fel: #f5efe1;

  /* Guide accent (per guide; Warlock now). Never item names, never site chrome. */
  --class: #4b45b5;

  /* Semantic */
  --info: #155f78;
  --warn: #984000;
  --danger: #b02a1e;
  --success: var(--fel);
  --on-color: #f5efe1;        /* text on any solid semantic or verdict fill */
  --tint: 12%;                /* tinted surface = color-mix(in srgb, X var(--tint), var(--sheet)) */

  /* Ley line states */
  --ley-travelled: var(--ink-2);
  --ley-ahead: var(--edge);
  --ley-lit: var(--fel-line);

  /* Confidence: monochrome ordinal pips; only Theory gets a colour */
  --conf-pip: var(--ink-2);
  --conf-theory: var(--warn);

  /* Bag verdicts (icon + word always; colour third) */
  --v-keep: #2a4c9a;
  --v-bank: #0d665a;
  --v-sell: #4b5263;
  --v-auction: #7a5200;
  --v-buy: #8f431c;
  --v-use: #9c2a78;
  --v-destroy: #b02a1e;

  /* Quest difficulty ladder ("con" colours): dot on route level tags + Start page teaching */
  --con-red: #b3261e;
  --con-orange: #984000;
  --con-yellow: #6b5900;
  --con-green: #1b691b;
  --con-grey: #5f5f5f;

  /* Wowhead item quality (tooltips.js colours links; we override per theme) */
  --q0: #5f5f5f;
  --q1: #1c2337;              /* "white" common becomes ink on vellum */
  --q2: #1d6b00;
  --q3: #0052a6;
  --q4: #7a1fb5;
  --q5: #9a4100;

  /* Typography */
  --font-display: 'Texturina', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif;
  --font-body: 'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --fs-xs: 0.875rem;                                   /* 14: tags, group labels, captions (floor) */
  --fs-sm: 0.9375rem;                                  /* 15: secondary lines, nav, facts, detail lines */
  --fs-table: 1rem;                                    /* 16: table cells, ref names */
  --fs-md: 1.0625rem;                                  /* 17: body, inputs */
  --fs-lg: 1.1875rem;                                  /* 19: step titles, item names, glossary terms, lede >= 600 */
  --fs-xl: 1.375rem;                                   /* 22: H3 on prose pages */
  --fs-2xl: clamp(1.5rem, 1.25rem + 1.2vw, 1.75rem);   /* 24-28: H2, waystone titles (display) */
  --fs-3xl: clamp(1.875rem, 1.4rem + 2.2vw, 2.75rem);  /* 30-44: H1 (display) */
  --fs-hero: clamp(2.25rem, 1.5rem + 3.6vw, 3.75rem);  /* 36-60: home hero (display) */
  --lh-tight: 1.1; --lh-head: 1.2; --lh-title: 1.35; --lh-body: 1.55;

  /* Spacing (4px grid) */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px; --sp-5: 20px; --sp-6: 24px;
  --sp-8: 32px; --sp-10: 40px; --sp-12: 48px; --sp-16: 64px; --sp-20: 80px;
  --section-gap: var(--sp-12);                         /* 64px from 900px */

  /* Layout */
  --gutter: 16px;                                      /* 24 >= 600, 32 >= 1200 */
  --measure: 66ch;
  --page-max: 1200px;
  --main-max: 760px;
  --rail-w: 240px;
  --rail-gap: 40px;
  --header-h: 56px;                                    /* 64 >= 900 */
  --jbar-h: 64px;                                      /* phone dock height, + safe area */
  --jbar-safe: 0px;                                    /* set on checklist pages < 900 (see 6.1) */

  /* Radii: only places on the map are round */
  --r-tag: 3px;      /* level tags, trust seals, verdict stamps, keycaps, callout label */
  --r-ctl: 5px;      /* buttons, inputs, chips, coordinate buttons, callouts */
  --r-sheet: 8px;    /* sheets >= 600, menu panel, bottom sheet top corners, cards */
  --r-node: 50%;     /* waymarks, progress node, pips, road stops */

  /* Borders and focus */
  --bw-hair: 1px; --bw-strong: 2px; --ley-w: 3px;
  --focus-w: 3px; --focus-offset: 2px;

  /* Elevation: flat; only overlays lift */
  --elev-pop: 0 1px 2px rgb(28 35 55 / 20%), 0 10px 28px rgb(28 35 55 / 18%);

  /* Component sizes */
  --hit: 44px;
  --input-h: 48px;                                     /* 44 >= 900 */
  --ley-gutter: 48px;                                  /* rail column of every route row; line centre at 24px */
  --node: 30px;                                        /* waymark ring */
  --node-next: 34px;
  --stone: 22px;                                       /* waystone diamond */
  --icon-sm: 16px; --icon: 20px; --icon-lg: 24px;

  /* Motion */
  --dur-press: 80ms; --dur-quick: 140ms; --dur-base: 220ms; --dur-ley: 480ms;
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);

  /* Z-index */
  --z-node: 1; --z-header: 30; --z-jbar: 40; --z-menu: 45; --z-toast: 70; --z-skip: 100;

  color-scheme: light;
}

/* Night atlas. KEEP THIS BLOCK AND THE NEXT ONE IDENTICAL. */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --ground: #121a2d; --sheet: #19213a; --raised: #212a48; --sunken: #0c1120;
    --hover: #263052; --pressed: #2d385d; --lit: #24303d; --scrim: rgb(4 6 12 / 65%);
    --rule: #323d60; --edge: #717ca0;
    --ink: #ece4cf; --ink-2: #cbc2ac; --ink-3: #a69e8b; --on-ink: #121a2d;
    --link: #e9c46a; --link-hover: #f5d88e; --focus: #e9c46a;
    --fel: #a6dc5c; --fel-line: #a6dc5c; --fel-glow: rgb(166 220 92 / 40%); --on-fel: #121a2d;
    --class: #a5a3ff;
    --info: #72c8e6; --warn: #f2a65a; --danger: #ff8a7a; --on-color: #121a2d; --tint: 14%;
    --v-keep: #8fb0ff; --v-bank: #5fd0bd; --v-sell: #c5ccd8; --v-auction: #e9c46a;
    --v-buy: #eba27c; --v-use: #f08bcf; --v-destroy: #ff8a7a;
    --con-red: #ff6b5e; --con-orange: #ff9f43; --con-yellow: #f2df4b; --con-green: #5fd35a; --con-grey: #9a9a9a;
    --q0: #9d9d9d; --q1: #f3eee2; --q2: #1eff00; --q3: #4aa3ff; --q4: #c27cf7; --q5: #ff8000;
    --elev-pop: 0 0 0 1px #323d60, 0 12px 32px rgb(0 0 0 / 55%);
    color-scheme: dark;
  }
}
:root[data-theme='dark'] {
  --ground: #121a2d; --sheet: #19213a; --raised: #212a48; --sunken: #0c1120;
  --hover: #263052; --pressed: #2d385d; --lit: #24303d; --scrim: rgb(4 6 12 / 65%);
  --rule: #323d60; --edge: #717ca0;
  --ink: #ece4cf; --ink-2: #cbc2ac; --ink-3: #a69e8b; --on-ink: #121a2d;
  --link: #e9c46a; --link-hover: #f5d88e; --focus: #e9c46a;
  --fel: #a6dc5c; --fel-line: #a6dc5c; --fel-glow: rgb(166 220 92 / 40%); --on-fel: #121a2d;
  --class: #a5a3ff;
  --info: #72c8e6; --warn: #f2a65a; --danger: #ff8a7a; --on-color: #121a2d; --tint: 14%;
  --v-keep: #8fb0ff; --v-bank: #5fd0bd; --v-sell: #c5ccd8; --v-auction: #e9c46a;
  --v-buy: #eba27c; --v-use: #f08bcf; --v-destroy: #ff8a7a;
  --con-red: #ff6b5e; --con-orange: #ff9f43; --con-yellow: #f2df4b; --con-green: #5fd35a; --con-grey: #9a9a9a;
  --q0: #9d9d9d; --q1: #f3eee2; --q2: #1eff00; --q3: #4aa3ff; --q4: #c27cf7; --q5: #ff8000;
  --elev-pop: 0 0 0 1px #323d60, 0 12px 32px rgb(0 0 0 / 55%);
  color-scheme: dark;
}

/* Breakpoint-scoped tokens (custom properties cannot be used inside @media; these are literal) */
@media (min-width: 600px)  { :root { --gutter: 24px; } }
@media (min-width: 900px)  { :root { --header-h: 64px; --input-h: 44px; --section-gap: var(--sp-16); } }
@media (min-width: 1200px) { :root { --gutter: 32px; } }

/* Reduced motion: every duration collapses; state changes still happen; static glows stay */
@media (prefers-reduced-motion: reduce) {
  :root { --dur-press: 0ms; --dur-quick: 0ms; --dur-base: 0ms; --dur-ley: 0ms; }
  *, *::before, *::after { transition-duration: 0ms !important; animation-duration: 0ms !important; }
}
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

/* Wowhead quality overrides: tooltips.js colours links, our tokens win per theme */
a.q0 { color: var(--q0) !important; } a.q1 { color: var(--q1) !important; }
a.q2 { color: var(--q2) !important; } a.q3 { color: var(--q3) !important; }
a.q4 { color: var(--q4) !important; } a.q5 { color: var(--q5) !important; }
/* Every Wowhead link stays recognisable as a link whatever its quality colour (q0 grey, q1 ink) */
a[href*='wowhead.com'] { text-decoration-line: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
```

### 2.2 Temporary aliases (migration only; delete in the last step, see checklist 12.12)

```css
:root {
  --bg: var(--ground); --surface: var(--sheet); --surface-2: var(--raised);
  --text: var(--ink); --muted: var(--ink-3); --border: var(--rule);
  --accent: var(--link); --gold: var(--link); --radius: var(--r-sheet); --radius-sm: var(--r-ctl);
  --max: var(--page-max);
}
```
They let every page keep building while it is converted. `--accent-soft`, `--fel-soft`, `--gold-soft`, `--danger-soft`, `--info-soft`, `--shadow`, `--font-mono` are **not** aliased: each use must be rewritten (grep for them; the build will not fail, but the styles will be wrong).

### 2.3 Migration map (old token to new)

| Old | New |
|---|---|
| `--bg` | `--ground` |
| `--surface` | `--sheet` |
| `--surface-2` | `--raised` (fields, buttons) or `--sunken` (kbd, code, tracks) |
| `--text` | `--ink` |
| `--muted` | `--ink-3` (meta, detail lines) or `--ink-2` (secondary copy) |
| `--border` | `--rule` (decoration) or `--edge` (every control boundary) |
| `--accent` | split: links `--link`; primary buttons and active nav `--ink`; class markers `--class` |
| `--accent-soft`, `--fel-soft`, `--gold-soft`, `--danger-soft`, `--info-soft` | `color-mix(in srgb, <colour> var(--tint), var(--sheet))` |
| `--fel` | `--fel` (signature only; no longer "Buy/Use") |
| `--gold` | `--link` (money, quest) or `--warn` (warnings) |
| `--danger`, `--info`, `--focus` | same names, new values |
| `--shadow` | none (cards are flat); `--elev-pop` for overlays only |
| `--radius` / `--radius-sm` | `--r-sheet` / `--r-ctl` (plus `--r-tag`, `--r-node`) |
| `--font-mono` | removed (no monospace anywhere) |
| `--max` | `--page-max` / `--main-max` |
| `--q0..--q5` | same names, new values (keep the `a.q* !important` rule) |

### 2.4 Contrast (computed; text needs 4.5:1, non-text 3:1)

Surfaces: ground / sheet / raised / lit.

| Foreground | Light | Dark |
|---|---|---|
| `--ink` body | 11.8 / 13.6 / 14.7 / 12.0 | 13.7 / 12.5 / 11.1 / 10.6 |
| `--ink-2` secondary | 8.1 / 9.4 / 10.1 / 8.3 | 9.8 / 9.0 / 8.0 / 7.6 |
| `--ink-3` muted (also 4.8 light / 7.1 dark on sunken) | 5.2 / 6.1 / 6.5 / 5.4 | 6.5 / 6.0 / 5.3 / 5.0 |
| `--link` | 5.2 / 6.0 / 6.5 / 5.3 | 10.4 / 9.5 / 8.4 / 8.0 |
| `--fel` text | 5.2 / 6.0 / 6.5 / 5.3 | 10.7 / 9.9 / 8.7 / 8.3 |
| `--class` | 5.6 / 6.5 / 7.0 / 5.7 | 7.7 / 7.0 / 6.2 / 5.9 |
| `--info` / `--warn` / `--danger` on sheet | 6.2 / 6.0 / 5.7 | 8.4 / 7.9 / 6.9 |
| q0 / q1 / q2 / q3 / q4 / q5 on ground | 4.8 / 11.8 / 5.0 / 5.7 / 5.9 / 5.1 | 6.4 / 15.0 / 12.7 / 6.6 / 6.2 / 6.9 |
| q0 / q1 / q2 / q3 / q4 / q5 on lit (worst row) | 4.9 / 12.0 / 5.1 / 5.9 / 6.0 / 5.2 | 4.9 / 11.6 / 9.8 / 5.1 / 4.8 / 5.3 |
| con red / orange / yellow / green / grey on sheet | 5.7 / 6.0 / 6.0 / 5.9 / 5.6 | 5.7 / 7.8 / 11.7 / 8.3 / 5.7 |
| `--on-ink` on `--ink` (primary button, toast) | 13.6 (hover mix 9.7) | 13.7 (hover mix 10.9) |
| `--on-fel` on `--fel` ("Next step" flag) | 6.0 | 10.7 |
| `--on-color` on info / warn / danger / fel (callout labels) | 6.2 / 6.0 / 5.7 / 6.0 | 9.2 / 8.6 / 7.6 / 10.7 |
| `--ink` on info / warn / danger / fel tint (callout body) | 11.4 / 11.4 / 11.3 / 11.5 | 9.4 / 9.6 / 9.9 / 9.2 |
| `--link` on any callout tint | 5.0 to 5.1 | 6.9 to 7.5 |
| verdict text on own tint: keep, bank, sell, auction, buy, use, destroy | 5.8, 5.0, 5.7, 5.1, 5.1, 5.0, 4.7 | 5.6, 6.3, 7.1, 7.0, 5.8, 5.5, 5.5 |
| `--on-color` on solid verdict fill (pressed chip), same order | 7.0, 6.0, 6.8, 6.0, 6.1, 6.1, 5.7 | 8.1, 9.3, 10.7, 10.4, 8.2, 7.7, 7.6 |
| Non-text: `--focus` vs ground / sheet / raised / lit | 11.8 / 13.6 / 14.7 / 12.0 | 10.4 / 9.5 / 8.4 / 8.0 |
| Non-text: `--edge` vs ground / sheet / raised / sunken / hover | 3.4 / 4.0 / 4.3 / 3.1 / 3.7 | 4.2 / 3.9 / 3.4 / 4.6 / 3.1 |
| Non-text: `--fel-line` (lit line, next ring) vs ground / sheet / lit | 4.0 / 4.6 / 4.0 | 10.7 / 9.9 / 8.3 |
| Non-text: travelled line `--ink-2` vs ground | 8.1 | 9.8 |
| Decorative (no duty): sheet vs ground; rule vs sheet | 1.16; 1.49 | 1.09; 1.49 |

Rules that keep these true: never put `--rule` as the only edge of a control; never use `opacity` for done or past; never use a quality colour outside a link; the lit row is the only surface that takes `--lit`.

---

## 3. Typography

### 3.1 Fonts (Base.astro `<head>`; replaces the Spectral link)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,400..700;1,400..700&family=Texturina:opsz,wght@12..72,600..700&display=swap" rel="stylesheet" />
```
(Verified: renders in the judge prototype.)

| Family | Role | Never |
|---|---|---|
| **Texturina** 600/700, optical size auto | H1, H2 (including waystone/bracket titles), wordmark, home hero H1 | body, step titles, labels, tables, buttons |
| **Atkinson Hyperlegible Next** 400/600/700 (+ italics) | everything else: body, UI, data, coordinates, step titles, H3/H4, tables | — |

No monospace anywhere (coordinates, `/way`, backup code and keycaps use Atkinson with tabular figures). Do not use Friz Quadrata, Semplicita Pro, brother-1816, Cinzel-style tracked capitals or any flared-glyphic "in-game UI" lookalike.

### 3.2 Scale

| Token | px / line-height | Weight | Face | Use |
|---|---|---|---|---|
| `--fs-hero` | 36–60 / 1.05 | 700 | Texturina | home hero H1 only |
| `--fs-3xl` | 30–44 / 1.1 | 600 | Texturina | H1 (letter-spacing -0.005em) |
| `--fs-2xl` | 24–28 / 1.15 | 600 | Texturina | H2, bracket titles |
| `--fs-xl` | 22 / 1.25 | 700 | Atkinson | H3 on prose pages |
| `--fs-lg` | 19 / 1.35 | 700 | Atkinson | step title, bag item name, glossary term; lede (400) from 600px |
| `--fs-md` | 17 / 1.55 | 400 | Atkinson | body, inputs (≥16 avoids iOS zoom) |
| `--fs-table` | 16 / 1.45 | 400/700 | Atkinson | table cells, ref names |
| `--fs-sm` | 15 / 1.45 | 400/600/700 | Atkinson | nav, facts rows, ref detail lines, breadcrumbs, buttons, coordinate text |
| `--fs-xs` | 14 / 1.4 | 600/700 | Atkinson | tags, trust seals, group labels ("Quests"), callout labels, fine print |

Rules:
- **Sentence case everywhere.** No `text-transform: uppercase`, no letter-spacing on labels or table headers (the current `th` uppercase rule is deleted).
- Hierarchy by size **and** weight: display 600 vs body 400; titles 700.
- Prose max `--measure` (66ch); lede max 62ch; step body max 64ch.
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on `p` (progressive enhancement).
- `.num { font-variant-numeric: tabular-nums lining-nums; }` on levels, counts, coordinates, prices, dates, ranks. Coordinates shown as `28.6, 66.1` (one decimal, comma + space). Atkinson Next's slashed zero stays on purpose (it cannot be turned off; it makes `30.0` unambiguous).
- `kbd`: Atkinson 700 `--fs-sm`, `--sunken` background, 1px `--edge` border with a 2px bottom border, `--r-tag`, padding 1px 6px.
- `code` (e.g. `/way`, `/ttpaste`): Atkinson 700, `--sunken` background, `--r-tag`, padding 1px 5px, no border. Not monospace.

---

## 4. Layout, radii, elevation, focus, breakpoints

### 4.1 Breakpoints (mobile first; literal values in `@media`)

| Name | Min width | What changes |
|---|---|---|
| floor | 360 | Everything works, no horizontal scroll. Below 400: Menu button icon-only, "Lv" prefix visually hidden. |
| `sm` | 600 | Gutter 24. Ref rows go to 3 columns (coordinate button right). Tables are real tables (stacked records below). Step sheets get side borders and radius. Glossary letter row shows. |
| `md` | 900 | Header 64. Inputs 44. Route, Library books and Bag advisor get the left rail (240px + 40px gap). The dock moves into the rail. |
| `lg` | 1200 | Gutter 32. **Inline top nav**, Menu button hidden. Prose pages get the "On this page" left rail. |

### 4.2 Page grid (owned by `Base.astro`)

- One spacing owner for `main` (fixes the footer collision):
  `main#main { max-width: var(--page-max); margin-inline: auto; padding: var(--sp-6) var(--gutter) calc(var(--sp-16) + var(--jbar-safe)); }` (top padding 32px from 900px). `main` no longer carries `.wrap`.
- `main#main` is a grid with three areas filled by Base slots: `head` (full width), `rail` (optional), default body.
  - Without a rail: one column; `.page-body { max-width: var(--main-max); }` unless the page passes `wide`.
  - With a rail: at the rail breakpoint, `grid-template-columns: var(--rail-w) minmax(0, var(--main-max)); column-gap: var(--rail-gap);` left-aligned; the rail stretches to the full body height (`align-self: stretch`) so its sticky child can move. Below the breakpoint the rail stacks above the body (in flow).
- Everything is left-aligned (H1, hero, callouts). Nothing is centred except icons inside buttons.
- `.wrap` (header and footer inner): `max-width: var(--page-max); margin-inline: auto; padding-inline: var(--gutter);`.
- Headings: `scroll-margin-top: calc(var(--header-h) + 16px)`. `html { scroll-padding-top: calc(var(--header-h) + 16px); }`; checklist pages below 900 also `scroll-padding-bottom: calc(var(--jbar-h) + 16px)` so focus is never hidden under the dock.

### 4.3 Radii

| Token | Value | Use |
|---|---|---|
| `0` | 0 | ley line, table cells, rules |
| `--r-tag` | 3px | level tags, trust seals, verdict stamps, keycaps, inline code, callout label |
| `--r-ctl` | 5px | buttons, inputs, selects, chips, coordinate buttons, callouts |
| `--r-sheet` | 8px | step sheets ≥600, cards, menu panel, bottom sheet top corners, table wrapper |
| `--r-node` | 50% | waymarks, progress node, confidence pips, road stops, switch knob |

The pill shape (`999px`) is retired. Nothing is a pill (the switch track is the one exception: a 40×24 track with 12px radius, because a switch must read as a switch).

### 4.4 Elevation and borders

- **Flat by default.** Surfaces separate by tone plus 1px `--rule`. No card shadows, no hover lifts.
- `--elev-pop` only on: menu panel, bottom sheet, toast.
- Header and dock are **opaque** `--sheet` with a 1px `--rule` edge. No `backdrop-filter`, no translucency.
- `--rule` for decoration; `--edge` for every form control, button, chip, trust seal, the ahead line and table header underline (2px).

### 4.5 Focus

`:focus-visible { outline: var(--focus-w) solid var(--focus); outline-offset: var(--focus-offset); }` everywhere. Waymarks: `.check input:focus-visible + .ring { outline: 3px solid var(--focus); outline-offset: 3px; }`. `summary:focus-visible` gets the same ring. Never `outline: none` without a replacement.

### 4.6 Motion

| Token | Value | Use |
|---|---|---|
| `--dur-press` | 80ms | pressed background on buttons/chips |
| `--dur-quick` | 140ms | colour/border on hover; check glyph appears; copy state |
| `--dur-base` | 220ms | menu panel and bottom sheet enter (opacity + 8px translate); exit 150ms |
| `--dur-ley` | 480ms | **the ignite**, the only orchestrated moment |

**The ignite:** when a waymark is ticked, the ring fills (`--dur-quick`) and the travelled overlay of that step's line segment scales from 0 to 1 (`.step::after`, `transform: scaleY(0 → 1)`, origin top, `--dur-ley`, `--ease-out`). The "Next step" marker moves instantly. The transition is only enabled after the first render (`html.ley-ready`) so steps that load already ticked do not animate. Nothing else animates on its own: no entrance fades, no card hovers, no pulsing glow, no shimmer. Transform and opacity only. Under reduced motion all durations are 0 and `scrollIntoView` uses `behavior: 'auto'`.

### 4.7 Z-index

waymark node 1 · header 30 · dock 40 · menu panel + scrim 45 · toast 70 · skip link 100. Wowhead's tooltip uses its own very high z-index and must stay above ours; never set anything above 1000.

---

## 5. Icons (hand-drawn inline SVG only)

**Style:** 24×24 viewBox, `fill: none`, `stroke: currentColor`, round caps and joins, stroke 1.75 at 20/24px and 2 at 16px, no gradients. Filled parts only where noted (`fill="currentColor" stroke="none"`). All drawn for Waypoint; no icon library, no game art.

**Delivery:** `src/components/Icons.astro` renders one hidden sprite once in `Base.astro`:
`<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="i-NAME" viewBox="0 0 24 24">…</symbol>…</svg>`.
`src/components/Icon.astro` (props `name`, `size?: 16 | 20 | 24` default 20, `label?: string`, `class?`) renders `<svg class="i s{size}" …><use href="#i-NAME" /></svg>`; `aria-hidden="true"` unless `label` is given (then `role="img" aria-label={label}`).

```css
svg.i { width: var(--icon); height: var(--icon); flex: none; fill: none; stroke: currentColor;
        stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; vertical-align: middle; }
svg.i.s16 { width: var(--icon-sm); height: var(--icon-sm); stroke-width: 2; }
svg.i.s24 { width: var(--icon-lg); height: var(--icon-lg); }
```

| id | Use | Path data |
|---|---|---|
| `mark` | brand, favicon | `M12 1.5v21` (stroke 2) + filled `M12 6.5l5 5.5-5 5.5-5-5.5z` |
| `signpost` | kind: travel | `M12 21.5V2.5` · `M5 5h11l3 2.5-3 2.5H5z` · `M19 12.5H8l-3 2.5 3 2.5h11z` |
| `quest` | kind: quests; quest refs ("!") | filled `M10.4 3.5h3.2l-.7 11.2h-1.8z` + filled `<circle cx="12" cy="19" r="1.8"/>` |
| `turnin` | quest turn-in ("?"), future data | `M8.8 8.6a3.3 3.3 0 1 1 4.9 2.9c-1 .6-1.7 1.3-1.7 2.5v.8` (stroke 2.5) + filled circle (12,19) r1.8 |
| `flame` | kind: class (warlock quest/demon) | `M12 21.5c-3.6 0-6.5-2.6-6.5-6.3 0-3.6 3-5.6 3.7-8.7 1.5 1.2 2 2.7 2 4.2 1.5-.9 2.6-3.3 2.3-6.2 3.3 2 5.5 6 5.5 10.2 0 3.9-3 6.8-7 6.8z` |
| `book` | kind: train; library books | `M3.5 5.5c2.8-1.2 5.8-1.2 8.5.6 2.7-1.8 5.7-1.8 8.5-.6v13.4c-2.8-1.1-5.8-1.1-8.5.6-2.7-1.7-5.7-1.7-8.5-.6z` · `M12 6.1v13.4` |
| `gate` | kind: dungeon (portcullis arch) | `M5 21V10.5a7 7 0 0 1 14 0V21` · `M3 21h18` · `M9 21v-7.5M12 21v-9M15 21v-7.5` |
| `anvil` | kind: profession | `M3.5 7.5h12.5a4.5 4.5 0 0 0 4.5 4.5l-4.5 1-1.5 2.5h-6l-1.5-2.5A3.5 3.5 0 0 1 3.5 9.5z` · `M9 15.5 8 20.5h8l-1-5` |
| `rune` | kind: Forever system | `<circle cx="12" cy="12" r="9"/>` · `M12 5.5l1.7 4.8 4.8 1.7-4.8 1.7L12 18.5l-1.7-4.8L5.5 12l4.8-1.7z` |
| `coin` | kind: shopping | `<circle cx="12" cy="12" r="8.5"/>` · `<circle cx="12" cy="12" r="5"/>` |
| `lantern` | kind: tip; Tip callout | `M12 2v2.5M9 4.5h6` · `M8 7.5h8l-.8 11H8.8z` · `M7 21h10` · `M12 11.5c1 1 1.3 2 0 3.5-1.3-1.5-1-2.5 0-3.5z` |
| `star` | kind: milestone | `M12 3.5l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.8l-5.4 2.9 1.2-5.9L3.4 9.7l6-.7z` |
| `pin` | place in facts rows | `M12 21.5s-6.5-6.4-6.5-11.5a6.5 6.5 0 0 1 13 0c0 5.1-6.5 11.5-6.5 11.5z` · `<circle cx="12" cy="10" r="2.3"/>` |
| `person` | NPC and vendor refs | `<circle cx="12" cy="8" r="3.6"/>` · `M4.8 20.5c.9-3.9 3.7-6 7.2-6s6.3 2.1 7.2 6` |
| `pouch` | item refs | `M7 8V6a5 5 0 0 1 10 0v2` · `M4.5 8h15l-1.2 12.5H5.7z` |
| `crosshair` | coordinate button | `<circle cx="12" cy="12" r="6.5"/>` · `M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5` |
| `copy` | copy affordance | `<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="1.5"/>` · `M15.5 8.5V5.5A1.5 1.5 0 0 0 14 4H5.5A1.5 1.5 0 0 0 4 5.5V14a1.5 1.5 0 0 0 1.5 1.5h3` |
| `check` | done, copied, pressed chip | `M5 12.5l4.5 4.5L19 7.5` |
| `next` | Go to next step | `<circle cx="12" cy="12" r="8.5"/>` + filled `M10.5 8.5l4 3.5-4 3.5z` |
| `keep` | verdict | `M6 6.5h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 18 20.5H6A1.5 1.5 0 0 1 4.5 19V8A1.5 1.5 0 0 1 6 6.5z` · `M9 6.5 7.5 3.5h9L15 6.5` · `M9.5 14l2 2 3.5-3.5` |
| `bank` | verdict (domed chest) | `M3.5 10a8.5 5.5 0 0 1 17 0v10h-17z` · `M3.5 13.5h17` · `M10.5 12h3v3h-3z` |
| `sell` | verdict (coin stack) | `M5 7.5a7 2.5 0 1 0 14 0a7 2.5 0 1 0-14 0` · `M5 7.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4` · `M5 11.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4` |
| `auction` | verdict (gavel) | `M13.6 3.2l6.4 6.4-2.6 2.6L11 5.8z` · `M14.3 9 5 18.3` · `M3 21h9` |
| `buy` | verdict (basket) | `M3.5 9.5h17l-1.8 9.5a1.5 1.5 0 0 1-1.5 1.2H6.8a1.5 1.5 0 0 1-1.5-1.2z` · `M8 9.5l3-5.5M16 9.5l-3-5.5` · `M9 13v4M15 13v4` |
| `use` | verdict (potion) | `M9.5 3h5M10.5 3v5.5L5.6 17A2.8 2.8 0 0 0 8 21h8a2.8 2.8 0 0 0 2.4-4l-4.9-8.5V3` · `M7.5 14.5h9` |
| `destroy` | verdict (bin) | `M4 7h16M9.5 7V4h5v3M6 7l1 13.5h10L18 7` · `M10 11v6M14 11v6` |
| `info` | Good to know callout | `<circle cx="12" cy="12" r="9"/>` · `M12 11v6` · `M12 7.5h.01` (stroke 2.5) |
| `warn` | Careful callout | `M12 3.5l9 16H3z` · `M12 10v4.5` · `M12 17.5h.01` (stroke 2.5) |
| `danger` | Danger callout (octagon) | `M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z` · `M12 8v5` · `M12 16.5h.01` (stroke 2.5) |
| `unknown` | Untested callout (circled "?") | `<circle cx="12" cy="12" r="9"/>` · `M9.5 9.2a2.6 2.6 0 1 1 3.7 2.4c-.8.4-1.2 1-1.2 1.9v.5` · `M12 17h.01` (stroke 2.5) |
| `menu` / `close` | header | `M4 7h16M4 12h16M4 17h16` / `M6 6l12 12M18 6L6 18` |
| `list` | Sections and options | `M9 7h11M9 12h11M9 17h11` · `M4.5 7h.01M4.5 12h.01M4.5 17h.01` (stroke 3) |
| `chevron-down/up/left/right` | disclosures, pager | `M6 9.5l6 6 6-6` / `M6 14.5l6-6 6 6` / `M14.5 6l-6 6 6 6` / `M9.5 6l6 6-6 6` |
| `minus` / `plus` | level stepper | `M5 12h14` / `M12 5v14M5 12h14` |
| `search` | search fields | `<circle cx="10.5" cy="10.5" r="6.5"/>` · `M15.5 15.5 21 21` |
| `sun` / `moon` / `auto` | theme | `<circle cx="12" cy="12" r="4"/>` · `M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4` / `M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z` / `<circle cx="12" cy="12" r="8.5"/>` + filled `M12 3.5a8.5 8.5 0 0 1 0 17z` |
| `external` | external links (sources, report) | `M14 4h6v6M20 4l-9 9` · `M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5` |
| `flag` | Report a problem | `M5 21V4` · `M5 4h11l-2 4 2 4H5` |

Check every glyph at 16px in both themes before shipping (the B team found coin-with-arrow glyphs read as other symbols at 16px; that is why Sell is a coin stack and Buy a basket). Meaningful icons sit at ≥3:1 (`--ink-3` 4.8–7.1; verdict colours ≥6.2 on raised). A word always accompanies an icon, so no icon carries meaning alone. Replace `public/favicon.svg` with the `mark` glyph in `#3f7a14` on a `#f5efe1` rounded square (light) — a single static favicon is fine.

---

## 6. Global base and shared primitives (in `global.css`)

### 6.1 Base

```css
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-padding-top: calc(var(--header-h) + 16px); }
body { margin: 0; background: var(--ground); color: var(--ink); font: 400 var(--fs-md)/var(--lh-body) var(--font-body); overflow-x: hidden; }
h1, h2 { font-family: var(--font-display); font-weight: 600; text-wrap: balance; margin: 0; }
h1 { font-size: var(--fs-3xl); line-height: var(--lh-tight); letter-spacing: -0.005em; }
h2 { font-size: var(--fs-2xl); line-height: 1.15; margin: var(--section-gap) 0 var(--sp-3); }
h3 { font: 700 var(--fs-xl)/1.25 var(--font-body); margin: var(--sp-8) 0 var(--sp-2); text-wrap: balance; }
h4 { font: 700 var(--fs-lg)/1.35 var(--font-body); margin: var(--sp-6) 0 var(--sp-2); }
h1, h2, h3, h4, [id] { scroll-margin-top: calc(var(--header-h) + 16px); }
p { text-wrap: pretty; }
p, ul, ol, dl { margin: 0 0 var(--sp-4); }
a { color: var(--link); text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { color: var(--link-hover); text-decoration-thickness: 2px; }
:focus-visible { outline: var(--focus-w) solid var(--focus); outline-offset: var(--focus-offset); }
.num { font-variant-numeric: tabular-nums lining-nums; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.lede { font-size: var(--fs-md); color: var(--ink-2); max-width: 62ch; }
@media (min-width: 600px) { .lede { font-size: var(--fs-lg); } }
.term { color: inherit; text-decoration: underline dotted; text-decoration-thickness: 1.5px; text-underline-offset: 3px; cursor: help; }
kbd { font: 700 var(--fs-sm)/1.2 var(--font-body); background: var(--sunken); border: 1px solid var(--edge); border-bottom-width: 2px; border-radius: var(--r-tag); padding: 1px 6px; }
code { font: 700 0.95em/1.2 var(--font-body); background: var(--sunken); border-radius: var(--r-tag); padding: 1px 5px; }
summary { cursor: pointer; }
[hidden] { display: none !important; }   /* class display rules must never beat the hidden attribute (bag rows, glossary entries, dock coordinate) */
summary:focus-visible { outline: var(--focus-w) solid var(--focus); outline-offset: var(--focus-offset); }
.flash { outline: 3px solid var(--fel-line); outline-offset: 2px; }   /* 1.6s, no animation; identical under reduced motion */
```
Retire: `.eyebrow`, `.pill`, `.badge-*`, `.toc` (pill row), `.small`, `.muted` (replace `.muted` with explicit `color: var(--ink-3)` where kept; a `.muted { color: var(--ink-3); }` utility may stay), the `a.card:hover translateY`, `--font-mono`, `th { text-transform … }`.

### 6.2 Tags (static status: never interactive)

```css
.tag { display: inline-flex; align-items: center; gap: 6px; min-height: 28px; padding: 0 7px;
       border: 1px solid var(--edge); border-radius: var(--r-tag); background: transparent;
       font: 700 var(--fs-xs)/1 var(--font-body); font-variant-numeric: tabular-nums lining-nums;
       color: var(--ink); white-space: nowrap; }
.tag.next { background: var(--fel); border-color: var(--fel); color: var(--on-fel); }       /* "Next step" (one per page) */
.tag.done { border-color: var(--rule); color: var(--ink-2); font-weight: 600; }            /* "Done" */
.tag.now  { border: 1.5px solid var(--fel-line); color: var(--ink); }                      /* "Now" (tables, timeline) */
.tag.optional { border-style: dashed; border-color: var(--rule); color: var(--ink-3); font-weight: 600; }
/* ladder on route level tags (set by level.ts) */
.tag .ladder { font-weight: 600; color: var(--ink-2); }
.tag .ladder:empty { display: none; }
.tag[data-ladder]::before { content: ''; width: 9px; height: 9px; border-radius: 50%; background: var(--dot); }
.tag[data-ladder='too-hard'] { --dot: var(--con-red); }
.tag[data-ladder='hard']     { --dot: var(--con-orange); }
.tag[data-ladder='on-level'] { --dot: var(--con-yellow); }
.tag[data-ladder='easy']     { --dot: var(--con-green); }
.tag[data-ladder='trivial']  { --dot: var(--con-grey); }
.count { font: 700 var(--fs-sm)/1.2 var(--font-body); font-variant-numeric: tabular-nums lining-nums; }   /* "3 of 12 done", no box */
.tag.now { display: none; } [data-now='current'] .tag.now { display: inline-flex; }   /* tables, timeline, demon cards */
```
Primitive inventory: `.tag` (level `Lv 1–4`), `.tag.next`, `.tag.done`, `.tag.now`, `.tag.optional`, `.count` (plain), kind word (plain 15px `--ink-2` text, no box), `.seal` (static confidence, 7.2), `details.trust` (interactive confidence, 7.2), `.verdict` (bag stamp, 8.14), `.chip` (filter toggle, 8.13). **Rule: status never looks like a control and a control never looks like status.** Controls have a ≥44px target (trust seal: 32px visual, 44px hit area), an `--edge` border, a `--raised` fill and an affordance glyph (chevron, check, icon).

### 6.3 Buttons

| Variant | Class | Look | Use |
|---|---|---|---|
| Primary | `.btn.primary` | `--ink` fill, `--on-ink` text, 1px `--ink` | one per view: Go to next step, Open the route |
| Secondary | `.btn` | `--raised` fill, 1px `--edge`, `--ink` text | Jump to my level, Restore from code, Copy all waypoints |
| Quiet | `.btn.quiet` | transparent, no border, `--ink-2` 600, underline on hover | Clear filters, Show details |
| Danger | `.btn.danger` | transparent, 1px `--danger`, `--danger` text | Untick everything (keeps `confirm()`) |
| Icon | `.btn.icon` | 44×44, 20px icon, `aria-label` required | clear search, sheet close |

```css
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: var(--hit);
       padding: 0 14px; border: 1px solid var(--edge); border-radius: var(--r-ctl); background: var(--raised);
       color: var(--ink); font: 600 var(--fs-sm)/1.2 var(--font-body); text-decoration: none; cursor: pointer;
       touch-action: manipulation; transition: background-color var(--dur-press); }
.btn:hover { background: var(--hover); color: var(--ink); }
.btn:active { background: var(--pressed); }
.btn.primary { background: var(--ink); border-color: var(--ink); color: var(--on-ink); }
.btn.primary:hover { background: color-mix(in srgb, var(--ink) 88%, var(--sheet)); color: var(--on-ink); }
.btn.quiet { background: transparent; border-color: transparent; color: var(--ink-2); }
.btn.quiet:hover { text-decoration: underline; background: transparent; }
.btn.danger { background: transparent; border-color: var(--danger); color: var(--danger); }
.btn.icon { width: var(--hit); padding: 0; }
.btn[disabled], .btn[aria-disabled='true'] { opacity: .45; cursor: not-allowed; }
.btn.small { /* compat alias during migration: same 44px size; delete when no markup uses it */ }
```
No scale/translate on press. Labels are verb-first, sentence case, never end in "→". Hero CTA on phones: `min-height: 48px`, full width.

### 6.4 Inputs, switch, checkbox, segmented

```css
input[type='text'], input[type='search'], input[type='number'], select, textarea {
  font: 400 var(--fs-md)/1.3 var(--font-body); color: var(--ink); background: var(--raised);
  border: 1px solid var(--edge); border-radius: var(--r-ctl); padding: 0 12px; }
input[type='text'], input[type='search'], select { min-height: var(--input-h); }
input::placeholder { color: var(--ink-3); }
textarea { width: 100%; min-height: 96px; padding: 10px 12px; font-size: var(--fs-sm); word-break: break-all; }
.field { display: grid; gap: 6px; }
.field > .label { font: 700 var(--fs-sm)/1.3 var(--font-body); color: var(--ink-2); }   /* visible label, always above */
.field > .help { font-size: var(--fs-sm); color: var(--ink-3); }
.field [aria-invalid='true'] { border: 2px solid var(--danger); }
```
- Search field: wrapper `.search-field` with a 20px `search` icon at left (`--ink-3`, padding-left 40px on the input) and a 44px clear button (`.btn.icon.quiet`, `close` icon, `aria-label="Clear search"`) shown only when the input has text. Placeholder is an example, never the label.
- Select: native `<select>` with `appearance: none`, `chevron-down` background-free icon positioned right (an inline SVG sibling with `pointer-events: none`), padding-right 40px.
- **Switch** (checkbox-backed, used for "Only my level"): `label.switch` 44px row: real `<input type="checkbox" role="switch">` visually hidden, then `span.track` 40×24 (1px `--edge` border, radius 12px, `--raised`), knob 18px circle `--ink-3` left; `input:checked + .track` = `--ink` fill, knob `--sheet` right; `input:focus-visible + .track` focus ring; label text 15px 600.
- **Switch button** (button-backed, used for "Hide done steps", contract `aria-pressed`): `button.switch-btn` 44px row, text then the same `.track` (`aria-hidden`); `[aria-pressed='true'] .track` = on.
- **Segmented** (`div.seg[role=group][aria-label]`): joined 44px `.btn` segments, inner borders 1px `--edge`; `[aria-pressed='true']` = `--ink` fill, `--on-ink` text. Used for View: Full | Compact.
- **Generic checkbox** outside the route (none needed today; Library uses waymarks): 24px square, `--r-tag`, inside a 44px label.

### 6.5 Cards and grids (content pages only)

```css
.card { background: var(--sheet); border: 1px solid var(--rule); border-radius: var(--r-sheet); padding: var(--sp-4) var(--sp-5); }
.card > :first-child { margin-top: 0; } .card > :last-child { margin-bottom: 0; }
.grid { display: grid; gap: var(--sp-4); grid-template-columns: minmax(0, 1fr); }
@media (min-width: 700px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .grid > :last-child:nth-child(odd) { grid-column: 1 / -1; } }   /* no orphan cells */
a.card { display: block; color: inherit; text-decoration: none; }
a.card:hover { border-color: var(--edge); }                       /* no lift, no shadow */
```
Cards are for groups that genuinely belong together (camping parts, demons, alternatives). Long uniform collections (bag items, glossary, features, racial abilities) are **rows**, not cards.

---

## 7. Components: chrome

Format: anatomy, states, mobile, contract. "Contract" lists selectors and behaviours that scripts depend on and that must keep working.

### 7.1 Site header (`Base.astro`)

**DOM order** (it matches the visual order at every width):
```html
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap bar">
    <a class="brand" href="/"><Icon name="mark" /><span>Waypoint</span></a>
    <div id="site-menu" class="site-menu">            <!-- inline at >= 1200; dropdown panel below -->
      <nav aria-label="Main"><ul class="nav-list">
        <li><a href="/start/">Start here</a></li>
        <li><a href="/guides/gnome-warlock/">Warlock guide</a>
          <ul class="nav-sub">                         <!-- shown in the panel only -->
            <li><a href="/guides/gnome-warlock/">Overview</a></li>
            <li><a href="/guides/gnome-warlock/route/">Route</a></li>
            <li><a href="/guides/gnome-warlock/talents/">Talents, spells &amp; demons</a></li>
            <li><a href="/guides/gnome-warlock/professions/">Professions &amp; alts</a></li>
          </ul></li>
        <li><a href="/bags/">Bag advisor</a></li>
        <li><a href="/systems/">Forever systems</a></li>
        <li><a href="/library-books/">Library books</a></li>
        <li><a href="/glossary/">Glossary</a></li>
      </ul></nav>
      <div class="appearance"><span class="appearance-label">Appearance</span> <!-- #theme-btn here (7.3) --></div>
      <a class="menu-report" href="{site.reportUrl}">Report a problem</a>   <!-- panel only -->
    </div>
    <!-- level widget (7.2) -->
    <button class="menu-btn btn" type="button" data-action="menu" aria-expanded="false" aria-controls="site-menu">
      <svg …menu/close…/><span class="menu-label" data-menu-label>Menu</span></button>
  </div>
</header>
```
- Bar: `--header-h` (56 / 64), opaque `--sheet`, 1px `--rule` bottom, `position: sticky; top: 0; z-index: var(--z-header)`; while the menu is open `.site-header[data-menu-open] { z-index: var(--z-menu); }` so the panel sits above the route dock. `display: flex; align-items: center; gap: 8px`. No blur.
- Brand: 44px tall link, `mark` 24px in `--fel-line` (the only fel in the header at rest) + "Waypoint" Texturina 700 20px (22px ≥900) `--ink`, no underline, `margin-right: auto`.
- **≥1200 (inline):** `#site-menu` is a flex row (`display: flex; align-items: center; gap: 4px; margin-right: 8px`); `.nav-sub`, `.appearance-label` and `.menu-report` are `display: none`; `.menu-btn` is `display: none`. Nav links: 44px tall, padding 0 12px, 15px 600 `--ink-2`, no underline, `border-bottom: 3px solid transparent`; hover `--ink` + 3px `--rule` bar; active `--ink` + 3px `--ink` bar. Active rule: `aria-current="page"` on the exact page; the "Warlock guide" link gets `aria-current="true"` on all four guide pages.
- **<1200 (panel):** `#site-menu { display: none; }`; when `.site-header[data-menu-open]`: `display: block; position: absolute; left: 0; right: 0; top: 100%; max-height: calc(100dvh - var(--header-h)); overflow: auto; background: var(--sheet); border-bottom: 1px solid var(--rule); box-shadow: var(--elev-pop); padding: 8px var(--gutter) 16px; z-index: var(--z-menu);` Links are 52px rows, 19px 600 `--ink`, 1px `--rule` separators; `.nav-sub` links are 48px rows, 17px 400, indented 16px, with a 2px `--rule` left line. The appearance row is 52px: label "Appearance" left, `#theme-btn` right. Then "Report a problem" (15px link, `flag` icon). Scrim: `.site-header[data-menu-open]::after { content: ''; position: fixed; inset: var(--header-h) 0 0 0; background: var(--scrim); z-index: calc(var(--z-menu) - 1); }`. Enter: opacity 0→1 + translateY(-8px→0), `--dur-base`.
- Menu button: `.btn` 44px, `menu` icon + "Menu" label; open: `close` icon + "Close". Below 400px the label is visually hidden (`aria-label` not needed because the hidden text stays in the accessible name).
- Width budget at 360: brand ~127 + level 134 + menu 44 + gaps 16 = 321 ≤ 328. At 1200: brand + 6 links + theme + level ≈ 1,110 ≤ 1,136. Acceptance check 13.2 measures both.
- **Contract:** skip link, `#my-level`, `#theme-btn` unchanged ids. New `src/scripts/menu.ts` (9.5). Remove `backdrop-filter` and the translucent background. `src/lib/site.ts` `nav` becomes the 6 top-level items plus a `children` array on the guide entry (the menu markup above is generated from it).

### 7.2 Level widget ("My level")

```html
<div class="lvl" role="group" aria-label="My level">
  <button type="button" class="lvl-btn" data-action="level-down" aria-label="Level down"><Icon name="minus" /></button>
  <label class="lvl-field"><span class="lvl-prefix" aria-hidden="true">Lv</span>
    <input id="my-level" type="number" min="1" max="60" inputmode="numeric" placeholder="?" aria-label="My level" /></label>
  <button type="button" class="lvl-btn" data-action="level-up" aria-label="Level up"><Icon name="plus" /></button>
</div>
```
- Group: `display: inline-flex; align-items: stretch; border: 1px solid var(--edge); border-radius: var(--r-ctl); background: var(--raised);` buttons are **44×44** (the group is 46px tall including its border), inner dividers 1px `--rule`. Input `width: 2.4ch`, 19px 700 tabular, centred, no spinners (`appearance: textfield`; hide `::-webkit-inner-spin-button`). "Lv" prefix 14px 700 `--ink-3`, visually hidden below 400px. Focus ring on the group via `:focus-within`.
- **Unset** (`html:not([data-level])`): placeholder "?" and the group border becomes **2px dashed `--fel-line`** (setting your level is the first good move). Level-aware pages show a one-line prompt under the page head (7.4).
- **At 1 / 60:** the matching button is `disabled` (opacity .45).
- **Contract:** `level.ts` stays the single owner: the buttons change the input value and dispatch `change` (9.1). Clamping, storage key `level`, `data-now`, and `waypoint:level` are unchanged.

**Where My level shows:** route ley line + waymarks + level-tag ladder (8.4); journey list current stone (8.6); bracket "You are here, at level 14." (8.5); tables: 3px fel inset bar + "Now" tag on the current row, past rows in `--ink-2` (8.10); timeline fel node + "Now" tag (8.12); home road (8.15); bag "Only my level" filter. **Never by opacity.**

### 7.3 Theme toggle

- `button#theme-btn.btn` 44px: three icons (`auto`, `sun`, `moon`, each with `data-theme-icon="system|light|dark"`, only the current one visible) + visible text `[data-theme-label]` "Auto" / "Light" / "Dark". `aria-label` is dynamic: "Theme: Dark. Change theme". Cycle order unchanged: system → light → dark.
- Placement: inside `#site-menu .appearance` (inline after the nav at ≥1200; a row in the panel below that). One element, no duplicate control.
- No colour transition on theme switch (instant).
- **Contract:** `theme.ts` storage key `theme`, cycle order, and the inline FOUC script in `<head>` are unchanged; `theme.ts` additionally updates the label, `aria-label` and visible icon (9.4).

### 7.4 Page head (`PageHead.astro`)

Props: `title: string`, `trail?: { href: string; label: string }[]`, `facts?: { label: string; value: string }[]`, `levelPrompt?: boolean`; default slot = lede. The `eyebrow` prop is **removed** (each current eyebrow becomes a breadcrumb on guide pages or is deleted).
```html
<header class="page-head">
  <nav aria-label="Breadcrumb" class="crumbs"><ol><li><a href="/guides/gnome-warlock/">Gnome Warlock guide</a></li></ol></nav>
  <h1>Leveling route</h1>
  <div class="lede"><slot /></div>
  <dl class="facts-dl"><div><dt>Updated</dt><dd class="num">29 Oct 2026</dd></div> …</dl>
  <p class="level-prompt">Set your level in the top bar to see what matters now. <button class="btn quiet" data-action="focus-level">Set my level</button></p>
</header>
```
- Breadcrumb: 15px `--ink-2` link, underlined, `inline-flex` min-height 44px; multiple items separated by a `chevron-right` 16px icon (never "›" or "·"). Only guide sub-pages use it.
- H1 `--fs-3xl` Texturina 600, margin 0 0 8px. Lede `.lede`, margin 0 0 12px.
- Facts: inline label/value pairs, `display: flex; flex-wrap: wrap; gap: 4px 20px;` label 700 `--ink-2`, value `--ink-3` `.num`. No middots.
- Level prompt: 15px `--ink-2`; hidden when `html[data-level]`. Used on Route, Bag advisor, Overview, Talents.
- Spacing: page-head margin-bottom 24px. Dates format "29 Oct 2026" (add `formatDate()` in `src/lib/wow.ts`: `new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })`).

### 7.5 Guide sub-nav (`GuideNav.astro`) and pager (`GuidePager.astro`)

- Four links: Overview · Route · Talents, spells & demons · Professions & alts (from a shared `guidePages(guide)` helper in `src/lib/guides.ts`). 44px tall, 15px 600 `--ink-2`, no underline, padding 0 12px; active `--ink` + 3px `--ink` bottom bar over a 1px `--rule` baseline; `aria-current="page"`.
- Mobile: one row, `overflow-x: auto; scroll-snap-type: x proximity; scrollbar-width: none;` bleeding to the screen edges (`margin-inline: calc(-1 * var(--gutter)); padding-inline: var(--gutter)`); the active link is scrolled into view on load (`el.scrollIntoView({ inline: 'nearest', block: 'nearest' })`, 2 lines in the guide-nav script). Never wraps. Not sticky.
- **Pager** at the bottom of each guide page: two 56px links side by side (stacked below 600): "Previous" (small 14px `--ink-3` line) + page name (17px 700), with `chevron-left` / `chevron-right`; 1px `--edge`, `--r-ctl`, `--raised`. No "→" text.

### 7.6 On this page (`OnThisPage.astro`, prose pages)

Props: `items: { id: string; label: string }[]` (H2s only, max 8). Renders `<details class="toc" data-open-from="1200"><summary>On this page ({n} sections)</summary><ol>…</ol></details>` into the Base `rail` slot (rail breakpoint `lg`).
- <1200: in flow right after the page head; summary is a 48px row with a chevron, `--sheet` + 1px `--rule`, `--r-ctl`; list of 44px links.
- ≥1200: sticky left rail (`position: sticky; top: calc(var(--header-h) + 24px)`), summary hidden, list always open (rail.ts sets `open`). Links 40px rows, 15px `--ink-2`; hover `--ink`.
- Replaces every `ul.toc` pill row (Start, Systems, Talents, Professions).

### 7.7 Footer

`--ground`, 1px `--rule` top, `padding-block: 32px 48px` (+ `--jbar-h` on checklist pages <900 via `--jbar-safe`). Three blocks:
1. **"How much to trust a fact"**: the four static seals (`.seal`, 8.2), each with one line: "Official: from Blizzard or in-game data." "Beta-tested: seen in the beta by several players or guides." "Community: one guide or player, not cross-checked yet." "Theory: not testable yet; the beta stopped at level 30." Grid 2×2 at ≥600.
2. **About:** "Waypoint is a fan-made guide built from beta data (17 Sep – 22 Oct 2026). Data updated 29 Oct 2026." + "Report a problem" link.
3. **Legal** (14px `--ink-3`): "Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft and Warcraft are trademarks of Blizzard Entertainment, Inc. Item tooltips by Wowhead." No Blizzard or Wowhead logos.

### 7.8 Toast (`#toast`, in Base)

`<div id="toast" class="toast" role="status" aria-live="polite"></div>` always in the DOM. Fixed, bottom-centre, `bottom: calc(16px + var(--jbar-safe) + env(safe-area-inset-bottom))`, `--ink` fill, `--on-ink` text, 15px 600, `--r-ctl`, `--elev-pop`, max-width min(90vw, 420px), padding 10px 14px, `z-index: var(--z-toast)`. Hidden state: `opacity: 0; transform: translateY(8px); pointer-events: none`; `[data-show]`: opacity 1, translate 0 (`--dur-base`). Auto-hides after 3s and clears its text after the fade (9.3). Never takes focus. Messages: "Copied /way Loch Modan 37.2 46.1 Mountaineer Kadrell", "Copied 6 waypoints", "Copy didn't work. Long-press the coordinates to copy them.", "Restored 12 ticked steps."

---

## 8. Components: content

### 8.1 Callouts (`Callout.astro` + global `.callout`)

| Variant | Class | Label | Icon | Colour `--c` | Replaces |
|---|---|---|---|---|---|
| Tip | `.callout.tip` | Tip | `lantern` | `--fel` | `.callout.fel` |
| Good to know | `.callout.info` | Good to know | `info` | `--info` | `.callout` (no modifier) |
| Careful | `.callout.warn` | Careful | `warn` | `--warn` | `.callout.warn` |
| Danger | `.callout.danger` | Danger | `danger` | `--danger` | `.callout.danger` |
| Untested | `.callout.untested` | Untested | `unknown` | `--warn`, **dashed border** | new (beta caveat, once per untested bracket) |

```html
<aside class="callout warn" role="note"><p class="callout-label"><Icon name="warn" size={16} />Careful</p><p>Don't delete the letter…</p></aside>
```
```css
.callout { --c: var(--info); position: relative; max-width: var(--measure); margin: 28px 0 20px; padding: 22px 16px 14px;
           border: 1px solid color-mix(in srgb, var(--c) 55%, var(--rule)); border-radius: var(--r-ctl);
           background: color-mix(in srgb, var(--c) var(--tint), var(--sheet)); color: var(--ink); }
.callout.tip { --c: var(--fel); } .callout.warn { --c: var(--warn); } .callout.danger { --c: var(--danger); }
.callout.untested { --c: var(--warn); border-style: dashed; }
.callout-label { position: absolute; top: -12px; left: 12px; margin: 0; display: inline-flex; align-items: center; gap: 6px;
                 padding: 3px 8px; border-radius: var(--r-tag); background: var(--c); color: var(--on-color);
                 font: 700 var(--fs-xs)/1.4 var(--font-body); }
.callout > :last-child { margin-bottom: 0; }
.callout.compact { padding: 18px 12px 10px; }
```
The label is a tab on the top-left edge (a margin note), never a left stripe. Body text is always `--ink`. Label words are part of the content so screen readers hear them. `Callout.astro` props: `variant`, `label?` (override), `compact?`.

### 8.2 Confidence: `Badge.astro` (static seal), `Trust.astro` (seal + sources), `Sources.astro` (standalone)

| Level | Pips | Word | Meaning (panel + footer) |
|---|---|---|---|
| official | ●●● | Official | From Blizzard or in-game data |
| beta-tested | ●●○ | Beta-tested | Seen in the beta by several players or guides |
| community | ●○○ | Community | One guide or player claim, not cross-checked yet |
| theory | ○○○ | Theory | Not testable yet: the beta stopped at level 30 |

- Pips: three 8px circles, gap 3px; filled = `--conf-pip` fill, empty = 1.5px `--conf-pip` ring. Theory: all rings in `--conf-theory`, word in `--warn`, **dashed** border. No hue for the other three.
- **`Badge.astro` → static `.seal`** (`span.seal`, props `c`): pips + word, 14px 600, 1px `--rule`, transparent, `--r-tag`, min-height 28px, `title` keeps the meaning. Used in the footer legend, "trust lines" on content pages, and inside tables where sources are not needed.
- **`Trust.astro`** (props `c`, `urls?: string[]`, `report?: string`): `<details class="trust {c}">`; `summary` = pips + word + `chevron-down` 16px; 14px 600 `--ink`; **1px `--edge`**, `--raised`, `--r-tag`, min-height 32px, padding 0 6px 0 8px, hit area extended to 44px (`summary::before { content: ''; position: absolute; inset: -6px 0; }`, summary `position: relative`). Hide the marker (`list-style: none; ::-webkit-details-marker { display: none }`). Open: chevron rotates 180°; the panel opens **in flow on its own line** (`details.trust[open] { flex-basis: 100%; }` inside flex rows) as a `--sheet` box with 1px `--rule`, `--r-ctl`, padding 12px, max-width 52ch, containing: the meaning sentence; "Sources (3)" label and the link list (15px, each link a 44px row, `overflow-wrap: anywhere`, `external` icon, keep the existing `label()` text); "Something wrong? Report it" link (`flag` icon) to `reportHref(report)`.
- **`Sources.astro`** stays for sources without a badge (e.g. talent spec sources): `details.sources`, 44px summary "Sources (n)" with `chevron-down`, 15px `--ink-2`; same list styling.
- Replace every `<Badge c={x} /> … <Sources urls={y} />` pair with `<Trust c={x} urls={y} report="…" />`. On the route and bag advisor this also removes the separate "Report a problem" link from every step/item (130 controls fewer).
- Wherever the current markup joins seals with middots ("`official` mechanics · `beta-tested` quest location"), write a sentence: "Mechanics: [Official]. Quest location and bug fix: [Beta-tested]." with static seals.

### 8.3 Ref row and coordinate button (`RefItem.astro`)

Props: `r` (Ref & `{ giver?, role? }`), `zone?`, `kind?: 'quest' | 'npc' | 'item' | 'vendor' | 'book'` (default from context, `npc` if `role`), `variant?: 'row' | 'inline'` (default `row`), `price?: string`, `detail?: string` (overrides line 2).

**Row** (callers wrap each in `<li>` inside `<ul class="ref-list">`):
```html
<div class="ref">
  <Icon class="ref-glyph quest" name="quest" />                         <!-- 20px; quest = --link; others --ink-3 -->
  <a class="ref-name" href="https://www.wowhead.com/forever/quest=…" target="_blank" rel="noopener">Beginnings</a>
  <span class="ref-price num">25c each</span>                            <!-- vendor rows only -->
  <span class="ref-detail">Bring 3 Feather Charms to Alamar Grimm</span>   <!-- role ?? "From {giver}" ?? detail -->
  <span class="ref-note">…md(note)…</span>                               <!-- optional third line -->
  <button class="way" type="button" data-copy="/way Dun Morogh 28.6 66.1 Beginnings"
          aria-label="Copy /way Dun Morogh 28.6 66.1 Beginnings" title="Copy /way Dun Morogh 28.6 66.1 Beginnings">
    <Icon name="crosshair" size={16} /><span class="num" data-way-label>28.6, 66.1</span>
    <Icon name="copy" size={16} class="way-copy" data-copy-icon /><Icon name="check" size={16} class="way-ok" /></button>
</div>
```
```css
.ref-list { list-style: none; margin: 0; padding: 0; }
.ref { display: grid; grid-template-columns: 24px minmax(0, 1fr) auto; column-gap: 8px; row-gap: 2px; padding: 8px 0; }
.ref-list > li + li .ref { border-top: 1px dashed var(--rule); }
.ref-glyph { grid-row: 1 / span 3; margin-top: 2px; color: var(--ink-3); } .ref-glyph.quest { color: var(--link); }
.ref-name { grid-column: 2; font: 700 var(--fs-table)/1.4 var(--font-body); }
span.ref-name { color: var(--ink); }
.ref-price { grid-column: 3; justify-self: end; font-weight: 700; color: var(--ink-2); }
.ref-detail, .ref-note, .ref > .way { grid-column: 2 / -1; }
.ref-detail { font-size: var(--fs-sm); color: var(--ink-3); }
.ref-note { font-size: var(--fs-sm); color: var(--ink-2); }
.ref > .way { justify-self: start; margin-top: 6px; }                       /* phones: own line under the name */
@media (min-width: 600px) {
  .ref { grid-template-columns: 24px minmax(0, 1fr) auto auto; }
  .ref > .way { grid-column: 4; grid-row: 1 / span 3; align-self: center; margin: 0 0 0 12px; }
  .ref-detail, .ref-note { grid-column: 2 / 4; }
}
```
**Coordinate button `.way`** (also used in the dock and in compact steps):
```css
.way { display: inline-flex; align-items: center; gap: 8px; min-height: var(--hit); padding: 0 10px;
       border: 1px solid var(--edge); border-radius: var(--r-ctl); background: var(--raised); color: var(--ink);
       font: 700 var(--fs-sm)/1 var(--font-body); font-variant-numeric: tabular-nums lining-nums; white-space: nowrap;
       cursor: pointer; touch-action: manipulation; transition: border-color var(--dur-quick); }
.way:hover { background: var(--hover); }
.way-copy { color: var(--ink-3); } .way-ok { display: none; color: var(--fel); }
.way[data-state='copied'] { border-color: var(--fel-line); }
.way[data-state='copied'] .way-copy { display: none; } .way[data-state='copied'] .way-ok { display: block; }
.way[data-state='failed'] { border-color: var(--danger); }
```
- Copied: icon swap for 1.4s plus the toast; **the width never changes**. Failed: danger border + toast "Copy didn't work. Long-press the coordinates to copy them."
- **Inline variant** (`variant="inline"`): `<span class="ref-inline"><a …>Name</a></span>` (name link only, 700). Used where refs sit inside sentences or lists: bracket extras spells, talents "New spells by level", library rewards, professions "needs". If an inline ref has coords it still renders no button (use the row variant where a waypoint matters).
- Wowhead's inserted icon (`iconizeLinks: true`) sits inside `.ref-name`; a late or missing icon only shifts the name text, never the row.
- **Contract:** `[data-copy]` and `.copied` (copy.ts still toggles the class) stay; `wayCommand()` unchanged.

### 8.4 Route step: the waymark row (`StepCard.astro`, central component)

**Markup** (inside `ol.steps` of a leg):
```html
<li class="step kind-quests" id="lm-thelsamar" data-lmin="12" data-lmax="14"
    data-title="Pick up every quest in Thelsamar" data-way="/way Loch Modan 37.2 46.1 Mountaineer Kadrell" data-way-label="37.2, 46.1">
  <label class="check">
    <input type="checkbox" id="chk-lm-thelsamar" data-step="lm-thelsamar" />
    <span class="ring" aria-hidden="true"><Icon name="quest" size={16} class="ring-kind" /><Icon name="check" size={16} class="ring-check" /></span>
    <span class="visually-hidden">Mark "Pick up every quest in Thelsamar" done</span>
  </label>
  <div class="step-main">
    <p class="next-flag"><span class="tag next">Next step</span></p>
    <h3 class="step-title">Pick up every quest in Thelsamar <span class="tag done">Done</span></h3>
    <div class="facts">
      <span class="tag lv num" data-lmin="12" data-lmax="14" data-ladder-tag>Lv 12–14 <span class="ladder"></span></span>
      <span class="kind">Quests</span>
      <span class="place"><Icon name="pin" size={16} />Thelsamar, Loch Modan</span>
      {optional && <span class="tag optional">Optional</span>}
      <button class="way key" …>…</button>                <!-- compact view only (key waypoint) -->
      <Trust c="beta-tested" urls={…} report={`route step "${title}" (${id})`} />
    </div>
    <div class="detail">
      <p class="body">…md(body)…</p>
      <div class="refs"><h4 class="refs-label">Quests</h4><ul class="ref-list">…RefItem kind="quest"…</ul></div>
      <div class="refs"><h4 class="refs-label">People</h4><ul class="ref-list">…kind="npc"…</ul></div>
      <div class="refs"><h4 class="refs-label">Items</h4><ul class="ref-list">…kind="item"…</ul></div>
      <label class="btn mark-done" for="chk-lm-thelsamar" aria-hidden="true"><Icon name="check" size={16} />Mark done</label>
    </div>
    <button class="btn quiet step-toggle" type="button" data-action="details" aria-expanded="false"><span data-details-label>Show details</span><Icon name="chevron-down" size={16} /></button>
  </div>
</li>
```
- Kind glyph map: travel `signpost`, quests `quest`, class `flame`, train `book`, dungeon `gate`, profession `anvil`, system `rune`, shopping `coin`, tip `lantern`, milestone `star`. Kind words: Travel, Quests, Class quest, Train, Dungeon, Profession, Forever system, Shopping, Tip, Milestone.
- Place: `[step.hub, step.zone].filter(Boolean).join(', ')` (smaller place first: "Thelsamar, Loch Modan"); never a middot.
- Key waypoint (build time): first of `[...quests, ...npcs, ...items]` with `coords` and a zone (`r.zone ?? step.zone`); sets `data-way`, `data-way-label` and renders `.way.key`. Steps without one have no `data-way`.
- Group labels: "Quests", "People", "Items" (14px 700 `--ink-3`, sentence case; replaces tracked caps "KEY QUESTS" / "WHO").

**Layout CSS** (verified in the judge prototype):
```css
.steps { position: relative; list-style: none; margin: 0; padding: 0; }
.steps::before { content: ''; position: absolute; top: 0; bottom: 0; left: var(--ley-gutter); right: 0;
                 background: var(--sheet); border-block: 1px solid var(--rule); }              /* the shared sheet */
@media (min-width: 600px) { .steps::before { border: 1px solid var(--rule); border-radius: var(--r-sheet); } }
.step { position: relative; display: grid; grid-template-columns: var(--ley-gutter) minmax(0, 1fr); }
/* the line segment (ahead = dashed) and the travelled overlay used by the ignite */
.step::before, .step::after { content: ''; position: absolute; top: 0; bottom: 0; width: var(--ley-w);
                              left: calc(var(--ley-gutter) / 2 - 1.5px); }
.step::before { background: repeating-linear-gradient(to bottom, var(--ley-ahead) 0 7px, transparent 7px 13px); }
.step::after  { background: var(--ley-travelled); transform: scaleY(0); transform-origin: top; }
.step[data-now='past']::before { background: var(--ley-travelled); }
.step[data-now='current']::before { background: var(--ley-lit); box-shadow: 0 0 8px var(--fel-glow); }
.step.done::after { transform: scaleY(1); }                                   /* travelled wins over lit */
html.ley-ready .step::after { transition: transform var(--dur-ley) var(--ease-out); }
/* the waymark = the checkbox (44x44 hit target, nothing else ticks) */
.check { grid-column: 1; justify-self: center; align-self: start; margin-top: 10px; position: relative; z-index: var(--z-node);
         width: var(--hit); height: var(--hit); display: grid; place-items: center; cursor: pointer; }
.check input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.ring { width: var(--node); height: var(--node); border-radius: var(--r-node); border: 2.5px solid var(--ink-2);
        background: var(--ground); color: var(--ink-2); display: grid; place-items: center; pointer-events: none;
        transition: background-color var(--dur-quick), border-color var(--dur-quick); }
.ring-check { display: none; }
.step[data-now='current'] .ring { border-color: var(--fel-line); }
.step.done .ring { background: var(--ink-2); border-color: var(--ink-2); color: var(--sheet); }
.step.done .ring-kind { display: none; } .step.done .ring-check { display: block; }
.step[data-next] .ring { width: var(--node-next); height: var(--node-next); border: 3px solid var(--fel-line);
                         background: var(--fel); color: var(--on-fel); box-shadow: 0 0 0 3px var(--ground), 0 0 14px 3px var(--fel-glow); }
.check input:focus-visible + .ring { outline: 3px solid var(--focus); outline-offset: 3px; }
.step.theory:not(.done) .ring { border-style: dashed; }                       /* class added when confidence = theory */
/* content column */
.step-main { grid-column: 2; position: relative; padding: 14px 16px 16px 14px; border-top: 1px solid var(--rule); }
.step:first-child .step-main { border-top: 0; }
@media (min-width: 600px) { .step:first-child .step-main { border-radius: var(--r-sheet) var(--r-sheet) 0 0; }
                            .step:last-child .step-main { border-radius: 0 0 var(--r-sheet) var(--r-sheet); } }
.step[data-next] .step-main { background: var(--lit); box-shadow: inset 4px 0 0 var(--fel-line); }
.next-flag { display: none; margin: 0 0 6px; } .step[data-next] .next-flag { display: flex; }
.step-title { margin: 0; font: 700 var(--fs-lg)/var(--lh-title) var(--font-body); text-wrap: balance; }
.step-title .tag.done { display: none; margin-left: 6px; vertical-align: 0.15em; }
.facts { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; margin-top: 8px; font-size: var(--fs-sm); color: var(--ink-2); }
.place { display: inline-flex; align-items: center; gap: 4px; } .place svg { color: var(--ink-3); }
.detail { margin-top: 10px; } .detail .body { max-width: 64ch; margin: 0 0 10px; }
.refs-label { margin: 14px 0 4px; font: 700 var(--fs-xs)/1.4 var(--font-body); color: var(--ink-3); }
.mark-done { margin-top: 12px; }
.step-toggle { display: none; margin-top: 8px; padding-inline: 0; }
.facts .way.key { display: none; }
/* done = folded (no strikethrough, no opacity) */
.step.done .step-title { color: var(--ink-2); font-weight: 600; } .step.done .step-title .tag.done { display: inline-flex; }
.step.done:not(.open) :is(.facts, .detail) { display: none; }
.step.done .step-toggle { display: inline-flex; }
/* compact view (html.view-compact): node, title, level tag, key waypoint, Show details */
html.view-compact .step:not(.open) .detail,
html.view-compact .step:not(.open) .facts > :not(.lv, .way.key) { display: none; }
html.view-compact .step:not(.open) .facts .way.key { display: inline-flex; }
html.view-compact .step .step-toggle { display: inline-flex; }
html.view-compact .step-main { padding-block: 10px 12px; }
/* hide done */
html.hide-done .step.done { display: none; }
@media (max-width: 599px) { .leg { margin-inline: calc(-1 * var(--gutter)); } .leg .step-main { padding-right: var(--gutter); } }
```

**States**

| State | Trigger | Line beside the row | Node | Content |
|---|---|---|---|---|
| Ahead | `data-now="future"` (or level unset) | dashed `--ley-ahead` | hollow `--ink-2` ring, kind glyph | normal; ladder "hard"/"too hard" when far |
| Lit | `data-now="current"`, not done | solid `--ley-lit` + glow (dark) | ring in `--fel-line` | ladder "on level" |
| **Next step** | `data-next` (exactly one per page; 9.2) | as its state | 34px fel-filled ring, glyph in `--on-fel`, halo + glow | `--lit` row, 4px fel inset edge, "Next step" flag above the title, `aria-current="step"` |
| Past, not done | `data-now="past"` | solid `--ley-travelled` | hollow ring | normal (may still be worth doing); ladder "easy"/"trivial" |
| **Done** | `.done` | solid travelled (overlay; wins over lit) | filled `--ink-2`, check in `--sheet` | title `--ink-2` 600 + "Done" tag; facts and detail folded; "Show details" reopens (`.open`) |
| Hidden | `html.hide-done .step.done` | n/a (neighbours keep the line continuous) | n/a | `display: none` (unchanged contract) |
| Compact | `html.view-compact` | unchanged | unchanged | title + level tag + key `/way` + "Show details" |
| Flash | `.flash` (1.6s) | n/a | n/a | 3px `--fel-line` outline, offset 2px, no animation |
| Untested | `confidence: theory` → add class `theory` | unchanged | dashed ring | Theory trust seal |
| Focus | `input:focus-visible` | n/a | 3px focus ring around the ring | n/a |

- Phones (<600): the leg breaks out of the gutter (full-bleed); the rail column is 48px of `--ground` with the line at 24px; the sheet has no side borders and no radius; text width ≈ 310px at 390 (~40 characters). Facts wrap to 2–3 lines. Ref rows put the coordinate button on its own line.
- ≥600: sheet borders + 8px radius; ref rows 3 columns.
- **Contract (unchanged):** `input[data-step]`, `.step` + `.done`, `[data-lmin][data-lmax]` → `data-now`, `html.hide-done`, `.flash`, step `id` anchors, `[data-group]` / `[data-group-count]` / `.complete` on the leg. The label class `.check` is kept. **New (additive):** `data-next`, `aria-current="step"`, `data-title`, `data-way`, `data-way-label`, `.open`, `html.view-compact`, `html.ley-ready`, `data-ladder` / `.ladder`, `[data-action="details"]`, input `id="chk-{id}"`.

### 8.5 Bracket header: the waystone (route `section.leg`)

```html
<section class="leg bracket" id="loch-modan-12-20" data-group data-lmin="12" data-lmax="20">
  <header class="leg-head">
    <span class="stone" aria-hidden="true"></span>
    <div class="leg-head-main">
      <h2><span class="tag num">Lv 12–20</span>Loch Modan, Hall of Thanes &amp; Redridge</h2>
      <p class="leg-facts"><span class="here-line">You are here, at level <b data-level-value></b>. </span>Zones: Loch Modan, Dun Morogh, Ironforge.</p>
      <div class="mini"><span class="mini-track" aria-hidden="true"><i data-group-bar></i></span><span class="count" data-group-count="long">0 of 12 done</span></div>
      <div class="leg-summary">…md(summary)…</div>
      {b.level[0] >= 30 && <Callout variant="untested">Nobody has played past level 30 yet. Steps marked Theory are our best guess from Classic and dev notes.</Callout>}
      <details class="bracket-extras"><summary>New talents and spells at levels 12–20</summary> … <a href="…/talents/">Full talent plan and spell list</a></details>
    </div>
  </header>
  <ol class="steps">…StepCard…</ol>
</section>
```
```css
.leg { position: relative; margin: 0 0 var(--sp-8); }
.leg-head { position: relative; display: grid; grid-template-columns: var(--ley-gutter) minmax(0, 1fr); padding-bottom: 12px; }
.leg-head::before { content: ''; position: absolute; top: 0; bottom: 0; width: var(--ley-w); left: calc(var(--ley-gutter) / 2 - 1.5px);
                    background: repeating-linear-gradient(to bottom, var(--ley-ahead) 0 7px, transparent 7px 13px); }
.leg[data-now='past'] .leg-head::before, .leg.complete .leg-head::before { background: var(--ley-travelled); }
.leg[data-now='current'] .leg-head::before { background: var(--ley-lit); box-shadow: 0 0 8px var(--fel-glow); }
.stone { grid-column: 1; justify-self: center; margin-top: 14px; width: var(--stone); height: var(--stone); position: relative; z-index: var(--z-node);
         transform: rotate(45deg); border-radius: 2px; border: 2.5px solid var(--ink-2); background: var(--ground); box-shadow: 0 0 0 4px var(--ground); }
.leg[data-now='current'] .stone { background: var(--fel); border-color: var(--fel); box-shadow: 0 0 0 4px var(--ground), 0 0 14px 4px var(--fel-glow); }
.leg.complete .stone { background: var(--ink-2); }
.leg-head-main { padding-right: 16px; }
.leg-head h2 { margin: 6px 0 0; }
.leg-head h2 .tag { margin-right: 8px; vertical-align: 0.3em; font-family: var(--font-body); }
.leg-facts { margin: 8px 0 0; font-size: var(--fs-sm); color: var(--ink-2); } .leg-facts b { color: var(--ink); }
.leg:not([data-now='current']) .here-line { display: none; }
.mini { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
.mini-track { position: relative; flex: 1; max-width: 220px; height: 3px; background: repeating-linear-gradient(to right, var(--ley-ahead) 0 6px, transparent 6px 10px); }
.mini-track i { position: absolute; inset: 0 auto 0 0; width: 0; background: var(--ley-travelled); }
.bracket-extras > summary { display: flex; align-items: center; gap: 8px; min-height: 48px; font-weight: 600; font-size: var(--fs-sm); }
```
- States: future = hollow stone + dashed line; current = fel stone + glow + "You are here" line; past = ink outline + solid line; complete = ink-filled stone.
- Extras (inside the details): two short lists "Talent points" and "At the trainer" (labels 14px 700 `--ink-3`), rows = level tag + name (inline RefItem), link "Full talent plan and spell list" (no "→").
- **Contract:** `section.bracket[data-group][data-lmin][data-lmax][id]`, `[data-group-count]`, `.complete` stay (`.leg` is an added class). The old `.bracket-nav` pill row is **removed** (the journey list replaces it).

### 8.6 Checklist bar: dock (phones) and rail (desktop) (`ChecklistBar.astro`)

Props: `sections: { id: string; label: string; level?: [number, number]; total: number }[]`, `levelJump?: boolean` (default true), `nextLabel?: string` (default "Next step"; Library uses "Next book"). Rendered into the Base `rail` slot (rail breakpoint `md`). **Exactly one DOM instance of every `[data-action]`.**

```html
<div class="jbar" role="region" aria-label="Checklist progress">
  <p class="jbar-count count" data-progress-text>Loading progress…</p>                       <!-- desktop -->
  <div class="jbar-meter" aria-hidden="true"><i class="jbar-fill" data-progress-bar></i></div>
  <div class="jbar-row">
    <button class="jbar-next" type="button" data-action="resume">
      <span class="jbar-next-label">Next step</span><span class="jbar-next-title" data-next-title>…</span></button>
    <button class="way jbar-way" type="button" data-copy="" data-next-coord hidden aria-label="Copy /way for the next step">
      <Icon name="crosshair" size={16} /><span class="num" data-way-label></span>
      <Icon name="copy" size={16} class="way-copy" data-copy-icon /><Icon name="check" size={16} class="way-ok" /></button>
    <details class="jbar-sheet" data-sheet data-open-from="900">
      <summary class="btn icon"><Icon name="list" /><span class="visually-hidden">Sections and options</span></summary>
      <div class="sheet-panel">
        <p class="count" data-progress-text>…</p>                                             <!-- phones -->
        <h2 class="sheet-label">Sections</h2>
        <ol class="journey">
          <li><a href="#coldridge-1-6" data-lmin="1" data-lmax="6"><span class="j-stone" aria-hidden="true"></span>
              <span class="j-name">Coldridge Valley</span><span class="j-here">Your level</span>
              <span class="tag num">Lv 1–6</span><span class="count" data-count-for="coldridge-1-6">0/6</span></a></li> …
        </ol>
        <div class="sheet-actions">
          {levelJump && <button class="btn" type="button" data-action="my-level">Jump to my level</button>}
          <div class="seg" role="group" aria-label="View">
            <button class="btn" type="button" data-action="view" data-view="full" aria-pressed="true">Full</button>
            <button class="btn" type="button" data-action="view" data-view="compact" aria-pressed="false">Compact</button></div>
          <button class="switch-btn" type="button" data-action="hide-done" aria-pressed="false">Hide done steps<span class="track" aria-hidden="true"></span></button>
          <details class="backup"><summary>Move progress to another device</summary>
            <p>Progress is saved in this browser only. Make a backup code here and paste it into the same box on your phone or other computer.</p>
            <textarea data-backup-code aria-label="Backup code" spellcheck="false"></textarea>
            <div class="row"><button class="btn" type="button" data-action="backup">Make backup code</button>
              <button class="btn" type="button" data-action="restore">Restore from code</button></div>
            <p data-backup-status aria-live="polite"></p></details>
          <hr />
          <button class="btn danger" type="button" data-action="reset">Untick everything</button>
        </div>
      </div>
    </details>
  </div>
</div>
```
**Phones and tablets (<900): the dock.**
```css
.jbar { position: fixed; left: 0; right: 0; bottom: 0; z-index: var(--z-jbar); background: var(--sheet);
        border-top: 1px solid var(--rule); padding-bottom: env(safe-area-inset-bottom); }
.jbar-count { display: none; }
.jbar-meter { position: absolute; left: 0; right: 0; top: -2px; height: 3px;
              background: repeating-linear-gradient(to right, var(--ley-ahead) 0 6px, transparent 6px 10px); }
.jbar-fill { position: absolute; inset: 0 auto 0 0; width: 0; background: var(--ley-travelled); }
.jbar-fill::after { content: ''; position: absolute; right: -6px; top: -5px; width: 13px; height: 13px; border-radius: var(--r-node);
                    background: var(--fel); box-shadow: 0 0 10px 2px var(--fel-glow); }
.jbar-row { display: flex; align-items: center; gap: 8px; height: var(--jbar-h); padding: 0 var(--gutter); }
.jbar-next { flex: 1; min-width: 0; min-height: 48px; display: grid; align-content: center; text-align: left; padding: 0 4px;
             border: 0; background: none; color: var(--ink); font-family: var(--font-body); cursor: pointer; }
.jbar-next-label { font: 700 var(--fs-xs)/1.3 var(--font-body); color: var(--fel); }
.jbar-next-title { font: 600 var(--fs-sm)/1.3 var(--font-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jbar-way .way-copy { display: none; }                                  /* saves width; check still shows on copy */
.jbar-sheet > summary { list-style: none; } .jbar-sheet > summary::-webkit-details-marker { display: none; }
.jbar-sheet[open] > summary::before { content: ''; position: fixed; inset: 0 0 calc(var(--jbar-h) + env(safe-area-inset-bottom)) 0;
                                       background: var(--scrim); }        /* tapping the scrim toggles the summary = closes */
.sheet-panel { position: fixed; left: 0; right: 0; bottom: calc(var(--jbar-h) + env(safe-area-inset-bottom)); z-index: 1;
               max-height: 75dvh; overflow: auto; background: var(--sheet); border-top: 1px solid var(--rule);
               border-radius: var(--r-sheet) var(--r-sheet) 0 0; box-shadow: var(--elev-pop); padding: 16px var(--gutter) 20px; }
```
- Sheet section label: `.sheet-label { font: 700 var(--fs-xs)/1.4 var(--font-body); color: var(--ink-3); margin: 12px 0 4px; }`; the phone-only count inside the panel is hidden from 900px.
- Order in the bar: **Next step** (2 lines: "Next step" 14px 700 fel; the step title 15px 600, one line with ellipsis; tapping scrolls to the step and flashes it) · **coordinate button** of the next step (hidden when that step has no waypoint) · **Sections and options** (44×44). At 360px: next block ≈124px, coordinate ≈120px, button 44px (verified).
- All done: `[data-next-title]` reads "Route complete", the coordinate button is hidden.
- Pages with the dock render `<html class="has-dock">` (Base `dock` prop) and global CSS sets `@media (max-width: 899px) { html.has-dock { --jbar-safe: calc(var(--jbar-h) + env(safe-area-inset-bottom)); scroll-padding-bottom: calc(var(--jbar-h) + 16px); } }`. `main#main`, the footer (`padding-bottom: calc(48px + var(--jbar-safe))`) and the toast all read `--jbar-safe`, so the last step and the footer are never covered.
- Sheet: closes on summary tap, scrim tap, Esc, or a journey link tap (rail.ts, 9.6). Not modal, no focus trap; focus stays where the user put it.

**Desktop (≥900): the rail.** `.jbar { position: sticky; top: calc(var(--header-h) + 24px); max-height: calc(100dvh - var(--header-h) - 48px); overflow: auto; background: none; border: 0; padding: 0; }` · `.jbar-count` visible · `.jbar-meter { position: relative; top: 0; margin: 8px 0 12px; }` · `.jbar-row { display: grid; height: auto; padding: 0; gap: 8px; }` · `.jbar-next` becomes the **primary** block button: `--ink` fill, `--on-ink` text, `--r-ctl`, padding 8px 14px, min-height 56px, label "Next step" in `--on-ink` 600, title 2 lines max · coordinate button full width, copy icon visible · `.jbar-sheet > summary { display: none; }` and the details is forced open (rail.ts) · `.sheet-panel { position: static; max-height: none; box-shadow: none; border: 0; padding: 0; background: none; }` · the phone count inside the panel is hidden.

**Journey list** (`ol.journey`, the mini ley line): rows are 44px links (no underline), `display: grid; grid-template-columns: 14px minmax(0,1fr) auto; column-gap: 10px;` name 15px 600 `--ink` (wraps), level tag and count on a second line at 14px (`--ink-3`). A 2px dashed `--ley-ahead` line runs through the stones' centres (`.journey::before`); stones are 10px diamonds: hollow `--ink-2` (future), fel + glow + 700 name + visible "Your level" (`a[data-now='current']`; `.j-here` is `display: none` otherwise), filled `--ink-2` when complete (`li[data-complete]`, set by progress.ts). Section labels use the new optional bracket `short` field (12.1) and fall back to `title`.

**Contract:** `[data-progress-bar]` (width %), `[data-progress-text]` (several instances allowed), `[data-action="resume|my-level|hide-done|backup|restore|reset"]` (one each), `[data-backup-code]`, `[data-backup-status]`, `html.hide-done`, storage keys `progress:<scope>`, `hide-done:<scope>`; new `view:<scope>`, `[data-next-title]`, `[data-next-coord]`, `[data-count-for]`, `[data-action="view"]`.

### 8.7 Library book row

Same waymark row as 8.4 (books are a checklist and get the ley line), kind glyph `book`, inside `section.zone[data-group][id]` sheets. Content: title (`b.title ?? 'Library book'`, 19px 700, Wowhead link if any) + "Done" tag; facts = level tag `Lv 12+` (no ladder) + Trust seal; detail = location line (`b.location`, 15px `--ink-2`), note, coordinate button (row variant ref with kind `book`). Zone header: H2 zone name (Texturina) + count `[data-group-count="long"]` + secondary button "Copy all {n} waypoints" (`[data-copy]` with all commands joined by `\n`, `copy` icon with `[data-copy-icon]`). Rows keep `data-lmin={b.level ?? 1} data-lmax="60"`, `data-title`, `data-way`, `data-way-label`. The "/ttpaste" tip becomes a Tip callout. Turn-in NPCs (row refs with coordinates) and Rewards (inline refs) are two `.card`s in the head slot (2 columns ≥700).

### 8.8 Tables (`table.data`)

```html
<div class="table-wrap"><table class="data stack" role="table">
  <thead role="rowgroup"><tr role="row"><th role="columnheader" scope="col">Level</th>…</tr></thead>
  <tbody role="rowgroup"><tr role="row" data-lmin="10" data-lmax="10">
    <td role="cell" class="c-lv"><span class="tag num">Lv 10</span><span class="tag now">Now</span></td>
    <td role="cell" class="c-main">…</td><td role="cell" class="c-num num">1/5</td><td role="cell" class="c-why">…</td></tr></tbody>
</table></div>
```
- **≥600:** `.table-wrap { border: 1px solid var(--rule); border-radius: var(--r-sheet); background: var(--sheet); overflow-x: auto; }` (safety net only). Header: sentence case, 15px 700 `--ink-2`, 2px `--edge` bottom border, no uppercase, no tracking. Cells 16px, padding 12px, row min-height 48px, 1px `--rule` row lines, no zebra, no vertical rules. Numbers right-aligned `.num`.
- **Level states:** `tr[data-now='current'] td:first-child { box-shadow: inset 3px 0 0 var(--fel-line); }` and its `.tag.now` shown (`.tag.now { display: none }` unless the row is current); `tr[data-now='past'] { color: var(--ink-2); }`. Never opacity.
- **<600, `table.data.stack` only:** two-line records.
```css
@media (max-width: 599px) {
  .data.stack, .data.stack tbody, .data.stack tr, .data.stack td { display: block; }
  .data.stack thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  .data.stack tr { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; column-gap: 10px; row-gap: 4px; padding: 12px 0; border-bottom: 1px solid var(--rule); }
  .data.stack td { padding: 0; border: 0; grid-column: 1 / -1; }
  .data.stack td.c-lv { grid-column: 1; } .data.stack td.c-main { grid-column: 2; font-weight: 700; } .data.stack td.c-num { grid-column: 3; text-align: right; }
  .data.stack td[data-label]::before { content: attr(data-label) ' '; font-weight: 700; color: var(--ink-3); }
  .table-wrap:has(.stack) { border: 0; background: none; overflow: visible; }
}
```
  Line 1 = level tag + primary name (bold) + numeric value; then "Why" full width at 16px; any other column as "Label value" via `data-label`. Target 64–96px per row.
- Tables with ≤2 columns (Start addons) stay real tables on phones (no `.stack`).
- Mapping: Talent plan → `Level c-lv | Talent c-main | Points c-num | Why c-why`. New spells by level → `Level c-lv | You can learn c-main` (inline refs, `.stack`). Systems boosts → `Boost c-main | What it does c-why | How to get it [data-label="How to get it"] | Trust c-num (static seal)`. Professions skill tables → `Skill c-lv | Milestone c-main | …` remaining columns with `data-label`.
- A table that can neither stack nor fit (none today): `.table-wrap` with `tabindex="0"`, `role="region"`, `aria-label`, edge-shadow scroll hint and a visible caption "Swipe sideways for more columns".

### 8.9 Filters: search, select, switch, verdict chips (Bag advisor; search also Glossary)

- Form `#bag-filters` (keep `onsubmit="return false"`): `.field` "Search your bags" (search field per 6.4, placeholder "Cloth, wand, crate…", `name="q"`), `.field` "Category" (`select name="cat"`, "All categories" first), `label.switch` "Only my level" (`input type="checkbox" name="mine" role="switch"`; when `html:not([data-level])` the label shows " (set your level first)" via a static span hidden by CSS when a level exists; the input stays enabled so the saved state survives).
- **Verdict chips** (`div.chips[role=group][aria-label="What to do with it"]`, flex-wrap, gap 8px, **wrap, never scroll sideways**): `button.chip.act-{id}[data-act][aria-pressed]`:
```html
<button type="button" class="chip act-sell" data-act="sell" aria-pressed="false">
  <Icon name="sell" class="chip-icon" /><Icon name="check" class="chip-check" />Sell <span class="chip-count num">12</span></button>
```
```css
.act-keep { --v: var(--v-keep); } .act-bank { --v: var(--v-bank); } .act-sell { --v: var(--v-sell); } .act-auction { --v: var(--v-auction); }
.act-buy { --v: var(--v-buy); } .act-use { --v: var(--v-use); } .act-destroy { --v: var(--v-destroy); }
.chip { display: inline-flex; align-items: center; gap: 8px; min-height: var(--hit); padding: 0 12px; border: 1px solid var(--edge);
        border-radius: var(--r-ctl); background: var(--raised); color: var(--ink); font: 700 var(--fs-sm)/1 var(--font-body); cursor: pointer; touch-action: manipulation; }
.chip:hover { background: var(--hover); }
.chip-icon { color: var(--v); } .chip-count { font-weight: 600; color: var(--ink-3); } .chip-check { display: none; }
.chip[aria-pressed='true'] { background: var(--v); border-color: var(--v); color: var(--on-color); }
.chip[aria-pressed='true'] .chip-count { color: var(--on-color); }
.chip[aria-pressed='true'] .chip-icon { display: none; } .chip[aria-pressed='true'] .chip-check { display: block; }
```
  Order: Keep, Sell, Buy, Auction, Bank, Use, Destroy (frequency for beginners); chips with count 0 hidden (as today).
- **Status line** `#bag-status` (`aria-live="polite"`, 15px `--ink-2`): "Showing **3** of 78 items: Sell, level 14." Without a level and "Only my level" on: "Showing 78 of 78. Set your level at the top to filter by level."
- **Empty state** `#bag-empty`: `.callout.info` "No items match “wand” at level 14. Clear the search or turn off Only my level." + `.btn` "Clear filters" (clears q, cat, chips; calls the existing `apply()`).
- **Layout:** <900 the form is in flow above the ledger (not sticky). ≥900 the form is the Base rail (sticky, `top: calc(var(--header-h) + 24px); max-height: calc(100dvh - var(--header-h) - 48px); overflow: auto;`), fields full width, chips wrap inside the 240px rail.
- **Contract:** `#bag-filters`, `[data-act]` + `aria-pressed`, `input[name=q]`, `select[name=cat]`, `input[name=mine]` (checkbox), `#bag-items`, `.item[data-act][data-cat][data-lmin][data-lmax][data-text]`, `#bag-status`, `#bag-empty`, storage key `bags-filter`. The bag script is unchanged except the status string and the Clear filters button.

### 8.10 Bag item: the ledger row

```html
<article class="item act-buy" data-act="buy" data-cat="consumable" data-lmin="5" data-lmax="15" data-text="…">
  <span class="verdict"><Icon name="buy" size={16} />Buy</span>
  <div class="item-main">
    <h3 class="item-name"><a href="https://www.wowhead.com/forever/item=…">Refreshing Spring Water</a></h3>
    <div class="facts"><span class="tag num">Lv 5–15</span><span class="kind">Food &amp; drink</span><Trust c="official" urls={…} report={`bag advisor "${name}"`} /></div>
    <p class="item-why">Drinking restores mana between fights, so you rest less.</p>
  </div>
  <ul class="ref-list item-where">…RefItem kind="vendor" price="25c" detail="Kharanos, Dun Morogh"…</ul>
</article>
```
- `#bag-items` is **one** `--sheet` list (full-bleed on phones, 1px `--rule` between rows, padding 14px 16px); ≥600 1px `--rule` border + `--r-sheet`. No cards, no shadows, no 3-column grid.
- **Verdict stamp** `.verdict`: min-width 92px, min-height 32px, padding 0 8px, 1.5px solid `var(--v)`, `--r-tag`, background `color-mix(in srgb, var(--v) var(--tint), var(--sheet))`, text and icon `var(--v)`, 15px 700. Uses the item's `act-*` class for `--v`.
- <900: stamp and name on line 1 (`display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: baseline`), then facts, why (17px, ≤64ch), where rows.
- ≥900: grid `grid-template-columns: 112px minmax(0, 1fr) 248px; column-gap: 20px;` stamp | main | where.
- Item name: 19px 700, the Wowhead link in quality colour (underlined).
- Price: printed as given ("25c", "1s 25c for 5"), `.num` 700 `--ink-2`. No coin glyphs (the data is free text).
- `[hidden]` rows stay hidden (filter). Focus goes only to links and buttons inside.
- **Rules of thumb** (head slot, above the filters): **one** `--sheet` block titled "Rules of thumb" (H2) with four rows, each = verdict stamp + sentence with a bold lead-in: "[Sell] **Grey item?** Sell it to any vendor. Always." "[Keep] **Letter, note or odd object from a quest?** Keep it until the quest is done; deleting it abandons the quest." "[Keep] **Cloth?** Keep it. Tailoring eats it, and Waylaid Crates want it." "[Sell] **Mail or plate armor?** You can't wear it. Sell it, or auction it if it's green or better." Not four cards.

### 8.11 Milestone timeline (guide overview)

`ol.timeline`, each `li[data-lmin][data-lmax]`: grid `64px (level, .num 700 right-aligned) | 20px (node on a 2px line) | content` (52px level column below 600). Content: title link (17px 700, gold) and body (17px `--ink-2`), stacked; "Now" tag shown when current. States: past = filled `--ink-2` circle (12px) + solid line above; current = fel circle + glow + "Now" tag; future = hollow circle + dashed line. No opacity. Line: `li::before` segment per row, same three styles as the ley line.

### 8.12 Glossary

- Head: PageHead (no breadcrumb). Then a search `.field` "Find a word" (`#gloss-q`, keep id), sticky under the header on phones (`position: sticky; top: var(--header-h); background: var(--ground); padding-block: 8px; z-index: 5`), with a live count `<p id="gloss-count" aria-live="polite">Showing 43 of 43 words</p>`; empty result: "No word matches “xyz”. Try a shorter word."
- Letter row (≥600): wrapped row of 44×44 quiet `.btn` links for letters that have entries (computed at build time), each `href="#letter-x"`; the first entry of each letter carries `id="letter-x"`. Hidden below 600 (search is faster).
- Entries: `dl.gloss` single column (not a card grid); each `div.entry[id]`: `dt` 19px 700 `--ink`, `dd` 17px/1.55 `--ink-2`, ≤64ch; 1px `--rule` between entries, padding 16px 0.
- `:target`: `--lit` background, `box-shadow: inset 4px 0 0 var(--fel-line)`, padding-left 12px.
- `.term` links elsewhere stay dotted-underline links to `/glossary/#slug`. Add entries "Lv" and "Waypoint (/way)" if missing.
- Contract: `#gloss-q`, `#gloss .entry[data-text]` filter script (extend it to update `#gloss-count`).

### 8.13 Home (`index.astro`, Base `wide`)

```
[hero: text]                         [guide card]          (2 columns >= 900: 1fr | 380px; stacked below)
H1 "Your first character in WoW: Forever, one step at a time."   (Texturina 700 --fs-hero, max 18ch)
Lede (keep current copy)
[New to WoW? Start here] (primary)  [Open the Gnome Warlock route] (secondary)    48px, full width on phones
(calendar-free) launch line: "Forever launches Wed 4 Nov 2026, 3:00 pm PST. In 6 days, 7 hours."   (15px, .num)
----------------------------------------------------------------------------------
The road from level 1 to 60   (H2)
ol.road  (11 stops from the route brackets)
----------------------------------------------------------------------------------
What's inside (H2): 2-column list (1 column on phones) of 6 rows: icon 24 + title link 19px 700 + one line 15px --ink-2
How much to trust what you read (H2): 4 static seals with one line each (same copy as the footer legend, fuller sentences)
```
- **Guide card** (`a.card.guide-card`): "Alliance, available" as a small `--ink-3` line (comma, not middot), H3 "Gnome Warlock" (22px 700), blurb, and a fel diamond + "Start at Coldridge Valley". The "Coming after launch" card: dashed `--rule` border, `--ink-3` text, no link. On phones the guide card is within the first 844px.
- **Road** (`ol.road`): each `li[data-lmin][data-lmax] > a[href="/guides/gnome-warlock/route/#{id}"]` (min 44px target): stone (22px diamond), level tag, short name (2 lines max), and `.road-here` "You are here" (shown only when current). Phones: vertical, exactly like the journey list (line at left, rows 48px). ≥900: `display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));` a horizontal 3px line through the stones (`li::before` per stop covering the stop's width: dashed ahead, solid travelled, fel lit); labels centred under each stone, 15px 600. Built from `routeFor('gnome-warlock').brackets` at build time. No SVG path math, no map art.
- **Launch line:** keep the existing countdown script but output: before launch "Forever launches Wed 4 Nov 2026, 3:00 pm PST. In {d} days, {h} hours." (update once a minute); after: "WoW: Forever is live. Go get that Imp!" Use `<time datetime>` for the date. Plain text line, no pill.
- **Continue CTA (optional, do last):** if `progress:route:gnome-warlock` has ticks, the two CTAs swap: primary "Continue: {first unticked step title}" linking to the route `#{id}` (step list embedded as `<script type="application/json" id="route-steps">`), secondary "New to WoW? Start here".

### 8.14 Guide overview (`guides/[guide]/index.astro`)

Head slot: PageHead (title "Gnome Warlock", lede = blurb, `levelPrompt`), GuideNav. Body: the two cards ("Why it's a great first character", "The short version" with the primary "Open the route") in `.grid`; H2 "Milestones on the way to 60" + timeline (8.11); H2 "Gnome racial abilities" as **rows** (`ul.rows`: each row H3 19px 700 name, effect paragraph, "**For you:**" line in `--ink-2`, Trust seal) separated by 1px `--rule`, not a 3-up card grid; pager.

### 8.15 Content pages (Start, Systems, Talents, Professions)

- Head slot: PageHead (+ GuideNav on Talents/Professions), then OnThisPage in the rail slot (`rail="lg"`).
- `ul.toc` pill rows → OnThisPage items.
- `.grid` of `.card`s stays where the items belong together (Start "Your first hour" 8 → 2×4; Systems Camping 4 → 2×2; Legacy 2; Talents "Other ways to play", "What to press", Demons; Professions alts); cards are flat (6.5).
- Demon cards: the "Level 10" eyebrow becomes a level tag `Lv 10` before the H4; cards with `data-now='current'` get `box-shadow: inset 3px 0 0 var(--fel-line)` + "Now" tag.
- Tables per 8.8. Rank "0/5" in `.c-num` tabular.
- Start page monster colours (`.lvl.grey|green|yellow|orange|red`): render as **dot + word** using `--con-*` (a 9px dot in the colour, the word in `--ink` 700), e.g. "● grey gives no XP". This is the teaching context for the ladder used on route tags.
- Start "Before launch" numbered list and "Mistakes to avoid": bold imperative lead-in + one sentence (Blizzard starter-guide pattern), numbers in `--ink-3` 700 tabular (real sequences only).
- Hotkeys as `kbd`; menu paths "Game Menu > Options > Keybindings" with the `>` as text (or a chevron icon).
- All `.callout` uses become `Callout` with a label (8.1). Systems "official mechanics · beta-tested…" lines become sentences with static seals (8.2).
- Pager at the end of Talents and Professions (7.5).

---

## 9. Scripts (deltas; every existing contract kept)

### 9.1 `src/scripts/level.ts`

```ts
export type Ladder = 'too-hard' | 'hard' | 'on-level' | 'easy' | 'trivial';
const LADDER_WORD: Record<Ladder, string> = { 'too-hard': 'too hard', hard: 'hard', 'on-level': 'on level', easy: 'easy', trivial: 'trivial' };
export function ladder(level: number, min: number, max: number): Ladder {
  if (level >= min - 2 && level <= max + 2) return 'on-level';   // yellow band is +-2, as in game
  if (level < min) return min - level >= 5 ? 'too-hard' : 'hard';
  return level - max >= 8 ? 'trivial' : 'easy';
}
```
In `markLevels(level)` add, after the existing loop:
- `document.documentElement.toggleAttribute('data-level', level !== null)` (`dataset.level = String(level)` when set).
- For every `[data-ladder-tag]`: if level is null, remove `data-ladder` and empty its `.ladder`; else set `data-ladder` and the `.ladder` text from `LADDER_WORD`.
- `document.querySelectorAll('[data-level-value]').forEach(el => (el.textContent = level === null ? '' : String(level)))`.
- Stepper state: `[data-action="level-down"]` disabled when `level === 1`; `[data-action="level-up"]` disabled when `level === 60`.

In `initLevel()` add:
```ts
document.querySelectorAll<HTMLButtonElement>('[data-action="level-down"],[data-action="level-up"]').forEach((btn) =>
  btn.addEventListener('click', () => {
    if (!input) return;
    const cur = Number(input.value);
    const step = btn.dataset.action === 'level-up' ? 1 : -1;
    input.value = String(Number.isFinite(cur) && cur >= 1 ? Math.min(60, Math.max(1, cur + step)) : 1);
    input.dispatchEvent(new Event('change', { bubbles: true }));   // the existing handler clamps, saves, marks, dispatches waypoint:level
  }),
);
document.querySelectorAll('[data-action="focus-level"]').forEach((b) => b.addEventListener('click', () => input?.focus()));
```

### 9.2 `src/scripts/progress.ts`

Keep: storage key `progress:<scope>`, `hide-done:<scope>`, backup code format, `render()` responsibilities. Changes:
1. **Bind every instance** of an action: replace each `document.querySelector('[data-action="X"]')?.addEventListener(...)` with `document.querySelectorAll('[data-action="X"]').forEach(el => el.addEventListener(...))`; `setHide` sets `aria-pressed` on all hide-done buttons.
2. **Next step** in `render()` (independent of script order):
```ts
const level = getLevel();
const inLevel = (el: HTMLElement) => level !== null && level >= Number(el.dataset.lmin) && level <= Number(el.dataset.lmax);
const open = boxes.filter((b) => !b.checked).map((b) => b.closest<HTMLElement>('.step')!).filter(Boolean);
const next = open.find(inLevel) ?? open[0] ?? null;
document.querySelectorAll<HTMLElement>('.step[data-next]').forEach((s) => { s.removeAttribute('data-next'); s.removeAttribute('aria-current'); });
if (next) { next.setAttribute('data-next', ''); next.setAttribute('aria-current', 'step'); }
document.querySelectorAll<HTMLElement>('[data-next-title]').forEach((el) => (el.textContent = next ? next.dataset.title ?? '' : 'Route complete'));
document.querySelectorAll<HTMLButtonElement>('[data-next-coord]').forEach((btn) => {
  const way = next?.dataset.way;
  btn.hidden = !way;
  if (!way) return;
  btn.dataset.copy = way;
  btn.setAttribute('aria-label', `Copy ${way}`);
  const label = btn.querySelector('[data-way-label]'); if (label) label.textContent = next!.dataset.wayLabel ?? '';
});
```
   Re-render on level changes: `document.addEventListener(LEVEL_EVENT, render)` (import `LEVEL_EVENT`).
3. **Counts:** inside the group loop also set `[data-group-count="long"]` to `${n} of ${m} done` (others keep `${n}/${m}`), set `[data-group-bar]` width to `${m ? (n / m) * 100 : 0}%`, and for `group.id` update `[data-count-for="${group.id}"]` text `${n}/${m}` and toggle `data-complete` on its closest `li`.
4. **Resume** prefers `.step[data-next]`: `scrollToEl(document.querySelector('.step[data-next]') ?? boxes.find((b) => !b.checked)?.closest('.step'))`. Resume and Jump to my level close an open phone sheet first (`document.querySelectorAll<HTMLDetailsElement>('details[data-sheet][open]').forEach(d => { if (!matchMedia('(min-width: 900px)').matches) d.open = false; })`).
5. **Reduced motion:** `el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })`.
6. **View:** `const setView = (v: 'full' | 'compact') => { root.classList.toggle('view-compact', v === 'compact'); document.querySelectorAll<HTMLElement>('[data-action="view"]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === v))); save(`view:${scope}`, v); };` initial `setView(load(`view:${scope}`, 'full'))`; click handlers on `[data-action="view"]`.
7. **Details toggle** (delegated): on click of `[data-action="details"]`, toggle `.open` on its `.step`, set `aria-expanded`, and set `[data-details-label]` to "Hide details" / "Show details". When a step is ticked, remove `.open` from it (it folds).
8. **Ignite gate:** after the first `render()`, `requestAnimationFrame(() => root.classList.add('ley-ready'))`.
9. Reset confirm copy: `confirm(\`Untick all ${boxes.length} steps on this checklist? This can't be undone.\`)`. Restore success also calls `toast(\`Restored ${done.size} ticked steps.\`)`.

### 9.3 `src/scripts/copy.ts` and new `src/scripts/toast.ts`

```ts
// toast.ts
let timer: number | undefined;
export function toast(msg: string) {
  const el = document.getElementById('toast'); if (!el) return;
  el.textContent = msg; el.setAttribute('data-show', '');
  window.clearTimeout(timer);
  timer = window.setTimeout(() => { el.removeAttribute('data-show'); window.setTimeout(() => { if (!el.hasAttribute('data-show')) el.textContent = ''; }, 300); }, 3000);
}
```
In `initCopy` after `copyText`: if `btn.querySelector('[data-copy-icon]')` → `btn.dataset.state = ok ? 'copied' : 'failed'` and remove it after 1400ms (do **not** touch `textContent`); else keep the current text-swap fallback. Keep adding/removing `.copied`. Then `toast(ok ? (lines > 1 ? \`Copied ${lines} waypoints\` : \`Copied ${text}\`) : "Copy didn't work. Long-press the coordinates to copy them.")` where `lines = text.split('\n').length`.

### 9.4 `src/scripts/theme.ts`

Keep `ORDER`, storage key, `apply()`. Add `const NAME = { system: 'Auto', light: 'Light', dark: 'Dark' }` and a `paint(t)` that sets `[data-theme-label]` text, `aria-label` = `Theme: ${NAME[t]}. Change theme`, and shows only `[data-theme-icon="${t}"]` (others `hidden`). Call `paint` on init and on click. Remove the `title`-only state.

### 9.5 New `src/scripts/menu.ts` (called from Base)

```ts
export function initMenu() {
  const header = document.querySelector<HTMLElement>('.site-header');
  const btn = document.querySelector<HTMLButtonElement>('[data-action="menu"]');
  const panel = document.getElementById('site-menu');
  if (!header || !btn || !panel) return;
  const label = btn.querySelector('[data-menu-label]');
  const set = (open: boolean, returnFocus = false) => {
    header.toggleAttribute('data-menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Close' : 'Menu';
    if (open) panel.querySelector<HTMLElement>('a, button')?.focus();
    else if (returnFocus) btn.focus();
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && header.hasAttribute('data-menu-open')) set(false, true); });
  document.addEventListener('click', (e) => {
    if (!header.hasAttribute('data-menu-open')) return;
    const t = e.target as Element;
    if (t.closest('#site-menu a') || (!t.closest('#site-menu') && !t.closest('[data-action="menu"]'))) set(false);
  });
  matchMedia('(min-width: 1200px)').addEventListener('change', () => set(false));
}
```
The menu/close icon swap is CSS: `.site-header[data-menu-open] .menu-btn .i-menu { display: none }` and the reverse for `.i-close`.

### 9.6 New `src/scripts/rail.ts` (called from Base)

```ts
export function initRail() {
  document.querySelectorAll<HTMLDetailsElement>('details[data-open-from]').forEach((d) => {
    const mq = matchMedia(`(min-width: ${d.dataset.openFrom}px)`);
    const sync = () => { d.open = mq.matches; };
    sync(); mq.addEventListener('change', sync);
    if (d.hasAttribute('data-sheet')) {
      d.addEventListener('click', (e) => { if (!mq.matches && (e.target as Element).closest('.sheet-panel a')) d.open = false; });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && d.open && !mq.matches) { d.open = false; d.querySelector('summary')?.focus(); } });
    }
  });
}
```
Also scroll the active GuideNav link into view on load (2 lines in GuideNav's own `<script>`).

### 9.7 Bag page script

Unchanged filtering logic. Update the status string (8.9), wire "Clear filters", and nothing else. `initLevel` already re-dispatches `waypoint:level`.

---

## 10. Voice and copy rules

1. **Sentence case everywhere** (headings, buttons, tabs, table headers, labels, callout labels). No ALL CAPS, no tracked caps, no Title Case.
2. **Plain player-side words, one name per action:** "My level", "Next step" (marker), "Go to next step" (button on desktop; the dock says "Next step" + title), "Jump to my level", "Copy /way" → "Copied /way …", "Hide done steps", "Full / Compact", "Show details / Hide details", "Mark done", "Move progress to another device", "Make backup code", "Restore from code", "Untick everything". Jargon links to the glossary with `.term` the first time it appears on a page.
3. **Verbs on controls;** step titles may start with a verb ("Pick up", "Train", "Run"); keep existing data titles as they are.
4. **No decorative typography:** no "→" appended to links or buttons (a "→" inside step or quest titles is data and stays), no " · " meta strings (use commas, "in", line breaks or labelled facts), no "WORD — fragment" labels (the RefItem " – role" and " · from" runs are replaced by the detail line), no single accented word in a headline.
5. **Numbers:** level tags `Lv 12–20` (en dash, no spaces), prose "levels 12–20"; counts "3 of 12 done", compact "3/12"; coordinates `28.6, 66.1`; the `/way` command keeps TomTom format (`/way Dun Morogh 28.6 66.1 Name`); money as in game "1s 25c"; dates "29 Oct 2026"; times always with zone "Wed 4 Nov 2026, 3:00 pm PST".
6. **Honest certainty:** confidence words are exactly Official, Beta-tested, Community, Theory. Say "untested" once per bracket, not on every line.
7. **Errors and empties give direction**, in the interface's voice, without apology: "That code is for a different checklist. Make the code on this page." / "No items match “wand” at level 14. Clear the search or turn off Only my level."
8. **Flavour in one place:** zone names, "waystone", the road. No lore-purple UI prose ("Azeroth awaits, champion"). Keep the current plain copy and the "For you:" lines line for line.
9. Address the reader as "you". US spelling as in the existing copy ("color", "leveling"); "Untick" stays.

---

## 11. What not to do

**Brand impersonation (fan site, not Blizzard):** no Blizzard, WoW, Forever, Battle.net or Wowhead logos, medallions, emblems, lockups, mascots, class or faction crests; no Friz Quadrata, Semplicita Pro, Blizzard's display face, brother-1816 or lookalikes; no gold-gradient or metallic lettering, bevels, corner flourishes, scrollwork, torn-parchment edges, pennant banners, gold-fade dividers; no in-game UI chrome (stone/gold frames, action bars, quest-log frames, tooltip borders copied from the game); no key art, screenshots, renders or map art (the only game imagery is what Wowhead's `tooltips.js` serves); no "official" wording; no Wowhead chrome (game switcher, illustrated tiles, ad-shaped slots). The quest "!" and every other glyph are our own flat drawings.

**Generated-design tells:** no cream + high-contrast serif (our light ground is ochre vellum with navy ink; Texturina is low-contrast and limited to H1/H2); no near-black + one acid accent (fel lights at most 2–3 elements per screen; UI accents are ink buttons and gold links; the navy is the tooltip family, lifted); no SaaS card kit (no identical rounded cards with one soft shadow, no gradient washes, no hover lifts); no tracked caps eyebrows, middot meta, "WORD — fragment", monospace data labels, "→" on links; no numbered markers on non-sequences; no motion everywhere (only the ignite and state changes).

**Other don'ts:** no `opacity` for done/past; no hue-only meaning (every quality, verdict, kind, confidence and difficulty mark carries a word or shape); no quality colour outside item links; `--class` never on item names or chrome; no translucent or blurred sticky bars; nothing under 44px for primary controls; no text under 14px; no pills; no horizontal page scroll at 360px; no tables that clip on phones; no hover-only information (trust panel and sheets open on tap); no ads, link walls, `[edit]` chrome; no hero art that pushes the first action below the fold.

---

## 12. Implementation checklist (ordered by file; `npx astro build` must pass after each numbered step)

**12.1 Data and libs (first, tiny)**
- [ ] `src/data/schema.js`: `Bracket` gains `short: z.string().optional()` (journey list and road labels). Fill `short` in `route-gnome-warlock.json`: Coldridge Valley; Kharanos & Ironforge; Loch Modan & Redridge; Blackfathom & Wetlands; Southshore & Felhunter; Stranglethorn & Arathi; Riverglades & Stranglethorn; Level 40 & Tanaris; Feralas & Hinterlands; Un'Goro & Felwood; Plaguelands & Hyjal. Run `node scripts/validate-data.mjs`.
- [ ] `src/lib/wow.ts`: add `formatDate(iso)` ("29 Oct 2026").
- [ ] `src/lib/guides.ts`: add `guidePages(guide)` → `[{ href, label }]` (Overview, Route, Talents, spells & demons, Professions & alts).
- [ ] `src/lib/site.ts`: `nav` = 6 top-level items; the guide item gets `children` from `guidePages`; label "Warlock guide".

**12.2 `src/styles/global.css`**
- [ ] Replace tokens with section 2.1 (both dark blocks written out), add 2.2 aliases, quality overrides and the Wowhead underline rule.
- [ ] Base (6.1), tags (6.2), buttons (6.3), inputs/switch/segmented (6.4), cards/grid (6.5), callouts (8.1), seal/trust/sources (8.2), ref row + `.way` (8.3), tables (8.8), chips + verdict (8.9, 8.10), toast (7.8), `svg.i` (5).
- [ ] Delete `.eyebrow`, `.pill`, `.badge-*`, `.toc` pill styles, the `th` uppercase rule, `--font-mono`, `.card` shadow and hover lift, the old reduced-motion block (replaced by 2.1).
- [ ] `.wrap` = page-max + gutter; `main#main` spacing owner (4.2).

**12.3 `src/layouts/Base.astro`**
- [ ] Fonts link (3.1); keep the FOUC script and extend it to also read `waypoint:v1:level` (JSON) and set `document.documentElement.dataset.level` when it is a number 1–60 (no flash of the "unset" dashed level border); keep `whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: false }` + `tooltips.js` (defer).
- [ ] `<Icons />` sprite once at the top of `<body>`.
- [ ] Header per 7.1 (opaque, no blur), level stepper 7.2, theme button 7.3 inside `#site-menu .appearance`, Menu button.
- [ ] Props `rail?: 'md' | 'lg'`, `wide?: boolean`, `dock?: boolean`; slots `head`, `rail`, default; `main#main` grid (4.2) with `.page-head-area`, `aside.page-rail` (only when the rail slot is used), `.page-body`; `dock` puts `class="has-dock"` on `<html>` (8.6).
- [ ] Footer per 7.7 (static seals); `#toast`.
- [ ] Module script: `initLevel(); initTheme(); initCopy(); initMenu(); initRail();`.

**12.4 New components:** `Icons.astro`, `Icon.astro` (5), `Callout.astro` (8.1), `Trust.astro` (8.2), `OnThisPage.astro` (7.6), `GuidePager.astro` (7.5).

**12.5 Existing components**
- [ ] `PageHead.astro`: drop `eyebrow`; add `trail`, `facts`, `levelPrompt` (7.4).
- [ ] `GuideNav.astro`: links from `guidePages`, styles + scroll-into-view (7.5).
- [ ] `Badge.astro`: static `.seal` with pips (8.2).
- [ ] `Sources.astro`: 44px summary, list styling (8.2).
- [ ] `RefItem.astro`: row + inline variants, coordinate button with icon state (8.3).
- [ ] `StepCard.astro`: waymark row (8.4): grid, ring + kind glyph, next flag, facts with ladder tag, key way, Trust, refs, Mark done label, details toggle, `data-title/way/way-label`, `id="chk-…"`, class `theory` when confidence is theory. Remove the per-card Report link (it lives in the Trust panel).
- [ ] `ChecklistBar.astro`: dock/rail/sheet (8.6) with `sections`, `levelJump`, `nextLabel` props.

**12.6 Scripts:** `level.ts` (9.1), `progress.ts` (9.2), `copy.ts` + new `toast.ts` (9.3), `theme.ts` (9.4), new `menu.ts` (9.5), new `rail.ts` (9.6).

**12.7 `src/pages/guides/[guide]/route.astro`:** `<Base rail="md" dock>`; head slot = PageHead (trail "Gnome Warlock guide", facts Updated + Played in beta, levelPrompt) + GuideNav; rail slot = ChecklistBar with brackets as sections; body = "Good to know" callout ("How to read this", with a static Theory seal and `code` `/way`) + legs (8.5) with `ol.steps` + pager. Remove `.bracket-nav` and its styles; replace eyebrow and middot zones.

**12.8 `src/pages/library-books.astro`:** `<Base rail="md" dock>`; head slot = PageHead + the two cards (turn-in rows, rewards inline); rail = ChecklistBar `levelJump={false}` `nextLabel="Next book"` with zones as sections (zone sections get `id={slug(zone)}`); body = Tip callout ("/ttpaste") + zone sheets with book waymark rows (8.7) + "Copy all {n} waypoints".

**12.9 `src/pages/bags.astro`:** `<Base rail="md">`; head = PageHead (`levelPrompt`) + Rules of thumb block; rail = filter form (8.9); body = `#bag-items` ledger (8.10) + `#bag-empty` callout with Clear filters. Keep the script (status copy + clear only).

**12.10 Content pages**
- [ ] `guides/[guide]/index.astro` (8.14), `talents.astro` (8.15, tables 8.8, demon tags, Now tags, pager), `professions.astro` (8.15, pager), `systems.astro` (8.15), `start/index.astro` (8.15, con dots, kbd), `glossary.astro` (8.12), `index.astro` (8.13).
- [ ] Replace every `.pill`, `.eyebrow`, `.toc`, `Badge + Sources` pair, `.callout` without label, middot string and "→" suffix on links.

**12.11 Assets:** `public/favicon.svg` = `mark` glyph (5).

**12.12 Cleanup:** remove the 2.2 aliases and fix every remaining reference (`grep -rn "var(--\(bg\|surface\|surface-2\|text\|muted\|border\|accent\|gold\|radius\|max\)\b" src`); remove `.btn.small` and any `class="small"`; `npx astro build`; `node scripts/validate-data.mjs`; run the acceptance checks (13).

---

## 13. Acceptance checks (all must pass; Playwright + Chromium, both themes via `data-theme`, widths 360 / 390 / 899 / 1199 / 1280)

**13.1 Build and data:** `npx astro build` succeeds; `node scripts/validate-data.mjs` passes; no console errors on any page.

**13.2 Layout:** on every page (home, start, overview, route, talents, professions, bags, systems, library-books, glossary) `document.documentElement.scrollWidth === clientWidth` at 360, 390, 899, 1199, 1280, in both themes, with the menu closed and open, with `tooltips.js` loaded and blocked. The header bar's children fit on one line at 360 and at 1200 (no wrapping, no clipped "Glossary"). The Gnome Warlock guide card's top is within the first 844px at 390×844.

**13.3 Contrast pairs (WCAG 2.x; recompute from the computed styles in the built site):**

| Pair | Min | Light | Dark |
|---|---|---|---|
| body `--ink` on `--ground` / `--sheet` / `--lit` | 4.5 | 11.8 / 13.6 / 12.0 | 13.7 / 12.5 / 10.6 |
| `--ink-3` on `--ground` / `--sunken` / `--lit` | 4.5 | 5.2 / 4.8 / 5.4 | 6.5 / 7.1 / 5.0 |
| `--link` on `--ground` / any callout tint / `--lit` | 4.5 | 5.2 / ≥5.0 / 5.3 | 10.4 / ≥6.9 / 8.0 |
| q0–q5 on `--ground` and on `--lit` (worst) | 4.5 | ≥4.8 | ≥4.8 |
| verdict text on its tint; `--on-color` on verdict fill (pressed chip) | 4.5 | ≥4.7; ≥5.7 | ≥5.5; ≥7.6 |
| callout label `--on-color` on colour; body `--ink` on tint | 4.5 | ≥5.7; ≥11.3 | ≥7.6; ≥9.2 |
| primary button `--on-ink` on `--ink` (and hover) | 4.5 | 13.6 (9.7) | 13.7 (10.9) |
| "Next step" flag `--on-fel` on `--fel` | 4.5 | 6.0 | 10.7 |
| ladder con colours on `--sheet` | 4.5 | ≥5.6 | ≥5.7 |
| `--edge` (every control boundary, ahead line) vs adjacent surface | 3.0 | ≥3.1 | ≥3.1 |
| `--focus` ring vs ground / sheet / raised / lit | 3.0 | ≥11.8 | ≥8.0 |
| lit line `--fel-line` vs ground; travelled `--ink-2` vs ground | 3.0 | 4.0; 8.1 | 10.7; 9.8 |
Also: with the real `tooltips.js` loaded, a light-theme `a.q1` computes to `rgb(28, 35, 55)` and a dark-theme `a.q1` to `rgb(243, 238, 226)`; Wowhead links keep an underline.

**13.4 Targets:** on phones every `button`, `summary` (except `.trust > summary`), `.check`, `.way`, `.chip`, nav/menu link, `.lvl-btn`, pager link and input has a bounding box ≥44×44 (inputs ≥48 tall below 900). `.trust > summary` is ≥32 tall with a ≥44px hit area (its `::before`), and ≥8px from neighbouring targets. The step checkbox hit area is only the 44×44 waymark (tapping the title does not tick).

**13.5 Focus:** tab through header (brand, nav/menu, theme, level −, input, +) → sub-nav → waymark → trust seal → coordinate button → dock; every focused element shows the 3px ring, and no focused element is hidden under the sticky header or the dock (check `getBoundingClientRect()` against header bottom and dock top). Esc closes the menu (focus returns to the Menu button) and the sheet (focus returns to its summary).

**13.6 Reduced motion:** with `reducedMotion: 'reduce'`, ticking a step changes state with no transition (computed `transition-duration` 0s on `.step::after`, `.ring`, `.way`), "Go to next step" jumps without smooth scrolling, the menu and sheet open instantly; nothing animates on page load.

**13.7 Interactions intact (both themes):**
- [ ] Ticking a waymark toggles `.done`, persists under `waypoint:v1:progress:route:gnome-warlock`, updates `[data-progress-text]` (all instances), `[data-progress-bar]` width, bracket `[data-group-count]` and mini bar, journey counts, `.complete`; reload keeps it.
- [ ] Exactly one `.step[data-next]` with `aria-current="step"`; with My level 14 it is the first unticked step whose range contains 14; with no level it is the first unticked step; the dock title and coordinate update after every tick and every level change.
- [ ] "Mark done" label ticks the same checkbox. Done steps fold; "Show details" reopens; ticking folds again.
- [ ] Go to next step, Jump to my level (focuses `#my-level` when unset), Hide done steps (persists `hide-done:<scope>`), Full/Compact (persists `view:<scope>`), Make backup code / Restore from code (wrong scope shows the error message), Untick everything (confirm) all work on phones (from the sheet) and desktop (from the rail).
- [ ] Level stepper −/+ and typing both update `data-now` everywhere, the ladder words, "You are here, at level N", table Now tags, the timeline, the home road and the bag filter; values clamp to 1–60; buttons disable at the ends; the value survives reload.
- [ ] Coordinate buttons copy the exact `/way` string, show the check for 1.4s without changing width, and announce via `#toast`; "Copy all {n} waypoints" copies all lines.
- [ ] Theme button cycles Auto → Light → Dark, the visible label and icon match, the choice persists, and no flash of the wrong theme on reload.
- [ ] Bag advisor: search, category, Only my level, every chip (toggle, multiple), saved filter state (`bags-filter`), live status, empty state and Clear filters. Filtered-out rows compute to `display: none` (the global `[hidden]` rule beats `.item` display).
- [ ] Glossary filter and count; `:target` highlight from a `.term` link.
- [ ] Menu opens/closes (button, Esc, outside tap, link tap); at ≥1200 the inline nav shows and the Menu button is gone.
- [ ] Library books: ticking, counts, next book in the dock, Copy all.

---

## 14. Wireframes

### 14.1 Route, 390px (night; day identical in structure)
```
┌──────────────────────────────────────────┐ 390
│ ◆ Waypoint       [ − │Lv 14│ + ]  [≡ Menu]│ 56 sticky, opaque --sheet
├──────────────────────────────────────────┤
│ Gnome Warlock guide                      │ breadcrumb (44px)
│ Leveling route                           │ H1 Texturina 600
│ Hub by hub, with the quests that matter… │ lede
│ Updated 29 Oct 2026                      │ facts dl
│ Played in beta  Levels 1–30              │
│ Overview  [Route]  Talents, spells & d… ▸│ sub-nav 44, scrolls
│ ┌ Good to know ┐                         │ callout label tab
│ │ Do the steps roughly in order…         │
│◆  [Lv 12–20] Loch Modan, Hall of         │ fel waystone (current)
│┃  Thanes & Redridge                      │ H2 24px
│┃  You are here, at level 14. Zones: …    │
│┃  ━━━━┄┄┄┄┄┄┄  2 of 12 done               │ mini meter
│┃  ▸ New talents and spells at levels…    │ details 48
│✓─│ Into Loch Modan: Thelsamar  [Done]    │ done: filled node, folded
│◉─│▌[Next step]                            │ lit row (--lit) + 4px fel edge
│┃ │▌Pick up every quest in Thelsamar      │ 19/700
│┃ │▌[● Lv 12–14 on level]  Quests         │ ladder dot + word
│┃ │▌⌖ Thelsamar, Loch Modan                │
│┃ │▌[●●○ Beta-tested ▾]                    │ trust seal
│┃ │▌Thelsamar is the town in the middle… │ body (~40ch)
│┃ │▌Quests                                 │ group label
│┃ │▌!  Rat Catching                        │ ref name (gold link)
│┃ │▌   From Mountaineer Kadrell            │ detail
│┃ │▌   [⌖ 37.2, 46.1 ⧉]                    │ coordinate button, own line
│┃ │▌[✓ Mark done]                          │
│○─│ Train at level 14                     │ lit (fel ring)
│┊ │ [● Lv 14 on level] Train ⌖ Ironforge  │
│◇  [Lv 20–25] Succubus, Blackfathom…      │ ahead: hollow stone, dashed
│┊  ┌ Untested ┐ (brackets from level 30)  │
├════════════●┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┤ meter on the dock's top edge
│ Next step                 [⌖ 37.2, 46.1] [☰]│ dock 64 + safe area
│ Pick up every que…                        │ (☰ = Sections and options sheet)
└──────────────────────────────────────────┘
```

### 14.2 Route, 1280px
```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ◆ Waypoint   Start here [Warlock guide] Bag advisor Forever systems Library books Glossary  [◐ Auto] [−│Lv 14│+] │ 64
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  Gnome Warlock guide / Leveling route (H1) / lede (≤62ch) / Updated 29 Oct 2026  Played in beta Levels 1–30│
│  Overview  [Route]  Talents, spells & demons  Professions & alts                                       │
│  ┌ rail 240 (sticky) ────┐  40  ┌ body 760 ───────────────────────────────────────────────────────┐   │
│  │ 20 of 65 steps done   │      │ ┌ Good to know ┐ …                                              │   │
│  │ ━━━━━●┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   ◆  │ [Lv 12–20] Loch Modan, Hall of Thanes & Redridge                │   │
│  │ ┌───────────────────┐ │   ┃  │ You are here, at level 14. Zones: …   ━━┄┄┄ 2 of 12 done         │   │
│  │ │Next step          │ │   ✓──│ Into Loch Modan: Thelsamar [Done]                               │   │
│  │ │Pick up every quest│ │   ◉──│▌[Next step] Pick up every quest in Thelsamar                    │   │
│  │ └───────────────────┘ │   ┃  │▌[● Lv 12–14 on level] Quests ⌖ Thelsamar, Loch Modan [●●○ Beta ▾]│   │
│  │ [⌖ 37.2, 46.1      ⧉] │   ┃  │▌!  Rat Catching                               [⌖ 37.2, 46.1 ⧉]  │   │
│  │ Sections              │   ┃  │▌   From Mountaineer Kadrell                                     │   │
│  │ ◆ Coldridge Valley 6/6│   ○──│ Train at level 14 …                                              │   │
│  │ ◆ Kharanos & I… 11/11 │   ┊  │                                                                  │   │
│  │ ◆ Loch Modan…  2/12 ← fel  │◇ [Lv 20–25] …                                                    │   │
│  │ ◇ …                   │      └──────────────────────────────────────────────────────────────────┘   │
│  │ [Jump to my level]    │                                                                             │
│  │ [Full|Compact]        │                                                                             │
│  │ Hide done steps  [○ ] │                                                                             │
│  │ ▸ Move progress…      │                                                                             │
│  │ [Untick everything]   │                                                                             │
│  └───────────────────────┘                                                                             │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 14.3 Bag advisor, 390px
```
┌──────────────────────────────────────────┐
│ ◆ Waypoint       [ − │Lv 14│ + ]  [≡ Menu]│
├──────────────────────────────────────────┤
│ Bag advisor (H1)                         │
│ Bags fill up fast. Here's what to keep…  │
│ Rules of thumb (H2)                      │ one sheet, 4 rows
│ [Sell] Grey item? Sell it to any vendor. │
│ [Keep] Letter, note or odd object…       │
│ [Keep] Cloth? Keep it…                   │
│ [Sell] Mail or plate armor? …            │
│ Search your bags                         │ visible label
│ [⌕ Cloth, wand, crate…               ✕]  │ 48
│ Category                                 │
│ [All categories       ⌄]                 │ 48
│ Only my level                     [━●]   │ switch 44
│ [Keep 19] [✓ Sell 12] [Buy 14]           │ chips wrap (pressed = solid fill + check)
│ [Auction 6] [Bank 7] [Use 9]             │
│ [Destroy 3]                              │
│ Showing 12 of 78 items: Sell, level 14.  │ live status
│┌─────────────────────────────────────────│ one full-bleed ledger sheet
││[{sell} Sell] Grey items (any)            │ stamp + name (q0 link)
││[Lv 1–60] Junk [●●● Official ▾]           │
││Grey means junk. Any vendor pays coins…  │
│├─────────────────────────────────────────│
││[{buy} Buy] Refreshing Spring Water       │ ({name} = hand-drawn SVG icons)
││[Lv 5–15] Food & drink [●●○ Beta-t… ▾]    │
││Drinking restores mana between fights…   │
││ person Innkeeper Belm             25c    │ vendor ref: name + price
││        Kharanos, Dun Morogh             │
││        [⌖ 47.4, 52.5 ⧉]                 │
│└─────────────────────────────────────────│
└──────────────────────────────────────────┘
```

---

## 15. Later (explicitly out of this pass)

Scroll-spy for the journey list; "Mark everything before my level as done"; a sticky bag-filter summary bar on phones; a tap "peek" card for Wowhead items on touch (if `tooltips.js` has no touch mode); per-page changelogs; a search across the guide; sticky table headers. Each needs its own spec note before it is built.
