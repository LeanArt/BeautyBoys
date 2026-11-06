# Sweep "launch": the launch race and live data (WoW: Forever, Nov 4–5, 2026)

Researched **2026-11-05, 18:00–19:00 UTC** (launch +20 h). Sweep owner: "launch".

**Tags.** Every fact has a **confidence** tag (`official` / `beta-tested` / `community` / `theory`) and an **era** tag:
- `launch` = Nov 4–5 live-server evidence
- `beta` = Sept 17 – Oct 23
- `Classic` = carry-over

This file adds to `sweep-official.md`, `sweep-wowhead.md` and `research/*.md`. Facts already there are only repeated when this sweep found new evidence.

**Main data source.** The data comes from the **rendered page** of https://race.aotc.gg/ only: the same server-side HTML a browser or WebFetch receives. I fetched it at 18:27 UTC, then saved a copy every 15 minutes (18:47 and 19:02 are used here).
- The page embeds the current top 100 plus **eight 30-minute history buckets** (`level`, `xp`, `xpMax`, `mapId` = in-game uiMapID zone, `totalPlayed` in seconds, `classId`, `raceId`, region, ruleset).
- The site also has a JSON endpoint (`/api/leaderboard`), but its responses are mixed with **decoy rows**, which is an anti-scraping measure. **I did not use or decode it**, and I deleted the copies.
- The leaderboard is a fan project, not Blizzard's. It is tagged `community` throughout.
- uiMapID → zone uses the standard Classic table: 1437 Wetlands, 1441 Thousand Needles, 1443 Desolace, 1434 Stranglethorn, 1417 Arathi, 1431 Duskwood, 1424 Hillsbrad, and so on.
- Tracked characters showed **no unknown map ids**. Nobody was in Riverglades, Hyjal, Shen'dralas or inside an instance at any sample.

---

## Route-changing findings (summary)

1. **The Wetlands is the Alliance 27→30 zone at launch.** In the eight 30-minute samples (14:00–18:00 UTC Nov 5), Alliance racers between levels 27 and 30 were in the Wetlands in **62 of 94 samples**. The rest were mostly brief Stormwind/Ironforge trips and Duskwood/Redridge finishes. Every Alliance racer seen at 27–30 used the Wetlands. `community, launch` https://race.aotc.gg/
2. **A real Gnome Warlock benchmark exists.** "Jang Wonyoung" (US, Gnome Warlock, Companion-tracked):
   - Levelled **27.1 → 30.1 entirely in the Wetlands** between 14h49 and 18h10 /played. That is about **0.9 levels/h, ~38k XP/h**.
   - Reached **30 at ≈18h03 /played** (interpolated), then went to **Ironforge** (30.6 at 18h36, which looks like turn-ins and training).
   - A Gnome Mage ("Figment Tv", US) followed the identical zone trail at the same pace. They are probably a duo, which is unconfirmed.
   - Treat **~18 h /played to 30** as the launch-day *upper-end* pace for a Gnome Warlock. `community, launch`
3. **After 30, Alliance racers went Wetlands → Stormwind/Ironforge → Duskwood (30–32).** Twelve Alliance characters were seen at 30–32. Every one that had moved on from the Wetlands to another questing zone went to **Duskwood** (Tekz Mage, Mango Emo, Sing Sing, Yachiru Unohana), except one that went to **Hillsbrad** (Siat Suke). A Human trio spent 30.4–32.5 in Stormwind and Elwynn; what they did there is unknown. Two players at **33.8 went back into the Wetlands**, which fits the new 30–34 Dragonmaw Retreat chain listed in sweep-wowhead. `community, launch`
4. **The 34–38 Alliance route is the Classic hunter route.** The world-first leader **Ksuper** (Night Elf Hunter, EU Normal) went:
   - **Arathi** (34.2) → **Thousand Needles** (34.6–35.0) → **Stranglethorn** (35.6–36.0) → **Desolace** (36.5–37.0) → **Thousand Needles** (37.4) → **Stranglethorn** (37.8–38.2, at 19h32 /played).
   - That is about **1 h per level at 35 and 36, and about 80 min for 37** (≈56–69k XP/h).
   - He **did not use Riverglades or any new Forever zone up to 38**.
   - A second Alliance player, **Tekz** (Human Mage), went the same way at 34: Wetlands 33.9 → **Arathi 34.2** (19:02 UTC). Arathi is the first 34+ stop for both Alliance players seen there.
   - This is the only launch evidence for Alliance 34–38. `community, launch`
5. **Leader pace (/played):**
   - **Ksuper: 30 at ≤ 12.3 h** (11:19 UTC snapshot, Forever Codex), **34.2 at 14h45**, **38.0 at 19h12**.
   - Best Horde: **Gingi** (Troll Hunter): 28.1 at 12h39, 30.6 at 15h05, 34.0 at 19h03. His route was Ashenvale → Thousand Needles → Hillsbrad → Arathi → Alterac.
   - Racers are **~42–51 % Hunters, ~13 % Mages and only 2–4 Warlocks in the top 100**. `community, launch`
6. **Fastest warlock seen:** "KANTING SBV" (Human Warlock, EU PvP, /who-tracked, so no zone or /played): **29 → 33 between 14:00 and 18:27 UTC**, about **1 level per wall-clock hour at 29–33**. Treat that as an upper bound on /played pace. `community, launch`
7. **XP needed per level is exactly Classic's**, as read live from racers' XP bars: 26→27 36,400 … 30→31 **47,400** … 34→35 **62,800** … 38→39 **80,800**. Classic-based time budgets per level stay valid. `community (launch data) — confirms sweep-official`
8. **RestedXP's own free Forever route for Gnome/Dwarf 1–21 is public** on GitHub (CC BY-NC-SA 4.0). It was maintained through launch: the Alliance route files were last changed Oct 28 – Nov 3, and the Forever dungeon settings on Nov 4.
   - Route: Coldridge → Dun Morogh (**Thunderbrew bind**) → IF/SW → **Elwynn 11–12 including the Voidwalker quest in Stormwind** → **Loch Modan 12–14 (bind Thelsamar)** → IF (grimoires, wand) → **Westfall 14–15 (bind Stormwind)** → **Stormwind→Auberdine boat** → **Darkshore 15–19 (bind Auberdine)** → **Redridge 19–20** → **Darkshore/Ashenvale 20–21**.
   - The paid guide then continues **"21-23 Ashenvale/Stonetalon"**.
   - I extracted a Gnome-Warlock-filtered skeleton to `WORK/rxp-forever-gnome-warlock-1-21.txt` and the dungeon variant to `WORK/rxp-forever-gnome-warlock-dungeon-11-21.txt`. `community, launch-maintained` https://github.com/RestedXP/RXPGuides/tree/main/Guides/forever
9. **RestedXP's dungeon variant runs Hall of Thanes at 17–18, Ruins of Lordaeron at 18–19 and Deadmines at 19–20.**
   - Ruins of Lordaeron route: fly to the Wetlands → **deathskip to the Baradin Bay graveyard** → **Menethil→Southshore boat** → run in. Then hearth to Stormwind.
   - Its Nov 3 Dungeon Guide marks **12 mandatory + 6 optional dungeons for Alliance**, now reaching **Maraudon and BRD**. Krol'dok, Alcaz, Blackmaw and Shaper's Terrace are "added shortly after launch".
   - RXP's **35–60 Forever routes are still not out**; Classic Era routes cover 35–60. `community, launch` https://kami-labs.fr/wow-forever/restedxp-en-francais-wow-forever/
10. **Speedrun tricks in the live RXP route:**
    - **Deathskips everywhere**, for example after the Imp quest's Feather Charms in Coldridge.
    - For warlocks: **Life Tap to under 10 % HP, then die to respawn at the spirit healer**, for example after "The Binding" in Stormwind.
    - Buy **Grimoire of Blood Pact** at Kharanos, **Consume Shadows and Sacrifice** at 14 in Ironforge.
    - Wands: **Smoldering Wand** and a **Greater Magic Wand** at about 14.
    - Pre-buy cooking and quest items from the AH.
    - **Leave the group after a dungeon to be moved to the nearest graveyard.**

    `community, launch`
11. **Dungeons were barely used by racers.** Not one 30-minute sample showed a top-100 Companion racer inside an instance. Launch players complain that a full **Hall of Thanes clear gave "3 bars" of XP** (about 15 % of a level if bars are the 20 XP-bar segments). **Ruins of Lordaeron quests** show as level 22 or can't be picked up at 16; one player says "The Wrath of Rath'mael" has a prerequisite.
    - This supports *quest the open world* and do a dungeon only when its quests are in the log.
    - Treat the Ruins of Lordaeron step as risky until verified.

    `community, launch` https://us.forums.blizzard.com/en/wow/t/2402437 ; https://us.forums.blizzard.com/en/wow/t/2402007
12. **Launch conditions will change the measured pace.**
    - Respawns are hyper-fast in starting zones (players are dying to instant respawns).
    - US realms had about 1 h of maintenance on Nov 5 (visible as a flat /played gap in US racers' data); EU realms did not.
    - Blizzard is "tweaking [population] numbers tomorrow" (Aggrend), which means fuller layers and more tag competition.

    Launch-day times are therefore optimistic for kill quests. `official + community, launch` https://us.forums.blizzard.com/en/wow/t/2401806 (post #27)

---

## 1. race.aotc.gg: what the leaderboard shows (and doesn't)

| Item | Finding | Tag / source |
|---|---|---|
| Who runs it | AOTC, a fan site. It names nobody, is not affiliated with Blizzard, and runs under the Blizzard Community Competition License (linked on the page). | `community` https://race.aotc.gg/ ; https://kami-labs.fr/en/wow-forever/race-to-60-wow-forever/ (Oct 8, pre-launch) |
| Ranking | By level, then XP within level; up to 100 rows. A class filter exists on the page (client-side only). | `community, launch` https://race.aotc.gg/ |
| Fields per row | Rank, class and race icons, name, region (US/EU), ruleset (Normal/PvP/RP/RP-PvP). For **Companion-app** users, also **zone**, **/played** (`totalPlayed`), **time this level**, XP/h and live XP %. **Faction and realm are not shown.** Faction must be inferred from race (Skyborne race id 95 sits in Alliance zones and 96 in Horde zones). | `community, launch` |
| Data sources | (a) **Companion** (Windows/macOS, "reads the game screen without touching memory"): updates every few seconds, includes zone and /played. (b) Battle.net login + addon: delayed. (c) Nothing installed: rows come from **/who scans** (`source: "who"`), showing only level, class and race, often stale. **Most of the top 100 are /who rows with no zone or /played.** | `community, launch` https://race.aotc.gg/ ; https://kami-labs.fr/en/wow-forever/race-to-60-wow-forever/ |
| History | The rendered page carries **eight 30-minute buckets (a 4-hour window)** of the top 100 with zone ids. There are no per-character pages and no long-term zone history. Earlier hours can only be recovered from third-party snapshots (e.g. the Forever Codex short at 11:19 UTC). | `community, launch` |
| Rules | One account, one character. Exploits, bots, gold and bought levels disqualify. Results are provisional for 48 h. Boards: First to 60, Fastest to 60 (by /played), Beta Sprint. Prizes are "titles" only. | `community` (pre-launch description) https://kami-labs.fr/en/wow-forever/race-to-60-wow-forever/ |
| Achievements | A player says achievements are disabled in Forever, so there is no "Realm First: 60" announcement. Not verified. | `community, launch` https://us.forums.blizzard.com/en/wow/t/2401078 (post #13) |

## 2. Who leads (snapshots, Nov 5 UTC)

| Time (UTC) | Leader | Class mix in top 100 | Source |
|---|---|---|---|
| 11:19 (≈12.3 h after launch) | Night Elf Hunter (Ksuper) at **30** | **Hunter 51, Mage 13, Paladin 9, Warrior 8, Druid 6, Shaman 6, Priest 3, Rogue 2, Warlock 2**; top 20 = 7 Hunters + 6 Mages | `community, launch` https://www.youtube.com/watch?v=nkMnanePS-A (Forever Codex short, Nov 5) |
| Nov 5, before the US maintenance (forum) | "two level 28 hunters" on US, Alliance, PvE, on "completely different routes"; then "a level 34 Night elf hunter on EU"; a level 29 on US "is KSuper" | – | `community, launch` https://us.forums.blizzard.com/en/wow/t/2402253 ; https://us.forums.blizzard.com/en/wow/t/2402333 ("2 level 29 alliance hunters on normal" before the US maintenance) ; https://us.forums.blizzard.com/en/wow/t/2402262 ("Ksuper still in front at level 34") |
| 18:27 | **Ksuper Worldfirst**, Night Elf Hunter, EU Normal, **38**, Stranglethorn, **19h12 /played**, "44.0k XP/h" | Hunter 42, Mage 14, Shaman 11, Druid 8, Warrior 7, Paladin 7, Priest 6, **Warlock 3**, Rogue 2. Levels 29–38. | `community, launch` https://race.aotc.gg/ |
| 18:27, ranks 2–7 | Six level-35 characters on **US PvP** (/who rows): Liz Pls (Druid, Skyborne), Sims Zz (Hunter, Skyborne), **Ahmp Ahmpy** (Warrior, Skyborne), Tommysalami (Mage, Skyborne), **Gunnar Dota (Dwarf Shaman, so Alliance)**, plus CV CV (EU PvP Hunter). The five US rows rose **in lockstep** (32→33→34→35 at the same samples), which strongly suggests one 5-player Alliance group (Ahmpy's "WoW Forever FIRST 60 PUSH" stream). | – | `community, launch` https://race.aotc.gg/ ; `theory` that it is one group; https://www.youtube.com/watch?v=9jxWmUg21yA |
| 18:27, top Horde | Gingi Beastmode (Troll Hunter, EU PvP) 34, Alterac, 19h03; several Undead Mages at 34 (Burning Spee, **Vitochie Gof**, **Jokerd Prime**). Jokerd's VOD title is "Re-Inventing AoE Leveling". | – | `community, launch` https://race.aotc.gg/ ; https://www.youtube.com/watch?v=D7YRIZYlqEU |

- Pre-launch predictions: first 60 in "under 72 hours", 3–5 days, "24 h with assistance". **GingiTV's own estimate: "55 hours?"**. Jokerd holds the Classic 2019 record of about 92 h. `community` https://us.forums.blizzard.com/en/wow/t/2400623 ; https://www.youtube.com/watch?v=1XZgW95BFt0 (Goldshire Mogger chapter list, Nov 3)
- The RestedXP blog says **"our RestedXP guide writers are racing to max level live"**. Ksuper, Ahmpy, Rav, Xaryu, Kargoz and Jokerd all carry RXP referral links, so most visible racers follow RXP routes. `community, launch` https://community.restedxp.com/world-of-warcraft-forever-world-first-race-11-4-2026/ (page returns 403 to fetchers; text from search snippet) ; video descriptions below.

## 3. Zone trails from the leaderboard (Companion-tracked, Nov 5, UTC)

Format: time → level (decimal = progress into level) → zone → /played. Source for every row: https://race.aotc.gg/ (rendered page, fetched 18:27 and 18:47 UTC) · `community, launch`.

**Alliance**

| Character | Trail |
|---|---|
| **Ksuper** (Night Elf Hunter, EU Normal) | 14:00 **34.17 Arathi** 14h45 → 14:30 34.62 **Thousand Needles** 15h15 → 15:00 34.96 TN 15h45 → 15:30 35.60 **Stranglethorn** 16h15 → 16:00 36.00 STV 16h45 → 16:30 36.54 **Desolace** 17h14 → 17:00 36.95 Desolace 17h44 → 17:30 37.37 **TN** 18h15 → 18:00 37.78 **STV** 18h45 → 18:27 38.04 STV 19h12 → 18:47 38.20 STV 19h32 → 19:02 38.29 STV 19h47 |
| **Jang Wonyoung** (**Gnome Warlock**, US) | 14:00 27.08 **Wetlands** 14h49 → 14:30 27.53 W 15h19 → 15:00 28.31 W 15h47 → (US maintenance, /played frozen) → 16:00 28.45 W 16h09 → 16:30 28.94 W 16h39 → 17:00 29.22 W 17h09 → 17:30 29.52 W 17h40 → 18:00 **30.13 Wetlands 18h10** → 18:27 30.57 **Ironforge** 18h36 → 18:30 30.68 Ironforge 18h40 → 19:02 **31.03 Stormwind** 19h11 (city stops at 30–31: training, grimoires and probably the class quest; `theory`) |
| Figment Tv (Gnome Mage, US) | 14:00 27.20 Wetlands 14h46 → … Wetlands throughout → 18:00 30.29 Wetlands 18h06 → 18:27 30.79 **Stormwind** 18h34 → 19:02 31.14 Stormwind 19h09 |
| Tekz Mage (Human Mage, EU PvP) | 14:00 29.30 Wetlands 14h46 → 15:00 29.97 Wetlands 15h46 → 16:00 31.21 **Stormwind** 16h46 → 16:30 31.85 **Duskwood** 17h16 → 17:00 32.46 Duskwood 17h46 → 17:30 32.83 **Dun Morogh** 18h16 → 18:27 33.74 **Ironforge** 19h13 → 18:47 33.89 **Wetlands** 19h33 → 19:02 **34.24 Arathi Highlands** 19h49 |
| Smoshie Smash (Human Priest, EU PvP; same /played as Tekz, probably a duo) | 18:27 33.07 Ironforge 19h13 → 18:47 33.81 **Wetlands** 19h33 |
| Vyrnal Tv / Blastinhos Tv / Winter Zhey (Night Elf Druid / Human Warrior / Human Paladin, EU; identical trails, a trio) | 14:00 28.0–28.1 Wetlands 14h45 → 15:00 28.6–28.7 Wetlands → 15:30 29.1–29.4 Stormwind/Wetlands → 17:00 30.3–30.45 **Wetlands** 17h45 → 17:30 31.3–31.4 **Elwynn/Stormwind** 18h15 → 18:27 32.45–32.57 **Stormwind** 19h12 |
| Mango Emo (Night Elf Hunter, EU) | 14:00 27.77 Duskwood → 14:30–16:30 28.05→29.89 **Wetlands** → 17:00 30.63 **Ironforge** 17h36 → 17:30 30.96 **Duskwood** → 18:27 31.91 Duskwood 19h03 |
| Sing Sing (Skyborne Hunter, Alliance, EU PvP) | 16:30 29.60 Wetlands 17h00 → 17:00 30.11 Elwynn → 17:30 30.38 **Duskwood** → 18:27 31.41 Duskwood 18h57 |
| Yachiru Unohana (Night Elf Rogue, EU Normal) | 14:30 27.05 Redridge → 15:00 27.48 Dun Morogh → 16:00–17:30 28.07→30.06 **Wetlands** → 18:27 30.72 **Duskwood** 19h05 |
| Journals Pink (Human Paladin, EU PvP) | 14:00 27.03 Westfall → 14:30 27.45 Elwynn → 15:00 27.76 Duskwood → 15:30–16:30 Stormwind 28.3–29.0 → 17:00 29.50 Duskwood → 17:30 29.87 **Wetlands** → 18:27 30.47 Wetlands 18h59 |
| Babyhoof Hooffles (Skyborne Druid, Alliance, EU PvP) | 14:30 27.41 Stormwind → 15:00 27.80 Duskwood → 15:30 28.32 Redridge → 16:00–18:27 28.58→30.76 **Wetlands** (19h11) |
| Siat Suke (Night Elf Hunter, EU PvP) | 14:00 26.65 Duskwood → 14:30–16:30 27.51→28.86 **Wetlands** → 17:30 29.66 **The Barrens** → 18:27 30.28 **Hillsbrad** 18h54 |
| Koko Il (Night Elf Hunter, EU Normal) | Stormwind 27.3 → Wetlands 27.5–28.5 → **Hillsbrad** 29.2 |
| Pad Pala (Human Paladin, EU PvP) | Redridge 27.2–27.4 → Ironforge 28.1 → **Ashenvale** 28.4 → Wetlands 29.0 |

**Horde (for comparison; the zones are shared contested zones)**

| Character | Trail |
|---|---|
| Gingi Beastmode (Troll Hunter, EU PvP) | 14:00 28.09 Ashenvale 12h39 → 14:30 30.60 **Thousand Needles** 15h05 → 15:30–16:30 31.69→32.60 **Hillsbrad** → 17:00–17:30 32.91→33.42 **Arathi** → 18:27 34.03 **Alterac** 19h03 → 18:47 34.40 Hillsbrad 19h23 → 19:02 34.84 **The Barrens** 19h38 |
| Dan Gorbachov (Troll Hunter) | Ashenvale 27.6 → Stonetalon 28.5 → Thunder Bluff / Thousand Needles 29–30.7 → Barrens 31.1 → Hillsbrad 31.4 |
| Artful Leetu (Skyborne Rogue, Horde) | Ashenvale 28 → Mulgore 29.8 → Stonetalon 30.1 → Hillsbrad 30.4 → Alterac 30.9 |
| Raz Gar (Orc Shaman) | Ashenvale 27.6 → Thousand Needles 29.5–29.9 → Barrens 30.4 → Hillsbrad 30.9 |

**Aggregate.** Alliance Companion samples, zone counts by level (one count = one 30-minute sample):
- 27: Wetlands 8, Duskwood 3, Redridge 3, Stormwind 2, others 3
- 28: **Wetlands 25** / 30
- 29: **Wetlands 18** / 24
- 30: **Wetlands 11**, Duskwood 3, Stormwind 3, Ironforge 2
- 31: **Duskwood 8** / 13
- 32: Duskwood 3, Stormwind 3, Hillsbrad 3
- 33: Ironforge 2, Wetlands 2
- 34: Thousand Needles 2, **Arathi 2** (Ksuper at 34.2, Tekz at 34.2)
- 35: STV 2
- 36: Desolace 2
- 37: TN 1, STV 1
- 38: STV 2

`community, launch` (my count; script in the scratchpad).

**What the trails can't tell us:**
- Which quests were done.
- Whether "Dun Morogh" at 32.8 (Tekz) was Gnomeregan, whose entrance is in Dun Morogh. That is `theory`; the Companion may report the entrance zone.
- Why Siat Suke visited the Barrens at 29.7. `theory`: Theramore or Ratchet travel, or a Barrens quest. Unknown.

## 4. Pace benchmarks (launch, /played)

| Who | Milestone | /played | Tag / source |
|---|---|---|---|
| Ksuper (Night Elf Hunter) | 30 | ≤ 12.3 h (seen at 30 at 11:19 UTC; launch was 23:00 UTC, with no EU downtime) | `community, launch` https://www.youtube.com/watch?v=nkMnanePS-A ; https://race.aotc.gg/ |
| Ksuper | 34.17 → 38.20 | 14h45 → 19h32 (**~4.8 h for 4 levels**). Per level: 35 ≈ 58 min, 36 ≈ 62 min, 37 ≈ 80 min, about 56–69k XP/h. | `community, launch` |
| Gingi (Troll Hunter) | 30.6 / 34.0 | 15h05 / 19h03 | `community, launch` |
| **Jang Wonyoung (Gnome Warlock)** | 27.08 → **30.13** | 14h49 → **18h10** (≈ 0.91 levels/h ≈ **38k XP/h in the Wetlands**); 30.57 at 18h36 after Ironforge turn-ins | `community, launch` |
| Figment Tv (Gnome Mage) | 27.20 → 30.29 | 14h46 → 18h06 | `community, launch` |
| Human trio (Druid/Warrior/Paladin) | 28.0 → 32.5 | 14h45 → 19h12 | `community, launch` |
| KANTING SBV (Human Warlock, EU PvP, /who only) | 29 (14:00) → 30 (15:30) → 31 (16:00) → 32 (17:00) → 33 (18:27) wall-clock | n/a. Fastest warlock on the board; about 1 level per hour at 29–33 by wall clock. | `community, launch` https://race.aotc.gg/ |
| Blizzard stat (beta) | average to 20 | 20.5 h Forever vs 20.4 h Classic (already in sweep-official) | `community` via Icy Veins |

**What this means for a Gnome Warlock (theory):**
- A strong but not world-first warlock on launch day reached **30 at about 18 h**.
- The hunter leader was about **6 h faster to 30**, and is levelling 35–38 at about 1 level per hour.
- A realistic non-racer target for our route is **~22–28 h to 30**. That is `theory`: a no-Legacy solo player without a duo partner, and respawns will be slower after launch week.

## 5. XP per level (live values)

Read from the `xp`/`xpMax` fields of racers at each level on Nov 5. `community (launch data)` https://race.aotc.gg/

| Level | XP to next | Level | XP to next |
|---|---|---|---|
| 26 | 36,400 | 33 | 58,600 |
| 27 | 38,900 | 34 | 62,800 |
| 28 | 41,400 | 35 | 67,100 |
| 29 | 44,300 | 36 | 71,600 |
| 30 | 47,400 | 37 | 76,100 |
| 31 | 50,800 | 38 | 80,800 |
| 32 | 54,500 | | |

These are identical to the Classic table (`Classic`), which confirms sweep-official's "XP per level unchanged".

## 6. RestedXP: launch statements and the public Forever route

### 6.1 Statements and status
- **Nov 4 blog:** "WoW Forever is here, and our RestedXP guide writers are racing to max level live!" `community, launch` https://community.restedxp.com/world-of-warcraft-forever-world-first-race-11-4-2026/ (403 to fetch; text from search snippet)
- **Nov 3 major guide update** (signed Brandung, reported by Kami Labs on Nov 4):
  - The **Dungeon Guide** now separates mandatory, optional and upcoming dungeons: **Alliance 12 mandatory + 6 optional** (Horde 13 + 4).
  - The route now extends to **Maraudon and BRD**.
  - **Krol'dok Stronghold, Blackmaw Hold, Shaper's Terrace and Alcaz Prison** are to be added "shortly after launch".
  - New routing tricks: a **deathskip inside Ruins of Lordaeron**, and **leaving the group after a dungeon to teleport to the nearest graveyard**.
  - Routes were adjusted for the **40-quest log**.
  - Levels 1–20 are free. The Dungeon Guide is included at no extra cost.

  `community, launch` https://kami-labs.fr/wow-forever/restedxp-en-francais-wow-forever/
- **35–60 Forever routes:** no date. RXP falls back to **Classic Era routes for 35–60**; "1–35 done" since Oct 9. `community` https://kami-labs.fr/en/wow-forever/mise-a-jour-restedxp-wow-forever/ ; https://wowforeverleveling.com/guides/restedxp-wow-forever (third-party sites repeating RXP's statements; no new RXP post found)
- **Joana:** no Forever guide exists. The guide's author (Paul) died in April 2024; Joana's guides are Classic-only. `community` https://www.curseforge.com/wow/addons/joanasguides ; https://us.forums.blizzard.com/en/wow/t/vanilla-wow-world-record-speedrunner-joana-passed-away/1843598

### 6.2 The free RXP Forever route is public: GitHub `RestedXP/RXPGuides`, folder `Guides/forever`
Repo: https://github.com/RestedXP/RXPGuides (licence **CC BY-NC-SA 4.0**; non-commercial, attribution, share-alike). Read and cite it as research; don't copy it into the site.

**Files** (fetched 2026-11-05, HEAD 5d840d7):
- `Guides/forever/Alliance-1-14_DwarfGnome.lua`, last touched by commits 71efc10 (Nov 2, "Darkshore & Redridge"), 190ae28 / f135892 (Nov 2, coordinates) and 9c08774 (Nov 3)
- `Guides/forever/Alliance-11-20.lua`
- `Guides/forever/dungeon/Alliance-11-20.lua`
- Commits a19d9a3 (Oct 28, "Ruins of Lordaeron deathskip time save") and 83eddc2 (**Nov 4**, Forever dungeon configurator)

`community, launch-maintained`

**Gnome Warlock section chain (Speedrun Guide 1–20, as the addon would show it):**
1. **1-5 Coldridge Valley.**
   - Warlocks sell their starting gear for copper, train Immolate, take "Beginnings" (Imp) and "Tainted Memorandum".
   - Kill Frostmane Novices for Feather Charms, then **deathskip** (die in Coldridge Valley to respawn at its spirit healer) instead of walking back.
2. **5-11 Dun Morogh.**
   - **Bind at Thunderbrew Distillery (Kharanos)**. Buy **Grimoire of Blood Pact** at Kharanos.
   - Several deathskips; grind targets such as "Grind to 4525+/5400 xp" at 31.2, 39.2.
   - Then Loch Modan pickups, **bind Thelsamar**, Ironforge ("Ride to Ironforge", "The Reports"), **Deeprun Tram** (Deeprun Rat Roundup, "Me Brother, Nipsy") to Stormwind, and accept **"Surena Caledon"**.
3. **11-12 Elwynn (Dwarf/Gnome).**
   - Stormwind flight path, then Life Tap + deathskip into Elwynn.
   - Elwynn quests, including the new **"Downstream" (91733)** and **"Croaky's Head" (91740)**.
   - Redridge flight path, back to Stormwind: **"The Binding" (Voidwalker) in Stormwind**, then **Life Tap deathskip** out.
   - Goldshire turn-ins, then Westfall pickups and the Sentinel Hill flight path. Hearth to Thelsamar.
4. **12-14 Loch Modan.**
   - "Snowbound" (86667), Filthy Paws, Rat Catching, troggs, "Silver of the Waves" (86614).
   - Grind to 13+9600, fly to Ironforge, then train and buy **Grimoire of Consume Shadows + Grimoire of Sacrifice**.
   - **Smoldering Wand / Greater Magic Wand**.
   - Tram to Stormwind, "Humble Beginnings".
5. **14-15 Westfall** (the guide's display name for Gnomes).
   - **Bind Stormwind.** Westfall quests including new "Testing the Wells" (92742), "Murloc Gills" (92744) and "Harvesting the Harvesters" (92909).
   - Hearth to Stormwind, "Fishin' Time" (95065), "Philmor's Favor" (97220), then the **Stormwind → Auberdine boat**.
6. **15-16 → 16-19 Darkshore.** **Bind Auberdine**, Auberdine flight path, grind to 18 at one point. Then the boat to Stormwind (via Menethil).
7. **19-20 Redridge.** Grind to 20 at the end.
8. **20-21 Darkshore/Ashenvale.** Astranaar flight path, then the paid guide's **"21-23 Stonetalon/Ashenvale"**.

**Dungeon variant (Dungeon Guide 1–20):**
1. **13-15 Westfall** → **15-17 Darkshore**.
2. **17-18 Hall of Thanes.**
   - Pre-quest in Dun Morogh: "Farsen's Watch" (96392) → "Underground Map" (96391) → "Old Ironforge Incursion" (96393).
   - Inside: "The Restless Dead" (96394), "Important Heirlooms" (96403), "An Ancient Grudge" (96395), "The Treaty of Understanding" (98423).
   - Exit "straight down the corridor from the final boss room".
3. **18-19 Ruins of Lordaeron.**
   - Fly to the Wetlands, **deathskip to the Baradin Bay spirit healer**, take the Menethil flight path, then the **boat to Southshore** and the Southshore flight path.
   - Quests: "Abominable Creatures" (95250), "Bloodied Insignia" (95195), "Crest of Lordaeron" (95189), "Remember That I Love You" (92415).
   - Hearth to Stormwind.
4. **19-20 Deadmines.** The full Defias Brotherhood chain via Redridge plus Red Silk Bandanas, then Redridge's new quests: "Show of Force" (98407), "Blackrock Blockade" (98387), group "WANTED: Incinerator Gar'im" (95999).
5. Boat to Darkshore.

**Id check (official DB, `tools/wh.mjs`, Nov 5).** Every quest, NPC and item id named in this section returns the same name on Wowhead Forever: 91733, 91740, 86667, 86614, 92742, 92744, 92909, 95065, 97220, 96392, 96391, 96393–96395, 96403, 98423, 95250, 95195, 95189, 92415, 98407, 98387, 95999, 1688, 1689; NPCs 6328 Dannie Fizzwizzle (Dun Morogh 47.2, 53.4, demon trainer) and 6382 Jubahl Corpseseeker (Ironforge 53.0, 6.2); items 5208 Smoldering Wand (requires level 15) and 11288 Greater Magic Wand (requires level 13). Levels from the DB:
- Hall of Thanes quests are **15–16**.
- **Ruins of Lordaeron quests are 21–22**, which matches the launch complaint that they show as 22.
- WANTED: Incinerator Gar'im is **25 (group)**.

Extracted skeletons (Gnome Warlock filter; one line per RXP step, with zone coordinates where the step gives them):
- `WORK/rxp-forever-gnome-warlock-1-21.txt`
- `WORK/rxp-forever-gnome-warlock-dungeon-11-21.txt`

They are a working aid for the leg authors. Re-check every quest id with `tools/wh.mjs` before use.

**Takeaways for our route** (`theory`):
- RXP's Alliance speed route sends Gnomes **out of Dun Morogh at 11** (Elwynn + Voidwalker), back to **Loch Modan 12–14**, then **Westfall → Darkshore → Redridge → Ashenvale/Stonetalon**.
- It does **not** use the Wetlands before 21. The launch trails show the Wetlands as the 27–30 zone.
- Loch Modan 12–14 already contains Forever quests ("Snowbound", "Silver of the Waves"), and RXP keeps a separate "15-16 Loch Modan" section.

## 7. Streamer and VOD evidence (titles and descriptions only; no transcripts)

| Video | Channel | Date | What it says | Source |
|---|---|---|---|---|
| Level like a speedrunner! – Wow Forever Hunter Essentials | Ksuper | Nov 3 | Hunter play guide with a melee-weave macro; RXP referral. Ksuper bills himself as the "#1 Hunter Speedrunner". | https://www.youtube.com/watch?v=d_dKcYPevCs |
| Leave the crowd behind! – Night Elf Launch Guide | Ksuper | Nov 2 | "how to play the launch in Shadowglen"; the guide itself is in his Discord. | https://www.youtube.com/watch?v=gf7_bWMi4Sc |
| Hunter Leveling – #1 Hunter Speedrunner's Take | Ksuper | Sep 15 | Beta first look; talents via wowtbc.gg. | https://www.youtube.com/watch?v=yHQfjeD17dI |
| WOW FOREVER IS HERE – Race To WF 60 Part 1 / Re-Inventing AoE Leveling – Part 2 | Jokerd | Nov 5 | Horde Undead Mage race with an AoE theme. No chapters. | https://www.youtube.com/watch?v=qDoU2UEshD8 ; https://www.youtube.com/watch?v=D7YRIZYlqEU |
| WoW Forever FIRST 60 PUSH!!!! (14h43m VOD) / world first 60 prep (Oct 18) | Ahmpy | Nov 4–5 | RXP referral. Probably the US PvP 5-player lockstep group in §2 (`theory`). | https://www.youtube.com/watch?v=9jxWmUg21yA ; https://www.youtube.com/watch?v=P_8PxsMFOJ0 |
| World First Level 60 POV – Rav | Rav | Nov 4 | 4h12m VOD; no route detail. | https://www.youtube.com/watch?v=cwHO7cTEjmo |
| THIS Is the FASTEST Way to 60… Full Dungeon Leveling Route REVEALED | Kargoz | Nov 4 | Title claims a full dungeon route; the description only links Mobalytics/RXP. **Contradicted by launch behaviour** (racers skipped dungeons). | https://www.youtube.com/watch?v=mVa2NWSBzBU |
| TWO 60s in 5 Days Played?! | Kargoz | Nov 2 | Claims about 5 days /played per 60 (duo or multibox) as "the best strategy". | https://www.youtube.com/watch?v=D25xPG7A9xE |
| WoW Forever LAUNCH: 1-60 Troll Warrior & Shaman Duo-Leveling – Multibox | Kargoz | Nov 4 | Horde multibox. | https://www.youtube.com/watch?v=f2EbbBiqagc |
| Who Will Hit 60 First in WoW Forever? | Goldshire Mogger | Nov 3 | Chapters: "GingiTV: 55 hours?", "Are dungeons worth it?", "Layering", "**Riverglades**" (racers considering routing it), "Tauren run speed", "Alliance or Horde?". | https://www.youtube.com/watch?v=1XZgW95BFt0 |
| Hunters Took Over the Race to 60 | Forever Codex | Nov 5 | The 11:19 UTC snapshot in §2. | https://www.youtube.com/watch?v=nkMnanePS-A |
| WoW Forever Had the BEST Launch I've Ever Seen | Xaryu | Nov 5 | Launch reaction; RXP referral. No route detail in the description. | https://www.youtube.com/watch?v=JF9aNjnOc-w |
| Blizzard JUST CHANGED Early Leveling on Launch Day | NOHITJEROME | Nov 4 | The title claims a launch-day change to early leveling; the description gives no detail. It probably refers to the Nov 2 respawn/HP notes already in sweep-official (`theory`). | https://www.youtube.com/watch?v=97pKelu2e4I |

Twitch pages render no stream titles to fetchers (tried https://www.twitch.tv/ksuper2). YouTube rate-limited (HTTP 429) part of this sweep, so some descriptions are missing.

## 8. Launch conditions and hotfixes affecting leveling (new or newly evidenced)

| Date | What | Effect on route | Tag / source |
|---|---|---|---|
| Nov 4–5 | Respawns are extremely fast at launch: a tiger respawned "before I could even get the book" (Coldridge "Grund and Gozwin"); players are dying to packs that respawn 2 s after a kill. Teldrassil sabers are slow for others. It depends on the layer. | Kill-quest times measured this week are optimistic in starting zones. Watch for adds when resting. | `community, launch` https://us.forums.blizzard.com/en/wow/t/2401538 ; https://us.forums.blizzard.com/en/wow/t/2401951 ; https://us.forums.blizzard.com/en/wow/t/2402541 |
| Nov 5 (US realms) | About 1 h of day-2 maintenance on US; **EU stayed up**. Visible in US racers' frozen /played around 15:00–16:00 UTC. | /played comparisons between US and EU are fine; wall-clock comparisons are not. | `community, launch` https://us.forums.blizzard.com/en/wow/t/2402262 ; https://us.forums.blizzard.com/en/wow/t/2402253 (post #3) |
| Nov 5 | **Aggrend:** "we will be tweaking some numbers tomorrow to help things feel a bit more lively" (layer population). | More players per layer means more tag competition on kill quests; group-up advice gets stronger. | `official, launch` https://us.forums.blizzard.com/en/wow/t/2401806 (post #27) |
| Nov 5 | **Hall of Thanes full clear = "3 bars of xp"**. The player calls dungeon XP "horrendous" and won't rerun it. | Supports a single run of Hall of Thanes only with all quests (sweep-official: "close to two levels" with all quests, beta). | `community, launch` https://us.forums.blizzard.com/en/wow/t/2402437 |
| Nov 5 | **Ruins of Lordaeron quests** show as level 22 or can't be picked up at 16. One says "The Wrath of Rath'mael" has a prerequisite. (Nov 2 notes: all RoL quests need 15.) | The RXP dungeon variant at 18–19 is at risk; verify before routing. | `community, launch` https://us.forums.blizzard.com/en/wow/t/2402007 ; https://us.forums.blizzard.com/en/wow/t/2401942 |
| Nov 5 | Player: dungeon pre-quest chains reach dungeons 6+ levels late if you didn't quest in the zone ("whack a bunch of grey mobs"). | Pick up dungeon chains only when already in that zone. | `community, launch` https://eu.forums.blizzard.com/en/wow/t/639763 |
| Nov 4 | Player claims "AoE farming nerfed into ground, safespotting in dungeons as well (they teleport on top of you)". | Don't plan safe-spot or AoE dungeon tricks. | `community, launch` https://us.forums.blizzard.com/en/wow/t/2401078 (post #20) |
| Nov 4 | Player opinion: "SM isn't worth doing anymore for alliance. Better of going to river glades." | Hint that Alliance 30s should favour Riverglades questing over Scarlet Monastery (opinion only). | `community, launch` https://us.forums.blizzard.com/en/wow/t/2400964 (post #14) |
| Nov 4 | Official Warcraft Twitch showed a **heat map of level-ups**. Wowhead's article body doesn't render, so there are no details. | – | `official stream, launch` https://www.wowhead.com/news=383750/official-warcraft-twitch-stream-showing-heat-map-of-level-ups |
| Nov 5 | US /who census: **75.6 % of characters still in a starting area** at 18:10 UTC. Hunter 13.3 % of characters (top), Rogue 9.8 % (lowest). Alliance 55.7 % / Horde 44.3 % where both were scanned. **Deadmines (116 seen) and Wailing Caverns (44)** are the busiest dungeons. | Expect crowding in the 10–20 zones for days. Dungeon groups exist at 18–20. | `community, launch` https://www.60.tools/population |

The warlock pet HP nerf, transport portals, phasing and known issues are already covered in sweep-official §1.2. There was no new blue post on them as of about 18:45 UTC.

## 9. What transfers from hunter/mage racers to a Gnome Warlock

- **Transfers well:**
  - **Zone order and hubs.** Wetlands for 27–30 (+ the Dragonmaw chain at 33), Duskwood for 30–32, then Arathi/Thousand Needles/STV/Desolace for 34–38.
  - **Travel tricks**: deathskips, hearth binds, the boats.
  - **Skipping dungeons** except quest-heavy single runs.

  `theory` built on `community, launch` data.
- **Partly transfers:**
  - Hunter pace numbers. Warlocks kill slower at launch (pet HP 7.5→2 HP per Stamina; Voidwalker complaints; higher creature HP after 30; see sweep-official).
  - On the evidence, budget about **1.3–1.5× the hunter time per level**: Jang Wonyoung reached 30 in about 18 h vs Ksuper about 12.3 h, and KANTING SBV did about 1 level per wall-clock hour at 29–33 vs Ksuper about 1 per hour at 35–37 (theory).
- **Doesn't transfer:**
  - Hunter-only grinding (melee weaving, pet-tank pulls of 2–3 mobs, long kites).
  - **Mage AoE** (Jokerd's "AoE leveling"; group AoE).
  - **5-player lockstep group questing** (the US PvP group at 35): tags and kill credit shared across a full group are not available to a solo warlock.
- **Warlock-specific evidence from the live RXP route:** Life Tap deathskips; Blood Pact grimoire early; Consume Shadows + Sacrifice grimoires at 14; wands at 12–14. These apply directly. `community, launch`

## 10. Route implications (for the leg authors)

1. **27–30: the Wetlands.** It is the one zone every launch Alliance racer used. Plan the Wetlands for 27/28 → 30, with a Stormwind/Ironforge training stop near 30. Ironforge is the closest via the Menethil flight path. `community, launch` + `theory`
2. **30–32: Duskwood** (the most common questing zone after the Wetlands), or Hillsbrad. Then return to the Wetlands' 30–34 Dragonmaw chain near 33 if in the log. `community, launch`
3. **34–38: Arathi → Thousand Needles → STV → Desolace → TN → STV** (Ksuper). Arathi at 34 was also Tekz's choice. Needles and Desolace require Kalimdor travel: boat to Theramore or Auberdine, flights to Thalanaar/Nijel's Point. That travel is worth it only for a hunter-speed player. For a warlock, check whether **Riverglades (36–44)** saves the trips (no launch evidence yet). `community` for the trail, `theory` for the advice.
4. **Dungeons:** follow RXP's single-run picks (Hall of Thanes 17–18, Deadmines 19–20) only with all quests. Treat **Ruins of Lordaeron** as optional until its quest bug is clear. `community, launch`
5. **1–21:** the RXP Gnome skeleton (§6.2) is the best launch-maintained baseline. It is free, public and step-level. `community, launch`

---

## Gaps (what I could not find)

1. **Racer zone history before 14:00 UTC Nov 5.** The leaderboard only exposes a 4-hour window, so Ksuper's 1–34 route is unknown except "30 at 11:19 UTC". Nobody has published a written route.
2. **Which quests or chains the racers did.** There are no VOD chapters, no transcripts, and Twitch titles aren't fetchable.
3. **Whether any racer used Riverglades, Krol'dok, the Drowned City, City of Dalaran or Excavation Site.** No Companion sample showed a new zone or an instance, but /who-tracked leaders (the US PvP group, Jokerd, Vitochie) have no zone data.
4. **No first-to-30/40/60 news articles** from Wowhead, Icy Veins or MMO-Champion as of 18:45 UTC. Search indexes have nothing, and Wowhead article bodies don't render. Nobody had reached 40 at 18:47 UTC (leader 38.2).
5. **RestedXP's paid 21–35 Forever route** isn't public (only the "21-23 Ashenvale/Stonetalon" section names are). Its **35–60 Forever routes** have no date.
6. **Warlock-specific launch routes:** apart from the board rows (Jang Wonyoung, KANTING SBV), no warlock racer published a route. The warlock pet nerf may push warlocks to Demonology or Fire; unknown.
7. **Dungeon XP at launch:** only one vague "3 bars" report (Hall of Thanes). There are no launch numbers for Excavation Site or City of Dalaran.
8. **Ruins of Lordaeron quest availability for Alliance** at launch is unresolved (levels and prerequisites).
9. **The RestedXP community post** (https://community.restedxp.com/world-of-warcraft-forever-world-first-race-11-4-2026/) returned 403 and was not retried. Only its search snippet is used.
10. The leaderboard snapshots used here (18:27, 18:47 and 19:02 UTC) are saved as raw HTML in `/tmp/claude-0/-home-user-BeautyBoys/af95b002-ed68-4803-ab8c-abeae03e687c/scratchpad/dl-aotc/`. The parser is `/tmp/claude-0/-home-user-BeautyBoys/af95b002-ed68-4803-ab8c-abeae03e687c/scratchpad/scripts/aotc_trails.py`. A later re-fetch of https://race.aotc.gg/ and a re-run (`python3 -I aotc_trails.py "<dir>/*.html"`) would extend the trails, for example Ksuper's 38–40 zones.

## Files written by this sweep
- `WORK/sweep-launch.md` (this file)
- `WORK/rxp-forever-gnome-warlock-1-21.txt`: Gnome Warlock–filtered step skeleton of the RXP Forever Speedrun Guide 1–21 (from GitHub, CC BY-NC-SA 4.0)
- `WORK/rxp-forever-gnome-warlock-dungeon-11-21.txt`: the same for the RXP Dungeon Guide 11–21
