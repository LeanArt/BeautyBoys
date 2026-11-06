# Sweep "guides": written guide sites, route addons and Classic baselines (Gnome Warlock 1–60, WoW: Forever)

Researched **2026-11-05, 18:45–19:40 UTC** (launch +1 day). Sweep owner: "guides".

**Tags.** Every fact carries:
- a **confidence** tag: `official` / `beta-tested` / `community` / `theory`;
- an **era** tag: `launch` (Nov 2–5 evidence), `beta` (Sept 17 – Oct 23), `pre-launch plan` (written before Nov 4 with no play data above 30), or `Classic` (carry-over).

This file adds to `research/landscape.md`, `research/gamedata.md`, `sweep-official.md`, `sweep-wowhead.md`, `sweep-forums.md`, `sweep-launch.md` and `sweep-youtube.md`. It does not repeat them. It restates a fact only when this sweep found new evidence for it.

**Working aids written by this sweep (for the leg authors; research only, do not publish verbatim):**
- `WORK/raw/kopp-alliance-20-60-steps.txt`: Brian Kopp's vanilla Alliance guide for levels 20–60, all 51 sections step by step with vanilla coordinates, extracted from the VanillaGuide addon tables.
- `WORK/raw/kopp-30-60-keysteps.txt`: only the hearth, bind, boat, grind and skip lines for 30–60.

---

## Route-changing findings (summary)

1. **No guide or addon has a Forever-specific route above 30 at launch. Everyone above 30 is following a Classic route.** `community, launch`
   - **Zygor**: released Nov 3 with "new and updated 1-30 Forever leveling guides" and "Classic 31-60 guides for 30+ leveling". Forever 30–60 is "coming soon".
   - **RestedXP**: uses Classic Era routes for 35–60.
   - **TUGs (Guidelime)**: updated Nov 5. "lvl 12-30 was written with Beta Access", and the Classic 30–60 route is included.
   - **Joana's Guides**: Nov 4 update. Covers Forever **1–20 only**.
   - **QuestieDB** (Nov 5, v1.0.11): **zero Forever-new quests**. The highest quest id is 9665, and there are no Riverglades or Shen'dralas entries.

   → **The Classic Alliance route is the correct default for 30–60.** It is also what every addon user is running this week.
2. **Classic baseline for 30–40 (Brian Kopp's vanilla Alliance guide):** `Classic`
   Hillsbrad 30–31 → Alterac 31 → Arathi 31–32 → STV 32 → Thousand Needles (Shimmering Flats) 32–33 → Stonetalon 33 → Desolace 33–35 → STV 35–36 → Alterac 36–37 → Arathi 37–38 → Dustwallow 38 → STV 38–40.
   - RestedXP's Classic-family Alliance guide also opens its "32-47" group with **"32-33 Shimmering Flats"** (from the public RXP repo).
   - The launch leader's trail at 34–38 was Arathi → Thousand Needles → STV → Desolace → Thousand Needles → STV (sweep-launch). That is the same Classic loop, so **the Classic 30–40 loop is launch-validated up to 38.** `community, launch`
3. **The Classic quests for 30–60 are still in Forever, unchanged.** `official DB`
   - All **41 of 41** key Kopp 30–60 quests I checked exist in the Forever DB, and their tooltip text and requirements are **identical to Classic**: Costly Menace, Hints of a New Plague?, Northfold Manor, Reagents for Reclaimers, Kodo Roundup, Venture Company Mining, Mirages, Rhapsody's Kalimdor Kocktail, Timbermaw Ally, The True Masters, Clear the Way, Chillwind Horns, and others.
   - Wowhead also has **no Forever-new quests above level 42**.
   - → **43–60 is Classic carry-over** plus new dungeons and Hyjal. Nobody has reported a removed Classic quest.
4. **Riverglades cannot be routed step by step yet.** `community + official DB`
   - Not one guide site, Wowhead, QuestieDB, Zygor or RestedXP names a single Riverglades quest as of Nov 5.
   - The guides agree only on the level band: **35/36–44/45**, used "instead of most of Stranglethorn".
   - **Insertion point (theory):** Kopp's 40–41 Badlands leg binds at **Thelsamar**, and his 41 Swamp of Sorrows leg sits on the Riverglades border. The new **Farholde Keep flight path links to Thelsamar, Lakeshire and Morgan's Vigil**. So Riverglades slots in at about **38/40–44**, replacing Kopp's weakest legs: 41–42 Desolace, 42–43 STV and part of 43–45 Tanaris/Feralas.
5. **Forever's new 30–40 quests sit in the hubs the Classic loop already visits.** They add density without adding travel. `official DB + theory`
   - **Southshore**: The Shamed Lieutenant (30), the City of Dalaran attunement (33), Strahnbrad Mystery (36), and Loremaster Dibbs → Drowned City (40).
   - **Booty Bay**: new quests at 33–38.
   - **Stromgarde (Arathi)**: new quests at 38–39.
   - **Nijel's Point**: Vahlarriel's Vengeance (33).
   - **The Harborage (Swamp of Sorrows)**: new quests at 34.
6. **Skip Shen'dralas, as Classic guides already skipped the centaur rep quests.** Kopp, at 33–35 Desolace: "I SKIP both of the faction centaur quests. It's just a useless grind." Forever now puts **Honored** with Magram or Gelkis in front of the Valley of Bones chains (sweep-wowhead). That doubles the reason to skip. `Classic + official DB → theory`
7. **Classic speed guides run few dungeons from 30 to 60.** `Classic`
   - **Kopp**: Uldaman at 45–46 ("highly suggest… much faster than grinding"); Zul'Farrak optional at 49–50; BRD, Scholomance or Stratholme only as an alternative to the 59–60 grind.
   - **Judgement**: Stockade, SM, Uldaman, Zul'Farrak and a BRD quest run, but "advises against them without an organized group".
   - **RestedXP's dungeon-rating table in its Forever DB is copied verbatim from Classic.** No Forever dungeon is rated yet. Ratings for Alliance quest value: Deadmines, Stockade, BFD, Gnomeregan, Uldaman, ZF, Maraudon and Sunken Temple = 3/3; SM = 1/3.
8. **A warlock synergy in the Classic loop (theory):** Kopp's 35–41 legs ride the **Ratchet ↔ Booty Bay boat three times** (at 35, 38 and 41). The **Felsteed quest giver, Strahad Farsan, is in Ratchet**, so the level-40 mount quest can ride along on the 40–41 STV → Ratchet → Theramore leg at no extra travel cost.
9. **Pace benchmarks from written guides** `community`:
   - Hammerdance's Alliance route took **18–22 h /played to 30** in beta (ConquestCapped, Nov 2). That matches the launch Gnome Warlock's ~18 h (sweep-launch).
   - ConquestCapped projects **100–120 h** to 60; a Factorizer simulation gives **103–124 h**; LFCarry says **~150 h**.
   - A Classic Era solo speedrun record is quoted at **78 h 36 m real time** (Timesaver; unverified).
10. **Guides disagree on the Dwarf/Gnome 10–20 path.** `community, pre-launch`
    - LepreStore and ExpCarry: Loch Modan → Wetlands from 18–22.
    - mmonster: Loch Modan → Redridge 16–20.
    - RestedXP's maintained Forever route: Elwynn 11–12 → Loch Modan 12–14 → Westfall → Darkshore → Redridge.

    Only RestedXP's route has launch-maintained step data. The aggregator sites (rankedboost, LepreStore, AccountShark, ExpCarry, mmonster, LFCarry, wowforeverguides) are beta or plan-based, partly boosting-shop content, and carry **no launch data**.
11. **New Alliance Scarlet Monastery quest: "Past Due"** (Q:96800, level 38, "Retrieve … The Lost Magic of the Runemasters from the Scarlet Monastery"). Method says it is picked up in Dalaran.
    - That makes three Alliance SM quests.
    - SM still rates 1/3 for Alliance quest value (RXP) and "~10 % of a level" (forums), and ConquestCapped calls it "weak for Alliance".
    - Also skip as Alliance: SFK, RFK and RFD (ConquestCapped). `official DB + community`
12. **Map changes back the coordinate warnings.** `community, pre-launch (beta client)`
    - Redridge's map is **widened on the east side** for the new path toward Riverglades and the Badlands (Kami Labs map comparison). warcraft.wiki.gg marks Redridge, Stormwind, Alterac, Desolace and Eastern Plaguelands as "substantively changed".
    - That fits sweep-official's finding of shifted Redridge and Stormwind coordinates.
    - **Kopp's and other Classic coordinates for Redridge and Stormwind must not be reused blindly.**

---

## A. Forever guide sites: what each one says (per-source zone order with levels)

How to read this:
- Era: almost all of these were written **before launch**, from beta (capped at 30) plus Blizzard announcements. "Updated Nov 4/5" usually means a launch-date refresh, not new play data.
- Confidence: everything in §A is `community` unless marked.
- Blocked: sites that refused the fetcher (403) are listed in §A.3 and were not worked around.

### A.1 Per-source Alliance zone order

| Source (date) | 1–20 (Dwarf/Gnome where given) | 20–30 | 30–40 | 40–50 | 50–60 | Era / notes |
|---|---|---|---|---|---|---|
| **RestedXP Forever** (GitHub, HEAD Nov 5) | Coldridge 1–5 → Dun Morogh 5–11 → Elwynn 11–12 (+Voidwalker) → Loch Modan 12–14 → Westfall 14–15 → Darkshore 15/16–19 → Redridge 19–20 | Darkshore/Ashenvale 20–21 → paid "21-23 Ashenvale/Stonetalon" | Classic Era route (35–60) | Classic Era | Classic Era | `community, launch-maintained`. Details in sweep-launch §6.2. https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever |
| **Zygor** (blog Nov 3; overview Oct 30) | Forever 1–30 guides | Forever 1–30 guides | **Classic 31–60 guides** | Classic | Classic | Also "4 new Dungeon guides" (not named) and a Skyborne 1–13 guide. https://zygorguides.com/blog/forever-launch-test/ ; https://zygorguides.com/blog/zygors-world-of-warcraft-forever-guides-are-now-available/ |
| **TUGs / Guidelime** (CurseForge, file Nov 5) | All starting zones; 12–30 written in beta | " | Classic 30–60 route ("30-60 will be updated after release") | " | " | Dungeon quest guides "up to Dalaran". https://www.curseforge.com/wow/addons/guidelime_tugs |
| **Joana's Guides** (CurseForge, Nov 4, v4.00.03) | **Forever 1–20** | – | – | – | – | **New since landscape.md**, which said "no Forever version". No Alliance 1–60 speed route from Joana was found (see §B.4). https://www.curseforge.com/wow/addons/joanasguides |
| **Questie / QuestieDB** (v12.6.1 + v1.0.11, Nov 5) | Pins only, no route | | | | | The Forever DB is converted from Era data. It "does not discover new or relocated content", has max quest id 9665, and has **0** entries for zone 16591 (Riverglades) or 16651 (Shen'dralas). Forever-new quests get no map pins. https://github.com/Questie/QuestieDB/blob/master/docs/forever-data.md ; https://github.com/Questie/Questie/releases ; https://kami-labs.fr/en/wow-forever/addons-leveling-wow-forever/ |
| **ConquestCapped** (Kir, "Updated 02 Nov 2026") | 1–12 start zone; 12–18 Westfall/Loch/Darkshore + HoT at 14–17; 18–21 Redridge, end of Westfall + DM at 18–22 | 21–25 Wetlands (+Excavation quests), BFD 23–26; 24–27 Duskwood/Ashenvale + Stockade; 27–30 Wetlands/Hillsbrad/Duskwood + Excavation 27–30 | Arathi, Desolace, STV, Alterac, Thousand Needles; SM, RFK, Gnomeregan, Dalaran, Drowned City | 36–45 Riverglades (36–44), **Shen'dralas ~38–45 (estimate; mobs 41–43, some 37–38, elites 45)**, Dustwallow, Badlands, SoS; Krol'dok, RFD, Uldaman. 40–50 Tanaris, Feralas, Hinterlands, Searing; ZF, Maraudon, Alcaz | 48–55 Un'Goro, Felwood, Azshara, Blasted; ST, BRD. 50–60 BS, WPL/EPL, Winterspring, Silithus; LBRS, Blackmaw, Shaper's. **Hyjal 55–60 (mobs 54–60, estimate)** | `pre-launch plan` for 30–60. Gives per-dungeon Alliance verdicts and measured quest XP (§C.3). https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/ |
| **mmonster.co** (first published Sep 26; page history "Nov 5, 12:30 UTC", body "As of Oct 21") | **Dwarf/Gnome:** Dun Morogh 1–10 → Loch Modan 10–16 → Redridge 16–20 | Duskwood 20–25, Wetlands 22–27, Hillsbrad 25–30, Ashenvale 25–30 | Arathi 30–35, STV 30–40, Desolace 30–38, Dustwallow 35–40, **Riverglades 36–40** | **Riverglades 40–44**, Badlands 38–45, Tanaris 42–50, Feralas 42–48, Hinterlands 45–50 | Un'Goro 48–55, Felwood 50–55, BS 52–58, WPL 52–58, EPL 54–60, Winterspring 55–60, **Hyjal 55–60** | Says 30–60 is checked "against the live game now" but shows no data. Treat as plan. https://mmonster.co/wow-forever/guides/leveling/1-60 |
| **ExpCarry** (dateModified Oct 27) | **Dwarf/Gnome:** Dun Morogh 1–10 → Loch Modan 10–15 → HoT 13–18 → Loch or Redridge 18–22 | Wetlands 22–30 (+Excavation); shared table: 20–25 Duskwood/Wetlands/Ashenvale (Stockade, BFD), 25–30 Wetlands/Duskwood/Ashenvale | 30–35 STV/Arathi/Desolace + Dalaran; 35–40 Riverglades/STV + Drowned City | 40–45 Riverglades/Tanaris/Feralas + Krol'dok; 45–50 Tanaris/Feralas/Hinterlands + Alcaz | 50–55 Un'Goro/Felwood/BS; 55–60 Plaguelands/Winterspring/Silithus + Blackmaw/Shaper's | Already in gamedata.md as EXPC-ALLY; unchanged since. https://expcarry.com/wow-forever-leveling-guide-alliance |
| **LepreStore** (Graham Smith; Oct 14, upd. Oct 26) | Dwarf/Gnome: Dun Morogh → Loch Modan 10–18 → Wetlands; 18–24 "second hub, then Redridge; Wetlands once manageable"; DM or HoT optional | 24–30 Wetlands + Duskwood (Ashenvale alternative); Excavation | 30–35 Thousand Needles + Desolace; Arathi + STV "as they become level-appropriate" | 35–45 Riverglades + Badlands/Dustwallow/STV; 40–50 Dustwallow/Badlands first, then Feralas/Tanaris/Hinterlands; "relevant Shen'dralas hubs" | 50–55 Searing + Blasted first, then Un'Goro/Felwood; 55–60 Plaguelands + Winterspring, Silithus late | Explicitly "planning corridors", "no verified post-launch 1-60 timing". https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-leveling-guide-1-60/ |
| **RankedBoost** (no date or author) | Dun Morogh 4–12; Westfall 9–18, Loch 10–18, Darkshore 11–19, Redridge 15–25 | Duskwood 19–30, Wetlands 20–30, Ashenvale 19–30, Hillsbrad 20–31 | STV 30–50, Arathi 30–40, TN 24–35, Desolace 30–39, Alterac 27–39, Badlands 36–45, SoS 36–43, Dustwallow 36–43, Riverglades 36–44 | Tanaris 40–50, Feralas 41–49, Hinterlands 41–56, Searing 43–56 | Un'Goro 48–55, Felwood 47–54, Azshara 42–55, Blasted 46–55, BS 50–59, WPL 46–57, EPL 54–59, Winterspring 55–60, Silithus 55–59 | These are **Wowhead DB ranges**, not a route. One claim to discard: Riverglades by "boat from Gadgetzan" (the boat sails from Steamwheedle Port, per sweep-official). https://rankedboost.com/world-of-warcraft/forever/leveling/ |
| **AccountShark** (Kiran Vale, Sep 29) | 1–12 start zones; HoT 13–18 ("Alliance-side convenience") | 20–33 Wetlands + Excavation 24–29 + Dalaran 28–33 | 33–45 STV + Drowned City + Riverglades + Krol'dok | 45–53 Dustwallow, Tanaris, Feralas, Hinterlands, Searing, Un'Goro + Alcaz | 53–60 Blackmaw, Shaper's, Hyjal | Tip: "Batch Wetlands quests so Hall of Thanes leftovers and Excavation Site share travel." `pre-launch plan`. https://accountshark.net/blog/wow-forever-leveling-guide-1-60-2026 |
| **LFCarry** ("Updated 2026-11-04", but written in future tense) | 1–20 start zones + HoT/RoL | 20–40 Wetlands (+Excavation, "26–31 on beta") → Dalaran → Riverglades from mid-30s → Drowned City | 40–60 Riverglades to mid-40s + Krol'dok → Alcaz → "the Classic 45–55 zones" → Blackmaw → Un'Goro + Shaper's → Hyjal | | | Time: ~150 h (20 h for 1–20, 50 h for 20–40, 80 h for 40–60). Boosting seller. https://lfcarry.com/guides/wow-forever-leveling ; new zones: https://lfcarry.com/guides/wow-forever-new-zones |
| **wowforeverguides.com** (Sep 12, upd. Nov 4 02:02 EST) | 1–12 start; 12–20 Westfall/Loch/Darkshore/Redridge + HoT/RoL | Duskwood/Wetlands/Ashenvale/Hillsbrad + Excavation | 30–40 "planned": Arathi/Desolace/STV; Riverglades from 36; Drowned City | 40–50 Tanaris/Feralas/Hinterlands; Riverglades to 44; Krol'dok, Alcaz | 50–60 Un'Goro/Felwood/Plaguelands/Winterspring; Blackmaw, Shaper's | Affiliate site (RestedXP/Zygor). It wrongly lists "Razorfen Downs (25+), Uldaman (30+)" in 20–30. https://wowforeverguides.com/leveling |
| **Warcraft Tavern** warlock leveling (no date) | Minimum-level table only. Level 1: start zones; 10: Westfall/Loch/Darkshore; 15: Redridge/Stonetalon; 18: Ashenvale; 20: Wetlands/Hillsbrad/Duskwood; 25: Thousand Needles | | 30: Alterac/Arathi/Desolace/STV; **35: Badlands/Dustwallow/Feralas/Riverglades/SoS** | **40: Shen'dralas/Tanaris/Hinterlands**; 43: Searing; 45: Azshara/Felwood/Blasted; 48: Un'Goro | 50: BS/WPL; 53: Winterspring/EPL; 55: Silithus/Deadwind; **60: Hyjal** | Same table as gamedata §3.2, re-checked. **No launch update.** WT's leveling index has class guides and an XP guide only, with **no zone or route guide**. https://www.warcrafttavern.com/forever/guides/warlock-leveling/ ; https://www.warcrafttavern.com/forever/guides/type/leveling/ |
| **Method** (Geekmandem, Nov 4) | Dungeon table only | HoT 13–18, RoL 15–20, DM 17–20, WC 18–24, SFK 21–26, BFD 23–28, Excavation 24–29, Stockade 25–29, Dalaran 28–33 | Gnomeregan 29–34, RFK 30–38, SM 30–46 (GY 30–38 / Lib 33–41 / Arm 36–44 / Cath 38–46), Drowned City 35–40, Uldaman 37–45, RFD 37–45 | ZF 40–47, Krol'dok 40–45, Maraudon 45–51, Alcaz 48–53 | ST 50–55, BRD 52–60, Blackmaw 55–60, BRS 57–60, Shaper's 58–60, DM/Strat/Scholo 58–60 | Says the Nov 2 notes "left dungeon XP unchanged". Recommends "run every dungeon at least once with all its quests" (contradicted by the launch behaviour in sweep-launch). Names the Alliance quest **"Past Due"** (finding 11). https://www.method.gg/wow-forever/wow-forever-dungeon-xp-explained-and-all-dungeons-by-level |
| **games.gg** zone guides (Mostafa Salem, Sept 22) | (Dun Morogh, Westfall, Elwynn… in gamedata) | | **STV: "30–45 zone done in three visits: arrive 30–32, return at 37, finish at 42–44"**; the middle visit lists Arathi, Badlands and Riverglades as places to go next | **Hinterlands: Alliance arrives 43–44, leaves 49–50**; Aerie Peak FP (11.1, 46.2); Jintha'Alor finale at 50 (Saving Sharpbeak, group of 3) | | These are **Classic content relabelled**: "nothing announced rewrites the zone's hubs", and no new quests are listed. https://games.gg/world-of-warcraft/guides/wow-forever-hinterlands-leveling/ ; https://games.gg/world-of-warcraft/guides/wow-forever-stranglethorn-vale-leveling-guide/ (snippet) |
| **Mein-MMO** (Karsten Scholz, Oct 30; page 1 of 3) | Dwarf/Gnome: Dun Morogh → Loch Modan | – | – | – | – | Pages 2–3 not fetched. https://mein-mmo.de/en/?p=1594067 |

### A.2 Consensus and disagreements across the Forever sites (30–60)

| Band | What most sites say | Disagreements | Tag |
|---|---|---|---|
| 30–35 | Arathi, Desolace, STV; also Alterac/Hillsbrad (Dalaran 28–33), Thousand Needles | LepreStore starts with Thousand Needles + Desolace; RankedBoost lists "STV + Thousand Needles" for Alliance 31–40 | `community, pre-launch plan`; the launch leader confirms Arathi/TN/STV/Desolace (sweep-launch) |
| 35–45 | **Riverglades** (36–44 / 35–45) + Drowned City 35–40 + Krol'dok 40–45; STV/Badlands/Dustwallow/SoS as fallbacks | Riverglades start: 35 (WT), 36 (DB, mmonster), "38–43 Alliance" (one search snippet). mmonster splits it 36–40 + 40–44 | `pre-launch plan` |
| 40/43–50 | Tanaris, Feralas, Hinterlands (+Searing); ZF, Maraudon, Alcaz 48–53 | Shen'dralas: "40+" (WT), "~38–45 estimated" (ConquestCapped), "no level" (others); LepreStore puts Dustwallow/Badlands first | `pre-launch plan` |
| 50–55 | Un'Goro, Felwood (+Azshara, Blasted, Searing, BS) | LepreStore: Searing/Blasted before Un'Goro | `pre-launch plan` |
| 55–60 | WPL/EPL, Winterspring, Silithus, BS; Blackmaw 55–60, Shaper's 58–60 | **Hyjal**: "60/endgame" (Blizzard, WT, LFCarry, wowforeverguides) vs "55–60" (mmonster, ConquestCapped estimate, LFCarry's own table) | `official` for "endgame" (sweep-official: both flight masters are level 60) |

**Verdict (theory):** the Forever sites add **no 30–60 information beyond Blizzard's announcements, the Wowhead DB ranges and the Classic zone list.** For step-level routing, the Classic baselines in §B are the only usable source.

### A.3 Sites that blocked the fetcher or had nothing usable (not worked around)

| Site | Result |
|---|---|
| Icy Veins (`/wow-forever/affliction-warlock-leveling`, `/zones-and-maps`) | HTTP 403. Snippets: zone pairs by bracket, capped at 30; Riverglades "35-45". https://www.icy-veins.com/wow-forever/zones-and-maps |
| Mobalytics (`/guides/zone-map-level-ranges`, Kargoz 1–60) | HTTP 403. Snippet: zone map updated Sep 23, 2026. https://mobalytics.gg/wow-forever/guides/zone-map-level-ranges |
| Overgear 1–60 | HTTP 403 now. gamedata.md already has its 1–30 route. https://overgear.com/guides/wow-forever/1-60-leveling-guide/ |
| EpicCarry (snippet "updated Oct 30… beta-tested through 30, provisional beyond"), playnews.gg | HTTP 403. https://epiccarry.com/blogs/wow-forever-leveling-guide/ |
| Wowhead Forever guides (`/forever/guides/leveling`, "Forever Zones Overview" by Serenal, 2026/09/17) | Body is JS-rendered; only the header came through. https://www.wowhead.com/forever/guide/zones-maps-locations-rewards |
| Maxroll | No WoW Forever leveling content found by search. |
| RestedXP shop/community pages | HTTP 403 (shop.restedxp.com). The free route was read from GitHub instead. |

---

## B. Classic Era baselines (default for 30–60 where Forever data is missing)

### B.1 Brian Kopp's Alliance guide (vanilla). The most complete public step-by-step Alliance speed route

- **Source:** the VanillaGuide addon tables. The addon was "Originally created for Joana's Horde Guide… with Brian Kopp's Alliance Guide by Kira and Cdlp". Repo `osthoma/VanillaGuide`, last commit 2018-04-21. Files:
  - https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/001_Introduction.lua
  - https://github.com/osthoma/VanillaGuide/tree/master/GuideTables/Alliance
- **Era and confidence:** `Classic`, `community`. It is the vanilla 1.12 world, with the same Classic quest ids that Forever kept (§B.5).
- **Coordinates are vanilla coordinates.** For Redridge and Stormwind they may be off in Forever (sweep-official §5.5).

**Section list (exact titles):**

| Band | Kopp sections in order |
|---|---|
| 12–20 | 12-14 Darkshore · 14-17 Darkshore · 17-18 Loch Modan · 18-20 Redridge |
| 20–30 | 20-21 Darkshore · 21-22 Ashenvale · 22-23 Stonetalon · 23-24 Darkshore · 24-25 Ashenvale · 25-27 Wetlands · 27-28 Redridge · 28-29 Duskwood · 29-30 Ashenvale · 30 Wetlands |
| 30–40 | 30-31 Hillsbrad · 31 Alterac · 31-32 Arathi · 32 STV · 32-33 Thousand Needles (Shimmering Flats) · 33 Stonetalon · 33-35 Desolace · 35-36 STV · 36-37 Alterac · 37-38 Arathi · 38 Dustwallow · 38-40 STV |
| 40–50 | 40-41 Badlands · 41 Swamp of Sorrows · 41-42 Desolace · 42-43 STV · 43 Tanaris · 43-45 Feralas · **45-46 Uldaman** · 46-47 Hinterlands · 47 Feralas · 47-48 Tanaris · 48 Hinterlands · 48-49 STV · 49-50 Blasted Lands |
| 50–60 | 50-51 Searing Gorge · 51-52 Un'Goro · 52-53 Azshara · 53-54 Felwood · 54 Tanaris · 54 Felwood · 54-55 Winterspring · 55-56 Burning Steppes · 56 Tanaris · 56 Silithus · 56-57 WPL · 57-58 EPL · 58 WPL · 58 EPL · 58-59 WPL · 59-60 Winterspring |

**Hearth-bind chain, 30–60** (from the guide text; shows the hub logic):

Southshore (30) → Ironforge (32, before STV) → Nijel's Point (33) → Booty Bay (35) → Menethil (36) → Southshore (36–37) → Theramore (38) → Booty Bay (38–40) → **Thelsamar (40, Badlands)** → Darkshire (41) → Nijel's Point (41–42) → Booty Bay (42–43) → Gadgetzan (43) → Feathermoon (43–45) → Aerie Peak (46) → Feathermoon (47) → Gadgetzan (47–48) → Ironforge (48) → Booty Bay (48–49) → Ironforge (50) → Darnassus (50–51) → Astranaar (52–54) → Everlook (54–55) → Ironforge (55) → Gadgetzan (56) → Cenarion Hold (56) → Ironforge (56–58) → Everlook (59–60).

**Key tricks and skips in Kopp's text** (`Classic`; quotes from `raw/kopp-30-60-keysteps.txt`):
- **Grind gates instead of quests:**
  - "if I'm not 31… I grind till I am" (Southshore murlocs)
  - "grind here until I'm 32" (Northfold Manor, Arathi 33, 27)
  - Gelkis centaurs (Desolace 37, 80) "until 35"
  - basilisks and raptors (STV 33, 39) "until you're 40"
  - whelps in the Badlands ravine (41)
  - Hinterlands trolls and wolves (46–47)
  - Tanaris ogres (48)
  - Burning Steppes orcs (56)
  - 59–60 "grinding until im 6600 to 60… or do BRD, scholo, or strat"
- **Deathskip:** "If your Hearthstone is up, use it, otherwise die so you end up at Booty Bay"; also "die on purpose" at Everlook and Cenarion Hold.
- **Pre-buy:** "Buy some Bloodstone Ore for a quest later in Stranglethorn… If there is none check the AH in Booty Bay."
- **Skips:**
  - both Desolace centaur faction quests ("useless grind")
  - "Special Forces" and most follow-ups marked "SKIP the next part"
  - Saving Sharpbeak and other group elites
  - Maury's Key ("If you don't find this after an hour just abandon")
  - escort quests without a group
- **Dungeons:** Uldaman at 45–46 ("I highly suggest you do Uldaman… much faster than grinding"); Zul'Farrak optional at 49–50 ("If you don't want to do Zul Farrak… grind here [Blasted Lands] until you're about 13k from 50"); BRD, Scholomance or Stratholme as an alternative to the final grind.
- **Travel spine:**
  - Menethil ↔ Theramore boat (33, 36, 38, 41, 47, 53, 55)
  - Ratchet ↔ Booty Bay boat (35, 38, 41, 49)
  - Feathermoon ferry
  - flight paths via Ironforge
  - running into STV through Duskwood (Darkshire flight, "run to 44, 66 and go south")

### B.2 Judgement's Classic WoW Alliance Leveling Guide (2019, Warcraft Tavern). A second Classic baseline for 30–60

`Classic`, `community`. Written for Human Paladins; non-humans join at the Loch Modan or Darkshore section at 9–11. https://www.warcrafttavern.com/wow-classic/guides/alliance-leveling-guide/

| Band | Judgement sections |
|---|---|
| 30–40 | 30-31 Wetlands/Arathi/Hillsbrad · 31-32 Shimmering Flats · 32 Duskwood · 32-33 STV · 33-34 Alterac · 34-35 Desolace (Rock Pulverizer) · 35 Badlands · 35-36 STV · 36-37 Arathi · 37-38 Alterac · 38 Dustwallow · 38-39 Swamp of Sorrows · 39-40 Badlands |
| 40–50 | 40 Desolace · 40-41 STV · 41 Arathi · 41-42 SoS · 42 Badlands · 42-43 STV · 43-44 Tanaris · 44-45 Feralas · 45 Tanaris · 45-46 Hinterlands · 46-47 STV/Grind/Zul'Farrak · 47-48 Searing Gorge · 48 Feralas · 48-49 Tanaris · 49 Blasted Lands · 49-50 Felwood |
| 50–60 | 50-51 Un'Goro · 51 WPL · 51-52 Burning Steppes · 52-53 Un'Goro · 53-54 Azshara · 54 Felwood · 54-55 W/E Plaguelands · 55 Burning Steppes · 55-56 Various · 57-58 Winterspring · 58 Silithus · 58-60 Winterspring |

- **Dungeons:** "recommended for XP in gaps": Stockade (24–29), SM (37–42), Uldaman (40–46), ZF (45–50), BRD quest run (52–59). He "advises against them without an organized group".
- **Kopp vs Judgement:** both run the same Arathi / Alterac / STV / Shimmering Flats / Desolace / Dustwallow loop at 30–40, the same Tanaris / Feralas / Hinterlands block at 43–48, and the same Un'Goro / Felwood / Azshara / Winterspring / Plaguelands / Burning Steppes / Silithus block at 50–60.
  - Judgement adds more Badlands and Swamp of Sorrows at 35–42 and Searing Gorge at 47–48.
  - Kopp uses Searing Gorge at 50–51.

### B.3 RestedXP: the Classic-family Alliance route (public parts only)

The paid Classic Era 20–60 guide is not public, and its shop pages return 403. What the public repo shows (https://github.com/RestedXP/RXPGuides, HEAD 5d840d7, Nov 5):
- **Dwarf/Gnome 1–20 has the same section structure in Classic and in Forever.**
  - Classic (`Guides/Classic-Alliance-1-14_DwarfGnome.lua`, `Guides/Classic-Alliance-11-20.lua`): 1-6 Coldridge → 6-11 Dun Morogh → 11-12 Elwynn (Dwarf/Gnome) / 11-12 Voidwalker Quest → 12-14 Loch Modan → 13-15 Westfall → 14-16 / 16-19 Darkshore → 19-20 Redridge → 20-21 Darkshore/Ashenvale → paid "RestedXP Alliance 20-30\21-23 Ashenvale/Stonetalon".
  - Forever differs only in boundaries (Coldridge 1-5, Dun Morogh 5-11), an extra "15-16 Loch Modan" section, and the dungeon variant.
  - The Forever files use **31 Forever-new quest ids in 1–14 and 25 in 11–20**, for example "Secure the Mountain", "Dawn in the Mountains", "The Great Outdoors", "Nip 'Em in the Bud", "Testing the Wells", "Show of Force" and "Blackrock Blockade".

  → **RestedXP built its Forever 1–20 route by layering new quests onto its Classic route, without re-ordering zones.** `community, launch-maintained`
- **20–32 (public in the TBC/WotLK edition, `Guides/RestedXP Alliance 23-30.lua`, tagged `#tbc #wotlk`):**
  23-24 Wetlands (bind Menethil) → 24-27 Redridge/Duskwood (bind Stormwind, then Darkshire) → 27-30 Wetlands/Hillsbrad (bind Menethil), or 28-30 Duskwood → 30-32 Duskwood/STV, or 30-32 Hillsbrad → next group **"RestedXP Alliance 32-47\32-33 Shimmering Flats"** (via Menethil → Theramore boat).
  - That edition is TBC-tuned (mount at 30, Exodar trips), so the boundaries are indicative only. `community, Classic-family`
- **RestedXP's Classic Alliance group names** (from `#next` pointers): "RestedXP Alliance 1-20", "20-30" or "20-32", **"32-47"**, and Horde "30-45\30-33 Hillsbrad / Arathi / Shimmering Flats". The Classic Alliance 32+ route therefore starts in Shimmering Flats, as Kopp's does.
- **Launch tie-in (theory):** the launch leader Ksuper is RestedXP-sponsored (sweep-launch §7), and RestedXP falls back to Classic Era for 35–60. His trail at 34–38 (Arathi → Thousand Needles → STV → Desolace → Thousand Needles → STV) is therefore probably **RestedXP's Classic Era Alliance order**, and it matches Kopp's 30–40 loop.
- **RestedXP's dungeon ratings:** copied unchanged from `DB/classic/db.lua` into `DB/forever/db.lua` (diff: identical). Scale 0–3. `Classic` (no Forever re-rating).

  | Alliance | Quest value | Travel | Warlock loot |
  |---|---|---|---|
  | Deadmines | 3 | 3 | 2 |
  | Stockade | 3 | 3 | – |
  | BFD | 3 | 2 | **3** |
  | Gnomeregan | 3 | 3 | 2 |
  | RFK | 2 | 1 | 2 |
  | SM | **1** | **0** | 3 |
  | RFD | 2 | 1 | 3 |
  | Uldaman | 3 | 3 (1 in the "SC" variant) | 1 |
  | ZF | 3 | 3 | 1 |
  | Maraudon | 3 | 2 | 2 |
  | Sunken Temple | 3 | 2 | 3 |
  | Wailing Caverns | 2 | 0 | 1 |
  | SFK | 1 | 0 | 2 |

  - The "SC" variant drops Alliance SFK and WC entirely.
  - **The new Forever dungeons (HoT, RoL, Excavation, Dalaran, Drowned City, Krol'dok, Alcaz, Blackmaw, Shaper's) are listed by id but not rated.**
  - https://github.com/RestedXP/RXPGuides/blob/main/DB/forever/db.lua ; https://github.com/RestedXP/RXPGuides/blob/main/DB/classic/db.lua

### B.4 Joana and other Classic speed sources

- **Joana:** his Classic speed guide is a **Horde** 1–60 route. His Patreon listed "Make a 1-60 speed leveling guide for Alliance. This will take some time!" as a goal. **No public Joana Alliance 1–60 route was found.** Classic Alliance players are pointed to Guidelime, Sage or Judgement instead.
  - A forum user describes Joana's style as "a long series of quests in an exact order, with an occasional 'If you aren't within 3 bars of 30, grind until you are'". Kopp's Alliance guide uses the same grind-gate style (§B.1).
  - Sources: https://us.forums.blizzard.com/en/wow/t/fastest-leveling-guide/495787 ; https://www.patreon.com/Joana_WoW/about (403; snippet) ; https://joanaguides.gumroad.com/l/aernyi ("1-60 Classic Speed Leveling Guides", no detail). `community`
- **Dswingo, "WoW Classic 1-60 Alliance Rogue Speedrun | 3d 15h"** (2026 uploads). Parts by level: 1-13, 13-22, 22-24, 24-30, 30-33, 33-36, 36-37, 37-40, 40-41.
  - Chapters and descriptions could not be read: YouTube returned HTTP 429, then a bot-check redirect, which I did not bypass. **Titles only.**
  - It is a recent Classic Alliance speedrun benchmark (3 d 15 h ≈ 87 h /played or real time; not stated).
  - https://www.youtube.com/watch?v=19iXJt63fMU ; https://www.youtube.com/watch?v=XUFb6UlRugQ ; https://www.youtube.com/watch?v=nu6IG40MKPE ; https://www.youtube.com/watch?v=IGYT7shXIzs ; https://www.youtube.com/watch?v=YWtj9CPzmsU `community, Classic`
- **AllyRoute** (CurseForge, 2019): "based on Varrak's Dwarf Hunter speedrun". No zone list; the site has been down since 2020. https://www.curseforge.com/wow/addons/allyroute `community, Classic`
- **Guidelime_ahmp** (Ahmpy, Alliance 1–60, last updated 2022, All Rights Reserved). Ahmpy is one of the Forever world-first racers (sweep-launch §7). No zone list is public. https://www.curseforge.com/wow/addons/guidelime_ahmp
- **PixelNitro "Classic Era 1-60 Speedrun Route"** (Sept 18, 2026). Generic and low-detail: Tanaris 40–43 (Gadgetzan hearth) → Feralas 43–46 → Hinterlands 46–48 → Tanaris 48–50 → Un'Goro 50–53 → Felwood 53–55 → WPL 55+ → EPL/Winterspring 58–60. https://pixelnitro.com/?p=19319 `community`
- **Timesaver:** "a verified solo leveling run on Speedrun.com's Classic Era leaderboard sits at 78:36:08 (real-time)". https://timesaver.gg/blog/how-long-to-level-60-wow-classic-era `community, unverified`

### B.5 Do the Classic 30–60 quests still exist in Forever? (spot check, `official DB`)

**Method.**
- Took 41 key Kopp quests from 30–60 and looked up their ids in QuestieDB (Era-derived).
- Called the Wowhead tooltip API for both `classic` and `forever` (`https://nether.wowhead.com/{classic|forever}/tooltip/quest/<id>`) on 2026-11-05.

**Result: 41/41 exist in Forever, and every Forever tooltip is byte-identical to Classic** (name, objective text and requirement counts).

The ids, with Era required level → quest level from QuestieDB (`theory` until checked in game):

| Zone | Quests |
|---|---|
| Hillsbrad | 564 Costly Menace (30→34) · 657 Hints of a New Plague? (30→36) · 559 Farren's Proof (25→32) · 562 Stormwind Ho! (25→32) · 505 Syndicate Assassins (26→33) |
| Alterac | 512 Noble Deaths (26→36) |
| Arathi | 681 Northfold Manor (30→31) · 693 Wand over Fist (30→39) |
| STV | 203 The Second Rebellion (30→33) · 204 Bad Medicine (30→34) · 605 Singing Blue Shards (30→35) · 601 Water Elementals (32→37) · 600 Venture Company Mining (30→41) · 665 Sunken Treasure (35→40) · 613 Cracking Maury's Foot (30→44) |
| Thousand Needles | 1187 Razzeric's Tweaking (29→41) |
| Desolace | 1458 Reagents for Reclaimers Inc. (30→33) · 1387 Centaur Bounty (Alliance version, 30→31) · 5561 Kodo Roundup (30→34) · 5501 Bone Collector (33→39) · 1380 Khan Hratha (30→42; Forever adds a reworked twin, 96222) |
| Badlands | 718 Mirages (35→38) · 733 Scrounging (35→40) · 717 Tremors of the Earth (40→50) |
| Swamp of Sorrows | 1393 Galen's Escape (30→38) · 1392 Noboru the Cudgel (29→39) |
| Dustwallow | 1204 Mudrock Soup and Bugs (33→38) · 1206 Jarl Needs Eyes (30→35) |
| Feralas | 4124 The Missing Courier (40→43) · 2982 The High Wilderness (39→44) · 3520 Screecher Spirits (40→44) |
| Hinterlands | 2988 Witherbark Cages (40→45) · 4297 Food for Baby (38→47) · 1452 Rhapsody's Kalimdor Kocktail (38→43) |
| Tanaris | 2944 The Super Snapper FX (42→48) |
| Blasted Lands | 3501 Everything Counts In Large Amounts (45→55) |
| Un'Goro | 4289 The Apes of Un'Goro (47→55) |
| Felwood | 8460 Timbermaw Ally (45→48) |
| Burning Steppes | 4183 The True Masters (48→54) |
| WPL | 5092 Clear the Way (50→52) |
| Winterspring | 4809 Chillwind Horns (50→54) |

Caveats:
- Tooltips don't show **XP rewards**. The Nov 2 notes "adjusted experience values on various quests" without naming them (sweep-official), so **XP per quest stays unknown**.
- This is a sample, not a full audit. Combined with sweep-wowhead (every Classic id tested exists), **there is no evidence of removed Classic quests in 30–60.**

---

## C. 30–60, segment by segment: Classic baseline vs what Forever changed

Backbone: **Kopp** (§B.1), cross-checked with **Judgement** (§B.2) and the **launch trail** (sweep-launch).

Column notes:
- **"Forever change"** sources: the DB facts are from sweep-wowhead (B10–B15, `official DB`); travel facts from sweep-official (`official` or launch-client datamine); map facts from Kami Labs and warcraft.wiki.gg (`community`, beta client).
- **"Recommendation"** is `theory` throughout.

| # | Classic segment (Kopp) | Hub / bind | Forever change | Recommendation for our route (theory) |
|---|---|---|---|---|
| 1 | **30–31 Hillsbrad**: Costly Menace, Hints of a New Plague, Farren's Proof → Stormwind Ho!, Syndicate Assassins, Crushridge Bounty | Southshore (bind) | **Changed (adds):** The Shamed Lieutenant (98219, level 30, Farren Orinelle, **the same NPC as Farren's Proof**); Hillsbrad's Hoard and Brewer's Trade (27); the **City of Dalaran attunement "An Alarming Request" (92432, level 33, Southshore)**. New **Menethil → Southshore** boat; pier added at Southshore (map). Launch: one Alliance racer levelled 30–32 here (sweep-launch). | Keep. Arrive by the Menethil boat after the Wetlands (27–30). Take the Dalaran attunement here. |
| 2 | **31 Alterac**: lions (Costly Menace), Syndicate camp (Foreboding Plans, Encrypted Letter) | Hearth to Southshore | **Changed:** **City of Dalaran dungeon (28–33; all quests level 33)** in the Alterac sewers; the image of Archmage Modera is at Silverpine 68.4, 45.2; the map draws the whole city (shield gone). | Keep. Do the single Dalaran run at ~31–33 with all its quests (forums: ~69 % of a level at 32; ConquestCapped: 8 quests × 3,950 XP). |
| 3 | **31–32 Arathi**: Northfold Manor + grind to 32; fly to Ironforge, bind Ironforge, buy Bloodstone Ore | Refuge Pointe → Ironforge | Stromgarde additions are **38–39** (later; see row 10). Rogue-only Syndicate quests (34). Arathi Basin entrances removed from the map. Launch: Arathi was the first 34+ stop for both Alliance racers seen there. | Keep, but Forever's Wetlands Dragonmaw chain (30–34) may already fill 30–33 (sweep-wowhead). |
| 4 | **32 STV** (Rebel Camp: The Second Rebellion, Bad Medicine) via Darkshire | Ironforge | **Changed (adds):** Booty Bay "Talk of the Town" (98463, 33). ZG label removed from the map (no Zul'Gurub at launch). | Keep, or fold into row 8. |
| 5 | **32–33 Thousand Needles (Shimmering Flats)** via the Menethil → Theramore boat and the Theramore flight path | (no bind) | **No Alliance additions in the DB.** The "east-side path" from Dustwallow is unverified: Kami Labs' table and text contradict each other. Launch: Ksuper was in Needles at 34.6–35 and 37.4. | Keep (launch-validated). The first Kalimdor trip of the 30s. |
| 6 | **33 Stonetalon** (Reclaiming the Charred Vale turn-ins) | – | No Alliance additions (DB). | **Skip** (low value; Kopp himself only uses it for turn-ins). |
| 7 | **33–35 Desolace**: bind Nijel's; Reagents for Reclaimers, Bone Collector, Centaur Bounty, Kodo Roundup; **skip both centaur faction quests**; grind Gelkis centaurs to 35 | Nijel's Point | **Changed:** Vahlarriel's Vengeance (97284, 33, Nijel's Point) is new. The centaur chains now continue into **Shen'dralas behind Honored rep and min level 35**. Khan Hratha has a reworked twin (96222, 42). The south of the zone is built up, with a path to Shen'dralas and a Kolkar village marker. Launch: Ksuper was in Desolace at 36.5–37. | Keep Kopp's version and **skip the centaur rep and Shen'dralas**. Add Vahlarriel's Vengeance. |
| 8 | **35–36 STV**: bind Booty Bay; Singing Blue Shards, Special Forces, Goblin Sponsorship; "Triage" if First Aid 225; Gadgetzan "The Rumormonger" | Booty Bay → Menethil | **Changed (adds):** Booty Bay 35–38 (Zul'Kunda: Anything of Value / Where's the Key? / Zimmix's Great Escape at 35; Reduce, Reuse, Reconcile at 36; The Cook in the Cage at 38). **Drowned City (35–40)** off the coast west of Grom'gol; the Alliance quest chain starts with Loremaster Dibbs in Southshore (40). | Keep. Do the Drowned City only once its quests are in the log (level-40 quests → run at ~38–40). |
| 9 | **36–37 Alterac**: Noble Deaths, Dark Council (Strahnbrad, Nagaz) | Southshore | **Changed (adds):** Strahnbrad Mystery (95534, level 36, Hillsbrad giver, Strahnbrad town). | Keep (fits exactly). |
| 10 | **37–38 Arathi**: Wand over Fist, Stones of Binding, Hints of a New Plague (escort) | Southshore / Refuge Pointe | **Changed (adds):** Stromgarde "Dutiful Steps" (92872, 38) and "Ground to Keep" (92867, 39). | Keep; add the Stromgarde pair. |
| 11 | **38 Dustwallow**: Theramore bind; Mudrock Soup and Bugs, Jarl Needs Eyes; Shimmering Flats turn-ins via Gadgetzan | Theramore | No PvE questing additions (DB). **Alcaz Prison (48–53)** is for later. | Trim. Only on the way to Ratchet or Shimmering Flats. |
| 12 | **38–40 STV**: Booty Bay; Water Elementals, Venture Company Mining; grind basilisks/raptors to 40; then mount | Booty Bay | Riverglades (36–44) competes for this slot. **Felsteed (40):** Strahad Farsan, Ratchet 62.4, 35.4 (sweep-official). | **Decision point.** Either keep the STV finish and take the Ratchet boat for the Felsteed at 40, or go to Riverglades. Riverglades has no quest data yet (finding 4). |
| 13 | **40–41 Badlands**: bind Thelsamar; Mirages, Scrounging, Tremors of the Earth, A Dwarf and His Tools; whelp grind; Uldaman pre-quests | Thelsamar | **Changed:** no new quests in the DB, but a **new pass from the south Badlands toward Riverglades** (map). **The Farholde Keep flight path links to Thelsamar.** | **Best Riverglades insertion point.** Badlands at 40 → walk or fly into Riverglades → Farholde ↔ Thelsamar. |
| 14 | **41 Swamp of Sorrows**: Noboru the Cudgel, Galen's Escape, Draenethyst Crystals; Nethergarde flight path | Darkshire | **Changed:** the Harborage got Forever quests at ~34 (This Light of Mine escort etc.), which will be grey-ish at 41. There is an unmarked new path north toward Riverglades. | Keep only if Riverglades routing passes by; otherwise skip. |
| 15 | **41–42 Desolace** (Nijel's; Down the Scarlet Path…) | Nijel's Point | Shen'dralas next door (rep-gated, no flight path). | **Replace with Riverglades** (theory). |
| 16 | **42–43 STV** (naga grind; Voodoo Dues) | Booty Bay | – | Replace with Riverglades / Krol'dok (40–45). |
| 17 | **43 Tanaris** (Gadgetzan bind; pirates; Tran'Rek; Wastewander) | Gadgetzan | **Changed (travel):** the **Steamwheedle Port ↔ Powderfuse Port (Riverglades) boat** is the exit from Riverglades to Kalimdor. No new quests in the DB. | Keep. Arrive from Riverglades by boat at ~44. |
| 18 | **43–45 Feralas** (Feathermoon bind; The High Wilderness, Zukk'ash hive, The Missing Courier) | Feathermoon | No new quests in the DB. The map drops a Thorium Point flight-path label (Kami Labs; likely just a map-label quirk). | Keep. |
| 19 | **45–46 Uldaman** ("highly suggest") | Ironforge | Dungeon mob XP is ~70–76 % below Classic, so quests carry it (Method; sweep-official). RestedXP rates it quest 3/3, warlock loot 1/3. | Keep as the single 40s dungeon **if** the Badlands quests are in the log. Otherwise grind or quest. |
| 20 | **46–47 Hinterlands** (Aerie Peak bind; Witherbark Cages; troll/wolf grind) | Aerie Peak | No new quests (DB). games.gg Forever guide: Alliance 43–44 → 49–50, "nothing announced rewrites the zone's hubs". | Keep. |
| 21 | **47 Feralas · 47–48 Tanaris · 48 Hinterlands · 48–49 STV** | Feathermoon / Gadgetzan / Ironforge / Booty Bay | **Alcaz Prison (48–53)** on Alcaz Island, Dustwallow (Theramore). Quests unknown. | Unknown. Alcaz may replace part of this shuttle once its quests are known. |
| 22 | **49–50 Blasted Lands** (5 collection quests; ZF optional) | Booty Bay | – | Keep, or do ZF once if its quests are collected. |
| 23 | **50–51 Searing Gorge · 51–52 Un'Goro · 52–53 Azshara · 53–54 Felwood · 54 Tanaris/Felwood · 54–55 Winterspring** | Ironforge / Darnassus / Astranaar / Everlook | No new quests in the DB. **Blackmaw Hold (55–60)** behind a sealed gate in Azshara (Talrendis Point flight path). **Shaper's Terrace (58–60)** in north Un'Goro (Marshal's Refuge flight path). | Keep the Classic order. Blackmaw and Shaper's would need a return at 55–58 (unknown value). |
| 24 | **55–56 Burning Steppes · 56 Tanaris/Un'Goro/Silithus · 56–59 W/E Plaguelands · 59–60 Winterspring** | Ironforge / Gadgetzan / Cenarion Hold / Everlook | Map: the EPL map is reportedly redrawn and Winterspring has a "new giant door to the north" (presumed Barrow Deeps). Both are unverified. **Mount Hyjal** is next to Winterspring (Darkwhisper Gorge; flight masters level 60). | Keep. Finish 59–60 in Winterspring. Hyjal is post-60 (official: endgame). |

**Riverglades block (theory, no quest data):**
- **Entry:** Lakeshire flight → walk east on the Burning Steppes road fork, or come from the Badlands (row 13) → get the **Farholde Keep** flight path (60.6, 81.4).
- **Duration:** ~38/40 → 44, including Krol'dok (40–45) once with its quests.
- **Exit:** the Powderfuse Port → Steamwheedle Port boat → Gadgetzan for Tanaris and Feralas at 44.
- **What it replaces:** Kopp's rows 14–16 (Swamp of Sorrows 41, Desolace 41–42, STV 42–43) and possibly row 12.
- **What it needs:** launch evidence (zero racers had been in Riverglades by 38 on Nov 5, per sweep-launch).
- Sources: sweep-official §5.3; https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-riverglades-guide/ ; https://warcraft.wiki.gg/wiki/Riverglades

Sources for this section:
- VanillaGuide files: https://github.com/osthoma/VanillaGuide/blob/master/GuideTables/Alliance/003_Alliance_30to40.lua , `003_Alliance_40to50.lua` , `003_Alliance_50to60.lua`
- https://www.warcrafttavern.com/wow-classic/guides/alliance-leveling-guide/
- https://kami-labs.fr/en/wow-forever/cartes-de-wow-forever-comparees-classic/ (Oct 29; based on the beta-client maps and a 720 Zone video of Oct 21)
- https://warcraft.wiki.gg/wiki/Forever_map_comparison (last edited Oct 24)
- https://www.wowhead.com/forever/quest=98219 , https://www.wowhead.com/forever/quest=92432 , https://www.wowhead.com/forever/quest=97284 , https://www.wowhead.com/forever/quest=95534 , https://www.wowhead.com/forever/quest=92872 , https://www.wowhead.com/forever/quest=92867 , https://www.wowhead.com/forever/quest=98463 (all via sweep-wowhead)

---

## D. Other facts from the guide sites that bear on the route

### D.1 Numbers worth keeping (ConquestCapped, Nov 2; `community`)

| Item | Classic | Beta start | After Oct 1 | Note |
|---|---|---|---|---|
| The Defias Brotherhood final step (Deadmines) quest XP | 2,600 | 9,750 | 6,175 | |
| Deviate Hides + Wailing Caverns quest XP | 1,600 | ~4,650 | 3,100 | |
| Three core Deadmines quests | 5,400 | – | 12,825 | |
| Each of the 8 City of Dalaran quests | new | – | **3,950** | ≈ 31.6k XP total ≈ 2/3 of a level at 31–32 |
| Dungeon mob XP | | | | About 30 % of Classic (author's estimate; others measured ~40 %). Example at ~19: a miner gave 7 XP instead of 28; an elite gave 20 instead of 80 |

Other ConquestCapped points:
- **Instance lockout:** "You can enter an instance only five times per hour." (Classic rule.)
- **Dalaran's last boss** drops a necklace with a short **+10 % XP buff against undead**.
- **Skip as Alliance:** Shadowfang Keep, Razorfen Kraul ("only 2 quests"), Razorfen Downs. Ruins of Lordaeron "only if nearby".
- **Pace:** Hammerdance Alliance route 18–22 h /played to 30 (beta); Factorizer simulation 103 h 11 m – 123 h 33 m for 1–60 (Undead Paladin); author's projection 100–120 h.
- Source: https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/

### D.2 Other points

- **Method (Nov 4):**
  - Says Blizzard's Nov 2 notes left dungeon XP unchanged.
  - Testers reported "close to two levels from a single run" of Hall of Thanes or Ruins of Lordaeron with every quest. For Alliance at launch, this conflicts with the RoL pickup failures and the "3 bars" for a Hall of Thanes clear (sweep-launch, sweep-forums).
  - New Alliance quest **"Past Due"** (96800, level 38, Scarlet Monastery book; verified with wh.mjs).
  - https://www.method.gg/wow-forever/wow-forever-dungeon-xp-explained-and-all-dungeons-by-level ; https://www.wowhead.com/forever/quest=96800 `community + official DB`
- **LepreStore Riverglades guide (Oct 17 / 26):**
  - Group Finder shows **33–54** for the zone. Blizzard's overview says players "enter at about level 36".
  - Hub NPC: Knight Commander Demar Brant.
  - Subzones: Sunnyglade, Meadowsbrook, Windstead, Wheeler's Grange, Twilight's Shroud, Forlorn Pit.
  - Krol'dok counts toward the Legacy "Experienced Spelunker" criteria.
  - No quest names.
  - https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-riverglades-guide/ `community, pre-launch`
- **Kami Labs addon status (Oct 11):** "the quests Forever adds, in the new zones for example, have no marker [in Questie]". RestedXP's "dungeon routes and the Forever-specific level 35 to 60 routes come out after launch". https://kami-labs.fr/en/wow-forever/addons-leveling-wow-forever/ `community`
- **Mein-MMO (Oct 30):** "A higher-level Mage or Warlock can teleport or summon you". In Forever, gray mobs (5+ levels below) give "significantly fewer experience points". https://mein-mmo.de/en/?p=1594067 `community`

---

## E. Implications for the leg authors (theory, built on the evidence above)

1. **1–30:** use the RestedXP Forever skeleton (sweep-launch §6.2) as the backbone. Its zone order is RestedXP's Classic order plus Forever quests (§B.3).
   - The aggregator sites' "Dun Morogh → Loch Modan → Wetlands" path is a simpler alternative, but it has no launch evidence.
   - The Wetlands 27–30 is launch-confirmed (sweep-launch).
2. **30–40:** follow **Kopp's loop**: Hillsbrad/Alterac (+Dalaran) → Arathi → STV → Shimmering Flats → Desolace → STV → Alterac → Arathi → (Dustwallow) → STV.
   - Add the Forever quests that sit in those same hubs (Southshore, Booty Bay, Stromgarde, Nijel's Point).
   - Skip Stonetalon 33, the Desolace centaur rep and Shen'dralas.
   - Confidence: `theory`, with launch validation to 38 (`community`).
3. **38/40–44:** the **Riverglades** placeholder: Badlands at 40 (Thelsamar) → Riverglades + Krol'dok → boat to Tanaris.
   - It replaces Kopp's 41–43 Swamp/Desolace/STV legs.
   - Mark the whole block `theory` and keep **Kopp's 40–45 as the fallback** (Badlands → Swamp of Sorrows → Desolace → STV → Tanaris → Feralas) until someone publishes Riverglades quest data.
4. **44–60:** Kopp's Classic order (Tanaris/Feralas/Uldaman/Hinterlands → Blasted Lands → Searing Gorge → Un'Goro → Azshara → Felwood → Winterspring → Burning Steppes → Silithus → Plaguelands → Winterspring).
   - Its quests are confirmed present and unchanged (§B.5).
   - New dungeons (Alcaz 48–53, Blackmaw 55–60, Shaper's 58–60) are optional and unknown. Don't route them yet.
5. **Warlock-specific:** take the **Felsteed** at 40 on a Ratchet pass (row 12). Train at Ironforge on Kopp's Ironforge stops (32, 36, 40, 48, 50, 55, 56–58).

---

## Gaps (what I could not find)

1. **RestedXP's Classic Era Alliance 32–60 section list.**
   - It is paid and not on GitHub, and the shop pages return 403.
   - I only have the group name "32-47" and its first section, "32-33 Shimmering Flats".
   - The inferred order from the launch leader's trail is theory.
2. **Any Riverglades quest name, id, level, hub order or XP value.** Not on any guide site, Wowhead, QuestieDB, Zygor, TUGs or RestedXP as of Nov 5.
3. **Zygor's "4 new Dungeon guides"** are not named, and its Forever 30–60 is "coming soon".
4. **TUGs Forever files** (Nov 5): there is no public repo, so their 12–30 order could not be read.
5. **Joana Alliance 1–60:** none exists publicly. Joana's Forever 1–20 content was not inspected (addon only).
6. **Dswingo's Classic Alliance Rogue speedrun** (3 d 15 h): chapters and descriptions are blocked (YouTube 429 and a bot check). Titles only.
7. **Blocked sites (403):** Icy Veins (warlock leveling, zones), Mobalytics (zone map, Kargoz 1–60), Overgear, EpicCarry, playnews.gg, RestedXP shop/community. Wowhead guide bodies are JS-rendered. **No Maxroll Forever leveling guide was found.**
8. **Quest XP rewards** for the Classic 30–60 quests in Forever: tooltips have no XP. The Nov 2 "adjusted experience values on various quests" is unspecified.
9. **Map-change claims** (Kami Labs: an east path from Dustwallow to Thousand Needles, the Tanaris and Dustwallow "passes toward Riverglades", the EPL redraw) are **inconsistent or geographically implausible** in places. Use only the Redridge and Desolace items, which warcraft.wiki.gg's "substantively changed" list corroborates.
10. **Classic quest levels in §B.5** come from QuestieDB's Era-derived data. They are not confirmed for Forever except where the Forever tooltip shows a level (717 = 50, 613 = 44, 2944 = 48, 1380 = 42: identical to Classic).
11. **Kopp's guide is vanilla-era (2006–2018).** Some steps rely on old drop rates or respawns, and its coordinates are vanilla. Redridge and Stormwind coordinates are known to differ in Forever.
