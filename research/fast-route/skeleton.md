# Final skeleton (judged): Gnome Warlock 1–60 fast route, WoW: Forever

Route judge, written 2026-11-05 between 20:05 and 20:50 UTC, one day after launch. This file merges **skeleton-A** (lens A: cut travel and zone changes) and **skeleton-B** (lens B: measured XP per hour, plus a dungeon test). Leg authors build `WORK/leg-NN-<slug>.json` from §4. Every leg's end state is the next leg's start state.

**Evidence order used at every fork:**
1. launch week (Nov 2–5)
2. measured beta data
3. guides
4. Classic baseline
5. our own theory

**Tags:**
- Confidence: `official` / `beta-tested` / `community` / `theory`, as in BRIEF.
- Era: **L** = launch, **B** = beta, **C** = Classic carry-over.

Above level 39 nothing is launch-tested. On Nov 5 at 20:06 UTC the leader was 39.2 (https://race.aotc.gg/).

**Inputs:**
- skeleton-A.md and skeleton-B.md.
- All six `sweep-*.md` files.
- `research/*.md`.
- The RestedXP (RXP) Forever extracts in WORK.
- `raw/kopp-30-60-keysteps.txt`.
- Plus the judge's own checks in §1.

---

## 0. Verdict

**Overall shape:** lens B's dungeon-aware backbone, with lens A's travel cuts wherever A's travel actually works in game.

**1–30, all in the Eastern Kingdoms, no boats:**
- Coldridge, then Dun Morogh (bind Kharanos).
- Gol'Bolar and the Hall of Thanes prep, then west Loch Modan, including the four Forever quests that A found.
- Hall of Thanes at about 14.5, entered straight from Loch Modan (A).
- Stormwind: Voidwalker at about 15.6 (A), then bind Stormwind.
- Westfall, the Defias chain and **Deadmines at about 20** (B).
- Redridge, then Duskwood at 23.5–26 (B).
- Optional Stockade.
- Wetlands from 27, with the Excavation Site at about 30. Leave at about 31.6, after the level-30–32 Wetlands chains (A).

**30–40, the northern arc, then Stranglethorn:**
- Boat Menethil → Southshore. City stop: Ironforge and Stormwind, then hearth back.
- Hillsbrad and Alterac, the City of Dalaran at about 33.5, then Arathi.
- Stranglethorn Vale 35.3–40.
- Felsteed on the Booty Bay → Ratchet boat, then hearth back to Booty Bay.

**40–45, the south-east of the Eastern Kingdoms:**
- Badlands at 40 (Kopp's slot), then into Riverglades at about 41.3.
- Krol'dok if its quests appear.
- Uldaman at about 44.5.

**45–55:**
- The Hinterlands.
- The Powderfuse → Steamwheedle boat to Tanaris (Zul'Farrak if its quests are in the log), then Un'Goro.
- One trip back through the Eastern Kingdoms to train, then Felwood and Winterspring.

**55–60:** Burning Steppes, then the Plaguelands.

**Skipped:**
- The Succubus/Incubus and Felhunter quests.
- The Kalimdor sweep at 24–27 (kept as a variant in §2, fork F7).
- Darkshore, Blackfathom Deeps, Ruins of Lordaeron, Wailing Caverns, Shadowfang Keep, Scarlet Monastery, Razorfen Kraul, Razorfen Downs, Maraudon, the Drowned City, Shen'dralas, Feralas and the Cozy Sleeping Bag chain.

**Estimate: about 102 h /played to 60, band 85–118 h. About 21 h of it to 30.** Details in §5.
- Launch Gnome Warlock benchmark: 30 at 18h10 /played, possibly in a duo (https://race.aotc.gg/).
- Guide projections: 100–120 h (https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/).

A's total (89 h) and B's total (101 h) are not comparable. They use different XP/h assumptions. With the same rates, this route is about 1.5 h faster than B. It also drops A's travel steps that cannot be flown, listed in §1.2. (`theory`)

| Leg | Levels | Zones (hub, bind) | Dungeons | Main travel | Est. h (cum.) |
|---|---|---|---|---|---|
| 01 | 1 → 10.3 | Coldridge, Kharanos (bind) | – | deathskips | 2.0 (2.0) |
| 02 | 10.3 → 18.3 | Gol'Bolar, Loch Modan, Ironforge, Stormwind (bind), Westfall | **Hall of Thanes** | fly Thelsamar→IF; tram; walk Brackwell→Lakeshire FP | 5.8 (7.8) |
| 03 | 18.3 → 23.5 | Lakeshire, Sentinel Hill, Stormwind, Redridge | **Deadmines** | 4 short flights; hearth SW | 5.5 (13.3) |
| 04 | 23.5 → 30.0 | Darkshire, Stormwind, Menethil (bind) | Stockade (optional) | fly SW→IF→Thelsamar, walk through Dun Algaz | 7.7 (21.0) |
| 05 | 30.0 → 35.3 | Wetlands, Southshore (bind), IF/SW, Alterac, Refuge Pointe | **Excavation Site**, **City of Dalaran** | boat Menethil→Southshore; fly to IF; hearth | 8.8 (29.8) |
| 06 | 35.3 → 40.1 | IF/SW, Stranglethorn (bind Booty Bay), Ratchet, Thelsamar (bind) | – | boat BB→Ratchet, hearth back | 10.2 (40.0) |
| 07 | 40.1 → 45.3 | Badlands, Riverglades (bind Farholde), Ironforge | Krol'dok (if quests), **Uldaman** | walk Badlands→Riverglades; fly Farholde→Thelsamar | 12.4 (52.4) |
| 08 | 45.3 → 50.0 | Hinterlands (bind Aerie Peak), Tanaris (bind Gadgetzan) | Zul'Farrak (if quests) | **boat Powderfuse→Steamwheedle** | 14.4 (66.8) |
| 09 | 50.0 → 55.0 | Un'Goro, (EK training), Felwood, Winterspring (bind Everlook) | – | boats: Steamwheedle→Powderfuse, Menethil/SW→Auberdine, Auberdine→SW | 16.8 (83.6) |
| 10 | 55.0 → 60 | Burning Steppes, W/E Plaguelands (bind Chillwind) | BRD (optional) | fly SW→Lakeshire; MV→SW→IF→Southshore | 18.2 (101.8) |

---

## 1. New evidence the judge collected (Nov 5, 20:00–20:50 UTC)

### 1.1 Leaderboard re-read at 20:06 UTC (`community`, L)
I fetched the rendered page of https://race.aotc.gg/ once, with a plain request. I parsed it with the launch sweep's parser (`scratchpad/scripts/aotc_trails.py`). The merged trails are saved in `WORK/raw/aotc-trails-2006.txt`.

- **The only Gnome Warlock on the board ("Jang Wonyoung"):**
  - Wetlands, 27.08 → 30.13, at 14h49 → 18h10 /played.
  - Ironforge at 30.57–30.68, then Stormwind at 31.03 (19h11).
  - **Duskwood at 31.69 (19h39), then 32.16 (20h15).**
  - The Gnome Mage "Figment Tv" has the identical trail, so this is probably a duo.
- **Leader Ksuper (Night Elf Hunter):**
  - Stranglethorn 38.29 at 19h47.
  - **Swamp of Sorrows 38.85 (20h14), then 39.19 (20h49).**
  - That matches Judgement's Classic "38-39 Swamp of Sorrows" leg (https://www.warcrafttavern.com/wow-classic/guides/alliance-leveling-guide/).
  - **Still no Riverglades.** No Alliance Companion sample showed an unknown map id.
- **Alliance zone counts by level, all samples up to 20:05:**

  | Level | Zones (count of samples) |
  |---|---|
  | 30 | Wetlands 13, Duskwood 4, Ironforge 3, Elwynn 3, Stormwind 3 |
  | 31 | **Duskwood 16** of 27 |
  | 32 | **Hillsbrad 10**, Stormwind 6, Duskwood 5, Alterac 2, Stranglethorn 2 |
  | 33 | **Alterac 5**, Ironforge 4, Wetlands 2 |
  | 34 | **Arathi 3**, Thousand Needles 2, Wetlands 2, Alterac 2 |
  | 35–38 | Stranglethorn, Desolace, Thousand Needles (leader only) |
  | 38–39 | Swamp of Sorrows |

- **Top warlocks at 20:06:** KANTING SBV (Human) 34; Jang Wonyoung (Gnome) 32; MORGANA DREA (Human) 32.

### 1.2 Flights that cannot be taken (you cannot fly to a flight path you have not discovered)
Both skeletons contain steps that fly to undiscovered nodes. Node links come from the launch-client datamine (https://foreverdb.net/travel, `community` L).

| Skeleton step | Problem | Fix used here |
|---|---|---|
| A S12, B B11: "fly Stormwind → Ironforge → **Menethil**" at 27 | Menethil is not known yet | Fly SW → IF → **Thelsamar**, then walk west through Dun Algaz into the Wetlands (passing Whelgar's camp) to Menethil. About 10 min (`theory`). |
| A S14: "fly Ironforge → **Southshore**" at 32 | Southshore is not known | B's route: **boat Menethil → Southshore**, learn the flight path, bind. Ironforge and Stormwind are then a flight and a hearth. The loop order is `community` (https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-travel-guide/), so check the boat's destination. Dock-portal fallback: https://us.forums.blizzard.com/en/wow/t/2401777/15 |
| A S19: "boat to Theramore → fly to **Gadgetzan**" at 44 | Gadgetzan is not known | B's route: **Powderfuse Port → Steamwheedle Port** boat (`official`, https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap), then ride to Gadgetzan. |
| B B10: "fly Lakeshire → **Darkshire**" at 23.5 | Darkshire is not known | Walk west from Redridge into Duskwood, about 4 min (A). |
| B B23: "fly IF → **Aerie Peak**" | Aerie Peak is not known | B's own fallback: fly to Southshore and ride north-east to Aerie Peak. |
| B B19: Booty Bay → Ratchet → **boat back** | Costs one boat leg | Bind Booty Bay, then **hearth** from Ratchet (10 s cast, 1 h cooldown: https://www.wowhead.com/forever/item=6948). |

### 1.3 Tooltip checks with `tools/wh.mjs` (`official` DB, Nov 5)

- **Incubus and Succubus quests:**
  - Devourer of Souls (1716) says "Speak with Takar the Seer in the Barrens".
  - What Is Love? (65602) and Heartswood (1738) both end at **Gakin in Stormwind**, with the item taken from Ashenvale.
  - Either demon therefore costs Stormwind → Barrens → Ashenvale → Stormwind.
  - Sources: https://www.wowhead.com/forever/quest=1716 ; https://www.wowhead.com/forever/quest=65602 ; https://www.wowhead.com/forever/quest=1738
- **Songblade Search (95772, level 31):** "look for Daewyn in Whelgar's Excavation Site". Its follow-up, Fallen in the Fen (95795), is "Return to Dorin Songblade" in Lakeshire. Our route never returns to Lakeshire at 30–35, so **skip it**. https://www.wowhead.com/forever/quest=95772 ; https://www.wowhead.com/forever/quest=95795
- **Power Overwhelming (92489) and A Green Sample (92456):** quest-giver and turn-in are in **Stormwind** (Andromath, Shylamiir). https://www.wowhead.com/forever/quest=92489 ; https://www.wowhead.com/forever/quest=92456
- **The Stockade's outside turn-ins:**
  - What Comes Around… (386): Guard Berton, **Lakeshire**.
  - Crime and Punishment (377): Councilman Millstipe, **Darkshire**.
  - https://www.wowhead.com/forever/quest=386 ; https://www.wowhead.com/forever/quest=377
- **Loch Modan Forever quests, giver locations:**

  | Quest | Giver | Where | Route note |
  |---|---|---|---|
  | Banner of the Fallen (86585) | Captain Rugelfuss, **23.2, 73.8** (Algaz Station) | on the way in from Dun Morogh | on route |
  | Excavation Tools (86613) | Magmar Fellhew, **64.8, 66.4** (Ironband's Excavation) | south-east | a detour, so optional |
  | Snowbound (86667) | Norric Lochthane | north-west coast | |

  A's "west Loch Modan" label is therefore only partly right. https://www.wowhead.com/forever/npc=1092 ; https://www.wowhead.com/forever/npc=1345 ; https://www.wowhead.com/forever/quest=86667
- **Morgan's Vigil flight master:** Borgus Stoutarm, 84.4, 68.2. https://www.wowhead.com/forever/npc=2299

### 1.4 Quest-id scan of the two bands A left only sampled (80000–84000 and 88100–90500)
- Method: I queried the public tooltip API politely, at about 5 requests per second.
- Raw output: `WORK/raw/wh-forever-quests-80000-84000-88100-90500-judge.txt`.
- **Result: see §1.4a, filled in when the scan finished.**
- Early hits, with place names read from their Wowhead quest pages (WebFetch):
  - **88756 Bring Back a Bang** (level 31, +100 Ironforge rep). Text: "The Dark Irons have a few camps east of here on **Direforge Hill**", which is in the Wetlands. Reward: Ez-Thro Dynamite. So it is a **Wetlands 30–32 quest; add it to leg 05, step 2** (giver not shown; `official` DB text). https://www.wowhead.com/forever/quest=88756
  - **87318 Hearts of the Lost → 88757 Accessories of the Lost → 88758 Sentiments of the Lost** (level 33; Corma sends you after her partner Essene). The text places it at **Thandol Span**, the broken bridge between the Wetlands and Arathi. So it is a **leg-05 candidate**: about 3 min north of Refuge Pointe at 34–35, or at the north edge of the Wetlands at ~31. The giver's position is not shown, so the leg author checks it in game (`official` DB text). https://www.wowhead.com/forever/quest=87318 ; https://www.wowhead.com/forever/quest=88757

### 1.4a Scan result (finished 20:44 UTC): 6,401 ids, 31 hits, 0 errors. No Riverglades quest.

| Ids | Hits | Route use |
|---|---|---|
| 88756 | Bring Back a Bang (31, Direforge Hill, Wetlands) | **leg 05** |
| 88757, 88758 | Accessories / Sentiments of the Lost (33, Thandol Span; chain from 87318) | **leg 05**, if the giver is on the path |
| 80001 | Rekindle (light an extinguished fire pit) | camping flavour; none |
| 81570 | Jarl Needs a Blade (Dustwallow) | none |
| 81730–81747 | **"Duskwood Mission I–XVIII", level-27 *dailies* for Field Captain Palandar in a "Duskwood Nightmare Incursion"** | **Do not route.** These look like Season of Discovery data that Wowhead's Forever DB carries along. No sweep, guide, forum or leaderboard source mentions Nightmare Incursions in Forever (`theory`). If a launch player finds Field Captain Palandar in Duskwood, they would be a strong 27–30 option, so re-check. |
| 81947–81956, 82208 | Library-book turn-ins ("Have you brought something to add to our collection?") and Greater Friend of the Library | Only if you collect books |

Consequences:
- **The DB still has no Riverglades quests** in any band scanned:
  - 80000–88100 and 88100–90500 fully (A and the judge);
  - 90500–100500 fully (wowhead sweep);
  - everything else sampled.

  So leg 07's Riverglades block stays `theory`, with the bail-out trigger.
- **A DB hit is not proof that a quest is in Forever** (see the Duskwood Mission ids). RXP's launch route uses 86667 Snowbound and 86614 Silver of the Waves, so those two are confirmed in play (`community` L). **86585 Banner of the Fallen and 86613 Excavation Tools have no play evidence yet:** take them only if the giver offers them in game.
- Source: https://nether.wowhead.com/forever/tooltip/quest/88756 (the API behind `tools/wh.mjs`); raw list in `WORK/raw/wh-forever-quests-80000-84000-88100-90500-judge.txt`.

---

## 2. Decisions at forks

### 2.1 Forks where the two lenses differed

| # | Fork (levels) | Lens A | Lens B | **Decision** | Evidence (best tier first) | Conf. |
|---|---|---|---|---|---|---|
| F1 | Voidwalker timing, and the Stormwind swing at 11 | Defer the Voidwalker to the first Stormwind visit (~15.5) | RXP's Stormwind/Elwynn swing at 11–12 (Voidwalker + 3 flight paths) | **A.** Voidwalker at ~15.6 on arrival in Stormwind after Hall of Thanes. Pick up the Lakeshire flight path on the walk to Surena (Elwynn 70.8, 80.2). | Nov 2 notes cut pet HP from 7.5 to 2 per Stamina (`official` L, https://us.forums.blizzard.com/en/wow/t/2360696/9). Launch Voidwalker has 250–395 HP, less than the warlock; players stay on the Imp (`beta-tested` L, https://us.forums.blizzard.com/en/wow/t/2401991 ; https://us.forums.blizzard.com/en/wow/t/2401780). RXP's swing (`community` L, https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever) collects flight paths for its Darkshore route; this route gets the same paths at 15.6 with no extra round trip. **If pets are hotfixed, go back to the 11–12 swing.** | `theory` on `official`+`beta-tested` L |
| F2 | Hall of Thanes level | ~13.8, straight from Loch Modan | ~16.4 (quest level +2 to +4), by tram from Westfall | **A, but enter at ≥14.4.** Do a little more Loch Modan first. | Database quest levels are 15–16 (`official` DB, sweep-launch §6.2). A beta group entered at 14.5 and finished at 16 after turn-ins, before the nerf (`community` B, https://us.forums.blizzard.com/en/wow/t/2356140). A launch full clear gave "3 bars" of mob XP, so the value is the 5 quests, including The Treaty of Understanding (`community` L, https://us.forums.blizzard.com/en/wow/t/2402437 ; https://www.wowhead.com/forever/quest=98423). RXP runs it at 17–18 only because its route detours through Darkshore (`community` L). B's timing adds two tram legs for the same quest XP. | `theory` / `community` |
| F3 | Deadmines level | ~23, after Duskwood | ~19.7 | **B.** | RXP's dungeon variant runs Deadmines at 19–20 (`community` L, https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever/dungeon). Deadmines is the busiest dungeon at launch, so groups form fast (`community` L, https://www.60.tools/population). Its quests are 17–22, all at 100% XP at ~20 (Classic rule, https://warcraft.wiki.gg/wiki/Experience_point). A's ordering puts Redridge at 18–21 and Duskwood at 21–23, where Redridge's level-21–25 quests and Duskwood's level-25–28 quests are still orange or red (`official` DB, sweep-wowhead B5/B8). Cost of B: about 4 extra 1–2 min flights (https://foreverdb.net/travel). | `theory` / `community` L |
| F4 | Redridge and Duskwood windows | Redridge 18.3–20.8, then Duskwood 20.8–22.8 | Redridge first pass ~18–19, Redridge 20.6–23.5, Duskwood 23.5–26.2 | **B.** | Database levels as in F3. Launch Alliance racers at 26–27 were in Redridge/Duskwood before the Wetlands (`community` L, https://race.aotc.gg/ ; `raw/aotc-trails-2006.txt`). RXP's Classic-family order is 24–27 Redridge/Duskwood (`community`, https://github.com/RestedXP/RXPGuides). | `theory` |
| F5 | 24–27: Kalimdor sweep vs Eastern Kingdoms only | One sweep: Darkshore south, Ashenvale, Takar (Barrens), Blackfathom Deeps, Darnassus, hearth to SW | Stay in the Eastern Kingdoms (Duskwood, optional Stockade, Wetlands) | **B.** A's sweep stays as a **variant** for players who want the Gravestone Scepter or the Sayaad, or if pets are hotfixed. | Launch Alliance at 26–28: Wetlands/Duskwood/Redridge/Stormwind in almost every sample, Ashenvale in 1 (`community` L, trails). The demon quest spans Stormwind → Barrens → Ashenvale → Stormwind (`official` DB, §1.3). Boats broke at launch (`official` L, https://us.forums.blizzard.com/en/wow/t/2401777/15) and had ~10-min waits in beta (`beta-tested` B, https://us.forums.blizzard.com/en/wow/t/2365523). The 1.48× Blackfathom hybrid was measured for Horde next to Zoram'gar (`beta-tested` B, https://us.forums.blizzard.com/en/wow/t/2395335). A budgets 3.4 h for 102k XP but leaves only ~1.4 h for actual questing, so it is likely optimistic (`theory`). Main loss: the Gravestone Scepter (`community` B, https://us.forums.blizzard.com/en/wow/t/2365726). | `theory` / `community` L |
| F6 | Succubus/Incubus (20) | Do it, inside the sweep | Skip | **Skip.** | Pet HP cut (`official` L, above). Launch warlocks run Imp + drain-tank (`community` L, https://us.forums.blizzard.com/en/wow/t/2401796/3). Pre-nerf beta advice favoured the Sayaad from 30 (`community` B, `research/gamedata.md` §1.7), so re-evaluate if pets are hotfixed. | `theory` |
| F7 | Stockade | Optional at 27, after Kalimdor | Optional at 26.2 | **B: optional.** Run it if a group forms within ~10 min. If you run it, add the Darkshire–Lakeshire turn-in hop. | ~76% of a level of quest XP at 26 (`community` B, https://us.forums.blizzard.com/en/wow/t/2385588/288). The Oct 15 table says about half that (https://us.forums.blizzard.com/en/wow/t/2379420/583). A mob-only clear gave 3,950 XP in 32 min (`community` B, https://eu.forums.blizzard.com/en/wow/t/634456). The turn-ins are in Lakeshire and Darkshire (§1.3). Roughly par with questing. | `community` |
| F8 | When to leave the Wetlands | ~32 | ~30.4 | **Between the two: ~31.6.** Run the Excavation Site at ~30, finish the level-30–32 Wetlands chains, then leave. | The Wetlands has about 30 new quests at 22–34; Dragonmaw, Carnage and Goaz are 30–32 (`official` DB, https://www.wowhead.com/forever/quest=98291 ; https://www.wowhead.com/forever/quest=98310). Gnome Warlock rate there: ~38k XP/h (`community` L). Two Alliance racers went *back* to the Wetlands at 33.8, which is the return trip this choice avoids (`community` L, trails). | `theory` / `community` L |
| F9 | Wetlands → Southshore | Fly Ironforge → Southshore (cannot work, §1.2) | Boat Menethil → Southshore | **B.** | §1.2. The new boat route exists (`official`, found-photos recap). The loop order is `community`. | `official` / `community` |
| F10 | City stop at ~31.6 | Ironforge only; skip the Stormwind Dalaran pickups | Southshore → IF → SW → hearth Southshore | **B.** | The launch Gnome Warlock did exactly this: IF at 30.6, then SW at 31.0, right after the Wetlands (`community` L, trails). Power Overwhelming and A Green Sample are taken and turned in in Stormwind (`official` DB, §1.3), and Stormwind is on the way to Stranglethorn at 35.3. Each City of Dalaran quest is worth ~3,950 XP (`community`, https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/). | `community` L |
| F11 | 35–40 | Riverglades from 35.5 to 44 | Stranglethorn 35.3–40, then Felsteed | **B, with an early-switch rule:** if Stranglethorn runs dry before 38.5, go to Riverglades at 38 and take the Felsteed as an out-and-back at 40. | The leader's 35–39 zones were Stranglethorn, Desolace, Thousand Needles, Stranglethorn and Swamp of Sorrows, with no Riverglades (`community` L, trails 20:06). RXP uses Classic Era routes for 35–60 (`community` L, https://kami-labs.fr/wow-forever/restedxp-en-francais-wow-forever/). Riverglades has **no quest data anywhere** (`official` DB scan; https://github.com/Questie/QuestieDB/blob/master/docs/forever-data.md). A's plan needs ~741k XP (35.5→44) from one contested zone whose 150–200 quests are shared by both factions (`official`, https://worldofwarcraft.blizzard.com/en-us/news/24315820). Kopp's Stranglethorn 35–40 needs grind gates (`C`, https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/Alliance/003_Alliance_30to40.lua), hence the early-switch rule. Booty Bay has new quests at 33–38 (`official` DB, https://www.wowhead.com/forever/quest=98463). | `theory` / `community` L |
| F12 | Riverglades entry and order around it | Enter at 35.5 by the Lakeshire fork | Enter at 40.1 by the Lakeshire fork; Badlands + Uldaman at 43.8–46.3 | **New order (from the guides sweep):** **Badlands at 40.1–41.3** (Kopp's slot, bind Thelsamar), then walk into Riverglades at ~41.3, then Uldaman at ~44.5. | The Badlands quests are 38–42 and pay full XP at 40 (`C`, https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/Alliance/003_Alliance_40to50.lua ; still present unchanged in Forever, `official` DB, sweep-guides §B.5). B's own note says A Sign of Hope (35) and Agmond's Fate (38) decay by 44.5 (Classic rule, https://warcraft.wiki.gg/wiki/Experience_point). The guides sweep names the Badlands as the natural Riverglades insertion, with Farholde ↔ Thelsamar one flight (`community` L datamine, https://foreverdb.net/travel). Foot route from the Badlands north of Twilight's Shroud: `community`, https://warcraft.wiki.gg/wiki/Riverglades. Fallback entry is the Redridge road fork (`community` B, https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-riverglades-guide/). Riverglades' 36–44 quests still pay 100% at 41.3. | `theory` |
| F13 | Mount at 40 | Riding at Steelgrill's Depot (100 g); Felsteed only as a fallback | Felsteed at Ratchet on the Booty Bay boat | **B**, plus the hearth trick (§1.2). **A's Binjy riding is the fallback** if the Felsteed needs Apprentice Riding or you are already in Riverglades. | The Felsteed spell lists no riding requirement (`official` DB, https://www.wowhead.com/forever/spell=5784 ; https://www.wowhead.com/forever/quest=4490). Riding costs 100 g including the mount (`community` B, https://us.forums.blizzard.com/en/wow/t/2370227). Whether the Felsteed waives it is unconfirmed (https://us.forums.blizzard.com/en/wow/t/2400779). Binjy: https://www.wowhead.com/forever/npc=7954 | `community` / `theory` |
| F14 | 44–48 | Kalimdor: Tanaris, then Feralas | Eastern Kingdoms: Badlands/Uldaman, then Hinterlands | **B** (Uldaman ~44.5, Hinterlands 45.3–47.5). | Uldaman is worth ~60k quest XP (63% of a level at 45; preliminary, Classic-based, `community` B, https://us.forums.blizzard.com/en/wow/t/2385588/288). Kopp: "much faster than grinding" (`C`, 40–50 file). Aerie Peak links to IF, Southshore and Refuge Pointe (`community` L datamine). A's single Kalimdor block has to supply ~2M XP from five zones, and A itself plans a grind at ~56 (`theory`). | `theory` / `C` |
| F15 | Way into Kalimdor | Menethil → Theramore boat, then fly to Gadgetzan (cannot work, §1.2) | Powderfuse → Steamwheedle boat | **B.** | Boat route `official` (found-photos recap). The Powderfuse flight master has no routes, so ride from Farholde to the port (`community` L, https://foreverdb.net/travel ; https://us.forums.blizzard.com/en/wow/t/2353281). | `official` + `theory` |
| F16 | 48–55 in Kalimdor | Tanaris, Feralas, Un'Goro, Stormwind training trip, Felwood, Winterspring to 57 | Tanaris (+Zul'Farrak), Un'Goro, Eastern Kingdoms transfer + training, Felwood, Winterspring to 55 | **B.** Skip Feralas, or do only Feathermoon quests on the way. Leave Kalimdor at 55. | No Alliance warlock trainer on Kalimdor (`community`, https://www.warcrafttavern.com/forever/guides/class-trainers/). Kalimdor flight paths must be found on foot (foreverdb). Kopp's Feralas 43–47 is out-levelled at 48+ (`C`). Kopp: Felwood 53–54, Winterspring 54–55 (`C`, 50–60 file). | `theory` / `C` |
| F17 | Zul'Farrak | Optional at 46–47 | Conditional at ~49.5 | **B: conditional, ~49 in Tanaris,** only with ≥4 Zul'Farrak quests in the log. | ~38.5k quest XP (38% at 47), roughly par (`community` B, https://us.forums.blizzard.com/en/wow/t/2385588/288). | `community` |
| F18 | 55–60 | Burning Steppes 57–58.5, Plaguelands 58.5–60 | Burning Steppes 55–56.8, Plaguelands 56.8–59.2, finish 59.2–60 | **B**, with Kopp's five WPL/EPL alternations merged into two visits. | Kopp's 50–60 order (`C`). The True Masters chain: "an easy 30k XP" (Kopp, `C`). | `theory` / `C` |

### 2.2 Forks where both lenses already agreed (confirmed by the judge)

| Fork | Decision | Evidence | Conf. |
|---|---|---|---|
| 11–14: Loch Modan vs going south | **Loch Modan**, plus the non-Classic quests A found (§1.3). The wowhead sweep's "zero new quests" was an undercount. 86667 and 86614 are confirmed in play; take 86585 and 86613 only if offered in game (§1.4a). | RXP Loch Modan 12–14 uses 86667 and 86614 (`community` L). Tooltips: `official` DB. | `community` L / `official` DB |
| 12–20: Darkshore (RXP 15–19) vs Westfall/Redridge | **Westfall/Redridge + Hall of Thanes + Deadmines, no boats** | Beta players reached 20 on Eastern Kingdoms quests + HoT + Deadmines (`community` B, before the nerf, https://us.forums.blizzard.com/en/wow/t/2361881). Darkshore has only ~7 new quests (`official` DB). Boats are a launch risk (`official` L). Cost: RXP's launch-maintained Darkshore steps go unused. | `theory` |
| 27–30: Wetlands | **Wetlands** | 62 of 94 Alliance samples at 27–30; Gnome Warlock at ~38k XP/h (`community` L, https://race.aotc.gg/) | `community` L |
| 30–35: northern arc vs Duskwood 30–32 | **Northern arc** (Southshore, City of Dalaran, Alterac, Arathi). Duskwood is already done at 23.5–26. | Launch Alliance went Duskwood (31) → Hillsbrad (32) → Alterac (33) → Arathi (34) (`community` L, §1.1). City of Dalaran quests are level 33 (`official` DB, https://www.wowhead.com/forever/quest=92432). | `community` L + `theory` |
| Excavation Site at ~30 | **In** | Quests are level 31 in the database (`official` DB, https://www.wowhead.com/forever/quest=95772); ~88% of a level at 28 (`community` B, https://us.forums.blizzard.com/en/wow/t/2385588/288) | `beta-tested` / `community` |
| City of Dalaran at ~33.5 | **In** | 8 × 3,950 XP (`community`, ConquestCapped). Racers moved Hillsbrad → Alterac at 32–33 (`community` L). | `community` L |
| Krol'dok | **Conditional:** run it only with ≥3 of its quests | Range 40–45 (`official`, https://worldofwarcraft.blizzard.com/en-us/news/24301455); no quest data | `theory` |
| Shen'dralas | **Skip** | Needs Honored with Magram (`official` DB, https://www.wowhead.com/forever/quest=92841); no flight path (https://senseos.gg/guides/wow-forever/flight-paths-and-travel/); level-60 elites (`community` B, https://www.youtube.com/watch?v=2mpbhiqGSBs) | `official` + `community` |
| Felhunter (30) | **Skip** | Five far-apart stops: Ratchet ×2, IF ×2, Hillsbrad, Thousand Needles, Wetlands (`C`, https://warcraft.wiki.gg/wiki/Tome_of_the_Cabal_(Alliance,_2) ; `official` DB https://www.wowhead.com/forever/quest=1798) | `theory` |
| Cozy Sleeping Bag chain | **Skip** | The route runs through the Horde-held Barrens and near Sun Rock in Stonetalon, and the dam step is PvP-camped, all for ~3% XP (`community` L, https://us.forums.blizzard.com/en/wow/t/2402504/15 ; `official` DB, https://www.wowhead.com/forever/item=211527) | `community` L |
| Toxic Soil | **Steps 1–4 only** (to Moonbrook Espionage) | Step 6 needs 10 Rough Dynamite plus a Stormwind detour (`official` DB, https://www.wowhead.com/forever/quest=92749 ; `community` B, https://us.forums.blizzard.com/en/wow/t/2376450) | `official` DB |
| Ruins of Lordaeron, Wailing Caverns, SFK, SM, RFK, RFD, Maraudon, Drowned City, Gnomeregan | **Skip** (Gnomeregan only with a ready group at the 31.6 IF stop) | Ruins of Lordaeron quests could not be taken at launch, and the Alliance boss quest pays 3.9k XP vs 13.5k for Horde (`community` L/B, https://us.forums.blizzard.com/en/wow/t/2402007 ; https://us.forums.blizzard.com/en/wow/t/2396590). SM is worth ~10% of a level (`community` B). Drowned City: Alliance chain via Dibbs in Southshore at 40 (`official` DB, https://www.wowhead.com/forever/quest=95786). | `community` |

---

## 3. Grafts and corrections

**From lens A:**
- Voidwalker deferred to 15.6, and the Brackwell → Lakeshire flight-path walk.
- Hall of Thanes run straight from Loch Modan.
- The four Loch Modan Forever quests and the id-band discovery (§1.4).
- Wetlands batched to ~31.6, with one Ironforge visit for the 30/32 training and the turn-ins.
- The Riverglades bail-out trigger.
- Riding at Steelgrill's Depot as the mount fallback.
- The 20-minute abandon rule for Uncovering the Past.
- Spark of Freedom (87491) as an optional Dun Modr escort.
- Nightfin Soup as an accelerator.
- The Redridge coordinate warning.
- The boat-portal fallback.

**From lens B:**
- Decision rules R1–R7: the dungeon test, one run per dungeon, quest level +2 to +4 where it doesn't cost travel, yellow/orange mobs only, drain-tank tactics.
- The time model anchored on launch data.
- Deadmines at ~20 and the Redridge/Duskwood windows.
- The Menethil → Southshore boat and the Ironforge + Stormwind city stop.
- Stranglethorn 35–40 with the Felsteed at 40.
- Uldaman and the Hinterlands.
- The Powderfuse → Steamwheedle boat.
- Kalimdor at 48–55.
- Burning Steppes and the Plaguelands at 55–60.
- Dungeon etiquette.

**Judge's own changes:**
- The flight fixes in §1.2.
- Hearth from Ratchet instead of the return boat.
- Badlands moved to 40 (before Riverglades).
- Songblade Search skipped (§1.3).
- An early-switch rule for Stranglethorn → Riverglades.
- Updated launch trails (§1.1).

---

## 4. Final route, leg by leg

Each leg lists: start state, end state, ordered plan, must-include items, skips, and evidence or risks.

Coordinates come from the sweeps' `wh.mjs` checks unless marked otherwise. **Redridge and Stormwind coordinates may be off** because those maps were re-cut (https://www.wowhead.com/forever/npc=382). Leave them out unless checked in game.

### leg-01-coldridge-dun-morogh: Coldridge Valley & Dun Morogh · 1 → 10.3
- **Start:** Level 1, Anvilmar (Coldridge Valley). Hearth: Coldridge (default). No quests, no flight paths, no pet.
- **End:**
  - Level 10.3, Kharanos (Thunderbrew Distillery). Hearth: Thunderbrew Distillery.
  - Trained 10 with Gimrizz Shadowcog. Pet: Imp, with the Blood Pact grimoire.
  - Carrying:
    - A Visitor to Dun Morogh (96408).
    - Data Hoarders (95041), cards done; turn in to Jemma Quikswitch in Ironforge.
    - RXP's Classic hand-offs, such as Stout to Kadrell (414 → Thelsamar) and The Reports (291 → Ironforge).
  - Camping 101: Cooking still in the log (never abandon it). No flight paths.
- **Plan:**
  1. **Coldridge:**
     - Sell the starting gear, train Immolate.
     - Tainted Memorandum (3115) → Beginnings (1599). Feather Charms come from Frostmane Novices (28.7, 83.1); deathskip back afterwards.
     - Coldridge chain in RXP order, plus Grund and Gozwin (97277). Accept The Adventurer (96628).
  2. **Kharanos:**
     - Bind. The Great Outdoors (96608): sit, wait for Boosted Rest, then type `/sit` again. Camping 101: Cooking (96629).
     - Secure the Mountain ×3 (98322 → 98319 → 98323; Mountaineer Gretchen 44.0, 57.0). Flintfire's Shipment (98321).
     - Classic Kharanos set. Grimoire of Blood Pact from Dannie Fizzwizzle (47.2, 53.4).
  3. **Misty Pine:** Dawn in the Mountains (99158) → **Finding Warmth (99159) first** (it unlocks the rest) → Rime's Wrath ×2 → Treacherous Cold (Father Gavin 57.4, 44.8).
  4. **Brewnall:** Frosthowl (98326; Gretta Ganter 31.4, 44.6; boots reward) and Data Hoarders (95041) cards. Deathskip back to Kharanos.
  5. **Grind gate:** Frostmane at 31.2, 39.2 "to 4,525/5,400 XP" at level 8 (RXP). Train 6, 8 and 10 at Kharanos.
- **Must include:** Imp quest; Kharanos bind; The Great Outdoors fix; Camping 101: Cooking; Finding Warmth first; Blood Pact grimoire; boar-meat XP food (+5% kill XP).
- **Skips:**
  - The Quarry's Smith (95217): materials.
  - Never Saddle on Quality (95212): drop rate unknown.
  - **Protecting the Herd (314):** level-11 elite yeti. RXP includes it, but the launch Voidwalker can't tank it, so do it only with a group nearby.
  - The exploration openers (Human/Elwynn based).
- **Evidence and risks:**
  - RXP Forever 1–14 Dwarf/Gnome route (`community` L, https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever).
  - Database ids (`official`, https://www.wowhead.com/forever/quest=98322 ; https://www.wowhead.com/forever/quest=99159).
  - Great Outdoors fix (`beta-tested` L, https://us.forums.blizzard.com/en/wow/t/2401444).
  - Never abandon Camping 101 (https://us.forums.blizzard.com/en/wow/t/2402503).
  - Boar-meat food (`community` B, https://us.forums.blizzard.com/en/wow/t/2396549 ; `official` DB https://www.wowhead.com/forever/item=2680).
  - Yeti (https://us.forums.blizzard.com/en/wow/t/2356140/3).
  - Wands need a 0.5 s stand-still wind-up, so don't kite-wand (`official` B, https://us.forums.blizzard.com/en/wow/t/2359185).
  - Respawns are fastest in starting zones at launch (`official` L).
  - Time: 2.0 h. The beta 1–10 personal best of 1:29 was set with bugged wands (https://www.youtube.com/watch?v=KTC3LkIyEhU).

### leg-02-loch-modan-hall-of-thanes: Gol'Bolar, Loch Modan, Hall of Thanes, Voidwalker & Westfall · 10.3 → 18.3
- **Start:** = leg-01 end.
- **End:**
  - Level 18.3, Sentinel Hill (Westfall). Hearth: Stormwind (bound at ~15.8).
  - Pets: Imp + Voidwalker. Trained 12/14 (Ironforge) and 16 (Stormwind).
  - Flight paths: Thelsamar, Ironforge, Stormwind, Lakeshire, Sentinel Hill.
  - Carrying:
    - The Defias Brotherhood (65 → Wiley, Lakeshire).
    - Red Silk Bandanas (214, partly done).
    - Oh Brother… (167), Collecting Memories (168), Underground Assault (2040).
  - Done: Hall of Thanes (all 5 quests); Toxic Soil to Moonbrook Espionage (92747); Harvesting the Harvesters 1–2.
- **Plan:**
  1. **East Dun Morogh, on the way out:**
     - Gol'Bolar Quarry: The Public Servant / Those Blasted Troggs, Stolen Blasting Powder ×2 (95213/95214; Quarrymaster Thesten 69.0, 54.8).
     - Hall of Thanes prep: A Visitor to Dun Morogh (96408) → Farsen's Watch (96392) → Nip 'Em in the Bud (96390; Dark Iron Spies ~76.7, 60.7) → Underground Map (96391, from the dropped Dark Iron Map) → **Old Ironforge Incursion (96393)**.
  2. **Loch Modan, ~11.8 → 14.4:**
     - Banner of the Fallen (86585; Captain Rugelfuss 23.2, 73.8, at the zone entrance), **if offered**. DB-only so far; RXP doesn't route it (§1.4a).
     - Thelsamar: Stout to Kadrell, Rat Catching (416), Thelsamar Blood Sausages (418), Stormpike's Order, Filthy Paws (307), The Lost Pilot / A Pilot's Revenge, Honor Students (6387) → Ride to Ironforge (6391). Learn the Thelsamar flight path.
     - Snowbound (86667) and Silver of the Waves (86614). Optional: Excavation Tools (86613; Magmar Fellhew 64.8, 66.4).
     - RXP grind gate: "13 + 9,600 XP" on troggs.
  3. **Fly Thelsamar → Ironforge** (Ride to Ironforge):
     - Data Hoarders turn-in (Jemma Quikswitch 67.4, 43.8); The Reports.
     - Train 12/14 (Drain Life, Curse of Recklessness).
     - Auction house wand: Greater Magic Wand (11288, requires 13) or Smoldering Wand (5208, requires 15).
  4. **Hall of Thanes at ≥14.4, one run:**
     - Take Important Heirlooms (96403) and The Restless Dead (96394) at the approach.
     - Inside: An Ancient Grudge (96395) and **The Treaty of Understanding (98423)**, the tablet in the final room.
     - Turn in to Magni. Exit straight down the corridor from the final boss room (RXP).
  5. **Tram to Stormwind (~15.6):**
     - Gakin: Surena Caledon (1688), accepted directly as RXP does.
     - Walk to Surena (Brackwell Pumpkin Patch, Elwynn 70.8, 80.2), then on to **Lakeshire for its flight path**. Fly to Stormwind for The Binding (1689).
     - Train 16. Buy the Sacrifice grimoire if you want it.
     - **Bind Stormwind.** Pick up the Deadmines quests in the Dwarven District (167, 168, 2040).
     - Life Tap deathskip toward Westfall (RXP), or walk.
  6. **Westfall, 16.2 → 18.3:**
     - Sentinel Hill flight path.
     - Toxic Soil steps 1–4 (92742, 92744, 92745, 92747; Alba Fairmoon 52.4, 53.0).
     - Harvesting the Harvesters 1–2 (92909/92910; Ozwin Ironsprocket 51.4, 32.2).
     - Classic hub: People's Militia, Westfall Stew, Goretusk Liver Pie (XP food), Poor Old Blanchy, Red Leather Bandanas, The Killing Fields, Patrolling Westfall.
     - Accept 65 and Red Silk Bandanas (214). Do the **south half (Moonbrook, the coast) first** if the north is camped.
- **Must include:** Hall of Thanes with all 5 quests; Voidwalker (1688 → 1689); Stormwind bind; Lakeshire flight path via the Surena walk; Sentinel Hill flight path; a wand by 14–15; Deadmines quests in the log.
- **Skips:**
  - The Stormwind/Elwynn swing at 11 (F1). Elwynn quests (grey).
  - Hogger (elite, single-loot drops).
  - Loch Modan's east, its 16+ and elite quests, and the dam step of the sleeping-bag chain.
  - Toxic Soil from Explosive Consultation on. Harvesters step 3 (crafted Crude Scope). My First Alchemy Set.
  - Ruins of Lordaeron (RXP's dungeon variant runs it at 18–19).
- **Evidence and risks:**
  - RXP: Loch Modan 12–14, Ironforge wands/grimoires and Westfall 14–15 (`community` L). Dungeon variant (HoT steps): https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever/dungeon
  - Hall of Thanes ids (`official` DB, sweep-launch §6.2).
  - Pet nerf and the hotfix switch-back: F1.
  - Westfall camped (`community` L, https://us.forums.blizzard.com/en/wow/t/2401834/52). Toxic Soil: https://www.wowhead.com/forever/quest=92749
  - **Risk:** the minimum levels for picking up the Hall of Thanes quests are not in the database. If a quest refuses at 14.4, do Westfall first and take the tram back at ~16.5 (B's timing).
  - Time: 5.8 h.

### leg-03-defias-deadmines-redridge: Defias chain, Deadmines & Redridge · 18.3 → 23.5
- **Start:** = leg-02 end.
- **End:**
  - Level 23.5, Darkshire (Duskwood); Darkshire flight path learned. Hearth: Stormwind.
  - Trained 18 and 20 (Stormwind).
  - Carrying:
    - Messenger to Darkshire (145): turn in at Darkshire first thing in leg 04.
    - What Comes Around… (386, Stockade; turn-in Lakeshire).
    - Bazil Thredd (389, Stockade).
  - Done: the Defias chain, Deadmines, The Unsent Letter → Baros Alexston.
- **Plan:**
  1. **Fly Sentinel Hill → Lakeshire:**
     - 65 → Wiley, then 132.
     - First pass of Redridge's low quests (use RXP's 19–20 Redridge section): Show of Force (98407; Deputy Feldon 25.4, 60.0), Encroaching Gnolls (244), The Price of Shoes (118), Selling Fish, Redridge Goulash.
  2. **Fly Lakeshire → Sentinel Hill:** 132 → 135. Moonbrook Defias kills for Red Silk Bandanas.
  3. **Stormwind:** Mathias Shaw, 135 → 141. Train 18. Fly or hearth there, then fly back to Sentinel Hill.
  4. **Sentinel Hill:**
     - 141 → 142: kill the Defias Messenger while doing Moonbrook kills.
     - 155: escort the Defias Traitor.
     - Accept 166.
  5. **Deadmines at ~19.7, one run:**
     - Carry in 166, 214, 167, 168, 2040. Loot **The Unsent Letter (373)**.
     - Leave the group to be moved to the nearest graveyard (RXP trick). Turn in 166 and 214 at Sentinel Hill.
  6. **Hearth to Stormwind:**
     - Deadmines turn-ins. The Unsent Letter → Baros Alexston; accept Bazil Thredd (389).
     - Train 20 (Demon Armor, Rain of Fire, Ritual of Summoning).
  7. **Fly Stormwind → Lakeshire. Redridge 20.7 → 23.5:**
     - Blackrock Menace → Alther's Mill (98386; Foreman Oslow 27.0, 48.4) + Blackrock Blockade (98387 → Marshal Marris).
     - The Lost Tools (125), Hilary's Necklace, Underbelly Scales, Murloc Poachers, Assessing the Threat, Blackrock Bounty.
     - Accept **What Comes Around… (386)** and **Messenger to Darkshire (145)**.
     - Grind top-up on Blackrock orcs or gnolls (yellow) only if short.
  8. **Walk west into Duskwood → Darkshire** and learn the flight path.
- **Must include:** the whole Defias chain (65 → 132 → 135 → 141 → 142 → 155 → 166); Deadmines with 5 quests; The Unsent Letter; train 20; What Comes Around… for the Stockade.
- **Skips:**
  - Tharil'zun (19; level-25 elite). WANTED: Incinerator Gar'im (95999; group). An Unwelcome Guest (Bellygrub, elite).
  - Missing in Action (escort). The ACA Shipping Label / Merchant's Favor and Sign Me Up! chains.
  - Destruction in Deadmines (92753/92819).
  - Darkshore, Wailing Caverns, Ruins of Lordaeron.
- **Evidence and risks:**
  - Chain ids (`official` DB, https://www.wowhead.com/forever/quest=166 ; https://www.wowhead.com/forever/quest=373).
  - Redridge new quests (`official` DB, https://www.wowhead.com/forever/quest=98386).
  - Deadmines ~99% of a level at 18; the final Defias step is worth 6,175 XP (`community` B / ConquestCapped).
  - Graveyard trick (`community` L, https://kami-labs.fr/wow-forever/restedxp-en-francais-wow-forever/).
  - **Redridge coordinates are re-cut, about −5 in x** (`official` DB + `theory`, https://www.wowhead.com/forever/npc=382).
  - Time: 5.5 h.

### leg-04-duskwood-wetlands: Duskwood, Stormwind (Stockade) & Wetlands · 23.5 → 30.0
- **Start:** = leg-03 end.
- **End:**
  - Level 30.0, Wetlands, at the Excavation Site approach (path left of Thelgen Rock, 53.9, 65.4). Hearth: Menethil Harbor.
  - Trained 24/26 (Stormwind). Flight paths add Darkshire and Menethil.
  - Carrying the Excavation bundle: Lost in the Thicket Things (95647), Horrors in the Highland (95646), Changing Tastes (95697), and Heartwoven (95809) if offered.
  - Carrying the open level-30–32 Wetlands chains:
    - Death to the Dragonmaw (98291), Forced Disarmament (98293), Carnage (98283).
    - Nek'rosh's Gambit (465).
    - Understanding Our Present (98216), only if the Uncovering the Past fragments came fast.
  - Stockade done or skipped.
- **Plan:**
  1. **Duskwood (Darkshire), 23.5 → 26.2:**
     - Messenger to Darkshire turn-in.
     - The Night Watch, Raven Hill deliveries, The Hermit, Sven's Camp/Revenge, Worgen in the Woods, Look to the Stars (skip the Zzarc'Vul elite), ogre and gnoll kill quests.
     - New: Ira's Dagger (96137) and Merrick's Bow (96138), both from Sirra Von'Indi (72.4, 47.4).
     - Accept **Crime and Punishment (377)**.
  2. **Fly Darkshire → Stormwind:**
     - Train 24/26.
     - **Stockade if a group forms within ~10 min**: Quell the Uprising, The Color of Blood, 386, 377, Bazil Thredd → The Stockade Riots.
     - If you ran it, do the turn-in hop SW → Darkshire (377) → Lakeshire (386), then hearth or fly back. Otherwise drop 377 and 386.
  3. **Into the Wetlands:**
     - Fly Stormwind → Ironforge → **Thelsamar**. Walk west through Dun Algaz.
     - On the way: Whelgar's camp (38.8, 52.2) for Uncovering the Past. Apply the 20-min abandon rule if the fragments don't show.
     - Menethil: **learn the flight path (Shellei Brondir 9.5, 59.5) and bind**.
  4. **Wetlands sweep, 27.2 → 30:**
     - **Menethil:** Digging Through the Ooze (470 → Sida's Bag), Spoils of War (98197), Alchemical Hazards (98282; its Strong Anti-Venom helps against the Excavation diseases), Claws from the Deep → Return the Statuette (98189), Crocs of the Sky (98072) → Crimson Crate Delivery → Razormaw Needling, War Banners → From the Ashes (98221), Old Habits, A Lack of Virtue / Unrequited Love, Young Crocolisk Skins, Lost in the Thicket Things.
     - **Howin Kindfeather (49.4, 42.0):** This Land Was Their Land (98230), Trying Times, Death to the Dragonmaw (98291), Forced Disarmament (98293).
     - **Rethiel (56.2, 40.4):** Greenwarden chain 463 → 276 → 277 → 275 → Carnage (98283); Horrors in the Highland.
- **Must include:** Darkshire flight path; Ira's Dagger; Menethil bind and flight path; Sida's Bag; Alchemical Hazards; the Excavation bundle; Howin's and Rethiel's chains.
- **Skips:**
  - The Valor Family (96139/98447; the ghost spawns in either of two opposite cemeteries). The Legend of Stalvan, Mor'Ladim, Morbent Fel.
  - The Fury Runs Deep (378; its giver is at Dun Modr). Songblade Search (95772; ends in Lakeshire).
  - Bloom of the Heavens part 2 (turn-in in Auberdine). Highland Hides (bugged in beta).
  - The Kalimdor sweep and the Succubus (F5/F6).
- **Evidence and risks:**
  - Launch Wetlands 27–30: Gnome Warlock at ~38k XP/h; 62 of 94 Alliance samples (`community` L, https://race.aotc.gg/).
  - ~30 new quests in the Wetlands (`official` DB, https://www.wowhead.com/forever/quest=98310).
  - Valor family (`community` B, https://us.forums.blizzard.com/en/wow/t/2385912). Uncovering the Past (`community` B, https://us.forums.blizzard.com/en/wow/t/2373924).
  - Stockade (F7).
  - **Risk:** the 10-min Dun Algaz walk is `theory`. Confirm in game that the Menethil flight path can't be reached any faster.
  - Time: 7.7 h; 21.0 h total at 30.

### leg-05-excavation-dalaran-arathi: Excavation Site, Southshore, City of Dalaran & Arathi · 30.0 → 35.3
- **Start:** = leg-04 end.
- **End:**
  - Level 35.3, Refuge Pointe (Arathi), flight path learned. Hearth: Southshore.
  - Trained 30/32 (Ironforge). Talents respecced to drain-tanking.
  - Flight paths add Southshore and Refuge Pointe.
  - Carrying Power Overwhelming (92489) and A Green Sample (92456), both complete, for Stormwind. Also any Hints of a New Plague? step if you are mid-chain.
  - Done: Excavation Site; City of Dalaran (8 quests); Prehistoric Prism and For Further Study turned in.
- **Plan:**
  1. **Excavation Site, one run at ~30:**
     - Run it with the full bundle.
     - Lost Relic Carry (95810) → Prehistoric Prism (98824). **Never abandon either quest.**
     - Bring anti-venom for the diseases.
  2. **Finish the Wetlands, 30.8 → 31.6:**
     - Death to the Dragonmaw, Forced Disarmament, Carnage, Nek'rosh's Gambit.
     - Goaz chain (98216 → 98310 → For Further Study 98313) if it opened.
     - New, non-Classic: **Bring Back a Bang (88756; level 31; Dark Iron camps on Direforge Hill)**, §1.4.
     - Optional: Spark of Freedom (87491, Dun Modr escort, solo only).
  3. **Menethil → boat to Southshore.** Check the destination; use the dock portal if the boat doesn't come.
     - Southshore: learn the flight path (Darla Harris 49.4, 52.4) and **bind**.
     - Accept An Alarming Request (92432), Farren's Proof / The Shamed Lieutenant (98219; Lt. Farren Orinelle 51.4, 58.4), Costly Menace, Hints of a New Plague?, Syndicate Assassins, Crushridge Bounty.
  4. **City stop:**
     - Fly Southshore → Ironforge (3:26): train 30/32 and respec. Turn in Prehistoric Prism (Magellas) and For Further Study (Karnik).
     - Tram to Stormwind: accept Power Overwhelming (92489) and A Green Sample (92456). Turn in the Statuette follow-up (98190/98191).
     - **Hearth to Southshore.** Optional: Gnomeregan, only with a group that is ready.
  5. **Hillsbrad/Alterac, 32 → 33.4:**
     - Image of Archmage Modera (Silverpine 68.4, 45.2): Heart of Disruption (92458) → Friend of the Kirin Tor (92459); Starving Arcane (92457); Shrewd Negotiations (97287); Blood in the Streets (92434).
     - Opportunistic Education (96987; Rexxie, at the sewer entrance).
     - Farren's Proof → Stormwind Ho!, Costly Menace (Alterac lions), Syndicate Assassins, Crushridge Bounty.
     - Kopp's grind gate: Southshore murlocs.
  6. **City of Dalaran at ~33.4, one run,** with all 8 quests. Don't re-run it for Starving Arcane.
  7. **Arathi, 34.1 → 35.3:**
     - Walk over Thoradin's Wall. Learn the Refuge Pointe flight path (Cedrik Prose 45.6, 46.0).
     - Northfold Manor (681), Hints of a New Plague? 2–5 (the escort) if you took it, Stones of Binding (first step), Witherbark/Boulderfist kills.
     - New, level 33: the Thandol Span chain Hearts of the Lost (87318) → Accessories of the Lost (88757) → Sentiments of the Lost (88758), about 3 min north of Refuge Pointe, if Corma is found there (§1.4).
     - Grind gate: Northfold Manor (33, 27).
- **Must include:** Excavation (relic quests); the Menethil → Southshore boat; Southshore bind; the Ironforge + Stormwind city stop; the Dalaran attunement and run; Refuge Pointe flight path; the drain-tank respec at 30.
- **Skips:**
  - Stopping the Cycle (98297; level-34 group) and Word to Ironforge. Defeat Nek'rosh (474; group).
  - The Moldy Tome murlocs (Felhunter). Strahnbrad Mystery (95534, 36) unless it's orange.
  - Wand over Fist (39), Dutiful Steps (92872), Ground to Keep (92867). Rogue-only 96783–96785.
  - The Duskwood 30–32 return. The Drowned City (95786/95787).
- **Evidence and risks:**
  - Launch trails, Hillsbrad 32 → Alterac 33 → Arathi 34 (`community` L, §1.1). The city stop matches the Gnome Warlock (`community` L).
  - City of Dalaran ids and the Modera image (`official` DB, https://www.wowhead.com/forever/npc=269127).
  - Excavation relic soft-lock (`beta-tested` B, https://us.forums.blizzard.com/en/wow/t/2370413).
  - Drain-tank pace change at 30 (`community` L, https://www.youtube.com/watch?v=lR51DIgQsok).
  - Kopp 30–31 Hillsbrad and 31–32 Arathi (`C`).
  - **Risk:** the boat-loop order is `community`.
  - Time: 8.8 h.

### leg-06-stranglethorn-felsteed: Stranglethorn Vale & the Felsteed · 35.3 → 40.1
- **Start:** = leg-05 end.
- **End:**
  - Level 40.1, Thelsamar (Loch Modan). Hearth: Thelsamar (re-bound here).
  - Trained 34 (Ironforge), 36/38 (Stormwind) and 40 (Ironforge).
  - **Felsteed learned**, or Apprentice Riding at Steelgrill's Depot (fallback).
  - Flight paths add Booty Bay and Ratchet.
  - Nothing carried that must be turned in.
- **Plan:**
  1. **Leave Arathi:**
     - Fly Refuge Pointe → Ironforge: train 34.
     - Tram to Stormwind: turn in Power Overwhelming and A Green Sample.
     - Fly Stormwind → Darkshire, then walk south into Stranglethorn. Kopp: "run to 44, 66 and go south".
  2. **Northern Stranglethorn:** Rebel Camp (The Second Rebellion 203, Bad Medicine 204) and the Nesingwary Expedition (tiger/panther/raptor tiers 1–3).
  3. **Booty Bay:**
     - Learn the flight path (Gyll 27.5, 77.7) and **bind**.
     - Singing Blue Shards (605), Goblin Sponsorship, Water Elementals (601), Venture Company Mining (600).
     - New: Talk of the Town (98463; Nixxrax 27.0, 77.2); Anything of Value / Where's the Key? / Zimmix's Great Escape (97328/97329/97331); Reduce, Reuse, Reconcile (97420); The Cook in the Cage (97047) → Returning to Port (97048).
  4. **Training trip:** fly Booty Bay → Stormwind once at ~38 to train 36/38, then fly back.
  5. **Finish:** Kopp's 38–40 Stranglethorn steps, then the grind gate on basilisks and raptors (33, 39) "until 40". Eat cooked food while grinding.
  6. **Felsteed:**
     - Boat Booty Bay → Ratchet. Summon Felsteed (4490) from Strahad Farsan (Barrens 62.4, 35.4). Learn the Ratchet flight path (Bragok 63.0, 37.2).
     - **Hearth to Booty Bay.**
     - Fly Booty Bay → Stormwind → Ironforge: train 40 (Wrack via talents). Dual spec is optional; its cost is unknown.
     - Fly to Thelsamar and **bind**.
  7. **Early-switch rule:** if Stranglethorn's quests run out before 38.5, leave at 38. Fly Booty Bay → Darkshire → Lakeshire and ride east into Riverglades (leg 07, part 3). Take the Felsteed at 40 as an out-and-back: Farholde → Lakeshire → Stormwind → Booty Bay → boat → hearth to Farholde. Or buy riding from Binjy instead.
- **Must include:** Booty Bay bind and flight path; the new Booty Bay quests; Felsteed at 40, then the hearth back; train 40.
- **Skips:**
  - Special Forces (Kopp skips it). Cracking Maury's Foot (abandon it after an hour without the key).
  - The Drowned City. Group elites. Kopp's 32–35 Kalimdor legs (Shimmering Flats, Stonetalon, Desolace) and Dustwallow 38.
  - The Succubus via Takar, even from Ratchet: its Ashenvale step makes it an extra continent trip.
- **Evidence and risks:**
  - Leader's Stranglethorn trail (`community` L, §1.1).
  - Kopp 35–36 / 38–40 Stranglethorn (`C`, https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/Alliance/003_Alliance_30to40.lua).
  - Booty Bay new quests (`official` DB, https://www.wowhead.com/forever/quest=98463).
  - Felsteed (`official` DB, https://www.wowhead.com/forever/npc=6251). The riding requirement is unconfirmed (https://us.forums.blizzard.com/en/wow/t/2400779), so **arrive with 100 g**.
  - **Risk:** Stranglethorn may need ~2 h of grind gates at 38–40 (`theory`).
  - Time: 10.2 h; 40.0 h total at 40.

### leg-07-badlands-riverglades-uldaman: Badlands, Riverglades, Krol'dok & Uldaman · 40.1 → 45.3
- **Start:** = leg-06 end.
- **End:**
  - Level 45.3, Ironforge, after Uldaman's turn-ins. Hearth: Thelsamar.
  - Trained 42/44 (Ironforge). Flight paths add Farholde Keep.
  - Nothing carried that must be turned in.
- **Plan:**
  1. **Thelsamar → Ironband's Excavation** (south-east Loch Modan) for Agmond's Fate (704).
  2. **Badlands, 40.1 → 41.3 (Kopp's 40–41 leg):**
     - Mirages (718), Scrounging (733), A Dwarf and His Tools, **A Sign of Hope (720/721)**, Agmond's Fate, Solution to Doom (709).
     - Pick up the Uldaman starters you pass.
     - Optional top-up on the whelps in the ravine.
  3. **Into Riverglades on foot** by the Badlands route north of Twilight's Shroud. If that route doesn't work, fly Thelsamar → IF → SW → Lakeshire and take the east fork of the Burning Steppes road.
     - Farholde Keep: learn the flight path (Gretchen Mayberry 60.6, 81.4) and **bind**. There is no bank or AH.
  4. **Riverglades, 41.3 → 44** (`theory`; no quest data):
     - Clear the lowest-level hubs first.
     - Take every quest that leads to Krol'dok.
     - Skip Brotherhood of the Horse reputation-only chains and group elites.
     - **Bail-out trigger:** if Riverglades gives under ~35k XP/h over the first 1.5 h, or runs dry before 43, switch to Kopp's 41–43: Swamp of Sorrows (Noboru the Cudgel, Galen's Escape), then the Stranglethorn naga grind, skipping Desolace.
  5. **Krol'dok Stronghold:** one run at ~44, **only with ≥3 of its quests**.
  6. **Fly Farholde → Thelsamar → Ironforge:**
     - Train 44.
     - Uldaman pickups: The Lost Dwarves (2398), Reclaimed Treasures (1360), The Lost Tablets of Will (1139) if offered.
     - Fly back to Thelsamar, re-bind, and ride to the Uldaman entrance in the northern Badlands.
  7. **Uldaman at ~44.5, one run,** with every quest. Turn-ins in Ironforge, plus Badlands ones if they are on the way.
- **Must include:** Badlands at 40; Farholde Keep flight path and bind; the Riverglades bail-out trigger; Uldaman with its quests; train 42/44.
- **Skips:**
  - Tremors of the Earth (717, level 50).
  - Shen'dralas.
  - Kopp's 41–42 Desolace and 42–43 Stranglethorn (unless the bail-out triggers).
  - Riverglades reputation-only chains.
- **Evidence and risks:**
  - Riverglades: DB range 36–44 (`official`, https://www.wowhead.com/forever/zone=16591); "mid-30s to mid-40s" (`official`, https://worldofwarcraft.blizzard.com/en-us/news/24315820).
  - Farholde Keep flight paths link to Lakeshire, Thelsamar and Morgan's Vigil (`community` L, https://foreverdb.net/travel ; NPC https://www.wowhead.com/forever/npc=257087).
  - Foot routes (`community`, https://warcraft.wiki.gg/wiki/Riverglades).
  - Krol'dok 40–45 (`official`, https://worldofwarcraft.blizzard.com/en-us/news/24301455).
  - Uldaman ~60k quest XP (`community` B, preliminary).
  - Kopp 40–41 Badlands and 45–46 Uldaman (`C`, https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/Alliance/003_Alliance_40to50.lua).
  - **Biggest risk in the route:** Riverglades has no quest data, and nobody had entered it by 39.2 (`community` L).
  - Time: 12.4 h.

### leg-08-hinterlands-tanaris: The Hinterlands & Tanaris · 45.3 → 50.0
- **Start:** = leg-07 end.
- **End:**
  - Level 50.0, Gadgetzan (Tanaris). Hearth: Gadgetzan.
  - Trained 46/48 (Ironforge). Flight paths add Aerie Peak and Gadgetzan.
  - Carrying the Un'Goro starters from Tanaris, such as The Super Snapper FX (2944) if it is still open. Zul'Farrak done or skipped.
- **Plan:**
  1. **To the Hinterlands:**
     - Fly Ironforge → Southshore, then ride north-east into the Hinterlands.
     - Aerie Peak: learn the flight path (Guthrum Thunderfist 11.0, 46.0) and **bind**.
  2. **Hinterlands, 45.3 → 47.5** (Kopp's 46–47 and 48 legs merged into one visit):
     - Witherbark Cages (2988), Favored of Elune?, Food for Baby (4297), Sprinkle's Secret Ingredient.
     - Kopp's grind gate on trolls and wolves around Zul, as a top-up only.
  3. **To Tanaris:**
     - Fly Aerie Peak → Ironforge: train 46/48.
     - Fly Ironforge → Thelsamar → Farholde. Ride to **Powderfuse Port**.
     - **Boat to Steamwheedle Port**, then ride to Gadgetzan: learn the flight path (Bera Stonehammer 51.0, 29.2) and **bind**.
  4. **Tanaris, 47.5 → 50.0** (Kopp's 43 and 47–48 sets, at a higher level):
     - Wastewander Justice and Water Pouch Bounty, Southsea pirates, Tran'Rek, The Thirsty Goblin, The Super Snapper FX (2944).
     - Zul'Farrak pickups: Scarab Shells (2865), Troll Temper (3042), Divino-matic Rod (2768).
  5. **Zul'Farrak at ~49, one run,** only with ≥4 of its quests. Otherwise use Kopp's grind gate on Tanaris ogres.
- **Must include:** Aerie Peak flight path; train 46/48; the Powderfuse boat; Gadgetzan bind and flight path.
- **Skips:**
  - Saving Sharpbeak / the Jintha'Alor group finale. Rhapsody's Kalimdor Kocktail (its turn-in is in Feralas).
  - Feralas. Tiara of the Deep (its giver is in Dustwallow).
  - Alcaz Prison: test only.
  - Kopp's 48–49 Stranglethorn and 49–50 Blasted Lands.
- **Evidence and risks:**
  - Kopp 40–50 (`C`).
  - Steamwheedle Port ↔ Powderfuse Port ship (`official`, https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap).
  - Powderfuse flight path has no routes (`community` L, https://foreverdb.net/travel).
  - Zul'Farrak quest XP (`community` B).
  - Hinterlands is Classic content (`community`, https://games.gg/world-of-warcraft/guides/wow-forever-hinterlands-leveling/).
  - **Risk:** the ride time from Farholde to Powderfuse Port is unknown (`theory`).
  - Time: 14.4 h.

### leg-09-ungoro-felwood-winterspring: Un'Goro, Felwood & Winterspring · 50.0 → 55.0
- **Start:** = leg-08 end.
- **End:**
  - Level 55.0, Stormwind, off the Auberdine boat. Hearth: Everlook. Re-bind in Stormwind if you log out here.
  - Trained 50/52 (Ironforge) and 54 (Stormwind).
  - Flight paths add Marshal's Refuge, Auberdine, Astranaar, Talonbranch Glade and Everlook.
  - Nothing carried that must be turned in.
- **Plan:**
  1. **Un'Goro, 50 → 52.2:**
     - Ride south into Un'Goro. Learn the Marshal's Refuge flight path (Gryfe 45.2, 5.8).
     - Kopp's 51–52 set: A Mangled Journal (from raptors), It's a Secret to Everybody, the Lar'korwi chain, The Apes of Un'Goro (4289), Chasing A-Me 01, Muigin and Larion.
  2. **Transfer north, about 1 h:**
     - Fly Marshal's Refuge → Gadgetzan, ride to Steamwheedle Port, **boat to Powderfuse**.
     - Ride to Farholde, fly Thelsamar → Ironforge: **train 50/52**.
     - Fly to Menethil and take the **boat to Auberdine**. Or take the tram to Stormwind and the Stormwind Harbor boat.
     - Auberdine: learn the flight path. Ride through Darkshore and Ashenvale (learn Astranaar) into Felwood.
  3. **Felwood, 52.2 → ~53.5:**
     - Emerald Sanctuary cleansing chains.
     - Timbermaw Ally (8460; Deadwood furbolgs ~48, 91; this rep opens the Timbermaw Hold passage).
     - Learn the Talonbranch Glade flight path (62.5, 24.1).
  4. **Through Timbermaw Hold into Winterspring:**
     - Everlook: learn the flight path (62.2, 36.5) and **bind**.
     - Chillwind Horns (4809), Winterfall runners and furbolgs, Enraged Wildkin, The Ruins of Kel'Theril, the Frostsaber chain, to 55.
     - Deathskip to Everlook when the hearth is on cooldown.
  5. **Exit:** fly Everlook → Talonbranch → Auberdine, **boat to Stormwind**, train 54.
- **Must include:** the Marshal's Refuge flight path; training 50/52 during the transfer; Timbermaw Ally; the Everlook bind.
- **Skips:**
  - Azshara (Kopp's 52–53) and Silithus (Kopp's 56).
  - Shaper's Terrace (58–60) and Blackmaw Hold: test only, no quest data.
  - Mount Hyjal: level-60 content; its flight masters are level 60 (`official` DB).
  - Felwood escorts without a group, and the Jaedenar elites.
- **Evidence and risks:**
  - Kopp 50–60 (`C`, https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/Alliance/003_Alliance_50to60.lua).
  - All 41 key Kopp quests are unchanged in Forever (`official` DB, sweep-guides §B.5).
  - No warlock trainer on Kalimdor (`community`).
  - Boats: check for dock portals (`official` L).
  - **Risk:** the transfer time is `theory`. If Felwood or Winterspring runs short, grind owlbeasts or furbolgs in Winterspring.
  - Time: 16.8 h.

### leg-10-burning-steppes-plaguelands: Burning Steppes & the Plaguelands · 55.0 → 60
- **Start:** = leg-09 end.
- **End:**
  - **Level 60, Ironforge.** Trained 60. Hearth: Chillwind Camp or Ironforge.
  - Flight paths add Morgan's Vigil, Chillwind Camp and Light's Hope.
- **Plan:**
  1. **Into Burning Steppes:** fly Stormwind → Lakeshire, then ride north into Burning Steppes. Learn the Morgan's Vigil flight path (Borgus Stoutarm 84.4, 68.2).
  2. **Burning Steppes, 55 → 56.8:**
     - **The True Masters (4183)** chain, which runs through Lakeshire, Stormwind and Morgan's Vigil.
     - Extinguish the Firegut, Dragonkin Menace, Tablet of the Seven.
     - Kopp's grind gate on Blackrock orcs (49, 55), as a top-up only.
  3. **Optional:** a Blackrock Depths quest run at ~56.5, with a group and its chains collected.
  4. **To the Plaguelands:**
     - Fly Morgan's Vigil → Stormwind → Ironforge (train 56) → Southshore.
     - Ride north to Chillwind Camp: learn the flight path (42.8, 85.0) and **bind**.
  5. **Plaguelands, 56.8 → 59.2:**
     - WPL: Clear the Way (5092), the Andorhal set, the Argent Dawn and Chillwind chains.
     - EPL: learn the Light's Hope flight path (81.5, 59.2). The Blightcaller Cometh, Demon Dogs, Carrion Grubbage, Zaeldarr the Outcast.
     - Merge Kopp's five WPL/EPL alternations into two visits. Train 58 via a Chillwind → Ironforge flight.
  6. **Finish, 59.2 → 60:**
     - Remaining Plaguelands quests, then Kopp's grind gate ("until 6,600 to 60").
     - Or Blackrock Depths, Stratholme or Scholomance with a group.
     - Train 60 in Ironforge.
- **Must include:** The True Masters; Chillwind Camp and Light's Hope flight paths; train 56/58/60.
- **Skips:**
  - Kopp's 56 Tanaris/Silithus return and his 59–60 Winterspring return.
  - Blasted Lands and Searing Gorge.
  - The Dreadsteed: post-route, a Dire Maul group chain.
- **Evidence and risks:**
  - Kopp 50–60 (`C`); BRD ~68% of a level at 57 (`community` B, preliminary).
  - Flight links (`community` L datamine).
  - Higher creature HP after the Nov 2 notes makes grinding slower (`official` L, https://us.forums.blizzard.com/en/wow/t/2360696/9).
  - Time: 18.2 h; total ≈ 102 h.

---

## 5. Time model (`theory`)

**Method.** XP needed per leg comes from the Classic table, which launch players' XP bars confirm is unchanged in Forever (https://race.aotc.gg/ ; https://www.warcrafttavern.com/forever/guides/experience/). Rates are XP per hour of /played and include each leg's own travel.

**Anchors:**
- Gnome Warlock, Wetlands 27→30: ~38k XP/h, possibly in a duo.
- Alliance non-hunters at 31–34: 25–32k XP/h.
- Leader (hunter) at 35–39: ~1 level per hour. Budget 1.3–1.5× that for a warlock.
- All three: `community` L, https://race.aotc.gg/
- Beta efficient questing at 1–20: 16–19k XP/h (`community` B, low weight, https://us.forums.blizzard.com/en/wow/t/2369852).

| Leg | Levels | XP needed | h | Cum. h | XP/h | Basis |
|---|---|---|---|---|---|---|
| 01 | 1 → 10.3 | 29,880 | 2.0 | 2.0 | 15k | Beta 1–10 personal best 1:29 with bugged wands is a lower bound (https://www.youtube.com/watch?v=KTC3LkIyEhU) |
| 02 | 10.3 → 18.3 | 102,440 | 5.8 | 7.8 | 18k | Beta 16–19k XP/h; Hall of Thanes adds about 1.2 levels |
| 03 | 18.3 → 23.5 | 125,280 | 5.5 | 13.3 | 23k | Deadmines ≈ 1 level; Redridge at ~26k XP/h (B) |
| 04 | 23.5 → 30.0 | 241,400 | 7.7 | 21.0 | 31k | Wetlands 27→30 at the benchmark rate; Duskwood ~28k |
| 05 | 30.0 → 35.3 | 294,230 | 8.8 | 29.8 | 33k | Board 31–34 shows 25–32k; dungeon bundles; city turn-ins |
| 06 | 35.3 → 40.1 | 370,240 | 10.2 | 40.0 | 36k | Leader 34.2→39.2 in 6.1 h × 1.4 ≈ 8.5 h, plus Felsteed and grind gates |
| 07 | 40.1 → 45.3 | 531,780 | 12.4 | 52.4 | 43k | Mount from 40; Riverglades 45k (`theory`); Uldaman bundle |
| 08 | 45.3 → 50.0 | 610,850 | 14.4 | 66.8 | 42k | Two zones plus a boat; Zul'Farrak or grind gate |
| 09 | 50.0 → 55.0 | 802,800 | 16.8 | 83.6 | 48k | ~1.4 h of transfers |
| 10 | 55.0 → 60 | 975,800 | 18.2 | 101.8 | 54k | Classic rates, slowed by the higher creature HP (Nov 2) |
| **Total** | | **4,084,700** | **≈ 102** | | | Band 85–118 h |

**Cross-checks:**
- 21 h to 30 sits between the racer benchmark (18 h) and the "realistic non-racer 22–28 h" from sweep-launch.
- 102 h to 60 is inside ConquestCapped's 100–120 h and the Factorizer simulation's 103–124 h (https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/).
- A racer-grade warlock would be about 0.8× this, roughly 80 h.
- The Classic Era solo record of 78 h 36 m real time is unverified (https://timesaver.gg/blog/how-long-to-level-60-wow-classic-era).

**Legacy notes (none apply on a fresh account):** *Well Rested* raises the rested rate and cap. *Talented* brings drain-tanking forward. *Frequent Flier* gives +20% flight speed, which suits this flight-heavy route. Source: sweep-official §2.6.

---

## 6. Hearths, flight paths, boats, trainer visits

**Hearth binds:**
1. Coldridge (start)
2. **Kharanos** (6)
3. **Stormwind** (15.8; reused after Deadmines and Duskwood)
4. **Menethil** (27.5)
5. **Southshore** (31.6; reused for the hearth back from the city stop)
6. **Booty Bay** (36; reused for the hearth back from Ratchet)
7. **Thelsamar** (40.1)
8. **Farholde Keep** (41.3)
9. Thelsamar (44.3, for Uldaman)
10. **Aerie Peak** (45.5)
11. **Gadgetzan** (47.8)
12. **Everlook** (53.5)
13. **Chillwind Camp** (56.8)

**Flight paths, in order:**

| # | Flight path | Level |
|---|---|---|
| 1 | Thelsamar (Ironforge is reached by Ride to Ironforge) | 12 |
| 2 | Ironforge | 14.4 |
| 3 | Stormwind and Lakeshire | 15.8 |
| 4 | Sentinel Hill | 16.2 |
| 5 | Darkshire | 23.5 |
| 6 | Menethil | 27.5 |
| 7 | Southshore | 31.6 |
| 8 | Refuge Pointe | 34.5 |
| 9 | Booty Bay | 36 |
| 10 | Ratchet | 40 |
| 11 | Farholde Keep | 41.3 |
| 12 | Aerie Peak | 45.5 |
| 13 | Gadgetzan | 47.8 |
| 14 | Marshal's Refuge | 50 |
| 15 | Auberdine, Astranaar, Talonbranch Glade | 52.5 |
| 16 | Everlook | 53.5 |
| 17 | Morgan's Vigil | 55 |
| 18 | Chillwind Camp, Light's Hope | 57–58 |

Source: launch-client datamine, https://foreverdb.net/travel

**Boat legs (6):**
1. Menethil → Southshore (31.6)
2. Booty Bay → Ratchet (40; hearth replaces the return)
3. Powderfuse → Steamwheedle (47.8)
4. Steamwheedle → Powderfuse (52.2)
5. Menethil or Stormwind → Auberdine (52.5)
6. Auberdine → Stormwind (55)

For comparison: lens A planned 5 (but its Theramore leg needs an undiscovered flight), lens B planned 7, and Kopp's Classic route uses about 9 between 32 and 43. Use the dock portal if a boat doesn't come (`official` L, https://us.forums.blizzard.com/en/wow/t/2401777/15).

**Trainer visits:**

| Levels | Where |
|---|---|
| 1, 4 | Coldridge |
| 6, 8, 10 | Kharanos |
| 12/14 | Ironforge (14.4) |
| 16 | Stormwind |
| 18 | Stormwind (Shaw stop) |
| 20 | Stormwind (after Deadmines) |
| 24/26 | Stormwind |
| 30/32 | Ironforge (31.6) |
| 34 | Ironforge |
| 36/38 | Stormwind (from Booty Bay) |
| 40 | Ironforge |
| 42/44 | Ironforge (before Uldaman) |
| 46/48 | Ironforge (between the Hinterlands and Tanaris) |
| 50/52 | Ironforge (on the transfer) |
| 54 | Stormwind |
| 56 | Ironforge (on the way to Southshore) |
| 58 | Ironforge (from Chillwind) |
| 60 | Ironforge |

- Skipped training levels: 22 and 28.
- Gold: training costs 206–207 g in total for 1–60 (`official` L, https://us.forums.blizzard.com/en/wow/t/2360696/9). Keep 100 g at 40 for riding in case the Felsteed doesn't cover it.

---

## 7. Deliberate skips (consolidated)

| Skip | Why | Source |
|---|---|---|
| Stormwind/Elwynn swing at 11 | The Voidwalker is weak at launch; its flight paths come at 15.6 anyway | https://us.forums.blizzard.com/en/wow/t/2401991 |
| Darkshore, Blackfathom Deeps, the Kalimdor sweep at 24–27 | Boats; launch racers stayed in the Eastern Kingdoms; demon quest spans two continents | §2 F5 |
| Succubus/Incubus (20), Felhunter (30) | Pet HP cut; multi-continent chains | §2 F6 and §2.2 |
| Protecting the Herd, Tharil'zun, Gar'im, Bellygrub, Defeat Nek'rosh, Stopping the Cycle, Saving Sharpbeak | Elite or group quests; launch pets can't tank | https://www.wowhead.com/forever/quest=98297 |
| Toxic Soil steps 5–11; Harvesters 3; The Quarry's Smith; ACA/Merchant's Favor chains | Materials or detours | https://www.wowhead.com/forever/quest=92749 |
| The Valor Family; Uncovering the Past if slow; Highland Hides | Spawn and drop problems | https://us.forums.blizzard.com/en/wow/t/2385912 |
| Songblade Search / Fallen in the Fen | Ends in Lakeshire at 31+ | https://www.wowhead.com/forever/quest=95795 |
| Ruins of Lordaeron, Wailing Caverns, SFK, SM, RFK, RFD, Maraudon, Sunken Temple, Drowned City, Gnomeregan (default) | Low Alliance quest value, far away, or broken at launch | https://us.forums.blizzard.com/en/wow/t/2402007 ; https://us.forums.blizzard.com/en/wow/t/2385588/288 |
| Cozy Sleeping Bag chain | Horde-held Barrens and Stonetalon stops plus a PvP-camped dam step, for ~3% XP | https://us.forums.blizzard.com/en/wow/t/2402504/15 |
| Shen'dralas, Mount Hyjal | Honored reputation gate with no flight path; Hyjal is level-60 content | https://www.wowhead.com/forever/quest=92841 |
| Kopp's Shimmering Flats, Stonetalon, Desolace, Dustwallow, Swamp of Sorrows (unless bail-out), Feralas, Blasted Lands, Searing Gorge, Azshara, Silithus | Replaced by Riverglades and the Eastern Kingdoms blocks; travel-heavy | `C`, sweep-guides §C |
| Duskwood return at 30–32 (launch-common) | Duskwood is done at 23.5–26; the northern arc carries City of Dalaran | §1.1 |

---

## 8. Switch triggers and open questions (ordered by impact)

1. **Riverglades has no quest data.**
   - Trigger in leg 07: under ~35k XP/h in the first 1.5 h, or the zone runs dry before 43. Then switch to Kopp's 41–43 (Swamp of Sorrows, then Stranglethorn).
   - Re-check Wowhead, QuestieDB and race.aotc.gg daily. The leader was in Swamp of Sorrows next to Riverglades at 39.2.
   - The id scan (§1.4a) found none in 80000–90500 either.
2. **Stranglethorn early switch (leg 06):** if quests run out before 38.5, go to Riverglades at 38 and take the Felsteed as an out-and-back at 40.
3. **Pet HP hotfix:** if Blizzard restores pet HP, go back to RXP's Voidwalker swing at 11 and re-evaluate the Kalimdor sweep and the Sayaad (F1, F5, F6).
4. **Felsteed vs riding:** if the Felsteed needs Apprentice Riding, buy riding from Binjy at Steelgrill's Depot on the Ironforge step of leg 06 (+~15 min). https://www.wowhead.com/forever/npc=7954
5. **Hall of Thanes quest minimum levels:** if they can't be taken at 14.4, use B's timing (Westfall first, Hall of Thanes at ~16.5).
6. **Boat loop order:** confirm in game that Menethil → Southshore is a direct leg.
7. **Riverglades travel:** confirm the Badlands foot entry and the Farholde → Powderfuse Port ride time.
8. **Quest XP after the Nov 2 "adjusted experience values":** unknown direction. The beta dungeon tables differ by up to 2× (https://us.forums.blizzard.com/en/wow/t/2379420/583).
9. **Givers of 88756 Bring Back a Bang (Direforge Hill, Wetlands) and of the Thandol Span "…of the Lost" chain (87318 → 88757 → 88758).** Their zones are now known (§1.4); their givers' coordinates are not. Leg 05 includes both as "take if the giver is on your path".

---

## 9. Key sources

**Official:**
- Dev notes, Nov 2: https://us.forums.blizzard.com/en/wow/t/2360696/9
- Dev notes, Oct 1 / Oct 8: https://us.forums.blizzard.com/en/wow/t/2360696/4 ; https://us.forums.blizzard.com/en/wow/t/2360696/5
- Transport portals: https://us.forums.blizzard.com/en/wow/t/2401777/15
- New dungeons: https://worldofwarcraft.blizzard.com/en-us/news/24301455
- Found Photos recap: https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap
- Now Live: https://worldofwarcraft.blizzard.com/en-us/news/24315820
- Wowhead Forever DB (`https://www.wowhead.com/forever/quest=<id>`, `npc=<id>`) for every id above, checked with `tools/wh.mjs` by the sweeps, by A, by B or by the judge.

**Launch community:**
- https://race.aotc.gg/ (trails in `WORK/raw/aotc-trails-2006.txt`)
- https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever
- https://foreverdb.net/travel ; https://senseos.gg/guides/wow-forever/flight-paths-and-travel/
- Forum threads cited inline: 2401991, 2401780, 2401796, 2402437, 2402007, 2401444, 2401834, 2402504.

**Beta community:**
- https://us.forums.blizzard.com/en/wow/t/2385588/288
- https://us.forums.blizzard.com/en/wow/t/2395335
- https://us.forums.blizzard.com/en/wow/t/2383482
- https://us.forums.blizzard.com/en/wow/t/2356140
- https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/

**Classic:**
- Kopp's VanillaGuide tables: https://github.com/osthoma/VanillaGuide/tree/master/GuideTables/Alliance
- Judgement: https://www.warcrafttavern.com/wow-classic/guides/alliance-leveling-guide/
- XP rules: https://warcraft.wiki.gg/wiki/Experience_point
