# Round-2 continuity critic: parts 1–10

Written 2026-11-06, after the eight round-2 verifiers (parts 3–10).

**Inputs:**
- All ten leg files, header.json, critic.md (round 1), round2-plan.md, BRIEF.md, STYLE.md.
- The verifier verdicts for parts 3–10.

**Method:**
- I wrote scripts that rebuild, across all ten parts:
  - a quest ledger by Wowhead id and by normalised name: every accept, do, turn-in and skip;
  - a cross-check of every skip (step-level and the part's `skipped` list) against quests that are used anywhere else;
  - the bind, hearth, flight, boat and trainer timeline;
  - every "part N" cross-reference in step text, notes and skip reasons;
  - a quest-log simulation, run three ways: strict main path, main path with conditional quests, and the worst case of taking every optional quest.
- Every flag was checked against the step text before I changed anything.
- Scripts and pre-edit backups: `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/c2/` (`tools/`, `backup/`).

**Validation after my edits:**
- `validate-leg.mjs`: all 10 parts pass, and no step's level goes down.
- `whcheck-file.mjs` on the two files where I added quest ops: part 6 512/512 ids OK, part 10 540/540 OK.
- `assemble.mjs`: 10 legs, 1,126 steps, **no duplicate step ids**.
- Jargon scan of every prose field, including quest, NPC, mob and item notes: clean.

## Verdict

**The rerouted route is continuous from 1 to 60.**
- Every part starts at the level, place, hearth, training and flight-path state the previous part ends with.
- No quest is done in two parts.
- Every carried quest is accepted before it is turned in.
- Every flight path is learned before it is used.
- The quest log never goes over 20.

**I found 8 real problems and fixed them (§2).** None changes a level, an XP figure or the hours:
- an optional step that never turned its quests in;
- two part-4 skip reasons that part 5 contradicts;
- a missing fallback for the flight paths if part 4's ship fails;
- a conditional carry written as certain;
- the wrong spell name;
- process jargon;
- data gaps.

**The header is the one place still out of step.** header.json has round-1 times (145 h) and six decisions that the round-2 reroutes reversed. I did not edit it (it is outside the ten parts); §3 R1 lists exact replacements.

**Time: about 138 h /played to 60 at 100 kills an hour (132–143 h)**, about **28 h to 30** and about **54.5 h to 40**. Grind kills total about **4,640**, which is about 46 h, a third of the time (§4). The round-2 plan forecast 134.8 h and about 4,160 kills. The built parts came out about 3 h slower: parts 4–6 needed more top-up kills than planned.

## 1. Cross-part checks

| # | Check | Result |
|---|---|---|
| 1 | Level continuity | Boundaries match: 10.3, 18.3, 22.45, 29.39→29.4, 35.3, 40.1, 45.31, 50, 55. No step goes down. The part-7 bail-out steps l07-r2-003/004/005 sit at 41.33 although their targets are 43.5–44.6. That is a known schema limit, and their text states the target. |
| 2 | Place and hearth continuity | Places match at every boundary. **Bind chain:** Thunderbrew → Thelsamar → Stormwind → Darkshire → Menethil → Southshore → Booty Bay → Southshore → Booty Bay → Thelsamar → Farholde → Thelsamar → Gadgetzan → Feathermoon → Gadgetzan → Everlook → Stormwind (Light's Hope optional). **Hearths:** all 29 hearth steps (27 hearth steps plus the hearth inside l04-034 and l07-r2-005) go to the current bind. Each that could fall inside the 1-hour cooldown has a ride or run fallback in its note: l04-r2-002, l06-058, l06-084, l08-046, l08-r2-044, l08-057, l09-090. I timed l06-r2-011 (37.97) against l06-058 (37.27) by its steps: two zone loops and three flights apart, well over an hour. |
| 3 | Quests carried between parts | 35 quests span two parts: 34 carries, plus the optional Nek'rosh's Gambit fallback in part 5. Each carry is accepted in the earlier part and turned in once in the later part, and named in both boundary texts. Fixed: Return to Ironforge was written as a sure carry, but its chain is optional (F5). |
| 4 | Same quest in two parts | None. Six quests are skipped in part 4 and done in part 5: Night Watch 3, Look to the Stars 4, Worgen 3, Merrick's Bow, Stopping the Cycle and Defeat Nek'rosh. Three are skipped in part 5 and done in part 6: Strahnbrad Mystery, Princess Trapped / Stones of Binding and Wand over Fist. Akiris is skipped in part 6 and appears only as part 7's bail-out. All of these are by design. Two skip reasons in part 4 contradicted part 5; fixed (F1). The remaining multi-op entries are deliberate either/or fallbacks: Redridge Goulash, Ironband Wants You!/Find Agmond, Nek'rosh's Gambit and Feathers for Grazle. |
| 5 | Flight paths before use | 27 nodes, all learned before use. Thelsamar l02-025; Ironforge (gnome start); Stormwind l02-064; Lakeshire l02-069; Sentinel Hill l02-079; Darkshire dr-074; Menethil l04-049; Auberdine l04-r2-004; Astranaar l04-r2-011; Southshore l05-029; Nijel's Point l05-r2-021; Refuge Pointe l05-069; Booty Bay l06-031; Nethergarde l06-r2-045; Ratchet l06-082; Farholde l07-032; Thorium Point l08-r2-009; Gadgetzan l08-035; Thalanaar l08-r2-026; Feathermoon l08-r2-035; Marshal's Refuge l09-011; Cenarion Hold l09-036; Talonbranch l09-061; Everlook l09-078; Morgan's Vigil l10-007; Chillwind l10-038; Light's Hope l10-068. **Gap fixed (F3):** if part 4's ship never comes, Auberdine and Astranaar are never learned, but part 5 (l05-r2-019) and part 9 (l09-046) flew between them. |
| 6 | Warlock training and the Felsteed | See the training table below. Every even level is trained. Two long gaps remain: R4. |
| 7 | Step ids | 1,126 ids, all unique across the ten files (`assemble.mjs`). |
| 8 | Quest log ≤ 20 | **Strict main path:** peak 18 at l05-052 (Gnomeregan). **Every optional quest taken:** peak 18 (l05-052, l06-040) after F4. Before F4 that worst case reached 23, because the l06-023 loop never handed in its five Bookie Herod quests. Part 5's and part 9's end texts already tell you to abandon the optional leftovers. |
| 9 | Prose jargon (STYLE.md) | Two NPC notes in part 1 said "no Wowhead id checked" (F6). Everything else is clean. The scan's other hits were in-game words: Skeleton objects, Felstone Field, mob levels in brackets. |

**Check 6, training visits:**

| Level | Step | Where |
|---|---|---|
| 1, 4 | dm-004, dm-018 | Coldridge |
| 6, 8, 10 | dm-038, dm-075, dm-085 | Kharanos |
| 12 | l02-028 | Ironforge |
| 14 | l02-063 | Stormwind |
| 16/18 | dr-014 | Stormwind |
| 20 | dr-051 | Stormwind |
| 22 | l04-029 | Stormwind |
| 24 | l04-r2-001 | Stormwind |
| 26/28/30 | l05-042 (31.28) | Ironforge |
| 32 | l05-054 | Ironforge |
| 34 | l06-003 | Ironforge |
| 36 | l06-071 | Stormwind |
| 38 | l06-r2-029 | Ironforge |
| 40 | l06-086 | Ironforge |
| 42/44 | l07-055 | Ironforge |
| 46 | l08-028 | Ironforge |
| 48/50 | l09-043 (51.11) | Ironforge |
| 52 | l09-r2-018 | Stormwind |
| 54 | l09-099 | Stormwind |
| 56 | l10-033 | Stormwind |
| 58 | l10-100 | Stormwind |
| 60 | l10-113 | Ironforge |

**Class quests:**
- Imp: dm-004 and dm-011.
- Voidwalker: l02-071/072 at 15.4.
- Succubus and Felhunter: skipped, with reasons.
- Felsteed: l06-083 at 40.1 in Ratchet. If it turns out to need riding training, l06-087 is the fallback.
- Dreadsteed: after 60.

## 2. Fixes applied

| # | Part / steps | Problem | Fix | Source |
|---|---|---|---|---|
| F1 | 4: `skipped` (The Valor Family part 2, Look to the Stars part 4, Stopping the Cycle, Defeat Nek'rosh); quest notes on l04-010, l04-021, l04-027 | Part 4 said "Part 5 offers [Valor Family 2] on its Duskwood return", but part 5 skips it (l05-r2-014). Part 4 called Zzarc'Vul "a level-33 ogre in a cave"; he is a level-30 normal mob in the southern ogre mound, which part 5 also says. The step-level skip notes for Night Watch 3, Look to the Stars 4 and Worgen 3 did not say that part 5 does them. Stopping the Cycle and Defeat Nek'rosh did not say that part 5 offers them with a group. | Reworded to match part 5: "Part 5's Duskwood return skips it too", "level-30 ogre in the southern ogre mound", "part 5 does it on its Duskwood return", and "Part 5 offers it if your Excavation group stays". Added npc=300 to l04-010's and part 4's sources. | https://www.wowhead.com/forever/npc=300 ; https://www.wowhead.com/forever/quest=181 ; https://www.wowhead.com/forever/quest=98447 |
| F2 | 4 l04-024 note; 6 l06-r2-029 note | Both said "Curse of Agony". Forever calls the spell **Bane of Agony**, as parts 1 and 5 already do. | Renamed. Source added to both steps. | https://www.wowhead.com/forever/spell=980 |
| F3 | 4 openQuestions[1]; 5 l05-r2-019; 9 l09-046 | Part 4's fallback for a missing Menethil–Auberdine ship is a grind, so the Auberdine and Astranaar flight paths are never learned. Parts 5 and 9 then told you to fly Auberdine → Astranaar "learned in part 4". | Part 4's open question now says parts 5 and 9 learn both nodes on first landing. Each Auberdine step now says: if part 4's ship never came, learn this flight path now and go south to Astranaar on foot or mounted. | (route logic; the flight paths are listed at l04-r2-004 and l04-r2-011) |
| F4 | 6 l06-023 (optional) | The "run the whole Bookie Herod chain" loop accepted Bookie Herod, The Hidden Key, The Spy Revealed!, Patrol Schedules and Report to Doren but turned none in. In the data they stayed in the log for the rest of the route, and the worst-case log reached 23. | Added the five turn-ins after their accepts: the house, the cave and back to the Rebel Camp, as the note describes. Added classicdb 330 to the sources. | https://classicdb.ch/?quest=200 ; https://classicdb.ch/?quest=328 ; https://classicdb.ch/?quest=329 ; https://classicdb.ch/?quest=330 ; https://classicdb.ch/?quest=331 |
| F5 | 8 end, l08-067 (note and quest note); 9 start, l09-042 quest notes | Return to Ironforge comes only from the Uldum pedestal chain (l08-001/002/053), which is **optional**: Magellas may not offer Portents of Uldum. Part 8's end and part 9's start still listed it as a sure carry, and A Future Task depends on it. | Made it conditional in all four places. Added "offered only after Return to Ironforge" to A Future Task. | https://www.wowhead.com/forever/quest=2977 |
| F6 | 1 dm-016, dm-021 (Nori Pridedrift NPC note) | "foreverdb launch data; no Wowhead id checked" is research process wording. | "Her spot comes from ForeverDB launch data." | (prose) |
| F7 | 10 `skipped` (Blasted Lands, Searing Gorge…) | "done in parts 8 and 9" reads as Blasted Lands in 8 and Searing Gorge in 9. It is the other way round. | "Searing Gorge is done in part 8 and the Blasted Lands in part 9." | (route) |
| F8 | 10 l10-004 (optional cloth donations) | Three turn-ins had no accept anywhere. | Added the matching accept before each turn-in: same NPC, same moment. | https://www.wowhead.com/forever/quest=7791 ; https://www.wowhead.com/forever/quest=7793 ; https://www.wowhead.com/forever/quest=7794 |

No level, XP, coordinate or `wh` id changed. Diff size against the backups, in changed lines: part 1 4, part 4 27, part 5 2, part 6 48, part 8 6, part 9 9, part 10 26. Parts 2, 3 and 7: none.

## 3. What remains

Most important first.

| # | Where | Issue | Suggested fix |
|---|---|---|---|
| R1 | **header.json** (not a part; not edited) | Still at round 1, and contradicts the parts. **Times:** `estTime` "~145 h (128–161 h)"; summary "about 29 hours to 30 … about 145 hours to 60 … about half of the XP comes from grinding"; `legTimes` 2.2 / 6.9 / 7.9 / 12.2 / 13 / 14.4 / 14.5 / 21.5 / 25.4 / 27 h. **Summary:** "1–30 stays in the Eastern Kingdoms with no boats" (part 4 now sails to Ashenvale at 27.6); the 40–60 list names the Hinterlands (dropped) and leaves out Searing Gorge, Feralas, the Blasted Lands and Silithus. **Assumptions[2]:** the dungeon list leaves out the Stockade (now main path, at about 24.5) and Gnomeregan, and still calls the Stockade optional. **Decisions that are now wrong:** [24,27] "No Kalimdor loop" (Ashenvale trip at 27.6–29.4); [26,27] "Stockade optional"; [29,32] "leave the Wetlands at about 31.6" (the boat now leaves at 30.76, l05-028); [31,35] (no Duskwood return or Desolace); [35,41] the switch rule to Riverglades at 38 (part 6 now skips it); [40,46] the switch rule to the Swamp of Sorrows (part 6 owns it; the bail-out is the Stranglethorn naga grind); [45,50] "Hinterlands at 45–47.5" (now Searing Gorge, Tanaris, Feralas); [48,55] "Skip Feralas" (part 8 does Feralas at 46.5–47.3). | Set `legTimes` to: ~2.2, ~6.9, ~6.1, ~11.4, ~13.9, ~14, ~14.3, ~18.6, ~23.7, ~26.6 h. Set `estTime` to "~138 h /played (132–143 h)". Summary: "about 28 hours /played to 30 and about 138 hours to 60"; grinding is "about a third of the time". Rewrite the six decisions from each part's `why` text. |
| R2 | 7 (main path 40.6 → 44.6) | About 408k XP, roughly 9 h, rests on Riverglades quests that nobody has published. ForeverDB has no part-7 XP logs. The leader used Riverglades only at 42.5–42.8. | Re-check ForeverDB and the launch leaderboard when Riverglades data appears. The bail-out stays. |
| R3 | 7 Uldaman, 10 Stratholme, BRD, LBRS | The ×2 pay for quests done inside dungeons is measured only at levels 22–29. Above 30 it is theory. At Classic rates part 7 is about 0.5 h slower, and Stratholme stops paying off. | Watch ForeverDB for Uldaman quest XP, for example The Platinum Discs (2278). |
| R4 | Training gaps | Level 26/28 spells wait from 24.55 until 31.28 (Ashenvale and the Excavation use rank-4 Shadow Bolt). Level 48 waits from about 48 until 51.11, through most of the 1,060-kill Thistleshrub grind. There is no Alliance warlock trainer on Kalimdor, so neither gap closes cheaply. | Keep. Optional idea: train 26 in Ironforge from Menethil before the Ashenvale ship. About 10 min for minor ranks: theory, not worth a step unless pets or rates change. |
| R5 | Parts 4–10 XP | Guessed XP for new Forever quests: about 10k in part 4, about 16k in part 6, plus Merrick's Bow, Vahlarriel's Vengeance and others in part 5. Parts 8–10 have no ForeverDB XP logs at all, so they use Classic values throughout. | If these pay less, the named grind blocks grow. Each part's open questions already say so. |
| R6 | 6 l06-033 | Talk of the Town is the one quest still turned in with no accept anywhere. Its giver is unpublished. | Keep it as "only if it is in your log" until someone finds the giver in game. |
| R7 | Ships (parts 4, 5, 8, 9) | Nov 6 reports of missing boats. Every ship step has a fallback; F3 now covers the flight-path knock-on. | — |
| R8 | 6 l06-003/080, l06-087 | Whether the Felsteed needs 100 g of Apprentice Riding is still unconfirmed. | Keep the 100 g reminder. |

## 4. Hours per part at the shared rate

**Basis:**
- Each part's own non-grind time: questing, travel, dungeon runs and group waits, from its `estTime` breakdown, which its verifier checked.
- Plus its named grind blocks at **100 kills per hour**.
- Kill XP: the Classic formula. I re-derived each block from the Classic XP table, and the counts are internally consistent:
  - part 6: 0.78 × 85,700 XP / 255 kills ≈ 262 XP per kill;
  - part 8: 237,975 XP / 810 kills ≈ 294;
  - part 10: 163,863 XP / 509 kills ≈ 322.
- Quest XP: ForeverDB launch values where logged; otherwise Classic values (Questie's Forever xpDB) and our guesses for new quests. In-dungeon quests are ×2.
- Solo, fresh account, no rested XP, no deaths.

| Part | Levels | Non-grind time | Grind kills (steps) | Grind h | **Hours** | Cumulative | Verifier's view |
|---|---|---|---|---|---|---|---|
| 1 | 1 → 10.3 | 2.2 (2.0–2.4) | small top-ups only (dm-015, dm-082) | in the 2.2 | **2.2** | 2.2 | (round 1) |
| 2 | 10.3 → 18.3 | ≈5.6 | ≈130 (l02-099) | 1.3 | **6.9** | 9.1 | round-1 re-rate 6.9 |
| 3 | 18.3 → 22.45 | 4.9 | 115 (dr-060) | 1.15 | **6.1** | 15.2 | 6.0–6.3 |
| 4 | 22.45 → 29.39 | 10.3 | 112 (l04-r2-031) | 1.1 | **11.4** | 26.6 | ≈11.5 |
| 5 | 29.4 → 35.3 | 12.55 | 135 (l05-076) | 1.35 | **13.9** | 40.5 | 13.5–14.5 |
| 6 | 35.3 → 40.1 | 11.5 | 255 (l06-078) | 2.55 | **14.0** | 54.5 | ≈14.0 |
| 7 | 40.1 → 45.31 | 14.3 (Riverglades about 9 h) | 0 on the main path | 0 | **14.3** | 68.8 | ≈14.3 |
| 8 | 45.31 → 50 | ≈8.0 | 1,060 (l08-064 810 + l08-065 250) | 10.6 | **18.6** | 87.4 | 18.5–19.2 |
| 9 | 50 → 55 | 13.5 | 1,020 (l09-034 70, l09-r2-014 240, l09-064 250, l09-070 240, l09-086 220) | 10.2 | **23.7** | 111.1 | 22–25 |
| 10 | 55 → 60 | 8.5 | 1,813 (l10-024 329, l10-094 362, l10-110 509, l10-111 613) | 18.1 | **26.6** | 137.7 | 25.5–27.5 |

**Totals:**
- **To 60: ≈138 h /played.** The band is 132–143 h from the parts' own ranges, or 128–146 h if you kill 125 or 85 mobs an hour instead of 100.
- **To 30: ≈28 h.** That is 26.6 h for parts 1–4 (to 29.39), plus about 1.2 h of part 5: Excavation group and run, Dragonmaw, and the Thandol Span, to 30.0 just before l05-017 (30.14).
- **To 40: ≈54.5 h.**
- **Grind kills:** ≈4,640 in named grind blocks (parts 2–10), or ≈46 h, 34% of the time. Part 1's two short top-ups and part 2's Stonesplinter quest grind are inside those parts' times and not counted.
- Confidence: `theory`. The total moves mostly with the Riverglades supply (R2), the dungeon multiplier above 30 (R3) and the kill rate.

**Compared with earlier estimates:**
- Round 1: 145 h and about 7,215 kills.
- Round-2 plan: 134.8 h and about 4,160 kills.
- Built route: 137.7 h and about 4,640 kills.
- The plan was about 3 h too optimistic:
  - part 6: +1.2 h, because 255 pirate kills stay where the plan expected 78;
  - part 5: +0.9 h, 135 kills against 35;
  - part 4: +0.6 h, because Ashenvale took 3.5 h, not 2.75;
  - part 7: +0.5 h;
  - part 8: +0.3 h;
  - part 9: −0.6 h.

**Launch check:**
- The Gnome Warlock duo reached 30 at 18 h 10 m and 35.2 at 25 h 24 m (critic.md; round2-plan §1.1; https://race.aotc.gg/).
- This solo route reaches 30 at about 28 h, about 1.5× the duo's time, for a solo player with no rested XP.

## Sources
- Zzarc'Vul, level 30, normal: https://www.wowhead.com/forever/npc=300
- Look to the Stars part 4: https://www.wowhead.com/forever/quest=181
- The Valor Family part 2: https://www.wowhead.com/forever/quest=98447
- Bane of Agony (Forever's name): https://www.wowhead.com/forever/spell=980
- Bookie Herod chain: https://classicdb.ch/?quest=200 ; https://classicdb.ch/?quest=328 ; https://classicdb.ch/?quest=329 ; https://classicdb.ch/?quest=330 ; https://classicdb.ch/?quest=331
- Return to Ironforge: https://www.wowhead.com/forever/quest=2977
- A Taste of Flame (checked: consistent with part 8 stopping Kalaran's chain at Forging the Shaft): https://www.wowhead.com/forever/quest=4022 ; https://www.wowhead.com/forever/quest=4023
- Cloth donations: https://www.wowhead.com/forever/quest=7791 ; https://www.wowhead.com/forever/quest=7793 ; https://www.wowhead.com/forever/quest=7794
- XP table and kill-XP formula: https://warcraft.wiki.gg/wiki/Experience_point
- Hearthstone cooldown: https://www.wowhead.com/forever/item=6948
- Quest log cap: https://warcraft.wiki.gg/wiki/Quest_log
- Launch leaderboard: https://race.aotc.gg/
