# Research: the WoW ecosystem Waypoint users will have open (Wowhead Forever + Blizzard WoW: Forever pages)

Researcher: node "wowhead-blizzard". Date of capture: 2026-10-29 (launch is 2026-11-04, 3:00 p.m. PST; Wowhead's own countdown read "6 days 7 hours" at capture time).
Scope: UX and visual language only. Nothing was installed, committed or deployed. Downloaded CSS was read as data only.

## 0. Method and access notes

- Every page loaded in headless Chromium (Playwright) at desktop 1280x900 and mobile 390x844 (iPhone UA, DPR 2). No site blocked headless browsing. WebSearch was not needed.
- Wowhead answers plain `curl` with an empty HTTP 202 (a bot challenge). Playwright gets the real page. Ads, a video ad unit, a cookie/consent layer and a sticky bottom ad appear in the screenshots; ignore them, they are not part of the design language.
- Values below are measured with `getComputedStyle`, pixel sampling of screenshots, and reading Wowhead's hosted `universal.css`/`global.css` (selectors for `.q0`-`.q8`, `.r1`-`.r4`, `.c1`-`.c13`, `:root` vars). Anything I could not verify is marked "unverified".
- Pages studied
  - Wowhead Forever: home https://www.wowhead.com/forever, leveling guide list /forever/guides/leveling, guides (Fury Warrior leveling, Zones overview, Cozy Sleeping Bag quest-chain guide, Forever overview), database pages item=7001, quest=92812, zone=1 (Dun Morogh), npc=1692, talent calculator /forever/talent-calc, /forever/maps.
  - Blizzard: Forever landing https://worldofwarcraft.blizzard.com/en-us/forever (found by probing; `/wow-forever` 404s), New Player's Starter Guide (worldofwarcraft.blizzard.com/en-us/news/24315280/...), news article https://news.blizzard.com/en-us/article/24302093/ ("Carve a New Path with World of Warcraft: Forever").
- The `gw-*.png` files in the same shots folder belong to a sibling node; ignore them.

### Screenshot index (all under `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/shots/`)

Desktop slices are `-d-s0..sN` (1000px tall each from the `-d-full.png`); `-top` is the first viewport; `-m-top` is the 390px viewport.

| What | File |
|---|---|
| Wowhead Forever home, desktop first screen | `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/shots/wh-forever-home-d-top.png` |
| Home: news lists, featured guides, countdown, cards | `.../shots/wh-forever-home-d-s1.png`, `wh-forever-home-d-s2.png`, `wh-forever-home-d-s3.png` |
| Home, mobile (community findings, collapsible panels) | `.../shots/wh-forever-home-m-top.png` |
| Leveling guide list (table) | `.../shots/wh-guide-leveling-d-top.png`, `wh-guide-leveling-d-s1.png` |
| Item page (static tooltip, level slider, related tabs/table) | `.../shots/wh-item-7001-d-s0.png`, `wh-item-7001-d-s1.png`, mobile `wh-item-7001-m-top.png` |
| Hover tooltip on item link (2x) | `.../shots/wh-tooltip-item-d.png` |
| Quest page (Quick Facts, difficulty colors, map pins, "/run" helper) | `.../shots/wh-quest-92812-d-s0.png`, `wh-quest-92812-d-s1.png`, `wh-quest-infobox-clip.png`, mobile `wh-quest-92812-m-top.png` |
| Zone page (map card, pin legend, related tabs with counts) | `.../shots/wh-zone-dunmorogh-d-s0.png`, `wh-zone-dunmorogh-d-s1.png` |
| NPC page (map pin, model, "Teaches" table) | `.../shots/wh-npc-kharanos-d-s1.png` |
| Talent calculator (desktop, mobile, node close-up) | `.../shots/wh-talent-calc-d-top.png`, `wh-talent-calc-d-s1.png`, `wh-talent-calc-m-top.png`, `wh-talent-nodes-clip.png` |
| User guide, plain tables + info callout | `.../shots/wh-guide-fury-d-s0.png`, `wh-guide-fury-d-s1.png`, `wh-guide-fury-d-s2.png` |
| Official guide with TOC rail and caps headings | `.../shots/wh-guide-zones-d-s0.png`, `wh-guide-zones-d-s1.png`, `wh-guide-zones-d-s2.png` |
| Quest-chain guide: tooltip card, faction tabs, Step/What-to-Do tables, red gate callout | `.../shots/wh-guide-sleeping-d-s1.png`, `wh-guide-sleeping-d-s2.png`, `wh-guide-sleeping-d-s3.png` |
| Same, mobile (step table at 390px; floating TOC button; "Show Table of Contents") | `.../shots/wh-mobile-steps-m.png`, `wh-guide-sleeping-m-top.png` |
| Forever overview guide (countdown, release-date callout, check-list) | `.../shots/wh-guide-overview-d-s1.png` |
| Wowhead maps tool (empty state) | `.../shots/wh-map-d-top.png` |
| Blizzard starter guide, hero + body | `.../shots/wh-blizz-starter-d-top.png`, `wh-blizz-starter-d-s1.png` ... `wh-blizz-starter-d-s6.png`, mobile `wh-blizz-starter-m-top.png` |
| Blizzard news article (720px column, roadmap graphic) | `.../shots/wh-blizz-news-d-top.png`, `wh-blizz-news-d-s1.png` ... `wh-blizz-news-d-s3.png` |
| Blizzard Forever landing | `.../shots/wh-blizz-forever-d-top.png`, `wh-blizz-forever-d-s2.png`, `wh-blizz-forever-d-s4.png`, mobile `wh-blizz-forever-m-top.png` |
| Raw measurements | `.../shots/wh-styles.json` |

## 1. Wowhead Forever: what it looks like and how it behaves

### 1.1 Layout skeleton (desktop 1280)

- Chrome is four stacked bars before any content, about 250px (a CSS var literally named `--page-content-margin-top-size: 253px`):
  1. 30px game switcher: home glyph, WOW, Retail, **Forever** (active, blue chip `#1b5e8e`), Classic, TBC, Mists.
  2. 50px brand + search (wide search field, then Battle.net / Email / Register buttons).
  3. 50px main nav on `#202020`: NEWS, DATABASE, TOOLS, GUIDES, COMMUNITY, GO AD-FREE (gold), MORE. Small tracked caps, 13-14px bold.
  4. About 120px row of nine illustrated tile links (Forever, Classes, Class Changes, Talent Calculator, Tier Lists, Dungeons, Raids, Professions, Collections) with caps captions.
- Content: left-aligned 920px main column plus a 300px right rail (ads and the "Quick Facts" infobox on database pages). Max content width var 1564px. Gutter 20px. Breadcrumb in gold with tiny triangle separators sits above the title.
- Guide pages add a 300px **left rail** ("Guide Contents / Quick Facts / Patch", star rating, then series groups with round icons and nested table of contents). The article sits in a 600px `#181818` panel with a faded banner image behind the title, byline ("By Serenal, Updated: 2026/09/17"), author strip with Follow button.
- Database pages (item/quest/zone/NPC): H1 + action chips (Favorite, Pin, Links, Find upgrades, View in 3D, Open in World Map), main body, **Quick Facts** infobox on the right, then a "Related" tab strip with counts and a listview table below.
- Home is a stack of collapsible "panels" (medallion icon + title + Customize/hide/collapse buttons): Latest Community Findings (two columns: Items | Quests), Blue Tracker, Recent News (two-column link list with region flags), Forever Featured Guides (3-column link lists), Countdown, Featured News (4 image cards), All News (horizontal image+text cards).

### 1.2 Typography (measured)

| Role | Value |
|---|---|
| Body | Open Sans (Google Fonts), 14px, weight 400, color `#bbbbbb` on `#101010` (contrast 9.9:1) |
| Guide/article text | 16px, line-height 27.2px (1.7), about 540px column = roughly 65-70 characters per line |
| H1 | 28px (guides) to 38px (db), weight **400**, white, headline face "brother-1816" (commercial, do not use) falling back to Open Sans |
| H2 in guides ("heading-bar") | 21px, weight 700, UPPERCASE, letter-spacing 0.63px, centered between two hairline rules |
| H3 | 21px weight 400 (guide) or 14px weight 700 on `#202020` (feed group headers) |
| Table header | 12-14px bold white |
| Quick Facts title | 18px weight **300**, white |
| Buttons | 14px weight 600-700, radius 2px |

So: a single humanist sans, weight contrast used for hierarchy (300/400 big titles, 700 small labels), tracked caps only for navigation and the few centered guide headings. No serif anywhere.

### 1.3 Color usage (measured)

| Token | Hex | Where |
|---|---|---|
| Page | `#101010` | body |
| Card / panel | `#181818` | article, feed panels, listview body |
| Raised | `#202020` | header, nav, feed rows, infobox, step-table header, inactive tabs |
| Table frame | `#282828` fill, 2px `#303030` border | step tables inside guides |
| Body text | `#bbbbbb` | |
| Heading text | `#ffffff` | |
| Muted text | about `#9e9e9e` | inactive tab labels, ages ("7d") |
| Link | `#ffd100` (WoW gold) | every inline link, breadcrumbs |
| UI accent blue | `#175b8c` (buttons, "Hide pins", Register), `#1d8dcd` (Quick Facts square bullets, tab underline, news blue bar), `#1b5e8e` (Forever chip), `#0074e0` (Battle.net) | chrome and actions |
| Talent-tool accent | orange (about `#f48a1a`; pixel `#89470e` on active tier tab, orange "Points left: 51") | calculator only |
| Danger/alert | `#a71a19` (`--wh-ui-accent-*`), pure `#ff0000` 2px border on the "level 14 required" gate box | callouts |
| Tooltip | bg `#050a1e` (near-black navy), 1px `#777777` border, radius about 3px, width 320px | |
| Green check marks | about `#33b36b` | "New features" list |

Radii are small (2px buttons, 4px rows/infobox, about 8px for the release-date callout). **No shadows.** Layers are separated only by the three tonal steps and 2px borders.

**Item quality colors** (from Wowhead's CSS, `!important`): q0 poor `#9d9d9d`, q1 common `#ffffff`, q2 uncommon `#1eff00`, q3 rare `#0070dd`, q4 epic `#a335ee`, q5 legendary `#ff8000`, q6 artifact `#e5cc80`, q7/q8 heirloom `#00ccff`.
**Quest difficulty** (shown as numbers in Quick Facts "Difficulty: 1 56 58 63 72"): r1 `#ff8040`, r2 `#ffff00`, r3 `#40bf40`, r4 `gray`, with a red for "too hard" (r0, rendered red in the screenshot).
**Class colors** `.c1`-`.c13`: Warrior `#c69b6d`, Paladin `#f48cba`, Hunter `#aad372`, Rogue `#fff468`, Priest `#fff`, DK `#c41e3a`, Shaman `#0070dd`, Mage `#3fc7eb`, **Warlock `#8788ee`**, Monk `#00ff98`, Druid `#ff7c0a`, DH `#a330c9`.

### 1.4 Density

Dense but orderly. Listview rows are about 32px tall (50px when an icon + rank sub-line is present), 12-14px text, one thin separator, no zebra. Feed rows are 38px rounded strips. Infobox lines are 25px apart. Mobile feed rows measure about 33px CSS tall, which is **below** the 44px touch target; we should not copy that.

### 1.5 Components worth studying

1. **Tooltips** (`wowhead-tooltip`, 320px). Structure, top to bottom: item name in quality color; "Item Level 50" in gold; "Binds when equipped" in white; slot on the left and type on the right in one row ("Off Hand ... Shield"); armor/block/stat lines in white; "Equip:" effects in green; "Requires Level 45" in white; flavor text in gold; "Sell Price: 2 (gold) 32 (silver) 73 (copper)" with tiny coin icons. A 44px icon tile sits at the top-left outside the card. Quest tooltips are one line of objective text. Behaviour: appears on hover above/below the link; on touch (iOS-UA test) a tap on a link simply navigates, no popover appeared. Wowhead's CSS has `wowhead-tooltip-screen-inner` rules (a full-width "screen" mode) which I did not trigger: unverified.
2. **Static tooltip as content** (item page and guides: `wowhead-tooltip-inline`): the same card rendered inline as a "fact card". Under it on the item page, a **LEVEL 18 / 60 slider** (small tracked-caps label, green fill, grey thumb) and the line "Showing tooltip for Choose a class". This is a ready-made precedent for a global "My level" control.
3. **Quick Facts infobox**: blue square bullets, one fact per line (Level, Requires level, Side, Start: NPC, End: NPC, Not sharable, Difficulty colored digits, Added in patch), NPC names as gold links, quest-giver glyph ("!" and "?") beside Start/End.
4. **Step tables in guides** (Cozy Sleeping Bag): two columns, header "Step | What to Do", first column is a verb (**Travel**, **Investigate**, **Quest**), second is a sentence with a bold zone name, a coordinate command `/way 37, 50` (bold, dotted underline = copyable), and quest links prefixed by the yellow "!" and a faction crest. Wrapped in Alliance | Horde tabs (active tab `rgba(255,255,255,.08)` with a blue underline). At 390px the table stays two columns at 16px/1.7 and remains readable (`wh-mobile-steps-m.png`).
5. **Callouts**: blue "i" box with 2px blue border ("This Is A User-Submitted Guide!"), dark-red rounded box for the release date, and a bare red 2px rectangle for the level gate ("You need to be Level 14 to start this Quest Line"). The last one is the clearest "level gate" idea and also the crudest execution.
6. **Related tab strip with counts** ("Reward from (2) | Same model as (1) | Guides (1) | Comments (18)"), active tab bold with a blue underline on `#181818`; inactive tabs `#202020`, muted text.
7. **Listview tables**: header cells on `#202020` with white bold labels; the sorted column carries an arrow; a result counter "1 - 6 of 6" and filter button above; first column "Changes: Updated / Unchanged" tinted blue; names are gold links with an optional second line ("Rank 1").
8. **Map card** (quest/zone/NPC): parchment-toned zone map, small coin-stack or "!" pins, caption overlay with a black outline for legibility ("Tip: Click map to zoom"), a "Hide pins" toggle, and under it a **legend of filter icons** ("Click an icon to show on the map", grouped NPCs | Quests | Professions | Other).
9. **Talent calculator**: three tree columns with a faded class-art backdrop, each node a ringed 36px icon, greyscale when locked, green ring when learnable, rank counter "0/5" as a black pill at the node's bottom-right, arrows between prerequisites, header "Balance 0 / 51", a segmented control "0 1 2 3 4 5" (active = orange fill), "Points left: 51" (orange numeral), search field with an orange magnifier. On mobile it collapses to a class dropdown + "Additional options" button + stacked trees, big 40px controls.
10. **Countdown module**: "World of Warcraft: Forever Launch **6** DAYS **7** HOURS **32** MINUTES", numerals in blue, units in small caps, UTC date chip.
11. **Feed rows**: age chip (7d, 12d) in muted bold, 20px icon, quality-colored item name or a yellow "!" for quests. Two-column on desktop, one column on mobile.
12. **Guide left rail TOC**: group headers with round icon, then link rows with a "go" arrow glyph; nested contents list with blue dot bullets, 2 levels, active item in blue.

### 1.6 Mobile behavior (390px)

- Chrome collapses to one 40px bar: hamburger, full-width search field, share button. Search is always visible.
- Single column, 20px gutters, 16px/1.7 text, action chips (Favorite / Pin / Links) wrap above the title.
- Guides get a **floating blue square TOC button** pinned to the left edge plus an inline "Show Table of Contents" bar under the byline; the left rail disappears.
- Panels stay collapsible (chevron + overflow menu); feed rows go full width.
- Weak spots: a sticky bottom ad, ad video inline, rows about 33px tall, icon-only action chips. We should keep the structure and fix the sizes.

### 1.7 Dark vs light

Everything observed (all Wowhead Forever pages, all Blizzard pages) is **dark only**. I did not find a light-theme switch on Wowhead (unverified: there may be one in the account menu). This matters: the players' second window is dark, and Wowhead's quality/difficulty colors are tuned for dark only (see section 3).

## 2. Blizzard's official WoW: Forever pages

### 2.1 Forever landing page (`/en-us/forever`)

- Full-bleed painterly key art; a dark glass nav pill with the **Blizzard** logo cell, the Forever lockup, links About / New Zones / Features / Forever Collection, Account, and two teal buttons (Subscribe, Pre-Purchase Now).
- Hero: medallion logo, caps eyebrow ("INCLUDED WITH AN ACTIVE WOW SUBSCRIPTION"), headline "Carve A New Path" in a custom serif (60px) filled with a pale-parchment gradient (`#f3eee2` to `#e2c2ab`), 20px body at 70% white, two flat teal buttons (`#0e6266` family), "Available on Windows/Mac" + Battle.net mark.
- Below: tan torn-edge parchment band with image cards and "View All"; blue night-sky sections with tab rows (Zephras Isle / Riverglades / Mount Hyjal, underlined active tab); alternating image+text feature rows with **ornate corner-flourish frames** around screenshots.
- Mobile: hamburger, circled "W" emblem centered, account icon; hero stacks; full-width stacked buttons (about 180px wide, 47px tall).
- All of this is brand chrome. Useful only as a mood reference (warm gold on deep blue/brown, painterly), not as components.

### 2.2 New Player's Starter Guide (the single most relevant page for Waypoint's audience)

- Hero: full-bleed screenshot, title overlaid bottom-left (36px Semplicita Pro 700 white), meta "October 28, 2026 by Blizzard Entertainment (gold link) / comment bubble 28".
- Body: **bg `#170e09`** (warm near-black brown, faint grain), **text `#ebdec2`** (cream; 14.3:1), **headings `#daa520`** (goldenrod, about 30px, humanist sans/serif display "Semplicita Pro"; 7.9:1+), **links `#f8b700`** (10.7:1). Body face is Open Sans at **16px, line-height 28px, weight 200** (too thin; do not copy the weight). The column is 980px wide at 1280, which is about 110 characters per line: too long.
- Section rhythm: H2, intro paragraph, list or paragraphs, then a **gold-fade horizontal divider** (a centered 490px image with a copper gradient from `#2e1e0d` through `#b07421` back out).
- Content patterns that work for beginners:
  - **Numbered setup list with a bold imperative lead-in**: "**Create your Battle.net account.** Sign up at ..., then ...". One action per number, then one sentence of detail.
  - **Bold UI vocabulary inline**: "Press **Hotkey-L** to open the interface", "Game Menu > Options > Keybindings", "**Quest Log**", "**Resurrect**". Keys and menu paths are the same weight and color as normal bold text.
  - **Plain-language bold lead-ins** in lists: "**Normal:** Focus on adventuring ...", "**Gathering:** Herbalism collects herbs ...".
  - **Two-column comparison** ("Classic" vs "Enhanced", centered gold column titles, "Starting Settings:" bullet lists) that stacks on mobile.
  - **Tip box** (blockquote): background `rgba(255,255,255,.10)`, 8px left bar `rgba(255,255,255,.2)`, 16px padding, gold bold title ("Find Your Spells and Abilities"), body text at 50% white (lower contrast than the rest of the page).
  - **"Five Tips for Your First Adventure"** numbered list as the closing recap, and a "If you are not sure which to choose, start with Enhanced" default recommendation.
- Mobile: 20px gutters, sticky nav with hamburger + "W" + account, share buttons (Facebook blue, X light blue), outlined gold "28 COMMENTS" button; text stays 16px/28px.

### 2.3 News article (`news.blizzard.com/.../24302093/`)

- Neutral near-black `#141313`, text `rgba(255,255,255,.7-.8)`, **Archivo 18px/25px**, link blue `#0592ff` (5.8:1), headline Semplicita Pro 48px 700 centered on a dark gradient over key art, breadcrumb ("Blizzard News > World of Warcraft > ..."), byline with comment count, share icons.
- **720px text column** (about 70 characters per line at 18px): the reference measure for long reading. Section dividers are a 360px blue hairline. Roadmap graphic (2026 | 2027) uses hanging pennant banners in season colors (teal Beta, tan Launch, black Hardcore); it shows how Blizzard encodes time and status, but the pennants are brand art.

## 3. Contrast findings (this changes how we must theme quality colors)

Computed WCAG ratios. Targets: 4.5:1 for normal text.

| Color | on `#101010` | on `#181818` | on `#202020` | on `#050a1e` (tooltip) | on white | on cream `#f6f2ea` |
|---|---|---|---|---|---|---|
| q0 `#9d9d9d` | 7.0 | 6.6 | 6.0 | 7.3 | **2.7** | **2.4** |
| q1 `#ffffff` | 19.0 | 17.8 | 16.3 | 19.7 | **1.0** | **1.1** |
| q2 `#1eff00` | 13.9 | 13.0 | 11.9 | 14.4 | **1.4** | **1.2** |
| q3 `#0070dd` | **3.95** | **3.69** | **3.38** | 4.1 | 4.8 | **4.3** |
| q4 `#a335ee` | **3.90** | **3.64** | **3.34** | 4.0 | 4.9 | **4.4** |
| q5 `#ff8000` | 7.6 | 7.1 | 6.5 | 7.8 | **2.5** | **2.3** |
| q6 `#e5cc80` | 12.0 | 11.2 | 10.3 | 12.4 | **1.6** | **1.4** |
| link gold `#ffd100` | 13.0 | 12.2 | 11.2 | 13.5 | **1.5** | **1.3** |
| body `#bbbbbb` | 9.9 | 9.3 | 8.5 | 10.2 | 1.9 | 1.7 |

Findings:
1. On Wowhead's own dark surfaces, **rare blue (q3) and epic purple (q4) already fail AA for normal text** (3.4-4.0:1). They only pass as large text. Wowhead gets away with it because the glyphs are 16px+ and semi-bold in feeds.
2. On any **light** surface, q0, q1, q2, q5, q6 and the gold link are unreadable (1.0-2.7:1). Wowhead's tooltips.js colors links with these exact values and, in Wowhead's CSS, with `!important`. Waypoint's light theme therefore needs overrides with at least `!important` or a higher-specificity selector scoped to `[data-theme="light"]` and to the `prefers-color-scheme: light` auto case. This must be tested against the real tooltips.js, which I could not do in this node.
3. Candidate AA-safe re-maps I computed (suggestions, not verified in the live library):
   - Dark theme on `#181818`: q3 lift to `#3d9bff` (6.2:1) or `#4aa3ff` (6.7:1); q4 lift to `#b968f5` (5.4:1) or `#c27cf7` (6.4:1). q0/q1/q2/q5 can stay as Wowhead has them.
   - Light theme on white/cream: q0 `#6b6b6b` (5.3/4.8), q1 `#1a1a1a` (17.4/15.6), q2 `#1a7a00` (5.5/4.9), q3 `#0058b0` (6.95/6.2), q4 `#8a24c4` (6.7/6.0), q5 `#b34700` (5.5/4.9), q6 `#8a6f00` (4.8/4.3 on cream: use on white only or darken), link gold becomes a deep amber `#8a6600` (5.3/4.7).
   - Difficulty ladder, light: orange `#b34700`, yellow `#7a6a00`, green `#1f7a1f`, grey `#6b6b6b`, red `#c62828` all 4.8-5.6:1 on white or cream.
4. Quality and difficulty are communicated **by color only** on both sites. For AA and for color-blind users (red/green is the pair that matters here: uncommon green vs "hard" orange/red), pair color with a text or glyph cue in our own components (a one-word label, or a small shape).
5. White on Wowhead's UI blue buttons: `#175b8c` gives 7.2:1 (good); `#1d8dcd` only 3.7:1 (fails for small text); Blizzard's `#0592ff` link on `#141313` is 5.8:1.
6. **Hue budget**: q2 green, q3 blue, q4 purple, q5 orange, difficulty red/orange/yellow/green, gold links, quest-marker yellow are already spoken for inside the game and in the Wowhead tab. Waypoint's own accent needs to be distinguishable from all of those. Note the Warlock class color `#8788ee` sits very close to epic purple `#a335ee`; if we derive the Warlock-guide accent from the class color, we need a deliberate separation (different lightness/saturation, never used for item names).

## 4. Familiar patterns we SHOULD reuse (and how)

These are functional conventions the player already reads fluently, not Blizzard art.

1. **Quality color scale** for item/spell links, with our own AA-corrected values per theme and a non-color cue. (Section 3.)
2. **Tooltip card anatomy**: title in quality color, gold secondary line, white facts, green "effect" lines, left/right slot-type row, coin row. Use it for Waypoint's static "fact cards" (NPC, quest, item, demon summaries) in our own tokens, and keep Wowhead's live tooltips for hover. Cards sit on a near-black navy surface in both themes (the surface can stay dark in light mode, exactly like an in-game tooltip, which also lets the original quality colors remain legible there).
3. **Quest difficulty ladder** (red / orange / yellow / green / grey) as the visual language for "My level": steps become Too hard, Hard, On level, Easy, Trivial relative to the typed level, with labels. Wowhead already prints the five breakpoints as colored numbers.
4. **"!" and "?" quest markers** (available / turn-in). Universal meaning, extremely recognisable. Draw our own simple inline SVG glyphs; do not reuse the in-game bevelled gold art.
5. **Verb-first step rows**: Travel / Accept / Kill / Collect / Turn in / Train / Hearth as the first column or a short leading label, then the sentence with bold place name, coordinates and quest links. This is Wowhead's best guide pattern and it survives at 390px.
6. **Coordinate command as copyable text**: `/way 37, 50` shown as plain text with a dotted underline (the convention on Wowhead), plus a real 44px copy button for phone use. Tabular numerals in the body face instead of monospace.
7. **Quick Facts strip**: label/value lines with gold or accent links to NPCs, and the difficulty digits in ladder colors. On mobile, move it above the content as a compact summary (Wowhead pushes it below).
8. **Sticky guide TOC**: left rail on desktop; on mobile a persistent small button plus an inline "Show contents" bar. For the 65-step Route, also a "jump to level" control (see Level slider below).
9. **Level slider under a tooltip** ("LEVEL 18 / 60" with green fill): precedent for the global "My level" input, with a visible 1-60 range and the current value.
10. **Listview table conventions**: sortable header, result count ("1 - 6 of 6"), icon + name + sub-line ("Rank 1"), a tinted first status column. Apply to talents/spells/demons, Library books and Glossary; collapse to stacked rows on phones.
11. **Tabs with counts** ("Reward from (2)", "Quests (137)") for filtering the Bag advisor (keep/sell/buy/bank/auction/use/destroy with counts).
12. **Rank pill "0/5" and "Points left"** for talent display: a small dark pill pinned to the icon corner, plus a running counter. Cheap, instantly understood.
13. **Collapsible panels with remembered state** (medallion + title + chevron) to keep long reference pages scannable; state in localStorage, with a visible text label so the control is not icon-only.
14. **Countdown** (days/hours/minutes) for the Nov 4 launch on the home page (until launch, then swap for "Live now").
15. **Callout set**: info (confidence/source), warning/gate (level gate, "needs a specific quest"), and a neutral note. Wowhead's three treatments (blue i, dark-red box, red rectangle) show the meanings people already attach to blue/red.
16. **From Blizzard's starter guide (content patterns)**: numbered steps with a bold imperative lead-in then one sentence; bold UI terms and hotkeys ("Press Hotkey-L", "Game Menu > Options > Keybindings") rendered as keycap chips and chevron paths in our own style; a recommended default ("If you are not sure, start with Enhanced"); a closing "Five tips" recap; side-by-side compare columns that stack on mobile.
17. **Reading measure**: 540px at 16px (Wowhead guide) and 720px at 18px (Blizzard news) both land at roughly 65-70 characters per line. Use 60-72ch for prose, wider only for tables.
18. **Warm dark mood as a reference, not a copy**: Blizzard's `#170e09` ground, `#ebdec2` cream text, `#daa520` goldenrod headings are the "Azeroth at night" palette players associate with the world. A warm-biased dark theme (rather than Wowhead's neutral `#101010`) feels like WoW without borrowing any asset. Flat tonal layering (page / card / raised, 2-4px radii, no shadows) is what Wowhead uses and avoids the "SaaS card kit" look.
19. **Mobile structure**: one compact top bar with always-visible search (Wowhead) and full-bleed hero with 20px gutters (Blizzard), but with 44px+ targets throughout.

## 5. Elements we must NOT imitate

Blizzard brand elements
- Blizzard wordmark/cloud logo cell, the World of Warcraft logo, the **World of Warcraft: Forever** medallion lockup, the circled gold-ringed "W" emblem used as the mobile nav mark.
- The dark glass nav pill with a logo cell at its left edge, the specific teal "Subscribe" and red "Subscribe Now" button styling, the "Account" dropdown pattern as chrome.
- Gradient-filled parchment/metal headline lettering ("Carve A New Path"), the custom landing serif, **Semplicita Pro**, Blizzard's proprietary "blizzard" display font, and **Friz Quadrata** (the in-game UI face; not seen on these pages but called out in the brief).
- Ornate corner-flourish frames around screenshots, scrollwork dividers, the torn-parchment section edge, pennant/banner roadmap graphics, the gold-fade copper divider rule used between every section of the starter guide (it reads as a Blizzard news signature).
- Key art, class/race renders, in-game UI screenshots, Blizzard map art. (The only Blizzard-derived imagery that may appear is what Wowhead's own tooltips.js serves for icons, which is outside our asset set.)
- The exact wording "World of Warcraft: Forever" in a logo-like lockup. Plain text references and a fan-site disclaimer are fine.

Wowhead brand and weak spots
- Wowhead logo and rocket-fish mascot, the nine illustrated nav tiles, "Premium"/"Drop the Ads" promotional art, their medallion icon set.
- The "brother-1816" headline face (licensed). Open Sans is a Google Font and could be used, but note it is also the generic default; choosing it is a deliberate "native to the ecosystem" call, not a requirement.
- Ad-driven layout (video slot, sticky bottom ad, 250px of stacked chrome before content). Wowhead's chrome height is the opposite of glanceable.
- **Plain 1px bordered grid tables** in user-submitted guides (Fury Warrior page): every cell boxed, no row rhythm, hard to scan.
- The bare `#ff0000` 2px rectangle callout and the centered ALL-CAPS tracked guide headings flanked by hairlines (a templated tell for the current brief's "no tracked caps eyebrow" goal).
- Icon-only action chips (Favorite / Pin / Links) and 33px mobile rows.
- Color-only encoding of quality or difficulty (see Section 3).
- Blizzard's tip-box body text at 50% white and 200-weight body copy (too faint for a screen at arm's length).
- A left-border accent stripe as the *only* callout treatment: it is the same templated look the brief wants to leave; if a tip callout is used, give it its own shape (e.g. a title chip) rather than copying Blizzard's 8px bar.

## 6. How this maps onto Waypoint's pages and components

| Waypoint surface | Take from the ecosystem | Do differently |
|---|---|---|
| Global "My level" input | Wowhead "LEVEL 18 / 60" slider under a tooltip; difficulty ladder | Persistent compact chip in the top bar (level + stepper), opens a sheet with a slider and number field; labels, not color alone |
| Route (65 steps, checklist) | Verb-first step rows; "!" / "?" glyphs; `/way` copy; sticky TOC; collapsible zone groups | 44px rows, bold verb chip, large checkbox, progress bar at top; coordinates as plain tabular text + copy button; mini coordinate plot (own SVG) instead of Blizzard map art |
| Start here (basics) | Blizzard starter-guide structure: numbered bold-lead-in steps, hotkeys, default recommendation, five-tip recap | Keycap chips for hotkeys, chevron menu paths, no gold-fade dividers, 65ch measure |
| Guide overview | Quick Facts strip; "Guide Contents" TOC; tabs with counts | Summary strip above the fold on mobile; no left-rail ads or promo tiles |
| Talents / spells / demons tables | Listview conventions; rank pill "0/5"; tier segmented control; tooltips on names | Stacked rows on phones, sticky first column on desktop, quality/class color with AA values |
| Professions & support alts | Tabs-with-counts; Quick Facts style attribute lines | Cards only where grouping adds meaning; otherwise rows |
| Bag advisor (filterable cards) | Feed-row strips (icon + age/tag chip + quality name); counts on filter tabs; coin row in static tooltips | Verdict word (Keep / Sell / Buy / Bank / Auction / Use / Destroy) beside color; 48px rows; no identical shadowed cards |
| Forever systems explainer | Blizzard two-column compare; bold UI terms; callout set | Stack on mobile; keep sections collapsible |
| Library books checklist (41) | Listview + collapsible zone panels with counts and remembered state | Per-zone count "3/6", sticky zone header |
| Glossary | Tooltip-card anatomy for entries; search | Alphabetical rail on desktop; each term shows a one-line plain-language definition |
| Confidence badges + sources | Blue-i info callout (Wowhead "User-Submitted Guide" box); red gate callout semantics | Badge with text label (Official / Beta-tested / Community / Theory), collapsible sources |
| Home | Panels with remembered collapse state; countdown module; featured guides | Lead with the next actionable thing for the user's level, not a news feed |

## 7. Visual language, one paragraph

Wowhead Forever is a flat, dark, information-first reference tool: three tonal steps of neutral near-black (`#101010` page, `#181818` panel, `#202020` raised), 2-4px radii, no shadows, one humanist sans (Open Sans) at 14-16px with big light titles and small bold labels, gold (`#ffd100`) links, blue (`#175b8c`/`#1d8dcd`) for UI actions, and all semantic color borrowed straight from the game (quality, difficulty, class, quest markers, coins). Its best ideas are structural: tooltips as the unit of information, verb-first step tables, Quick Facts lists, count-bearing tabs, collapsible panels, and a floating TOC on mobile. Blizzard's official pages are the "world" layer on top: warm brown-black ground, cream text, goldenrod headings, painterly key art, ornamental frames and a bespoke serif, plus an excellent beginner-writing pattern (numbered steps with bold imperative lead-ins, bolded hotkeys and menu paths, a stated default, a tips recap). The ecosystem is entirely dark, so light mode is ours to design, and Wowhead's quality hues are not AA-safe on dark (blue/purple) nor usable on light (green, white, grey, orange, gold), so Waypoint needs per-theme re-maps plus text/shape cues.

## 8. Open questions for the synthesis step

1. Does the real `tooltips.js` re-apply its quality colors after we override (specificity and `!important` race)? Needs a quick in-browser test on the built site in both themes.
2. Does Wowhead's tooltip offer a touch "screen" mode on actual phones? In emulation a tap navigates. If it does not, Waypoint should provide its own non-navigating "peek" (expand-in-place fact card) for item/spell links on touch.
3. Whether to use Open Sans (zero-friction familiarity, but generic) or a more deliberate Google Font; either way, never Friz Quadrata, Semplicita Pro or brother-1816.
4. Whether to ship a warm-biased dark default (closest to Blizzard's mood) and a parchment-leaning light theme, with the tooltip/fact-card surface staying navy in both.
