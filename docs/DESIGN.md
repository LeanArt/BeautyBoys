# Waypoint design system: Ley Line Atlas

Waypoint is the pocket atlas a gnome warlock carries from Coldridge Valley to Mount Hyjal. Two materials swap places between the themes: **vellum** (ochre map paper, the day atlas) and **night** (deep tooltip navy, the night atlas). Both are written in **ink**, with **gold** links as on Wowhead and in game. One inked route runs through everything: the **ley line**. It is solid behind you, dashed ahead, lit with fel where your level is, and the **next step** glows.

- Living style guide: [`/design-system/`](../src/pages/design-system.astro) (linked from the footer). The tokens, and the real components (`StepCard`, `Leg`, `ChecklistBar`, `LedgerItem`, `PageHead`, `GuideNav`, `RefItem`, `WayButton`, `Trust`, `Badge`, `Callout`) rendered with fixture data in fixed states through their `demo` prop, so the guide cannot drift from the site. Small primitives (tags, buttons, fields, switches, the timeline and road, cards, rows) are shown as plain markup with the real classes. The checklist bar shows the mode for your window width (dock below 900px, rail from 900px). Switch the theme in the top bar to see the night atlas.
- Tokens and base styles: [`src/styles/global.css`](../src/styles/global.css). This is the single stylesheet; components carry only small page-specific `<style>` blocks.
- Token values as data (for the style guide): [`src/lib/tokens.ts`](../src/lib/tokens.ts). Keep it in sync with `global.css`.
- Icons: [`src/components/Icons.astro`](../src/components/Icons.astro) (the sprite) and [`src/components/Icon.astro`](../src/components/Icon.astro); names in [`src/lib/icons.ts`](../src/lib/icons.ts).

Stack rules: Astro 5, vanilla CSS custom properties, small vanilla TS in `src/scripts/`. No CSS framework, no icon library, no web fonts other than the two Google Fonts below.

---

## 1. Principles

1. **Glance first.** In two seconds at arm's length (phone or second monitor, mid-game) a player finds: what to do next, where it is (`/way`), and whether it suits their level. Those three get size, a fixed place (the dock) and fel.
2. **One meaning per hue.**
   - Fel = your next good move (the lit line, the next-step node, flag and row edge, Tip callouts, success).
   - Gold = link (and the quest "!", as in game).
   - Ink = primary action and "done".
   - Item quality colours = item links only. Verdict colours = bag verdicts only.
   - Confidence has no hue (pips + a word). Only Theory is tinted, because it is a warning.
3. **Shape says what it is.** Circles are places and progress on the map (waymarks, nodes, pips). 3px-radius stamps are static status. 5px-radius tools with a 44px target are things you press or type in. 8px paper holds things. No pills.
4. **Dense, not cramped.** 17px body, 19px step titles, 14px floor, 44px targets, rows instead of card grids.
5. **Night comfort.** No pure white text, no pure black ground, glow only on the lit line and the next node, no blur, no gradient washes.

---

## 2. Tokens

All tokens live at the top of `global.css`. The theme mechanism has three paths and they must stay in step:

```css
:root { … }                                                         /* day atlas (light) */
@media (prefers-color-scheme: dark) { :root:not([data-theme='light']) { … } }   /* system dark */
:root[data-theme='dark'] { … }                                      /* forced dark (theme button) */
```

The two dark blocks are **identical**: edit both. `theme.ts` sets `data-theme` on `<html>`; the inline script in `Base.astro` applies the saved theme before paint. Do not use `light-dark()` (older iOS Safari).

### 2.1 Colour

| Group | Tokens | Rule |
|---|---|---|
| Surfaces | `--ground` page, `--sheet` reading surfaces, `--raised` controls, `--sunken` keycaps/code, `--hover`, `--pressed`, `--lit` | `--lit` is only for the one "Next step" row (and the glossary `:target`). |
| Lines | `--rule` decoration, `--edge` control boundaries | Never use `--rule` as the only edge of a control (1.5:1). `--edge` is >= 3:1. |
| Ink | `--ink`, `--ink-2` secondary, `--ink-3` muted (>= 4.8:1), `--on-ink` | Never use `opacity` for done or past: use `--ink-2`. |
| Links, focus | `--link`, `--link-hover`, `--focus` | Gold links. The focus ring is ink by day, gold by night. |
| Fel | `--fel`, `--fel-line`, `--fel-glow`, `--on-fel` | At most 2–3 fel elements per screen. Glow is transparent by day. |
| Guide accent | `--class` | Per guide, see section 6. Never item names, never site chrome. |
| Semantic | `--info`, `--warn`, `--danger`, `--on-color`, `--tint` | Tinted surface = `color-mix(in srgb, X var(--tint), var(--sheet))`. |
| Ley line | `--ley-travelled`, `--ley-ahead`, `--ley-lit` | Solid ink-2 / dashed edge / fel. |
| Confidence | `--conf-pip`, `--conf-theory` | Monochrome pips; only Theory is coloured. |
| Bag verdicts | `--v-keep`, `--v-sell`, `--v-buy`, `--v-auction`, `--v-bank`, `--v-use`, `--v-destroy` | Icon + word always; colour third. |
| Difficulty ladder | `--con-red`, `--con-orange`, `--con-yellow`, `--con-green`, `--con-grey` | The in-game "con" colours, as a dot + word. |
| Item quality | `--q0` … `--q5` | `a.q0` … `a.q5` override the colours Wowhead's `tooltips.js` sets. Never outside a link. |

Every text pair meets WCAG AA (4.5:1) and every control boundary 3:1 in both themes. The computed values are in 2.1.1. Re-check with a contrast calculator whenever you change a value, and update the table.

#### 2.1.1 Contrast (computed; text needs 4.5:1, non-text 3:1)

Surfaces, in order: ground / sheet / raised / lit.

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

### 2.2 Type

Fonts come only from Google Fonts (one `<link>` in `Base.astro`):

| Family | Role | Never |
|---|---|---|
| **Texturina** 600/700 | H1, H2 (including waystone titles), the wordmark, the home hero | Body, step titles, labels, tables, buttons |
| **Atkinson Hyperlegible Next** 400/600/700 | Everything else: body, UI, data, coordinates, step titles, H3/H4, tables | – |

| Token | Size / line | Use |
|---|---|---|
| `--fs-hero` | 36–60 / 1.05 | Home hero H1 only |
| `--fs-3xl` | 30–44 / 1.1 | H1 |
| `--fs-2xl` | 24–28 / 1.15 | H2, waystone titles |
| `--fs-xl` | 22 / 1.25 | H3 on prose pages |
| `--fs-lg` | 19 / 1.35 | Step titles, item names, glossary terms; lede from 600px |
| `--fs-md` | 17 / 1.55 | Body, inputs (>= 16 avoids iOS zoom) |
| `--fs-table` | 16 / 1.45 | Table cells, ref names |
| `--fs-sm` | 15 / 1.45 | Nav, facts, detail lines, buttons, coordinates |
| `--fs-xs` | 14 / 1.4 | Tags, seals, group labels, callout labels (the floor) |

- Sentence case everywhere. No `text-transform: uppercase`, no tracked labels.
- No monospace anywhere. Numbers use `.num` (tabular, lining figures): levels, counts, coordinates, prices, dates.
- Formats: `Lv 12–20` (en dash, no spaces), "3 of 12 done" / "3/12", coordinates `28.6, 66.1`, money "1s 25c", dates "29 Oct 2026" (`formatDate()` in `src/lib/wow.ts`), times with a zone.

### 2.3 Space, radii, elevation, motion

- **Spacing:** a 4px grid, `--sp-1` (4) to `--sp-20` (80). `--section-gap` is 48px, 64px from 900px.
- **Layout:** `--gutter` 16 / 24 (600) / 32 (1200), `--page-max` 1200, `--main-max` 760, `--rail-w` 240, `--header-h` 56 / 64 (900).
- **Breakpoints:** 320 floor (360 is the common phone), 600 (tables become real tables, sheets get radius), 900 (rails, the dock moves into the rail, the ledger gets its stamp column), 1200 (inline top nav, "On this page" rail). Media queries use literal values. The header's are in `em` so they follow the browser's text size as well as the width: 22em (352px at 16px: the wordmark text hides, the link keeps its name), 24.9375em (399px: Menu and "Lv" labels hide) and 75em (1200px: inline nav). 20em (320px) makes the dock's coordinate button icon-only.
- **Text size:** everything is in `rem`, so a larger browser text size scales the type; the dock height `--jbar-h` is `max(64px, 2.375rem + 16px)` so its two-line "Next step" block always fits.
- **Radii:** `--r-tag` 3px, `--r-ctl` 5px, `--r-sheet` 8px, `--r-node` 50%. The pill (999px) is retired; the switch track is the one rounded exception.
- **Elevation:** flat. Only the menu panel, the bottom sheet and the toast use `--elev-pop`. Header and dock are opaque sheets with a 1px rule.
- **Motion:** `--dur-press` 80ms, `--dur-quick` 140ms, `--dur-base` 220ms (menu and sheet enter), `--dur-ley` 480ms (the "ignite": the travelled line draws down a ticked step). Nothing else animates on its own. Under `prefers-reduced-motion: reduce` every duration is 0.
- **Focus:** `:focus-visible` = 3px `--focus` outline, 2px offset, everywhere. Never remove it without a replacement.
- **Z-index:** node 1, header 30, dock 40, menu 45, toast 70, skip link 100. Wowhead's tooltip must stay above ours: never go over 1000.

---

## 3. Components

The style guide page shows these in their states. Contracts (selectors the scripts in `src/scripts/` depend on) are listed so restyling never breaks behaviour. `StepCard`, `Leg`, `ChecklistBar`, `LedgerItem` and `PageHead` take an optional `demo` prop for the style guide: it renders a fixed state and drops the attributes the scripts bind to (`data-lmin`/`data-lmax`, `data-step`, `data-group`, `data-open-from`), so a demo never reacts to the reader's level or progress.

Headings follow the outline (no skipped levels). When a card needs a smaller look than its level, keep the level and add `.h3` or `.h4` (for example `<h2 class="h3">` for the cards under a page title).

| Component | Where | Notes and contract |
|---|---|---|
| **Site header** | `Base.astro` | Brand, `#site-menu` (inline nav from 1200px, a panel below), level widget, Menu button. `menu.ts` toggles `data-menu-open` on `.site-header`. Ids `#my-level`, `#theme-btn` are fixed. |
| **Level widget** | `Base.astro`, `level.ts` | `−` / input / `+`, 44px buttons (`[data-action="level-down|up"]`). Unset: dashed fel border (`html:not([data-level])`). `level.ts` sets `data-now` on every `[data-lmin][data-lmax]`, the ladder words, `[data-level-value]`, `html[data-level]` and dispatches `waypoint:level`. |
| **Theme button** | `Base.astro`, `theme.ts` | Cycles Auto, Light, Dark; visible label + icon; storage key `theme`. |
| **Page head** | `PageHead.astro` | Breadcrumb (`trail`), H1 (`.page-title`), lede slot, labelled `facts`, `levelPrompt`. |
| **Guide sub-nav, pager** | `GuideNav.astro`, `GuidePager.astro` | From `guidePages()` in `src/lib/guides.ts`. One scrolling row on phones; an edge fades (`data-more="start|end|both"`) on any side with links out of view. |
| **On this page** | `OnThisPage.astro`, `rail.ts` | A disclosure in flow below 1200px, a sticky rail from 1200px (`details[data-open-from]`). |
| **Tags** | `.tag`, `.tag.next|done|now|optional`, `.count` | Static status, never interactive. Level tags on route steps carry the difficulty ladder (`[data-ladder-tag]`). |
| **Confidence** | `Badge.astro` (static `.seal`), `Trust.astro` (`details.trust`), `Sources.astro` | Pips + exact words: Official, Beta-tested, Community, Theory. The trust seal opens in flow with the meaning, sources and "Report it". |
| **Buttons** | `.btn`, `.btn.primary|quiet|danger|icon` | One primary per view. Verb-first labels, sentence case, no trailing arrows. 44px min. |
| **Inputs** | `.field`, `.search-field`, `.select-field`, `.switch`, `.switch-btn`, `.seg` | Visible label above; placeholder is an example, never the label. |
| **Callouts** | `Callout.astro` | Tip (fel), Good to know (info), Careful (warn), Danger, Untested (dashed). A label tab on the top edge, never a left stripe. In the page body they span the column (aligned with step sheets and tables); the text inside keeps a 64ch measure. |
| **Ref row** | `RefItem.astro` | Glyph, name (Wowhead link), price, detail line, note, coordinate button. `variant="inline"` for names inside sentences. |
| **Coordinate button** | `WayButton.astro`, `copy.ts` | `[data-copy]` copies the TomTom `/way` command; `data-state="copied|failed"` swaps the glyph (width never changes) and `#toast` announces it. |
| **Route step (waymark row)** | `StepCard.astro`, `Waymark.astro` | The waymark is the checkbox (`input[data-step]`, `id="chk-…"`, named by its `aria-label`; the visible "Mark done" label is a second pointer target only). States: ahead, lit, next (`data-next`), past, done (folded), compact (`html.view-compact`, or a `.view-compact` wrapper), theory, flash. `progress.ts` owns `.done`, `data-next`, `.open`. |
| **Waystone (bracket header)** | `Leg.astro` (used by `route.astro`) | `section.leg.bracket[data-group][data-lmin][data-lmax][id]`, `[data-group-count]`, `[data-group-bar]`, `.complete`. Untested brackets (from the beta cap) carry one Untested callout; the data's "(untested)" title suffix and "Untested" summary lead are dropped so it is said once. Slot `extras` for the talents and spells disclosure. |
| **Checklist bar** | `ChecklistBar.astro`, `progress.ts` | The dock below 900px, the sticky rail from 900px. Exactly one of each `[data-action]` (resume, my-level, view, hide-done, backup, restore, reset). Inside the sheet and the rail: options first (Jump to my level, Full/Compact, Hide done), then the journey list `[data-count-for]`, then backup and Untick everything, so the options are visible as soon as it opens. |
| **Tables** | `table.data(.stack)` | Real tables from 600px; `.stack` turns into two-line records below, with one shared level column (subgrid) so names line up. Cells: `.c-lv`, `.c-main` (min 12rem, names on one line), `.c-num`, `.c-why`, `[data-label]`. The current row gets a fel edge and a "Now" tag on its own line (the level column never widens); past rows tone their text, tags and plain links to `--ink-2` (never opacity). |
| **Bag advisor** | `bags.astro`, `LedgerItem.astro`, `src/lib/bags.ts` | Verdict chips (`.chip[data-act][aria-pressed]`, they wrap), verdict stamps (`.verdict`), the ledger (`#bag-items .item`, one `LedgerItem` each; from 900px the stamps form their own column and vendors sit under the reason as two-line rows), `#bag-status.bag-status`, `#bag-empty`. |
| **Timeline, road** | guide overview, home | `ol.timeline`, `ol.road`: the ley line at small scale, driven by `data-now`. |
| **Toast** | `#toast`, `toast.ts` | One polite live region; hides after 3s; never takes focus. |
| **Icons** | `Icon.astro` | 24px grid, `currentColor`, round caps; sizes 16 / 20 / 24. A word always sits next to a meaningful icon. |

---

## 4. Do and don't

**Do**
- Reach for a token before a literal value; add a token if a value repeats.
- Keep fel for the next good move. If more than three things glow on one screen, something is wrong.
- Pair every colour with a word or a shape (quality, verdict, kind, confidence, difficulty).
- Keep targets at 44px and text at 14px or more. Test at 360px wide: no horizontal scroll.
- Write sentence case, verb-first control labels, and "you". Plain player words: "My level", "Next step", "Jump to my level", "Copy /way", "Untick everything".
- Check both themes and reduced motion before you ship.

**Don't**
- Don't imitate Blizzard: no logos, crests, Friz Quadrata or lookalikes, gold-gradient lettering, stone or gold frames, tooltip borders, key art or screenshots. This is a fan site.
- Don't fall back on generated-design tells: cream + high-contrast serif, near-black + one acid accent, identical rounded cards with one soft shadow, tracked-caps eyebrows, middot meta strings (" · "), "WORD — fragment" labels, monospace data labels, "→" on links, hover lifts.
- Don't use `opacity` for done or past, hue-only meaning, quality colours outside item links, translucent or blurred sticky bars, pills, or hover-only information.
- Don't add a second instance of a checklist `[data-action]` without checking `progress.ts`.

---

## 5. Pages and slots

`Base.astro` props: `title`, `description`, `rail?: 'md' | 'lg'` (rail from 900 or 1200), `wide?` (body may use the full page width), `dock?` (checklist page with the phone dock: adds `html.has-dock`, which reserves room via `--jbar-safe`), `guide?` (sets `data-guide` on `<html>`). Slots: `head` (full width), `rail` (left column), default (body, max 760px).

---

## 6. Add a class theme for a new race/class guide

Each guide gets one accent, `--class`, used only for class markers: the class-quest glyph inside the waymark, the alt-profession line, and future class-specific markers. Fel, gold and ink keep their meanings on every guide.

1. **Data and registry.** Add the guide to `src/lib/guides.ts` and its data files (`route-<id>.json`, `class-<id>.json`, `professions-<id>.json`), then run `node scripts/validate-data.mjs`. Fill each bracket's optional `short` label (journey list, home road).
2. **Pick two colours.** A day value and a night value, inspired by the class (not by Blizzard's class colour swatches as a brand device). Both must reach **4.5:1** as text on `--sheet` and `--ground` (day: `#f5efe1` / `#e9dfc6`; night: `#19213a` / `#121a2d`) and stay clearly different from fel (`#346610` / `#a6dc5c`), gold (`#7a5200` / `#e9c46a`) and the danger red. If a candidate looks like a verdict or quality colour, shift its hue.
3. **Add the three theme blocks** to the "Guide themes" section of `global.css`, next to the warlock's:

   ```css
   :root[data-guide='dwarf-hunter'] { --class: #7a4a12; }
   @media (prefers-color-scheme: dark) {
     :root[data-guide='dwarf-hunter']:not([data-theme='light']) { --class: #e3b07a; }
   }
   :root[data-guide='dwarf-hunter'][data-theme='dark'] { --class: #e3b07a; }
   ```

4. **Pass the guide id** to `Base` on the guide's pages: `<Base … guide={guide.id}>` (the four guide pages already do this from `getStaticPaths`).
5. **Add the swatch** to `COLOR_GROUPS` ("Guide accent") in `src/lib/tokens.ts`, so the style guide shows it, and add the guide to the site nav in `src/lib/site.ts` (a `children` list from `guidePages()`).
6. **Check** `/design-system/` and the guide's route in both themes, and run the build and the interaction test.

Do not give a guide its own fonts, radii, surfaces or link colour: the atlas stays one atlas; only the class mark changes.

---

## 7. Acceptance checks

Run with Playwright + Chromium, both themes via `data-theme`. The audit scripts used for this pass are kept with the design work (not in the repo); the checks themselves are:

**7.1 Build and data:** `npx astro build` succeeds; `node scripts/validate-data.mjs` passes; no console errors on any page.

**7.2 Layout:** on every page (home, start, overview, route, talents, professions, bags, systems, library-books, glossary, design-system) `document.documentElement.scrollWidth === clientWidth` at 320, 360, 390, 899, 1199 and 1280, in both themes, with the menu closed and open, with `tooltips.js` loaded and blocked; and again at 390, 899 and 1280 with the browser's default text size at 150% (24px) and 200% (32px) (CDP `Page.setFontSizes`). `body` has no `overflow-x: hidden`, so any overflow shows up here instead of being clipped. The header bar's children fit on one line and inside the viewport in all of these. The dock row contains its two-line "Next step" block. The Gnome Warlock guide card's top is within the first 844px at 390×844 (default text).

**7.3 Contrast:** every pair in 2.1.1 recomputed from the computed styles of the built site. Also: with the real `tooltips.js` loaded, a light-theme `a.q1` computes to `rgb(28, 35, 55)` and a dark-theme `a.q1` to `rgb(243, 238, 226)`; Wowhead links keep an underline.

**7.4 Targets:** on phones every `button`, `summary` (except `.trust > summary`), `.check`, `.way`, `.chip`, nav/menu link, `.lvl-btn`, pager link and input has a bounding box ≥44×44 (inputs ≥48 tall below 900). `.trust > summary` is ≥32 tall with a 44px hit area (its `::before`, `inset: calc(-6px - 1px) 0` from the padding box), and ≥8px from neighbouring targets. The step checkbox hit area is only the 44×44 waymark (tapping the title does not tick). Every input, select and textarea is ≥16px (no iOS focus zoom).

**7.5 Focus and names:** tab through header (brand, nav/menu, theme, level −, input, +) → sub-nav → waymark → trust seal → coordinate button → dock; every focused element shows the 3px ring, and none is hidden under the sticky header or the dock. Esc closes the menu (focus returns to the Menu button) and the sheet (focus returns to its summary). Each step checkbox has one accessible name (`Mark "<title>" done`). axe-core reports no violations (including `heading-order`) on any page.

**7.6 Reduced motion:** with `reducedMotion: 'reduce'`, ticking a step changes state with no transition (computed `transition-duration` 0s on `.step::after`, `.ring`, `.way`), "Go to next step" jumps without smooth scrolling, the menu and sheet open instantly; nothing animates on page load.

**7.7 Interactions intact (both themes):**
- Ticking a waymark toggles `.done`, persists under `waypoint:v1:progress:route:gnome-warlock`, updates `[data-progress-text]` (all instances), `[data-progress-bar]` width, bracket `[data-group-count]` and mini bar, journey counts, `.complete`; reload keeps it.
- Exactly one `.step[data-next]` with `aria-current="step"`; with My level 14 it is the first unticked step whose range contains 14; with no level it is the first unticked step; the dock title and coordinate update after every tick and every level change.
- "Mark done" label ticks the same checkbox. Done steps fold; "Show details" reopens; ticking folds again.
- Go to next step, Jump to my level (focuses `#my-level` when unset), Hide done steps (persists `hide-done:<scope>`), Full/Compact (persists `view:<scope>`), Make backup code / Restore from code (wrong scope shows the error message), Untick everything (confirm) all work on phones (from the sheet) and desktop (from the rail).
- Level stepper −/+ and typing both update `data-now` everywhere, the ladder words, "You are here, at level N", table Now tags, the timeline, the home road and the bag filter; values clamp to 1–60; buttons disable at the ends; the value survives reload.
- Coordinate buttons copy the exact `/way` string, show the check for 1.4s without changing width, and announce via `#toast`; "Copy all {n} waypoints" (zones with two or more books) copies all lines.
- Theme button cycles Auto → Light → Dark, the visible label and icon match, the choice persists, and no flash of the wrong theme on reload.
- Bag advisor: search, category, Only my level, every chip (toggle, multiple), saved filter state (`bags-filter`), live status, empty state and Clear filters. Filtered-out rows compute to `display: none`.
- Glossary filter and count; `:target` highlight from a `.term` link.
- Menu opens/closes (button, Esc, outside tap, link tap); at ≥1200 (default text) the inline nav shows and the Menu button is gone.
- Library books: ticking, counts, next book in the dock, Copy all.

---

## 8. Change checklist

- `node scripts/validate-data.mjs` and `npx astro build` pass.
- Every page at 320, 360, 390, 900, 1200 and 1280 in both themes, and at 200% browser text size: no horizontal scroll, header on one line (section 7.2).
- Ticking, persistence, Go to next step, Jump to my level, Hide done, Full / Compact, backup codes, copy `/way`, bag filters, glossary filter, menu, theme: all still work.
- New colours: contrast computed in both themes. New icons: drawn on the 24px grid, checked at 16px.
