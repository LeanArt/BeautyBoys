# Research: UX patterns of game guide sites and wikis (for Waypoint)

Node: research / game-guide-wikis. Date of capture: 2026-10-29 (six days before WoW: Forever launches).
Scope: what beginners already recognise from Warcraft Tavern, Icy Veins, Maxroll, the OSRS Wiki, Warcraft Wiki (wiki.gg), Wowhead, plus one exemplary step-by-step route tool (Exile Leveling).
All web content below is treated as reference data. Nothing was installed, committed or deployed.

---

## 0. Method, coverage and access notes (read first)

Rendered with Playwright/Chromium at 1280 px and 390 px (mobile viewport, touch, 2x DPR), screenshots in
`/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/design/shots/gw-*.png`, each viewed with the image reader. DOM measurements (computed font sizes, colours, row heights, overflow) come from `page.evaluate`. Scripts are in `.../design/scripts/gw-*.js`, raw JSON in `.../design/gw-data/`.

| Site | URL used | 1280 | 390 | Notes |
|---|---|---|---|---|
| Warcraft Tavern | /forever/guides/warlock-leveling/ | rendered | rendered | Full page measured (15,637 px desktop, 30,495 px mobile). |
| OSRS Wiki | /w/Cook%27s_Assistant/Quick_guide and /w/Cook%27s_Assistant | rendered | partial | Mobile-UA request got a Cloudflare "Just a moment" challenge (403). I did not try to get around it. The 390 shots are a plain desktop UA in a 390 px window, so they show the desktop skin squeezed, NOT the real phone skin (MobileFrontend). Treat the 390 observations as "what happens if a wiki skin is not responsive", not as OSRS mobile UX. |
| Warcraft Wiki (wiki.gg) | /wiki/World_of_Warcraft:_Forever | rendered | rendered | Long encyclopedic article, used for infobox/TOC/navbox/ad patterns. |
| Maxroll | /d4/meta/alt-leveling-guide (Diablo 4 speed leveling) and a PoE guide | rendered | rendered | Best modern guide shell. The PoE page is "Archived" and mostly an embedded tool, so D4 was the main subject. |
| Icy Veins | /wow-classic/..., /wow-forever/... | blocked | blocked | Cloudflare 403 for headless. Not rendered, no bypass attempted (a raw status probe was also refused by the sandbox and not retried). Everything on Icy Veins below comes from WebSearch snippets of the real pages and is marked "(snippet)". No visual claims are made about it. |
| Wowhead (Classic guide) | /classic/guide/classes/warlock/leveling-tips | first viewport only | first viewport only | First request rendered; later requests were answered with a CloudFront 403, so I only have the first screen at each width plus search snippets. |
| Extra: Exile Leveling (Path of Exile route tool, open source) | heartofphos.github.io/exile-leveling/ | rendered | rendered + interaction | Chosen as the exemplary step-by-step route UI. Interactions tested: tick a step, open the hamburger menu. |

Honest limits: no logged-in state, no real phone, ads/consent behaviour reflects a headless session, OSRS checklist persistence was not verified (the walkthrough checkboxes are `li[data-checklist-index]` items drawn by a gadget; my synthetic clicks did not register reliably).

Screenshot index (all absolute under `.../design/shots/`):
- Tavern: `gw-tavern-1280.png`, `gw-tavern-1280-y900.png` (tabs + numbered rotation), `gw-tavern-1280-y3200.png` (milestone table + Alliance panel), `gw-tavern-1280-y5000.png`, `gw-tavern-1280-y6500.png` (race/class-quest matrix), `gw-tavern-1280-y8600.png` (Where to Level), `gw-tavern-1280-y9600.png` (card sections), `gw-tavern-390.png`, `gw-tavern-390-y2200.png`, `gw-tavern-390-y4200.png` (table turned into stacked cards), `gw-tavern-390-y7000.png`
- OSRS: `gw-osrs-1280.png`, `gw-osrs-1280-y700.png` (walkthrough checklist + map + legend), `gw-osrs-1280-y1400.png` (navbox), `gw-osrsfull-1280-y0.png` (infobox, TOC, quick-guide banner), `gw-osrsfull-1280-y900.png`, `gw-osrs-390-y0.png`, `gw-osrs-390-y600.png` (non-responsive failure)
- Warcraft Wiki: `gw-wowwiki-1280.png`, `gw-wowwiki-1280-y900.png`, `gw-wowwiki-1280-y5200.png` (item table, hatnotes, ads), `gw-wowwiki-1280-y13500.png` (giant navbox), `gw-wowwiki-390.png`, `gw-wowwiki-390-y1500.png` (clipped TOC box), `gw-wowwiki-390-y2600.png` (countdown), `gw-wowwiki-390-y30000.png`
- Maxroll: `gw-maxrolld4-1280-y0.png`, `gw-maxrolld4-1280-y700.png` (sticky TOC + Note callout), `gw-maxrolld4-1280-y1250.png`, `gw-maxrolld4-1280-y1900.png`, `gw-maxrolld4-1280-y3400.png`, `gw-maxrolld4-390-y0.png`, `gw-maxrolld4-390-y900.png` (sticky section dropdown), `gw-maxrolld4-390-y3200.png`, `gw-maxroll-1280.png`, `gw-maxroll-1280-y900.png`, `gw-maxroll-390.png`
- Wowhead: `gw-wowhead-1280.png`, `gw-wowhead-390.png`
- Exile Leveling: `gw-exile-1280.png`, `gw-exile-390.png`, `gw-exile-390-b-checked.png`, `gw-exile-390-c-menu.png`

---

## 1. One-paragraph verdict

The sites beginners already know split into two families. **Reference guides** (Tavern, Icy Veins, Wowhead, Maxroll, wiki.gg) are long prose pages with a table of contents, tabs for builds, tables for unlocks and trainers, and a lot of monetisation chrome. **Route/checklist guides** (OSRS quick guides, Exile Leveling) are step lists with checkboxes, hints under a step, and map pins. Waypoint is the second kind wearing the clothes of the first. The best ideas to take are: the one-line step row with a current-step marker (Exile), the "Details" box with an items checklist at the top of a guide (OSRS), the sticky scroll-spy section nav that becomes a "you are here" dropdown on phones (Maxroll), the TLDR-first page order (Maxroll), the level to zones lookup table (Tavern), the Alliance/Horde coloured panel headers (Tavern), tab-per-spec content (Tavern), and the freshness/changelog/beta-caveat metadata (Icy Veins, Maxroll, Wowhead). What to throw away: ads, floating video, hero art that pushes content down, 14 px body text, wide tables without a scroll strategy, wiki edit chrome, and unlabeled callouts.

---

## 2. Site by site

### 2.1 Warcraft Tavern - Warlock Leveling Guide (WoW Forever)
Observed (1280 and 390).

Layout and chrome
- 1280: fixed left rail 280 px (logo, search, accordion nav Home/Forever/TBC/Classic/Games/News/Tools/Community/About), a top bar of dropdown nav (News, Classes, Professions, Races, Dungeons, Guides, Talent Calculator, Database), a ~590 px article column and a ~320 px right rail (affiliate banner "Zygor Leveling Guides - Affiliate link, we may earn a small commission", "Recent Blue Posts"). The rail eats about 45% of the width, so the prose column is narrow.
- Hero: 300 px tall darkened screenshot with the H1 and the author avatar overlaid ("Zephan"). Then a three-line intro paragraph, a horizontal rule, and a jump line: **"In this guide: Builds | Training | Zones | Equipment | Mechanics"** plus **"Related guides: Classes & Specializations | Warlock Class Overview"**.
- Floating TOC button (blue list icon in a dark rounded square) pinned at the left edge of the article, and a back-to-top button bottom-right. Both persist while scrolling.
- 390: header shrinks to logo + Login, a search field and a "Menu" button side by side, then a full-width "Game Menu" button, then the hero. Everything above the hero is about 150 CSS px (logo row, search + Menu, Game Menu), then a ~200 px hero, so the first sentence starts roughly 360 px down.

Type and colour (measured)
- Titillium Web 16 px / 23.2 px (1.45). H2 28 px weight 400 (same weight as H1, so hierarchy is carried by size only), H3 22 px weight 700. Table cells 16 px with 5 px padding.
- Surface #1E2127 (page) and #28292E (body bg), borders #343943, zebra row #1E2127 against the base, link colour **#FFD100** gold (11.0:1 on #1E2127), body text #DAE3F0 / white.
- Faction panels: a header bar over each table, **Alliance #002E5C** and **Horde #9A0102**, white 18 px bold label. This is the only strong colour-coding on the page and it works: you know which table is yours at a glance.

Content patterns
- **Tabs inside a section** ("Early Levels | Level 30 Affliction | Level 30 Demonology | Level 30 Destruction"; "All Warlocks | Affliction | Demonology | Destruction"). The tab row wraps to two lines at 1280 inside a ~550 px column. Active tab = blue text on a slightly lighter panel, no underline. The panel is a bordered rounded card inside the already bordered article card (box-in-box).
- **Numbered rotation list** (1. Send your Imp... 5. Shoot with your wand) and a **Stat Priority** numbered list. Plain, readable, no checkboxes.
- **Milestone table** `Level | Unlock | Type | From`, spell icon (18 px) before the gold link, "Class Trainers / Class Quest / Profession Trainers / Riding Trainers" in the From column. 24 rows for Warlock. Zebra.
- **Trainer tables** `Trainer | Continent | Zone | Location | Coordinates` with coordinates as plain text "28.6, 66.2" and an asterisk footnote in a plain bordered note box ("Trainers marked with an asterisk (*) will only teach Imp and Voidwalker abilities"). No copy button, no map link.
- **Class Quests matrix** `Spell | Level | Human | Gnome | Orc & Troll | Undead` listing the quest name and the city per race. Useful for a Gnome Warlock but you must read across six columns.
- **Where to Level** two-column table `Recommended Level | Zone` (1: Elwynn Forest, Dun Morogh...; 10: Westfall, Loch Modan...; ...; 60: Mount Hyjal). Tiny, useful, and exactly the thing a beginner asks.
- **Section cards** (Consumables, Soul Shards...) as rounded bordered boxes with H3 + short paragraphs. Items and spells inline as icon + gold link (Wowhead-style tooltips).
- "Mechanics" is a final H2 with H3 children (Demons, Health & Mana, DoTs & Multi-Dotting, Threat & Pulling, Curses & Banes, Utility) which the floating TOC lists.

Mobile behaviour (390)
- Tables turn into **stacked label/value cards**: each unlock becomes 4 lines (Level / Unlock / Type / From), right-aligned values, ~150 CSS px tall per row (measured from the 2x screenshot). A 25-row table becomes ~3,800 px of scroll. Readable, but a very low information density.
- **Failure:** the Class Quests matrix is NOT converted. It stays 469 px wide, so the whole page scrolls sideways (`scrollWidth` 489 against a 390 viewport). Header row also overflows by 5 px.
- Page is about 30,500 px tall on a phone (2x the desktop height).
- Body text is the same 16 px and reads comfortably at 390.

Clutter/dated
- Affiliate banner, blue-posts rail, comments, 9 ad-ish nodes by heuristic, a Login link, a three-level nav. Plain unlabeled callout box (no icon, no label, centred text) means a warning looks identical to an aside.

### 2.2 Icy Veins (snippet-only, not rendered)
Source: WebSearch snippets of icy-veins.com WoW Forever and Classic pages.
- Every guide opens with a **numbered Table of Contents**; Forever class pages include a "Level 30 Talent Build" section (snippet). Leveling guides include a "General Tips" section (Classic leveling guide).
- Class guides are **split into several pages**: class overview, then one leveling page per spec (Affliction, Destruction, Demonology Forever pages exist), each with a leveling talent build and milestone table (Frost Mage snippet mentions a milestone table).
- **Per-page changelog** at the bottom with dated, page-scoped entries ("21 Oct. 2026 (leveling page): Condensed important information"; latest entry on the Forever overview 22 Oct 2026).
- **Beta caveats are said in the copy**: "The WoW Forever Beta only reaching Level 30, so guidance beyond level 30 is incomplete" (Fury Warrior snippet). Pages show relative freshness ("12 days old" in results).
- Takeaway: this is the metadata and honesty model our confidence badges are already pointing at. I cannot comment on its visual design.

### 2.3 Maxroll - Diablo 4 Speed Leveling Guide (best shell)
Observed.

Layout
- A slim icon rail of games on the far left (collapsible with a chevron), a 72 px top nav (Home | Getting Started | Build Guides | Meta | Tier Lists | Bosses | Resources | World Map | D4Planner | Community Builds) with an active item underlined in red, a game hero (title + blurb + social icons), a breadcrumb, the H1, then a **meta card**: author, "Last Updated", an "Archived" red tag where relevant, Follow, Changelog, Get Link buttons.
- Body column ~870 px with a **left sticky TOC card** (~210 px): title "TABLE OF CONTENTS", numbered H2s only (1. TLDR - Fastest Leveling in Season 14, 2. Preparation, 3. Leveling Strategies, 4. Summary, 5. Changelog). The active item gets a **blue dot and brighter text** as you scroll (scroll-spy). H3s are not listed, so the TOC stays five lines long.
- **Mobile:** the TOC becomes a **sticky dropdown bar directly under the header** that always shows the current section name ("Preparation") with a chevron. The page is 11,813 px tall at 390 vs 7,602 at 1280.

Content order
- Intro, a **Note** callout, then **TLDR** as the first H2 (a 7-bullet summary), then Preparation, Leveling Strategies, **Summary**, Credits, Changelog, Related posts. "Last Updated" and Changelog are first-class.
- The PoE guide adds **Overview / Build Information / Leveling** tabs and a **Progression Slider** that advances you through level steps (snippet + page text). That is conceptually our "My level" control.

Type and colour (measured/sampled)
- Source Sans 3 16 px body; **Oswald** condensed headings: H2 uppercase blue (#057AF0, sampled), H3 sentence case blue, each H2 followed by a small grey kicker ("Speed Leveling Guide") and a hairline rule. Page #0A0A0A, panels #0D1318. Body links teal, and **game terms coloured by type** inline (orange for legendary Aspects, pink for Aberrant Cinders, green for seasonal mechanics) with 16 px icons.
- **Callout:** "Note:" as a small tab-label (megaphone icon, #49A8FF) attached to the top-left of a rounded outlined card (1 px #49A8FF on #0D1318, ~16 px radius). 7.4:1 contrast. It is the cleanest callout seen anywhere.
- A "WARNING: THIS GUIDE IS OUTDATED" is just an H2 with a blue left accent bar - visually identical to a normal heading. A miss.

Clutter/dated
- Floating video ad pinned bottom-right on desktop and bottom-left on phones **overlapping body text** (shown in `gw-maxrolld4-1280-y1900.png`, `gw-maxrolld4-390-y3200.png`), a bottom banner on mobile, an empty "ADVERTISEMENT" card inside the meta block, and a 484 px overflow on the PoE page at 390.

### 2.4 Old School RuneScape Wiki - Cook's Assistant (quick guide + full page)
Observed at 1280. Real mobile not captured (see section 0).

Quick guide page structure
1. H1 + small back link "< Cook's Assistant" (breadcrumb to the parent).
2. **Cross-link banner** with a book icon: "This quest has an **in-depth guide**. It contains a more detailed description of dialogue, cutscenes, and storyline." On the full page the mirror banner reads "This quest has a **quick guide** and a **speedrunning guide**. It briefly summarises the steps needed to complete the quest." This is the "quick vs full" toggle, implemented as three separate pages joined by banners.
3. **Details table** (label column #CFBDA1, value column, 1 px #94866D border): Start point ("Talk to the Cook in the kitchen of Lumbridge Castle." + a blue pin link **Show on map**), Official difficulty (Novice), Official length (Very Short), Description, Requirements (a player-name "Look up" field that checks your stats, then "None"), **Items required as a checkbox list** with nested conditional lines ("A bucket (if obtaining the milk during the quest)") and a tiny **[uncheck all]** link, Enemies to defeat.
4. **Walkthrough** = nested checkbox list (2 levels), inline item icons and coin icons, a bold final step "Congratulations, quest complete!". A **map embed floats right** with zoom +/- and fullscreen, coloured pins and a **legend table keyed to the pin colours** (Chicken coop red, Dairy cow field blue, Wheat field yellow).
5. **Rewards** (scroll image + icon bullets: 1 Quest point, 300 Cooking experience, permission to use X), **Required for completing** (back-links to what this unlocks), a collapsible **navbox** (NPCs with portraits, Items with icons, Reward, Locations, Related; "v - e" links and a [hide] toggle), then Categories.

Full page adds a right-floating **infobox** (Released, Members, Quest series, Lead developer), an auto **TOC** with three levels floated left with [hide], and sub-sections per sub-goal with an NPC portrait floated left of the text.

Type and colour (measured)
- IBM Plex Sans 14.4 px / 23.04 px (1.6); PT Serif headings (H1 28.8 px bold, H2 21.6 px with a thin hairline underline). Page #C0A886 with texture art behind the header, content #E2DBC8, details table #D8CCB4, th #CFBDA1, text black (15:1), link **#936039** which is only **3.8:1 on the content and 3.3:1 on the details table - fails AA**. The tan/parchment feel is the closest existing precedent for "evoke the world without imitating the company", and it is a pure colour/texture idea.
- Header utilities worth noticing: a **game clock**, a **dark mode moon**, and a **width-compress toggle** in the top right.

Mobile (desktop skin forced to 390, non-representative)
- The left sidebar keeps a 320 px width, content gets ~70 px, the Details table clips value text mid-word, the title breaks "Qui/ck guide". Illustrates what happens when a dense wiki table is not given a stacking rule.

Clutter/dated
- `[edit | edit source]` beside every heading, a "Recent changes" live feed in the sidebar, a "Report ad" slot, 10 iframes (ads/consent), Discord CTA in the rail.

### 2.5 Warcraft Wiki (wiki.gg) - World of Warcraft: Forever
Observed at both widths.

- Dark: body #101010 / article #1E1E1E, text #E0E0E0, links **#5A93CC** (5.1:1 on #1E1E1E). System sans (Arial-like) **14 px / 24 px** (1.71) - too small for arm's length. H1 25 px italic regular, H2 with a hairline. Header: wiki.gg strip, a large Blizzard-style logo (do not imitate), seven dropdown groups (Navigation, Wiki community, World of Warcraft, Franchise, Useful pages, Lore, Tools), a search field with a gold outline, a dark-mode moon.
- **Infobox** right-floated at ~275 px on desktop (logo, then label/value rows: Developer(s), Publisher(s), Platforms, Release, Genre(s), Mode(s)). On mobile it **jumps above the lead paragraph, full width, label above value** (390: ~1,000 px of vertical space before the first sentence).
- **TOC**: left-floated "Contents [hide]" with nested numbering (1 Features, 3.1 Race class combinations...). On mobile it is a height-capped box whose last entries are cut off ("5.2 Horde" half visible).
- **Hatnote**: italic indented "Main article: Legacy System" under a heading - a one-line pointer to the deeper page.
- **Item table** "Legacy Rewards": header row blue, first column a level/points number in a navy cell, **icon + "[Bracketed Item]" links coloured by quality** (blue for rare, purple for epic) - the exact chat-link convention players know.
- **Launch timeline**: "Forever launches in..." with a live **days/hours/minutes/seconds** counter, then a dated definition list (Beta, Stress test, Early name reservation, Launch, Raids unlock...). A note says all times are shown in the browser's time zone, yet the list reads "November 4" while the counter row reads "Launch, at 11/5/2026, 12:00:00 AM" - ambiguous, a lesson to show date, time and zone together.
- **Navboxes**: a "Transport connections" box with arrows (-> and <->) between zones, and a giant "Games" navbox at the bottom with dark-blue row headers and dozens of inline links separated by middle dots - dense and mostly unusable on a phone.
- Footnote markers `[1][2]...` as tiny superscript links (about 10 px - not tappable).
- Mobile gallery: full-width screenshots, one per row, centred caption links. Page is **34,970 px tall at 390 px** (2.4x desktop).
- Ads: dashed-border right-rail slots (empty in headless) with "Report bad advertisement", a fixed cookie bar covering the bottom ~50 px, a "Indie game deals" chip in the top strip.

### 2.6 Wowhead - Classic Warlock Leveling Guide (first screen only)
Observed (first viewport at 1280 and 390) plus snippets.
- Top **game switcher** strip: home, WoW, Retail, **Forever**, Classic (active, gold-brown fill), TBC, Mists, "...". Under it search, Battle.net/Email/Register, a nav row, and a row of **image tiles** (Season of Discovery, Classes, Professions, Tier Lists, Raids, Leveling, Reputations).
- **Guide Contents panel** (left, 300 px): small class portrait, "Guide Contents / Patch 1.15.8", a **five-star rating "4.2/5 (30 Votes)"**, and chapter entries with **round numbered medallions I, II, III...** ("Classic Warlock PvE Guide", "Classic Warlock Basics"), each with a sub-link. Chapters are separate pages. A collapse chevron hides the panel.
- Article header: title, "By Neryssa", "Updated: 2024/11/18", a row of 30 px icon buttons (favourite heart, pin, report triangle, copy link, overflow).
- **Mobile**: hamburger + search + share; then an **autoplaying video ad** that pushes the H1 about 600 px below the top; a small tan **TOC tab pinned to the left edge**; hero art edge to edge; body about 17 px / 27 px.
- **Desktop**: a ~300 px empty ad band above the breadcrumb.
- Dark #101010, body #BBBBBB (9.9:1). Article links are gold/blue in the screenshots (breadcrumb, chapter titles); I did not inspect in-article link styling below the fold.

### 2.7 Exile Leveling (Path of Exile route tool) - exemplary for step-by-step
Observed at both widths, with interaction. This is the model for Waypoint's Route page.

- **Shell:** a 40 px top bar `Route | Build` (two tabs, icons) and a hamburger menu with `Route, Build, Reset, Sections, Edit Route, 3rd-Party Export, Project on Github`. "Reset" lives in the menu, not on the main screen. A toast "**Setup Auto-Progress**" offers automatic progress (I did not open the setup flow).
- **Act header** ("--== Act 1 ==--") with chevrons on both sides to **collapse the whole act**.
- **Step row:** `01.` bold index, then one imperative line ("Find and kill **Hillock**", "-> **Lioneye's Watch**", "Hand in **!Enemy at the Gate** - Tarkleigh"). 40 px row, 16 px / 24 px, 8 px padding, 1 px separators, Source Sans Pro, #D4D4D4 on #161616 (12.2:1).
- **Three row kinds:** (a) actionable rows with an empty circle, (b) the **current row with a play-in-circle marker**, (c) **informational rows with no circle** ("Get Waypoint") aligned with the text of the others. This directly maps to Waypoint's step `kind` (tip, milestone vs quests, travel...).
- **Done = gone:** ticking step 01 removed it from the list and the "play" (current step) marker moved on (to step 04 in my run; the rule that picks the current step was not determined, and my second tap landed on an informational row, which did nothing). The list only shows what is left, so the scroll length shrinks as you progress.
- **Hints under a hairline:** each step may carry 1-3 bullet hints under a thin rule ("Little streams connect the 3 Rhoa nests", "Recommended Level: 4"). **(i) icons** open longer notes. Direction hints use **arrow-key glyph chips** (left/right boxes).
- **Semantic text tokens** inside a line: monsters orange (#FF8C00, 7.8:1), quest names gold with a "!" glyph, loot lime (#00FF00, 13:1), areas peach with a trailing level hint ("1+"), waypoints blue with an icon, NPC names white bold. Caution for us: lime and orange collide with Wowhead **quality colours** (uncommon green, legendary orange), so hue-only entity coding will fight the tooltips (see section 4).
- Mobile = the same single column, nothing hidden, thumb-height rows. The circle is only 16 px; I verified that tapping the circle toggles a step but did not test whether the label text is also a hit target.

---

## 3. Pattern catalogue (what to reuse, with how)

Numbering is used by the structured summary. "Adopt" is for Waypoint: Astro 5, vanilla CSS custom properties, no framework.

### P1. Quick vs full guide, as a density switch
- Seen: OSRS (three pages joined by a banner: quick guide / in-depth / speedrunning), Exile (Route | Build tabs), Tavern (tabs inside the page), Icy Veins (separate pages per spec).
- Adopt: Route page gets a 3-way segmented control **Quick | Standard | Full**. Quick = one line per step (index, imperative, zone chip, coords). Standard = adds key quests and NPCs. Full = today's StepCard (body, refs, sources). Persist in localStorage. Add an OSRS-style banner at the top of the guide overview ("Want it short? Quick route" / "Want to know why? Full explanations").
- Why: beginners want the quick list while playing and the explanation the first time. One page, same checkboxes, no duplicate content.

### P2. One-line step row, three row kinds, whole row is the hit target
- Seen: Exile (circle / current-play / informational), OSRS (nested checkbox bullets).
- Adopt: StepCard "compact" variant: 48 px min height, `index. Imperative sentence`, entity tokens inline, whole row a `<label>`. Tips and milestones render as **non-checkable informational rows** (no circle, text aligned). The current step (first unchecked in range of My level) gets a distinct marker (play-in-circle icon + 3 px left accent), not just bold text.
- A11y: real `<input type=checkbox>` visually enlarged, `:focus-visible` ring, `aria-current="step"` on the current row.

### P3. Done steps collapse, with a "Show completed" switch
- Seen: Exile (ticked rows vanish).
- Adopt: option "Hide completed steps" (default on while playing on a phone). When on, a ticked row folds away with a short transition (disabled under `prefers-reduced-motion`), a "12 done - show" row stays at the top of its zone group. Keep Undo in a toast for 5 s so a mis-tap is recoverable. ChecklistBar keeps the full count.

### P4. Collapsible zone/act groups with counts
- Seen: Exile act headers with chevrons; OSRS [hide] on TOC and navbox; wiki.gg [hide] on Contents.
- Adopt: Route grouped by zone/hub in native `<details>` (stays searchable, no JS needed), summary shows `Elwynn Forest  7/12` and a mini progress bar, finished groups auto-close, the group containing My level auto-opens. `scroll-margin-top` for anchors.

### P5. Sticky scroll-spy section nav; "you are here" dropdown on phones
- Seen: Maxroll (TOC card with numbered H2s only, active dot; phone dropdown bar showing the current section), Tavern and Wowhead (floating TOC buttons), wiki.gg (inline Contents, capped box on phones).
- Adopt: >= 1024 px: sticky left TOC listing H2s only (5-7 lines max), IntersectionObserver for the active item (dot + weight, not colour alone). < 1024 px: a 44 px sticky bar under the header that shows the current section and opens a bottom-sheet list (or a native `<select>` for zero-JS fallback). Avoid wiki.gg's height-capped TOC and Tavern's floating icon with no label.

### P4b. Jump-to-current FAB instead of generic back-to-top
- Seen: Tavern has back-to-top; long Route pages need the opposite.
- Adopt: a 48 px bottom-right button "Jump to current step" on the Route page (back-to-top on the other long pages), above any bottom safe area, never overlapping the last row.

### P6. TLDR first, Summary last
- Seen: Maxroll (TLDR as first H2, Summary before the changelog), Icy Veins (General Tips).
- Adopt: every guide page opens with a 3-5 bullet "In 60 seconds" box; talents/professions/systems pages end with "Summary" or "Next step". Keep to the top 1.5 screens at 390 px.

### P7. "At a glance" details table with an items checklist
- Seen: OSRS Details table (start point, difficulty, length, requirements, items required with [uncheck all], enemies), wiki.gg infobox, Wowhead guide metadata.
- Adopt: Guide overview gets a Details block: Class/race, level range, estimated time, spec, pet, professions, **"Bring with you" checklist** (items to buy or keep, linked to the Bag advisor) with Uncheck all. On phones stack label above value (as wiki.gg does) instead of keeping two columns (OSRS's squeezed table is the failure case). Add **requirement chips that react to My level** ("Needs level 10 - you are 12: ready"), the OSRS "Look up" idea without a lookup.

### P8. Callout system with labels, not just boxes
- Seen: OSRS banner (icon + bold lead + small descriptor on a tinted bar), Maxroll "Note:" tab-label card, Tavern plain bordered box (weak), Maxroll "WARNING: OUTDATED" as a plain H2 (weak), Exile (i) icons and toast.
- Adopt a fixed set: **Tip**, **Note**, **Warning** (can lose gold/items or die), **Beta data** (values past level 30 are theory; links to the confidence badge). Each: icon + visible label word + left bar + tinted surface, readable in light and dark, never colour alone. Use the Maxroll tab-label shape (label attached to the card's top-left) as the visual idea, with a 6-8 px radius, not 16.

### P9. Tabs per spec/build (and per race where needed)
- Seen: Tavern (Early Levels / L30 Affliction / Demonology / Destruction; All Warlocks / per spec for milestones), Maxroll (Overview / Build Information / Leveling).
- Adopt for Talents/spells/demons: tabs `All | Affliction | Demonology | Destruction`, roving tabindex arrows, tab row `overflow-x: auto` with scroll-snap on phones, every panel keeps its own heading so print/search/no-JS still work (render panels stacked when JS is off). Deep-linkable via `#spec-affliction`. Do not nest bordered cards inside bordered cards (Tavern).

### P10. Compact unlock table with My-level awareness (and a better mobile shape)
- Seen: Tavern milestone table `Level | Unlock | Type | From` with icons; on mobile it becomes 4-line stacked cards (too tall, ~150 px each).
- Adopt: keep a real `<table>` on >= 640 px; below that render each row as a **2-line row**: line 1 `Lv 10 - [icon] Drain Soul`, line 2 `Ability - Class trainer`, ~64 px tall (about 2.3x denser). Rows below My level get a quiet "learned" state, the next unlock gets "Next at level 12" emphasis. Wrap any table that cannot collapse in `overflow-x: auto` with a visible shadow edge (Tavern's matrix table shows the bug).

### P11. "Where to level" lookup (Level -> zones)
- Seen: Tavern `Recommended Level | Zone` table (1, 10, 15, 18, 20, ...). 
- Adopt: a 3-column mini table on the overview, `Level | Zones | Route steps` (steps link to the Route anchors), with the row containing My level highlighted. It is five lines of content and answers the first beginner question.

### P12. Race/faction matrices become filters
- Seen: Tavern class-quest matrix `Spell x Human/Gnome/Orc&Troll/Undead` that overflows on phones; Alliance/Horde panel headers.
- Adopt: Waypoint is Gnome Warlock, so show **only the Gnome column** as a normal list and put "Other races" in a closed `<details>`. If we later add guides for other races, the race/faction becomes a page-level switch, not a matrix.

### P13. Faction/class accent on panel headers
- Seen: Tavern Alliance #002E5C and Horde #9A0102 header bars on trainer tables; Wowhead/Icy Veins use class colour and game-version tabs (Icy Veins class colouring not verified, snippet only).
- Adopt: a `--faction-accent` (Alliance) and an optional `--class-accent` per guide used on section header bars, the progress bar fill, the active tab. This replaces the arbitrary purple with a reason ("Warlock" and "Alliance"). Keep a separate lighter and darker variant per theme to hold AA (gold #FFD100 is 11:1 on dark but 1.3:1 on cream; a dark gold such as #8A6500 is 4.8:1 on cream). Use class colours as palette data only, never logos or ornate lettering.

### P14. Coordinates and map handling
- Seen: Tavern plain "28.6, 66.2" in a column; OSRS "Show on map" pin link + embedded map with legend keyed to pin colours + zoom/fullscreen; Exile has no map but arrow glyphs for in-zone direction.
- Adopt: a **coordinate chip** `pin-icon 47.2, 53.6` (UI sans with `font-variant-numeric: tabular-nums`, not monospace) that is also the `/way` copy button, 44 px tall hit area, "Copied" confirmation via `aria-live`. If a map link is added, make it an external "Open on map" link, not an embedded map. If a map is ever embedded, copy the OSRS rule: legend colours match marker colours and the legend is a visible list (not just colours).

### P15. Icon + quality-coloured link, bracket convention
- Seen: Tavern icon + gold link, wiki.gg `[Item Name]` in quality colours, OSRS inline item icons, Maxroll coloured game terms.
- Adopt: RefItem renders `[icon] Item Name` where the bracket form is available (this is how items appear in chat, a convention beginners will meet in game), with the Wowhead tooltip supplying quality colour. Never use hue alone for link-ness: keep an underline or a dotted underline so a grey (q0) or white (q1) item still reads as a link in both themes.

### P16. Hatnotes and related footers instead of navboxes
- Seen: wiki.gg "Main article: Legacy System" hatnote; OSRS bottom navbox (NPCs, Items, Reward, Locations, Related) collapsible; wiki.gg 80-link "Games" navbox (bad).
- Adopt: under any summary section, a one-line hatnote "Full details: Forever systems ->". At the page end a **Related** row of up to 5 chips (previous/next chapter, glossary terms used on this page), collapsed to one row on phones. No link walls.

### P17. Freshness, credibility, changelog
- Seen: Maxroll (Last Updated, Archived tag, Changelog, Follow, Get Link), Wowhead (Updated date, patch number in the panel header, star rating), Icy Veins snippets (dated per-page changelog, explicit beta caveat), OSRS ("This page was last modified on 24 June 2026").
- Adopt: a one-line meta strip under H1: `Updated 29 Oct 2026 - Based on beta build (levels 1-30) - Confidence: mixed`. A per-page changelog in `<details>` at the bottom. Level 31+ content carries the Beta-data callout (P8) rather than hiding the uncertainty. Our confidence badges are already ahead of every site here; make them tappable to open Sources, instead of wiki.gg-style 10 px superscript footnotes.

### P18. Launch countdown and dated timeline
- Seen: wiki.gg countdown "Forever launches in... 6 days 7 hours 30 minutes 48 seconds" and a dated list; local-time warning.
- Adopt: home hero shows "Forever launches 4 Nov 2026" with a days/hours countdown updated once per minute (no per-second ticking, `<time datetime>`, shows a timezone label). After launch it switches to "Live since ...". Avoid the date-vs-local-time mismatch seen on wiki.gg by always printing date + time + zone together.

### P19. Numbered chapters with a pager
- Seen: Wowhead medallions I, II, III on a Guide Contents panel with chapter titles; Icy Veins per-spec pages; Tavern "Related guides".
- Adopt: GuideNav shows chapter numerals (1 Overview, 2 Route, 3 Talents, 4 Professions) with a done/active state, and each page ends with a **Previous / Next** pager card (min 56 px tall). The current tab text row already works at 390; the pager is the missing piece.

### P20. Progressive disclosure under a step
- Seen: Exile hairline + 1-3 hint bullets + (i) popovers + arrow-key chips; OSRS conditional lines "(if obtaining the milk during the quest)".
- Adopt: step = imperative title, hairline, then 1-3 hint bullets (Standard density), (i) opens a popover on **tap** (hover is not an option on phones), longer notes in Full. Conditional items are phrased as `(only if ...)` and rendered in a quieter style.

### P21. "Reset" and "Sections" belong in the menu
- Seen: Exile hamburger (Reset, Sections, Edit Route, Export) and an "Auto-Progress" prompt.
- Adopt: Route page overflow menu with Reset progress (confirm dialog, shows counts), Export/Import backup code (already exists), and "Mark everything before level N as done" (our equivalent of auto-progress, since a browser cannot read the game log).

### P22. Dark-first, with a parchment light theme that stays AA
- Seen: Tavern, Maxroll, Wowhead, wiki.gg are dark-only or dark-default; OSRS offers a tan parchment theme plus a moon toggle; the parchment links (#936039) fail AA.
- Adopt: dark is the default for the game context, light is a parchment variant. In light mode darken link/accent browns to >= 4.5:1 (e.g. a link near #6F4421 on #E2DBC8). Keep both themes selectable via the existing `data-theme` toggle.

Patterns I looked for but did not find in a usable form: spoiler blocks (none of these sites use `<details>`; the closest are OSRS [hide] and Exile chevrons), a filter UI like our Bag advisor (Wowhead has database filters but I could not render them), print stylesheets.

---

## 4. Cross-cutting findings

### 4.1 Typography density (measured)
| Site | Body | Headings | Table cell | Link |
|---|---|---|---|---|
| Warcraft Tavern | Titillium Web 16 / 23.2 (1.45) | H2 28/400, H3 22/700 | 16, padding 5 | #FFD100 on #1E2127 = 11.0:1 |
| OSRS Wiki | IBM Plex Sans 14.4 / 23.0 (1.6) | PT Serif H1 28.8/700, H2 21.6 | ~14.4 | #936039 on #E2DBC8 = 3.8:1 (fail) |
| Warcraft Wiki | system sans 14 / 24 (1.71) | H1 25 italic | 14 | #5A93CC on #1E1E1E = 5.1:1 |
| Maxroll | Source Sans 3 16 | Oswald, uppercase H2, sentence H3 | n/a | teal on #0A0A0A |
| Wowhead | Open Sans, ~17 / 27 on mobile (visual estimate) | brother-1816 (their own face) | n/a | gold breadcrumb, blue-violet chapter titles on #101010 |
| Exile Leveling | Source Sans Pro 16 / 24 | rows 40 px | n/a | text #D4D4D4 on #161616 = 12.2:1 |

Reading for Waypoint (playing, phone at arm's length): body **17-18 px / 1.55**, step titles **18 px / 1.35 semibold**, table cells **16 px minimum**, row min height **48 px** (44 px is the floor), a clear difference between H2 and H1 by weight AND size (Tavern's 400-weight headings flatten the hierarchy).

### 4.2 Colour semantics seen
- Dark surfaces are near-neutral (#0A0A0A to #28292E); the **single saturated accent** is gold (Tavern, Wowhead) or blue (Maxroll, wiki.gg) with faction blue/red as the only second hue. Parchment (OSRS) is the one warm light theme.
- Exile's entity colours (monster orange, quest gold, item lime, area peach, waypoint blue) are the best-known scheme in route tools, but **lime = uncommon quality and orange = legendary quality in Wowhead tooltips**, and quality colours are already doing a job on every item/spell link in Waypoint. Recommendation: entity type via **icon + shape** (quest "!" badge, skull for monster, pin for place, bag for item), keep hue for quality only, and only add one extra hue (the faction/class accent) for structure.

### 4.3 Long pages on phones
| Site | Phone height | What it does about it |
|---|---|---|
| Warcraft Tavern | 30,495 px | Floating TOC button, back-to-top, tab panels, tables to cards; no collapsing, no progress |
| Warcraft Wiki | 34,970 px | Inline TOC in a capped box, icon-only tabs; nothing sticky; infobox pushed above the lead |
| Maxroll D4 | 11,813 px | Sticky "current section" dropdown; callouts and headings scale well; ads overlap |
| Wowhead | (first screen only) | Left-edge TOC tab, chapters as separate pages; video ad pushes the title down |
| Exile Leveling | grows shorter as you tick | Collapsible acts, done rows vanish, single column |

The lesson: the sites that keep a "where am I" element always visible (Maxroll) or that shorten the list as you progress (Exile) feel manageable; the others are scroll walls.

### 4.4 Table handling summary
1. Tavern: convert to stacked label/value cards (readable, too tall) - except wide matrices which overflow the page.
2. wiki.gg: infobox stacks label over value; item tables keep their columns (tiny but fits).
3. OSRS (non-responsive skin): the two-column Details table keeps its columns and clips text.
4. Waypoint rule of thumb: <= 3 columns stays a table; 4-6 columns becomes 2-line rows; anything wider is filtered to one race/spec or scrolls inside a wrapper with a visible edge shadow and a "swipe" hint.

### 4.5 Search and filter
Search is always at the top of the shell (Tavern left rail, Wowhead header, OSRS header, Maxroll header, wiki.gg header), scoped by game. None of these guides has an in-page filter; our Bag advisor and Library filters are ahead. A scoped "Search this guide" field (static index, e.g. Pagefind) would match the convention.

### 4.6 What each site teaches about the "world" feel without copying the brand
- OSRS: parchment content card on a textured tan page, serif headings, scroll-image rewards, pixel icons.
- Tavern: dark slate + gold links, tavern-board "panel header bars" in faction colours.
- Wowhead: category image tiles; dark with gold-brown active tabs.
- All of them lean on game art and the Blizzard logotype. We cannot. The reusable idea is **material** (parchment, slate, brass edge) and **panel structure**, drawn in hand-made SVG/CSS, with Google Fonts only.

---

## 5. Avoid (dated or cluttered)

1. **Ads and floating video** over content (Maxroll overlaps text; Wowhead puts a ~300 px blank band on desktop and an autoplay video ahead of the H1 on phones; wiki.gg dashed slots + cookie bar).
2. **Small body text**: 14 px at 1.7 (wiki.gg) and 14.4 px (OSRS) are not arm's-length readable.
3. **Wide tables with no strategy** (Tavern's 469 px matrix breaks the whole page at 390 px).
4. **Stacked-label cards for every row** (Tavern: ~150 px per milestone row).
5. **Desktop-first wiki skins at phone width** (OSRS's 320 px sidebar at 390 px).
6. **Edit chrome** (`[edit | edit source]` on every heading, recent-changes feeds).
7. **Unlabeled callouts** and warnings styled like headings (Tavern box, Maxroll "outdated" H2).
8. **Brown or gold links on light parchment** below AA (OSRS 3.8:1; gold on cream 1.3:1).
9. **Boxes in boxes** (Tavern tab panels inside a bordered article card) and **flat heading weights** (Tavern H1/H2 both 400).
10. **Link walls / navboxes with dozens of links** (wiki.gg Games) and **10 px superscript footnotes** as tap targets.
11. **Hover-only affordances** and tiny 16 px checkbox hit areas without a row-wide target.
12. **Hue-only encoding** that collides with item quality colours (Exile's lime/orange).
13. **Hero art that pushes content below the fold** (Tavern 300 px on desktop and ~200 px on phones, Maxroll ~300 px of game hero before the H1, Wowhead video).
14. **Brand imitation**: Warcraft Wiki, Tavern and Wowhead all use the Blizzard-style logotype and ornate lettering; we use none of it.
15. **Ambiguous dates/times** (wiki.gg date vs local launch time).

---

## 6. Suggested adoption order for Waypoint (smallest change, biggest effect)
1. Compact step row + current-step marker + informational rows (P2) and the density switch (P1). Highest value for the Route page and the "second monitor while playing" use.
2. Zone groups as `<details>` with counts and auto-open at My level (P4), Hide completed (P3).
3. Section nav: sticky TOC on desktop, "you are here" bar on phones (P5), Jump-to-current FAB (P4b).
4. Callout set with labels, including Beta data (P8), and the meta strip + changelog (P17).
5. Overview: TLDR (P6), At-a-glance + Bring-with-you checklist (P7), Where to level (P11), launch countdown (P18).
6. Talents: spec tabs (P9), 2-line unlock rows and a Gnome-only class-quest list (P10, P12).
7. Coordinate chip that doubles as `/way` copy (P14), RefItem bracket + icon convention (P15).
8. Faction/class accent tokens with AA-checked light/dark variants (P13), parchment light theme tuned to AA (P22).
9. Pager, related row, hatnotes (P16, P19). Reset/Mark-before-level in a menu (P21).

## 7. Open questions
- Icy Veins' real layout (side TOC? class colour headers? tip boxes?) is unverified because the site blocks headless; a human check with a normal browser would settle it.
- OSRS's real phone skin and its checklist persistence are unverified for the same reason.
- Wowhead guide body (callouts, embedded talent/route widgets) is unseen below the first screen.
