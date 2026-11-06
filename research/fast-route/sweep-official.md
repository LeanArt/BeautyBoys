# Sweep "official": XP rules, mechanics, launch hotfixes and the Alliance travel network (WoW: Forever)

Researched 2026-11-05 (launch day +1). Tags on every fact: **confidence** (`official` / `beta-tested` / `community` / `theory`) and **era** (`launch` = Nov 2–5 notes, posts or launch-client data; `beta` = Sept 17–Oct 23; `Classic` = carry-over, not verified in Forever).
"Launch-client datamine" means a third-party site that read the live client (build 1.60.1.70790). It is tagged `community`, but it is the best evidence we have for the travel network.
This file adds to `research/blizzard-official.md`, `gamedata.md` and `forums-player-threads.md`. Facts already in those files are only repeated where this sweep found new or better evidence.

## Route-changing findings (summary)

1. **Transports broke at launch and were patched on Nov 5.** From Nov 4–5, boats and zeppelins went missing on some layers ("world instances"). Blizzard put temporary **portals** next to most docks and inside zeppelin towers. The proper fix went out in the Nov 5 morning maintenance (about 1 hour), and the portals are to be removed after that. If a boat doesn't arrive, look for a portal at the dock. `official, launch`: https://us.forums.blizzard.com/en/wow/t/2401777/15 (Aggrend, 2026-11-05 06:39 UTC)
2. **The Alliance flight network is Classic's, plus one useful new node.** That node is **Farholde Keep** (Riverglades 60.6, 81.4, Gretchen Mayberry), which links to **Lakeshire, Thelsamar and Morgan's Vigil**. The **Powderfuse Port** flight node exists but has **no routes** in the launch client, so don't plan around it. Shen'dralas and Zephras Isle have no flight path. `community (launch-client datamine) + official DB for the NPC`: https://foreverdb.net/travel ; https://www.wowhead.com/forever/npc=257087
3. **Three new ship routes (official) on top of all the Classic ones:**
   - **Stormwind Harbor (southern-most dock) ↔ Auberdine**
   - **Menethil → Southshore → Auberdine → Menethil** (one-way loop)
   - **Steamwheedle Port (Tanaris) ↔ Powderfuse Port (Riverglades)**

   The Classic Menethil↔Auberdine, Menethil↔Theramore, Auberdine↔Rut'theran, Feathermoon, Ratchet↔Booty Bay boats and the Deeprun Tram all still exist. https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap ; https://foreverdb.net/travel
4. **Riverglades (36–44 in the Wowhead DB; Blizzard says "mid-30s to mid-40s", 150–200 quests).** Alliance walks in from **Redridge**: a new fork off the Redridge→Burning Steppes road heads east. You can also enter from NE Swamp of Sorrows or the Badlands. Pick up Farholde Keep's flight path on arrival. Leave by the **Powderfuse Port → Steamwheedle Port (Tanaris)** boat. `official` for the zone and boat; `community` for the land entrance.
5. **Shen'dralas is a likely skip.** You reach it through the Valley of Bones, south of Desolace (official). The Magram/Gelkis "Valley of Bones" chain needs **level 35** (official, Oct 8 notes) and Wowhead lists **Honored with Magram Clan Centaur**. The quests run about level 40–43, and the zone has no flight path. `official + DB`
6. **Open-world kill XP is lower than Classic.** Green (lower-level) mobs give **4–20% less XP** per kill, and a Blizzard designer called this intentional (Icy Veins report). Dungeon mob XP is about **70–76% below Classic**, while dungeon quests pay about **2× Classic**. The XP needed per level is unchanged (4,084,700 total to reach 60). This strengthens the case for questing plus a single dungeon run per dungeon, and against grinding green mobs. `community/beta-tested`
7. **Final launch notes (Nov 2) change the numbers:**
   - Class damage is up, and so is the **HP of higher-level creatures**. Expect slower kills after 30.
   - **Pet health from your Stamina was cut from 7.5 to 2 HP per point.** Launch players report the Voidwalker is weaker than the warlock. There was no blue reply as of Nov 5.
   - **Drain Soul's chance to give a shard on non-killing ticks was cut "significantly".**
   - **Respawn rates were raised for launch** (fastest in starting zones) and will be lowered later.
   - "Adjusted experience values on various quests" (the notes don't say which).
   - **Training every class ability from 1–60 now costs 206–207g for every class.** Warlock prices are lowered to allow for grimoire costs.

   `official, launch`: https://us.forums.blizzard.com/en/wow/t/2360696/9
8. **XP accelerators (confirmed in the Forever DB tooltips):**
   - Cooked food gives **+5% kill XP for 15 min**.
   - The **Cozy Sleeping Bag** gives up to 3 stacks of an XP bonus (+1% per stack per guides), has a 1 h cooldown and a 15 s cast. **The item has no level requirement** (it is item level 40, *not* required level 40). The chain starts at level 14 and its last quest is level 32.
   - The Leatherworking **Camp Tent** adds rested XP worth 5% of a level.
   - **Student Fodder no longer gives rested XP** in Forever.
   - The Twitch-drop **Pouch of Violet Dust** adds +1 h to camp buffs. Drops run to Nov 12, and the toy works until early December.

   `official DB / launch news`
9. **Fixed numbers:**
   - Hearthstone: **1 h cooldown, 10 s cast** (DB, official).
   - Quest log: **40** (beta-tested).
   - Apprentice Riding: level **40, 100g including your racial mount, 60% speed** (beta trainer UI; community).
   - Felsteed: quest from **Strahad Farsan, Ratchet (62.4, 35.4)**. It is still unconfirmed whether warlocks skip the 100g.
   - Dual spec: unlocks at 40, cost unknown.
10. **Coordinates gotcha for Redridge and Stormwind City.** Wowhead's Forever DB lists **two coordinate sets** for Classic NPCs in these two zones:
    - **Redridge:** one set matches Classic and the other is about **5 points lower in x**. New Forever NPCs such as Marcy Baker appear only in the lower set.
    - **Stormwind:** the Classic map plus a harbor-style map (Dungar Longdrink is at 66.2, 62.4 *and* 71.2, 72.4).

    Forever probably uses re-cut maps for both zones. Verify any Redridge or Stormwind coordinate in game before publishing it. `official DB, interpretation = theory`
11. **Grouping at launch.** Joining a party **doesn't move you to the party's layer automatically**. Click the arrow at the top-left of the chat frame. Party kill XP is worked out from each member's own level, and nobody gets XP if one member is far above the mob's level. `official/launch`
12. **New dungeons, official ranges and entrances:**

    | Dungeon | Levels | Entrance |
    |---|---|---|
    | Hall of Thanes | 13–18 | Beneath Ironforge |
    | Excavation Site | 24–29 | Wetlands, near Thelgen Rock / above Whelgar's Excavation |
    | City of Dalaran | 28–33 | Alterac sewers. Alliance attunement starts with "An Alarming Request" in Southshore and leads to the Image of Archmage Modera at Silverpine 68.4, 45.2 |
    | The Drowned City | 35–40 | Underwater, west of Grom'gol |
    | Krol'dok Stronghold | 40–45 | Riverglades |
    | Alcaz Prison | 48–53 | Alcaz Island, Dustwallow Marsh |
    | Blackmaw Hold | 55–60 | Behind a sealed gate in Azshara |
    | Shaper's Terrace | 58–60 | Northern hills of Un'Goro Crater |

    `official`: https://worldofwarcraft.blizzard.com/en-us/news/24301455

---

## 1. Launch-week official notes and hotfixes (Nov 2–5)

### 1.1 Final dev notes, posted Nov 2 PST (Nov 3 03:20 UTC) and edited Nov 4
Source: Kaivax, https://us.forums.blizzard.com/en/wow/t/2360696/9 (thread retitled "Updated November 2"; EU mirror https://eu.forums.blizzard.com/en/wow/t/631316/9). Post #10 (Nov 4 19:35 UTC) only added UI items. All items below are `official, launch`.

**Leveling and tuning:**
- Blizzard raised class damage across the board and "increased the health of higher level creatures to compensate". Do not assume Classic or beta kill speeds above 30.
- They plan no big tuning changes before raids open (Dec 9) "with the exception of bugs and serious outliers". A **large tuning pass** will follow "once we have sufficient data from players leveling past 30".
- Some talents no longer have a reduced proc chance when you cast low spell ranks (Blizzard still does).
- **Learning a spell no longer puts it on your action bars automatically.** Drag new spells from the spellbook after each training visit.

**Training costs:**
- "Training costs have been adjusted for all classes." Most abilities learned at the same level cost the same.
- "Total cost to train class abilities from 1-60 is now between 206 and 207 gold for all classes." "Warlocks costs are reduced by the expected costs of buying Grimoires for their pets."
- Route implication: a warlock's gold plan is about 206g of spells, plus grimoires, plus 100g riding at 40 (see §4).

**Warlock:**
- Spellstones now raise only Shadow damage.
- **Pets now gain 2 Health per point of the master's Stamina (was 7.5).**
- Bane of Agony now updates its damage dynamically.
- **Drain Soul's chance to grant a shard on damage (not on a kill) was "reduced significantly".**
- Amplify Curse now affects Curse of Exhaustion and Bane of Agony.
- Improved Drains no longer boosts Wrack.
- Wrack's coefficient was doubled (base damage per second at 60 goes from 36 to 86).
- Shadow and Flame now gives 4–20% (was 2–10%).

**Launch reaction (`community, launch`):**
- Threads on Nov 5 say the Voidwalker "has less hp than the warlock when you get it" and that Demonology "seems unplayable for leveling with the pets current state". https://us.forums.blizzard.com/en/wow/t/2401991 (64 replies)
- Also https://us.forums.blizzard.com/en/wow/t/2402430 and https://us.forums.blizzard.com/en/wow/t/2399417. **None has a blue reply** (checked every post on 2026-11-05).
- Route implication: don't count on Voidwalker tanking in the 10–20s, and plan Fear/drain kiting instead (theory).

**Items:** bags no longer auto-equip into empty bag slots, so equip them by hand.

**Quests and World:**
- "Adjusted respawn rates for many different areas in the world." Respawns are fastest in starting zones and get slower as you level. "Once the initial launch surge of low-level characters has settled down, we will adjust the lower-level zones down to more typical rates." Launch-week kill-quest times will be **better than normal**, so route times measured now may not hold later.
- "Adjusted experience values on various quests." Not itemised; the only named one is below. Players asked which quests changed and got no answer: https://us.forums.blizzard.com/en/wow/t/2399422
- "Adjusted pre-requisites and level settings on some quests to improve flow across the world." Not itemised.
- Destroying a quest item now abandons the quest, and abandoning the quest removes the item.
- Satyrs that were classed as humanoid are now demons.
- Darkshore: **"Holy Diver" now gives an XP reward.**
- Wetlands: "Carnage" no longer resets near the end, and Alba Fairmoon stays available for the "Destruction in Deadmines" turn-in.
- Ruins of Lordaeron: all its quests now need level 15.
- Alterac: Dalaran Summoners no longer chain-summon.
- Barrens: "Counterattack!" can be started by talking to Rethgar Deathgate (Horde).

**Flight paths:** you can end a flight early. The note adds gamepad support for it ("Players will dismount at the next available flight point").

**UI (post #10):** nameplates now show elite status again. Useful for spotting elite quest mobs.

### 1.2 Day-1 hotfixes and blue posts (Nov 4–5)

| Date (UTC) | What | Tag | Source |
|---|---|---|---|
| Nov 4 23:00 | Launch 3:00 p.m. PST. Queues were about 5–10 min and servers "very stable" (Wowhead live blog). | official / community | https://us.forums.blizzard.com/en/wow/t/2400905 ; https://www.wowhead.com/news=383749/world-of-warcraft-forever-is-now-live |
| Nov 5 00:00–06:00 | Boats and zeppelins missing on some layers ("bells ring, no boat"). Reported on RP-PvP and other rulesets: Zephras→Dalaran, Auberdine/SW, Valanaar, Tirisfal zeppelin. Workarounds: change layer or relog (mixed results). | community, launch | https://us.forums.blizzard.com/en/wow/t/2401431 ; https://us.forums.blizzard.com/en/wow/t/2401437 ; https://us.forums.blizzard.com/en/wow/t/2401402 |
| Nov 5 06:39 | **Aggrend:** transports are "becoming lost in the maelstrom". Temporary **portals were spawned near most transport docks or inside zeppelin towers**. "A proper fix going out in the morning"; the portals are removed after it is verified. | official, launch | https://us.forums.blizzard.com/en/wow/t/2401777/15 ; https://www.wowhead.com/news=383758/temporary-portals-replace-boats-and-zeppelins-due-to-bugs |
| Nov 5 06:35 | **Aggrend:** some areas feel underpopulated, so "tweaking some numbers tomorrow". More players per layer means more competition for mob tags. | official, launch | https://www.wowhead.com/news=383757/blizzard-aware-of-population-issues-in-certain-areas ; https://us.forums.blizzard.com/en/wow/t/2402261 (Aggrend tweet relayed) |
| Nov 5 02:43 | Hotfix: Invite-a-Friend players could not level past 10, group, trade or join guilds. Fixed; relog. | official, launch | https://us.forums.blizzard.com/en/wow/t/2401646 |
| Nov 5 ~15:00–16:00 | About 1 h day-2 maintenance (transport fix, population numbers). | community (banner reports), launch | https://us.forums.blizzard.com/en/wow/t/2402244 ; https://us.forums.blizzard.com/en/wow/t/2402372 |
| Nov 5 15:42 | **Official known issues**: RFK cauldron trap near Roogug; **PvP vendors unavailable in Orgrimmar, Stormwind and Dalaran**; **"Vorsha the Lasher" (Ashenvale) disabled** (a Horde escort, so not on our route); bank tab layout; Stormwind Keep entrance textures. Nothing XP-related. | official, launch | https://us.forums.blizzard.com/en/wow/t/2402363 ; https://www.wowhead.com/news=383760/wo-w-forever-known-issues |
| Nov 5 | **Grouping:** joining a group does **not** auto-phase you. Click the arrow at the top-left of the chat window (Kaivax confirmed the blue prompt). | official/launch | https://www.wowhead.com/news=383761/how-to-phase-to-see-group-members-after-joining-new-group ; https://us.forums.blizzard.com/en/wow/t/2402367/2 |
| Nov 4 | Camping tutorial **"The Great Outdoors"**: the "sit near the campfire" objective doesn't fire on a single /sit. Type **/sit twice**, then wait a minute for **Boosted Rest** (a small rested-XP buff). | community, launch | https://www.wowhead.com/news=383753/the-great-outdoors-quest-bugged-and-how-to-complete |
| Nov 4 | Twitch drop **Pouch of Violet Dust** (watch 4 h, Nov 4–12). It turns a campfire purple and adds **+1 h to all camp benefits (2 h total) for everyone resting there**. Removed from collections in early December. | official (Blizzard text quoted), launch | https://www.wowhead.com/news=383751/obtain-the-pouch-of-violet-dust-toy-increases-camp-benefits-by-1-hour |
| pre-launch | The repeatable Elwynn quest "Applejack Still" (100 XP per 4 apples, endlessly) was **fixed before launch**. It was never on a gnome route. | community | https://www.wowhead.com/forever/news/repeatable-quest-experience-exploit-fixed-for-wow-forever-launch-383574 ; https://us.forums.blizzard.com/en/wow/t/2386116 |
| Nov 3 | **CN region only**: real-money bundles with 10/12-slot bags and a tent that raises rested XP "four times as fast". Not in NA/EU; Blizzard says there are no boosts or token in Forever. | community | https://www.wowhead.com/news=383692/bonus-experience-and-extra-bags-for-purchase-on-cn-wow-forever-servers |

There were no other launch hotfix posts touching quests or XP as of Nov 5 ~17:30 UTC. Checked: the forum search for staff posts after Oct 29 (Aggrend, Kaivax, Linxy, Vrakthris) and the Wowhead Forever news RSS (https://www.wowhead.com/news/rss/forever).

### 1.3 Earlier dev-note items that still matter for the Alliance route (beta builds, official)
These are not in the existing research files (or only partly):
- **Desolace, Oct 8:** "The new quests for the Gelkis and the Magram beginning with 'Valley of Bones' now require a minimum level of 35 (was 30)." This is the chain that leads into Shen'dralas. https://us.forums.blizzard.com/en/wow/t/2360696/5
- **Oct 8:**
  - Hillsbrad "Elixir of Pain": the XP that Stanley used to give now comes from the quest.
  - Excavation Site: the Titan Relic is returned for the follow-ups "Earthen Echo" / "Prehistoric Prism".
  - Loch Modan: fewer Dark Iron Ambushers at Miran's camp ("Resupplying the Excavation").
  - Redridge "Blackrock Blockade": faster respawns.
  - Stonetalon: Jin'Zil turn-ins fixed.

  https://us.forums.blizzard.com/en/wow/t/2360696/5
- **Oct 1:**
  - Dun Morogh: Shimmer Ridge trolls respawn faster.
  - Loch Modan: troggs for "In Defense of the King's Lands" respawn slightly **slower**.
  - Redridge "Blackrock Blockade" was reworked.
  - Westfall: the pocket watch for "The Forgotten Heirloom" respawns much more slowly, while the undead ("Collecting Memories") and Foreman Thistlenettle ("Oh Brother…") respawn faster.

  https://us.forums.blizzard.com/en/wow/t/2360696/4
- **Oct 16:**
  - Stormwind: **"The Attack!" is no longer an escort quest and is shareable**. Talk to Tyrion to start it (end of the Defias chain).
  - Darkshore: "How Big a Threat?" camps now give credit, "For Love Eternal" can be turned in any time, and the "Body and Heart" moondust isn't consumed.
  - Ashenvale: more Bloodtooth Guards for "Raene's Cleansing".
  - Wetlands: respawns raised for Dragonmaw, gnolls and Incendicite Ore.

  https://us.forums.blizzard.com/en/wow/t/2360696/6

---

## 2. XP rules (what decides which quests and mobs are worth it)

### 2.1 XP curve
- XP needed per level is **unchanged from Classic**: 400 for level 1→2, 7,600 at 10, 23,200 at 20, 47,400 at 30, 90,700 at 40, 147,500 at 50, 209,800 for 59→60; **4,084,700 total**. `beta-tested (datamined + guides); Classic` https://www.warcrafttavern.com/forever/guides/experience/ ; retracted "26% less" report: https://us.forums.blizzard.com/en/wow/t/2357330
- Blizzard's own stat (via Icy Veins): Forever players took **20.5 h /played to reach 20 vs 20.4 h in Classic**. Expect overall pace about equal to Classic to 20. `community (Icy Veins, from search snippet; page blocks fetches)` https://www.icy-veins.com/wow-forever/news/blizzard-reveals-an-interesting-stat-about-wow-forevers-average-leveling-speed/

### 2.2 Quest XP by level difference (grey-quest cut-offs)
- Forever guides only give the colour bands:
  - grey = 5+ levels below you
  - green = 3–4 below
  - yellow = within 2 either way
  - orange = 3–4 above
  - red = 5+ above

  They also say quests more than 5 levels below you lose 10–20% per extra level. `community` https://www.warcrafttavern.com/forever/guides/experience/
- Exact Classic rule, assumed unchanged (`theory, Classic`):

  | Your level vs quest level | Quest XP |
  |---|---|
  | up to +5 | 100% |
  | +6 | 80% |
  | +7 | 60% |
  | +8 | 40% |
  | +9 | 20% |
  | +10 or more | 10% |

  Rounded to 5. For quests below level 10, full XP may only last to +4. https://warcraft.wiki.gg/wiki/Experience_point
- Route rule (theory): a quest up to 5 levels below you still pays 100%. At 6 below it pays 80% and drops 20 points per level after that, so "grey" quests are still worth turning in when they are already done or very close.
- Quest XP is **not split in a group** (each member gets the full turn-in). `community` https://www.warcrafttavern.com/forever/guides/experience/
- Forever adds **follow-up quests to many chains**, "up to a third more quests than vanilla". This is the out-levelling problem behind the brief's "skip a lot" strategy. `community` https://www.method.gg/wow-forever/leveling-as-a-party-in-wow-forever-whats-changed-and-what-you-need-to-know (Nov 1)

### 2.3 Dungeon and elite quests
- Oct 1: "Dungeon quests now reward 50% less extra experience beyond normal quest values." `official, beta` https://us.forums.blizzard.com/en/wow/t/2360696/4
- Size of the remaining bonus (`beta-tested`):
  - Players worked out that the original +200% bonus became **+100%**, so a dungeon quest pays about 2× its Classic value. https://us.forums.blizzard.com/en/wow/t/2369002/102 ; "a full quest log of completed RFC quests is double (2x) the XP that it is on Classic Era at level 16", https://us.forums.blizzard.com/en/wow/t/2369675/28
  - Method's beta examples: Deviate Hides 1,600 → **3,100 XP**; all Deadmines quests 8,300 → **18,450**; all City of Dalaran quests **15,800** per faction. Testers saw "**close to two levels**" from a single Hall of Thanes or Ruins of Lordaeron run with every quest in the log. https://www.method.gg/wow-forever/wow-forever-dungeon-xp-explained-and-all-dungeons-by-level (Nov 4)
- Alliance has few quests in SFK, SM, WC, RFK and RFD (an Alliance player's count; for example SFK has 3 quests, all Horde). Those dungeons are poor value for a gnome. `community, beta` https://us.forums.blizzard.com/en/wow/t/2373245
- Elite and escort quest XP: no Forever-specific change found. Classic values are assumed (`theory`). Escort quests no longer fail to start at 25+ quests in the log (Oct 1). "The Attack!" is no longer an escort (Oct 16). `official, beta`

### 2.4 Kill XP
- Classic base formula (same-level mob ≈ 45 + 5 × mob level in Azeroth, elites about 2×, grey mobs 0) is assumed. `theory, Classic` https://warcraft.wiki.gg/wiki/Experience_point
- **Forever: green (lower-level) open-world mobs give 4–20% less XP per kill than Classic.** Senior designer Aidan "Zirene" Moon said this was **intentional** when players reported it as a bug. `community (Icy Veins; page blocks fetches, text from search snippets), beta` https://www.icy-veins.com/wow-forever/news/nerfed-experience-gains-from-low-level-mobs-in-wow-forever/
  - Route implication (theory): grind on yellow or orange mobs, not green ones. Grinding while over-levelled pays even less than in Classic.
- **Dungeon mob XP is about 70–76% below Classic.** It was first cut by about 80%, then raised about 20% on Oct 8. `official (direction) / beta-tested (size)` https://us.forums.blizzard.com/en/wow/t/2360696/5 ; https://www.method.gg/wow-forever/wow-forever-dungeon-xp-explained-and-all-dungeons-by-level
- A second run of the same dungeon gave about **6,620 XP/h vs 15,780 XP/h** grinding in the open world. `beta-tested` https://us.forums.blizzard.com/en/wow/t/2383482
- Aggrend: "with perfect xp/hr play, the leveling rates in dungeons will be very close, if not equal to the speed you can level with optimal questing play." `official, beta` https://us.forums.blizzard.com/en/wow/t/2376010/20
- Exploration XP exists (small, Classic). `community` https://www.warcrafttavern.com/forever/guides/experience/

### 2.5 Party XP
- Oct 8: the penalty for killing lower-level enemies in a party now uses **each member's own level** (Classic Era rule). "If a member of the party is at a vastly higher level than the enemy being killed, then no player in the party will receive XP." `official, beta` https://us.forums.blizzard.com/en/wow/t/2360696/5
- Kill XP split: a 5-player group gets solo XP ÷ 5 × 1.4 each (the Classic multiplier). `community/Classic` https://www.warcrafttavern.com/forever/guides/experience/
- **Quest-item loot in groups favours members with fewer of the items**, so a party finishes together. Drops are still not shared. `community, beta` https://www.method.gg/wow-forever/leveling-as-a-party-in-wow-forever-whats-changed-and-what-you-need-to-know
- Tagging is still first-tag; there is no shared tagging. See forums-player-threads.md §1.

### 2.6 Rested XP, food, camping, sleeping bag

**Rested XP:**
- Classic rule: 5% of a level per 8 h in an inn or city, capped at 150% (30 bubbles), and it doubles kill XP only. `community/Classic` https://www.warcrafttavern.com/forever/guides/experience/
- Legacy *Well Rested* adds 4% per rank to the rested rate and cap. It's not available on a fresh account. `community`

**Camp Tent (Leatherworking, skill 20):**
- Adds rested XP worth 5% of a level, and does nothing if you already have more rested than that. `official` https://news.blizzard.com/en-us/article/24301516/gather-around-the-campfire-in-world-of-warcraft-forever (Oct 21)
- Using it applies a 1 h **Boosted Rest** debuff, which blocks re-use. `official, beta` https://us.forums.blizzard.com/en/wow/t/2360696/4

**Camp buffs in general:**
- They need **≥1 minute** of sitting or crafting at the camp. All camp features share a **1 h cooldown**.
- You can buff, cast and craft while waiting, and sitting, chairs, sleeping, lying down or kneeling all count.
- Campfires don't hurt players below level 5. `official` (campfire article; dev notes Sept 24 / Oct 1)
- The starter-zone quest **"The Great Outdoors"** gives a small rested buff (see §1.2).

**Food:** Forever DB tooltips confirm every cooked food: "If you spend at least 10 sec eating … well fed … for 15 min. **Additionally, experience gained from kills is increased by 5%.**" Examples:
- Spiced Wolf Meat and Beer Basted Boar Ribs (level 1)
- Goretusk Liver Pie and Blood Sausage (req 5)
- Lean Wolf Steak and Hot Lion Chops (req 15)
- Barbecued Buzzard Wing (req 25, +10 Int)
- **Nightfin Soup (req 35, +22 spell damage)**

`official (Wowhead Forever DB)` https://www.wowhead.com/forever/item=2680 ; https://www.wowhead.com/forever/item=724 ; https://www.wowhead.com/forever/item=12209 ; https://www.wowhead.com/forever/item=13931 ; https://www.wowhead.com/forever/item=4457. The buff is lost on death (community).

**Cozy Sleeping Bag (item 211527):**
- DB tooltip: "Resting inside for at least one minute will provide a bonus to experience earned, stacking up to 3 times. (1 Hour Cooldown)". The Unroll Bag spell has a **15 s cast**.
- **The tooltip shows item level 40 but no "Requires Level"**, which corrects "required level 40" in blizzard-official.md §5. `official DB` https://www.wowhead.com/forever/item=211527 ; https://www.wowhead.com/forever/spell=429961
- Guides say +1% XP per stack (3% max). It works outside rested areas only, counts as a rested area while you're on it, any party member can use it, and it vanishes if you move about 100 yd away. `community` https://www.warcrafttavern.com/forever/guides/cozy-sleeping-bag/

**Sleeping bag chain:**

| Step | Quest | Where |
|---|---|---|
| 1 | "…and that note you found" (79008) | Nailed Plank, Westfall 37, 50 |
| 2 | Stepping Stones (79192) | Burned-Out Remains, Barrens 46, 74 |
| 3 | Scramble (79980) | Stonetalon, near Sun Rock; quest level 24 |
| 4 | Wet Job (79974) | |
| 5 | Eagle's Fist (79975) | Loch Modan dam, 49, 12 |
| 6 | **This Must Be The Place (79976)** | Thoradin's Wall, Hillsbrad; **quest level 32 in Forever** |

The chain needs level 14 to start. All quest IDs were verified with wh.mjs. `official DB + community` https://www.wowhead.com/forever/quest=79976/this-must-be-the-place

**Student Fodder (216619)** in Forever **gives no rested XP**. It was 4 rested bubbles in SoD; the Forever tooltip only says "make up for lost time on the trail! (5 Min Cooldown)". `official DB + community` https://www.wowhead.com/forever/item=216619 ; https://www.wowhead.com/forever/news/student-fodder-doesnt-give-rested-experience-in-wow-forever-383243

---

## 3. Quest log, hearthstone, tagging, layering

| Item | Value | Tag | Source |
|---|---|---|---|
| Quest log size | **40** (Classic was 20). Escort pop-ups wrongly refused at 25+ until fixed Oct 1. | beta-tested, beta | https://us.forums.blizzard.com/en/wow/t/2356019 ; https://us.forums.blizzard.com/en/wow/t/2363783 ; https://us.forums.blizzard.com/en/wow/t/2354797 ; fix: https://us.forums.blizzard.com/en/wow/t/2360696/4 |
| Hearthstone | **10 s cast, 1 h cooldown**. Bind at any innkeeper. | official (DB), launch data | https://www.wowhead.com/forever/spell=8690 ; https://www.wowhead.com/forever/item=6948 |
| Ending a flight early | Supported; you dismount at the next flight point. | official, launch | https://us.forums.blizzard.com/en/wow/t/2360696/9 |
| Group layer | Manual phase click after joining a group. | official/launch | §1.2 |
| Respawns | Raised for launch, highest in starting zones. | official, launch | §1.1 |

---

## 4. Mount, riding, dual spec, trainer costs

- **Riding at 40:**
  - Apprentice Riding costs **100 g** and the first racial mount is included. Extra colours cost 20 g. Speed **+60%**.
  - Journeyman (60): **1,000 g**, +100%; epic mounts 200 g.
  - Honored with your home faction gives 10% off riding and mounts.
  - `community (trainer UI seen in beta; level 40 itself untestable at the 30 cap), beta`: https://us.forums.blizzard.com/en/wow/t/2370227 (Oct 2, "Training for the 60% mount shows as 100g") ; https://www.method.gg/wow-forever/how-to-get-a-mount-in-wow-forever-cost-requirement-and-mount-options (Oct 21) ; https://www.warcrafttavern.com/forever/guides/riding/
  - Blizzard only says that the mount cost moved into riding training. `official` https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
- **Gnome riding:** Binjy Featherwhistle (riding) and Milli Featherwhistle (mechanostriders), **Steelgrill's Depot, Dun Morogh 49.2, 48.0**. `official DB` https://www.wowhead.com/forever/npc=7954 ; https://www.wowhead.com/forever/npc=7955
- **Felsteed:**
  - The quest "Summon Felsteed" (4490 and its variants 4487–4489) is given by **Strahad Farsan, Ratchet, Barrens 62.4, 35.4**. `official DB` https://www.wowhead.com/forever/quest=4490 ; https://www.wowhead.com/forever/npc=6251
  - The spell needs level 40 and costs 100 mana. The DB lists **no "learn riding" effect and no riding requirement**. `official DB` https://www.wowhead.com/forever/spell=5784
  - **Whether a warlock still pays the 100 g Apprentice Riding is unconfirmed.** Guides say the class quest "covers" riding, players disagree, and there's no blue post. `community / unknown` https://www.warcrafttavern.com/forever/guides/riding/ ; https://us.forums.blizzard.com/en/wow/t/2400779
  - Route advice (theory): arrive at Ratchet with 100 g spare.
- **Getting to Ratchet at 40 (Alliance):**
  - The Booty Bay → Ratchet boat (Classic).
  - Or fly to **Ratchet** from **Theramore** or **Talrendis Point**. Both are Alliance routes to Ratchet in the launch client. `community (launch-client datamine)` https://foreverdb.net/travel
- **Dual spec:** level 40 (official, class deep dives). **Cost not data-mined or announced** as of Nov 4; players guess 50–100 g. `community` https://us.forums.blizzard.com/en/wow/t/2400343
- **Trainer costs:** 206–207 g total from 1–60 for every class; warlock is reduced to allow for grimoires (§1.1, official launch). There is no official per-level table yet. The "What's Training? (Forever)" addon lists trainer prices, but its own known-issues list says grimoires are missing. `community` https://www.curseforge.com/wow/addons/whats-training-forever

---

## 5. ALLIANCE TRAVEL NETWORK (launch)

### 5.1 Ships and tram, with Alliance-usable routes marked
Primary list: launch client (build 1.60.1.70790, extracted 2026-11-05), https://foreverdb.net/travel (`community, launch-client datamine`). The new routes are also confirmed by Blizzard's Found Photos recap, https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap (`official`).

| Route | Type | Status | Notes / evidence |
|---|---|---|---|
| **Stormwind Harbor ↔ Auberdine** | Ship, Alliance | **NEW (official)** | Boards at "the **southern-most dock** in Stormwind Harbor" (quest text of "Business in Auberdine", 97894, from Borgus Steelhand → Gorbold Steelhand, Auberdine 38.0, 41.2). https://www.wowhead.com/forever/quest=97894 ; https://www.wowhead.com/forever/npc=6301. No dock coordinates published. The Stormwind map is likely the harbor version (§5.5). |
| **Menethil → Southshore → Auberdine → Menethil** | Ship, Alliance, **one-way loop** | **NEW (official)** | Blizzard only says "a second ship network" linking the three. The one-way triangle order comes from community maps and the launch-client route name "Menethil Harbor to Southshore to Auberdine". `community` https://classicwowforever.com/boats-and-zeppelins/ ; https://www.method.gg/wow-forever/all-travel-routes-in-wow-forever-boats-zeppelins. LepreStore warns that the order isn't confirmed by Blizzard, so **check the boat's destination before boarding**: https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-travel-guide/. Implication (theory): **Menethil → Southshore is direct**; Southshore → Menethil goes via Auberdine, so fly Southshore → Menethil instead (a direct flight exists). |
| Menethil ↔ Auberdine | Ship, Alliance | Classic, **still exists** | Launch client lists it separately ("Serenity's Shore"). A player confirms "That's a new, separate boat. The one that goes to Menethil Harbor still exists": https://us.forums.blizzard.com/en/wow/t/2399089/10 |
| Menethil ↔ Theramore | Ship, Alliance | Classic | Launch client. For Dustwallow / Alcaz Prison. |
| Auberdine ↔ Rut'theran Village | Ship, Alliance | Classic | Launch client. |
| Feathermoon Stronghold ↔ Feralas coast | Ferry, Alliance | Classic | Launch client. |
| **Deeprun Tram**: Ironforge (Tinker Town) ↔ Stormwind (Dwarven District) | Tram | Classic | Launch client; "does not go to any third city" (LepreStore). |
| Ratchet ↔ Booty Bay | Ship, neutral | Classic | Launch client. Use it for the Felsteed. |
| **Steamwheedle Port (Tanaris) ↔ Powderfuse Port (Riverglades)** | Ship, neutral | **NEW (official)** | Steamwheedle Port is on the Tanaris coast, **not** at Gadgetzan. Beta players used it at level 20: https://us.forums.blizzard.com/en/wow/t/2360091 |
| Alterac (Dalaran) ↔ Zephras Isle (Valanaar) | Skycutter | NEW | Skyborne start route. Not useful to a gnome. Skyborne Alliance continue via a Skyborne-only portal to Stormwind (Method). |
| Horde: Orgrimmar ↔ Undercity, Orgrimmar ↔ Grom'gol, Undercity ↔ Grom'gol, Thunder Bluff ↔ Zephras | Zeppelins | — | Not for Alliance. |

**Times:** no official boat schedules or crossing times. The only player claim is "zero boats take more than 5 minutes" (beta, https://us.forums.blizzard.com/en/wow/t/2386728). Plan about 5–10 min per boat leg including the wait. `theory`

### 5.2 Flight paths (Alliance), launch client
Source: https://foreverdb.net/travel (launch build 1.60.1.70790, Nov 5) unless noted. `community (launch-client datamine)`. Flight-master NPCs and coordinates were checked with the Wowhead Forever tooltip API. `official DB`

**Eastern Kingdoms:**

| Node (NPC, coords) | Connects to |
|---|---|
| Ironforge (Gryth Thurden, 55.5, 47.7) | Aerie Peak, Chillwind Camp, Light's Hope, Menethil, Refuge Pointe, Southshore, Stormwind, Thelsamar, Thorium Point |
| Stormwind (Dungar Longdrink; see §5.5 for coordinates) | Booty Bay, Darkshire, Ironforge, Lakeshire, Morgan's Vigil, Nethergarde Keep, Sentinel Hill |
| Thelsamar (Thorgrum Borrelson, Loch Modan 33.8, 50.6) | **Farholde Keep**, Ironforge, Menethil, Refuge Pointe |
| Lakeshire (Ariena Stormfeather, Redridge; see §5.5) | Darkshire, **Farholde Keep**, Morgan's Vigil, Sentinel Hill, Stormwind |
| Sentinel Hill (Thor, Westfall 56.5, 52.5) | Booty Bay, Darkshire, Lakeshire, Stormwind |
| Darkshire (Felicia Maline, Duskwood 77.5, 44.4) | Booty Bay, Lakeshire, Nethergarde, Sentinel Hill, Stormwind |
| Menethil (Shellei Brondir, Wetlands 9.5, 59.5) | Ironforge, Refuge Pointe, Southshore, Thelsamar |
| Southshore (Darla Harris, Hillsbrad 49.4, 52.4) | Aerie Peak, Chillwind, Ironforge, Menethil, Refuge Pointe |
| Refuge Pointe (Cedrik Prose, Arathi 45.6, 46.0) | Aerie Peak, Ironforge, Menethil, Southshore, Thelsamar |
| Aerie Peak (Guthrum Thunderfist, Hinterlands 11.0, 46.0) | Chillwind, Ironforge, Light's Hope, Refuge Pointe, Southshore |
| Booty Bay (Gyll, STV 27.5, 77.7) | Darkshire, Sentinel Hill, Stormwind |
| Morgan's Vigil (Borgus Stoutarm, Burning Steppes 84.4, 68.2) | **Farholde Keep**, Lakeshire, Nethergarde, Stormwind, Thorium Point |
| Thorium Point (Lanie Reed, Searing Gorge 37.8, 30.5) | Ironforge, Morgan's Vigil |
| Nethergarde Keep (Alexandra Constantine, Blasted Lands 65.5, 24.4) | Darkshire, Morgan's Vigil, Stormwind |
| Chillwind Camp (Bibilfaz Featherwhistle, WPL 42.8, 85.0) | Aerie Peak, Ironforge, Light's Hope, Southshore |
| Light's Hope (Khaelyn Steelwing, EPL 81.5, 59.2) | Aerie Peak, Chillwind, Ironforge |
| **Farholde Keep — NEW** (Gretchen Mayberry, Riverglades **60.6, 81.4**) | **Lakeshire, Morgan's Vigil, Thelsamar** |
| **Powderfuse Port — NEW** | **no routes in the launch client** |
| **Tidegear Coast (Dun Morogh) — NEW, unexplained** | no routes; no NPC found |

Notes on these nodes:
- **Farholde Keep:** the beta build (70009) also had a Powderfuse link (https://wowforever.be/news/five-new-flight-points-bring-eleven-new-routes/, Sept 28). The NPC is in the DB: https://www.wowhead.com/forever/npc=257087
- **Powderfuse Port:** beta players: "Powderfuse Port in Riverglades Has No Flight Path", https://us.forums.blizzard.com/en/wow/t/2353281 (Sept 18). LepreStore: "marked hidden in later October beta records". **Treat it as not usable.**
- **Tidegear Coast:** no web source mentions it. It is probably an unused or hidden node. Don't route on it (`theory`).

**Kalimdor:**

| Node (NPC, coords) | Connects to |
|---|---|
| Auberdine (Caylais Moonfeather, Darkshore 36.4, 45.5) | Astranaar, Feathermoon, Moonglade, Nijel's Point, Rut'theran, Stonetalon Peak, Talonbranch Glade, Talrendis Point, Theramore |
| Astranaar (Daelyshia, Ashenvale 34.4, 48.0) | Auberdine, Stonetalon Peak, Talrendis Point |
| Stonetalon Peak (Teloren 36.5, 7.2) | Astranaar, Auberdine, Nijel's Point |
| Nijel's Point (Baritanas Skyriver, Desolace 64.6, 10.5) | Auberdine, Feathermoon, Stonetalon Peak, Theramore |
| Theramore (Baldruc, Dustwallow 67.5, 51.3) | Auberdine, Gadgetzan, Nijel's Point, **Ratchet**, Talrendis Point, Thalanaar |
| Gadgetzan (Bera Stonehammer, Tanaris 51.0, 29.2) | Cenarion Hold, Marshal's Refuge, Thalanaar, Theramore |
| Feathermoon (Fyldren Moonfeather, Feralas 30.2, 43.2) | Auberdine, Cenarion Hold, Nijel's Point, Thalanaar |
| Thalanaar (Thyssiana, Feralas 89.5, 45.8) | Feathermoon, Gadgetzan, Theramore |
| Talrendis Point (Jarrodenus, **Azshara** 11.8, 77.5) | Astranaar, Auberdine, Everlook, Ratchet, Talonbranch Glade, Theramore |
| Ratchet (Bragok, Barrens 63.0, 37.2, neutral) | Alliance side: Talrendis Point, Theramore |
| Marshal's Refuge (Gryfe, Un'Goro 45.2, 5.8, neutral) | Cenarion Hold, Gadgetzan |
| Cenarion Hold (Cloud Skydancer, Silithus 50.6, 34.5) | Feathermoon, Gadgetzan, Marshal's Refuge |
| Talonbranch Glade (Mishellena, Felwood 62.5, 24.1) | Auberdine, Everlook, Moonglade, Talrendis Point |
| Everlook (Maethrya, Winterspring 62.2, 36.5) | Moonglade, Talonbranch, Talrendis Point, **Tainted Foothills** |
| Rut'theran Village (Vesprystus, Teldrassil 58.4, 94.0) | Auberdine |
| **Tainted Foothills — NEW** (Bluebell, Mount Hyjal 55.0, 82.8, both factions) | **Everlook, Summit of Eternity** |
| **Summit of Eternity — NEW** (Fayran Elthas, Hyjal 68.6, 44.0, both factions) | Tainted Foothills |

- foreverdb labels Talrendis Point as Ashenvale and Talonbranch Glade as Mount Hyjal, but the Wowhead DB puts the NPCs in Azshara and Felwood.
- NPC sources: https://www.wowhead.com/forever/npc=260626 ; https://www.wowhead.com/forever/npc=41861
- Senseos (updated Nov 5, read from the launch client on Nov 4) agrees: Farholde links to Lakeshire, Morgan's Vigil and Thelsamar, Hyjal is Everlook → Tainted Foothills → Summit, and **Shen'dralas has no flight point**. https://senseos.gg/guides/wow-forever/flight-paths-and-travel/
- **Measured flight times** (ForeverDB addon players, launch): Stormwind→Lakeshire 1:53, Stormwind→Darkshire 1:56, Lakeshire↔Darkshire 1:00–1:01, Ironforge→Menethil 2:09, Southshore→Ironforge 3:26, Auberdine→Rut'theran 1:24. `community, launch` https://foreverdb.net/travel
- Legacy *Frequent Flier* (−50% cost, +20% speed) doesn't affect boats. It's not available on a fresh account. `community` LepreStore.

### 5.3 How to reach the new zones

**Riverglades** (Wowhead DB zone 16591 "Level 36-44, Contested" `official DB`)
- Blizzard: "mid-30s to mid-40s", **150+ new quests** (What's Next / Now Live), or "nearly 200 quests" (Found Photos). It is roughly the size of STV and borders Burning Steppes, Redridge, Swamp of Sorrows and Badlands. `official` http://worldofwarcraft.blizzard.com/en-us/news/24303862 ; https://worldofwarcraft.blizzard.com/en-us/news/24315820 ; https://news.blizzard.com/en-us/article/24304071/world-of-warcraft-forever-found-photos-panel-recap
- **Alliance land entry from Redridge:** "the road that normally leads to the Burning Steppes from the Redridge Mountains now splits into two, allowing passage to the Riverglades to the east". It's a signposted fork. `community, beta` https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-riverglades-guide/ ; https://gamewave.fr/world-of-warcraft-forever/wow-forever-comment-se-rendre-dans-la-zone-des-rives-claires-riverglades/
- The wiki table also lists foot routes from Redridge via Blackrock Pass or Redridge Pass, from the Badlands (north of Twilight's Shroud), from NE Swamp of Sorrows, and from Burning Steppes. `community` https://warcraft.wiki.gg/wiki/Riverglades
- No published coordinates for the fork. Farholde Keep (Alliance hub, southern Riverglades) has an inn, mailbox, stable, anvil/forge and food/fruit vendors, but **no bank or AH**. `community` https://warcraft.wiki.gg/wiki/Farholde_Keep
- Hubs: Farholde Keep (Alliance), Powderfuse Port (neutral, east coast; innkeeper Zizplink, Black Market AH and rare-materials vendor per beta players), Rog'mar and Bolder'ok (Horde). Minor: Sunnyglade, Wheeler's Grange, Windstead, Twilight's Shroud. Reputation: **Brotherhood of the Horse**. `community` https://warcraft.wiki.gg/wiki/Riverglades ; https://warcraft.wiki.gg/wiki/Powderfuse_Port
- **Fastest Alliance entry (theory):** fly to Lakeshire, run east along the Burning Steppes road, take the east fork, and grab Farholde Keep's flight path. After that, Farholde ↔ Thelsamar, Lakeshire or Morgan's Vigil are one-hop flights.
- **Exit to Kalimdor:** Powderfuse Port boat → Steamwheedle Port → run to Gadgetzan's flight path (Tanaris 51.0, 29.2).
- Group Finder reportedly shows 33–54 for the zone. `community` LepreStore.

**Shen'dralas** (Wowhead DB zone 16651, contested, **no level in DB**)
- Blizzard: "a long-hidden mystery between Mulgore and Desolace", tied to the Shen'dralar, Eldre'Thalas/Dire Maul and the centaurs. The Found Photos recap puts it "south of Desolace, past the Valley of Bones". `official`
- **Entry:** walk south from Desolace through the **Valley of Bones**. **No flight point.** The nearest Alliance flight path is **Nijel's Point** (Desolace 64.6, 10.5).
- **The questline into it** is the Magram/Gelkis chain:

  | Quest | Level |
  |---|---|
  | Valley of Bones (92841) | ~40 |
  | Mountain of Bones (92844) | 42 |
  | Proof of Concept (92873) | 41 |
  | Corrupting Tears (92847) | 42 |
  | Return to Orgrul (93188) | 43 |

  - **Minimum level 35** (official, Oct 8: https://us.forums.blizzard.com/en/wow/t/2360696/5).
  - **Honored with Magram Clan Centaur** per Wowhead: https://www.wowhead.com/forever/quest=92841/valley-of-bones
  - The chain before it is Brutal Politics → Magram Alliance / Assault on the Kolkar → Broken Tears → A Conqueror's Crown → Valley of Bones…
- Level guesses range from "40–45" to "45–53" (no source cited). https://exputer.com/?p=445380 ; https://www.gfinityesports.com/article/world-of-warcraft-forever-new-zones-travel-routes-guide
- **Route implication (theory):** the reputation gate plus no flight path makes Shen'dralas a poor XP/hour detour for a speed route. List it as a deliberate skip unless launch players report a non-reputation entry chain.

**Mount Hyjal** (Wowhead DB zone 616, no level; both flight masters are level 60)
- Blizzard: "explore the aftermath of Archimonde's defeat … and Darkwhisper Gorge". The raids Hyjal Summit (20) and Barrow Deeps (10) open Dec 9. `official`
- **Entry:** Winterspring → Darkwhisper Gorge on foot (wiki: "By foot, east into Darkwhisper Gorge"). Then Everlook → **Tainted Foothills** → **Summit of Eternity** by flight, once discovered. https://warcraft.wiki.gg/wiki/Mount_Hyjal_(Forever)
- Level 60 content, outside our 1–60 route.

**Zephras Isle** (zone 16593, 1–12): Skyborne-only start. Not relevant to a gnome.

### 5.4 Final level ranges (Wowhead Forever DB zone tooltips, `official DB`)
These ranges come from the DB (min–max of NPC levels), so some include outliers. Fetched 2026-11-05 via https://nether.wowhead.com/forever/tooltip/zone/ID.

| Zone | DB range | Zone | DB range |
|---|---|---|---|
| Dun Morogh | 1–56 (outlier; play 1–12) | Elwynn | 1–10 |
| Loch Modan | 10–18 | Westfall | 9–18 |
| Darkshore | 11–19 | Redridge | 15–25 |
| Stonetalon | 15–25 | Ashenvale | 19–30 |
| Duskwood | 10–30 | Wetlands | 20–30 |
| Hillsbrad | 20–31 | Alterac | 27–39 |
| Arathi | 30–40 | Desolace | 30–39 |
| STV | 30–50 | Thousand Needles | 6–35 |
| **Riverglades** | **36–44** | Badlands | 36–45 |
| Swamp of Sorrows | 36–43 | Dustwallow | 36–61 |
| Tanaris | 40–50 | Feralas | 41–60 |
| Hinterlands | 41–56 | Azshara | 42–55 |
| Searing Gorge | 43–56 | Blasted Lands | 46–63 |
| WPL | 46–57 | Felwood | 47–54 |
| Un'Goro | 48–55 | Burning Steppes | 50–59 |
| Deadwind | 50–60 | EPL | 54–59 |
| Winterspring | 55–60 | Silithus | 55–59 |
| **Shen'dralas** | **no level** | **Mount Hyjal** | **no level** |
| Zephras Isle | 1–12 | Darkspear Islands (BG) | 30–60 |

### 5.5 Coordinate warning: Redridge and Stormwind maps
Every Classic NPC in **Redridge** and **Stormwind City** has two coordinate sets in the Wowhead Forever DB. Other zones (Loch Modan, Dun Morogh, Westfall, Duskwood, Wetlands, Hillsbrad, Darkshore, Tanaris, Burning Steppes) have one set only. `official DB`

**Redridge examples** (Classic set → second set):

| NPC | Classic set | Second set |
|---|---|---|
| Marshal Marris | 33.5, 48.8 | 28.2, 49.0 |
| Magistrate Solomon | 29.9, 44.4 | 24.8, 44.2 |
| Innkeeper Brianna | 26.8, 44.5 | 21.8, 44.8 |
| Ariena Stormfeather (Lakeshire flight path) | 30.6, 59.4 | 25.4, 59.2 |

- The new Forever NPC **Marcy Baker (ACA, Three Corners) appears only at 9.4, 71.0**. That fits the second set, since Classic guides put Three Corners at about 15.3, 71.5.
- Sources: https://www.wowhead.com/forever/npc=382 ; https://www.wowhead.com/forever/npc=931 ; https://www.wowhead.com/forever/npc=256390 ; https://games.gg/world-of-warcraft/guides/wow-forever-redridge-mountains/

**Stormwind examples:**
- Dungar Longdrink 66.2, 62.4 (Classic map) and **71.2, 72.4** (the retail/harbor-style map).
- Grimand Elmore 51.6, 12.2 and 59.6, 34.0.
- Sources: https://www.wowhead.com/forever/npc=352 ; https://www.wowhead.com/forever/npc=1416

**Interpretation (`theory`):** Forever ships a re-cut Redridge map (the second set, about −5 in x) and the harbor-era Stormwind map. Classic coordinates for these two zones, which the existing route JSON uses, may be off. **Check in game (/way or the map) before publishing**, or leave coordinates out for these zones.

---

## 6. New dungeons: final levels and entrances (official, Oct 20; unchanged in launch materials)
Source: https://worldofwarcraft.blizzard.com/en-us/news/24301455 (Oct 20). The launch blog repeats "nine new five-player dungeons … levels 13–60": https://www.wowhead.com/news=383712/whats-new-and-whats-the-same-in-wow-forever (Nov 3).

| Dungeon | Levels | Entrance (official wording) + extra evidence | Alliance quest start |
|---|---|---|---|
| Hall of Thanes | 13–18 | "Beneath Ironforge in Dun Morogh"; "Alliance players can reach the entrance easily from within their capital". Method: "Under Ironforge via the Throne Room". gamedata: spider-web passage at 43.5, 52.0. | Old Ironforge Incursion etc. (see gamedata.md §3.1) |
| Ruins of Lordaeron | 15–20 | "Within the ruined city above the Undercity, Tirisfal". Horde territory. All quests need level 15 (Nov 2). | Inside the dungeon |
| Excavation Site | 24–29 | "Near Thelgen Rock and Dun Algaz in the Wetlands" / "Above Whelgar's Excavation". gamedata: entrance 48.1, 56.5 via a path left of Thelgen Rock (53.9, 65.4). Wowhead zone 16732. | Wetlands / Lakeshire / Menethil (gamedata) |
| City of Dalaran | 28–33 | Alterac Mountains; "enter through the sewers" after earning the Kirin Tor's trust. | **"An Alarming Request" (92432), Emissary Jacques, Southshore** → Image of Archmage Modera (**Silverpine 68.4, 45.2**, by Lordamere Lake) → Heart of Disruption (92458, level 33) → Friend of the Kirin Tor (92459). `official DB` https://www.wowhead.com/forever/npc=269127 |
| The Drowned City | 35–40 | "Off the coast of Stranglethorn Vale, west of Grom'gol"; "Dive below the water". | Unknown |
| Krol'dok Stronghold | 40–45 | Riverglades: "follow the ogre outrunners' trail". Range confirmed by Kaivax on Sept 15 (blizzard-official.md). | Unknown |
| Alcaz Prison | 48–53 | "Alcaz Island in Dustwallow Marsh". Theramore boat or flight. | Unknown |
| Blackmaw Hold | 55–60 | "Beyond a long-sealed gate in Azshara". Talrendis Point flight path. | Unknown |
| Shaper's Terrace | 58–60 | "The northern hills of Un'Goro Crater"; uses Un'Goro power crystals. Marshal's Refuge flight path. | Unknown |

Datamined but not in the list: Half-Pint Tavern (zone 16632), Ruins of Gilneas (16756), Battle for Gilneas BG (16653). Status unknown, probably future content. `official DB names only`

---

## 7. Other official facts with route impact

**What launches with Forever** (Now Live, Nov 4):
- more than 1,000 new quests
- Riverglades "much of the mid-30s to mid-40s experience"
- camping (sit at least 1 min)
- Legacy

`official` https://worldofwarcraft.blizzard.com/en-us/news/24315820

**The race to 60:** the community leaderboard (race.aotc.gg) showed **Hunters taking 51 of the top 100** at about 12 h after launch, with a Night Elf Hunter leading at level 30 (~43.8k XP/h). This is a pace benchmark, not route evidence. `community, launch` https://race.aotc.gg/ ; https://www.youtube.com/shorts/nkMnanePS-A

---

## Gaps (what I could not find)

**Transport and maps:**
1. No official list of flight paths, boats or zeppelins. The network above comes from a launch-client datamine (foreverdb/senseos) plus Blizzard's three named sea routes.
2. The **sailing order** of the Menethil–Southshore–Auberdine loop isn't confirmed by Blizzard. The launch-client route name suggests Menethil → Southshore → Auberdine.
3. No **boat schedules or crossing times**, and no **Stormwind Harbor dock coordinates**. The only description is "southern-most dock".
4. Whether boats and zeppelins are fully fixed after the Nov 5 maintenance: no follow-up blue post was found as of ~17:30 UTC.
5. **No coordinates** for the Redridge → Riverglades fork, the Riverglades side of the road, Powderfuse Port, Steamwheedle Port, or the Krol'dok entrance.
6. Whether the Powderfuse Port flight master and the Tidegear Coast (Dun Morogh) node do anything. Both have no routes in the launch client.
7. Which coordinate set is correct for Redridge and Stormwind (§5.5). This needs an in-game check.

**Zones and quests:**
8. The **Shen'dralas level range** and whether any entry chain avoids the Magram Honored requirement. Riverglades quest list, hub order, and Alliance quest givers. Wowhead list pages render empty for automated fetches.
9. Which quests had **"Adjusted experience values"** or "pre-requisites and level settings" changed on Nov 2. Not itemised by Blizzard.

**XP formulas:**
10. Exact Forever quest-XP falloff and grey-mob table. Only Classic rules are available, assumed unchanged.
11. The exact green-mob XP reduction formula. Only "4–20% less" is known, from Icy Veins (the page blocks fetches, so the numbers come from search snippets).
12. The exact Camp Tent and sleeping-bag XP percentages in Forever. Tooltips only say "bonus to experience".

**Money and class:**
13. **Riding:** whether warlocks pay 100 g for Apprentice Riding with the Felsteed. 40+ trainer prices were never testable in beta (cap 30).
14. **Dual-spec cost.** No official per-level warlock training costs or grimoire prices; only the 206–207 g total.
15. No blue response on the launch **pet-HP complaints** (Voidwalker), and no hotfix as of Nov 5.

**Sites that refused automated fetches** (not retried): icy-veins.com, overgear.com, dving.net, playnews.gg. Wowhead article and guide bodies and list pages render empty, so Wowhead was used through its tooltip API and news RSS only.
