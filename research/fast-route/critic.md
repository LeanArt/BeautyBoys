# Route critic: continuity and completeness, legs 01–10

Route critic, 2026-11-06. I read all ten leg files, skeleton.md, BRIEF.md and header.json, and I re-read the launch leaderboard once.

**Eras:**
- **L** = launch week
- **B** = beta
- **C** = Classic carry-over
- **T** = our own theory

**Method:**
- I wrote scripts that rebuild, across all legs:
  - a quest ledger: accept, do, turn-in and skip for every quest, by id;
  - the hearth, bind, flight, boat and trainer timeline;
  - leg-boundary states;
  - a quest-log occupancy simulation.
- Every finding was then checked against the step text.
- Scripts and pre-fix backups are in `/tmp/claude-0/-home-user-BeautyBoys/bfd80208-cc8c-5aac-9f86-e8ecaac49556/scratchpad/critic/`.

**Validation after my edits:**
- `validate-leg.mjs`: all 10 legs pass.
- `whcheck-file.mjs` on the legs where I added references:
  - leg 06: 324/324 ids OK;
  - leg 09: 354/354;
  - leg 10: 386/386.
- `assemble.mjs`: 10 legs, 883 steps, **no duplicate step ids**.

## Verdict

**The route is now continuous from 1 to 60.**
- Every leg starts at the level, place, hearth and training state the previous leg ends with.
- Every carried quest is accepted before it is turned in, and turned in once.
- Every flight path is learned before it is used.
- All ten legs are present, and every dungeon the skeleton names is run, made conditional, or skipped with a reason.

**Real errors I found and fixed:**
1. Two quest chains were done in two legs:
   - Encroaching Gnolls, in legs 2 and 3;
   - Lifting the Curse → The Eye of Paleth → Cleansing the Eye, in legs 4 and 5.
2. Leg 9 took an impossible chain: Chillwind Horns needs Broodling Essence from leg 10.
3. Five hand-off texts didn't match their neighbours.
4. The Ironforge warlock trainers were called "Mystic Ward" in four legs. They are in the Forlorn Cavern.

**The biggest open problem is the time, not continuity.**
- As written, the legs add up to about **145 h /played (band 128–161 h)**, against the header's ~100 h.
- About half of that (≈72 h, ~7,200 kills) is solo grinding.
- Cutting it needs more quest content, which is the judge's call (§4).

## 1. Cross-leg checks and results

| # | Check | Result |
|---|---|---|
| 1 | Level continuity | Every boundary matches (10.3, 18.3, 23.5, 30, 35.3, 40.1, 45.3, 50, 55). No step's level goes down. Leg 8 started 0.01 below leg 7's 45.31; fixed. |
| 2 | Place and hearth continuity | Places match at every boundary. Fixed: leg 5's start said the hearth was on cooldown (it was last used at 26.66, hours earlier), and leg 10 restarted "off the boat" after leg 9 had already trained in the Mage Quarter. Binds: Kharanos → Thelsamar → Stormwind → Darkshire → Menethil → Southshore → Booty Bay → Thelsamar → Farholde → Thelsamar → Aerie Peak → Gadgetzan → Everlook → Stormwind. One cooldown risk: l08-014 (see R11). |
| 3 | Quests carried between legs | 30 cross-leg quests, all accepted before and turned in after. Fixed: 707 (leg 6 → 7) was not in leg 7's start, 293 was carried and also re-done, and 4810 could not exist. |
| 4 | Flight paths learned before use | All 22 nodes are learned before use: Thelsamar l02-025, Ironforge (racial), Stormwind l02-064, Lakeshire l02-069, Sentinel Hill l02-079, Darkshire dr-074, Menethil l04-049, Southshore l05-029, Refuge Pointe l05-069, Booty Bay l06-031, Ratchet l06-082, Farholde l07-032, Aerie Peak l08-006, Gadgetzan l08-035, Marshal's Refuge l09-011, Auberdine l09-046, Astranaar l09-048, Talonbranch l09-061, Everlook l09-078, Morgan's Vigil l10-007, Chillwind l10-038, Light's Hope l10-068. No flight goes to an undiscovered node. |
| 5 | Class quests and trainers | See the class-quest and trainer list below the table. |
| 6 | Mount gold at 40 | Plausible but tight. See R8. |
| 7 | Same quest done in two legs | Two found and fixed (F1, F2). The remaining multi-accept and multi-turn-in entries are deliberate either/or branches: Redridge Goulash, Bookie Herod fallback l06-023, Badlands/Uldaman Reagent Run fallback l07-029, Find Agmond fallback l07-060, Nek'rosh's Gambit fallback l05-007, and the repeatables Troll Necklace Bounty and Feathers for Grazle. |
| 8 | Step id uniqueness | 883 ids, all unique. Prefixes: dm-, l02-, dr-, l04- … l10-. Leg 4 now jumps from l04-081 to l04-084 (ids kept so cross-references still work). |
| 9 | Anything missing | All 10 legs exist, and 1–60 is covered without gaps. Every dungeon is accounted for; see the dungeon list below the table. Main-path quest log peaks at **17 of 20** (l04-055), so it never overflows (R9). |

**Check 5, class quests:**
- Imp: dm-004 / dm-011.
- Voidwalker: l02-071/072 at 15.4. Deferred by the header decision.
- Succubus and Felhunter: skipped, with the reason in the skip lists of legs 3, 4, 5 and 6.
- Felsteed: l06-083 at 40.1.
- Dreadsteed: post-route (leg 10 skips).

**Check 5, training visits:**

| Levels | Step | Where |
|---|---|---|
| 1, 4 | dm-004, dm-018 | Coldridge |
| 6, 8, 10 | dm-038, dm-075, dm-085 | Kharanos |
| 12 | l02-028 | Ironforge |
| 14 | l02-063 | Stormwind |
| 16/18 | dr-014 | Stormwind |
| 20 | dr-051 | Stormwind |
| 22/24 | l04-029 | Stormwind |
| 26/28/30 | l05-042 | Ironforge |
| 32 | l05-054 | Ironforge |
| 34 | l06-003 | Ironforge |
| 36/38 | l06-071 | Stormwind |
| 40 | l06-086 | Ironforge |
| 42/44 | l07-055 | Ironforge |
| 46/48 | l08-028 | Ironforge |
| 50/52 | l09-043 | Ironforge |
| 54 | l09-099 | Stormwind |
| 56 | l10-033 | Stormwind |
| 58 | l10-100 | Stormwind |
| 60 | l10-113 | Ironforge |

- Every even level is trained. The longest gap is 24 → 31.8 (R7).

**Check 9, dungeons:**

| Dungeon | Step(s) | Status |
|---|---|---|
| Hall of Thanes | l02-049–052 | run |
| Deadmines | dr-041 | run |
| Stockade | l04-032 | optional |
| Excavation Site | l05-003–006 | run |
| Gnomeregan | l05-052 | run |
| City of Dalaran | l05-062/063 | run |
| Krol'dok | l07-052 | conditional |
| Uldaman | l07-066–069 | run |
| Zul'Farrak | – | skipped, with a reason (only 3 quests reachable) |
| Blackrock Depths | l10-031 | optional |

## 2. Fixes applied

| # | Leg / steps | Problem | Fix |
|---|---|---|---|
| F1 | leg 03 dr-020, dr-029; leg 02 end; leg 03 start | **Encroaching Gnolls (244) done twice.** Leg 2 accepts it at l02-067 and hands it in at l02-068 (15.3, on the Lakeshire walk). Leg 3 accepted it again at dr-020 and handed it in at dr-029. https://www.wowhead.com/forever/quest=244 ; https://foreverdb.net/quest/244 | Removed the accept (dr-020) and the turn-in (dr-029). dr-029 is now an accept step for Assessing the Threat and Show of Force; Show of Force opens after 244, which is done. Both boundary texts list 244 as done. XP effect is about 290 XP (0.015 level), inside rounding. |
| F2 | leg 04 l04-079, l04-082, l04-083, l04-084–087, start/end/why/openQuestions | **Lifting the Curse (290) → The Eye of Paleth (292) → Cleansing the Eye (293) done twice.** Both legs 4 and 5 ran the Halyndor trip and took 293, and both counted the XP. https://www.wowhead.com/forever/quest=290 ; https://www.wowhead.com/forever/quest=292 ; https://www.wowhead.com/forever/npc=1160 | Kept it **only in leg 5** (l05-025 → l05-027, Cleansing the Eye to Benedictus at l05-047). Reasons: leg 5's start state and level model already assume it; it fills the wait for the Southshore boat, so it costs no extra trip; and Halyndor (level 30) is fought at 31 instead of 27.2 (+3). In leg 4 I removed the accept at l04-079, deleted l04-082/083, and lowered l04-084..087 by 0.09 (≈3,700 XP). The grind at l04-087 still ends at 28.5, now ~47,500 XP (~260 kills) instead of ~44,000. Updated leg 4's end ("The Cursed Crew done, so Lifting the Curse is open for leg 5"), why and openQuestions. Net time is about zero: ~0.2 h more grinding, ~8 min less travel. |
| F3 | leg 09 l09-080, l09-082, l09-083, l09-084–086, end, openQuestions | **Impossible chain.** Chillwind Horns (4809) follows Felnok Steelspring (4808), which follows Broodling Essence (4726) from Tinkee in the Burning Steppes (leg 10). It can't be offered at 54, so Return to Tinkee (4810) could never be carried. https://classicdb.ch/?quest=4809 (series: Broodling Essence → Felnok Steelspring → Chillwind Horns → Return to Tinkee) ; https://www.wowhead.com/forever/quest=4808 ; https://www.wowhead.com/forever/quest=4726 | l09-080 now lists 4809 as a skip, with the reason. Removed 4809 from l09-082 and l09-083, and 4810 from l09-083. Lowered l09-084..086 by 0.03 (5,450 XP); the l09-086 grind still ends at 54.66, about 10 min longer. Leg 9's end no longer lists 4810, and leg 9's and leg 10's open questions are marked resolved. |
| F4 | leg 07 start, l07-003, l07-024, l07-025, l07-060, openQuestions | Leg 6 now gives **Ironband Wants You! (707)** at l06-004, but leg 7's start said nothing was carried, and l07-003 still said "leg 6 as written does not". https://www.wowhead.com/forever/quest=707 ; https://classicdb.ch/?quest=738 | Leg 7's start now carries 707. l07-003 (hand in 707, accept Find Agmond) and l07-024/025 (Find Agmond, Murdaloc) are now main-path steps; the level model already counted them. The 707 turn-in at l07-060 is marked as fallback only. Holding 707 settles leg 7's open question about the pre-quest rule, whichever rule Forever uses. |
| F5 | leg 05 l05-042, 043, 054, 055; leg 06 l06-003, 004, 086; leg 08 l08-028; leg 09 l09-043 | Ironforge warlock trainers placed in the "Mystic Ward". Briarthorn, Thistleheart and Alexander Calder stand at 50.2–51.0, 5.4–8.4, in Bonegrip's Runes and Dooms in the **Forlorn Cavern**. Talvash (36, 4) is the Mystic Ward. Legs 2, 7 and 10 already said Forlorn Cavern. https://www.wowhead.com/forever/npc=5172 ; https://www.wowhead.com/forever/npc=5171 ; https://www.wowhead.com/forever/npc=6826 ; https://warcraft.wiki.gg/wiki/Forlorn_Cavern | Renamed the text and `at` fields to Forlorn Cavern. l05-054 keeps "in the Mystic Ward" for Talvash. |
| F6 | leg 03 start, leg 04 start | Training state didn't match. Leg 2 trains 12 in Ironforge and 14 in Stormwind; leg 3 starts with "12/14 (Ironforge)". Leg 3 trains 16/18/20; leg 4 starts with "18 and 20". | Corrected both start texts. |
| F7 | leg 05 start | "Hearth: Menethil (on cooldown)". Leg 4 last hearths at l04-077 (26.66), hours before 30, and its end says the hearth is ready. Hearth cooldown is 1 h: https://www.wowhead.com/forever/item=6948 | Changed to "ready; last used at ~26.7 in leg 4". |
| F8 | leg 06 l06-033, l06-076 | Favor for Krazek (627) was accepted, with a note saying to hand it in at once and take Return to Corporal Kaleb (622), but neither op was listed, so 622 had a turn-in at l06-047 and no accept. Optional Raptor Mastery (196) was accepted at l06-043 and never turned in. https://classicdb.ch/?quest=627 ; https://classicdb.ch/?quest=622 ; https://classicdb.ch/?quest=196 | Added the conditional 627 turn-in and 622 accept to l06-033, and an optional 196 turn-in to the optional croc step l06-076. |
| F9 | leg 08 start, l08-001–005 levels, l08-014 | (a) Start text still said Portents needs "The Platinum Discs". Verifier 7 found the Vault voucher (2439, l07-079) is what opens it: https://classicdb.ch/?quest=2963 . (b) Level 45.30, below leg 7's 45.31. (c) l08-014 hearths about 40–55 min (estimate) after l07-073. | (a) Reworded. (b) Set to 45.31. (c) Added a note: if the hearth is on cooldown, ride back to Aerie Peak. |
| F10 | leg 10 start, l10-001, l10-031 | Start and first step said "step off the Auberdine boat" in the Harbor, but leg 9 already did that and trained 54 (l09-098/099). The optional BRD step accepted Abandoned Hope, Overmaster Pyron and The Heart of the Mountain, but listed no turn-ins. | Start and l10-001 now begin at the Slaughtered Lamb. Added the three turn-ins (after the run) to l10-031, matching its note. |
| F11 | open questions in legs 02, 04, 05, 06, 07, 09, 10 | Hand-off open questions described problems that are now fixed. | Each is rewritten as "resolved", saying where it was fixed. |

## 3. What remains

Most important first.

| # | Leg / step | Issue | Suggested fix |
|---|---|---|---|
| R1 | **header.json** (not a leg file; not edited) | `estTime` says "~100 h (85–118 h)" and the summary says "about 21 hours /played to 30". The legs as written add up to **≈145 h (128–161 h)** and **≈29 h to 30** (§5). | After the judge's content decision (R5), set the header from the leg sums. If nothing changes: "≈145 h /played (128–161 h); ≈29 h to 30". |
| R2 | header.json decision [14,16]; leg 02 l02-045/049 | Header and skeleton say "Hall of Thanes at 14.4 or higher". Leg 2 enters at **14.02**, on one beta report of a 13–15 group (https://us.forums.blizzard.com/en/wow/t/2356140). | Either grind ~0.4 level more on Loch Modan troggs before l02-045 (~5k XP, ~30 min), or change the header to "about 14". |
| R3 | header.json assumptions; leg 05 l05-044–053 | Header lists the dungeons run once as Hall of Thanes, Deadmines, Excavation, Dalaran and Uldaman. **Gnomeregan** is now on leg 5's main path and in its level model (~28k XP, an estimate from the beta table's 46k: https://us.forums.blizzard.com/en/wow/t/2385588/288). | Add Gnomeregan to the header as "if a group forms at the 31.7 Ironforge stop". Leg 5's estTime already gives the no-group time. |
| R4 | header decision [40,46]; leg 07 why | Header says "Badlands at 40–41.3". Leg 7's Badlands loop reaches only ~40.65 on Classic XP. | Header wording only. |
| R5 | **legs 02–10, all grind blocks** (main ones: l04-087, l04-090, l05-076, l06-067/075/077/078, l08-020/024 and the Tanaris grinds, the leg 9 grind blocks, the leg 10 Burning Steppes orcs, Andorhal and EPL) | **≈7,200 solo grind kills ≈ 72 h**, about half the route. Each verifier found its own leg short of quest XP on Classic values. The launch board shows how far ahead racers are: the leader, a Night Elf Hunter, is 42 in the Badlands at **26 h 04 m**, where this route needs ~62 h; the Gnome Warlock (probably a duo) hit 30 at 18 h 10 m, where this route needs ~29 h (https://race.aotc.gg/, read Nov 6; skeleton §1.1). | Judge decision. Replace grind with quest hubs that launch Alliance players actually used, each roughly 2× the grind rate (T/L): **Duskwood 28–32** for legs 4–5 (launch duo at ~42k XP/h, skeleton §1.1); **Thousand Needles / Desolace** at 34–37 for legs 5–6 (leader's 35–38 trail); **Swamp of Sorrows** at 38–40 for leg 6 (leader 38.85→39.19); **Feralas, Blasted Lands or Searing Gorge** for leg 8; **Azshara, or Sunken Temple** for leg 9; **BRD, Silithus or a Winterspring return, and Tirion's chain** for leg 10. Each 10 h of grind replaced saves about 5 h. |
| R6 | leg 05 l05-076; leg 06 l06-075, l06-077, l06-078; leg 04 l04-087/090 | **Grind rates differ by about 2× between neighbouring legs.** Leg 5 assumes ~400 kills in 5–6 h (67–80 kills/h). Leg 4 assumes ~100 kills/h. Leg 6 assumes ~690 kills in ~4.8 h (~144 kills/h), right after the Nov 2 HP increase for higher-level creatures (https://us.forums.blizzard.com/en/wow/t/2360696/9). | Restate the leg 5 and leg 6 estTimes with one kill rate. At 100 kills/h (T), leg 5 is ≈13 h and leg 6 is ≈14.4 h. |
| R7 | legs 04–05: l04-029 → l05-042 | **Levels 26 and 28 go untrained until 31.8.** The ~3 h Raptor Ridge grind (l04-090, 28.6 → 29.85) and the Excavation run use rank-4 Shadow Bolt and older curse ranks. Leg 5's note at l05-042 puts the Shadow Bolt and Bane of Agony upgrades at 28 (C). | Optional new step after l04-087 (28.5): hearth to Menethil (ready since 26.66), fly Menethil → Ironforge, train 26/28, fly back. About 15–20 min (T). Worth it only if the Raptor Ridge grind stays in. |
| R8 | leg 06 l06-003, l06-080, l06-087 | **Mount gold.** All class training 1–60 costs 206–207 g; warlock prices are already lowered by the cost of the grimoires (L, https://us.forums.blizzard.com/en/wow/t/2360696/9). Costs rise with level, so about 40–60 g of that falls before 40 (T). Apprentice Riding is 100 g with the mount (B, https://us.forums.blizzard.com/en/wow/t/2370227). Whether the Felsteed waives it is unconfirmed; the launch thread has only player opinions ("making 100g by 40 is child's play", https://us.forums.blizzard.com/en/wow/t/2400779). No launch player has reported their gold at 40. | Moot if the Felsteed needs no riding skill; otherwise it needs steady vendoring. Add a gold tip at leg 4's start: "vendor every grey and unneeded green; buy nothing on the AH after the level-14 wand". Keep the 100 g check at l06-003 and l06-080. Twelve players were 40+ on Nov 6 (https://race.aotc.gg/), so re-check the forums for a warlock answer. |
| R9 | l02-008/011 (95214), l05-047/056 (98219), l05-052/054 (2947), l05-064/065 (92459), l09-013/029 (4284) | **Optional turn-ins leave quests in the log.** Stolen Blasting Powder 2, The Shamed Lieutenant, Return of the Ring, Friend of the Kirin Tor and Crystals of Power are accepted on the main path, but their turn-ins are optional. The main path peaks at 17 quests (l04-055) against Classic's 20 cap (https://warcraft.wiki.gg/wiki/Quest_log), so a player who never abandons these could reach ~22 in leg 10. | Add "abandon … if you skipped its turn-in" to the end states of legs 2, 5 and 9. |
| R10 | leg 06 l06-033 | Talk of the Town (98463) has a conditional turn-in but no accept anywhere; its giver is unpublished (https://www.wowhead.com/forever/quest=98463). | Leave as "only if it is in your log". Add the accept once the giver is found in game. |
| R11 | leg 08 l08-014 | The Hinterlands hearth comes about 40–55 min (estimate) after the l07-073 hearth; the cooldown is 1 h. | Note added (ride back if on cooldown). Time it in game. |
| R12 | leg 07 l07-031–l07-051 | Riverglades still has no quest data. On Nov 6 the leader is 42 **in the Badlands**, and no board entry shows Riverglades (https://race.aotc.gg/). | Keep the bail-out at l07-038. The Badlands at 40–42 now has launch support (L). |
| R13 | leg 05 l05-010 | Carnage is a level-30 elite raptor, and the launch pets are weak. The step text has no solo fallback; l05-009's note asks the Excavation group to stay for it. | If the group has left, skip Carnage and its Rethiel turn-in (l05-020); that costs the l05-076 grind ~2–3k XP. |
| R14 | leg 02 end (~1 h Westfall grind); leg 03 dr grind blocks (~48k XP); leg 09 openQuestions[9] (Stormwind vs Everlook bind) | Open from the verifiers; judge-level. | See each leg's openQuestions. |

## 4. What would bring the route back toward 100 h

Two levers only, with no change to quests:
- Normalising kill rates (R6) moves the total by less than ±3 h.
- Rested XP is the larger lever. A player who logs out in an inn for ~19 h a day banks about 0.1 level a day of double kill XP, which could remove **10–15 h** of grinding over a ~4-week leveling period (T). Rate: about 5% of a level per 8 h in an inn, with double kill XP until the pool is used up. warcraft.wiki.gg documents the current retail rule (https://warcraft.wiki.gg/wiki/Rest); we assume Forever uses the same rate (C, unverified in Forever).

Getting to the header's 100 h needs R5: about 40 h of grinding replaced with quests at ≥2× the grind rate.

## 5. Total /played estimate

**≈145 h /played to 60 (band 128–161 h), solo, fresh account, no rested XP, route as written after these fixes.**
- About **29 h to 30** and **≈57 h to 40**.
- Confidence: `theory`.

| Leg | Levels | Leg's own estimate | Re-rated at one kill rate | Cum. |
|---|---|---|---|---|
| 01 | 1 → 10.3 | 2.0–2.4 h | 2.2 | 2.2 |
| 02 | 10.3 → 18.3 | 6.3–7.3 h (incl. ~130 grind kills) | 6.9 | 9.1 |
| 03 | 18.3 → 23.5 | 7–8 h (4.9 h quests and dungeon + ~300 grind kills) | 7.9 | 17.0 |
| 04 | 23.5 → 30 | ≈12 h (~550 grind kills) | 12.2 | 29.2 |
| 05 | 30 → 35.3 | 14–15 h (9 h incl. Gnomeregan + 400 kills at 67–80/h) | 13.0 (400 kills at 100/h) | 42.2 |
| 06 | 35.3 → 40.1 | 11.5–12.5 h (690 kills at ~144/h) | 14.4 (690 kills at 100/h) | 56.6 |
| 07 | 40.1 → 45.3 | 14–15 h (Riverglades at an assumed 45k XP/h) | 14.5 (no basis to re-rate) | 71.1 |
| 08 | 45.3 → 50 | 19–24 h (475k grind XP) | 21.5 (~1,700 kills) | 92.6 |
| 09 | 50 → 55 | 20–29 h (471k grind XP) | 25.4 (~1,545 kills) | 118.0 |
| 10 | 55 → 60 | 23–28 h (612k grind XP) | 27.0 (~1,900 kills) | 145.0 |

**Basis:**
- **Leg times:** each leg's own estimate, from its verifier's XP model. Quest XP is ForeverDB launch values where logged, otherwise Classic values. Kill XP uses the Classic formula and XP table (https://warcraft.wiki.gg/wiki/Experience_point), which launch XP bars match (https://race.aotc.gg/).
- **Grind blocks:** re-rated at one rate, **100 kills/h**, for a competent drain-tank warlock (T). The band uses 125 kills/h (≈58 h of grind) and 85 kills/h (≈85 h), plus or minus 3 h for Riverglades.
- **Not included:**
  - rested XP: −10 to −15 h for daily inn logouts (T);
  - group dungeon waits beyond each leg's own allowance;
  - deaths;
  - later respawn-rate changes (Blizzard plans to slow low-level respawns after launch: https://us.forums.blizzard.com/en/wow/t/2360696/9).

**Cross-checks:**
- Guide projections are 100–120 h (https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/). This route is 20–40% slower than that because of R5.
- Launch racers are 0.4–0.6× this route's time (R5).
- The skeleton's 102 h assumed quest-rate XP/h (42–54k) in legs 7–10, which those legs' quest supply cannot reach.

## Sources
- Launch leaderboard, read Nov 6 (leader 42, Badlands, 1d 2h 4m; 12 players at 40+; no Riverglades): https://race.aotc.gg/
- Dev notes Nov 2 (training 206–207 g, higher creature HP above 30, respawn plan): https://us.forums.blizzard.com/en/wow/t/2360696/9
- Riding 100 g (beta): https://us.forums.blizzard.com/en/wow/t/2370227
- Felsteed and riding debate (launch): https://us.forums.blizzard.com/en/wow/t/2400779
- Chillwind Horns series: https://classicdb.ch/?quest=4809 ; https://www.wowhead.com/forever/quest=4808 ; https://www.wowhead.com/forever/quest=4726
- Encroaching Gnolls: https://www.wowhead.com/forever/quest=244
- Lifting the Curse / Eye of Paleth / Halyndor: https://www.wowhead.com/forever/quest=290 ; https://www.wowhead.com/forever/quest=292 ; https://www.wowhead.com/forever/npc=1160
- Ironforge trainers: https://www.wowhead.com/forever/npc=5172 ; https://www.wowhead.com/forever/npc=5171 ; https://www.wowhead.com/forever/npc=6826 ; https://warcraft.wiki.gg/wiki/Forlorn_Cavern
- Ironband / Find Agmond: https://www.wowhead.com/forever/quest=707 ; https://classicdb.ch/?quest=738
- Favor for Krazek / Return to Corporal Kaleb / Raptor Mastery: https://classicdb.ch/?quest=627 ; https://classicdb.ch/?quest=622 ; https://classicdb.ch/?quest=196
- Portents of Uldum: https://classicdb.ch/?quest=2963
- Hearthstone: https://www.wowhead.com/forever/item=6948
- Quest log cap: https://warcraft.wiki.gg/wiki/Quest_log
- XP formula and table: https://warcraft.wiki.gg/wiki/Experience_point
- Rested XP: https://warcraft.wiki.gg/wiki/Rest
- Hall of Thanes beta group: https://us.forums.blizzard.com/en/wow/t/2356140
- Dungeon quest XP table (beta): https://us.forums.blizzard.com/en/wow/t/2385588/288
- Guide time projections: https://conquestcapped.com/guides/wow-forever/wow-forever-leveling/
