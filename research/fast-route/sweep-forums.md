# Sweep: Blizzard forums (US + EU), launch week and beta — Gnome Warlock 1–60 fast route

Researched **2026-11-05** (launch day +1; launch was 2026-11-04 15:00 PST = 23:00 UTC). Sweep owner: "forums".
Raw thread text saved in `WORK/raw-forums/` (t<id>.txt = US, eu<id>.txt = EU). Helper scripts I wrote (read-only Discourse JSON,
no spoofing) are in `scratchpad/myscripts/` (post.mjs = one full post, usersearch.mjs = post-level search incl. `@user`,
tail.mjs = last N posts of a thread).

**Tags used on every fact:** confidence = `official` (blue post / dev notes / Wowhead DB) · `beta-tested` (several independent
players) · `community` (one player or one data post) · `theory` (our inference). Vintage = **LAUNCH** (posted Nov 2–5 about the
live game or final notes) · **BETA** (Sept 17 – Oct 22 beta, capped at 20 then 30) · **CLASSIC** (carry-over assumption).
Dates are post dates (UTC). Forum tool note: the `[BLUE/STAFF]` flag in `forums.mjs` also fires on players with a custom
user title (e.g. MysticalOS in t/2402016 is not staff); I only call something "blue" if it is Kaivax, Aggrend, Vrakthris,
Nethaera, Linxy or another known staff account.

---

## Route-changing findings (summary)

1. **Warlock pets are paper at launch.** The Nov 2 final notes cut pet HP from 7.5 to **2 HP per point of the warlock's Stamina**
   (official). Launch players report a Voidwalker with **~250–395 HP at 10–15, less than the warlock (418 vs 312)**, dying in 3–5
   hits, needing 2 Health Funnels per same-level mob, armor only ~36% mitigation. No blue reply as of Nov 5 ~18:00 UTC.
   → The 10–30 plan must assume **drain-tank / DoT + wand + Fear**, not Voidwalker tanking; budget a soul shard per re-summon;
   avoid planning solo elites with the VW. [official + beta-tested·LAUNCH] t/2360696/9, t/2401780, t/2401991, t/2402430
2. **Soul shards are harder:** Drain Soul's chance to give a shard on *damage* (not kill) was "reduced significantly" (official,
   Nov 2). Launch players get shards only when the mob dies during the channel. → Always finish with Drain Soul; don't count on
   mid-channel shards. [official + community·LAUNCH] t/2360696/9, t/2401780/17
3. **Higher-level mobs got more HP (Nov 2), most classes got damage — warlocks only got Wrack ×2 coefficient and S&F.** Beta
   players already reported 30+ s kills at 30 as Affliction. → 30–60 kill speed will be slower than beta; favour quest XP over
   grinding at 30+. [official + community·LAUNCH] t/2360696/9, t/2399380/5, t/2400361
4. **Quest XP was "adjusted on various quests" in the final build (direction not stated).** A "~50% cut" rumour is explicitly
   unconfirmed. Launch players say 1–30 is "within 30 minutes of Classic Era by the numbers". [official·LAUNCH for the change;
   community for size] t/2360696/9, t/2399693, t/2399673/13
5. **Respawns are deliberately fast in low zones (starting zones fastest) and slow as you level; Blizzard will slow the low zones
   again after the launch surge** (official). Launch night layering was too sparse; the Nov 5 maintenance raised layer populations
   (Aggrend). Westfall's northern half was spawn-camped even before that. → Expect contention at Westfall and other hubs; Gnome is
   the **least-played Alliance race** (player-posted census: 83.8k vs Human 180k), so Dun Morogh is the quietest Alliance start.
   [official + beta-tested·LAUNCH] t/2360696/9, t/2401806/27, t/2402261, t/2401834/52, t/2402397
6. **"The Great Outdoors" (96608, Kharanos camping intro) is bugged at launch.** Working fix reported by many: sit (X or /sit), wait
   until the Boosted Rest buff appears, then **type /sit again while seated**. **Never abandon "Camping 101: Cooking"** — one
   player could not get it back and lost the Basic Campfire Kit recipe. [beta-tested·LAUNCH] t/2401444, t/2401452, t/2402438,
   t/2402503
7. **Dungeons are still one-and-done at launch:** a full Hall of Thanes clear gave "3 bars" (~30% of a level) of mob XP on Nov 5;
   no dungeon-XP change shipped. Quest XP is what pays (see table in §E: HoT ~77% of a level at 15, Deadmines ~99% at 18,
   BFD ~89% at 24, Stockade ~76% at 26, Excavation ~88% at 28, Gnomeregan ~91% at 31, City of Dalaran ~69% at 32; SM for
   Alliance only ~10%). [community·LAUNCH + community·BETA] t/2402437, t/2385588/288
8. **Ruins of Lordaeron is a trap for Alliance at 15–16:** launch players could not pick up its quests at 16 (quests show level
   21–22 and have prerequisites), and in late beta the Alliance boss quest paid **3,900 XP vs 13,500 for Horde**. → Skip RoL or
   only do it ~20–22 if already near Undercity. [beta-tested·LAUNCH + community·BETA] t/2402007, t/2401942, t/2396590;
   Wowhead Q:95250 = level 21
9. **Boats/zeppelins broke on launch night; Blizzard spawned temporary portals at docks and fixed transports in the Nov 5
   maintenance.** The Menethil–Auberdine boat now also stops at Southshore (3-stop loop, ~10 min waits). → Route timing for
   SW↔Auberdine and Menethil boats: assume long waits; check that portals are gone. [official·LAUNCH + community·BETA]
   t/2401777/15, t/2365523, eu t/633640
10. **Skip-list evidence:** Westfall "Toxic Soil" (11 quests, normal XP, no gear, needs 10 Rough Dynamite + Stormwind detour +
    Deadmines) [community·BETA t/2376450]; Wetlands "Uncovering the Past" 4th fragment took one player ~2 h [community·BETA
    t/2373924]; Duskwood Valor ghosts (Lost Knight spawns in two cemeteries on opposite sides) [community·BETA t/2385912];
    dungeon pre-quest chains go grey if you arrive over-levelled [community·LAUNCH eu t/639763].
11. **Excavation Site soft-lock:** the Titan Relic disappears after "Lost Relic Carry" → "Prehistoric Prism"; do not abandon
    either quest (it cannot be re-acquired). [beta-tested·BETA t/2370413, t/2372216] — no fix seen in notes.
12. **Cozy Sleeping Bag chain for Alliance goes through the Barrens** (launch player "just been to the Barrens and back for the
    Sleeping Bag quest"); a later step is on the Loch Modan dam, where Horde PvP players say they will camp, and in beta "Eagle's
    Fist" sometimes failed to appear after "Wet Bags". → Long detour for ~3% XP; route it only if it overlaps other errands.
    [community·LAUNCH + beta-tested·BETA] t/2402504/15, t/2399787/9, t/2362081, t/2363604, t/2375384
13. **Pace benchmarks:** race.aotc.gg at ~18:15 UTC Nov 5 (19h15m after launch): #1 Ksuper, Alliance Night Elf Hunter (EU), **level
    38 in Stranglethorn**; best warlock = Alliance Human Warlock at 33 (#22). US racers lost ~1 h to the Nov 5 maintenance; EU did not
    go down. Beta: Blizzard's average 1–20 = 20.5 h vs 20.4 h in Classic; efficient questers 9–17k XP/h at 1–20. [community·LAUNCH;
    community·BETA] race.aotc.gg, t/2402253, t/2402262, t/2369852
14. **Mobs below your level appear to give less XP than in Classic** (two independent beta posters). → Grind only yellow/orange mobs;
    green-mob grinding is worse than in Classic. [community (2 reports)·BETA] t/2373535, t/2389141

---

## A. Live-service state at launch (Nov 2 – Nov 5)

### A1. Final pre-launch notes ("Beta Development Notes – Updated November 2", Kaivax, posted 2026-11-03 03:20 UTC)
URL: https://us.forums.blizzard.com/en/wow/t/2360696/9 (UI section added in /10 on 2026-11-04). All `official·LAUNCH`.
Only the parts that change routing:
- "Adjusted respawn rates for many different areas… generally on the faster side in lower-level zones — with starting zones being
  the fastest — and gradually fall to slower rates as you level… Once the initial launch surge… has settled down, we will adjust
  the lower-level zones down to more typical rates." → Low-level respawn is a launch-week advantage that will disappear.
- "Adjusted experience values on various quests." / "Adjusted pre-requisites and level settings on some quests to improve flow."
  No list. A player read this as a quest-XP reduction; another heard "~50%" and said "I CANNOT confirm" (t/2399693, Nov 3,
  `community`). Treat quest XP numbers from beta as approximate.
- Classes: "we've raised damage on classes across the game, and have increased the health of higher level creatures to compensate."
  "We don't plan on making big tuning changes between now and the opening of the raids" except bugs/outliers.
- Training: "Total cost to train class abilities from 1–60 is now between 206 and 207 gold for all classes. Warlocks costs are
  reduced by the expected costs of buying Grimoires." Most abilities learned at the same level cost the same. (Gold planning.)
- Learning new spells no longer auto-adds them to action bars (beginner note).
- Talents' low-rank proc penalty removed except Blizzard (mage).
- Warlock: pets 2 HP per master Stamina (was 7.5); Drain Soul shard-on-damage chance "reduced significantly"; Spellstone now
  Shadow-only; Bane of Agony updates dynamically; Wrack coefficient doubled to 0.286/s and base DPS scales +2.5/level
  (36 → 86 at 60); Improved Drains no longer boosts Wrack; Shadow and Flame 4–20%; Amplify Curse fixed for Exhaustion/Agony.
- Quests/world: Darkshore "Holy Diver" now gives XP; Ruins of Lordaeron quests "consistently require a minimum of level 15
  (was a mix of 15 and 16), and some pre-requisites have been adjusted"; Wetlands "Carnage" no longer resets; "Destruction in
  Deadmines" turn-in NPC Alba Fairmoon fixed (Toxic Soil chain end); destroying a quest item ↔ abandoning fixed on various quests.
- Bags no longer auto-equip into empty bag slots — equip them manually (beginner trap).
- Duration of the "quitter" debuff 40 s (was 5 min).

### A2. Launch night and day 2 (blue posts)
- **Transports:** Aggrend, 2026-11-05 06:39 UTC: boats and zeppelins "becoming lost in the maelstrom… As a temporary fix, we've
  spawned portals near most transport docks or inside of the zeppelin towers… We have a proper fix going out in the morning, and
  once we've verified that's in and working, we'll be removing those portals." `official·LAUNCH`
  https://us.forums.blizzard.com/en/wow/t/2401777/15 (player reports: SW↔Darnassus/Auberdine boat "bells but no boat",
  t/2401402, t/2401431, Nov 4–5).
- **Layer population:** Aggrend, 2026-11-05 06:35 UTC: "aware of some issues with certain areas not feeling as populated as they
  should. We will be tweaking some numbers tomorrow." https://us.forums.blizzard.com/en/wow/t/2401806/27 ; his tweet (quoted by a
  player) says the Nov 5 maintenance is for transports and layer populations: https://us.forums.blizzard.com/en/wow/t/2402261
  `official·LAUNCH`. The US maintenance on Nov 5 (~1 h) hit US racers; EU servers stayed up (t/2402244, t/2402262, Nov 5,
  `community·LAUNCH`).
- **Grouping into the same layer:** Kaivax, 2026-11-05, asks whether players see the blue "Refresh Now" prompt after joining a
  party — this is the intended way to join your party's world instance. https://us.forums.blizzard.com/en/wow/t/2402367/2
  `official·LAUNCH`. Player workarounds when no prompt appears: walk through the **Stormwind Dwarven District tram portal together**
  (t/2401532/10, Nov 5, `community·LAUNCH`); zone out and back (t/2402367/3). Party members sometimes can't see Hogger/mobs the
  others fight (t/2401723, t/2401842, Nov 5, `beta-tested·LAUNCH`).
- **Known Issues – Updated Nov. 5** (Kaivax): RFK cauldron near Roogug traps players; PvP vendors unavailable (SW, Org, Dalaran);
  **"Vorsha the Lasher" (Ashenvale) disabled** (a Horde quest — no Alliance impact); bank tab display bug. `official·LAUNCH`
  https://us.forums.blizzard.com/en/wow/t/2402363
- Invite-a-Friend chat restriction hotfixed (Kaivax, t/2401646); IaF trial characters are capped at level 10 (t/2401678,
  `community·LAUNCH`) — irrelevant for a paid account.

### A3. Crowding, respawns and tagging at launch
- Launch night (Nov 4–5): many reports of near-empty layers and cities ("8 people in Ironforge", "3 people in Westfall")
  (t/2401806, t/2402213/32, t/2401949; `beta-tested·LAUNCH`), but also packed starting zones in the first hour ("Coldridge Valley
  was TEEMING", t/2401941/7; "queuing to kill Young Nightsabers", eu t/639662/6) and **"Westfall is now so crowded that every mob
  outside of caves is being spawn camped throughout the entire northern half"** (t/2401834/52, 2026-11-05 05:42 UTC).
  After a layer reset players were moved into "DOZENS of people" layers (t/2402001, Nov 5). `beta-tested·LAUNCH`
- **Respawns are fast in starter areas:** in Coldridge the Snow Leopard for **"Grund and Gozwin" (97277, new Forever quest;
  wh.mjs confirms name/objective)** "respawned before I could even get the book" (t/2401538, Nov 5, `community·LAUNCH`).
  Hyperspawns kill people in small caves — "the stupid **Wendigo cave in Dun Morogh**" (t/2401554/24, Nov 5) and "dying from 6 things
  spawning 2 seconds after 3 groups killed them" (t/2401951). Beta: the **Frosthowl cave** quest mob was one of "two or three" that
  were a pain to tag (t/2391412/16, Oct 25). `beta-tested·LAUNCH/BETA` → caves: pull carefully, Fear the extra, don't rest inside.
- **Quest-drop items are single-loot in groups** even on Free-for-All (Croaky's Head, Elmpaw's Head — Elwynn elites), and Croaky's
  drop changed from group to 1-person since beta (t/2401732, t/2401613, Nov 5, `community·LAUNCH`). Grouped quest kill credit
  sometimes stops counting; disband and re-form fixes it (t/2401716, Nov 5, `community·LAUNCH`). Beta players also felt quest-item
  drop rates fall when grouped (t/2397370/1236, Nov 2, `community`). → **Solo for collect quests; group only for contested named
  kills.** Day-1 tip from a beta player: "Avoid groups except for quest tagged mobs" because of the XP split (t/2399867/15,
  Nov 3, `community`).
- Escorts respawn slowly (Silverpine escort 9 min, t/2402442) and fail if the party gets layered mid-escort (Barrens "Free From
  the Hold", t/2402177) — `community·LAUNCH`. → Do escorts solo, don't invite mid-escort.
- No shared tagging; Blizzard has not changed this (players at launch, t/2402543, t/2401502; existing research §1.3). `beta-tested`
- Off-meta idea: "If there's a bunch of people using [RestedXP], the chokepoints will compound such that the non-meta routes might
  be more efficient" (t/2398971, Nov 2, `theory/community`).

---

## B. Leveling pace evidence (launch and beta)

| What | Number | Source / date | Tag |
|---|---|---|---|
| Fastest racer after 19h15m from launch | Ksuper (Alliance NE Hunter, EU Normal) **38, Stranglethorn Vale**, "43.9k" (XP/h shown); 2–7 = level 35 (mostly Skyborne/US PvP); first warlock = Kanting (Alliance Human, EU PvP) 33 | https://race.aotc.gg read 2026-11-05 ~18:15 UTC (live page; no history shown) | community·LAUNCH |
| Leader earlier on Nov 5 | Ksuper 34 → "two level 28 hunters" on US PvE taking different routes | t/2402262, t/2402253 (Nov 5) | community·LAUNCH |
| Ordinary players day 1 | lvl 6 warlock, 13–16 druids/hunters, 14 mage after one night | t/2402226 (Nov 5) | community·LAUNCH |
| 1–30 vs Classic | "within 30 minutes of classic era by the numbers 1–30" | t/2399673/13 (Nov 3) | community·BETA |
| Blizzard average 1–20 | 20.5 h Forever vs 20.4 h Classic (quoted via a summary post citing designer Kris Zierhut) | t/2369852 (Oct 2) | community (quote of official) ·BETA |
| Efficient questing 1–20 | ~16–19k XP/h focused; 9k average; 5–9k XP/h typical in Westfall/Loch Modan/Duskwood/Ashenvale | t/2369852 (Oct 2) | community·BETA (AI-assisted post — low weight) |
| 1–10 time | 2h05 human warrior (stress test, not speed-running); hunter +40 min | t/2389141 (Oct 22) | community·BETA |
| Day-1 claim | "No reason you can't be level 15–20 first 6–10 hours" | t/2399867/15 (Nov 3) | community·BETA |
| Stockade mob-only XP | 3,950 XP for a full clear in 32 min at 26 = ~123 XP/min; open-world lvl-25 mob = 155 XP each | eu t/634456 (Oct 9) | community·BETA |
| Repeat-dungeon XP (lvl 16 HoT, no quests) | ~12% of a level for two runs | t/2356140 (Sept 20, pre-nerf) | community·BETA |
| SFK repeat at 20 | "maybe 2–3 bubbles" | t/2369852/2 (Oct 2) | community·BETA |

- Pre-Oct-1 (before the dungeon-quest XP cut) beta routes, useful only as an upper bound on quest supply: human 1–12 Elwynn only,
  12–14 Dun Morogh, HoT → almost 16, Westfall → 17, RoL → almost 19, Redridge → 20 (t/2358669, Sept 23); "every quest in Dun Morogh,
  Elwynn, Westfall and half of Loch Modan to reach 20, plus HoT and Deadmines" (t/2361881, Sept 25). `community·BETA (pre-nerf)`
  → 1–20 has far more quests than needed; the fast route must skip.

---

## C. Dun Morogh, Coldridge Valley, Kharanos (gnome start)

- **Gnomes are the least-played Alliance race** (player-posted census without a stated source: Human 180,406; Skyborne-A 104,439;
  Night Elf 98,561; Dwarf 90,481; **Gnome 83,836**). https://us.forums.blizzard.com/en/wow/t/2402397 (Nov 5) `community·LAUNCH`
  — supports staying in the dwarf/gnome zone rather than going to Elwynn: "In the Dwarf starting area, you'll mostly have to deal
  with Dwarf Shamans and Gnome Clerics… I expect the Human areas to be worse" (t/2400597/21, Nov 4, `community`).
- Going to Elwynn instead: "About the same speed" (t/2400597/2); human-zone quests grey out at 8+ (t/2400597/15). `community·LAUNCH`
  → no reason for a gnome to leave Dun Morogh early.
- **6–10 band critique from a gnome/dwarf beta tester** (eu t/633464, Oct 4, `community·BETA`):
  - three separate boar-kill quests at 6–10, two of them chained; "Evershine" blocks "Stocking Jetsteam"/"A Favor for Evershine"
    from being done together;
  - "The best bit of 6–10 is the **yeti cave**, where there are three distinct quests";
  - **"Finding Warmth" (99159, 14 firewood) is required to unlock Father Gavin's other Misty Pine quests**, and firewood will be
    contested at launch;
  - "Data Hoarders" must be turned in in Ironforge;
  - "Loch Modan isn't viable because of DM quests in Westfall" — the Deadmines pre-quest chain pulls you to Westfall.
- **Great Outdoors bug and fix** — see Finding 6. Earlier beta fixes (abandon/relog) did **not** work at launch for several players;
  the reliable fix is the second /sit after the buff (t/2401444/11 has 48 likes). `beta-tested·LAUNCH`
- Cooking for XP food: in beta **boar meat makes XP food from Cooking 1, wolf meat only from Cooking 10** (t/2396549, Oct 30,
  `community·BETA`). Food XP applies only to kills (t/2369852, `community`). → Cook boar meat from the early Dun Morogh boar quests.
- Beta soloing reference: a level-10 paladin needed every cooldown to solo the level-11 elite yeti for "Protecting the Herd"
  (t/2356140/3, Sept 20, `community·BETA`). With a launch Voidwalker this is not a solo target for a 10–11 warlock (theory).
- Hall of Thanes chain start and Farsen: see existing research; launch adds nothing except HoT XP (§E).

## D. Other Alliance zones (launch + beta forum notes)

- **Westfall:** most contested Alliance zone at launch (Finding 5). Beta: "20 to 30 players in each area… each quest area can support
  3–4 players" (eu t/629869, Sept 19); "5+ groups fighting over 10–15 harvesters" (t/2356140, Sept 20); "spend 2 hours on one quest
  because 800 people… killing harvest watchers" (t/2402309/1, Nov 5 recalling beta). `beta-tested·BETA/LAUNCH`
  - Toxic Soil chain (Alba Fairmoon): 11 quests, "piddly" XP, no gear; needs 10 Rough Dynamite (was Coarse), a Stormwind trip and
    a Deadmines run (t/2376450, Oct 8, `community·BETA`); turn-in bug fixed Nov 2 (official). → skip except steps on your path.
- **Loch Modan:** mining nodes in the trogg caves are stolen by players on other layers (layer bug, t/2402013, Nov 5,
  `community·LAUNCH`). A beta player rated Loch Modan "not viable" vs Westfall because of the Deadmines chain (eu t/633464).
  A launch-eve route suggestion: east Loch Modan at 16–17, skip the 19–20 elite quests "if you want fast leveling" (t/2400597/8,
  Nov 4, `community`).
- **Redridge:** Alliance Merchant's Favor market is at Three Corners (t/2390704, Oct 23, `community·BETA`; existing research).
  Launch posters expect contention on "kill mongrels" quests (t/2402350/10). Redridge barrels in the orc camp were "super slow to
  spawn" (eu t/634696/3, Oct 10). `community`
- **Wetlands:** elite group content (Dun Modr, Dragonmaw Retreat) was popular in beta (t/2399984/356, eu t/634696/1). The new
  Wildhammer elite quest "Stopping the Cycle" (Howin Kindfeather, level 34 elite, Q:98297) is cited (t/2373988/276). Uncovering the
  Past 4th fragment problem (Finding 10). `community·BETA`
- **Darkshore / Auberdine:** launch-day Auberdine mailbox, anvil and wanted poster were un-interactable for some hours, then fixed
  (t/2402452, Nov 5, `community·LAUNCH`). Auberdine had ~50 players at the inn on Nov 5 (t/2401806/112).
- **Duskwood:** Valor-family ghost chain — Lost Knight spawns in either Raven Hill or Tranquil Gardens cemetery (opposite sides);
  chain did not conclude in beta (t/2385912, Oct 18, `community·BETA`). → skip for speed.
- **Boats:** Darkshore→Menethil now stops at Southshore; players report ~10 min waits (t/2365523, Sept 28; eu t/633640, Oct 5;
  eu t/633812) `beta-tested·BETA`. The Stormwind→Dalaran portal (for Skyborne) was removed mid-October (t/2387197, Oct 19,
  `community·BETA`) — no Alliance shortcut to Alterac/Hillsbrad.
- **Riverglades:** no launch reports (nobody there yet). Alliance gets a "paved road" from Redridge; Horde must take the
  Gadgetzan→Powderfuse boat (t/2392206/69, Oct 26, `community·BETA`). Powderfuse FP still unconfirmed (existing research).

## E. Dungeons — launch state and XP data

- **Launch:** HoT full clear "gave 3 bars of xp" (t/2402437, Nov 5, `community·LAUNCH`). No dungeon-XP buff shipped; Blizzard said
  no big tuning before raids (t/2360696/9). One-and-done is the launch meta (t/2400140, t/2400964).
- **Quest-XP table (beta, Oct 18, after the Oct 1/Oct 8 changes, before the Nov 2 "adjusted XP"):** Cyranis,
  https://us.forums.blizzard.com/en/wow/t/2385588/288 `community·BETA`. Alliance quest XP only (no mob XP); % = share of the level
  bar at the target level; "Higher-level dungeon figures (*) are preliminary Classic-based estimates":

  | Dungeon | Target lvl | Alliance quest XP | % level | Caster reward | Prep time (A) |
  |---|---|---|---|---|---|
  | Hall of Thanes | 15 | ~10,800 | 77% | Deepblaze (caster) | 10–30+ min |
  | Deadmines | 18 | ~17,850 | 99% | Staff of Westfall | 40–75+ min |
  | Wailing Caverns | 18 | ~20,050 | 111% | (Horde blues) | far for Alliance |
  | Ruins of Lordaeron | 19 | ~22,750 | 110% | (Horde blues) | — |
  | Shadowfang Keep | 20 | 0 | 0% | — | — |
  | Blackfathom Deeps | 24 | ~28,500 | 89% | **Gravestone Scepter** | 5–15+ min |
  | Stockade | 26 | ~27,450 | 76% | none confirmed | multiple chains |
  | Excavation Site: Wetlands | 28 | ~35,450 | 88% | Healer's Staff | post-run travel |
  | Gnomeregan | 31 | ~46,460 | 91% | none confirmed | multiple prereqs |
  | City of Dalaran | 32 | ~37,600 | 69% | (Defender of Dalaran, physical) | 30–60 min |
  | Razorfen Kraul | 33 | ~22,100 | 38% | Quilboar Blaster (hunter) | 20–40 min |
  | Scarlet Monastery* | 40 | ~8,250 | 10.5% | melee swords | 60–120 min |
  | Razorfen Downs* | 42 | ~12,290 | 14.6% | — | 5–10 min |
  | Uldaman* | 45 | ~60,315 | 63% | not verified | varies |
  | Zul'Farrak* | 47 | ~38,550 | 38% | not verified | varies |
  | Maraudon* | 49 | ~40,700 | 37% | Resurgence Rod | 5–10 min |
  | Sunken Temple* | 53 | ~41,950 | 32% | not verified | varies |
  | BRD* | 57 | ~115,725 | 68% | not verified | several chains |
  | Drowned City, Krol'dok, Alcaz, Blackmaw, Shaper's Terrace | — | TBD | — | — | — |

  **Conflict:** the same author's Oct 15 table (t/2379420/583) gives very different totals (HoT ~17,100 = 121%, Deadmines ~11,200,
  BFD ~14,600, Stockade ~13,400, Excavation ~16,900, CoD ~21,300, Drowned City ~26,400 at 38, SM all wings ~38,200, Krol'dok ~31,200
  at 44). Use the tables only to **rank** dungeons, not for exact XP. Faction totals 1–30 per another poster: 54 Alliance dungeon
  quests = 238,685 XP vs 45 Horde = 199,640 (t/2396590/2, Oct 30, `community`).
- **Old dungeons need multiple runs for drop quests** (WC deviate hides 10/20 per run; BFD brainstems/pendants similar), while
  RoL's limb drops are personal loot so everyone finishes in one run (t/2373476, Oct 5; t/2369852/6) `beta-tested·BETA`.
- **Gravestone Scepter has no spell power** (BFD quest wand; Sizzle Stick from WC got +5 SP) — still "one of the best wands… into
  the 30s" for casters (t/2365726, Sept 29; t/2371924, Oct 4) `community·BETA`.
- **Ruins of Lordaeron (Alliance):** launch pickup failures at 16 (quests show level 22; a prerequisite for "The Wrath of Rath'mael"
  per whispers) (t/2402007, t/2401942, Nov 5, `community·LAUNCH`); Wowhead DB levels: Abominable Creatures 95250 = 21, Bloodied
  Insignia 95195 = 22, Crest of Lordaeron 95189 = 22, Remember That I Love You 92415 = 22 (`official·DB`, wh JSON in WORK). Alliance
  boss quest 3,900 XP vs Horde's 13,500 follow-up chain (t/2396590/1, Oct 30, `community·BETA`). Entrance in Undercity: Alliance
  died 6–7 times getting in on PvP (existing research). → **Skip for a fast Alliance route.**
- **Excavation Site:** Titan Relic soft-lock (Finding 11); hunters asked for Track Hidden for hidden raptors (eu t/634639).
- **Deadmines group timing (beta):** entering at ~18.8, dinged 19 before Greenskin and 20 on turn-ins; VC needed big effort
  (t/2356140, Sept 20, pre-nerf, `community·BETA`). HoT at 14.5 → 15 in run → 16 after quest turn-ins (same post, pre-nerf).
- **Camp in dungeons:** if a group member arrives from another layer, the people already at the entrance can be moved and lose
  their placed campfire and items (1 h cooldown). Place camp items only after the full group is present
  (t/2396215, Oct 30, `community·BETA`).
- Gnomeregan bosses dropped no loot for a day in beta (fixed by Kaivax, t/2370922/6, Oct 4, `official·BETA`).

## F. Warlock at launch

- **Pet HP (Finding 1) details:** "Voidwalker literally has less health than I do" (t/2401780/3); "Level 10 hunter pet wolf has more
  HP than a level 14 Voidwalker" (/7); "I have 418 hp and my TANK pet has 312" (t/2402430/7); "a level 15 void… 395" vs a lvl-12
  hunter cat 327 (t/2401991/35); "I'm lvl 19… worse as I level… resummon vw every other pull" (t/2401991/23); "23 shards reviving
  the fragile blueberry and im only level 12" (t/2401780/10); Voidwalker armor ~35–36% mitigation and Demon Skin lowered the void's
  armor (t/2401780/22, t/2401991/15). All Nov 5, `beta-tested·LAUNCH`. EU same (eu t/639615, eu t/639197: late-beta VW was 2,200 HP
  at 30 after a partial rollback; a ~73% cut now).
- **What launch warlocks are doing instead:** using the **Imp** ("6 dmg firebolt but at least it doesn't die… and cost a soul shard",
  t/2401780/12); **drain-tanking / wand-kiting** ("If you're not drain tanking you should probably have rolled something else",
  t/2401796/3); Fear-juggling single mobs (t/2401780/29); some go **Demonology** ("5/5 Improved Corruption straight into demo… the only
  way to not have paper thin pets", t/2401991/11) or "aff/DS" (Demonic Sacrifice, t/2401991/24). `community·LAUNCH`.
  Note existing research: drain-tanking "comes online at ~23 (18 with Talented)" — so 10–23 is the painful window (theory).
  EU bug: Imp stops attacking mid-cast unless re-commanded (eu t/639739, Nov 5, `community·LAUNCH`).
- **No blue response** in any pet thread (t/2399417, t/2400094, t/2401991, t/2402048, t/2402430 checked for staff posts Nov 5).
  A hotfix is possible at any time — the route should say "if pets are fixed, VW-tanking returns".
- **Wrack after Nov 2:** players compute new Wrack (86 base DPS, 0.286 SP/s) still below Shadow Bolt per cast-time with 5/5 Bane
  (t/2400094 thread, Nov 3, `community`). The capstone is irrelevant before 40+ anyway.
- **Succubus/Incubus:** the level-20 quest gave an Incubus "randomly" for some beta players with no way to get the Succubus spell
  (t/2357856, t/2367277, Sept 22–30, `community·BETA`) — cosmetic, same pet.
- Soul shards still don't stack (t/2401686, Nov 5). Shard bag fits the reagent slot (existing research).
- Out-of-combat health regen bug on a warrior (regen stops until death; food heals instantly) — single report (t/2402016, Nov 5,
  `community·LAUNCH`); watch for it because warlocks Life Tap.

## G. Accelerators (rested, camps, food, sleeping bag)

- Campfire buffs are lost on death; the "Boosted Rest" debuff only blocks the **rested-XP** part, other camp buffs can be taken again
  (t/2401684/5, Nov 5, `community·LAUNCH`). Campsite items are single-use and seem to need the profession skill (t/2391775/4, Oct 26,
  `community·BETA`) — dropping Leatherworking after making a tent is untested.
- Campfire buff timer resets if you act while sitting (eat/enchant), ~50/50 for food (t/2399820, Nov 3, `community·BETA`).
- Healthstones can't be made while sitting at a campfire (existing research).
- **Cozy Sleeping Bag:** Finding 12. Beta: chain step "Wet Bags" turned in on the Loch Modan dam; "Eagle's Fist" sometimes not offered
  (t/2362081, Sept 25); the chain dropped out of one player's log after accepting another quest from the dam NPC (t/2363604, Sept 27)
  `beta-tested·BETA`. Horde PvP players plan to camp the dam step (t/2399787/9, Nov 3). Day-1 tip: "@14 stop everything and get Sleeping
  Bag" (t/2399867/15, `community`). The bag is ~3% XP (existing research). Whether it is usable before 40 is still unclear (Wowhead lists
  level 40 per existing research) — gap.

## H. The 30–60 experience

- **Nothing from launch yet beyond level ~38.** The leader reached Stranglethorn at 35–38 (race.aotc.gg). Horde #8 was in Alterac
  Mountains at 34; two Alliance Humans at 33 were in Ironforge (Gnomeregan/training?) (race.aotc.gg, Nov 5) `community·LAUNCH`.
- Final notes: higher-level creatures have more HP (official). Player guesses on size: "+10–15% HP and damage at 30", "100% more HP at
  50–60" (t/2400361/12, Nov 4, single balance-druid claim); "They did for 30+ mobs" (t/2402493/5). Earlier beta claim of +23–27% from
  35–60 (existing research). → `theory` for exact values.
- Beta expectation: "1–30 easy, 40+ becomes a real slog, 55+ worse" (t/2397728, Oct 31, `community`); "the real test… 30–40 around
  Arathi, Tanaris, ZF" (t/2361881, Sept 25).
- Alliance SM quests: only 2 quests (Mythology of the Titans, In the Name of the Light), both needing travel into Horde land
  (t/2373245, Oct 5, `community·BETA`); SM ~10% of a level (§E table). → Skip SM for Alliance speed.
- Launch-eve community route for dwarves/gnomes (`community·LAUNCH`, t/2400597/8, Nov 4): Dun Morogh → at 12 Auberdine (boat) or
  Westfall → back to Loch Modan 14 → Westfall → Redridge + Westfall → east Loch Modan 16–17 → finish Westfall/Deadmines → Duskwood
  upper teens → Wetlands low–mid 20s → Redridge → Duskwood to early 30s → **Stranglethorn to 40** → Tanaris. Mostly Classic logic.

## I. Contradictions to flag

1. Quest XP after the Nov 2 "adjusted" change: unknown direction; rumour of −50% unconfirmed (t/2399693/13) vs "within 30 min of
   Classic" (t/2399673/13). Beta quest-XP numbers may be off.
2. Dungeon quest-XP totals: two tables by the same author differ by up to 2× (t/2379420/583 vs t/2385588/288).
3. Leveling "too easy" (t/2401554, t/2402493 — hunters pulling 3–6 mobs) vs warlocks "can barely level" (t/2402430). Class matters:
   warlock is on the slow end at launch.
4. Layer population: "empty" (launch night) vs "overcrowded" (after the Nov 5 change / some layers) — it changes by the hour.
5. RoL minimum level: notes say 15 for all quests; launch players at 16 could not take them (prerequisites).
6. Voidwalker "fine, just use Health Funnel" (t/2400718/7, Nov 4, written before launch) vs launch reports that two funnels per mob
   are needed.

---

## Gaps (could not find on the forums)

- **No launch reports of any Alliance zone past ~25** (Wetlands, Duskwood, Ashenvale, Hillsbrad, Arathi, STV, Desolace, Riverglades,
  Shen'dralas, Tanaris…) — launch players are only up to ~38. No forum data for 30–60 hubs, quest XP or travel times.
- No measured **XP per quest** for Dun Morogh, Loch Modan, Westfall, Redridge or Wetlands quests after the Nov 2 quest-XP adjustment.
- No list of **which quests had XP adjusted** in the final build.
- No blue statement on the **warlock pet HP** reaction or a planned hotfix; no warlock-specific launch measurement of kill time or XP/h.
- No forum evidence on the **Voidwalker (10), Succubus (20), Felhunter (30) or Felsteed (40) quest locations** for Alliance in Forever
  (nothing new beyond existing research); no report of class-quest bugs at launch.
- **Cozy Sleeping Bag:** full Alliance step list, total time, and the required level to *use* the bag are not on the forums.
- Whether the **Menethil/Auberdine/Southshore boat** fix in the Nov 5 maintenance worked, and whether the temporary portals are gone.
- No Alliance launch report on **Hall of Thanes quest XP** (only mob XP "3 bars"), Deadmines, BFD, Stockade, Excavation Site or City of
  Dalaran in the live game.
- No data on **Drowned City, Krol'dok Stronghold, Alcaz Prison, Blackmaw Hold, Shaper's Terrace** quests (never in beta).
- Reddit not accessible (blocked by rule); the race.aotc.gg leaderboard shows only current level/zone, not routes.
