# Round 2 plan: swap grind blocks for quest hubs (parts 3–10)

Round-2 planner, written 2026-11-06, about 06:00–07:30 UTC.

**Inputs:**
- critic.md (R5, R6, R7, R13, R14, §4–5), skeleton.md, the six sweep notes, and leg files 03–10.
- New checks made for this plan (§1):
  - one fresh read of the launch leaderboard;
  - ForeverDB zone lists and quest pages;
  - Wowhead Forever tooltips (`tools/wh.mjs`);
  - Classic quest XP from Questie's xpDB;
  - Blizzard forum threads from Nov 5–6.

**Goal:** the fastest solo route. Replace grind blocks with hubs that beat grinding at 100 kills/h.

**Rule kept:** each hub is owned by one part only (§4).

## 0. Verdict

**On the main path (no group needed), the route drops from about 145 h to about 135 h /played.**
- Grind kills fall from about 7,200 to about 4,150.
- With the group-dependent options in §5, it is about 131 h and about 2,800 kills.
- Rested XP is not counted. The critic's §4 estimate for it is −10 to −15 h on top.

**Why this is not bigger:**
- Quest supply, not routing, is the limit from 45 to 60.
- Classic Alliance has few open-world quests at 50–60 that are not already used.
- Kopp's own Classic route also grinds at 46–50 and 57–60.
- Quests beat grinding by about 1.6–2× per hour, so each hour of grind removed saves about 0.45 h once in-zone travel is counted. Entry travel (boats, first-time flight paths) eats part of that.

**Changes by size (hours saved on the main path):**

| Part | Change | Saves |
|---|---|---|
| 8 | Searing Gorge (45.3–46.4) and Feralas (from Gadgetzan) replace the Hinterlands grind | ≈3.2 h |
| 3–5 | Stockade on the main path; Ashenvale trip at 27–29; Desolace trip at 33–35; Duskwood return at the Stormwind stop. Together they replace the Rethban, Angerfang, Raptor Ridge and Witherbark grinds | ≈3.3 h |
| 6 | A northern return at 37.7–39.2 (Alterac, Hillsbrad, Arathi) and the Swamp of Sorrows at 39.2–39.8 replace the Stranglethorn basilisk grind. This is the launch duo's exact 38–40 trail | ≈1.6 h |
| 9 | Blasted Lands at the Eastern Kingdoms transfer, Silithus at the end, and Chasing A-Me 01 | ≈1.1 h |
| 7 | Uldaman re-rated (Forever pays dungeon quests about 2×), so Riverglades is trimmed | ≈0.7 h |
| 10 | Tirion's chain and two carried turn-ins | ≈0.4 h |

Part 10 gains about 2.5 h more with the group options (BRD, LBRS, Stratholme, and the Light's Hope armour turn-ins if those NPCs are live).

## 1. New evidence collected for this plan

### 1.1 Launch leaderboard, read once at 05:54 UTC on Nov 6
- Source: https://race.aotc.gg/, plain request, parsed with the launch sweep's parser.
- **`map2548` is Riverglades.** ForeverDB's map page for uiMap 2548 is titled "Riverglades" and lists the Farholde Keep and Powderfuse Port flight masters: https://foreverdb.net/maps/2548
  - The leader Ksuper was in Riverglades at 42.54–42.79 (26h14–26h42), then in the Badlands at 43.18 (27h22).
  - Tai Won (Gnome Mage) went from Arathi at 35.8 into Riverglades at 36.29.
  - So Riverglades is now in launch use. Its quest data is still not published: ForeverDB has no Riverglades quest list (`/quests/riverglades` returns 404).
- **The duo Smoshie (Priest) and Tekz (Mage) took the 38–40 loop that part 6 now adopts:**

  | Level | Zone | /played |
  |---|---|---|
  | 38.24 | Arathi | 26h15 |
  | 38.48 | Hillsbrad | |
  | 38.76 | Alterac | |
  | 39.10 | Wetlands / Ironforge | |
  | 39.31–39.57 | Swamp of Sorrows | |
  | 40.0 | Stranglethorn | 29h42 |

  That is 1.75 levels (≈141k XP) in 3.45 h, ≈41k XP/h as a duo.
- **Dustwallow Marsh is the most common Alliance zone at 34.5–36** (6 players). It is kept here as part 5's fallback only (§3, part 5), because Desolace holds about 2.5× the quest XP.
- The Gnome Warlock (Jang Wonyoung) was at 35.23 at 25h24 /played, in Dun Morogh.

### 1.2 Forever pays about 2× Classic for quests done inside dungeons; open-world quests pay Classic

**Launch logs (ForeverDB "Experience: N (seen at level L)"), Classic values from Questie's xpDB:** https://github.com/Questie/QuestieDB/blob/master/support/Forever/QuestXP/xpDB-classic.lua

| Quest (dungeon) | Forever XP | Classic XP | Ratio | Source |
|---|---|---|---|---|
| What Comes Around… (Stockade) | 4,200 | 2,000 | 2.1 | https://foreverdb.net/quest/386 |
| Crime and Punishment (Stockade) | 4,400 | 2,100 | 2.1 | https://foreverdb.net/quest/377 |
| Quell the Uprising (Stockade) | 5,550 | 2,650 | 2.1 | https://foreverdb.net/quest/387 |
| The Color of Blood (Stockade) | 5,550 | 2,650 | 2.1 | https://foreverdb.net/quest/388 |
| Twilight Falls (BFD) | 6,050 | 2,550 | 2.4 | https://foreverdb.net/quest/1199 |
| Amongst the Ruins (BFD) | 6,550 | 2,750 | 2.4 | https://foreverdb.net/quest/6921 |
| Blueleaf Tubers (RFK) | 5,000 | 2,100 | 2.4 | https://foreverdb.net/quest/1221 |
| The Book of Ur (SFK) | 5,600 | 2,100 | 2.7 | https://foreverdb.net/quest/1013 |
| Trouble at the Docks (WC) | 2,650 | 1,350 | 2.0 | https://foreverdb.net/quest/959 |
| Gyrodrillmatic Excavationators (Gnomeregan) | 4,400 | 2,450 | 1.8 | https://foreverdb.net/quest/2928 |

**Quests whose objectives are outside the instance pay Classic:**
- Oh Brother… 1,550: https://foreverdb.net/quest/167
- The Essence of Aku'Mai 1,750: https://foreverdb.net/quest/6563
- Open-world quests too: The Cursed Crew 1,750 (https://foreverdb.net/quest/289), War Banners 2,300 (https://foreverdb.net/quest/464), Young Crocolisk Skins 1,750 (https://foreverdb.net/quest/484). Each equals its Classic value.

**Mob XP inside dungeons is cut hard:**
- "3 bars" for a clear, or "5% of a level"; players say "run it once for the quests": https://us.forums.blizzard.com/en/wow/t/2402916 ; https://us.forums.blizzard.com/en/wow/t/2402633
- A Nov 6 warning: BFD trash is a "HP sponge" and its quests can't be finished in one run: https://us.forums.blizzard.com/en/wow/t/2403106

**How this plan uses it:**
- In-instance quest XP is ×2 (×2 is `beta-tested` up to level 29; above 30 it is `theory`). Dungeon mob XP is about 5% of a level.
- A dungeon then beats grinding only when it has at least about 4 quests and forms in about 20 min. That makes the Stockade, Uldaman and BRD worth running. ZF, LBRS and Stratholme are worth it only with a quest group.

### 1.3 Boats
- The Nov 5 maintenance was to fix lost boats. The temporary portals came from that bug: https://us.forums.blizzard.com/en/wow/t/2402372
- One Nov 6 report still says "Boats dont show up": https://us.forums.blizzard.com/en/wow/t/2403203
- So every new boat trip below has a fallback: the old grind block, or Dustwallow by the Theramore boat for part 5.

### 1.4 Rate model (one rule for every part)
- **Grind:** 100 kills/h × each part's own XP per kill (the critic's re-rate). For example 185 XP/kill in part 4, 279 in part 8 and 322 in part 10.
- **Quest hub:** quest XP plus kill XP made while questing (0.6 × quest XP, the ratio the part-8 builder measured in Tanaris). The hub runs at 1.8× the grind rate for that level, including travel inside the zone. Entry and exit travel is added separately.
  - Launch anchors:
    - The Gnome Warlock duo made ≈36k XP/h at 32–35, against a grind rate of 21k/h (1.7×).
    - The leader made ≈49k XP/h at 34–39 as a hunter.
    - The duo above made ≈41k XP/h at 38–40.
- **Dungeon:** Forever quest XP plus about 5% of a level of mob XP, over the run time plus a group wait. Run times come from the legs and the skeleton.
- **XP table:** Classic. Launch XP bars match it: https://warcraft.wiki.gg/wiki/Experience_point

## 2. What each grind block is replaced by

| Grind block now | Kills | Replaced by | Part |
|---|---|---|---|
| dr-068 Rethban (22.2→23.27, ~30k) | ~190 | The Stockade in part 4. Part 3 now ends at ~22.45 | 3→4 |
| l04-087 Angerfang (27.31→28.5) | ~260 | Ashenvale trip (Menethil → Auberdine) | 4 |
| l04-090 Raptor Ridge (28.61→29.85) | ~290 | Ashenvale trip. Part 4 now ends at ~29.4 | 4 |
| l05-076 Witherbark (33.7→35.25) | ~400 | Desolace trip (Southshore → Auberdine) and the Duskwood return; ~35 kills stay as a top-up | 5 |
| l06-067, l06-075, l06-077, most of l06-078 | ~610 | Northern return (Alterac, Hillsbrad, Arathi 37.7–39.2) and the Swamp of Sorrows (39.2–39.8). ~40 pirate kills stay for Up to Snuff and Keep An Eye Out | 6 |
| l07-027 optional whelps | (30 min) | Dropped. Uldaman re-rated at Forever's ×2 | 7 |
| l08-020, l08-024 Hinterlands (45.47→48) | ~1,100 | Searing Gorge (45.3–46.4) and Feralas (47.0–48.2). The Hinterlands is dropped completely | 8 |
| l08-064/065 Tanaris (48.75→50) | ~620 | Shrinks to nothing on paper, but the leftover ~246k still has to be ground (~880 kills), so it moves to start at ~48.2 | 8 |
| l09-015, l09-034 Un'Goro | ~575 | Blasted Lands quests (at the 51–52 transfer) and Chasing A-Me 01 | 9 |
| l09-064, l09-070, l09-086 Felwood/Winterspring | ~995 | Silithus at the end of the part. The Deadwood and Winterfall blocks shrink to what Timbermaw reputation needs, plus leftover grind | 9 |
| l10-024, l10-094, l10-110, l10-111 | ~95 fewer on the main path | Tirion's chain and two carried turn-ins. BRD, LBRS and Stratholme take ~990 more with groups (§5) | 10 |

## 3. Plan per part

Part start and end states are unchanged except where marked **NEW END** / **NEW START**. Every changed end has a matching change to the next part's start.

### Part 3 — Defias, Deadmines, Redridge (18.3 → **22.45**)

**Replace:** dr-068, the Rethban grind (~29.8k XP, ~190 kills).
- Keep dr-060 (Galardell, ~115 kills): it is on the Shadowhide gnolls you kill anyway.

**Add:** nothing open-world. Part 3 has no unowned hub at 21–23.
- Duskwood and the Wetlands belong to part 4.
- The Stockade is a poor fit at 22 (elite level-23–25 trash, Bazil is a level-29 elite; leg 3's open question b).
- The XP moves into part 4, where the Stockade now covers it.
- Optional: WANTED: Lieutenant Fangore (2,650 Classic) during the dr-060 block. https://www.wowhead.com/forever/quest=180

**NEW END:**
- Level ~22.45, Darkshire, Darkshire flight path learned.
- Hearth Stormwind; trained 16/18/20.
- Carrying Messenger to Darkshire, What Comes Around… and Bazil Thredd.

**Time:** ≈6.0 h (was 7.9).

### Part 4 — Duskwood, Stockade, Wetlands, **Ashenvale** (**22.45** → **29.4**)

**NEW START:** level ~22.45 at Darkshire.
- The Duskwood first pass starts 1 level lower. Its quests are level 24–28, so they are yellow or orange: about +0.1 h.

**Replace:** l04-087 (Angerfang, ~47.5k, ~260 kills) and l04-090 (Raptor Ridge, ~54k, ~290 kills).

**Add 1 — The Stockade, now on the main path, at ~25 in Stormwind** (it was optional in l04-030 to l04-03x).
- Quests: Quell the Uprising, The Color of Blood, What Comes Around…, Crime and Punishment, Bazil Thredd → The Stockade Riots.
- **≈25.9k quest XP.** Four of the five are launch-logged at about 2.1× Classic (§1.2); the Stockade Riots is estimated at ~6.2k. Mobs add ~3k.
- Time: ~1.2 h, made of a 45-min run, up to 15 min of group wait, and the Darkshire → Lakeshire turn-in hop.
- Fallback: no group in 15 min → carry on. The XP gap then goes into part 5.
- Evidence: https://foreverdb.net/quest/387 ; https://foreverdb.net/quest/388 ; https://foreverdb.net/quest/386 ; https://foreverdb.net/quest/377

**Add 2 — Ashenvale trip at 27.3 → ~29.4**, after the Wetlands quests.
- **Route:**
  - Menethil → Auberdine boat (the Classic route still runs: https://us.forums.blizzard.com/en/wow/t/2399089/10).
  - Learn the Auberdine flight path. Hand in Bloom of the Heavens part 2 (Thundris Windweaver) and pick up Hollee's Unrequited Love. Both were part-4 skips "because the turn-in is in Auberdine".
  - Run to Astranaar (~8 min) and learn the flight path.
  - Hearth back to Menethil, bound earlier in the part.
- **Quests:**
  - Raene's Cleansing parts 27–30 (≈13.9k Classic).
  - The Howling Vale (2,450). Stop the chain there: it continues to Ratchet and Booty Bay.
  - Fallen Sky Lake, with Elune's Tear and The Ruins of Stardust (≈5.9k).
  - Kayneth Stillwind → Forsaken Diseases → Insane Druids (6.1k).
  - Vile Satyr! → The Branch of Cenarius → Satyr Slaying! (7.65k).
  - New Forever quests: Vengeful Trail → Shared Fury (Forest Song), Slowing the Orc Advance, Gleaming Crescent Necklace. About 8k guessed at Classic rates for their levels.
- **≈47k quest XP + ≈28k kill XP = ≈75k in ≈2.75 h**, including ~0.5 h of boat and run.
- Evidence:
  - https://foreverdb.net/quests/ashenvale (75 quests, levels 20–32, in the launch client)
  - https://www.wowhead.com/forever/quest=98417 ; https://www.wowhead.com/forever/quest=86757 ; https://www.wowhead.com/forever/quest=98027 ; https://www.wowhead.com/forever/quest=98209 ; https://www.wowhead.com/forever/quest=98461 ; https://www.wowhead.com/forever/quest=1026 ; https://www.wowhead.com/forever/quest=1012
  - Launch: an Alliance paladin was in Ashenvale at 28.4 (race.aotc.gg, Nov 5).
  - Guides putting Ashenvale at 25–30: ConquestCapped and ExpCarry (sweep-guides).
- **Risks:**
  - The boat (§1.3). Fallback: the old Angerfang and Raptor Ridge grinds.
  - Horde levels at 27–28 in Ashenvale, which matters on PvP realms.
- **Side benefit:** the Auberdine and Astranaar flight paths, used by parts 5 and 9.

**NEW END:**
- Level ~29.4 at the Excavation Site approach, after hearthing to Menethil.
- Hearth on cooldown, but ready before part 5 needs it.
- Flight paths add Auberdine and Astranaar.
- Stockade done; its three carried quests are turned in.
- Bloom of the Heavens 2 and Unrequited Love done.

**Time:** ≈10.8 h (was 12.2).

### Part 5 — Excavation, Duskwood return, Dalaran, **Desolace**, Arathi (**29.4** → 35.3)

**NEW START:** level ~29.4.
- The Excavation at 29.4 is inside the beta measurement (~88% of a level at 28: https://us.forums.blizzard.com/en/wow/t/2385588/288) and Method's 24–29 band.

**Replace:** l05-076 (Witherbark grind, ~97k, ~400 kills). Keep about 35 kills as a top-up if Desolace comes up short.

**Add 1 — Duskwood return at the Stormwind city stop (~31.3).**
- Route: fly Stormwind → Darkshire (1:56). Do the quests. Fly back and take the tram to Ironforge for Gnomeregan, which the leg already does.
- Quests:
  - The Night Watch part 3 (2,450; Plague Spreaders, east Raven Hill mausoleum).
  - Look to the Stars part 4 (2,450; Zzarc'Vul, south ogre mound).
  - Worgen in the Woods parts 3–4 (1,900 + 3,150).
  - Merrick's Bow (new, level 28; Splinter Fist 29–30; ~2.3k guessed).
  - Optional: The Valor Family part 2 (~2k guessed).
- **≈14k quest XP + ≈8.5k kill XP in ≈0.8 h.**
- Launch: 16 of 27 Alliance samples at level 31 were in Duskwood, and both Gnome Warlock duos went Stormwind 31 → Duskwood 31.7–32.5 (skeleton §1.1 trails; race.aotc.gg).
- Evidence: https://www.wowhead.com/forever/quest=58 ; https://www.wowhead.com/forever/quest=181 ; https://www.wowhead.com/forever/quest=222 ; https://www.wowhead.com/forever/quest=223 ; https://www.wowhead.com/forever/quest=96138

**Add 2 — Desolace trip at ~33.4 → ~35.**
- **Route:**
  - After the Dalaran hearth and Southshore turn-ins (l05-067), take the Southshore → Auberdine leg of the one-way boat loop: https://foreverdb.net/travel
  - Fly Auberdine → Astranaar (flight path from part 4). Run west through Stonetalon to Nijel's Point (~15 min) and learn the flight path.
  - Hearth to Southshore, then walk to Arathi as l05-068 does.
- **Quests:**
  - Centaur Bounty (3,750).
  - The Vahlarriel chain: Search ×3 → Search for Tyranis → Return to Vahlarriel (12.5k).
  - New: Vahlarriel's Vengeance (Thunder Axe Fortress, the same camp; ~3k guessed).
  - Reagents for Reclaimers Inc. ×3 (8.55k).
  - The Karnitol Shipwreck ×4 (9k).
  - Kodo Roundup (2,000), Bone Collector (2,250).
  - Sceptre of Light → Book of the Ancients (6.2k).
  - Bodyguard for Hire (2,750), Gizelton Caravan (2,850), Claim Rackmore's Treasure! (2,800), Ghost-o-plasm Round Up (2,250).
  - Optional: Down the Scarlet Path (3,000; 30 Undead Ravagers). Its part 2 is handed in at Southshore after the hearth.
  - Skip both centaur reputation chains, as Kopp did. Valley of Bones now needs Honored.
- **≈58k quest XP + ≈35k kill XP = ≈93k in ≈2.9 h**, including ~0.5 h of boat and run.
- Evidence:
  - https://foreverdb.net/quests/desolace (56 quests, levels 32–40)
  - https://www.wowhead.com/forever/quest=97284 ; https://www.wowhead.com/forever/quest=1387 ; https://www.wowhead.com/forever/quest=1458 ; https://www.wowhead.com/forever/quest=1454 ; https://www.wowhead.com/forever/quest=5561
  - Nijel's Point flight master: https://www.wowhead.com/forever/npc=6706
  - Launch: the leader was in Desolace at 36.5–37.0, and an Alliance druid at 35.7 (race.aotc.gg).
- **Fallback:** if the Southshore → Auberdine boat is missing, take Menethil → Theramore and do Dustwallow's Theramore quests (~38k Classic at 35–40, the most common Alliance zone at 34.5–36 on Nov 6). Otherwise keep the Witherbark grind. https://foreverdb.net/quests/dustwallow-marsh

**Add 3 (conditional) — Wetlands elite quests with the Excavation group.** Do these only if the group stays.
- Defeat Nek'rosh (2,550), A Grim Task (3,350), The Dark Iron War (2,450).
- The Goaz chain: Understanding Our Present → Gleaning Our Future → For Further Study.
- Stopping the Cycle → Word to Ironforge.
- ≈23k quest XP + ≈5k in ~1 h.
- **R13 fallback:** if the group has left, skip Carnage and its Rethiel turn-in. Desolace covers the 2–3k.

**End unchanged** (level 35.3 at Refuge Pointe), plus:
- Flight paths add Nijel's Point.
- Down the Scarlet Path part 2 turned in if taken.
- Accept Noble Deaths at Magistrate Maleb's Foreboding Plans turn-in (l05-067) and carry it to part 6.

**Time:** ≈13.0 h. That is the same as before, but it also absorbs part 4's pushed 27k.

### Part 6 — Stranglethorn, **northern return**, **Swamp of Sorrows**, Felsteed (35.3 → 40.1)

**Replace:**
- l06-067 (Skullsplitter, ~85 kills).
- l06-075 and l06-077 (basilisks and stalkers, ~520 kills).
- Most of l06-078: keep ~40 pirate kills for Up to Snuff and Keep An Eye Out.
- Also l06-072/073 (the Riverglades switch decision and the hearth back to Booty Bay).

**Add, in this order, after l06-066 at ~37.7:**

1. **Stranglethorn extras on the existing loops.**
   - Kurzen's Mystery at the Rebel Camp (3,550, Brother Nimetz): https://www.wowhead.com/forever/quest=207 ; https://www.wowhead.com/forever/npc=739
   - Accept Magical Analysis from Baron Revilgaz at the Water Elementals turn-in (l06-060).
   - Accept Land Ho! in Booty Bay.
2. **Fly Booty Bay → Stormwind:** train 36. Then fly Stormwind → Ironforge.
   - At Prospector Stormpike, accept Further Mysteries. It was a part-6 skip only because its turn-in is at Southshore.
3. **Fly Ironforge → Southshore. Alterac and Hillsbrad at 37.7 → ~38.4:**
   - Noble Deaths (2,800), carried from part 5.
   - Strahnbrad Mystery (new, level 36; ~2.8k guessed).
   - Further Mysteries → Dark Council (1,350 + 3,150).
   - Magical Analysis → Ansirem's Key (1,400 + 1,400), at Ansirem by the Dalaran crater.
   - Evidence: https://www.wowhead.com/forever/quest=512 ; https://www.wowhead.com/forever/quest=95534 ; https://www.wowhead.com/forever/quest=525 ; https://www.wowhead.com/forever/quest=537 ; https://www.wowhead.com/forever/npc=2543
4. **Fly Southshore → Refuge Pointe. Arathi leftovers at ~38.4 → ~39.2:**
   - The Princess Trapped → Stones of Binding → Breaking the Keystone → Myzrael's Allies (11.5k).
   - Wand over Fist → Trelane's Defenses → An Apprentice's Enchantment → Attack on the Tower → Malin's Request (13.05k; the last is handed in at Stormwind).
   - Faldir's Cove: Land Ho!, Deep Sea Salvage, Drowned Sorrows, Sunken Treasure parts 1–3 (15.6k). Part 4 is handed in at Booty Bay later (+3,150).
   - Stromgarde Badges (3,550; needs Northfold Manor from part 5).
   - New: Ground to Keep and Dutiful Steps (~6k guessed).
   - Optional: the two WANTED posters (7.65k), if Marez Cowl, Otto and Falconcrest are not elite.
   - Evidence: https://foreverdb.net/quests/arathi-highlands ; https://www.wowhead.com/forever/quest=642 ; https://www.wowhead.com/forever/quest=693 ; https://www.wowhead.com/forever/quest=664 ; https://www.wowhead.com/forever/quest=665 ; https://www.wowhead.com/forever/quest=682 ; https://www.wowhead.com/forever/quest=92867 ; https://www.wowhead.com/forever/quest=92872
5. **Fly Refuge Pointe → Ironforge:** train 38. Tram to Stormwind and hand in Malin's Request. Fly to Darkshire and walk east through Deadwind Pass.
6. **Swamp of Sorrows at ~39.2 → ~39.8:**
   - Encroaching Wildlife → The Lost Caravan → Driftwood → Deliver the Shipment (ends at Nethergarde Keep: learn that flight path).
   - Draenethyst Crystals, Galen's Escape, Noboru the Cudgel.
   - New Harborage quests: This Light of Mine, Lost in Transit, Abridged Notes on Draenethyst, Blood of My Blood (~10k guessed).
   - **≈29k quest XP.**
   - Evidence: https://foreverdb.net/quests/swamp-of-sorrows ; https://www.wowhead.com/forever/quest=93585 ; https://www.wowhead.com/forever/quest=93663 ; https://www.wowhead.com/forever/quest=1396 ; https://www.wowhead.com/forever/quest=1425
   - Launch: the leader at 38.85–39.19 and the duo at 39.31–39.57 (race.aotc.gg).
7. **Fly Nethergarde → Darkshire → Booty Bay at ~39.8:**
   - Sunken Treasure part 4 (Fleet Master Seahorn).
   - Ansirem's Key → "Pretty Boy" Duncan → The Curse of the Tides (2,250 + 3,150; Catelyn and the Altar of the Tides island).
   - Pirates for Snuff and Dizzy's Eye.
   - Then the turn-ins as written (l06-079), and on to the Felsteed.
   - Evidence: https://www.wowhead.com/forever/quest=603 ; https://www.wowhead.com/forever/quest=610 ; https://www.wowhead.com/forever/quest=611

**Totals:** **≈104k quest XP + ≈62k kill XP = ≈167k in ≈4.5 h**, including ~0.6 h of flights and walks.

**End unchanged:** Thelsamar 40.1, Felsteed learned. Changes inside:
- Training is now 34 (Ironforge), 36 (Stormwind), 38 (Ironforge) and 40 (Ironforge).
- Flight paths add Nethergarde Keep, used by part 9.
- Part 7's start text needs only the training line updated.

**Time:** ≈12.8 h (was 14.4).

### Part 7 — Badlands, Riverglades, Uldaman (40.1 → 45.3)

**Replace:** the optional whelp grind (l07-027). Remove the Swamp of Sorrows bail-out steps (l07-039 to l07-041): part 6 now owns that zone.
- The bail-out becomes Kopp's 42–43 Stranglethorn naga grind, or more Badlands.

**Add:** no new zone. Re-rate Uldaman at Forever's dungeon multiplier (§1.2).
- Its in-instance quests are The Hidden Chamber, The Lost Dwarves, the Platinum Discs, Reclaimed Treasures and the reagent run.
- That is about +31k over the leg's Classic-based ~52k.
- So l07-051 ("keep questing in Riverglades until about 44.85") becomes "until about 44.4". Cut the north loop (Bolder'ok, about 1 h of Riverglades questing).
- Krol'dok, if its quests appear, also gets ×2 at its in-instance quests.
- Evidence: §1.2 table; https://www.wowhead.com/forever/zone=16591

**Confidence:** Riverglades moves from "nobody has entered it" to "used by launch racers at 36 and 42.5" (§1.1). Its quest list is still unpublished.

**End unchanged.** Time ≈13.8 h (was 14.5).

### Part 8 — **Searing Gorge**, Tanaris, **Feralas** (45.3 → 50)

**Replace:**
- The whole Hinterlands block (l08-004 to l08-027): its quests are ~16.6k at about the grind rate, and both grind blocks are ~307k (~1,100 kills).
- The Tanaris grind (l08-064/065) now starts at ~48.2 and covers the leftover ~246k (~880 kills).

**Add 1 — Searing Gorge at 45.3 → ~46.4.**
- **Entry:** fly Ironforge → Thelsamar, ride into the Badlands and take the trail south of Kargath. That route needs no key; the Loch Modan gate does. https://warcraft.wiki.gg/wiki/Searing_Gorge
- Learn Thorium Point, which links to Ironforge and Morgan's Vigil (https://foreverdb.net/travel). Leave by flying Thorium Point → Ironforge, and train 46 there.
- **Quests:**
  - Caught! → Ledger from Tanaris (handed in at Gadgetzan later) and The Key to Freedom (14.2k).
  - Kalaran Windblade's chain: Divine Retribution → The Flawless Flame → Forging the Shaft → The Flame's Casing → The Torch of Retribution → Squire Maltrake → Set Them Ablaze! → Trinkets (≈27.7k).
  - Thorium Point postings: Curse These Fat Fingers, Fiery Menace!, Incendosaurs?, STOLEN, JOB OPPORTUNITY, What the Flux?, Look at the Size of It! (≈31.9k).
  - Suntara Stones, an escort plus an Ironforge hand-in (8.8k).
  - Optional: WANTED: Overseer Maltorius and The Horn of the Beast, if not elite.
- **≈80k quest XP + ≈48k kill XP = ≈128k in ≈3.0 h.**
- Evidence:
  - https://foreverdb.net/quests/searing-gorge (27 quests, levels 47–52)
  - https://www.wowhead.com/forever/quest=4449 ; https://www.wowhead.com/forever/quest=4450 ; https://www.wowhead.com/forever/quest=3442 ; https://www.wowhead.com/forever/quest=3463 ; https://www.wowhead.com/forever/quest=7723 ; https://www.wowhead.com/forever/quest=7729 ; https://www.wowhead.com/forever/quest=3367
  - Classic Alliance guides put Searing Gorge at 47–48 (Judgement) or 50–51 (Kopp) (sweep-guides).

**At the Ironforge stop:**
- Buy a **Mithril Casing** at the Auction House for part 9's Chasing A-Me 01 (leg 9's seventh open question).
- Turn in Suntara Stones.
- Train 46. Level 48 waits for part 9's Ironforge stop.

**Then as written:** fly to Farholde, take the Powderfuse → Steamwheedle ship, Gadgetzan, and the Tanaris east loop (~46.4 → ~47.0). Hand in Ledger from Tanaris.

**Add 2 — Feralas at ~47.0 → ~48.2**, between the two Tanaris loops.
- **Route:**
  - Ride Gadgetzan → Shimmering Flats → Thousand Needles → Thalanaar (~12 min) and learn the flight path (Thyssiana: https://www.wowhead.com/forever/npc=4319).
  - Take the coast ferry to Feathermoon and learn that flight path (https://www.wowhead.com/forever/npc=8019).
  - Leave by flying Feathermoon → Thalanaar → Gadgetzan.
- **Quests:**
  - The High Wilderness.
  - The Ruins of Solarsal → Return to Feathermoon → Against the Hatecrest ×2 → Against Lord Shalzaru → Delivering the Relic.
  - The Missing Courier → Boat Wreckage → The Knife Revealed → Psychometric Reading → The Woodpaw Gnolls → The Writhing Deep → Freed from the Hive → A Hero's Welcome.
  - Freedom for All Creatures → Doling Justice part 1. Part 2 goes to Darnassus: skip it.
  - The orphan chain to The Newest Member of the Family. Food for Baby is in the Hinterlands: skip it.
  - The Mark of Quality → Improved Quality.
  - Zapped Giants and Fuel for the Zapping.
  - The Giant Guardian → Wandering Shay.
  - Thalanaar Delivery.
  - Screecher Spirits (handed in at Steamwheedle Port).
  - The Sunken Temple (Angelas; a breadcrumb only).
- **≈80k quest XP + ≈48k kill XP = ≈128k in ≈3.05 h**, including ~0.55 h of entry and exit.
- Evidence:
  - https://foreverdb.net/quests/feralas (74 quests, levels 43–50)
  - https://www.wowhead.com/forever/quest=2982 ; https://www.wowhead.com/forever/quest=4124 ; https://www.wowhead.com/forever/quest=4265 ; https://www.wowhead.com/forever/quest=2821 ; https://www.wowhead.com/forever/quest=7003 ; https://www.wowhead.com/forever/quest=2844 ; https://www.wowhead.com/forever/quest=3520
  - Kopp's 43–47 Feralas (sweep-guides §B).
- **Side benefit:** the Feathermoon flight path, which part 9 needs to reach Silithus.

**Then:** the Tanaris south loop as written, and the leftover grind at ~48.2 → 50 (Thistleshrubs, Searing Rocs).

**Conditional — Zul'Farrak:** run it only if a group member has the Mallet of Zul'Farrak for Gahz'rilla.
- Quests: Troll Temper, Scarab Shells, Divino-matic Rod, The Prophecy of Mosh'aru (open now that Screecher Spirits is done) and Gahz'rilla.
- About 53k at ×2 plus ~6k from mobs, in ~1.75 h. That saves ~0.35 h.
- Without the mallet, the 4 quests (~39k) run at about the grind rate: skip.
- Evidence: https://www.wowhead.com/forever/quest=2770 ; https://www.wowhead.com/forever/quest=3527

**End unchanged:** level 50, Gadgetzan, hearth Gadgetzan. Changes:
- Trained 46 only; 48 is trained in part 9.
- Flight paths now add Thorium Point, Gadgetzan, Thalanaar and Feathermoon. Aerie Peak is gone; no later part uses it.
- Carrying the Mithril Casing.

**Time:** ≈18.3 h (was 21.5).

### Part 9 — Un'Goro, **Blasted Lands**, Felwood, Winterspring, **Silithus** (50 → 55)

**NEW START:** trained only to 46. Train 48 and 50 at the Ironforge stop (l09-043), and 52 in Stormwind (see below).

**Replace:**
- l09-015 and l09-034 (the Un'Goro grinds, ~575 kills).
- Shrink l09-064 and l09-070 to what Timbermaw reputation needs, plus their share of the leftover grind.
- Shrink l09-086.
- The leftover grind is ~342k (~1,120 kills), placed:
  - Blasted Lands mobs up to 52, after the quests;
  - Deadwood and Winterfall camps (reputation and Spirit Beads);
  - Ice Thistle Hills.

**Add 1 — Chasing A-Me 01 parts 2–3 in Un'Goro**, with part 8's Mithril Casing. About 10.5k in 0.2 h. https://www.wowhead.com/forever/quest=4245

**Add 2 — Cenarion Hold flight path detour.** From north-west Un'Goro, walk the path into Silithus and learn Cenarion Hold. Fly to Gadgetzan instead of hearthing (Kopp's 51–52 step). About 3 min.

**Add 3 — Blasted Lands at ~51 → 52, at the Eastern Kingdoms transfer.**
- **Route:** after the Ironforge training stop, take the tram to Stormwind and fly to Nethergarde (flight path from part 6).
- **Quests:** Bloodmage Drazial and Bloodmage Lynnore's five collection quests (Snickerfang Jowls, A Boar's Vitality, The Decisive Striker, The Basilisk's Bite, Vulture's Vigor; 4,700 each), and Everything Counts In Large Amounts (5,650).
- Grind the same mobs to 52. Fly Nethergarde → Stormwind, train 52 in the Slaughtered Lamb, and take the **Stormwind Harbor → Auberdine** ship instead of Menethil's.
- **≈29k quest XP + ≈25k kill XP from the collection kills, in ≈1.35 h.**
- Evidence: https://foreverdb.net/quests/blasted-lands ; https://www.wowhead.com/forever/quest=2581 ; https://www.wowhead.com/forever/quest=2601 ; https://www.wowhead.com/forever/quest=3501 ; https://www.wowhead.com/forever/npc=7505
- Kopp: "No need to rush through this zone, so grind on anything you see."

**Add 4 — Silithus at the end, ~54.3 → 55.**
- **Route:**
  - After the Emerald Sanctuary turn-ins, fly Astranaar → Auberdine → Feathermoon → Cenarion Hold.
  - Do Deadly Desert Venom → Noggle's Last Hope → Noggle's Lost Satchel; Securing the Supply Lines → Stepping Up Security; The Twilight Mystery → The Deserter.
  - Fly Cenarion Hold → Feathermoon → Auberdine and take the boat to Stormwind, as the end state already says.
- **≈40.5k quest XP + ≈24k kill XP in ≈1.5 h**, including ~0.35 h of extra flights.
- Skip:
  - The Twilight Lexicon (three level-60 Keepers).
  - Wanted: Deathclasp.
  - Secrets of the Colossus (handed in at Booty Bay).
  - The Southwind chain (gated by Rabine Saturna in Moonglade).
- Evidence: https://foreverdb.net/quests/silithus ; https://www.wowhead.com/forever/quest=8277 ; https://www.wowhead.com/forever/quest=8278 ; https://www.wowhead.com/forever/quest=8280 ; https://www.wowhead.com/forever/quest=8281 ; https://www.wowhead.com/forever/quest=8284 ; https://www.wowhead.com/forever/quest=8285
- Classic Kopp did Silithus at 56.

**Add 5 — carries for part 10** (about 10 min, XP paid in part 10):
- Troubled Spirits of Kel'Theril: dig the four fragments on the Winterspring loop. https://www.wowhead.com/forever/quest=5245
- A Little Slime Goes a Long Way: accept it at the Ironforge stop and fill the jars on Felwood's path. https://www.wowhead.com/forever/quest=4512

**Optional — Azshara** (Loh'atu's two quests by Talrendis Point, and Kim'jael's chain):
- About 32k in 0.9 h, roughly par. Take it only if you'd rather quest than grind.
- Evidence: https://foreverdb.net/quests/azshara ; https://www.wowhead.com/forever/quest=3601 ; https://www.wowhead.com/forever/quest=5535
- The Loramus chain is not reachable: it needs The Demon Hunter, which starts in the Swamp of Sorrows/Blasted Lands chain at 60.

**Small saving:** the Auberdine and Astranaar flight paths are already known from part 4, so l09-046 to l09-048 become one flight.

**End unchanged:** level 55, Stormwind, trained 54. Changes:
- Flight paths add Cenarion Hold (and Talrendis Point if Azshara is done).
- Carrying Troubled Spirits of Kel'Theril and A Little Slime Goes a Long Way.

**Time:** ≈24.3 h (was 25.4).

### Part 10 — Burning Steppes and the Plaguelands (55 → 60)

**NEW START:** the same, plus the two carried quests.

**Replace:** shrink l10-094, l10-110 and l10-111 by ~30k (~95 kills) on the main path, and much more with the group options.

**Add (main path):**
- **The two carried turn-ins:**
  - A Little Slime Goes a Long Way: land in Ironforge on the Stormwind → Southshore flight (6,350).
  - Troubled Spirits of Kel'Theril: Aurora Skycaller at Northpass Tower, inside the 58–59 grind area (5,800).
- **Tirion's chain** (leg 10's tenth open question), about 25 min:
  - Of Forgotten Memories (6,000; Taelan's Hammer from Mercutio behind the Undercroft).
  - Of Lost Honor (6,200; Symbol in Northdale, inside the grind area).
  - Of Love and Family (6,200; Caer Darrow).
  - Evidence: https://www.wowhead.com/forever/quest=5781 ; https://www.wowhead.com/forever/quest=5845 ; https://www.wowhead.com/forever/quest=5846

**Conditional (§5):**
- **Light's Hope armour turn-ins**, if the NPCs are in game: Bonescythe Digs, Cryptstalker Armor Doesn't Make Itself..., Binding the Dreadnaught.
  - 6,600 each for 30 drops from Scourge, crypt fiends and Dark Irons you kill anyway.
  - Evidence: https://www.wowhead.com/forever/quest=9126 ; https://www.wowhead.com/forever/quest=9124 ; https://www.wowhead.com/forever/quest=9131 ; https://www.wowhead.com/forever/npc=16131
- **BRD as the default whenever a quest group forms within 20 min.**
  - Quests: Dark Iron Legacy, Ribbly Screwspigot, Incendius!, The Heart of the Mountain, The Good Stuff, Hurley Blackbreath, Marshal Windsor → Abandoned Hope, The Smoldering Ruins of Thaurissan → Kharan Mighthammer → The Bearer of Bad News.
  - About 48k Classic in-instance ×2, plus about 17k outside and about 8k from mobs: ≈120k in ≈3 h.
  - That matches the beta table's ~116k: https://us.forums.blizzard.com/en/wow/t/2385588/288
- **LBRS at ~58:** Kibler's Exotic Pets, En-Ay-Es-Tee-Why, Bijou's Belongings → Message to Maxwell → Maxwell's Mission, Urok Doomhowl. About 98k in about 2.3 h.
- **Stratholme Live at ~59:** The Flesh Does Not Lie → The Active Agent, The Great Fras Siabi, Houses of the Holy, The Archivist → The Truth Comes Crashing Down. About 98k in about 2.3 h.

**End unchanged.** Time ≈26.6 h on the main path (was 27.0). About 24 h with all group options.

## 4. Who owns what (one part per hub)

| Hub / quest set | Owner | Notes |
|---|---|---|
| Redridge, Westfall, Deadmines | 3 | unchanged |
| Duskwood first pass (24–28) | 4 | unchanged |
| The Stockade | 4 | now on the main path |
| Wetlands main quests | 4 | unchanged |
| Ashenvale (Astranaar, Forest Song, Raynewood) and the Auberdine turn-ins | **4** | new |
| Excavation, Gnomeregan, Dalaran, Hillsbrad and Alterac 30–34, Arathi 31–35 | 5 | unchanged |
| Duskwood return set (Night Watch 3, Look to the Stars 4, Worgen 3–4, Merrick's Bow, Valor Family 2) | **5** | new |
| Desolace (all Alliance quests) | **5** | new |
| Dustwallow Marsh (Theramore) | **5** | fallback only, if the Southshore → Auberdine boat fails |
| Wetlands elite group quests (Dun Modr, Goaz, Dragonmaw Gates) | 5 | conditional, with a group |
| Stranglethorn 31–41 | 6 | unchanged, plus Kurzen's Mystery, the Ansirem chain and Sunken Treasure part 4 |
| Alterac and Hillsbrad leftovers (Noble Deaths, Strahnbrad Mystery, Further Mysteries → Dark Council, Magical Analysis → Ansirem's Key) | **6** | new |
| Arathi 37–42 leftovers (Drywhisker and Stones of Binding, Wand over Fist chain, Faldir's Cove, Stromgarde) | **6** | new |
| Swamp of Sorrows (all Alliance quests, including the Harborage) | **6** | new; taken out of part 7's bail-out |
| Badlands, Riverglades, Krol'dok, Uldaman | 7 | unchanged |
| Searing Gorge | **8** | new |
| Feralas, plus the Shimmering Flats pickups | **8** | new |
| Tanaris | 8 | unchanged |
| Zul'Farrak | 8 | conditional (mallet holder) |
| Hinterlands | — | dropped; nobody uses it |
| Un'Goro | 9 | unchanged, plus Chasing A-Me 01 parts 2–3 |
| Blasted Lands | **9** | new |
| Felwood, Winterspring | 9 | unchanged |
| Silithus 55–57 (Cenarion Hold) | **9** | new |
| Azshara | 9 | optional |
| Burning Steppes, WPL/EPL | 10 | unchanged |
| Tirion's chain | **10** | new |
| BRD, LBRS, Stratholme | 10 | conditional |
| Light's Hope armour turn-ins | 10 | conditional |

## 5. XP budget per part (main path)

**Columns:**
- "XP needed" is from the Classic table.
- "Total XP added" = quest XP + kill or mob XP made while doing the added content (minus the dropped Hinterlands quests in part 8).
- "Pushed out/in" = XP left to the next part because a part now ends lower.
- "Kills left" use each part's own XP per kill.
- Hours are at 100 kills/h. Parts 1–2 are unchanged (9.1 h, ~130 kills).

| Part | Old levels | XP needed (old) | New levels | XP needed (new) | Old grind XP | Old kills | Old h | Quest XP added | Total XP added | XP pushed in | XP pushed out | Grind XP left | Kills left | New h |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | 18.3→23.5 | 125,280 | 18.3→22.45 | 95,565 | 48,000 | 300 | 7.9 | 0 | 0 | 0 | 29,800 | 18,200 | 114 | 6.0 |
| 4 | 23.5→30.0 | 241,400 | 22.45→29.4 | 244,535 | 101,500 | 550 | 12.2 | 72,900 | 104,100 | 29,800 | 27,200 | 0 | 0 | 10.8 |
| 5 | 30.0→35.3 | 294,230 | 29.4→35.3 | 320,810 | 97,000 | 400 | 13.0 | 72,250 | 115,600 | 27,200 | 0 | 8,600 | 35 | 13.0 |
| 6 | 35.3→40.1 | 370,240 | 35.3→40.1 | 370,240 | 188,000 | 690 | 14.4 | 104,150 | 166,640 | 0 | 0 | 21,360 | 78 | 12.8 |
| 7 | 40.1→45.3 | 531,780 | 40.1→45.3 | 531,780 | 0 | 0 | 14.5 | (Uldaman +31k re-rate) | — | 0 | 0 | 0 | 0 | 13.8 |
| 8 | 45.3→50.0 | 610,850 | 45.3→50.0 | 610,850 | 475,000 | 1,700 | 21.5 | 143,400 | 229,400 | 0 | 0 | 245,600 | 879 | 18.3 |
| 9 | 50.0→55.0 | 802,800 | 50.0→55.0 | 802,800 | 471,000 | 1,545 | 25.4 | 80,000 | 129,300 | 0 | 0 | 341,700 | 1,121 | 24.3 |
| 10 | 55.0→60.0 | 975,800 | 55.0→60.0 | 975,800 | 612,000 | 1,900 | 27.0 | 30,550 | 30,550 | 0 | 0 | 581,450 | 1,805 | 26.6 |
| **1–10** | | | | | | **7,215** (incl. part 2) | **145.0** | | | | | | **4,162** | **134.8** |

**How the new hours are built:** old hours − old kills/100 + kills left/100 + time of the added content (including entry travel). Added-content hours:

| Part | Added content | Hours |
|---|---|---|
| 4 | Stockade | 1.2 |
| 4 | Ashenvale | 2.75 |
| 4 | Slower Duskwood start | 0.1 |
| 5 | Duskwood return | 0.77 |
| 5 | Desolace | 2.88 |
| 6 | Northern return and the Swamp of Sorrows | 4.54 |
| 7 | Uldaman re-rate | −0.7 |
| 8 | Searing Gorge | 3.0 |
| 8 | Feralas | 3.05 |
| 8 | Hinterlands dropped | −1.0 |
| 9 | Chasing A-Me 01 | 0.2 |
| 9 | Cenarion Hold detour | 0.05 |
| 9 | Blasted Lands | 1.35 |
| 9 | Silithus | 1.5 |
| 9 | Carries for part 10 | 0.15 |
| 9 | Auberdine and Astranaar already known | −0.1 |
| 10 | Carried turn-ins | 0.1 |
| 10 | Tirion's chain | 0.45 |

Script: `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/r2/tools/budget.py`.

**Conditional options (group or in-game checks):**

| Option | Part | XP | Time | Saves |
|---|---|---|---|---|
| Wetlands elite quests with the Excavation group | 5 | ~28k | 1.0 h | ~0.2 h |
| Zul'Farrak with a mallet holder | 8 | ~59k | 1.75 h | ~0.35 h |
| Azshara | 9 | ~32k | 0.9 h | ~0.15 h |
| Light's Hope armour turn-ins | 10 | 19.8k | 0.1 h | ~0.5 h |
| BRD | 10 | ~120k | 3.0 h | ~0.7 h |
| LBRS | 10 | ~98k | 2.3 h | ~0.7 h |
| Stratholme | 10 | ~98k | 2.3 h | ~0.7 h |
| **All** | | | | **≈3.3 h** → ≈131.5 h and ≈2,800 kills |

## 6. Hubs considered and not used

| Hub | Why not |
|---|---|
| Dustwallow Marsh (Theramore) | ~38k Classic Alliance quest XP at 35–40. That is a third of Desolace for the same boat cost. Popular at launch at 34.5–36, so it stays as part 5's fallback (https://foreverdb.net/quests/dustwallow-marsh). The Felsteed pairing (Theramore → Ratchet flight) does not beat the Booty Bay boat, because part 6 ends in the Eastern Kingdoms. |
| Thousand Needles (Shimmering Flats) | Quests at 30–41 bounce to Gadgetzan, Ratchet and Booty Bay. Gadgetzan is unknown until 48, when they are grey. Only the Gahz'rilla pickup is used. |
| Stonetalon | Its quests are 15–28. Kopp only hands quests in there. |
| Stranglethorn 43–51 leftovers | Bloodsail captains, Cortello, Fever, Captain's Chest: about 25k solo after removing elites and group quests, for an extra Booty Bay trip at 45–48. |
| Hinterlands | 16.6k quest XP at about the grind rate. Its other chains need Feralas items, Darnassus or Booty Bay. Dropped. |
| Sunken Temple | Into the Temple of Atal'Hakkar needs the Hinterlands Rhapsody chain. The Stone Circle sends you to Ratchet. Only ~27k Classic is reachable (~55k ×2 in ~2 h + travel), about the grind rate (https://www.wowhead.com/forever/quest=3444). |
| Maraudon | Needs a Desolace detour at 48 (Feathermoon → Nijel's Point), and ~74k ×2 in ~2.5 h with travel. Par at best. |
| Winterspring return at 58–60, or Silithus in part 10 | A Kalimdor round trip of ~50 min from the Plaguelands. Silithus is moved into part 9 instead. The Frostsaber chain needs 58 and has no published XP. |
| Azshara's Loramus chain | Gated by The Demon Hunter (level 60) (https://www.wowhead.com/forever/quest=2744). |
| Riverglades from 38 (the early-switch rule) | Still no quest list. Part 6 now has enough Eastern Kingdoms supply that launch players have proven. |
| Alcaz Prison, Blackmaw Hold, Shaper's Terrace | No quest data. Test only. |
| Duskwood "Mission I–XVIII" dailies | Season of Discovery data with no Forever evidence (skeleton §1.4a). |

## 7. Risks and checks for the builders

1. **Boats** (parts 4 and 5). Check that the Menethil → Auberdine and Southshore → Auberdine ships run. If not, use the fallbacks named in each part.
2. **New-quest XP guesses:**
   - Vahlarriel's Vengeance, Merrick's Bow, Strahnbrad Mystery, the Harborage four, Ground to Keep, Dutiful Steps, and the Ashenvale four. Each is assumed at the Classic rate for its level.
   - About 35k in total. If they pay less, part 6 keeps ~60 more pirate and basilisk kills.
3. **Elites to confirm on Wowhead:** Marez Cowl, Otto and Falconcrest, Overseer Maltorius, Margol the Rager, Zzarc'Vul.
4. **Dungeon multiplier above 30 is unverified** (BRD, LBRS, Stratholme, Uldaman). If Forever pays Classic there, part 7 keeps its north Riverglades loop (+0.7 h) and the BRD, LBRS and Stratholme options are about par.
5. **Training gaps:**
   - Part 8 trains only 46 (48 waits until ~51 in part 9).
   - Part 6 trains 36 and 38 separately.
   - Both are cheaper than the extra Ironforge trips they replace.
6. **Quest log:** Ashenvale, Desolace and the northern return each add 6–10 quests. The main-path peak stays under 20 if the optional carries listed in R9 are abandoned at each part's end.

## Sources

**Launch leaderboard and maps:**
- https://race.aotc.gg/ (Nov 6, 05:54 UTC) ; https://foreverdb.net/maps/2548

**ForeverDB zone lists:**
- https://foreverdb.net/quests/ashenvale ; https://foreverdb.net/quests/desolace ; https://foreverdb.net/quests/arathi-highlands ; https://foreverdb.net/quests/swamp-of-sorrows ; https://foreverdb.net/quests/searing-gorge ; https://foreverdb.net/quests/feralas ; https://foreverdb.net/quests/blasted-lands ; https://foreverdb.net/quests/silithus ; https://foreverdb.net/quests/azshara ; https://foreverdb.net/quests/dustwallow-marsh

**ForeverDB quest XP logs:**
- https://foreverdb.net/quest/386 ; /377 ; /387 ; /388 ; /1199 ; /6921 ; /1221 ; /1013 ; /959 ; /2928 ; /167 ; /6563 ; /289 ; /464 ; /484

**Classic quest XP:**
- https://github.com/Questie/QuestieDB/blob/master/support/Forever/QuestXP/xpDB-classic.lua

**Travel and geography:**
- https://foreverdb.net/travel ; https://warcraft.wiki.gg/wiki/Searing_Gorge ; https://warcraft.wiki.gg/wiki/Experience_point

**Forums:**
- https://us.forums.blizzard.com/en/wow/t/2402916 ; https://us.forums.blizzard.com/en/wow/t/2402633 ; https://us.forums.blizzard.com/en/wow/t/2403106 ; https://us.forums.blizzard.com/en/wow/t/2402372 ; https://us.forums.blizzard.com/en/wow/t/2403203 ; https://us.forums.blizzard.com/en/wow/t/2385588/288 ; https://us.forums.blizzard.com/en/wow/t/2399089/10

**Wowhead Forever tooltips** (each checked with `tools/wh.mjs`, Nov 6) are the per-quest links in §3.
