# Sweep "youtube": video routes, tricks and launch-week evidence (WoW: Forever, Gnome Warlock 1–60)

Researched **2026-11-05** (launch +1 day). Sweep owner: "youtube".
Raw metadata saved in `WORK/raw-yt/` (`search*.txt` = search results, `videos*.txt` = title/date/views/description/chapters,
`links*.txt` = full link targets from descriptions). Helper I wrote: `scratchpad/myscripts/ytbatch.mjs` (runs `tools/yt.mjs`
one video at a time with a 6–25 s pause and one retry on HTTP 429), `scratchpad/myscripts/ytlinks.mjs` (same public watch page,
pulls the full URLs out of a description).

**Method and limits (read once).**
- I did **not** watch any video and had **no transcripts**. Everything below comes from: the title, upload date, view count,
  description and chapter list that YouTube serves on the public watch page (`tools/yt.mjs`); text routes that creators pasted into
  their descriptions; companion pages the descriptions link; and web write-ups. When I say "the video covers X", I mean the
  chapter list or description says so.
- YouTube returned **HTTP 429** (rate limit) for about one call in four at first and for every watch page after ~18:55 UTC. I slowed
  down, paused, retried once, then stopped; I did not try to get around it. ~30 videos are therefore title-only (listed in §I).
- **Mobalytics, Massively OP, Icy Veins news and playnews.gg returned 403** to WebFetch. Per the brief I did not retry them. That
  blocks the written versions of the Kargoz, Crix and RampageWoW guides (all hosted on Mobalytics).
- **Vintage tags:** `LAUNCH` = published Nov 2–5 about the live game or final build · `BETA` = Sept 17 – Oct 23 beta (capped at 20,
  then 30) · `PLAN` = a creator's pre-launch plan for 30–60 (never tested) · `CLASSIC` = carry-over.
- **Confidence tags:** `official` (Blizzard video/post or Wowhead Forever DB) · `beta-tested` (several independent sources) ·
  `community` (one creator, not cross-checked) · `theory` (my inference).
- Many guide creators carry **RestedXP affiliate links** (hammerdance, Kargoz, GuideMMO, Crix, MetaGoblin, Zalidan, Mudbucket,
  Dave The Gamer). Their routes very likely mirror the RestedXP route that is already extracted in
  `WORK/rxp-forever-gnome-warlock-1-21.txt` and `WORK/rxp-forever-gnome-warlock-dungeon-11-21.txt` — but I could not verify that
  from the videos, so I do not claim it.

---

## Route-changing findings (summary)

1. **The only full text route on YouTube (space goat, Oct 16, BETA, community) reaches 30 with SEVEN dungeons and lots of boats:**
   start zone → SW hearth → Hogger/Westfall FP → Dun Morogh+Loch Modan (~12–14) → **Hall of Thanes** → Westfall → **Deadmines** →
   swim to Booty Bay → Ratchet → **Wailing Caverns** → Darkshore/Ashenvale → **Ruins of Lordaeron** → Wetlands/Redridge → **Stockade**
   → **BFD** → Duskwood → **Excavation Site** = 30. It is a Night Elf priest route with group dungeons; for a solo-first warlock the
   WC and RoL legs are the obvious cuts (both far for Alliance; forums already show RoL is a trap). https://www.youtube.com/watch?v=jCQ2_WgXWcU
2. **Launch leaderboard, read twice (Nov 5 ~18:50 and ~19:20 UTC, i.e. 19.5 h and 20 h after launch) — the first launch evidence for
   the 30–38 zone order.** Alliance players at 32–34 moved **Wetlands (33) → Hillsbrad (34)**, **Hillsbrad (32) → Silverpine (32)**
   (likely the City of Dalaran attunement: Archmage Modera's image is at Silverpine 68.4, 45.2) and **Hillsbrad (32) → Alterac
   Mountains (33)** (where the City of Dalaran entrance is). My interpretation of *why* they are there is `theory`. The #1 (Alliance NE Hunter) was in **Desolace at 37** (search-engine copy, ~17h52m) → **Stranglethorn at 38**
   → **Swamp of Sorrows at 38** (20h). The only Gnome Warlock in the top 100 was **31, in Elwynn, 25.5k XP/h (#63)**; the top warlock
   a Human at **34 (#22)**. → For 28–34: Wetlands → Southshore/Hillsbrad → Dalaran attunement (Silverpine) → City of Dalaran (Alterac)
   appears to be what the fastest Alliance players actually did. `community·LAUNCH` https://race.aotc.gg/
3. **Wands have a real 0.5 s stand-still wind-up at launch.** The beta's fast "wand tech" (Boosticuff's 1–10 Gnome Warlock PB of
   **1:28:56**) was recorded during the bug where the wind-up did not work; Blizzard said the 0.5 s cast is intended and fixed it.
   Budget 1–10 at ~1.5–2 h for a warlock (`theory`), and don't plan kite-wanding. `official·BETA` (Kaivax) + `community·BETA` (PB)
   https://us.forums.blizzard.com/en/wow/t/2359185 ; https://www.youtube.com/watch?v=KTC3LkIyEhU
4. **Kargoz (Nov 4) titles a video "THIS Is the FASTEST Way to 60… Full Dungeon Leveling Route", but his own launch run is a
   multiboxed Troll Warrior + Shaman duo.** The content could not be read (no description/chapters; written guide on Mobalytics is
   403). Unknown whether it means repeated runs (which would conflict with the forum/dev evidence that a 2nd run is far worse than
   questing) or one run of each dungeon with its quests (which is our hybrid). Treat it as **duo/multibox-oriented and unverified for a
   solo warlock** until someone writes it up. `community·LAUNCH` https://www.youtube.com/watch?v=mVa2NWSBzBU ; https://www.youtube.com/watch?v=f2EbbBiqagc
5. **30–60 on YouTube is unanimous on the shape, untested on the details (PLAN):** 30–35 Arathi/Desolace/STV (or Hillsbrad+Alterac
   for Dalaran) → **Riverglades 35–45 instead of (most of) STV** → Tanaris/Feralas/Hinterlands 43–50 → Searing Gorge/Un'Goro/Felwood
   50–55 → Plaguelands/Winterspring/Burning Steppes 55–60, with Drowned City 35–40, Krol'dok 40–45, Alcaz 48–53, Blackmaw 55–60,
   Shaper's Terrace 58–60. Sources: Ctrl Alt Flex (Oct 24), Skidrow (Sept 26), Pixel & Profit (Oct 23), CrusherXGaming (Nov 3).
   `community·PLAN` — see §D.
6. **Riverglades access, from video descriptions (consistent with the official sweep):** "The Riverglades begins where the roads
   through Redridge used to end"; Alliance hub = **Farholde Keep** (Brotherhood of the Horse); the Twilight's Hammer holds
   **Twilight's Shroud** and **Krol'dok Stronghold**; there is a **Bloodmasters' Ring** fighting ring "deep in ogre territory".
   `official (Blizzard video chapters) + community (fan-channel description)·PRE-LAUNCH`
   https://www.youtube.com/watch?v=hTCBfrFZ2qU ; https://www.youtube.com/watch?v=wxhUaxty-Ig
7. **Shen'dralas = the old Valley of Bones (Desolace ~64, 82), with level-60 elites inside and no dungeon at launch** (beta scouting
   by death-run). Combined with the Honored-Magram requirement in the wowhead sweep → **skip for a fast route**. `community·BETA`
   https://www.youtube.com/watch?v=2mpbhiqGSBs
8. **Exploration/flight-path openers exist (Rothie Forever; EZLaunch addon, Nov 4) but are Human/Elwynn-based: level 5 in ~36 min
   with no kills.** For a Gnome they start with a tram ride and are not faster than Coldridge questing; they only help if Coldridge is
   unplayably crowded. → **Skip** (note as a launch-crowd fallback). `community·BETA/LAUNCH`
   https://www.youtube.com/watch?v=I_mqMtonKK8 ; https://www.curseforge.com/wow/addons/ezlaunch
9. **Tricks worth testing (single-creator, BETA):** the new **Menethil → Southshore → Auberdine** boat loop lets you grab the **Southshore FP** on a Menethil→Darkshore trip; hearth in Stormwind for the 20s; **Sida's Bag**
   (Menethil, quest 470, verified in the Forever DB) for a free bag while in the Wetlands; skip "collect meat" quests (buy the meat).
   Rejected: the Deadmines→Booty Bay swim (~20 min) and the WC/RoL legs.
   https://www.youtube.com/watch?v=jCQ2_WgXWcU ; https://www.wowhead.com/forever/quest=470
10. **Hammerdance's three route videos (Oct 22, Nov 1, Nov 4) have no chapters beyond "Alliance 0:00 / Horde 28:00" and no text;
    nothing about their zone order could be extracted.** They are RestedXP-sponsored. Gap. https://www.youtube.com/watch?v=lM9HCg4dBNM
11. **Warlock launch-week videos agree with the forum finding that pets are weak at launch** ("Solo'ing With Warlocks Just Got MUCH
    harder!", Nov 4) and that **level 30 is the pace change (drain-tank)** (Zalidan chapter "At level 30, the pace changes", Nov 4).
    `community·LAUNCH` https://www.youtube.com/watch?v=VUdkV7OFlRA ; https://www.youtube.com/watch?v=lR51DIgQsok

---

## A. The videos the brief asked for (what could and could not be extracted)

| Video | Date · views · length | What is extractable | Vintage · tag |
|---|---|---|---|
| hammerdance — **ULTIMATE Leveling Guide For Alliance In WoW Forever (1 to 30)** https://www.youtube.com/watch?v=dMoJDwMbnBE | **Oct 22, 2026** (last beta day) · 36,099 · 29:29 | Description = RestedXP 10%-off affiliate link + socials. **No chapters, no route text.** | BETA · community |
| hammerdance — **The BEST Way to Start in WoW Forever (Levels 1 – 20)** https://www.youtube.com/watch?v=sjiNjGNjSTc | **Nov 4, 2026** (launch day) · 75,443 (76,909 a few hours later) · 15:56 | Same affiliate-only description, no chapters. The fastest-growing route video of launch week. | LAUNCH · community |
| hammerdance — **The ULTIMATE Leveling Guide for WoW Forever (1-30 Horde and Alliance)** https://www.youtube.com/watch?v=lM9HCg4dBNM | **Nov 1, 2026** · 34,434 · 49:55 | Chapters: **0:00 Alliance, 28:00 Horde** (so ~28 min of Alliance 1–30). No text. | BETA-data, posted pre-launch · community |
| hammerdance — 10 WoW Forever Launch Day Leveling Tips (BEAT THE CROWDS!) https://www.youtube.com/watch?v=TDZHRNzCKcw | Nov 4 · 12,131 · 11:44 | Affiliate-only description. | LAUNCH |
| hammerdance — Dungeon EXP Buffs, Orc and Troll NERFS… https://www.youtube.com/watch?v=xPyyMqkcwU0 | ~Oct 15 ("3w ago") · 23,490 · 10:07 | Title only (Oct 8 dungeon-XP +20% patch). | BETA |
| hammerdance context: special guest on **official WoW: Forever Podcast ep. 3 (dungeons)**; Aggrend's "dungeons ≈ optimal questing" quote came from that thread (already in `research/`). https://worldofwarcraft.blizzard.com/en-us/news/24310653 | Oct 8 | — | official·BETA |
| ItalianSpartacus — **All the Ways to Get 1 to 20 as Alliance** https://www.youtube.com/watch?v=-SPLVYymtHM | **Sept 26, 2026** · 63,666 · 24:13 | Description: "The fastest, most efficient Alliance leveling routes 1-20 … across Human, Night Elf, **Dwarf/Gnome**, and Skyborne, plus a full transportation cheat sheet and which dungeons you'll be doing. **Dungeon XP got nerfed hard, so dungeon QUESTS are the way to go.**" Chapters: 0:00 Intro & TL;DW · 2:01 Best Leveling Path? · 2:34 Quick Leveling Tips · **6:37 Hold Onto Quests** · 9:07 Transportation Cheat Sheet · 10:41 Human · 13:48 Night Elf · **15:43 Dwarf & Gnome Leveling Path** · 18:02 Skyborne · **18:46 Which Dungeons to Run?** Links: Mobalytics zone map (403 here) and a Reddit transport sheet (blocked). Earlier research (comment): at 15 do every dungeon once, **HoT first (→ ~17), then Deadmines; Lordaeron optional (long boat)**. | BETA (pre-Oct-1 cut) · community |
| GuideMMO — **WoW Forever Leveling Guide 1-60 (Zones, Dungeons, Tricks & More)** https://www.youtube.com/watch?v=PzmoejsKMog | **Nov 4** · 8,365 · **5:11** | Chapters only "0:00 Intro / 4:50 More Guides"; RestedXP link. A 5-minute 1–60 overview — no extractable zone order. | LAUNCH · community |
| Ctrl Alt Flex — **WoW Forever ALLIANCE Leveling Guide 1-60 \| Every Zone, Dungeon and Shortcut (Beta Route)** https://www.youtube.com/watch?v=ms7cb0GQUBg | **Oct 24** · 353 · 5:14 | Full zone list + level bands in the description (§D). Says itself "Levels 1-30 were tested in the beta; 30-60 is a plan"; footage for 30+ is **Classic footage**; narration is voice-model generated; sources are Mobalytics, Overgear, dving.net, AccountShark, Wowhead, Icy Veins, Blizzard. → a **compilation of web guides**, not independent testing. | BETA (1–30) / PLAN (30–60) · community |
| Rothie Forever — Alliance Exploration Leveling Guide https://www.youtube.com/watch?v=G5hV4ozjYl0 ; **Improved** version https://www.youtube.com/watch?v=I_mqMtonKK8 ; raw footage https://www.youtube.com/watch?v=GcOc6OQhdxE | Oct 4 (58k) · Oct 20 (19k) · Oct 21 | "Reach **level 5 in under 40 minutes without needing to kill a single mob**, whilst picking up valuable flight points along the way and making **over 7s**." Designed for humans; "every Alliance race can use it - just travel to Stormwind and into Elwynn Forest first." Raw-footage chapters: Northshire 0:10 → Elwynn 1:23 → **Redridge 8:08 → Duskwood 11:05 → Westfall 20:35** → Elwynn 24:26 → Stormwind 26:23 → Elwynn 29:54 → **DING 5 at 36:15**. A Guidelime port exists, and the **EZLaunch** addon (CurseForge, updated Nov 4) automates an "exploration, death skips and a handful of quick quests" Alliance launch route "inspired by" it. | BETA → used at LAUNCH · community |
| Kargoz — **WoW Forever: THIS Is the FASTEST Way to 60… Full Dungeon Leveling Route REVEALED** https://www.youtube.com/watch?v=mVa2NWSBzBU | **Nov 4** · 35,023 · 12:46 | Description = RestedXP + Mobalytics links only. No chapters. Content unknown. | LAUNCH · community |
| Kargoz — **TWO 60s in 5 Days Played?! The BEST WoW Forever Leveling Strategy** https://www.youtube.com/watch?v=D25xPG7A9xE | Nov 2 · 60,244 · 24:32 | Same; no chapters. Title implies ~2.5 days /played per 60 (i.e. a duo/multibox claim). | PLAN · community |
| Kargoz — WoW Forever LAUNCH: 1-60 Troll Warrior & Shaman **Duo-Leveling - Multibox** https://www.youtube.com/watch?v=f2EbbBiqagc | streamed Nov 4–5 · 31,207 · 4:38:16 | His actual launch run is a **two-character multibox (Horde)**. → his "fastest" dungeon route is built for a multibox/duo, **not a solo Gnome Warlock**. | LAUNCH · community |
| Kargoz — The TRUTH About Dungeon Leveling in WoW Forever https://www.youtube.com/watch?v=81PPG39E2YE | Oct 26 · 62,673 · 14:09 | No chapters/description content. | BETA |
| Kargoz warlock guides (Affliction Z1089BICDCA, Oct 3; Demonology VI3h379QvSY, Oct 20, now 92k) | — | Already summarised in `research/youtube.md` §3/§3a. | BETA |

**Bottom line for §A:** of the named videos, only ItalianSpartacus (chapters), Ctrl Alt Flex (text plan) and Rothie (chapters/timings)
yield route data. Hammerdance, GuideMMO and Kargoz yield titles/dates only.

---

## B. Alliance 1–30 zone orders found in videos (with levels)

### B1. space goat v1.3.37 — "WoW Forever Alliance 1 to 30 leveling route" (Oct 16, 2026; 11,566 views; 16:41) — **BETA, community**
https://www.youtube.com/watch?v=jCQ2_WgXWcU — text route pasted by the creator in the description ("per request heres a text
version… Loose overview, not a step-by-step guide"). He played a **Night Elf Priest**, mostly **grouped for dungeons**.
Chapters: 1:26 Starting Zone · 2:18 Flightpaths + Stormwind + Westfall · 4:17 Ironforge + Dun Morogh + Loch Modan + Hall of Thanes ·
5:50 Westfall + Deadmines · 7:30 Swim to Booty Bay + Barrens + Wailing Caverns · 9:28 Darkshore + Ashenvale · 11:03 Ruins of Lordaeron
· 11:24 Wetlands + Red Ridge + Stockade · 15:01 Duskwood + Excavation Site.

| # | Leg (his order) | Levels (his) | Content he lists | Use for a Gnome Warlock? (`theory`) |
|---|---|---|---|---|
| 1 | Starting zone | 1–12 | "Do all your starting zone quests… Skip the crowded cave box-looting quests at launch if it's a mess." Fishing + Cooking early ("Campfire buffs give bonus XP"). | Gnome: Coldridge + Dun Morogh to ~11–12 (matches RXP 1–11). |
| 2 | FP run + Stormwind | ~12 | "Other races: finish your starting zone and meet in Stormwind (Dwarves/Gnomes take the Deeprun Tram)." **"Stormwind: get FP and SET YOUR HEARTH HERE."** Kill Hogger; run into Westfall picking up quests "on the way to the Sentinel Hill FP (don't do them yet), then take the quest that flies you to Stormwind." | Hogger + SW hearth fits the RXP "11–12 Elwynn (Dwarf/Gnome)" leg. |
| 3 | **Dun Morogh + Loch Modan** | ~12–14 | "Gol'Bolar Quarry: trogg quests + the **Dark Iron Dwarf quest (gives a map needed for Hall of Thanes)**. Sabertooth bear quest, North Gate Pass kobold/miner quests. Thelsamar FP, then the Valley of Kings trogg chain (group up)." | Matches wowhead sweep (Nip 'Em in the Bud → Dark Iron Map). |
| 4 | **Hall of Thanes** | ~14 | "Run HALL OF THANES (new dungeon) near Ironforge." | Yes (Alliance-only quests, ~77% of a level at 15 per forum table). |
| 5 | Westfall + **Deadmines** | ~15–18 | Blanchy chain (bag reward), harvester quests, Defias/gnoll/murloc kills. "Defias chain to Deadmines sends you to Lakeshire. Grab that FP. Tip: be on the Moonbrook Defias kill quest while waiting for the messenger." Run Deadmines; **"Loot the Unsent Letter off VanCleef (needed for Stockade)."** | Yes. Unsent Letter = Q:373 (Forever DB: "Level 22"), → Bazil Thredd Q:389 (Stockade). |
| 6 | **Swim to Booty Bay** → Ratchet → **Wailing Caverns** | ~18–20 | "Swim south from the Deadmines exit to Booty Bay. If you die, res at the Booty Bay graveyard. Grab the Booty Bay FP." Boat to Ratchet, all WC quests; "the 2 quests in the eye of the skull above the WC entrance (one gives a 10-slot bag)"; "(may need 2 runs for drops)". Glowing emerald → Ratchet → Darnassus. | **Skip WC** (multi-run drop quests, far; forum: Alliance prep "far"). The swim is only useful if a later leg needs Booty Bay FP early. |
| 7 | Darkshore + Ashenvale | ~20–22 | "WANTED: Murkgill" (really **WANTED: Murkdeep!**, Q:4740) + beached skeleton remains; Astranaar FP; **Culling the Threat** (Dal Bloodclaw, Q:1054); **Expert Cookbook from Shandrina at Mystral Lake (lvl 20, 125 cooking)** — Shandrina = N:3955, **Ashenvale 49.4, 67.0**; Zoram Strand naga quests; "Pick up BFD quests but run it later." | Optional. Expert Cookbook only matters if we keep Cooking for the +5% food. |
| 8 | **Ruins of Lordaeron** | ~22 | "Hearth to SW → boat → hop off at Southshore. Head north past Dalaran… to Undercity. **Wall-climb to the back of the instance, let the Horde kill you, then res at the entrance** and zone in with your group." "Turn in the quest at the entrance before you leave!" | **Skip** (forum: Alliance boss quest 3,900 XP; pickup failures; PvP risk). |
| 9 | Wetlands + Redridge + **Stockade** | ~22–26 | Hearth SW → fly Menethil. Murloc + gnoll kills, alligator meat. "Pick up the Stockade chain start near Dun Modr. Group for elites." **Digging Through the Ooze (Sida): Sida's Bag drops from oozes (10-slot bag)** (Q:470, Forever DB: oozes at Ironbeard's Tomb). Fly Lakeshire: gnoll/orc/murloc, Stonewatch Keep elite (group); **Bellygrub** (An Unwelcome Guest, Q:34); **The Lost Tools** (Q:125, sunken chest, "watch out for the elite Lake Thresher"). Fly SW, run **Stockade** (Bazil Thredd). | Yes for Wetlands/Redridge; Stockade is a "maybe" (forum: ~76% of a level of quests at 26, several chains). |
| 10 | **BFD** | ~26 | "Boat to Darnassus → fly to Astranaar → Zoram Strand. Run BLACKFATHOM DEEPS." | Yes if the Gravestone Scepter (wand) is wanted; consider running it at ~24 as forums suggest. |
| 11 | Duskwood + **Excavation Site** | ~27–30 | "Duskwood: grab the Darkshire FP, do the easy quests (most of them). Fly to Menethil and run EXCAVATION SITE: WETLANDS (new dungeon). **That got me to 30!**" | Yes (wowhead sweep: dungeon quests are level 31 → run at ~28–31). |

Verified in Wowhead Forever (tooltip API, 2026-11-05): Q:373 The Unsent Letter ("Level 22"), Q:389 Bazil Thredd, Q:34 An Unwelcome
Guest, Q:125 The Lost Tools, Q:1054 Culling the Threat, Q:4740 WANTED: Murkdeep!, Q:470 Digging Through the Ooze, Q:151 Poor Old
Blanchy (Verna Furlbrow, 8 Handfuls of Oats), Q:65/Q:132 The Defias Brotherhood (Gryan Stoutmantle ↔ Wiley in Lakeshire), N:3955 Shandrina
(Ashenvale 49.4, 67.0), item 16072 Expert Cookbook ("Requires Cooking (125)"). `official·DB`

**Take-aways (`theory`):** (a) this group-heavy route used **seven dungeons** to make 30; at ~0.7–1.1 levels of quest XP per dungeon
(forum table) that is roughly 5–7 of the 29 levels — a solo route that keeps only HoT, DM, BFD and Excavation (plus maybe Stockade)
must find ~2–3 extra levels of open-world quests in the 20s (Wetlands has ~30 new quests per the wowhead sweep); (b) his dungeon order
HoT → DM → (WC) → (RoL) → Stockade → BFD → Excavation is close to RestedXP's dungeon guide (HoT 17–18 → RoL 18–19 → DM 19–20) and to
the forum XP table, except that he runs DM before RoL and BFD late (~26); (c) **Stormwind as the 20s hearth** and the
**Southshore stop on the Menethil→Auberdine boat loop** are the two transport ideas worth keeping.

### B2. ItalianSpartacus — Dwarf & Gnome path (Sept 26) — BETA, community
Only chapter timing is known (15:43–18:02 = ~2.5 min on the Dwarf/Gnome path; 18:46 "Which Dungeons to Run?"). The description's
key claim — "dungeon XP got nerfed hard, so dungeon QUESTS are the way to go" — matches every later source. Chapter "**Hold Onto
Quests**" (6:37) suggests keeping quests across zones for later turn-ins (content not readable). https://www.youtube.com/watch?v=-SPLVYymtHM

### B3. Skidrow — "My WoW Forever leveling route, 1 to 60: Alliance and Horde (the fun way)" (Sept 26; 24k) — BETA/PLAN, community
"Not a speed-leveling guide." Alliance chapters: Teldrassil start → level 10 Darkshore → **"The new boat to Stormwind"** → Ironforge
and Hall of Thanes → Westfall, Deadmines → **Ruins of Lordaeron and the Excavation Site** → Wetlands, Duskwood, Ashenvale or
Redridge → **"35 plus: Riverglades instead of Stranglethorn"** → "40 to 60: Tanaris, Un'Goro, the new dungeons". Also "which zones I'm
skipping on a PvP server". https://www.youtube.com/watch?v=XLBWghr72-M

### B4. Ctrl Alt Flex — Alliance 1–30 (Oct 24) — BETA (compiled), community
"Levels 1-30 follow the beta route (Elwynn Forest / Dun Morogh / Teldrassil / Zephras Isle, then Westfall, Loch Modan or Darkshore,
Redridge, Duskwood, Wetlands or Ashenvale) with the new dungeons **Hall of Thanes (13-18), Excavation Site: Wetlands (24-29) and City
of Dalaran (28-33)**." Chapters: 0:52 Levels 1-10 home zone · 1:14 **Levels 10-20: pick a branch** · 1:42 Levels 20-30: the shared
zones. https://www.youtube.com/watch?v=ms7cb0GQUBg

### B5. CrusherXGaming — "WoW Forever Leveling Guide 1 ~ 60 Route and Class Changes" (Nov 3; 24k; 20:14) — PLAN, community
Route chapters only: 15:55 Levels 1-12 · 16:21 12-20 · 16:49 20-30 · 17:27 30-40 · 17:53 40-50 · 18:16 50-60. Description: "The
public beta stopped at level 30, so the route above 30 is a plan, not a tested speedrun." Has a chapter "**The 'dungeon XP got halved'
myth**" (14:57) — consistent with the official notes (the Oct 1 cut was −50% on the **extra** dungeon-quest XP, not on dungeons as a
whole). Also lists a datamined (Oct 30–31) warlock change: "**Improved Drains now boosts Drain Mana instead of Wrack**" (the Nov 2 notes
say Improved Drains no longer boosts Wrack — consistent). https://www.youtube.com/watch?v=x2wJQxLG60M

### B6. Dave The Gamer — "Where To Level from 20-30!?" (Oct 6; 16k) and Top Shraman "WARCRAFT FOREVER 20-30 leveling guide" (~early Oct) — BETA
Dave's description has no route text (only "0:00 Intro"); Top Shraman's was not opened (title only). https://www.youtube.com/watch?v=llVjRMyuAkw ; https://www.youtube.com/watch?v=P7DMXzF7d_U

### B7. Exploration / flight-path openers (Rothie Forever, Icosiol, EZLaunch) — BETA→LAUNCH, community
- Rothie (above): **no-kill exploration to level 5 in ~36 min** through Elwynn → Redridge → Duskwood → Westfall → SW → Elwynn,
  collecting flight points and >7 silver. Built for Humans (Northshire start).
- Icosiol, "How to Get Ahead of the Zerg on WoW Forever Launch Day (Flight Path Run)" (Oct 26; 51k): "spend Day 1 running the two
  continents, collecting flight paths, and picking up **discovery XP**", credited to Rothie; aimed at players with "an hour or two to
  play on Day 2". https://www.youtube.com/watch?v=CL6IWiZxZQ8
- EZLaunch addon (CurseForge, updated Nov 4): "takes a fresh Alliance character from level 1 through exploration, death skips and a
  handful of quick quests"; route "Northshire → Goldshire → east Elwynn → Redridge… Duskwood, Westfall, and Stormwind"; shows
  "exploration XP and run timer". https://www.curseforge.com/wow/addons/ezlaunch
- **Verdict for our route (`theory`):** Gnomes start in Coldridge, which launch forum posts say is the quietest Alliance start
  (least-played race). Coldridge questing reaches 5 in well under 40 min and gives the Imp quest; the exploration run would
  need a tram trip at level 1 and gives no class quest. → **Skip.** Keep only the idea "grab Sentinel Hill / Lakeshire / Darkshire
  FPs when passing" (they are on our route anyway).

---

## C. Dungeon insertion points according to videos (Alliance)

| Dungeon | Video evidence (level / position in route) | Agrees with forum/official? |
|---|---|---|
| **Hall of Thanes** | space goat: right after Dun Morogh/Loch Modan at ~14 (needs the Dark Iron map from Gol'Bolar). ItalianSpartacus (viewer comment, per `research/youtube.md`): first dungeon, "→ ~17". Skidrow: after the boat to SW. Hazpataz (beta, ~Oct; per `research/youtube.md`): "**Don't enter until you have all 5 quests**" incl. a "**hidden 5k XP**" one (https://www.youtube.com/watch?v=_SPMGBs4Vcw). Mudbucket (Nov 3): "the first dungeon around level 15". | Yes (official 13–18; forum table: ~77% of a level at 15). |
| **Deadmines** | space goat: after the Westfall Defias chain (~16–18); loot the **Unsent Letter** for Stockade. ItalianSpartacus: second dungeon. | Yes (~99% of a level at 18 in the forum table). |
| Wailing Caverns | space goat only (Night Elf; swim to Booty Bay → Ratchet). | **Skip for a Gnome** (far; drop quests may need 2 runs). |
| Ruins of Lordaeron | space goat (~22, Undercity wall-climb + death trick), Skidrow, RestedXP dungeon guide 18–19. ItalianSpartacus: "optional (long boat trip)". | **Skip** (forums: launch pickup failures at 16, low Alliance XP). |
| **Stockade** | space goat: ~24–26 after Wetlands/Redridge; needs Unsent Letter → Bazil Thredd. | Maybe (forum: ~76% of a level at 26; many chains). |
| **BFD** | space goat: ~26 via Darnassus boat → Astranaar. Araphorgaming (Nov 3) lists dungeons "and the wand you want before level 30" (the Gravestone Scepter is the known BFD quest wand). https://www.youtube.com/watch?v=JXfHMljcIkU | Yes (forum: ~89% of a level at 24). |
| **Excavation Site: Wetlands** | space goat: last, "got me to 30". Ctrl Alt Flex: 24–29. Mudbucket: "**Excavation Site: Wetlands (26-31)**". | Yes; DB quests are level 31 → run ~28–31. |
| City of Dalaran | Ctrl Alt Flex: 28–33. Many beta guides (Farmerfarms "Dalaran Attunement Guide & ALL Quests", 66k views) https://www.youtube.com/watch?v=fEruSWVwJjM | Yes (official 28–33; forum ~69% of a level at 32; attunement starts in Southshore). |
| Drowned City / Krol'dok / Alcaz / Blackmaw / Shaper's Terrace | Only in PLAN videos (Ctrl Alt Flex, Pixel & Profit, Skidrow). | Untested. |

---

## D. 30–60 in videos (all PLAN or official preview; nothing launch-tested)

### D1. Ctrl Alt Flex Alliance 30–60 plan (Oct 24) — community·PLAN https://www.youtube.com/watch?v=ms7cb0GQUBg
Quoted from the description, in its order: "**Arathi Highlands / Desolace / Stranglethorn Vale**, the new **Riverglades (35-45, about
200 quests)**, **The Drowned City (35-40)**, **Krol'dok Stronghold (40-45)**, **Tanaris / Feralas / Hinterlands**, **Alcaz Prison
(48-53)**, **Searing Gorge / Blasted Lands / Azshara**, **Un'Goro / Felwood**, **Blackmaw Hold (55-60)**, the **Plaguelands / Winterspring
/ Burning Steppes**, **Shaper's Terrace (58-60)** and **Mount Hyjal at 60**." Chapter bands: 2:26 **30-40** "the plan begins" · 2:54
**35-45 Riverglades** · 3:37 **40-50** · 3:55 **43-55** · 4:12 **50-60** "the finish". It also lists "the Legacy perks" and "the rules".

### D2. Skidrow (Sept 26) — "35 plus: Riverglades instead of Stranglethorn"; "40 to 60: Tanaris, Un'Goro, the new dungeons". community·PLAN
https://www.youtube.com/watch?v=XLBWghr72-M

### D3. Pixel & Profit — "WoW Forever Levels 30-60: Riverglades & Mount Hyjal Leveling Guide" (Oct 23; 175 views) — community·PLAN
Chapters: The road past 30 · **Riverglades: getting there** · **Riverglades: pick a side** · Dungeons along the way (Krol'dok
Stronghold, the Drowned City, Alcaz Prison, Blackmaw Hold, Shaper's Terrace) · **Shen'dralas** ("the hidden zone") · Mount Hyjal ·
Plan your route. Sources: Blizzard news, Warcraft Tavern, warcraft.wiki.gg. https://www.youtube.com/watch?v=6kNrs4XLZyA

### D4. Official Blizzard — "Your Leveling Journey Past 30 | World of Warcraft: Forever" (Oct 19; 1.2M views; 6:54) — official·PRE-LAUNCH
https://www.youtube.com/watch?v=hTCBfrFZ2qU — description: "Past 30, your WoW: Forever leveling adventure will send you through some of
Azeroth's new areas like the Riverglades and Mount Hyjal." Chapters: Introduction to new zones · **The Brotherhood of the Horse**
(Alliance faction) · The Boulder Rock [Bolder'ok] Ogre clan (Horde) · Twilight's Hammer threat · The opening of Mount Hyjal ·
Endgame content and summary. (Written press coverage of it — Massively OP, Icy Veins — returned 403.)

### D5. "WoW Forever" fan channel — "Everything New From Level 30 to 60" (Oct 20; 17k) — community·PRE-LAUNCH (describes the official video)
https://www.youtube.com/watch?v=wxhUaxty-Ig — "**The Riverglades begins where the roads through Redridge used to end.** Alliance
players meet the **Brotherhood of the Horse**… Twenty years later they hold **Farholde Keep**. Horde players meet the **Bolder'ok Clan**…
Both sides clash with the **Twilight's Hammer**, which holds **Twilight's Shroud**, the old Horde's westernmost stronghold, and **Krol'dok
Stronghold**. Along the way: wrecking a pirate operation, rescuing a horse, and the **Bloodmasters' Ring**, a fighting ring deep in ogre
territory." Hyjal: work with the Druids of the Talon and Cenarion Circle; quest giver "Curious Crow"; 10-player raid **Barrow Deeps**.
→ Confirms the official sweep's "enter Riverglades from Redridge, hub Farholde Keep". Quest names/levels: none.

### D6. Shen'dralas videos — community·BETA
- BlizzardPapi, "I Made It Into WoW Forever's New Zone Before the Beta Ended (Shen'dralas)" (Oct 20): "tucked into the south of
  Desolace (you walk in through the **Valley of Bones**)… In Desolace, head for the big pillars around **64, 82**. That's the Valley of
  Bones, which is now part of Shen'dralas." Inside: "**Woodwyrd (level 60 elite, neutral, Shen'dralar)**", Magram centaurs ("still
  neutral to us"), Outcast Necromancers, a Shen'dralar blacksmith (Vindael), Historian Biraxas, Mordent Evenshade, Nyliaris at a door.
  "Blizzard's zone preview calls Shen'dralas a brand-new zone and says **there's no new dungeon inside it at launch**." He got in by a
  death-run (beta was capped at 30). https://www.youtube.com/watch?v=2mpbhiqGSBs
- FocustaGuides, "How To Get To Shen'Dralas (WoW Forever)" (Nov 2, 1:30) and "Welcome To Shen'Dar Village Quest" (~Oct) — titles only.
  https://www.youtube.com/watch?v=sN7L6KXK2FE
- Blizzplanet / BigChunkyTV / Athis exploration videos (Sept–Oct) — no text.
- **Route consequence (`theory`):** the zone sits behind the Magram/Gelkis rep gate (wowhead sweep: Honored Magram; quests 38–42) and
  has level-60 elites; no flight path (official sweep). → Skip for speed; Desolace centaur rep grinding is a time sink.

### D7. GuzuTV "30-60 in WoW Forever and my Plans for the Launch" (Oct 22; 34k) — a reaction to the official 30+ video (chapters: Exploring
Riverglades, Horde lore and quests, Mount Hyjal). https://www.youtube.com/watch?v=tQFzLRIYtd0 — no route content.

**What YouTube adds for 30–60 (`theory`, to test):** every route-maker who mentions it replaces most of STV with Riverglades at 35+;
nobody has a quest-level list, and nobody launch-tested it (launch leaders were 33–38 at the time of writing).

---

## E. Warlock-specific videos (new since the October file) — what changes the route

| Video | Date · views | Extractable content | Tag |
|---|---|---|---|
| Crix Forever — **Affliction Warlock 1-60 Leveling Guide \| WoW Forever** https://www.youtube.com/watch?v=fzzh4C0BSqE | Nov 2 · 40k · 24:47 | "Full talent progression, **Drain Tanking**, rotations, DoT management, Demons, stats, gear, races, professions, Soul Shards… from hundreds of hours testing Warlock throughout the WoW Forever Beta." Written guide on Mobalytics (403). Says RestedXP "updated their leveling guides with all the new quests". | BETA-tested, posted pre-launch · community |
| Crix Forever — Demonology Warlock 1-60 Leveling Guide https://www.youtube.com/watch?v=FRJVWrfOg8E | ~Nov 3 · 38k · 21:12 | Title only. | community |
| Zalidan — **COMPLETE Warlock Leveling Guide for WoW Forever (1-60)** (French) https://www.youtube.com/watch?v=lR51DIgQsok | **Nov 4** · 16.8k · 12:52 | Description: a 1–60 path "without having to return to the class trainer to change your talents", "the demon to summon at each tier, the talent order for each level, **the two-monster method**, **the level 30 drain tank**, the leveling plan from 30 to 60, and the race that will save you time"; Forever pitfalls: "**the wand that requires you to be stationary**, **the penalty for low ranks**, and **the talent that many still recommend even though it no longer exists**". Chapters: 4:45 "Du niveau 1 au 10 : la baguette avant tout" (1–10: the wand first) · 6:17 10–30 talents · 8:05 Voidwalker, Succubus or Incubus · 8:52 the technique to go fast · **9:24 "Au niveau 30, on change de rythme" (at 30 the pace changes)** · 10:14 30–60 plan · 11:11 mount & dual spec at 40 · 12:04 which race. Sources: Blizzard dev notes Sept 24 – Oct 27, forums, Wowhead talent DB. | LAUNCH-day upload, beta data · community |
| GuideMMO — WoW Forever Warlock Leveling Guide 1-60 https://www.youtube.com/watch?v=ZSckGly3iHw | Oct 31 · 34k · 9:40 | **Macros in the description:** `/cast Immolate` + `/petattack [harm,nodead]`; `/cast Shadow Bolt` + `/petattack [harm,nodead]`; `#showtooltip /castsequence reset=combat/target Immolate,Bane of Agony, Corruption`; `#showtooltip /cast [nochanneling] Drain Life`; `#showtooltip /cast [@mouseover] Fear`. Chapters: Talent Trees, Leveling Tips, Leveling Addon, Tips & Tricks, Macros, Professions, **Useful Weapons**. | BETA · community |
| MetaGoblin — The NEW WAY to Level Warlock 1-60 https://www.youtube.com/watch?v=iRz2T_L4HhE | Oct 27 · 68k · 34:32 | Chapters only (Nitty Gritty / Talents / "WTF do I press?"). | BETA |
| Araphorgaming — **WoW Forever Warlock Leveling Gear: Best Quests & Dungeons (Alliance & Horde)** https://www.youtube.com/watch?v=JXfHMljcIkU | Nov 3 · 5.9k · 7:00 | "which quests give it, which dungeons to run and when, and **the wand you want before level 30**… Every item is checked against the WoW Forever item database. The beta stopped at level 30, so the 30+ parts are my best guess." Chapters: Wands · **Alliance 1-20 · Alliance 20-30 · Alliance 30+ (best guess)**. Item names not in the text. | BETA/PLAN · community |
| JCServant Gaming — **Solo'ing With Warlocks Just Got MUCH harder! (WoW: Forever)** https://www.youtube.com/watch?v=VUdkV7OFlRA | **Nov 4** · 11k · 9:37 | Title only (matches the Nov 2 pet-HP nerf). | LAUNCH · community |
| Boosticuff — **1-10 Gnome Warlock + Wand Tech [1:28:56] \| WoW Forever Beta** https://www.youtube.com/watch?v=KTC3LkIyEhU | Oct 22 · 5k · 1:29:32 | "My current PB for Gnome Warlock 1-10. **This was during the wand bug where there was no wind up for wanding.** This speedrun is part of a larger 1-19 leveling video." | BETA · community |
| Venruki — I Rerolled Off Of Warlock In WoW Forever… Here's Why https://www.youtube.com/watch?v=fU6Uc8BjwB0 | ~Oct · 246k | Title only. | BETA |

**Wand wind-up (official):** Kaivax, Sept 23: "the 0.5-second cast time that precedes a Hunter's auto-shot or the use of a wand is not
functioning properly… Hunters and wand users don't need to stop to shoot for as long as intended… we will fix [it]".
https://us.forums.blizzard.com/en/wow/t/2359185 `official·BETA`. → Wanding needs ~0.5 s standing still at launch (Zalidan's "wand
that requires you to be stationary", Nov 4). Boosticuff's 1:28:56 is therefore a **lower bound** for Gnome Warlock 1–10.

---

## F. Tricks and skips from videos (for the route builder)

**Tricks (all community·BETA unless noted; test before publishing):**
1. **Deadmines exit → swim south to Booty Bay**, res at the BB graveyard if you die, take the BB flight path (space goat). The Classic
   travel guide puts the Westfall→Booty Bay swim at "about twenty minutes" (https://warcraft.wiki.gg/wiki/Stormwind_to_Booty_Bay_travel_guide,
   `CLASSIC`). Only worth it if the route needs Booty Bay/Ratchet soon after Deadmines — our solo route does not until STV at ~32–35,
   when the Booty Bay FP can be picked up on the way. → **Skip** (`theory`).
2. **The boat back from Menethil to Darkshore "stops at Southshore now, so grab that FP too"** (space goat: "Darkshore → boat to
   Wetlands (grab Menethil FP) → back to Darkshore. Boat to Stormwind. It stops at Southshore now"). The wording is ambiguous about which
   boat; it fits the official sweep's one-way **Menethil → Southshore → Auberdine** loop. For RoL he also writes "Hearth to SW → boat →
   hop off at Southshore". Verify the boat's destination in game. Southshore matters for the Dalaran attunement and the Drowned City
   giver (Southshore 50.4, 57.0).
3. **Hearth in Stormwind for the 20s** (space goat): Stockade, Dalaran-dungeon quest givers (Andromath, Shylamiir), boats to Darkshore
   and the tram all start there.
4. **Pick up Westfall quests on the way to the Sentinel Hill FP, don't do them, take the quest that flies you to Stormwind** (space goat)
   — i.e., collect the free flight before questing Westfall properly.
5. **Be on the Moonbrook Defias kill quest while waiting for the messenger** (the Defias Messenger escort-spawn in the Defias Brotherhood
   chain) (space goat).
6. **Sida's Bag** (Q:470, Menethil, oozes at Ironbeard's Tomb) — free 10-slot bag in the Wetlands (space goat; DB verified).
7. **Expert Cookbook** (Shandrina, Ashenvale 49.4, 67.0; needs Cooking 125) — only if keeping Cooking for +5% XP food (space goat; DB).
8. XP food named by Mudbucket (Nov 3): **Spiced Wolf Meat, Goretusk Liver Pie, Roast Raptor, Rockscale Cod** ("+5% XP from kills").
   https://www.youtube.com/watch?v=z2qwSQsD9RI
9. Hall of Thanes: **collect all 5 quests including a hidden one worth ~5k XP before entering** (Hazpataz, title + earlier research).
   Which quest is the "hidden" one is not stated; the best candidate (`theory`) is **The Treaty of Understanding (98423)**, the tablet
   quest in the final room that the wowhead sweep says our route was missing. https://www.youtube.com/watch?v=_SPMGBs4Vcw
10. Warlock macros (GuideMMO, above): one-button DoT `castsequence`, `[nochanneling]` Drain Life, mouseover Fear.
11. Mudbucket lists "**no summoning stones**" and "**the new Hillsbrad boat stop**" as Forever travel facts (Nov 3).

**Skips stated in videos:**
- "I skip most 'collect meat' quests. Buy the meat on the AH if you want the XP." (space goat)
- "Skip the crowded cave box-looting quests at launch if it's a mess." (space goat)
- Mobalytics' launch tips video has a chapter "**Skipping Early Quests**" (Nov 2; 37k). https://www.youtube.com/watch?v=K1dLYGJfU3E
- Ruins of Lordaeron "optional because of the long boat trip" (ItalianSpartacus, comment per earlier research).
- Wailing Caverns (implicitly: only a Night Elf/Kalimdor route goes there).

## G. Pace benchmarks (videos + live leaderboard)

| Benchmark | Number | Source · date | Tag |
|---|---|---|---|
| Gnome Warlock 1–10, beta speedrun PB | **1:28:56** with "wand tech" during the no-wind-up wand bug (so launch will be slower) | Boosticuff, Oct 22 https://www.youtube.com/watch?v=KTC3LkIyEhU | community·BETA |
| Human 1–5 by exploration only | **DING 5 at 36:15** of raw footage, no kills, FPs collected, ">7s" | Rothie Forever raw footage, Oct 21 https://www.youtube.com/watch?v=GcOc6OQhdxE | community·BETA |
| Alliance 1–30, grouped, 7 dungeons | "That got me to 30!" (no time given) | space goat, Oct 16 https://www.youtube.com/watch?v=jCQ2_WgXWcU | community·BETA |
| Launch leaderboard, my read ~18:50 UTC Nov 5 (19h30m after launch) | #1 Ksuper (Alliance NE Hunter) **38, Stranglethorn Vale, 43.9k XP/h**. Alliance 30–33 with a zone shown: **Wetlands** (Tekz Mage 33, Smoshie Smash 33, Journals Pink 30), **Hillsbrad Foothills** (Vyrnal Tv 32, Blastinhos Tv 32, Winter Zhey 32), **Duskwood** (Mango Emo 32, Yachiru Unohana 31), Stormwind (2 at 30). Warlocks: **Kanting Sbv, Human, 33 (#23)**; Morgana Drea, Human, 31 (#85); **Jang Wonyoung, Gnome, 30 (#91)**. XP/h shown for 32–33 Alliance (mage, priest, druid, warrior, paladin, hunter): **27.0–31.6k**. | https://race.aotc.gg/ | community·LAUNCH |
| Same board, my second read ~19:20 UTC (20h after launch) | #1 Ksuper **38, Swamp of Sorrows**, 45.0k. Tekz Mage & Smoshie Smash **34, Hillsbrad Foothills** (were Wetlands 33 thirty min earlier), 31.8k/31.5k. Vyrnal Tv (Druid) **33, Alterac Mountains** (was Hillsbrad 32), 28.3k. Blastinhos Tv & Winter Zhey **32, Silverpine Forest** (were Hillsbrad 32), 28.6k/28.5k. Mango Emo 32 Stormwind (was Duskwood). Yachiru Unohana 31 Duskwood 26.1k; Figment Tv (Gnome Mage) 31 Duskwood 25.8k. Warlocks: **Kanting Sbv Human 34 (#22)**, Morgana Drea Human 32 (#56), **Jang Wonyoung Gnome 31, Elwynn Forest, 25.5k XP/h (#63)**. Gnomes in the top 100 at 31–32: 2 mages, 2 priests, 1 warrior, 1 warlock. (The page's "streamer list" also shows level 52–54 characters with "2d" times — impossible 20 h after launch; probably another race's data, ignored.) | https://race.aotc.gg/ | community·LAUNCH |
| Earlier snapshot of the same board (search-engine copy, ~17h52m after launch) | Ksuper **37 in Desolace**, 43.8k XP/h → i.e. the leader did **Desolace at ~35–37 before STV** | search result for race.aotc.gg (not my own fetch; treat as weak) | community·LAUNCH |
| Multibox duo claim | "TWO 60s in 5 Days Played?!" (≈2.5 days /played per character, duo/multibox) | Kargoz, Nov 2 https://www.youtube.com/watch?v=D25xPG7A9xE | community·PLAN |
| Streamer pace day 2 | Esfand LAN "Day 2 (level 17+)" (Nov 5 live title) | https://www.youtube.com/watch?v=p86g1vYABjg | community·LAUNCH |

→ For planning (`theory`): top-100 Alliance players at 31–34 show **~25–32k XP/h**; the #1 hunter ~45k. The one Gnome Warlock shown
had **25.5k XP/h** (level 31 at ~19.5 h /elapsed); the top warlock (Human, 34) was 4 levels behind the #1 after 20 h. Plan a skilled
Gnome Warlock at **~25–30k XP/h** for 1–34. Caveat: the board does not define its XP/h. 43.9k × 19.5 h ≈ 0.86M XP, while reaching 38 needs ~0.99M XP on the Classic table (unchanged in Forever per the official sweep), so it is not simply total XP ÷ elapsed time — maybe a recent rolling rate. Treat it as rough.

---

## H. Launch-week video index (Nov 2–5) — titles that bear on routing

Dates are upload dates from the watch page where I could read it; "~" = from the search list's relative time (searched ~18:45 UTC
Nov 5). Content beyond title/chapters is unknown unless quoted.

| Date | Creator — title | Why it matters | Link |
|---|---|---|---|
| Nov 3 (premiere) | **World of Warcraft (official) — Launch Overview** (1.96M views, 30:39) | Official overview; chapters: The World, Skyborne, Classes, Gear, Professions, Legacy System, **Campsites**, PvP, **Dungeons (22:37)**, Raids. "Over 1000 New Quests". No route detail in text. `official` | https://www.youtube.com/watch?v=n2Wg46fwmb0 |
| Nov 4 | hammerdance — The BEST Way to Start in WoW Forever (Levels 1–20) | Top launch-day route video (76k+). No text. | https://www.youtube.com/watch?v=sjiNjGNjSTc |
| Nov 4 | hammerdance — 10 Launch Day Leveling Tips (BEAT THE CROWDS!) | No text. | https://www.youtube.com/watch?v=TDZHRNzCKcw |
| ~Nov 4 | hammerdance — My WoW Forever Launch Day Plan (As A 22 Year WoW Veteran) | Title only (watch page rate-limited, §I). | https://www.youtube.com/watch?v=DwVwGDO5bMk |
| Nov 4 | Kargoz — THIS Is the FASTEST Way to 60… Full Dungeon Leveling Route REVEALED | Dungeon-route claim (multibox context). | https://www.youtube.com/watch?v=mVa2NWSBzBU |
| Nov 4 | GuideMMO — WoW Forever Leveling Guide 1-60 (5:11) | Overview only. | https://www.youtube.com/watch?v=PzmoejsKMog |
| Nov 4 | NOHITJEROME — "Blizzard JUST CHANGED Early Leveling on Launch Day" (same video also listed as "WoW Forever Launch Day Tips: Queues, Layering & Leveling"; 101k) | Probably the Nov 2 respawn-rate/quest-XP notes (official sweep); description links a "Launch Day Cheat Sheet" Google Doc I could not resolve (429). | https://www.youtube.com/watch?v=97pKelu2e4I |
| ~Nov 4 | NOHITJEROME — Blizzard Just Backtracked on Class Balancing | Title only. | https://www.youtube.com/watch?v=x9yujHhn-VY |
| ~Nov 2 | NOHITJEROME — Blizzard Just Explained WoW Forever Launch Night (228k) | Title only. | https://www.youtube.com/watch?v=DDXvRRZ4TzA |
| Nov 4 | Zalidan — COMPLETE Warlock Leveling Guide (1-60) | Drain-tank at 30; wand stand-still; low-rank penalty (§E). | https://www.youtube.com/watch?v=lR51DIgQsok |
| Nov 4 | JCServant — Solo'ing With Warlocks Just Got MUCH harder! | Pet nerf (§E). | https://www.youtube.com/watch?v=VUdkV7OFlRA |
| ~Nov 4 | Apie — Warlock Pet Nerf: How Bad Is It? (3:27) | Pet nerf. | https://www.youtube.com/watch?v=iJ0sG439GVo |
| ~Nov 4 | Outed — Worrying Warlock Changes Before Launch | Pet nerf / Nov 2 notes. | https://www.youtube.com/watch?v=_KUs6EePzvY |
| ~Nov 3 | Jazggz — LAST MINUTE WARLOCK CHANGES FOR WOW FOREVER… (RIP PETS) | Pet nerf. | https://www.youtube.com/watch?v=XNUe3bee-m0 |
| ~Nov 4 | fonsas — Last Minute RECAP – Warlock: Affliction, Demonology and Destruction after Nov 2 patch | Nov 2 notes recap. | https://www.youtube.com/watch?v=HE_kF4GX5PE |
| ~Nov 3 | MyBigBlaze — This Could Change EVERYTHING for Warlocks! | Title only. | https://www.youtube.com/watch?v=fjdsy7iYyv4 |
| Nov 2 | Crix Forever — Affliction Warlock 1-60 Leveling Guide | Drain-tank guide (§E). | https://www.youtube.com/watch?v=fzzh4C0BSqE |
| Nov 3 | Araphorgaming — Warlock Leveling Gear: Best Quests & Dungeons | Gear quests by bracket (§E). | https://www.youtube.com/watch?v=JXfHMljcIkU |
| Nov 3 | CrusherXGaming — Leveling Guide 1 ~ 60 Route and Class Changes | 1–60 chapters; "dungeon XP halved" myth (§B5). | https://www.youtube.com/watch?v=x2wJQxLG60M |
| Nov 3 | Mudbucket — Don't Level in WoW Forever Without These XP Boosts | XP foods, Sleeping Bag at 14, dungeon facts (§F). | https://www.youtube.com/watch?v=z2qwSQsD9RI |
| Nov 2 | Mobalytics — 14 Helpful Leveling Tips | "Skipping Early Quests", "Mob Tagging Tips", "Hearthstone Usage", "Use Campfires". | https://www.youtube.com/watch?v=K1dLYGJfU3E |
| Nov 4 | RageGamingVideos — How to Have the Best Start Possible | Chapter "**Overrated XP Buffs?**" (4:50) — a counterpoint on camp/food buffs; "Bag Sources & Quests". | https://www.youtube.com/watch?v=rjxQ7MpymfM |
| ~Nov 3 | BlizzardPapi — How to Get to the Riverglades in WoW Forever (Horde + Alliance Guide) (17:53) | Riverglades access; description not readable (429, §I). | https://www.youtube.com/watch?v=T_sQAFY--ps |
| Nov 2 | FocustaGuides — How To Get To Shen'Dralas | Shen'dralas access. | https://www.youtube.com/watch?v=sN7L6KXK2FE |
| ~Nov 4 | Xaryu — My EXACT Plan for WoW Forever Launch (178k) / ~Nov 5 "WoW Forever Had the BEST Launch I've Ever Seen" (161k) | Big-creator plan; title only. | https://www.youtube.com/watch?v=Z8Xdae8ZXjk ; https://www.youtube.com/watch?v=JF9aNjnOc-w |
| live Nov 5 | Ahmpy — WoW Forever FIRST 60 PUSH!!!! (live, ~3k watching) | Ahmpy is #6 on the board at 35 (Skyborne Warrior). | https://www.youtube.com/watch?v=uMCRJ7O205Y |
| ~Nov 5 | Supatease — Day 1 WoW Forever - Don't Make These Mistakes | Title only. | https://www.youtube.com/watch?v=nJs6fnjKSSo |
| ~Nov 5 | Dvalin Gaming — The Ultimate WoW Forever Leveling Addon (RestedXP Guide) | RestedXP review. | https://www.youtube.com/watch?v=d-5YGiXahMU |

## I. Found but not read (YouTube rate limit, 429) — worth a look by whoever has access

Titles/dates from search lists only (`WORK/raw-yt/search*.txt`, `search3-lost-notes.txt`). None of these were opened; listed so a
later pass (or a human) can check them first.

| Topic | Video | Why it may change the route |
|---|---|---|
| Riverglades entry | BlizzardPapi — How to Get to the Riverglades in WoW Forever (Horde + Alliance Guide), ~Nov 3, 17:53 https://www.youtube.com/watch?v=T_sQAFY--ps | His Shen'dralas video had a step-by-step text route with coordinates; this one may give the Redridge fork coordinates the official sweep lacks. |
| Sleeping Bag cost | Daniel Beng Welin — WoW Forever Sleeping Bag Guide — How Long It Takes & When to Get It (~Oct 23, 63k) https://www.youtube.com/watch?v=cxWfhN_u0XU ; Entalius Gaming — Is the Cozy Sleeping Bag Worth It? (~Oct 25, 30k) https://www.youtube.com/watch?v=SGWTNPkNXu8 ; space goat — Cozy Sleeping Bag Guide +3% XP as Alliance https://www.youtube.com/watch?v=kGALEnap6EM ; Studen Albatroz — NERFS CONTINUE! Sleeping Bag Changes https://www.youtube.com/watch?v=8gX_MkJu8uY | The time cost of the Westfall → Barrens → Stonetalon → Loch Modan → Hillsbrad chain decides whether the bag is in or out. |
| Gnome 1–12 | Daniel Beng Welin — WoW Forever Dwarf & Gnome Leveling Guide (1–12) — Efficient Quest Route https://www.youtube.com/watch?v=fnsrwe-e0uw | Direct comparison for leg 1 (already in `research/youtube.md` as "most relevant"). |
| Launch plans | hammerdance — My WoW Forever Launch Day Plan (As A 22 Year WoW Veteran) https://www.youtube.com/watch?v=DwVwGDO5bMk ; Xaryu — My EXACT Plan for WoW Forever Launch https://www.youtube.com/watch?v=Z8Xdae8ZXjk ; Mudbucket — My WoW Forever Launch Plan, Level 1 to Raids https://www.youtube.com/watch?v=hGMB--iVNV8 ; Venruki — This Is My Full Plan For The Launch https://www.youtube.com/watch?v=JyVbOzPzAio | Possibly route orders in chapters. |
| Dungeon prep | LostNiceland tv — Deadmines Location & ALL Quests Before You Go! https://www.youtube.com/watch?v=M6JiseAgJqk ; Deadmines SECRET Shortcut! Faster Route https://www.youtube.com/watch?v=xVJmQbimOWo ; City of Dalaran Location & ALL Quests https://www.youtube.com/watch?v=fvWuF91V7Jg ; SimonizeShow TV — Ruins of Lordaeron as Alliance + All Quests https://www.youtube.com/watch?v=wwYJGPNyJ-Q ; Farmerfarms — Dalaran Attunement Guide & ALL Quests https://www.youtube.com/watch?v=fEruSWVwJjM ; Chaoswithin — How To Solo Excavation Site Wetlands https://www.youtube.com/watch?v=8ODeOd1q0tQ ; Coolpedia — How to get to Krol'dok Stronghold https://www.youtube.com/watch?v=rVFPnJCa2YE ; Realm Gaming TV — All 9 NEW Dungeons Explained! Locations, Levels https://www.youtube.com/watch?v=CEtBSlR_hGI | Pre-quest lists and a Deadmines shortcut. |
| Grind spot | Z1RO WOW — INSANE Gnoll Hyper Spawn Farm! Fast XP & Cloth \| Wetlands \| WoW Forever Beta (~Oct 8) https://www.youtube.com/watch?v=cjRSee0VXDk | A possible 20s grind block (Mosshide gnolls, Wetlands) — unverified. |
| Warlock launch | Apie https://www.youtube.com/watch?v=iJ0sG439GVo ; Outed https://www.youtube.com/watch?v=_KUs6EePzvY ; Jazggz https://www.youtube.com/watch?v=XNUe3bee-m0 ; fonsas https://www.youtube.com/watch?v=HE_kF4GX5PE ; Kalamazi — Warlock Leveling Guides You NEED To See (~Nov 4) https://www.youtube.com/watch?v=N8nRd5ewh2E ; DudeStop (~Nov 4) https://www.youtube.com/watch?v=Prds35gG-64 ; WillE (~Nov 1, 346k) https://www.youtube.com/watch?v=UW7UCmA1IfU | Pet-nerf workarounds, launch talent builds. |
| Wetlands death run | Icy Veins headline "Here is How to Skip the Infamous Wetlands Death Run in WoW Forever" (snippet: "the death run is a thing of the past, at least in WoW Forever") — article returned 403. https://www.icy-veins.com/wow-forever/news/here-is-how-to-skip-the-infamous-wetlands-death-run-in-wow-forever/ | Probably the new Auberdine/Southshore/Menethil boats (a games.gg Wetlands guide says to take that boat line "instead of running through Dun Algaz on foot at low level": https://games.gg/world-of-warcraft/guides/wow-forever-wetlands-leveling-guide/). For a gnome, Loch Modan → Dun Algaz → Wetlands on foot at ~20 is still the direct way (`theory`). |

---

## J. What this sweep suggests per leg (`theory` unless a tag says otherwise — for the route builder)

| Leg | Video-derived suggestion | Evidence |
|---|---|---|
| 1–12 Coldridge / Dun Morogh | Quest Coldridge normally (no exploration opener). Get a wand as early as possible ("1–10: the wand first"), but stop to shoot (0.5 s wind-up). Expect ~1.5–2 h /played to 10. | Zalidan Nov 4; Kaivax Sept 23; Boosticuff PB 1:28:56 (beta, bugged wands) |
| 11–14 SW + Elwynn + back | Tram to SW at ~11: SW flight path, **bind in Stormwind** only if the 20s plan uses SW as the hub; Hogger; pick up Westfall/Lakeshire FPs when passing. | space goat; RXP 11–12 Elwynn leg (already in WORK) |
| 12–15 Dun Morogh east / Loch Modan | Do the Gol'Bolar Dark Iron spy quest for the **Dark Iron Map** (HoT breadcrumb), then **Hall of Thanes at ~14–15 with all 5 quests** (incl. the hidden ~5k XP one). | space goat; Hazpataz; Mudbucket "first dungeon around 15" |
| 15–19 Westfall | Westfall Defias chain → **Deadmines ~17–18**; loot **The Unsent Letter** (Q:373) for the Stockade. Skip "collect meat" quests. | space goat; forum XP table |
| 18–22 | **Skip WC and Ruins of Lordaeron.** Darkshore/Ashenvale only if a boat trip is already planned (BFD). | space goat (did them, group); forums (RoL trap) |
| 20–30 | Wetlands (≈30 new quests; **Sida's Bag** Q:470), Redridge (Bellygrub, Lost Tools), **Stockade** optional, **BFD ~24–26** (Gravestone Scepter), Duskwood "easy quests", **Excavation Site ~28–31**. Use the **Menethil→Southshore** boat leg to pick up the Southshore FP (Dalaran attunement / Drowned City giver). | space goat; Mudbucket (Excavation 26–31); wowhead sweep (DB levels) |
| 30–35 | Launch leaders went **Wetlands (33) → Hillsbrad (34)** and **Hillsbrad (32) → Silverpine (Modera, Dalaran attunement) / Alterac (City of Dalaran, 33)** → finish Wetlands (Dragonmaw/Goaz chains to ~34), then Southshore → attunement → City of Dalaran at ~32–33. | race.aotc.gg two reads Nov 5 (community·LAUNCH) |
| 35–40 | Leader went **Desolace (37) → STV (38) → Swamp of Sorrows (38)** (Swamp borders Riverglades' NE entrance); route videos say **Riverglades from 35** instead of most of STV. Pick one per the 30–40 evidence from other sweeps; YouTube has no quest-level data. | race.aotc.gg (weak snapshot); Skidrow, Ctrl Alt Flex (PLAN) |
| 40–60 | Plans only: Riverglades/Krol'dok to ~45 → Tanaris/Feralas/Hinterlands → Searing Gorge/Un'Goro/Felwood → Plaguelands/Winterspring/Burning Steppes; skip Shen'dralas. Felsteed (Ratchet) at 40. | Ctrl Alt Flex, Skidrow, Pixel & Profit (PLAN); BlizzardPapi (Shen'dralas) |

---

## Gaps (what I could not find)

1. **Hammerdance's actual Alliance 1–20 / 1–30 zone order and dungeon timing.** Three route videos (Oct 22, Nov 1, Nov 4), no chapters
   beyond Alliance/Horde, no text, no written summary anywhere (web search found none; no transcript tool). He sells RestedXP via
   affiliate links, so the RXP files in WORK are the best proxy — unverified.
2. **Kargoz's "Full Dungeon Leveling Route" (Nov 4) and "TWO 60s in 5 Days Played" (Nov 2) content.** No description/chapters;
   his written guides are on Mobalytics, which returned 403. Unknown which dungeons/levels he uses, and whether any of it applies solo.
3. **GuideMMO 1–60 (Nov 4)** is a 5-minute overview with no chapters — nothing route-specific extractable.
4. **ItalianSpartacus's Dwarf/Gnome path details** (chapter 15:43) and his "Which Dungeons to Run?" list — only chapter titles; the
   linked Mobalytics map (403) and Reddit cheat sheet (blocked) were not readable.
5. **No video gives quest-level detail for 30–60** (Riverglades hubs/quests, Drowned City/Krol'dok prerequisites, STV/Desolace
   order). All 30–60 video content is PLAN or zone tourism; launch leaders were only 33–38 on Nov 5.
6. **No launch-week (Nov 4–5) video with an Alliance route past ~20** — launch-week videos are tips, class guides and live streams.
   The only launch evidence for 28–38 zones is the race.aotc.gg zone column (§G).
7. **Warlock gear-by-bracket list** (Araphorgaming, Nov 3) — item names not in the description.
8. **Exact wand wind-up at launch** (0.5 s per Blizzard's beta post; no launch measurement found) and how much it slows 1–10.
9. **Rate limits:** from ~18:55 UTC every YouTube watch-page request returned HTTP 429, including a retry after a 9-minute pause, so
   ~30 videos found in search were never opened (listed in §I with links). I stopped rather than push harder. Search pages still
   worked at 18:59.
10. Comments (where creators often pin timestamps) are not available through the public page tool; I did not try other endpoints.
