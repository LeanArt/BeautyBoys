# Competitive and product landscape: WoW: Forever leveling and beginner web guide

Research date: 2026-10-29. Forever launches on 2026-11-04. The beta ran from 2026-09-17 to about 2026-10-22.
Scope: leveling tools and sites, addon API status, interactive guide patterns from other games, data sources and licensing.

**Confidence labels used below**
- **[VERIFIED]**: I tested it myself in this session (HTTP calls, script inspection, API responses).
- **[REPORTED]**: from a secondary source. Many Forever fan sites are new, earn affiliate money (often from RestedXP or Zygor), or read as AI-written. Treat these as leads, not facts.
- **[UNKNOWN]**: not confirmed.

Several big sites (Wowhead page bodies, Icy Veins, Mobalytics, exitlag, MassivelyOP) returned 403 to the fetcher or render with JS. For those I relied on search-engine snippets.

---

## 0. TL;DR

- **The market splits into three layers, and none of them owns the beginner economy question (what to buy, sell and keep, and where).**
  1. In-game route addons: RestedXP (paid after level 20), Zygor (subscription, no Forever content before launch), Guidelime + TUGs (free, volunteer, partial), and Questie (pins only, no route).
  2. Large guide sites: Wowhead, Icy Veins, Warcraft Tavern, Mobalytics and Method. They offer class, spec and talent pages and level-to-zone tables, but no step-by-step race-specific route.
  3. A wave of new Forever companion web apps: Forever Companion, ScryWoW, WoW Forever Tracker and foreverguide.app. They do level timelines, planners and sync, but they are generic and built on beta data.
- **Routes for levels 30–60 are unverified for everyone.** The beta was capped at 30 from Oct 1. RestedXP falls back to Classic Era routes for 35–60. Whoever verifies fastest after launch wins trust.
- **Wowhead tooltips work for Forever [VERIFIED].** `tooltips.js` and `power.js` (the same file) map dataEnv `CLASSICPLUS` (16) to the URL prefix `forever`. Links like `https://www.wowhead.com/forever/item=9425` get tooltips. The JSON endpoint `nether.wowhead.com/forever/tooltip/{type}/{id}` returns 200 for items, quests (including new Forever quest IDs such as 92812), NPCs, spells and zones.
- **Addon API:** Forever runs the modern Mainline API (12.1.5-era) plus the Midnight "secret values" combat restrictions. Classic Era addons do not load and must be rebuilt.
  - Questie, TomTom, Guidelime and RestedXP have Forever builds, so `/way` commands work with TomTom installed.
  - Quest and route addons are allowed. Combat-logic addons are restricted.
  - Blizzard's add-on policy requires addons to be free.

---

## 1. Forever facts that shape the product

| Fact | Source | Confidence |
|---|---|---|
| Client version 1.60.1. wago.tools product `wowf`, latest build 1.60.1.70685 (2026-10-28). Builds tracked since 1.60.1.70245 (2026-10-13). | `https://wago.tools/api/builds` | VERIFIED |
| TOC interface 16001. Game type "Camelot", with `_Forever.toc` accepted as an alias. Forever and Midnight are "two game types within the Mainline code family". | https://warcraft.wiki.gg/wiki/Patch_1.60.1/API_changes , https://warcraft.wiki.gg/wiki/Patch_1.60.1/API_changes/notes | REPORTED (wiki) |
| New race Skyborne (starts on Zephras Isle, levels 1–12). New race/class combos: Dwarf Shaman, Gnome Priest, Human Hunter, Undead Paladin, Orc Mage, Troll Warlock. | https://kami-labs.fr/en/wow-forever/mise-a-jour-restedxp-wow-forever/ , https://www.warcrafttavern.com/forever/guides/zephras-isle-walkthrough/ | REPORTED |
| Gnome Warlock is a normal Classic combo and starts in Dun Morogh (Coldridge Valley). | general Classic knowledge plus https://games.gg/world-of-warcraft/guides/wow-forever-gnome-guide/ (low-quality source) | REPORTED |
| Quest log grew from 20 to 40. | https://www.digitalcitizen.life/wow-forever-players-are-saving-40-completed-quests-for-the-next-level-cap-increase/ (403 on fetch; snippet only) | REPORTED |
| Bonus XP from dungeon quests was cut 50% on Oct 1. The beta cap was raised from 20 to 30 on Oct 1. Devs said levels 1–20 are slightly slower than Era. | same search cluster; https://massivelyop.com/2026/09/25/world-of-warcraft-forever-discusses-beta-player-reactions-skyborne-and-planned-future-adjustments/ | REPORTED |
| **Item data differs from Classic.** Pendulum of Doom (item 9425) is "Binds when picked up" on Forever but "Binds when equipped" on Classic. Classic data cannot be reused blindly. | `nether.wowhead.com/forever/tooltip/item/9425` vs `/classic/` | VERIFIED |
| New Forever quests use IDs in roughly the 92xxx–98xxx range (e.g. 92812 "Economic Warfare", 98913 "Theramore Basic Care Package"). | https://www.wowhead.com/forever/quest=92812 ; tooltip API | VERIFIED |
| **Legacy System** (account-wide, 65 challenges). Classes: reach 25/45/60. **Tradeskills: 150/225/300 in each non-gathering primary profession.** Dungeons, raids, PvP and exploration also count. Perk trees are Professions, Adventure and Resourcefulness. Each character can spend 16 points at launch. Unlocks at first point (about level 25, 150 in a crafting skill, or full map exploration). | https://worldofwarcraft.blizzard.com/en-us/news/24307383 (Sep 23, 2026) | VERIFIED (official page) |
| Implication: gathering professions earn no Legacy points; crafting professions do. That is relevant to profession recommendations (e.g. Tailoring or Enchanting for a Warlock). | derived from the Blizzard article | Inference |
| Other systems: Campfires/camping perks, Reagent Bag, modern AH, built-in damage meter and Cooldown Manager, gamepad UI. Hardcore is not at launch. | https://wowforeverguides.com/zygorguides , https://scrywow.com/wow-forever-leveling-planner/ , https://www.curseforge.com/wow/addons/forever-guide | REPORTED |
| Forever adds about 959 new recipes, 9 new dungeons and 28 new rares (per one addon's counts). | https://www.curseforge.com/wow/addons/forever-guide | REPORTED |
| Warlock changes: Curse of Agony and Curse of Doom become "Banes", pets scale with Warlock stats, trees reworked (Warlock has the most new talents). | https://www.icy-veins.com/wow-forever/news/poisons-daggers-pet-scaling-and-banes-rogue-and-warlock-forever-deep-dives/ , https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/ | REPORTED |
| Spell sanity check: Shadow Bolt (686) on Forever is 25 mana, 1.7 s cast, requires level 1. | `nether.wowhead.com/forever/tooltip/spell/686` | VERIFIED |

---

## 2. Existing tools: in-game addons

| Tool | Forever status | Price | Format and features | Complaints and caveats |
|---|---|---|---|---|
| **RestedXP** | Free addon on CurseForge, v4.11.15 (Oct 4). Phase 1 (levels 1–35 Forever routes, both factions, Skyborne routes, the 6 new combos) completed Oct 9. **Levels 35–60 use Classic Era routes until post-launch Forever routes.** The Dungeon Leveling guide is WIP. "Discovery" and "Legacy" tracks are planned. | Addon free; levels 1–20 free. Guide costs $30 per faction or $45 for both. Refunds are generally not offered. | In-game step list, arrow, auto-skip of steps, class, profession and class-quest aware. Linked to a talent calculator. Windows and Mac only. | Paywall and RMT debate. Oct 17 forum thread on promotion during a Blizzard dueling tournament: "useless without the paid guides". Rigid route; "jumping in mid-guide is completely impossible" (Classic thread, Jan 2025). Excess travel and side quests. "Felt like a puppet." Licence conflict: GitHub says CC BY-NC-SA 4.0, CurseForge says All Rights Reserved. No Blizzard ruling on compliance with the add-on policy (rule 1, free; rule 4, no ads). |
| **Zygor** | No beta guides. Forever guides "coming this November" and possibly partial 1–60 at launch. Investigating Legacy and Campfires. | Elite $15/month or $40/quarter. "All sales are final." | Guide Viewer, 3D arrow, progress detection; gold, profession and dungeon categories (Forever coverage unconfirmed). | Users ask for zone-by-zone and 100%-zone-completion guides and for profession and farming guides. Replies were "We are working on this" with no commitment. |
| **Questie** | Forever client support since v12.0.1 (Sep 25). Latest v12.3.1 + QuestieDB 1.0.9 (Oct 26). QuestieDB has "Forever base data" since 1.0.5 (Oct 6), refreshed from an Oct 10 snapshot, plus trace data. | Free, GPLv3 | Map and minimap pins for quest givers, objectives and turn-ins; tracker. **No route.** | Repo file `FOREVER_WORK_LEFT_TO_DO.md` lists many open items: new Forever quest, NPC and spawn coverage incomplete; Skyborne eligibility untested; SavedVariables cold-start issue; combat tooltip problems. |
| **Guidelime** + **TUGs** guides | Guidelime v6.000 (Sep 24) brought "initial work to support WoW Forever"; v6.003 on Oct 4; a Forever file listed Oct 15. TUGs Forever guide covers all starting zones and levels 12–30 (beta), with 30–60 promised after release; last Forever update Oct 3. | Free | Text-defined guides with arrow and auto-progress. **Users can write or import their own guides.** | Volunteer effort with no guarantee. Licence "All Rights Reserved" on CurseForge and no licence file on GitHub. |
| **Joana's Guides** | **No Forever version found.** The creator died in April 2024; TomCat maintains it. | Gumroad / Patreon | Classic speed routes | [UNKNOWN] whether a Forever route is planned |
| **Azeroth Auto Pilot / Azeroth Pilot Reloaded** | **No Forever version found.** | Free | Auto accept and turn-in, arrow | Classic users report bugs and an "automates too much" sentiment |
| **TomTom** | Forever file v4.3.13 (Oct 24, 2026). | Free | `/way x y`, `/way #zone x y`, `/tway`, `/wayb`, `/cway`, and **`/ttpaste` to paste many `/way` lines at once** | All Rights Reserved |
| **Forever Guide (LFYZ)** | v1.37.0, build 1.60.1 (Oct 20); about 82.8k downloads. | Free | "In-game Wowhead": 35 dungeons, 22k items, gear per slot (WoWSims Forever stat weights), about 800 class quests, rares, layers, 2,495 recipes with AH profit estimates. | All Rights Reserved. Built from Forever client tables, QuestieDB, ForeverChanges, Wowhead Forever, WoWSims Forever and cmangos. |
| Other Forever addons | Azimute (free route adapted from RestedXP); Ez XP (French RestedXP fork); ForeverQuest (3,772 legacy quests, Questie-derived GPLv3 data); Forever Quest Items (shows which quests need an item, a "keep" hint); Forever Profession Master (routes and shopping lists); Waypoint Tracker (TomTom-compatible `/way` arrow); Zone Scout / Zonewise / ZoneLevelGuide (zone level ranges); Enhanced Quest Tracker; MyQuestPlates. | Free | | |

Sources:
- https://kami-labs.fr/en/wow-forever/addons-leveling-wow-forever/ (affiliate disclosure)
- https://kami-labs.fr/en/wow-forever/mise-a-jour-restedxp-wow-forever/
- https://kami-labs.fr/en/wow-forever/restedxp-interdit-wow-forever/
- https://wowforeverguides.com/leveling/addons
- https://wowforeverguides.com/restedxp/vs-guidelime
- https://wowforeverguides.com/zygorguides (affiliate)
- https://github.com/Questie/Questie/releases
- https://github.com/Questie/Questie/blob/master/FOREVER_WORK_LEFT_TO_DO.md
- https://github.com/Questie/Questie/blob/master/docs/questiedb-integration.md
- https://www.curseforge.com/wow/addons/tomtom
- https://www.curseforge.com/wow/addons/forever-guide
- https://www.curseforge.com/wow/addons/ez-xp
- https://www.curseforge.com/wow/addons/azimute
- https://www.curseforge.com/wow/addons/foreverquest
- https://www.curseforge.com/wow/addons/forever-quest-items
- https://www.curseforge.com/wow/addons/forever-profession-master
- https://www.curseforge.com/wow/addons/waypoint-tracker
- https://www.curseforge.com/wow/addons/zone-scout
- https://www.curseforge.com/wow/addons/enhancedquesttracker
- https://www.curseforge.com/wow/addons/guidelime_tugs
- https://www.curseforge.com/wow/addons/joanasguides
- https://www.curseforge.com/wow/addons/azeroth-pilot-reloaded
- https://eu.forums.blizzard.com/en/wow/t/restxp-addon-is-so-garbage/556820
- https://us.forums.blizzard.com/en/wow/t/paid-addon-being-promoted-during-the-dueling-tournament/2385754
- https://au.trustpilot.com/review/www.restedxp.com?page=6 (RXP TrustScore 4.5 from 116 reviews, per snippet)

---

## 3. Existing tools: websites

### 3a. Large guide and database sites

| Site | Forever coverage | Interactive features | Gap relative to our MVP |
|---|---|---|---|
| **Wowhead** (`/forever/`) | Database at patch 1.60.1: items (about 22.6k), quests, NPCs, spells, objects, achievements. Class and spec guides by Zephan (Warlock: leveling tips for all 3 specs, level 20/30 overviews; updated 2026-10-26). Profession overviews (e.g. Cooking). "Every Dungeon Quest" guide. | Talent calculator (supports Blizzard loadout-string URLs: `/forever/talent-calc/blizzard/<string>`); Gear Planner; **World Map tool** (Sep 20, 2026: enter level to see zones, instances and quests that are too high, too low or right, and set faction and level from an exported character); Legacy Calculator; Max Level Planner; Wowhead Client (tracks completed quests and recipes); tooltips. | No step-by-step race-specific route found. No bag, vendor or shopping advisor. |
| **Icy Veins** (`/wow-forever/`) | Spec guides, spec leveling guides (Warlock Affliction and Demonology; Destruction says level as Aff or Demo until 40), professions overview, "choosing your class", changelog. | Talent calculator; level-slider style leveling pages (per snippet) | Leveling pages are spec-centric. The Affliction leveling guide was capped at level 30 during beta. No route. |
| **Warcraft Tavern** (`/forever/`) + **Warcraft DB** (`forever.warcraftdb.com`, Lexicon Gaming LLC) | Class leveling guides including Warlock (builds; training and milestone tables; class and demon trainers with coordinates; level-to-zone table, not faction-split; wand and gear lists; profession recs: Tailoring, Enchanting, Cooking, First Aid, etc.). Zephras Isle walkthrough (quest-by-quest, coordinates inline, no `/way`, no maps). 12 profession guides. | Talent calculator, database, blue tracker. **Public tooltip embed and JSON API** (CORS `*`). | Prose and tables. No checklists or progress. Zygor affiliate ad. |
| **Mobalytics** (`/wow-forever/`) | Warlock leveling guide (Crix, updated Oct 29), community and creator guides (e.g. Kargoz Affliction and Demonology 1–60), tier list, talent calculator with share links, zone level-range map, **Zephras Isle interactive map**, "what to keep, sell or auction" guide (RampageWoW, Oct 3). | Interactive map; talent calculator; share links | Site returned 403 to the fetcher, so feature detail is unverified. The two snippets disagree on the recommended Alliance warlock race (Human vs Gnome). |
| **Method.gg** | Warlock leveling and talents guide | | |
| **wow-professions.com/forever** | Tailoring and Enchanting 1–300 leveling guides with shopping lists (estimates) | Static | |
| **RankedBoost** | Profession guides (Mining, Enchanting) | Static | |
| **Kami-labs (FR)** | Addon comparisons, profession guides | **Tailoring shopping list that updates when you enter your current skill** | Affiliate (RestedXP sponsor) |
| **Zockify** (`/forever/`), **Seemeta** | Talent calculators, gear planner, professions | URL-encoded builds | |

Sources:
- https://www.wowhead.com/forever/database
- https://www.wowhead.com/forever/guides/classes/warlock
- https://www.wowhead.com/forever/guide/classes/warlock/affliction/dps-leveling-tips
- https://www.wowhead.com/forever/guide/classes/warlock/demonology/dps-leveling-tips
- https://www.wowhead.com/forever/guide/classes/warlock/destruction/dps-leveling-tips
- https://www.wowhead.com/forever/talent-calc
- https://www.wowhead.com/forever/gear-planner
- https://www.wowhead.com/forever/world-map
- https://www.wowhead.com/news/wowheads-new-wow-forever-world-map-tool-now-live-382990
- https://www.wowhead.com/forever/guides/leveling
- https://www.wowhead.com/forever/guide/dungeons/every-dungeon-quest-location
- https://www.wowhead.com/forever/guide/professions/cooking/overview-leveling
- https://www.icy-veins.com/wow-forever/
- https://www.icy-veins.com/wow-forever/affliction-warlock-leveling
- https://www.icy-veins.com/wow-forever/demonology-warlock-leveling
- https://www.icy-veins.com/wow-forever/destruction-warlock-leveling
- https://www.icy-veins.com/wow-forever/professions-overview
- https://www.icy-veins.com/wow/news/start-planning-your-wow-forever-character-with-our-new-talent-calculator/
- https://www.warcrafttavern.com/forever/guides/type/leveling/
- https://www.warcrafttavern.com/forever/guides/warlock-leveling/
- https://www.warcrafttavern.com/forever/guides/zephras-isle-walkthrough/
- https://forever.warcraftdb.com/
- https://forever.warcraftdb.com/tool/tooltip
- https://mobalytics.gg/wow-forever/classes/warlock-leveling-guide
- https://mobalytics.gg/wow-forever/talent-calculator
- https://mobalytics.gg/wow-forever/guides/zephras-isle-interactive-map
- https://mobalytics.gg/wow-forever/guides/zone-map-level-ranges
- https://mobalytics.gg/wow-forever/profile/rampagewow-1zhvs5/guides/wow-forever-what-to-keep-sell-or-auction
- https://www.method.gg/wow-forever/wow-forever-warlock-leveling-guide-and-talents
- https://www.wow-professions.com/forever/tailoring-leveling-guide
- https://www.wow-professions.com/forever/enchanting-leveling-guide
- https://rankedboost.com/world-of-warcraft/forever/professions/
- https://kami-labs.fr/en/guide-couture-wow-forever/
- https://www.zockify.com/forever/talents/
- https://seemeta.com/en/wow-forever/talent-calculator

**Talent calculators are saturated.** There are at least 8: Wowhead, Icy Veins, Mobalytics, Warcraft Tavern, Zockify, Seemeta, foreverguide.app and wowforeverguides.com. Do not build one; link or embed instead.

### 3b. Forever-specific companion web apps (closest direct competitors)

| Product | What it does | Sync with game | Price and storage |
|---|---|---|---|
| **Forever Companion** (forevercompanion.io) | Builds a 1–60 step plan from class, race, faction and goal (fastest XP, gear or collecting). Dungeons, zones, class quests and profession ranks on one timeline. **Tick-off steps; a level-up moves you to the next level.** Search, category filter, jump to level. Dungeon pages list quests and XP. Gear upgrade markers. "Verified in game" only when at least 3 players' reports agree. XP marked "est." from Classic values. | Windows app (beta) plus a sync addon. Fills level, XP, professions and done quests. | Free, no ads, Ko-fi. No account; browser storage plus a **6-character recovery code**. Data from ForeverChanges, Wowhead and Zockify, synced several times a day. |
| **ScryWoW** (scrywow.com) | **Quest XP-per-minute rankings.** Character planner (race, class, spec, role, focus). Level-by-level route that adapts when you skip zones. BiS and stat priorities. Profession recommendations by goal. | Addon. **"Copy for game"** pastes the plan into the addon options. Addon shows quest value badges, map pins and turn-in XP preview. | Free. Browser storage, no account. Quest data adapted from Questie (GPLv3). Made by CNY Webs. |
| **WoW Forever Tracker** (wowforevertracker.up.railway.app + CurseForge addon) | Fastest quest path to a target. **Profession path with reagents, trainer visits and costs; farming spots.** Best upgrade per slot (quest, vendor, craft, drop or AH). AH price trends, watchlists, talent and macro tools, play-log pace tracking. | Addon writes SavedVariables. The site does "Import from game"; in Chrome or Edge you can **connect the WTF folder once (File System Access API) for auto-updates.** "Send to game" then `/reload`. | Free, MIT. Browser storage; anonymized AH scans shared (opt-out). About 1.1k downloads. |
| **foreverguide.app** | Talent calculator (with Legacy), 1–60 zone and dungeon order across 6 bands, class guides, database, **AI chat companion** (5 free questions a day). | Not an addon | Freemium, **Premium $7/month** (saved characters, profession economy tracker, alt and Legacy planner, gear wishlist). |
| wowforeverguides.com | Large affiliate content site with 30 "tools": ship-route planner, quest DB subset, 7-step quest route checklist, Legacy perk planner, talent calc with saved builds, macro reference with copy, and more. | | Affiliate (RestedXP and Zygor) |
| wowap.app, partytracker.app | Achievement tracker; group tracker (with addon and Windows app) | | |

Sources:
- https://forevercompanion.io/
- https://www.curseforge.com/wow/addons/forever-companion
- https://scrywow.com/wow-forever-leveling-planner/
- https://www.curseforge.com/wow/addons/wow-forever-tracker
- https://warperia.com/addon-forever/wow-forever-tracker/
- https://foreverguide.app/
- https://wowforeverguides.com/tools
- https://wowforeverguides.com/legacy
- https://wowap.app/
- https://partytracker.app/

**Takeaway:** The planner and timeline space is already crowded with free, polished tools that ship before launch. Our differentiation has to come from three things:
1. A curated, opinionated step-by-step route for a specific race and class, with the reasons behind each step.
2. Inventory and economy guidance (what to sell, keep or buy, and where), which no competitor covers well. Only the Mobalytics article and generic Classic guides touch it.
3. Beginner-first explanations, with verification after launch.

---

## 4. User sentiment and pain points (what to design against)

- **Paywalls and trust.** Strong community dislike of paid guide models in Forever: forum thread Oct 17; a Sep 20 thread asking to ban RestedXP and Zygor; "money to burn". Free and no-account is the norm among new competitors.
- **Rigid routes.** You can't join mid-route, and skipped quests break the flow (RestedXP). Zygor users ask for "complete every quest in a zone" and zone-by-zone options. **Design for resuming from any step and for optional or skip-able steps.**
- **Over-automation and the "puppet" feeling** (RestedXP, AAP). Beginners want to understand why a step matters. Explanations are the differentiator.
- **Excess travel and low-value side quests** (e.g. 1%-drop quests). Flag low-value quests and allow skipping.
- **Data churn.** Beta data changes, the 30–60 levels are untested, and Classic data is wrong for Forever (BoP vs BoE example). Users need confidence labels and a "last verified" date.
- **Platform gaps.** RestedXP is Windows and Mac only; Linux, Steam Deck and Proton users lose the refund right. A web guide works everywhere, including a phone as a second screen.
- Streamer sentiment (via wowforeverguides): Xaryu likes Questie for planning; Kungen dislikes addons in general; KingGothalion prefers official integration. That points to a demand segment for addon-free guidance.

Sources:
- https://us.forums.blizzard.com/en/wow/t/paid-addon-being-promoted-during-the-dueling-tournament/2385754
- https://eu.forums.blizzard.com/en/wow/t/restxp-addon-is-so-garbage/556820
- https://wowforeverguides.com/leveling/addons
- https://wowforeverguides.com/zygorguides
- https://kami-labs.fr/en/wow-forever/restedxp-interdit-wow-forever/

Reddit was not reachable: the search tool blocks reddit.com, so Reddit sentiment is **[UNKNOWN]**.

---

## 5. Addon API status for Forever

| Point | Detail | Confidence |
|---|---|---|
| Engine | "We did opt for the modern API approach" (Nora Mills, Developer Q&A, Sep 17, 2026; quoted by wowsod.pro). Forever shares Mainline's UI architecture and "the vast majority of APIs available in 12.1.5". | REPORTED (secondhand quote; VOD: https://www.youtube.com/watch?v=Y5zzSMSVhRo) |
| Classic addons | Classic Era addons do not load; they need a Forever (Mainline) rebuild. Retail and Midnight addons port more easily. | REPORTED (multiple) |
| Combat restrictions | Midnight "secret values" and "addon disarmament" carry over. Combat values can be displayed but not used for logic. Other changes: GUID spawn IDs obfuscated (anti-layer comparison), FrameStrata secret aspect, trial accounts cannot send addon messages. | REPORTED (warcraft.wiki.gg notes) |
| Blizzard stance | "We didn't remove add-ons, and we're not removing add-ons from the game … We just changed the API." Interrupt trackers may be restricted further. Built-in damage meter and Cooldown Manager; swing timer "perhaps coming soon". | REPORTED (Warcraft Tavern interview, Sep 14, 2026) |
| Quest and route addons | Work. Questie, Guidelime, RestedXP, TomTom, Leatrix and others have Forever builds. Questie's own notes list Forever API differences (C_QuestLog trivial range, watch frames, map APIs) and a SavedVariables cold-start issue. | REPORTED plus repo docs |
| `/way` | Not native (Mainline has single user map pins, without a slash command). **TomTom has a Forever build**, and Waypoint Tracker offers TomTom-compatible `/way`. TomTom's `/ttpaste` takes many lines at once. | REPORTED |
| Talent strings | Wowhead's Forever talent calculator accepts Blizzard loadout strings (`/forever/talent-calc/blizzard/<string>`). That implies in-game Import/Share of loadouts (C_Traits) exists in Forever. | Inference; verify in client |
| Quest-completion check | Wowhead Forever quest pages suggest `/run print(C_QuestLog.IsQuestFlaggedCompleted(92812))`. | REPORTED |
| Policy | Blizzard UI Add-On Development Policy: addons must be free; no premium features; no in-game ads; Blizzard can disable features. China notice (Sep 24, 2026) against paid add-ons and paid WeakAuras and configurations. | REPORTED (policy links below) |
| WeakAuras | Not ported (same as Midnight). | REPORTED |

**Implications for the web guide**
1. A pure web guide needs no addon. Offer optional bridges:
   - `/way` copy buttons for TomTom.
   - An "export this section" block for `/ttpaste`.
   - A route export in Guidelime guide format (syntax to verify), so users of the free Guidelime addon can load our route.
2. Later, a tiny companion addon could read SavedVariables using the File System Access API (WoW Forever Tracker's pattern) or a copy-paste export string. Questie's "SavedVariables cold-start" bug is a caution.
3. Any addon we ship must be free with no ads (Blizzard policy rules 1 and 4).

Sources:
- https://wowsod.pro/articles/wow-forever-addons-weakauras
- https://www.warcrafttavern.com/forever/news/ion-holly-interview-blizzcon-2026/
- https://warcraft.wiki.gg/wiki/Patch_1.60.1/API_changes/notes
- https://warcraft.wiki.gg/wiki/Patch_1.60.1/API_changes
- https://www.gfinityesports.com/article/world-of-warcraft-forever-ui-addons-setup-guide (12.1.5-era architecture; Sep 24)
- https://mein-mmo.de/en/wow-forever-the-10-most-important-addons-and-how-to-install-them,1593699/ (Oct 26; install path `/_forever_/Interface/AddOns`)
- https://wowforeverclassic.com/guides/addons
- https://www.wow--forever.wiki/en/tools/wow-forever-addons
- https://us.forums.blizzard.com/en/wow/t/ui-add-on-development-policy/24534
- https://eu.forums.blizzard.com/en/wow/t/wow-user-interface-add-on-development-policy/1642
- https://wow.blizzard.cn/news/20260924/43790_1314928.html
- https://us.forums.blizzard.com/en/wow/t/is-there-a-built-in-like-tomtoms-way/1548001
- https://www.curseforge.com/wow/addons/waypoint-tracker
- https://www.icy-veins.com/wow/news/blizzard-relaxing-more-addon-limitations-in-midnight/

---

## 6. Interactive patterns from other games

| Pattern | Example | Notes |
|---|---|---|
| **Route checklist with local progress, editable route** | Path of Exile **exile-leveling** (https://heartofphos.github.io/exile-leveling/ , repo https://github.com/HeartofPhos/exile-leveling, MIT). Base route follows speedrun strategy; Edit Route tab for customization; data seeded from game files. | README confirms the route and editing. Other UI details (gem tracking, PoB import) are from memory and unverified here. |
| **Log-driven auto-advance overlay** | poe-leveling-overlay (https://poe-leveling-overlay.pages.dev/, MIT) advances the guide on zone change and imports Path of Building. | WoW can't read logs this way. The equivalent is an addon or SavedVariables. |
| **Checklist with HTML5 storage, filters, NG+ toggles** | Dark Souls 3 Cheat Sheet (https://github.com/ZKjellberg/dark-souls-3-cheat-sheet, MIT, 368 stars) | Proven, simple: `data-id` per item, filter classes, localStorage. |
| **Game-to-wiki sync** | OSRS **WikiSync** RuneLite plugin (https://oldschool.runescape.wiki/w/RuneScape:WikiSync). Enter username on a quest page and met requirements get checked (red X otherwise). Data is public. OSRS Optimal Quest Guide uses an interactive table (`lighttable`, `qc-input` username lookup) (https://oldschool.runescape.wiki/w/Optimal_quest_guide). | The gold standard. The WoW analogue is an addon plus SavedVariables import (WoW Forever Tracker, Forever Companion). |
| **Interactive maps with progress, account sync, mobile apps** | MapGenie (free account to check off found items; Pro and MapGenie+ paid) (https://apps.apple.com/us/app/-/id1618843254, https://www.gamestar.de/link/articles/3368608). Mobalytics Zephras Isle interactive map. | High effort; map art is Blizzard IP. |
| **Planner with shareable URL builds** | Wowhead, Icy Veins, Mobalytics, Seemeta talent calculators (build in URL); Maxroll planners (feature details not verified this session; https://maxroll.gg/d4/planner) | Use URL-state for shareable progress or config. |
| **Recovery code instead of an account** | Forever Companion: 6-character code | Low-friction cross-device without login. |
| **"Copy for game" export string** | ScryWoW; Blizzard talent loadout strings; TomTom `/ttpaste` | One-click copy buttons. |
| **XP/minute ranking of quests** | ScryWoW | Lets beginners skip low-value quests. |
| **Community verification threshold** | Forever Companion: "Verified in game" after at least 3 matching reports | A trust signal during data churn. |
| **AI Q&A** | foreverguide.app (paywalled after 5 a day) | Optional; costly. |

---

## 7. Data sources and licensing

| Source | What | Access | Licence and terms |
|---|---|---|---|
| **Wowhead Forever** | Items, quests, NPCs, spells, zones (`/forever/` prefix). Tooltips. | **[VERIFIED]** The script `https://wow.zamimg.com/js/tooltips.js` (identical to `/widgets/power.js`, md5 ddf227ce…, last modified 2026-10-28) contains `dataEnv.CLASSICPLUS:16` mapped to `"forever"`, with aliases `classic-plus` and `classicplus`. Config `const whTooltips = {colorLinks:true, iconizeLinks:true, renameLinks:true, iconSize:…}`; `$WowheadPower.refreshLinks()` for SPA re-scan. JSON endpoint `https://nether.wowhead.com/forever/tooltip/{item|quest|npc|spell|zone}/{id}` returns 200 with CORS `*` (`s-maxage=43200`). The **talent-calc embed** regex in the script only matches `classic|tbc|wotlk`, so a Forever talent-calc iframe auto-embed is probably not supported; link out instead. | Use the official script. Using the raw JSON endpoint is undocumented; check Wowhead ToS. Wowhead pages block non-browser fetching (CloudFront 403). |
| **Warcraft DB** (forever.warcraftdb.com) | Items, spells, quests, NPCs, zones; talent ranks on Forever | **[VERIFIED]** `https://forever.warcraftdb.com/api/v1/tooltip/item/9425` returns 200 JSON, CORS `*`. Embed script `/static/js/tooltip-embed.js`, config `wdbTooltipConfig`, Shadow-DOM isolated tooltips. | "All Rights Reserved", no explicit terms; Lexicon Gaming LLC |
| **wago.tools** | Forever client DB2 tables as CSV (product `wowf`) | **[VERIFIED]** `https://wago.tools/db2/{Table}/csv?build=1.60.1.70685` works: ItemSparse (5.3 MB), TaxiNodes, ChrRaces, QuestLineXQuest. **Client tables do not include NPC spawn coordinates or most quest giver locations**; those need Questie or Wowhead. | Data is Blizzard IP; wago.tools terms not checked |
| **QuestieDB** (https://github.com/Questie/QuestieDB) | Forever quest, NPC and object data with spawns (base data plus trace data) | Lua format with versioned contracts | Questie is **GPLv3**. Deriving our data from it likely requires GPL compliance for distributed data and code (ScryWoW and ForeverQuest credit it as GPLv3). Get legal review. |
| **warcraft.wiki.gg** | API docs, lore, patch API diffs | | Text under **CC BY-SA 4.0** (attribution plus share-alike). Warcraft assets remain Blizzard IP (https://warcraft.wiki.gg/wiki/Warcraft_Wiki:Copyrights). |
| Others mentioned by competitors | "ForeverChanges" (unknown site, cited by Forever Companion and Forever Guide), WoWSims Forever (stat weights), Zockify, cmangos classic-db (Classic-era, GPL) | [UNKNOWN] for ForeverChanges | |
| **Blizzard** | Fan-site use of screenshots and assets is allowed "within certain limits": noncommercial, keep notices, no defamatory or porn sites, revocable. **"Blizzard Entertainment® does not condone the use of our product names in other domain names."** Avoid "warcraft" or "wow" in our domain. Video policy is noncommercial. | | https://www.blizzard.com/en-us/legal/28d5ebbf-c245-4408-8ba9-043dd5f056bf/legal-faq , https://www.blizzard.com/en-us/legal/dd76b654-f2c4-4aaa-ba49-ca3122de2376/blizzard-video-policy |

---

## 8. The gap our web guide can fill

1. **A race- and class-specific step-by-step route on the web, free and without an account.** It doesn't exist today:
   - The big sites give spec and talent pages plus level-to-zone tables.
   - The route addons are paid (RestedXP after level 20, Zygor) or volunteer and partial (TUGs).
   - The companion planners are generic timelines.
   - Starting with Gnome Warlock (Dun Morogh, Loch Modan, …) lets us be deeper than anyone on one path.
2. **An "inventory economy" layer.** No competitor does this well:
   - For each level band: what to vendor, keep (for a quest, profession or class need), bank or AH, and what to buy, where and from whom (NPC plus coordinates plus price).
   - Warlock-specific: wands, Soul Shards, demon and trainer costs, bags.
   - Mobalytics has one generic article. Forever Quest Items does "keep" hints in-game only.
3. **Profession advice tied to leveling and Legacy points.** Crafting skills at 150/225/300 earn Legacy points; gathering does not. Add a shopping list that recalculates from current skill (kami-labs does this for Tailoring only).
4. **Beginner explanations and flexibility.** Explain why each step exists. Allow skipping and resuming mid-route, mark low-value quests, avoid the "puppet" feel.
5. **Trust during data churn.** Mark each step beta-derived, verified at launch or community-confirmed, with a last-verified date and a fast "report a wrong step" loop. This matters most for levels 30–60, which nobody has tested.

---

## 9. Recommended interactive features (ranked by value vs effort)

| Rank | Feature | Value | Effort | Notes |
|---|---|---|---|---|
| 1 | **Step checklist with saved progress**: localStorage; resume at the current step; collapsible zone and level sections; hide-completed; skip or optional steps | High | Low | Core pattern (DS3 cheat sheet, exile-leveling, Forever Companion). Wrap storage in try/catch. |
| 2 | **Wowhead Forever tooltips** on every item, quest, NPC and spell link (`tooltips.js`, `whTooltips` config, `refreshLinks()` after render) | High | Very low | Verified working. Use the `/forever/` URL prefix. Warcraft DB embed as fallback. |
| 3 | **Copy `/way` buttons** per step, plus "copy all waypoints for this section" (multi-line for TomTom `/ttpaste`) | High | Low | Show "requires TomTom (Forever build)". Show the zone name in `/way #zone x y` form. |
| 4 | **Bag advisor ("Sell / Keep / Bank / Buy")** per level band, with item tooltips, vendor NPC and coordinates, price, and "keep until quest X" flags | Very high (unique) | Medium | Core MVP differentiator. Needs verified Forever item data (BoP and BoE changes). |
| 5 | **Shopping and training planner**: per-level spell training costs, pet and demon costs, wand upgrades, bags; a "gold needed by level N" budget; running total | High | Medium | Warlock-specific. Turns "what to buy" into a list you can act on. |
| 6 | **Profession planner**: recommended pairs for Warlock with reasons; Legacy-point milestones (150/225/300 crafting); shopping list recalculated from current skill; trainer and vendor locations | High | Medium | Competitors: kami-labs (Tailoring), WoW Forever Tracker (costs). |
| 7 | **Confidence badges, last-verified date, "report a problem" per step** | High (launch week) | Low–Medium | Routes for 30–60 are untested everywhere, so trust is decisive. |
| 8 | **Focus or second-screen mode**: large "next step" card, keyboard shortcuts (Space = done, ←/→), mobile layout | Medium–High | Low | The web guide's edge over in-game addons on a phone or second monitor. |
| 9 | **Shareable progress and settings**: URL state or a short recovery or export code (no account) | Medium | Low | The Forever Companion pattern. |
| 10 | **Talent milestone callouts**: "at level N take X", linking to the Wowhead Forever talent calc. Add a copyable Blizzard loadout string if that's confirmed in the client. | Medium | Low | Don't build a calculator; the market is saturated. |
| 11 | **Session timer and XP/hour**: manual "/played" inputs or level timestamps; per-segment split times | Low–Medium | Low | Nice for speed-minded users. The in-game addon space already has XP tracking. |
| 12 | **Export to Guidelime format / later a companion addon** (SavedVariables via File System Access API, or a paste string) for in-game following and auto-ticking | High | High | Post-MVP. Must be free with no ads (Blizzard policy). |
| — | Interactive map | Medium | High | Defer. Link to the Wowhead Forever World Map and show coordinates instead. Map art is Blizzard IP. |

---

## 10. Unknowns and to-verify list

- Whether Forever has a native `/way` command or quest-objective map highlighting. [UNKNOWN]; assume TomTom is needed.
- In-game talent loadout Import/Share in Forever. [Inference from Wowhead URL format]
- Wowhead ToS for direct JSON tooltip API use. Wowhead tooltips docs page (https://www.wowhead.com/tooltips) did not render for the fetcher.
- Whether "ForeverChanges" is a public dataset and what its licence is. [UNKNOWN]
- Gnome vs Human as the recommended Alliance Warlock race: Mobalytics snippets conflict.
- Final Forever data at launch (Nov 4). Beta data and Classic-estimated XP can change.
- Reddit sentiment (blocked).
- Joana's and AAP Forever plans: none found.
- Whether Wowhead or Icy Veins publish a step-by-step Forever route around launch. None found as of Oct 29.
