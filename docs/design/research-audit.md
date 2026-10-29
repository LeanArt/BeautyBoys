# Research audit: current Waypoint site

Node: audit of the existing site (branch `claude/design-system`, `astro build` OK, 10 pages, preview on :4401 now stopped).
Nothing in the repo was modified (`git status` clean). Scripts: `scripts/audit-shots.js`, `scripts/audit-measure.js`, `scripts/audit-misc.js`, `scripts/audit-level.js`, `scripts/skilldata.py`.

## 0. Screenshot index

All in `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/shots/`, full-page, named `audit-<page>-<width>-<scheme>.png`.

- pages: `home` (/), `start` (/start/), `overview` (/guides/gnome-warlock/), `route`, `talents`, `bags`, `systems`, `books` (/library-books/)
- widths: `1280`, `390` (mobile emulation, touch); schemes: `light`, `dark` (emulated `colorScheme`)
- 32 files, e.g. `audit-route-390-light.png` (390 x 46,800 px), `audit-talents-390-dark.png`
- extra state shots: `audit-route-level14-{390,1280}-{light,dark}.png` (My level = 14, three steps ticked, "Jump to my level" pressed)

Page heights (px): route 26,603 desktop / 46,841 phone; bags 12,629 / 27,543; books 8,795 / 12,527; talents 6,731 / 12,702; systems 4,836 / 7,886; start 3,662 / 6,233; overview 2,337 / 3,915; home 1,739 / 2,769. No page scrolls horizontally at 390 (scrollWidth == clientWidth everywhere), but two data tables scroll inside their own wrapper (issue H1).

Note: Wowhead's `tooltips.js` loads from a third party; in my captures item icons appeared in some shots and not in others (compare `audit-books-390-light.png` vs `-dark.png`). The layout must hold with and without icons (issue L1).

## 1. Visual language of the current site, in one paragraph

Warm cream paper (#f6f2ea) with off-white cards (#fffdf8), near-black warm text, one "shadow purple" accent (#6a3fa3 light / #b796f2 dark) used for links, buttons, active nav, eyebrows and card hover; Spectral (700, a high-contrast display serif) for every heading and system-ui for everything else; 10px radius on every card with one soft shadow; soft-tinted pills for every kind of metadata (level, kind, confidence, category, counts, jump links); callouts with a 4px colored left border; a purple-tinted near-black dark theme (#121015/#1a171f). It is tidy and readable, but it reads as a generic content template: nothing in it says Azeroth, leveling, quests or Warlock, the hierarchy is flat (every unit is "a card with pills"), and the dense reference data has no data-specific design (coordinates, `/way`, prices, vendor names all flow inline in a sentence).

## 2. Issues by severity

Severity key: **High** = breaks the stated use case (phone/second screen, dense data, AA) or is a clear defect; **Medium** = costs scanning speed or reads templated; **Low** = polish.

### HIGH

**H1. Data tables are unusable on a phone.** The talent plan table is 401px wide inside a 356px wrapper (columns: Level 97, Talent 132, Points 70, **Why 101**), so the "Why" explanation, the whole point of the table, is half off-screen and wrapped to one word per line, with no scroll hint (no shadow, no fade, no sticky first column). `audit-talents-390-light.png`, `audit-talents-390-dark.png` (y 950-3200). The Forever-systems boosts table has the same problem: 4 columns squeezed to ~100px each, the **Trust** badge column is clipped away entirely, text breaks every 2-3 words. `audit-systems-390-light.png` (y 740-1620). Quick-reference rule `Table Handling`: "Use horizontal scroll or card layout". Fix direction: below ~640px turn rows into stacked "records" (label: value) with the level pill leading, keep real `<table>` semantics above.

**H2. The route is 26.6k px (desktop) / 46.8k px (phone) long with no persistent orientation.** The progress bar, "Resume where I left off", "Jump to my level" and the level-bracket pills sit once at the top (`ChecklistBar`, `.bracket-nav`) and are not sticky; the sticky header only carries brand, level input, theme button and a nav that doesn't include "where am I". A player using a phone as a second screen has to scroll back to the top to resume or to see progress. 65 steps x ~420px each on a phone. `audit-route-390-light.png`, `audit-route-level14-390-light.png`. Also `Sources (n)` and `Report a problem` repeat on all 65 cards (130 low-value controls).

**H3. Touch targets are far below the brief's 44px** (measured with Playwright at 390px, `scripts/audit-measure.js`):

| Control | Measured (w x h px) | Where |
|---|---|---|
| `/way` copy button | 46 x **19** (97 on /route, 40 on /library-books, 97 on /bags) | `RefItem` |
| Theme toggle | 36 x **26** | header |
| "My level" input | 67 x **30** | header |
| Main nav links | 59-85 x **32** | header |
| Step checkbox | **23 x 23** (the label is a 32px-wide strip spanning the whole card, 342-1317px tall) | `StepCard`, library books (22 x 22) |
| Level bracket pills | 53 x **24** | route |
| Checklist buttons (Resume, Jump, Hide done, backup…) | 82-161 x **25** | `ChecklistBar` |
| Bag action chips (Keep, Buy…) | 57-74 x **25** | bags |
| "Only my level" checkbox | **13 x 13** | bags |
| "Copy all /way" | ~100 x **26** | books |
| `Sources (n)` summary / "Report a problem" | 81 x **20** / 114 x **22** | every card |
| Section TOC chips | 77 x **26** | systems/start/talents |

The `/way` button (19px) fails even WCAG 2.2 SC 2.5.8 (24 x 24); it is the most-tapped control on the site, placed mid-sentence between coordinates and text. Also, the checkbox's label spans the card's full height, so a thumb scrolling along the left edge can tick steps by accident. Pro-rules: `touch-target-size` 44x44, `touch-spacing` 8px. Brief: "44px touch targets for primary controls".

**H4. Contrast failures (computed, `python` WCAG ratios from the real tokens).**
- Light `badge-community` (gold #9a6b00 on #fbf1d6): **4.17:1**; light `badge-beta-tested` (fel #3f7d1f on #e8f3df): **4.40:1**. Both are 12px bold text, so they need 4.5:1. The confidence badge is the product's core trust device.
- Light Wowhead quality colors: grey `q0` (#7a7a7a) = 3.84:1 on `--bg`, 4.22:1 on surface; orange `q5` (#b85c00) = 4.12:1 on `--bg`; links are normal-size text.
- Control boundaries: input/select/button border `--border` (#e2d9ca / #2f2938) is 1.25-1.38:1 against its background; WCAG 1.4.11 needs 3:1 for the visible edge of form controls. Seen as near-invisible search box and "My level" field in `audit-bags-390-light.png`, `audit-home-1280-dark.png`.
- `.step.done { opacity: .55 }` drops body text to 3.82:1 and muted text to **2.35:1** (light) / 3.00:1 (dark), and dims the checkbox too, so the thing you just ticked looks disabled.
- Passing: body text 15.3:1 / 15.7:1, muted 5.4-7.4:1, accent on bg 6.6:1 / 7.8:1, `btn.primary` 7.2:1.

**H5. About a quarter of all text is under 14px.** On /route, 14,229 of 59,650 characters (24%) render below 14px: 12.8px system-ui 8,559 chars (pills, labels, source lists, `.where`), 12px 2,701, 13.6px 1,624, and 12.5-12.8px monospace for coordinates 1,342. Coordinates, the thing you read at arm's length in game, are 12.5px grey monospace. Rule: `readable-font-size` (16px mobile body), `font-scale`, SKILL.md anti-pattern "Text < 12px body". 

**H6. Layout bug: footer collides with content on every page.** `main { padding-bottom: 4rem }` is overridden by `.wrap { padding: 0 16px }` (same weight, `.wrap` is a class and wins) so computed `padding-bottom` is **0px**. The last card sits flush on the footer border: `audit-home-1280-light.png` (y ~1535), `audit-start-1280-light.png`, `audit-overview-1280-light.png`. This is the CSS-specificity trap that frontend-design warns about ("classes that cancel each other out"). Fix with a single spacing owner (e.g. `main.wrap { padding-block: … }` or a `--space` token on a layout wrapper).

**H7. Navigation overflows with no affordance, and the sticky header is heavy and translucent.**
- 9 nav items need 984px but the nav box is 948px at 1280, so "Glossary" is cut to "Gloss" on desktop (`audit-home-1280-light.png`, top right) with no fade or arrow; on a phone 3.5 of 9 items are visible (`audit-home-390-light.png`).
- The two-row sticky header is 92px tall on a 844px phone (11% of the viewport) all the time.
- It uses `background: color-mix(bg 88%, transparent)` + `backdrop-filter: blur(8px)`, so text scrolling underneath ghosts through the header (top of `audit-route-level14-390-light.png` and `audit-route-level14-1280-dark.png`). Rule `blur-purpose`: blur is for dismissal layers, not decoration.
- Theme toggle is an unlabeled half-moon glyph cycling system -> light -> dark with state only in a `title` (no tooltips on touch); its `aria-label` is static ("Switch color theme").

### MEDIUM

**M1. Line length is wrong at both ends.** Route body text is ~90 characters per line at 1280 (873px column; target 65-75). On a phone it is ~36 characters because the 2.4rem checkbox column + padding leave 293px of a 358px card (18% lost to a column that holds one 23px box). `audit-route-1280-light.png` y 960-1060; `audit-route-390-light.png` y 1160-1500. Rule `line-length` 65-75, `line-length-control` 35-60 mobile.

**M2. Dense reference data has no data design.** Each NPC/vendor line is one inline run: `Name – role · from giver  28.6, 66.2 [/way] note`, wrapping mid-run so the coordinates and button drop onto the next line unpredictably (`audit-bags-390-light.png` y 1240-1440, `audit-route-390-light.png` y 600-860). There is no fixed slot for name / coordinates / action, no tabular figures, and hierarchy inside a step card has ~9 tiers (serif h3, pill row of 3-4, middle-dot "where" line, body, tracked-caps "KEY QUESTS"/"WHO", bullet refs, grey note, "Sources", "Report a problem"). `audit-route-1280-light.png` y 895-1160.

**M3. Bag advisor: 78 identical cards, the decision is a 12px chip.** 78 same-shape cards in a 3-column grid with ragged heights and big empty areas (`audit-bags-1280-dark.png`, `audit-bags-1280-light.png`), 27.5k px tall on a phone. The one-word answer the player needs (KEEP / BUY / SELL / AUCTION / BANK / USE / DESTROY) is a small badge beside an underlined serif title; there is no compact list/table view; filters are not sticky; the action chips in the filter bar are all neutral (not tinted by action) while the cards are tinted; "Buy" and "Use" both use fel green. The four rule-of-thumb tips render as 4 identical cards in a 3-column grid leaving an orphan (`audit-bags-1280-dark.png` y ~300-530).

**M4. One hue set means three different things.** info blue / fel green / gold / muted grey are the confidence badges (official / beta-tested / community / theory), also the step-kind left borders (system = info, milestone = fel, profession = gold, dungeon = danger, class = accent) and also the bag action colors (keep = info, buy/use = fel, auction = gold). A beginner learns "green = beta-tested" on one page and sees "green = buy" on the next. Color also carries the kind in the left border without a matching icon.

**M5. "Pill soup".** `.pill` is used for level, kind, optional, confidence, category, counts, the TOC jump links, the route bracket links and the footer legend: same shape and size for status (non-interactive) and navigation (interactive). `audit-route-1280-light.png` y 630-640 (jump pills) vs y 910-925 (status pills).

**M6. "My level" highlighting is nearly invisible.** `data-now='current'` on a step is `box-shadow: 0 0 0 2px var(--accent-soft)` (#efe7fa on #f6f2ea, about 1.1:1); on a 7-step bracket at level 14 seven steps carry it (`nCur: 7, nPast: 19, nFut: 39`). Past steps are not dimmed (only ticked steps are), future steps look identical. See `audit-route-level14-1280-dark.png` (one faint blue-ish outline on the card at the bottom) and `audit-route-level14-390-light.png` (no visible difference). The feature the brief calls central ("highlights what matters now on every page") has no visual weight, and the level field in the header is a bare 67px input with a "–" placeholder.

**M7. Subject-specific identity is absent.** The brand mark is a generic map pin; there is no iconography for step kinds (travel, quest, class, train, dungeon, profession, system, shopping, tip, milestone) or bag actions; the quest vocabulary beginners must learn (yellow `!`, yellow `?`, grey `!`, elite dragon, monster color tiers) lives only as prose and colored words in /start. The hero is a left-aligned headline with the right 55% of the 1280 viewport empty (`audit-home-1280-light.png`). The accent purple is "Warlock purple" applied to the whole site; when other classes arrive the chrome would still be purple. A class/guide accent token should be separate from the site chrome.

**M8. Orphan cells and ragged card rows on content pages.** 3-column `.grid` with 4/8/10 items leaves single cards on the last row: Gnome racial abilities (`audit-overview-1280-light.png` y ~1865-2135), Camping (4 cards; `audit-systems-1280-light.png` y ~1430-1670), "Your first hour" (8 cards; `audit-start-1280-light.png`), bag rules. Confidence badges for a card group float flush under the grid ("official mechanics · beta-tested quest location and bug fix", `audit-systems-1280-light.png` y ~1685) with no spacing. The Library books "Where to hand them in" card is stretched to the height of its sibling with half of it empty (`audit-books-1280-light.png` y ~300-770).

### LOW

**L1. Third-party script drives layout.** Wowhead `iconizeLinks` adds a 16-20px icon before links; where the script is slow/blocked a blank gap remains before names (`audit-books-1280-light.png` "Rewards" card, y ~360-490, big gap before "Scholarly Pendant") and the link widths change when icons arrive. Reserve the slot or keep icon-less layout stable.
**L2. Copy feedback reflows.** `copy.ts` replaces the button text "/way" with "Copied" (wider), so inline text around it re-wraps. Reserve width or use a fixed-size icon + `aria-live`.
**L3. Light-mode `.theory` badge is a dashed, transparent pill** whose only distinguisher from `community` is a different hue + dashed border; at 12px it is the weakest-looking badge although it is the one that means "don't trust yet".
**L4. Dark theme is competent but generic and glare-prone.** #121015 / #1a171f with lavender accent; quality `q1` ("common") is pure #ffffff (17.7:1) which is glare for night play; cards separate by 1.26-1.35:1 border steps only (shadow is invisible on dark). `audit-route-1280-dark.png`.
**L5. Hover transitions on every card** (`a.card:hover translateY(-1px)`, border color) and a gradient progress fill (fel -> accent) are the "motion/gradient on everything" defaults. Reduced-motion is correctly handled (global block).
**L6. Single-column "mode" mismatch on the home page**: after a 3-line headline, lede, countdown, 2 buttons, the first content card starts at y~620 on desktop; the "Gnome Warlock" card (the only thing you can actually use) is below the first screen fold on a 390 x 844 phone (`audit-home-390-light.png`).

## 3. Audit against Anthropic frontend-design ("generated design tells")

Source: `/home/user/anthropics/skills/skills/frontend-design/SKILL.md`. Each tell checked against the screenshots and CSS.

| Tell named in the skill | Present? | Evidence |
|---|---|---|
| Warm cream bg near #F4F1EA + high-contrast serif display | **Yes** (tell #1) | `--bg #f6f2ea`, `--surface #fffdf8`, Spectral 700 on every h1-h4, `audit-home-1280-light.png` |
| Near-black + single bright accent | Partly (dark theme: tinted near-black + lavender) | `--bg #121015`, `--accent #b796f2` |
| SaaS-card kit: identical rounded cards, one radius, same soft shadow | **Yes** | `.card` everywhere (home grid x8, bag rules, systems, talents "other ways to play", all 78 bag items), single `--radius: 10px`, single `--shadow` |
| Tracked ALL-CAPS eyebrow above headings | **Yes, systemic** | `.eyebrow` on the home hero, both home card headers, `PageHead` on every page ("GNOME WARLOCK", "COLLECT AS YOU LEVEL", "WHAT'S NEW IN FOREVER"), bracket heads ("LV 1-6"), plus uppercase tracked `h4` labels ("KEY QUESTS", "WHO", "TALENT POINTS") and table `th` |
| Middle-dot meta strings "A · B · C" | **Yes** | "WoW: Forever · launches November 4", "Alliance · available", "Dun Morogh · Anvilmar" (every step), "Gnome Warlock · all levels", zones lists "Loch Modan · Dun Morogh · …", countdown "Launch in 6d 7h 11m · Wed, Nov 4…", in-card "Hubs · price" |
| Monospace for small data labels | **Yes** | `.coords` and `.way` in `ui-monospace` 12.5px; `<kbd>`/`<code>` |
| '→' appended to link/button text | Yes, small | "Full talent plan and spell list →", "Imp quest: … → Beginnings" |
| Labels as "WORD — fragment" with spaced em dash | Mild | "Alamar Grimm – Warlock trainer", "Tailoring + Enchanting – …" (en dash role separators) |
| Tinted near-black standing in for black | Yes | `--text #1f1b16`, `--bg #121015` |
| Gradient washes as decoration | Minor | progress fill `linear-gradient(90deg, fel, accent)`, translucent blurred header |
| Accent chosen without a reason | **Weak reason** | purple = Warlock, but applied to site chrome |
| Accenting a single word of a headline | No | hero h1 is plain |
| Numbered markers when content is not a sequence | No (the ones present are real sequences: route steps, "Before launch" list) | OK |
| Hero opens with the most characteristic thing in the subject's world | **No** | text-only hero; no quest marker, map, route line, or character moment |
| Typography carries personality, clear type scale | Weak | only one display weight, flat 16/14/12.8 body ladder, no scale tokens |
| Line length < 80 | **No** (90 cpl on route desktop) | see M1 |
| Motion sparing, answering action | OK | only hover transitions + progress width; reduced-motion block present |
| Spend boldness in one place | N/A: nothing is bold | the page has no memorable element |
| Words: end-user language, active CTAs | **Good** | plain-language copy, "New to WoW? Start here", "Resume where I left off" |

Net: the site hits clusters 1 (cream + serif), 4 (SaaS-card kit) and 5 (template chrome: eyebrows, middot strings, mono labels) fully, and cluster 2 (near-black + one bright accent) partly in dark mode. Copywriting is its strongest design asset.

## 4. Audit against UI/UX Pro Max (priority rules + pre-delivery checklist)

Sources: `references/quick-reference.md` (119 rules), `references/pro-rules.md`.

| # | Priority / rule | Result | Notes |
|---|---|---|---|
| 1 | `color-contrast` 4.5:1 | **Fail (partial)** | H4: two light badges, q0/q5 links, done-step text; control borders 1.3:1 |
| 1 | `focus-states` visible rings | Pass (weak) | 2px `--focus` outline, offset 2px, on `:focus-visible` globally; `Accessible & Ethical` row asks 3-4px |
| 1 | `skip-links`, `heading-hierarchy`, `aria-labels`, `form-labels` | Pass | skip link present; labeled inputs; `aria-pressed`, `aria-current`, `aria-live` used. Theme button label is static |
| 1 | `color-not-only` | Mostly pass | badges have words; step kinds have a pill + border color; bag actions have words |
| 1 | `web-target-size` 24x24 | **Fail** | `/way` 19px tall |
| 2 | `touch-target-size` 44x44 | **Fail** | H3 table |
| 2 | `touch-spacing` 8px | Fail | `/way` sits inline 5px from coordinates and text |
| 2 | `press-feedback`, `tap-delay` | Missing | no pressed state, no `touch-action: manipulation` |
| 3 | `font-loading` swap, third-party async | Pass | `display=swap`, `defer` |
| 3 | `content-jumping` | Weak | Wowhead icon insertion (L1), "Copied" width change (L2) |
| 3 | `virtualize-lists` (50+ items) | Not needed yet | 78 cards render at once, DOM is still manageable |
| 4 | `style-match`, `consistency`, `no-emoji-icons` | Mixed | no emoji; but no icon system at all (map pin + half-moon only) |
| 4 | `elevation-consistent`, `dark-mode-pairing` | Pass | one shadow; tokens mirrored for dark. Dark was designed together but nothing about it is dark-specific (L4) |
| 4 | `primary-action` | Pass | one purple primary per screen |
| 5 | `readable-font-size` 16px, `line-length-control` | **Fail** | 24% of text < 14px; 90 / 36 cpl (H5, M1) |
| 5 | `horizontal-scroll` | Pass at page level; **fail inside tables** | H1 |
| 5 | `fixed-element-offset` | Pass | `scroll-padding-top: 7rem` vs 92px header; footer gap bug H6 |
| 5 | `content-priority`, `visual-hierarchy` | Weak | M2, M3 |
| 5 | `container-width` | Pass | `--max: 980px` (a bit narrow for 3-column tables at desktop; fine for reading) |
| 6 | `line-height` 1.5-1.75 | Pass | 1.6 |
| 6 | `font-scale`, `weight-hierarchy` | Weak | no scale tokens; one display weight |
| 6 | `number-tabular` | **Missing** | coordinates, prices, "5/5", levels aren't tabular |
| 6 | `color-semantic` tokens | Pass | semantic custom properties; but one hue set overloaded (M4) |
| 6 | `color-dark-mode` | Pass | desaturated lighter tonal variants, not inverted |
| 7 | `reduced-motion`, `excessive-motion` | Pass | |
| 8 | `empty-states`, `progressive-disclosure` | Pass | `<details>` for sources/backup/extras; callouts for "being written" |
| 8 | `touch-friendly-input` (>=44px) | **Fail** | search 40px, select 37px, level input 30px, 13px checkbox |
| 8 | `confirmation-dialogs`, `undo-support` | Partial | `confirm()` before "Untick everything"; no undo |
| 9 | `nav-state-active`, `deep-linking`, `persistent-nav` | Pass | active pill; all pages are URLs; steps have ids |
| 9 | `nav-hierarchy`, `breadcrumb-web` | Weak | site nav (9 items) and guide tabs (4) both look like primary nav; no "you are in Gnome Warlock > Route" context |
| 9 | `state-preservation` | Pass | filters, progress, theme, level in localStorage |
| 10 | n/a (no charts) | n/a | The progress bar is the only data viz |

Pre-delivery checklist (`pro-rules.md`) status on the current build: dark-mode contrast tested independently **partially**; touch targets >= 44 **no**; 375px **yes** (no page overflow); reduced motion **yes**; SVG icons **n/a (few)**; tokens **yes**; borders/dividers visible in both themes **no** (1.25-1.38:1); scroll content hidden behind sticky UI **no** (offset OK); "Long-form text measure readable on larger devices" **no** (90 cpl); sticky UI not obscuring focus **yes**.

### Mobile second-screen test (what a player sees with the phone propped up)

- Glanceability: step titles are 18px Spectral on 16px body; one thumb-reachable action ("tick") is 23px; the next step is not pinned; at arm's length the 12.5px coordinates and 12px pills are not readable.
- Night use: the dark theme works, but the active-step highlight and the done-step dimming (0.55 opacity) are the only state cues; both are weak.
- Dense data: tables are unreadable (H1), vendor lists wrap unpredictably (M2).
- Persistent controls: none (H2).

## 5. Patterns worth keeping (see structured summary)

1. **Confidence system** (`Badge`, `Sources`): four words, `title` tooltips, collapsible source lists, footer legend, "How much to trust" explainer. Unique to this product; restyle, do not remove. Fix contrast and give it a non-hue cue (icon/shape) so it survives color blindness and stops colliding with M4.
2. **Global "My level" -> `data-lmin/data-lmax` -> `data-now="past|current|future"`** attribute contract (`level.ts`). The mechanism is right; only the visuals are missing (M6).
3. **Checklist engine** (`progress.ts`): `data-step`, groups with `n/m` counts, `complete` state, Resume, Jump to my level, Hide done, backup/restore code, `localStorage` with try/catch (`storage.ts`).
4. **`/way` copy + "Copy all /way" per zone**: genuinely useful for TomTom; wrong size/placement, right idea.
5. **Token architecture**: semantic custom properties, three theme paths (system `prefers-color-scheme`, `data-theme="light|dark"`, FOUC-preventing inline script), `color-scheme`, `--q0..--q5` remap of Wowhead quality colors per theme with `!important` on `a.q0..q5`.
6. **Accessibility scaffolding**: skip link, `:focus-visible`, `.visually-hidden` labels on checkboxes, `aria-current`, `aria-pressed`, `aria-live` status lines, `prefers-reduced-motion` block.
7. **Plain-language copy and "For you:" lines** (racial abilities, steps): the voice is the best part of the site; keep line-for-line.
8. **Milestone timeline** on the guide overview (vertical rail, level pills, `data-now` aware): the clearest scannable pattern on the site.
9. **Bag advisor filter model**: search + category + "Only my level" + action chips with counts + saved state + live status ("Showing 78 of 78").
10. **Library books grouped by zone** with `0/1` counts and zone-level "Copy all /way".
11. **Boosts table with a Trust column** (systems): comparison + confidence in one row (needs a mobile layout).
12. **Guide tab bar** (`GuideNav`, underline tabs) and the in-page jump chips: right idea for page-level orientation (restyle; make sticky on route).
13. **Left-edge encoding by step kind** on route cards: the idea of an edge marker is good; re-map it to icons and separate it from the confidence hues.
14. **Callout variants** (`warn`, `danger`, `fel`) as a semantic set (replace the generic left-border look).

## 6. Component inventory (what must be restyled) and contracts (what must not break)

### 6.1 Layout and tokens
- `src/layouts/Base.astro` (208 lines): skip link; sticky header (`.site-header` with `.bar`: `.brand` map-pin SVG + wordmark, `.tools`: `.level-widget` label + `#my-level` number input, `#theme-btn.btn.small` with inline SVG; `.site-nav` of 9 `a` pills from `site.nav`); `<main id="main" class="wrap">`; `.site-footer` (badge legend + disclaimer + Wowhead credit); Google Fonts link (Spectral 600;700); inline `whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: false }`; Wowhead `tooltips.js`; module script calling `initLevel/initTheme/initCopy`.
- `src/styles/global.css` (448 lines). Tokens: `--bg --surface --surface-2 --text --muted --border --accent --accent-soft --fel --fel-soft --gold --gold-soft --danger --danger-soft --info --info-soft --focus --shadow --radius (10px) --radius-sm (6px) --font-body/--font-display/--font-mono --max (980px) --q0..--q5`, each in three theme blocks (`:root`, `@media (prefers-color-scheme: dark) :root:not([data-theme='light'])`, `:root[data-theme='dark']`). Global classes: `.wrap .lede .muted .small .grid .card (a.card) .callout (.warn .danger .fel) .btn (.primary .small [aria-pressed]) .pill (.level) .badge-official|beta-tested|community|theory .q0-.q5 .term details.sources .page-head .eyebrow .toc .visually-hidden .table-wrap` and base `h1-h4 a code/kbd table th td input select textarea`.

### 6.2 Components (`src/components/`)
| File | Role | Restyle notes |
|---|---|---|
| `Badge.astro` | confidence pill, `class="pill badge-<c>"`, `title` text | contrast, shape cue, theory look |
| `Sources.astro` | `<details class="sources">` list of source links | 12.8px, 20px target; shown on every card |
| `RefItem.astro` | quest/NPC/item line: `.ref-name` (Wowhead link), role, giver, `.coords` (mono), `button.btn.small.way[data-copy]`, `.ref-note` | the main data-design problem (M2, H3) |
| `StepCard.astro` | `article.step.kind-*[data-lmin][data-lmax]` with `.check` label + checkbox, header (h3 + `.meta` pills), `.where`, `.body`, `.refs` (h4 + ul) x3, `.foot` (Sources + Report) | the central component; `.done`, `.flash`, `data-now` states |
| `ChecklistBar.astro` | progress track/fill, Resume / Jump / Hide done, backup `<details>` with textarea | needs sticky/compact variant |
| `GuideNav.astro` | 4 underline tabs for the guide | make sticky on long pages |
| `PageHead.astro` | `.page-head` with `.eyebrow`, h1, `.lede` slot | removes eyebrow tell |

### 6.3 Pages (`src/pages/`, all `.astro`, scoped `<style>`)
- `index.astro`: `.hero` (eyebrow, h1 max 18ch, lede, `#countdown.countdown`, `.cta` 2 buttons), `.grid` of `a.card.guide-card` + dashed `.planned`, `.grid.features` x6 `a.card`, trust card with `.trust` list.
- `start/index.astro` (290 lines): `.toc` jump pills, sections with `.card` grid ("Your first hour", 8 cards), `.table-wrap` addon table, `.mistakes` ol, `.lvl.grey|green|yellow|orange|red` monster-color words, `kbd`, `.callout.fel` "How to use this site".
- `guides/[guide]/index.astro`: `.grid` cards, `.timeline` (`li[data-now]`, `::before` rail dots), racial ability cards, `.btn.primary`.
- `guides/[guide]/route.astro` (218 lines): `PageHead`, `GuideNav`, `.callout.small`, `ChecklistBar`, `.bracket-nav` pills, `section.bracket[data-group][data-lmin][data-lmax]` with `.bracket-head` (eyebrow + h2 + zones + `.count` pill), `details.bracket-extras` (`.extras-grid` talents + spells), `StepCard` list.
- `guides/[guide]/talents.astro` (238): `.toc`, `.talents` table (`tr[data-now]`, `.nowrap`), `.spells`, `.card[data-now='current']`, `.eyebrow + h4`.
- `guides/[guide]/professions.astro` (248): `.prof.card`, `.role`, `.skill`, `.crafts`, `.pros` table, `.trainers`, `.alt`.
- `bags.astro` (326): `.grid.rules` x4 `.card`, `form.filters.card#bag-filters` (`.row`, search, select, `label.inline` checkbox, `.chips` `button.btn.small.chip.act-*[data-act][aria-pressed]`, `#bag-status`), `.items` x78 `article.item.card.act-*[data-act][data-cat][data-lmin][data-lmax][data-text]` with `.action.act-*` badge, h3 link, `.meta`, `.where` list of `RefItem`, `.foot`; `.empty.callout`.
- `systems.astro` (314): `.toc`, `.table-wrap` boosts table, `.grid` card groups, `.callout.warn|danger|fel`.
- `library-books.astro` (179): 2 cards (turn-in, rewards), `ChecklistBar levelJump={false}`, `.callout.small`, `section.zone[data-group]` with header (h2 + `[data-group-count]` pill + `.btn.small[data-copy]` Copy all) and `.step.book` rows (`.check` + `RefItem` + `.meta` + `Sources`).
- `glossary.astro` (115): `.search` input, `dl.gloss` with `.entry:target`; `.term` (dotted underline, `cursor: help`).

### 6.4 Behavior contracts to keep (selectors/attributes the scripts rely on)
- `#my-level` (input, `change` event); `[data-lmin][data-lmax]` -> `data-now`; custom event `waypoint:level`.
- `input[data-step]`, `.step` ancestor gets `.done`; `[data-group]`, `[data-group-count]`, `.complete`; `[data-progress-bar]` (width %), `[data-progress-text]`; `[data-action="resume|my-level|hide-done|backup|restore|reset"]`; `[data-backup-code]`, `[data-backup-status]`; `html.hide-done` with `.step.done` hidden; `.flash` on scroll target; `[data-copy]` + `.copied` (button text is replaced); `#theme-btn` and `html[data-theme]`; bags: `#bag-filters`, `[data-act]`, `[data-cat]`, `[data-text]`, `#bag-items`, `#bag-status`.
- Wowhead: `a.q0..a.q5` color overrides, `whTooltips` flags, external links `target=_blank rel=noopener`. Keep `.term` for glossary tooltips.
- Storage keys under `waypoint:v1:` (`theme`, `level`, `progress:*`, `hide-done:*`, `bags-filter`).

## 7. Relevant rows from the UI/UX Pro Max data tables (verbatim)

Data lives in `/home/user/nextlevelbuilder/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/data/`. Method: read the CSVs directly (no scripts from the skill were run); keyword-filtered `styles.csv` (89 rows), `colors.csv` (192), `typography.csv` (74), `products.csv` (192), `ui-reasoning.csv` (192) for gaming / wiki / documentation / guide / dark-mode / fantasy / RPG / parchment / reference, then read the candidates in full. The tables contain no "MMO", "WoW" or "fantasy" product row; the closest are the rows below. Values are copied from the CSV cells; "Verdict" lines are my notes.

### A. Styles (`data/styles.csv`), 5 rows, quoted verbatim

#### `styles.csv` / Academia (Scholarly Mobile) (No 79)
- **Keywords:** academia, library, mahogany, parchment, brass, crimson, serif, drop cap, arch-top, vignette, leather, scholarly, tactile
- **Primary Colors:** Mahogany #1C1714, Oak #251E19
- **Secondary Colors:** Parchment #E8DFD4, Worn Leather #3D332B, Faded Ink #9C8B7A, Brass #C9A962, Library Crimson #8B2635
- **Effects & Animation:** Deep mahogany backgrounds, oak surface cards, brass accented CTAs, arch-top hero/imagery, heavy vignette overlays, sepia-tinted images, drop caps with brass Cinzel, Roman numeral volume headings, slow timing-based animations (Easing.out poly(4)), zero neon or modern tech cues
- **Best For:** Knowledge management apps, deep reading tools, ritual-heavy personal brands, lore-heavy RPG/roleplay apps, culture-specific community platforms
- **Do Not Use For:** Hyper-modern tech dashboards, neon/glassmorphism, playful Gen Z branding
- **Light Mode ✓:** supported
- **Dark Mode ✓:** conditional
- **Accessibility:** risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **Mobile-Friendly:** conditional
- **CSS/Technical Keywords:** backgroundColor: '#1C1714', altSurface: '#251E19', textColor: '#E8DFD4', mutedBg: '#3D332B', borderColor: '#4A3F35', brass: '#C9A962', crimson: '#8B2635', borderRadius: 4 (default), archTopRadius: 100 for hero, shadowOpacity:0.4 shadowRadius:6 elevation:8 for cards, textShadow on headings, vignette overlay via LinearGradient
- **Implementation Checklist:** ☐ Mahogany/oak/parchment palette applied, ☐ Brass used on all tappable items, ☐ Arch-top imagery used in hero/cards, ☐ Drop caps & Roman numerals used, ☐ Vignette overlay present, ☐ No sans-serif body fonts, ☐ No neon/bright modern colors, ☐ Animations use non-spring timing, ☐ Inputs use worn-leather style, ☐ Wax seal badges implemented
- **Design System Variables:** --bg: #1C1714, --bg-alt: #251E19, --fg: #E8DFD4, --muted: #3D332B, --muted-fg: #9C8B7A, --border: #4A3F35, --accent-brass: #C9A962, --accent-crimson: #8B2635, --radius: 4px, --arch-radius: 100px, --shadow-card: 0 4px 6px rgba(0,0,0,0.4), --font-heading: Cormorant Garamond, --font-body: Crimson Pro, --font-label: Cinzel
- **Preferred Mode:** dark
- **Verdict for Waypoint:** Best fit for the *world* (lore, library, parchment, brass, mahogany). Take the palette logic (warm dark brown surfaces + parchment text + brass accent + one crimson) and the 'slow, non-spring motion, zero neon' rule. Reject: arch-top hero, vignette, wax seals, drop caps and Roman-numeral 'VOLUME I' headings (decorative tells and ornament), 'No sans-serif body fonts' (dense data needs a sans), and the all-caps Cinzel overlines (frontend-design lists all-caps labels as a tell). It is a React Native row, so everything must be re-expressed in CSS. Computed contrast of its own palette (WCAG): Parchment #E8DFD4 on Mahogany #1C1714 = 13.5:1 (on Oak 12.5:1); Faded Ink #9C8B7A = 5.4:1 / 5.0:1; Brass #C9A962 = 7.9:1 / 7.3:1 (dark text on brass 7.9:1, so brass buttons work); Library Crimson #8B2635 is only 2.05:1 on Mahogany (fill/edge only, never text) but parchment on crimson is 6.6:1; its border #4A3F35 is 1.7:1 on Mahogany (still short of the 3:1 control-edge rule). The dark values pass AA out of the box, unlike our current dark borders.

#### `styles.csv` / Data-Dense Dashboard (No 28)
- **Keywords:** Multiple charts/widgets, data tables, KPI cards, minimal padding, grid layout, space-efficient, maximum data visibility
- **Effects & Animation:** Hover tooltips, chart zoom on click, row highlighting on hover, smooth filter animations, data loading spinners
- **Best For:** Business intelligence dashboards, financial analytics, enterprise reporting, operational dashboards, data warehousing
- **Do Not Use For:** Marketing dashboards, consumer-facing analytics, simple reporting
- **Accessibility:** risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **Mobile-Friendly:** conditional
- **CSS/Technical Keywords:** display: grid, grid-template-columns: repeat(12, 1fr), gap: 8px, padding: 12px, font-size: 12-14px, overflow: auto for tables, compact card design, sticky headers
- **Implementation Checklist:** ☐ Grid layout 12 columns, ☐ KPI cards responsive, ☐ Tables sortable, ☐ Filters functional, ☐ Loading states for data, ☐ Export functionality
- **Design System Variables:** --grid-gap: 8px, --card-padding: 12px, --font-size-small: 12px, --table-row-height: 36px, --sidebar-width: 240px, --header-height: 56px
- **Verdict for Waypoint:** Right model for the route, bag advisor, talent/spell tables and book checklist: fixed row height, sticky headers, grid with 8-12px gaps, 'row highlighting', filters. Reject its 12-14px type floor (we want >=14px, body 16px) and its 'consumer-facing analytics' exclusion is a caution to keep it friendly for beginners.

#### `styles.csv` / Accessible & Ethical (No 8)
- **Keywords:** Accessible, inclusive interface, high contrast, large text (16px+), keyboard navigation, screen reader friendly, accessibility standards aware, focus state, semantic
- **Primary Colors:** Measured high-contrast pairs (4.5:1 normal-text baseline; 7:1 enhanced target), simple primary, clear secondary, high luminosity (7:1+)
- **Effects & Animation:** Clear focus rings (3-4px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets
- **Best For:** Government, healthcare, education, inclusive products, large audience, legal compliance, public
- **Accessibility:** risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **Mobile-Friendly:** adaptable
- **CSS/Technical Keywords:** color-contrast: 7:1+, font-size: 16px+, outline: 3-4px on :focus-visible, aria-label, role attributes, @media (prefers-reduced-motion), touch-target: 44x44px, cursor: pointer
- **Implementation Checklist:** ☐ complete-page conformance tested against the chosen target, ☐ 7:1+ contrast checked, ☐ Keyboard navigation tested, ☐ Screen reader tested, ☐ Focus visible 3-4px, ☐ Semantic HTML used, ☐ Touch targets 44x44px
- **Design System Variables:** --contrast-ratio: 7:1, --font-size-min: 16px, --focus-ring: 3-4px, --touch-target: 44x44px, --wcag-target: enhanced, --keyboard-accessible: true, --sr-test-required: true
- **Verdict for Waypoint:** This is the quality floor: 4.5:1 text, 3-4px focus ring, 44x44 targets, 16px+ text, skip links, reduced motion, not color-only. Our current CSS misses the 44x44, the 3px ring and non-text contrast (see issues).

#### `styles.csv` / Dark Mode (OLED) (No 7)
- **Keywords:** Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient
- **Primary Colors:** Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27
- **Secondary Colors:** Vibrant accents: Neon Green #39FF14, Electric Blue #0080FF, Gold #FFD700, Plasma Purple #BF00FF
- **Effects & Animation:** Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus
- **Best For:** Night-mode apps, coding platforms, entertainment, eye-strain prevention, OLED devices, low-light
- **Do Not Use For:** Print-first content, high-brightness outdoor, color-accuracy-critical
- **Light Mode ✓:** not-recommended
- **Dark Mode ✓:** supported
- **CSS/Technical Keywords:** background: #000000 or #121212, color: #FFFFFF or #E0E0E0, text-shadow: 0 0 10px neon-color (sparingly), filter: brightness(0.8) if needed, color-scheme: dark
- **Implementation Checklist:** ☐ Deep black #000000 or #121212, ☐ Vibrant neon accents used, ☐ Text contrast 7:1+, ☐ Minimal glow effects, ☐ OLED power optimization, ☐ No white (#FFFFFF) background
- **Design System Variables:** --bg-black: #000000, --bg-dark-grey: #121212, --text-primary: #FFFFFF, --accent-neon: neon colors, --glow-effect: minimal, --oled-optimized: true
- **Verdict for Waypoint:** Right *motivation* (gaming at night, low-light eye comfort), wrong *palette*: neon green/electric blue/plasma purple accents and 'Light Mode: not-recommended' contradict the brief (light + dark both required, no neon). Take: low white emission, minimal glow, high readability, visible focus; avoid pure #FFFFFF body text.

#### `styles.csv` / Modern Dark (Cinema Mobile) (No 71)
- **Keywords:** dark mode, cinematic, ambient light, glassmorphism, deep black, indigo, glow, blur, atmospheric, reanimated, haptic, premium, layered, frosted glass, linear gradient
- **Primary Colors:** Deep #020203, Base #050506, Elevated #0a0a0c, Accent #5E6AD2
- **Secondary Colors:** Foreground #EDEDEF, Muted #8A8F98, Accent Glow rgba(94 106 210/0.2), Border rgba(255 255 255/0.08), Surface rgba(255 255 255/0.05)
- **Effects & Animation:** Expo.out Bezier(0.16,1,0.3,1) easing; spring modals (damping:20 stiffness:90); haptic-linked press (Impact Light/Medium); animated ambient light blobs (Reanimated translateX/Y slow oscillation); BlurView glassmorphism headers/nav (intensity 20); scale press 0.97 → 1.0; avoid pure #000000 (OLED smear)
- **Best For:** Developer tools, pro productivity apps, fintech/trading dashboards, media/streaming platforms, AI tool interfaces, high-end gaming companion apps
- **Do Not Use For:** Consumer apps needing warmth, children's apps, health/medical contexts where dark feels harsh, high-accessibility contexts needing maximum contrast
- **Accessibility:** risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS/Technical Keywords:** borderRadius: 16 (cards/buttons), background: LinearGradient #0a0a0f→#020203, border: StyleSheet.hairlineWidth rgba(255,255,255,0.08), BlurView intensity={20} tint='dark', useAnimatedStyle + withRepeat (blob oscillation), Easing.bezier(0.16,1,0.3,1), withSpring damping:20 stiffness:90, Haptics.impactAsync(ImpactFeedbackStyle.Light), scale: 0.97 press
- **Implementation Checklist:** ☐ No pure #000000 backgrounds, ☐ LinearGradient base screen, ☐ Animated ambient blobs (Reanimated, native driver), ☐ BlurView on tab bar and headers, ☐ borderRadius 16 on all cards, ☐ Haptic feedback on every Pressable, ☐ Bezier(0.16,1,0.3,1) easing used, ☐ Accent glow behind primary button, ☐ No solid grey borders (rgba only), ☐ Bottom sheets replace all modals
- **Design System Variables:** --bg-deep: #020203, --bg-base: #050506, --bg-elevated: #0a0a0c, --surface: rgba(255 255 255/0.05), --foreground: #EDEDEF, --foreground-muted: #8A8F98, --accent: #5E6AD2, --accent-glow: rgba(94 106 210/0.2), --border: rgba(255 255 255/0.08), --radius: 16px, --easing: cubic-bezier(0.16 1 0.3 1), --font: Inter
- **Verdict for Waypoint:** Names 'high-end gaming companion apps' in Best For (the closest product match) and 'Do Not Use For: high-accessibility contexts needing maximum contrast'. Take: layered elevation via surface steps (#050506 -> #0a0a0c), hairline rgba borders instead of grey borders, no pure #000000. Reject: BlurView/glassmorphism, ambient blobs, glow, haptics, and Inter + indigo (generic).

**Rows deliberately rejected:** `Pixel Art` (retro bright NES palette), `HUD / Sci-Fi FUI` (Do Not Use For: 'reading heavy content, accessible public services'; Accessibility risk:high), `Cyberpunk UI` / `Vaporwave` / `Chromatic Aberration`, `Skeuomorphism` (Do Not Use For: 'web (use Flat/Modern)'; Mobile-Friendly: not-recommended), `E-Ink / Paper` (Do Not Use For: 'Gaming ... dark mode dependent apps'; Dark Mode: not-recommended). And note the product row **Gaming** (`products.csv` No 12 / `ui-reasoning.csv` No 12) recommends 'Primary Style: 3D & Hyperrealism + Retro-Futurism', 'Color Mood: Vibrant + Neon + Immersive', 'Typography Mood: Bold + Impactful', 'Key Effects: WebGL 3D rendering + Glitch effects', 'Anti_Patterns: Minimalist design + Static assets'. That is for games, not for a long-session reference companion; do not follow it. The reference-content rows (Wiki / Encyclopedia, Knowledge Base) are the structural match.

### B. Palettes (`data/colors.csv`), 5 rows, quoted verbatim

#### `colors.csv` / Gaming (No 12)
| Primary | On Primary | Secondary | On Secondary | Accent | On Accent | Background | Foreground | Card | Card Foreground | Muted | Muted Foreground | Border | Destructive | Ring | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| #7C3AED | #FFFFFF | #A78BFA | #0F172A | #F43F5E | #000000 | #0F0F23 | #E2E8F0 | #1E1C35 | #E2E8F0 | #27273B | #94A3B8 | #4C1D95 | #EF4444 | #7C3AED | Neon purple + rose action |
- **Verdict for Waypoint:** Nearly what we already ship (purple primary #7C3AED + rose #F43F5E on indigo-black #0F0F23, 'Neon purple + rose action'). It is the generic gaming default: do not adopt. Useful only as a reminder that our #6a3fa3/#b796f2 purple is the same family the data table gives to every game.

#### `colors.csv` / Knowledge Base/Documentation (No 30)
| Primary | On Primary | Secondary | On Secondary | Accent | On Accent | Background | Foreground | Card | Card Foreground | Muted | Muted Foreground | Border | Destructive | Ring | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| #475569 | #FFFFFF | #64748B | #FFFFFF | #2563EB | #FFFFFF | #F8FAFC | #1E293B | #FFFFFF | #1E293B | #EAEFF3 | #475569 | #E2E8F0 | #DC2626 | #475569 | Neutral grey + link blue |
- **Verdict for Waypoint:** Structure and neutrals for dense reading: slate neutrals, #2563EB link blue, muted #EAEFF3 for table stripes, #E2E8F0 border. Foreground/Muted Foreground (#1E293B/#475569) are good AA pairs. Cool blue-grey is the wrong *mood*, but the role split (card, muted, border, ring) is the right token set.

#### `colors.csv` / Wiki / Encyclopedia (No 167)
| Primary | On Primary | Secondary | On Secondary | Accent | On Accent | Background | Foreground | Card | Card Foreground | Muted | Muted Foreground | Border | Destructive | Ring | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| #1E3A8A | #FFFFFF | #3B82F6 | #000000 | #7C3AED | #FFFFFF | #F8FAFC | #1E40AF | #FFFFFF | #1E40AF | #E9EEF5 | #475569 | #BFDBFE | #DC2626 | #1E3A8A | Knowledge blue + link purple + clean white |
- **Verdict for Waypoint:** 'Knowledge blue + link purple + clean white'. Confirms the convention players know from Wowhead/wiki pages: links are a distinct hue from the accent and from content colors. Take the idea (link color separate from brand accent), not the blues.

#### `colors.csv` / Card & Board Game (No 122)
| Primary | On Primary | Secondary | On Secondary | Accent | On Accent | Background | Foreground | Card | Card Foreground | Muted | Muted Foreground | Border | Destructive | Ring | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| #15803D | #FFFFFF | #166534 | #FFFFFF | #D97706 | #000000 | #0F172A | #FFFFFF | #192134 | #FFFFFF | #0F1F2B | #94A3B8 | rgba(255,255,255,0.08) | #DC2626 | #15803D | Felt green + gold on dark |
- **Verdict for Waypoint:** 'Felt green + gold on dark'. The only tabletop/RPG-flavoured dark palette in the table: deep green-black #0F172A base, felt #15803D, gold #D97706, hairline rgba border. Closest cue for a warm, tabletop, night-friendly mood; gold on dark is how WoW itself marks quest/currency, which helps beginners.

#### `colors.csv` / Developer Tool / IDE (No 81)
| Primary | On Primary | Secondary | On Secondary | Accent | On Accent | Background | Foreground | Card | Card Foreground | Muted | Muted Foreground | Border | Destructive | Ring | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| #1E293B | #FFFFFF | #334155 | #FFFFFF | #22C55E | #0F172A | #0F172A | #F8FAFC | #1B2336 | #F8FAFC | #272F42 | #94A3B8 | #475569 | #EF4444 | #FFFFFF | Code dark + run green |
- **Verdict for Waypoint:** 'Code dark + run green'. Reference for a dark dense-data surface: card #1B2336 over #0F172A, muted #272F42, ring white. Take the three-step surface ladder and white focus ring; ignore the blue-slate hue.

### C. Font pairings (`data/typography.csv`), 5 rows, quoted verbatim

#### `typography.csv` / Academia Mobile (Cormorant + Crimson + Cinzel) (No 68)
- **Category:** Serif + Book Serif + Engraved (Triple Stack)
- **Heading Font:** Cormorant Garamond
- **Body Font:** Crimson Pro
- **Mood/Style Keywords:** academia, library, mahogany, parchment, brass, scholarly, prestige, antique, victorian, leather
- **Best For:** Knowledge management apps, scholarly reading tools, personal brand portfolios, RPG games, cultural community platforms
- **Google Fonts URL:** https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,300;1,500&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400
- **Notes:** Triple-stack: Cormorant Garamond Medium for all headings (32–40px tight leading). Crimson Pro Regular for body reading text (16–18px, lineHeight 24–26px). Cinzel SemiBold for ALL-CAPS labels, overlines, section prefixes (10–12px, letterSpacing 2–3px). Drop caps: first letter 60px Cinzel in Brass #C9A962. Section prefix: VOLUME I/II/III in Cinzel 10px. NO sans-serif anywhere.
- **Verdict for Waypoint:** Atmosphere match for a lore world, all Google Fonts. Use Cormorant Garamond for display only; its note 'NO sans-serif anywhere' and 'Cinzel ... ALL-CAPS labels ... letterSpacing 2-3px' are exactly the tracked-caps tell and would hurt dense tables, so drop Cinzel labels and keep a sans for data. Cormorant is very light and high-contrast: check weight 600+ at 20-24px on dark.

#### `typography.csv` / Academic/Research (No 41)
- **Category:** Serif + Sans
- **Heading Font:** Crimson Pro
- **Body Font:** Atkinson Hyperlegible
- **Mood/Style Keywords:** academic, research, scholarly, accessible, readable, educational
- **Best For:** Universities, research papers, academic journals, educational
- **Google Fonts URL:** https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&display=swap
- **Notes:** Crimson for scholarly headlines. Atkinson for accessibility.
- **Verdict for Waypoint:** Best structural pairing: a bookish serif for headings and a hyperlegible sans for body and data. Crimson Pro 600/700 headings + Atkinson Hyperlegible 400/700 body gives lore warmth (headings) without sacrificing the 12-16px data layer (coords, quantities, prices). Atkinson's distinct 0/O, 1/l/I help coordinates like '47.2, 52.4'.

#### `typography.csv` / Accessibility First (No 48)
- **Category:** Sans + Sans
- **Heading Font:** Atkinson Hyperlegible
- **Body Font:** Atkinson Hyperlegible
- **Mood/Style Keywords:** accessible, readable, inclusive, WCAG, dyslexia-friendly, clear
- **Best For:** Accessibility-critical sites, government, healthcare, inclusive design
- **Google Fonts URL:** https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap
- **Notes:** Designed for maximum legibility. Excellent for accessibility.
- **Verdict for Waypoint:** Single-family fallback or body face: Atkinson Hyperlegible alone is excellent for a beginner audience on a phone; pair with a separate display face only on h1/h2.

#### `typography.csv` / Dashboard Data (No 42)
- **Category:** Mono + Sans
- **Heading Font:** Fira Code
- **Body Font:** Fira Sans
- **Mood/Style Keywords:** dashboard, data, analytics, code, technical, precise
- **Best For:** Dashboards, analytics, data visualization, admin panels
- **Google Fonts URL:** https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap
- **Notes:** Fira family cohesion. Code for data, Sans for labels.
- **Verdict for Waypoint:** Fira Sans body + Fira Code for data. Fira Sans has tabular figures and is calm at 14px; but mono for coordinates is itself a frontend-design tell: prefer `font-variant-numeric: tabular-nums` in the body sans over a mono face.

#### `typography.csv` / Academic/Archival (No 54)
- **Category:** Serif + Serif
- **Heading Font:** EB Garamond
- **Body Font:** Crimson Text
- **Mood/Style Keywords:** academic, old-school, university, research, serious, traditional
- **Best For:** University sites, archives, research papers, history
- **Google Fonts URL:** https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=EB+Garamond:wght@400;500;600;700;800&display=swap
- **Notes:** Classic academic aesthetic. Very legible.
- **Verdict for Waypoint:** All-serif EB Garamond + Crimson Text. Warm and legible, but no sans for data tables; only for long-form 'Start here' prose if the designers want a more bookish reading page.

**Rejected:** `Gaming Bold` (Russo One + Chakra Petch, esports/competitive tone, reads as a game *studio*), `Pixel Retro`, `Retro Vintage` (Abril Fatface display), `Art Deco`, `Cyberpunk Mobile`.

### D. Product / reasoning rows for the nearest categories

#### `products.csv` / Wiki / Encyclopedia (No 167)
- **Product Type:** Wiki / Encyclopedia
- **Keywords:** wiki, encyclopedia, knowledge, article, reference, wikipedia, documentation, collaborative, edit, version, citation
- **Primary Style Recommendation:** Minimalism & Swiss Style + Flat Design
- **Secondary Styles:** Swiss Modernism 2.0 , Accessible & Ethical
- **Landing Page Pattern:** Search-First + Hierarchical Navigation
- **Dashboard Style (if applicable):** N/A - Reference focused
- **Color Palette Focus:** Clean white + link blue + heading hierarchy + citation grey
- **Key Considerations:** Full-text search bar. Table of contents sidebar. Edit history. Inter-page linking. Mobile responsive. Print-friendly.

#### `products.csv` / Knowledge Base/Documentation (No 30)
- **Product Type:** Knowledge Base/Documentation
- **Keywords:** base, documentation, knowledge
- **Primary Style Recommendation:** Minimalism & Swiss Style + Accessible & Ethical
- **Secondary Styles:** Swiss Modernism 2.0 , Flat Design
- **Landing Page Pattern:** FAQ/Documentation
- **Dashboard Style (if applicable):** N/A - Documentation focused
- **Color Palette Focus:** Clean hierarchy + minimal color
- **Key Considerations:** Search-first. Clear navigation. Code highlighting. Version switching. Feedback system.

#### `ui-reasoning.csv` / Wiki / Encyclopedia (No 167)
- **UI_Category:** Wiki / Encyclopedia
- **Recommended_Pattern:** FAQ/Documentation Landing
- **Style_Priority:** Swiss Modernism 2.0 + Accessible & Ethical
- **Color_Mood:** Clean white + link blue + heading hierarchy + citation grey
- **Typography_Mood:** Clear + Hierarchical typography
- **Key_Effects:** Table of contents sticky nav + search highlight
- **Decision_Rules:** {"must_have":["constraint:full-text-search","constraint:toc-sidebar","constraint:edit-history","constraint:interpage-linking","constraint:print-friendly"],"if_content_focused":["constraint:prioritize-clarity"],"if_ux_focused":["constraint:virtualize-lists"]}
- **Anti_Patterns:** No search + flat hierarchy + noisy page chrome
- **Severity:** MEDIUM
- **Reasoning:** reference content needs search, hierarchy, and low-friction cross-linking
- **Confidence:** 0.91

#### `ui-reasoning.csv` / Knowledge Base/Documentation (No 30)
- **UI_Category:** Knowledge Base/Documentation
- **Recommended_Pattern:** FAQ + Minimal
- **Style_Priority:** Minimalism & Swiss Style + Accessible & Ethical
- **Color_Mood:** Clean hierarchy + Minimal color
- **Typography_Mood:** Clear + Readable typography
- **Key_Effects:** Search highlight + Smooth scrolling
- **Decision_Rules:** {"must_have":["constraint:search-first","constraint:version-switching"]}
- **Anti_Patterns:** Poor navigation + No search
- **Severity:** HIGH

## 8. What this means for the design system (inputs for the designer nodes)

These are constraints derived from the audit, not a design.

1. **Replace the template chrome with subject-specific structure.** Drop the tracked-caps eyebrows, middle-dot meta strings and mono data labels; encode "kind", "level" and "confidence" with distinct *shapes/icons* (quest `!` / `?`, boot for travel, crossed swords for dungeon, anvil for profession, coin for shopping, scroll for tip…, hand-made inline SVG) rather than more pills and hues.
2. **Fix the type system before the palette.** One display face used sparingly (h1/h2 only), a hyperlegible sans for UI and data, `font-variant-numeric: tabular-nums` for coordinates, prices, `5/5`, levels; a real scale (e.g. 14 / 16 / 18 / 22 / 28 / 36) with 14px as the floor; `max-width: 68ch` on prose.
3. **Give data a grid.** NPC/quest/vendor lines become rows with fixed slots: name | location | coordinates | copy action (44px target, icon + label), stacked on phones. Tables become stacked records under ~640px with the "why" text first-class.
4. **Separate three color roles.** (a) site chrome/neutrals, (b) per-guide class accent (`--class-accent`, Warlock purple stays here), (c) semantic status: confidence (4 states, with icon), bag action (7 states, different from confidence), danger/warn/info callouts. No hue may mean two things.
5. **Make state visible.** `data-now` current = strong band/edge + "You are here" cue; past = dimmed but legible (>=4.5:1); done = checked + collapsed, not 55% opacity; a sticky mini-progress / "next step" bar for the route (the `data-progress-*` hooks already exist).
6. **Hit 44px for primary controls and 3:1 for control edges;** 3px focus ring; fix the 4 sub-4.5:1 pairs (light community/beta badges, q0/q5 on bg); put `padding-block` on `main` through one owner so the footer gap bug disappears; give the nav an overflow affordance or collapse to a menu/bottom bar on phones; drop the blur from the sticky header (opaque surface).
7. **Dark mode as the first-class night theme.** Warm dark surface ladder (3 steps), hairline rgba borders, no pure #fff body text, quality-color remap kept (`--q*`).
8. **Spend boldness in one place** (frontend-design): the quest-marker / waypoint motif on the home hero and the route progress; keep everything else quiet and dense.
9. **Fan-site guardrails (brief):** evoke Azeroth (parchment, brass, arcane, fel), do not imitate Blizzard UI chrome, logos or Friz Quadrata; Google Fonts or system fonts only; hand-made inline SVG only.
