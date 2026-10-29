# Reddit-node research notes: WoW: Forever beginner leveling guide (MVP: Gnome Warlock, Alliance)

Compiled 2026-10-29 (launch is Nov 4, 2026; the beta ran Sept 17 to Oct 22).

## 0. Access status and method (read this first)

**I could not reach Reddit at all.** I did not use Reddit mirrors or archives to get around the block.
- `WebSearch` with `allowed_domains: ["reddit.com"]` returned an API error: "domains are not accessible to our user agent: ['reddit.com']".
- `WebFetch` on old.reddit.com returned "Claude Code is unable to fetch from old.reddit.com".
- `curl` to `www.reddit.com/r/classicwow/search.json` and to old.reddit.com returned **HTTP 403 "Blocked"** from Reddit's own server (`server: snooserv`). The proxy was not the cause.
- Unfiltered web searches that included "reddit" or "site:reddit.com" returned **zero reddit.com results**, so I also had no Reddit search snippets to fall back on.

**What I used instead:** the **official Blizzard WoW: Forever forums**, which are the nearest equivalent of player-community discussion. They are Discourse forums with a public JSON API, and they are reachable.
- General Discussion (cat 347): https://us.forums.blizzard.com/en/wow/c/wow-forever/world-of-warcraft-forever-general-discussion/347
- Beta Discussion (cat 349): https://us.forums.blizzard.com/en/wow/c/in-development/wow-forever-beta-discussion/349
- I crawled about 750 topic titles in each forum, then read about 160 threads in full, ranked by likes.
- I also read the official **"WoW Forever Beta Development Notes – Updated October 26"** thread (Kaivax, community manager): https://us.forums.blizzard.com/en/wow/t/2360696. I used it to check player claims.
- The forum posts themselves mention Reddit in a few places, for example "Reddit Video" link threads and accusations that guide-addon affiliates post on Reddit. That suggests Reddit discussion runs in parallel, but I could not read any of it.

**Confidence tags used below**
- `[confirmed-Forever]`: stated in official dev notes or a blue (Blizzard staff) post, or reported the same way by several beta players as a mechanic.
- `[beta-may-change]`: a beta tuning value, a beta-only condition, or a single player's observation. Re-check at launch.
- `[Classic-carryover-assumption]`: players inferring behavior from Classic Era. Not verified for Forever.

**Beta distortions to keep in mind.** Players repeat these warnings often, and they mean many beta impressions overstate power.
- Level caps were staged: 20 first, then 30 from Oct 1. Players "sat at 20 for 2 weeks" collecting gear and spell power. `[confirmed-Forever]` (dev notes Oct 1 "Players can now level up to a maximum of level 30"; https://us.forums.blizzard.com/en/wow/t/2384881)
- Every beta player was granted the Legacy Challenge, which gives **16 Legacy Points**. Testers therefore had the early-talent perk. `[confirmed-Forever]` (dev notes Oct 8, https://us.forums.blizzard.com/en/wow/t/2360696; https://us.forums.blizzard.com/en/wow/t/2387246)
- The beta auction house was **shared between Horde and Alliance**, so beta prices do not predict live prices. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395556, post #15)
- Warlock pets were heavily overbuffed until around Oct 15. For example, the Imp had about 200 HP at level 1 instead of about 19. They were then nerfed by about 50%. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2384881, 2026-10-16)

---

## 1. Leveling pacing and route design

### 1.1 Overall pace
- **Blizzard data puts 1–20 at roughly the same /played time as Classic.** Players quote the devs as saying the average 1–20 was "1 minute slower" in Forever. The game feels faster because there are many more quests and less travel. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2362913, 2026-09-26; https://us.forums.blizzard.com/en/wow/t/2387246, 2026-10-20)
- Player estimates for 1–60 cluster around **100–160 hours** for a normal pace, 150–200 hours or more for a relaxed pace, and about 60–80 hours for experienced optimizers. The halfway point is "around level 45". `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2377372, 2026-10-09; https://us.forums.blizzard.com/en/wow/t/2395579, 2026-10-29; https://us.forums.blizzard.com/en/wow/t/2392354)
- One player gives a counterpoint: mob HP from level 35 to 60 reportedly rose by about 23–27%, and weapons and base spells were nerfed, so some expect 60 to take longer than in Era. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395579, posts #4, #13)
- **Out-leveling content is a common complaint.** With dungeon quest XP, camp buffs, the sleeping bag, rested XP and many new quests, players turned quests grey before finishing a zone. One player wrote "you can no longer do all quests in The Barrens, Stonetalon, and Ashenvale without massively out-levelling." Guide implication: tell players they **may skip** lower-priority quests and need not clear every zone. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2390574; https://us.forums.blizzard.com/en/wow/t/2392354, post #6; https://us.forums.blizzard.com/en/wow/t/2358426)
- A player who wants to slow down can log out outside inns and cities so rested XP barely accrues. There is no toggle to turn XP off, but players requested one. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2358426)
- From Oct 1 the beta reported **1–30 times of about 22 hours /played** for a fast hunter, and "12 hours to 30" from streamers who used an "apple" repeatable-quest exploit that was later patched. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2390574, post #5; https://us.forums.blizzard.com/en/wow/t/2387246)
- The Skyborne start on Zephras Isle reportedly levels faster: one player hit 10 in about 4 hours on Zephras versus about 7 in Durotar. Not relevant to gnomes. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2390574, post #14)

### 1.2 Dungeon XP: the single most-discussed leveling topic
These threads have thousands of replies.
- **Dungeon mob XP was cut hard.** Players compute an 80% initial reduction followed by a +20% buff, for a net **reduction of about 76%** compared with Classic. Another player says it "remained 31.6% of what it was when beta launched." `[confirmed-Forever]` that it was nerfed; `[beta-may-change]` for the exact numbers. (https://us.forums.blizzard.com/en/wow/t/2379420, 2026-10-11; https://us.forums.blizzard.com/en/wow/t/2391789)
- **Dungeon quest XP was boosted at first, then cut on Oct 1:** "Dungeon quests now reward 50% less extra experience beyond normal quest values." Several dungeon quest rewards were also downgraded from blue to green. `[confirmed-Forever]` (dev notes Oct 1 and Oct 8, https://us.forums.blizzard.com/en/wow/t/2360696; reaction thread https://us.forums.blizzard.com/en/wow/t/2368928)
- On Oct 8 the devs raised dungeon kill XP by about 20% and fixed a bug that applied the party XP penalty based on the **highest-level** member. Blue post from **Aggrend**: "with perfect xp/hr play, the leveling rates in dungeons will be very close, if not equal to the speed you can level with optimal questing play… That playstyle [dungeon cleave to 60] being the optimal way to level does not pass that muster and we need to hold firm." `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2376010, post #20, 2026-10-08)
- **A player measured the routes.** Level 28, Horde, time to gain 1.63 levels:

  | Route | Time | vs. fastest |
  |---|---|---|
  | Hybrid (1 BFD run with its quests, then questing) | 2h35m | 1.00x |
  | Hybrid, with one LFG wait | 2h48m | 1.08x |
  | Questing only | 3h49m | 1.48x |
  | Dungeon only, same group | 5h47m | 2.24x |
  | Dungeon only, LFG before every run | 7h31m | 2.91x |

  `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395335, 2026-10-28)
- A second run of a dungeon pays poorly. Example: BFD repeat at **6,620 XP/h** versus open-world mob grinding at **15,780 XP/h**, about 2.4x. "Cliff effect: XP drops sharply from the second run." `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2383482, 2026-10-15)
- **Guide implication: run each dungeon once, with all its quests, then go back to questing.** This is the consensus "hybrid" route. Some old dungeons need **multiple runs to finish their drop quests**: a player needed 3 WC runs and 2 BFD runs. The **new** dungeons, RoL and Excavation Site, were designed so every quest can be finished in one run. The guide should list the drop quests to prioritize and say which old-dungeon quests to skip. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2383482, post #10)
- Group culture changed. Groups skip trash because trash XP is worthless, and people leave right after the last boss. One tank lost the boss-head and artifact quest items when the group left immediately. Guide tip: **loot quest objectives before the group leaves**, and say up front in group chat that you need items. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2371925)
- A "Relaxed" group option exists in the Group Finder, and there is a mana-pacing etiquette fight. Most posters say DPS should drink while the tank pulls and the tank should wait only for the healer's mana. Worth a short "dungeon etiquette for casters" box. `[confirmed-Forever]` that the Group Finder with Relaxed exists (https://us.forums.blizzard.com/en/wow/t/2386205)
- There is **no dungeon finder with teleports**, only a group-listing finder. Blizzard declined requests for one. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2389565, post #16; https://us.forums.blizzard.com/en/wow/t/2347588)
- Players predict that tanks and healers will be scarce at launch and that alts will be boosted through low-level dungeons by level 60 mains. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2392354, post #5; https://us.forums.blizzard.com/en/wow/t/2389565)

### 1.3 Open-world friction at launch
- **There will be no shared mob tagging.** Blizzard reportedly said no. Expect "tag wars" on quest mobs at launch. Guide advice: **group up with others on the same quest**. `[confirmed-Forever]` per multiple posts saying "they already said nope" (https://us.forums.blizzard.com/en/wow/t/2391412, 2026-10-24; https://us.forums.blizzard.com/en/wow/t/2377430)
- Beta starting areas were "packed with hundreds of players… nearly impossible without grouping up." The stress test had "200 dwarves/gnomes in Kharanos." `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2385523; https://us.forums.blizzard.com/en/wow/t/2389125)
- **Layering bugs** caused invisible attackers and cross-shard ganks on PvP servers. The sleeping bag gets left behind when you change layer, but its cooldown keeps running. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2389463; https://us.forums.blizzard.com/en/wow/t/2372181)
- **Quest log cap is 40.** Before an Oct 1 fix, a bug blocked escort quests when the log held 25 or more quests. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2388218; dev notes Oct 1)
- **Destroying a flavor or instruction item that a quest gave you abandons that quest.** Examples: the warrior level-20 armor quests "Furen's Instructions", the Maraudon "Pariah's Instructions", and the class intro letters. Guide tip: **do not delete quest-given letters, books or instructions to make bag space.** `[beta-may-change]`, flagged as feedback, may or may not be fixed (https://us.forums.blizzard.com/en/wow/t/2388218, 2026-10-21)
- The 1–5 starter zones have **no mailboxes**, so alts must walk to the next zone to collect mail. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2387874)
- **Characters have surnames.** Mail sent to a first name alone can reach the wrong player who shares that first name, and a beta bug got AH, mail and trade restricted this way. Guide tip: **always type the full name, including the surname, when mailing alts.** `[confirmed-Forever]` that surnames exist (dev notes Sept 24: "in-game mail could ignore surnames"); the bug is `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2378495)

---

## 2. Alliance / Gnome starting path: zone- and dungeon-specific notes

### 2.1 Dun Morogh, Kharanos and "The Great Outdoors"
- Gnomes and dwarves share the Dun Morogh start. Kharanos is the hub, and the **welcoming campfire in Kharanos** gives the camping intro quest "The Great Outdoors". `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2353288, 2026-09-18)
- **Common bug:** if you already had a camp buff when you accepted the quest, you cannot get credit. Workarounds players reported:
  - **Abandon the quest, relog, then re-accept.**
  - Use **`/sit`** rather than the X key. Dev notes later made sitting, chairs, sleeping, lying down and kneeling all count.
  - The buff takes about **1 minute** of sitting.

  Reports cover gnome, human rogue, human warrior and human warlock. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2353288; https://us.forums.blizzard.com/en/wow/t/2357743; dev notes Sept 24)
- Campfires no longer hurt players below level 5 (Oct 1). `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2360696)
- New or changed Dun Morogh quests named in the dev notes: **"Treacherous Cold"** (rifle loot fixed), **"Farsen's Watch"** (Far Sight), Snow Leopard Prowler respawn and Shimmer Ridge troll respawn fixes. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2360696)
- A player reached **level 10 before leaving Dun Morogh**. Classic starter zones also took you to about 12 if you did everything. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2362913)

### 2.2 Hall of Thanes (Ironforge, roughly 13–18): the Alliance's first new dungeon
- The questline starts in **Kharanos with "Visitor to Dun Morogh" (Beldin Steelgrill)**. The last-boss quest (from NPC Farsen) is a **drop from Dark Iron dwarves in south-east Dun Morogh**. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2354410, 2026-09-19)
- Players described HoT as "the Alliance equivalent to Ragefire Chasm." Its entrance is inside Ironforge, so it is hard for Horde to reach. Several players got "**the free level from HoT**", that is, roughly a full level from one run with its quests. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2367730; https://us.forums.blizzard.com/en/wow/t/2362913, post #36)
- HoT mobs hit very hard for the level range, according to both a tank and a healer. Groups skip trash. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2367009; https://us.forums.blizzard.com/en/wow/t/2371925)
- One player's route: quest to 15, tank HoT, which "put me right at the appropriate level to do Ruins of Lordaeron and Deadmines." After the Oct 1 nerf, Redridge was needed to bridge 20–30. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2392354, post #3)

### 2.3 Other dungeons on the Alliance path
- **Ruins of Lordaeron** (Undercity, Horde-side) **has Alliance quests**. The entrance sits at the edge of Undercity and is often camped. Alliance players died 6–7 times getting in on PvP servers; zoning in sometimes failed unless you respawned near the portal. Early-beta rewards were "overtuned": one player went from 16 to 18 in a single run with a pile of blues. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2366496; https://us.forums.blizzard.com/en/wow/t/2354849, 2026-09-19)
- **Excavation Site: Wetlands (26–31):**
  - The **diseases are brutal**: a stacking 30-minute stamina reduction of up to -105% to -150%, and a 15-minute disease that cuts damage to zero.
  - Bring a priest, paladin or shaman, or **disease-cure items from First Aid**.
  - The quest rewards were nerfed from blue to green on Oct 8.
  - The Titan Relic is returned to you for follow-up quests.

  `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2369918; https://us.forums.blizzard.com/en/wow/t/2374863; https://us.forums.blizzard.com/en/wow/t/2378440; dev notes Oct 8/16)
- **City of Dalaran dungeon (about 30):**
  - Almost all mobs are **immune to bleeds**, which is bad for feral druids.
  - Warlocks liked it: "so many mana batteries to drain from."
  - Dalaran the city is Alliance-only. Horde are attacked on sight (Oct 16).

  `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2377075; https://us.forums.blizzard.com/en/wow/t/2389250, post #3; dev notes Oct 16)
- Gnomeregan was rough for casters because of level-difference misses. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2389250)
- Dungeons open as of Oct 1 were RFC, HoT, RoL, WC, Deadmines, SFK, Stockade, BFD, Gnomeregan, RFK, SM, RFD and Uldaman, plus Excavation Site. City of Dalaran was added Oct 8. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2360696)
- Dying in an instance had a bug ("Don't Do It!"). `[beta-may-change]` (thread 2355090, found in search only, not read)

### 2.4 Zones and travel
- **Redridge** and **Wetlands** have many new Alliance quests. A Horde poster complained that "alliance have comments about the tons of new quests in wetlands and red ridge." `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2379059, post #3)
- The **Azeroth Commerce Authority vendors for Alliance are in Redridge, near Lakeshire**, in a PvP-flagged area across a lake from the inn and flight path. Horde's are at the Crossroads. Players asked for them to move to Sentinel Hill. `[confirmed-Forever]` location; `[beta-may-change]` that they might move (https://us.forums.blizzard.com/en/wow/t/2373995; https://us.forums.blizzard.com/en/wow/t/2357989)
- There is a **boat from Stormwind to Auberdine**, plus Southshore–Menethil. The old Wetlands-to-Ironforge run is now optional. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2374700; https://us.forums.blizzard.com/en/wow/t/2386728)
- **Riverglades:**
  - Reached by **ship from Steamwheedle Port (Tanaris)**.
  - **Powderfuse Port had no flight path** in the beta.
  - It houses the **Black Market AH** and the **rare/scarce-resource vendor**.
  - Players called it stunning.

  `[beta-may-change]` for the missing FP (https://us.forums.blizzard.com/en/wow/t/2353281; https://us.forums.blizzard.com/en/wow/t/2360091; https://us.forums.blizzard.com/en/wow/t/2373181)
- Elwynn fixes and new quests: "Book Return", "Stolen Enchanting Supplies", and the Jasperlode and Fargodeep mines being "more deadly than intended for solo" (candles removed). The Westfall Defias Messenger spawn was increased. Loch Modan has "Resupplying the Excavation" (Miran's camp). `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2360696)
- New faction "**Brotherhood of the Horse**", with Farholde Keep. Players ask for reputation guides and none exist yet. That is a **guide gap**. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2394376; https://us.forums.blizzard.com/en/wow/t/2390435)
- The "Night Watchman's Torch" is an Alliance item that illuminates nearby players. `[confirmed-Forever]` (dev notes Oct 1/8)

---

## 3. Warlock in Forever

### 3.1 Spec consensus for leveling
- **Affliction is the solo leveling default.** "Affliction is great for solo, but terrible for dungeons… dots often don't have time to run their course on anything except bosses." In dungeons, spread DoTs and wand on trash, use Rain of Fire on big pulls, and do the full DoT rotation on bosses. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2389250, 2026-10-22; https://us.forums.blizzard.com/en/wow/t/2380917, post #17)
- **Demonology is "much easier to level with than Destruction."** A player's level-60 sims put Demo first among locks, at 82% of top DPS, ahead of Affliction (73%) and Destruction (68%). Mein-mmo reports Demo as "A-tier" per early sims. The Succubus build may be "tuned down." `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2380917, posts #10, #12; https://us.forums.blizzard.com/en/wow/t/2389179, post with sim table; https://us.forums.blizzard.com/en/wow/t/2391868)
- **Destruction is called "an end game spec, not a leveling spec."** Incinerate is the fire filler. Players argued about "Shadow and Flame" weaving; one example 60 build is 5/11/35. Destruction is mana-hungry: "Life Tapping constantly." `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2380922)
- Warlocks "take a while to come online." The class feels better after 40 with Demonic Sacrifice and spell power. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2389250, post #5)

### 3.2 Concrete warlock changes and tips
- **Life Tap scales with Spirit** (tooltip: "only states that it scales with Spirit"). Human Spirit was buffed to 10% partly for this reason. Players are told Spirit is now valuable on gear, and **Spirit should not be treated as a vendor stat for warlocks.** `[confirmed-Forever]` (dev notes Sept 24 and Oct 26, https://us.forums.blizzard.com/en/wow/t/2360696; https://us.forums.blizzard.com/en/wow/t/2395009; Spirit-valuable comment https://us.forums.blizzard.com/en/wow/t/2387019 post #9)
- **Drain Soul gives a 100% shard if you are draining when the mob dies,** whether or not your spell lands the killing blow. It does not work on grey mobs or with full bags. Drain Soul itself does very low damage, so **DoT the target and switch to Drain Soul near death.** This beginner confusion is very common: a 128-reply thread. `[confirmed-Forever]` as observed behavior (https://us.forums.blizzard.com/en/wow/t/2389364, 2026-10-22)
- Drain Soul is interrupted if you start another cast (Oct 1). `[confirmed-Forever]`
- **Soul Harvest** (Affliction talent, renamed from "Soul Harvesting") gives a 50/100% mana regen increase. It is tied to Drain Soul and **fills bags with shards**. Players delete extras manually or with a macro or addon. `[confirmed-Forever]` (dev notes Oct 1; https://us.forums.blizzard.com/en/wow/t/2373621; https://us.forums.blizzard.com/en/wow/t/2380917)
- **The soul shard bag can go in the reagent bag slot,** so warlocks do not lose a normal bag slot. Hunters cannot do this with quivers. Shards **do not stack**. The trade-off is that a warlock herbalist's herbs then go into normal bags. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2394758, 2026-10-28; https://us.forums.blizzard.com/en/wow/t/2368623; https://us.forums.blizzard.com/en/wow/t/2365014; https://us.forums.blizzard.com/en/wow/t/2389179 post #26)
- The Tailoring reagent bag holds any reagent: cloth, ore or fish. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2394758, post #22)
- **Malediction was replaced by Grim Reach,** which gives +10/20% range on Affliction spells and restores Fear's range. **Shadow Mastery** became 2/4/6/8/10% Shadow damage (Oct 16). **DoTs can crit.** **Hellfire can crit.** `[confirmed-Forever]` (dev notes Oct 1/16; https://us.forums.blizzard.com/en/wow/t/2391868)
- Spellstone lost its shield effect. Players request a "summoning closet" (summoning stone) and a Soulwell. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2391868)
- **Baseline spell damage was cut about 50%,** and power moved onto spell-power gear. One player: "forced to buy shadow gear on the AH every couple levels to feel viable." Several players recommend buying "**of the Elder**" (Int/Spirit/Spell Power) and spell-damage greens on the AH. "Shadow Wrath" gear was considered weak for its cost during the beta. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2384881; https://us.forums.blizzard.com/en/wow/t/2379036, posts #2/#4; https://us.forums.blizzard.com/en/wow/t/2387562, post #6)
- **Downranking was nerfed.** Spells "vastly below your current level" get less spell-power benefit and a lower chance to trigger procs and talents. Do not plan rank-1 spam. `[confirmed-Forever]` (dev notes Oct 8)
- Pet notes:
  - The **Voidwalker passive pet-attack bug**: the pet sometimes returns to you when the first mob dies to DoTs while it is running to the second mob. Watch for this when chain-pulling.
  - The current pet is **stunned while you summon a new one**.
  - **Aggressive mode** is back.
  - The pet bar has gamepad support.

  `[beta-may-change]` / `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2365631; dev notes Oct 1/8)
- **Healthstones cannot be crafted while sitting at a campfire.** Stand up first, or make them before you sit down. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2387867)
- Warlocks **cannot summon inside dungeons** (reported as a nerf). `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2380917, post #4)
- **Movement:** warlocks have no speed tool. A player asked for Burning Rush. The answer given was "At least there is the free fire pony at 40." The class mount comes via a quest; see section 4.5. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2392913)
- The Fear PvP debate ("increase mana cost") did not lead to any change; Fear is still 15% base mana. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2386464)
- A **Legacy perk called "Reagent Economy"** interacts with soul shard costs. A bug let the Incubus be summoned without a shard. Players mention "the free reagent point." `[confirmed-Forever]` the perk exists (dev notes Oct 16; https://us.forums.blizzard.com/en/wow/t/2377021, post #12)
- **Orc "Command"** (+5% warlock and hunter pet damage) was re-added on Oct 26. This matters only if a reader is choosing a race. `[confirmed-Forever]`

### 3.3 Gnome racials as they apply to warlocks
- **Eureka!** changes during the beta:
  - Sept 24: changed to a 10% resource discount on Mana, Rage or Energy abilities.
  - Oct 8: **no longer benefits periodic effects at all**, and channels do not count as periodics.
  - Oct 16: became an **8-second buff with no charges**, with the same effect on damage and costs.
  - The Oct 26 final racial pass **did not change Gnome**.

  Guide implication: for an Affliction warlock, Eureka helps the **Shadow Bolt/Incinerate/burst window and mana cost, not DoT ticks**. One player still suggested using it "for dotting up targets in those 8 seconds", for the mana discount on casting. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2360696; https://us.forums.blizzard.com/en/wow/t/2392813; https://us.forums.blizzard.com/en/wow/t/2395009)
- **Escape Artist** is now instant cast and gives 3 seconds of root/snare immunity. Players call Gnome the strongest Alliance PvP race. **Engineering Specialization**: players say "20% chance eng won't fail." `[confirmed-Forever]` for the description; the 20% figure is `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2392813; https://us.forums.blizzard.com/en/wow/t/2394920)
- Gnome or Human for warlock: the consensus is "pretty even." Human Spirit at 10% helps Life Tap; Gnome gives mobility and Eureka. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395009)

### 3.4 Naming contradiction to flag
- Forum players call the Affliction capstone drain "**Wrack**": a channel that gives +10% to other Shadow DoTs while channeling, with a 14.3% SP coefficient per tick, and only one rank seen in beta. Guide sites (Zockify, Mobalytics, Icy Veins) call it "**Drain Hope**": 52 Shadow damage per second, +10% to other Shadow DoTs on the target, 6-second duration. The two may be the same spell under a renamed build, or a forum nickname. **Verify the in-game name at launch.** `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2380917, post #28; https://us.forums.blizzard.com/en/wow/t/2391868)
- Players also expect Demonic Pact to let Demonic Sacrifice persist through death, but it currently does not. For a Demo build, each death costs 2 summons and 2 shards. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2380920; https://us.forums.blizzard.com/en/wow/t/2384881)

---

## 4. Systems FAQ (questions new and returning players ask repeatedly)

### 4.1 Camping
- Sitting, chairs, sleeping, lying down and kneeling all trigger campfire buffs. You can buff, cast and craft while waiting for the buff (Sept 24). `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2360696)
- **Buffs depend on the professions and classes of the players who placed camp items.** Herbalism gives an Int buff, Alchemy gives mana regen, Skinning/LW gives crit plus XP, and there are Enchanting and Fishing buffs. One player switched professions because of camp buffs. Leatherworking reportedly makes a **tent with 5% rested XP**, which caps and does not stack past 5%. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2381328, post #6; https://us.forums.blizzard.com/en/wow/t/2395369; https://us.forums.blizzard.com/en/wow/t/2390406, post #8)
- There is a "Boosted Rest" debuff icon and camp features are "mutually exclusive". Camp gear **costs bag space**, which is a pain early on with 6–8 slot bags. Players asked for a camping bag slot. `[confirmed-Forever]` (dev notes Oct 1; https://us.forums.blizzard.com/en/wow/t/2390406)
- Each profession gets 3 campsite recipes, the first at skill 20. This comes from guide sites, not the forums. `[beta-may-change]`

### 4.2 Sleeping bag
- The forums tie the **sleeping bag quest chain to Loch Modan**: "**Wet Bags**" on top of the dam leads to "**Eagle's Fist**". One player was bugged and could not get Eagle's Fist. Horde has its own version. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2362081, 2026-09-25)
- **This conflicts with the caller's context** ("scavenger hunt level 14 Westfall/Barrens"). It may be a multi-zone chain. Verify.
- Layering moves you away from your placed bag while its cooldown keeps running. Inviting others to share your bag is possible but buggy. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2372181; https://us.forums.blizzard.com/en/wow/t/2380971)

### 4.3 Library books
- **The thresholds are 10, 20 and 30 books.**
  - 10 books: an ilvl-25 necklace.
  - 20 books: a ring with class-limited options, for example a rogue-only 7 Str/7 Agi ring or a spell-power ring. The spell-power ring is the one a warlock wants.
  - 30 books: "Greater Friend of the Library", with level-40 item rewards including the Truthseeker's Bow.
- The books are **scattered across both continents**: Elwynn, Westfall, Ironforge, Wetlands, Darkshore, Ashenvale, the Barrens, Stonetalon and more. Some are in elite or high-level areas.
- Players found the rewards weak for the travel involved.
- Guide implication: **pick up books on the way, do not detour for them early**, and list book locations per zone.

  `[confirmed-Forever]` thresholds; `[beta-may-change]` rewards (https://us.forums.blizzard.com/en/wow/t/2363572; https://us.forums.blizzard.com/en/wow/t/2360061; https://us.forums.blizzard.com/en/wow/t/2382899; https://us.forums.blizzard.com/en/wow/t/2385608; dev notes Oct 8)

### 4.4 Legacy system (account-wide)
- Perks named in threads:
  - **Well Rested**: +20% rested XP accumulation.
  - **Diplomat**: +10% rep.
  - **For Great Honor**: +10% honor.
  - **Dedicated Study**: a 24-hour cooldown that raises your lowest profession.
  - **Working Overtime**: +20% skill-up chance.
  - **Bountiful Harvest**: more scarce materials from gathering.
  - **Performance Bonus**: 5–15% chance of double Merchant's Favor. It is gated behind 5 points in Bountiful Harvest.
  - **Master Chef** and **Luremaster**.
  - **High Alert**: stealth detection, which is controversial.
  - **Talented**: costs 10 points and gives talent points from level 5, worth roughly 5 extra levels of talents.
  - **Reagent Economy**.
  - **Permanence**: long-duration party/raid buffs last 100% longer.
  - **Bartering**: a vendor discount. A bug that also discounted training and repairs was fixed.
  - Others mentioned: cheaper flight paths, field medicine, and campfire features.

  `[confirmed-Forever]` that the perks exist; `[beta-may-change]` values (https://us.forums.blizzard.com/en/wow/t/2349998; https://us.forums.blizzard.com/en/wow/t/2387626; https://us.forums.blizzard.com/en/wow/t/2377021; https://us.forums.blizzard.com/en/wow/t/2367004; https://us.forums.blizzard.com/en/wow/t/2395414; dev notes Oct 16)
- **Points come from** levels, dungeons ("all the dungeons you can do at 25 are one point"), crafting professions (3 points at 300; one plan uses 150/150 on alts for 1 point each), reputation, and PvP. Players say the total is about **65 points**, with about 62 needed to max every perk. Gathering professions give **no** points, which players objected to. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2387626, post #3; https://us.forums.blizzard.com/en/wow/t/2387080; https://us.forums.blizzard.com/en/wow/t/2394780; https://us.forums.blizzard.com/en/wow/t/2377021)
- **Legacy perks can be respecced at the class trainer for gold.** In beta the cost started at 1 silver and decayed hourly. People debated "respec for crafting, then respec back." `[confirmed-Forever]` respec exists (dev notes Oct 8; https://us.forums.blizzard.com/en/wow/t/2387626, post #4)
- Points are probably **shared across WoW1/WoW2 licenses on the same Battle.net account**. This is unconfirmed. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395113)
- **Guide implication for a first character:** you will not have Talented on your first character. Early points are best spent on QoL perks such as Well Rested.

### 4.5 Mounts and riding
- **The first mount is free; the cost moved to the riding skill.** Players quote **about 90g at 40 and 900g at 60**; one says "100g for the skill". Paladins and warlocks get a class mount through a quest, "free fire pony at 40." **Racial riding** still exists. Pre-purchase pack mounts show up at level 1 but cannot be ridden until you train at 40. `[beta-may-change]` for exact costs (https://us.forums.blizzard.com/en/wow/t/2389105, posts #5, #10; https://us.forums.blizzard.com/en/wow/t/2393205; https://us.forums.blizzard.com/en/wow/t/2395434, post #7; https://us.forums.blizzard.com/en/wow/t/2392913)
- A **mount collection window** exists. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2368623)

### 4.6 Dual spec
- Dual spec arrives at 40. Large threads ask for it at 20 or 30. One player says the devs "said in a recent interview they are considering moving dual spec to lvl30." That is **unconfirmed**; re-check at launch. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2386600, post #88, 2026-10-20; https://us.forums.blizzard.com/en/wow/t/2379724)
- Talent respec in the beta cost 1 silver if you had not reset recently. That was a **beta-only** rule; normal escalating costs apply live. `[confirmed-Forever]` (dev notes Sept 24)

### 4.7 Transmog, bank and UI
- **Transmog exists, with strict armor-type matching** (cloth to cloth). The appearance collection is account-based. **Selling an uncollected BoE to a vendor now soulbinds it** after collecting the appearance. `[confirmed-Forever]` (dev notes Oct 1; https://us.forums.blizzard.com/en/wow/t/2362711)
- The bank is bigger and there is a reagent bag slot. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2368623)
- **The built-in quest tracker and objective markers are a "Questie-lite."** Players still find the tracker weak (no sorting or grouping). Community addons **"ForeverQuestLog"** and **"Forever_Quest_Arrow"** were recommended as Questie/TomTom replacements. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2387033, 2026-10-19)
- A **new-player tutorial** was added Oct 16. It works on the default keyboard UI only, not gamepad, and players found it intrusive: there is a "Skip" option only on the first tip. `[confirmed-Forever]` (dev notes Oct 16; https://us.forums.blizzard.com/en/wow/t/2384697)
- **Gamepad support** is in alpha. A Cooldown Manager exists. `[confirmed-Forever]` (dev notes)
- In the starter area, **tradeskill books** let you pick a gathering profession as a quest reward. They sometimes did nothing when used (bug). `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2390753)

---

## 5. Professions

- **Gathering professions are all still in:** Herbalism, Mining and Skinning, plus Fishing, Cooking and First Aid. Players count 12 professions in total. **Inscription** appears as an unused beta tab. There is **no confirmed new profession** and no confirmed profession bonuses. Claims about "Mixology" or a "+5% HP from Mining" bonus come from Mobalytics, and forum dataminers called them unfound or "AI hallucination." **The guide should not promise profession bonuses.** `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2391663, 2026-10-25)
- **Healing potions moved to First Aid**, and everyone can learn First Aid. **First Aid also makes disease-cure items**, which matter for Excavation Site. `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2395120, post #5; https://us.forums.blizzard.com/en/wow/t/2369918, post #13; https://us.forums.blizzard.com/en/wow/t/2381328, post #15)
- **Crafted gear became leveling-relevant, and most of the good items are BoP.** That pushes everyone toward the crafting profession that matches their armor type.
  - A warlock who went Herb/Alch, then rolled a mage with Tailor/Enchant, said he "immediately got to see all of the things I was missing."
  - Tailoring gives early spell-power greens, and the **Novice Arcanist Sash** (blue BoP belt, +3 Int, +3 Stam, +4 SP) comes very early.
  - Merchant's Favor tailoring patterns start at level 12.
  - One player counted **27 crafted cloth blues with Int at levels 2–19, versus 2 Int blues from dungeon bosses.**
  - **Guide implication for a warlock: Tailoring is the strongest leveling pick.** Pair it with Enchanting (wizard oil, BoP mid-20s staves, wands, relics) or a gathering profession for gold.

  `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2356428, 2026-09-21; https://us.forums.blizzard.com/en/wow/t/2356010; https://us.forums.blizzard.com/en/wow/t/2381328; https://us.forums.blizzard.com/en/wow/t/2387562)
- Counterpoint: "level 2–19 gear is totally irrelevant and there is plenty of spellpower gear that is BOE." `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2387575, posts #20, #29)
- **Enchanting has no vellums.** You cannot put enchants on the AH or send them to alts, so enchanters must sell their services in trade chat. This is a huge complaint thread. `[confirmed-Forever]` as of beta (https://us.forums.blizzard.com/en/wow/t/2365915; https://us.forums.blizzard.com/en/wow/t/2390139; https://us.forums.blizzard.com/en/wow/t/2394765)
- **Crafted common and uncommon wands sell to vendors for 1 copper** (Oct 1), and many crafted items had their sell price lowered (Oct 16). **Do not craft items to vendor them for profit.** `[confirmed-Forever]` (dev notes; https://us.forums.blizzard.com/en/wow/t/2384061)
- **Scarce materials** (Pristine Leather, Frilled Lichen, probably Pyrite) appear to drop **only for characters level 25 or below**, from level 10–25 mobs or low herbs. Level 26–30 characters got none in hundreds of attempts. These materials feed Cerulean and Magenta Dye, Runecloth Bags (now also needing 4 Magenta + 2 Cerulean Dye), and many level 10–40 recipes. **Guide tip: gather these while you are still level 25 or below.** `[beta-may-change]`; players were unsure whether it is intended (https://us.forums.blizzard.com/en/wow/t/2379537, 2026-10-11; https://us.forums.blizzard.com/en/wow/t/2392743)
- **Tauren Cultivation** got a player-level requirement (herb level divided by 5). This is not relevant to gnomes. `[confirmed-Forever]`
- **Engineering:** many engineering items are now BoE and usable by others, so "you don't need everyone to be an engineer." Safe-T explosives and a goblin glider were seen. Gnome Engineering Specialization still makes it thematic. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395120)
- **Alchemy** is seen as weak for leveling but the "true gold maker" at endgame. It has new grenades and spell-power potions. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395378; https://us.forums.blizzard.com/en/wow/t/2395120)
- Leatherworking's trainer recipes are mostly Agility. Caster leather is thin. Not relevant to warlocks. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2356339)

### 5.1 Azeroth Commerce Authority / Merchant's Favor
- **Waylaid Crates** drop rarely from mobs, more from **chests** and dungeons, and mostly from the mid-teens onward. You fill a crate with listed materials and seal it at the ACA vendor (Redridge for Alliance) for **Merchant's Favor**, which is **bound to the character**.
  - **First turn-in: 50 Favor.** After that, an Apprentice crate gives 5, a Journeyman crate 10, and a processed Expert crate about 30.
  - The material tier can be odd: 20 Wool sealed as Journeyman for 10 Favor, while 40 Silk sealed as Apprentice for 5.
  - Pattern costs: about 30 Favor below level 30, 60 below level 50, 90 up to 50+, and 120 for the top patterns. A full alchemy catalog is about 3,800 Favor and enchanting about 3,300.
  - **Craftsman's Writs** are daily and give 75 rep to the merchant faction.

  `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2357989; https://us.forums.blizzard.com/en/wow/t/2363555; https://us.forums.blizzard.com/en/wow/t/2364225; https://us.forums.blizzard.com/en/wow/t/2386371; https://us.forums.blizzard.com/en/wow/t/2361383; https://us.forums.blizzard.com/en/wow/t/2377603)
- The consensus is that the system is confusing and needs an intro quest. Players did not know what a crate was, thought it was a quest item, or **deleted crates**. Most gear recipes are BoP, so they are worth it mainly for **Tailoring (casters), Enchanting, Alchemy and Cooking**. **Guide implication: explain crates in one box, tell players to bank them rather than delete them, and turn in the first one for the 50 Favor bonus.** `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2385559; https://us.forums.blizzard.com/en/wow/t/2357989, post #2; https://us.forums.blizzard.com/en/wow/t/2356361)
- Expensive material example: a warlock's Shadow Gown pattern needs **6 Cerulean Dye at about 2g each** in the beta. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2385559, post #3)

---

## 6. Economy and gold

- **What sold well in the beta:** **Pristine Leather** and the scarce dyes. Green "rare" gathering materials went for about 70s each. Silk was expensive: about 8g for 40. Players expect those prices to fall at launch because the cross-faction AH and the level-30 cap distorted them. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395556, posts #14–15; https://us.forums.blizzard.com/en/wow/t/2377603; https://us.forums.blizzard.com/en/wow/t/2364225)
- **Gold sinks:** the riding skill, the **Black Market AH** (dungeon set pieces start at 400g), a scarce-material vendor at about 5g each that caps prices (it reportedly will also stock Black Lotus-type materials), transmog, and respecs. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2391215; https://us.forums.blizzard.com/en/wow/t/2379537, post #3)
- **Low-level gathering is the classic new-player income:** "Vets don't want to be bothered farming lowbie mats like Copper." This is especially true for Forever's level-25-capped scarce materials. `[Classic-carryover-assumption]` plus the beta observation above (https://us.forums.blizzard.com/en/wow/t/2391215, post #9)
- **Gold buying and RMT carry real risk.** Blue posts:
  - **"Temporary Economy Holds"** restrict trade, mail, guild bank and AH if your account is suspected of sending or receiving RMT gold. Even a legitimate trade from a stranger can trigger an investigation.
  - A warning now appears when you trade with strangers.
  - **Guide tip: do not accept gold from strangers.**

  `[confirmed-Forever]` (https://us.forums.blizzard.com/en/wow/t/2381433, Kaivax 2026-10-13; https://us.forums.blizzard.com/en/wow/t/2368705, Kaivax 2026-10-01)
- A rogue SM class-quest chest farm (disguise exploit) was reported for 100g/h. It was expected to be fixed. Not for the guide. (https://us.forums.blizzard.com/en/wow/t/2374189)
- Runecloth Bag patterns: botters camped the limited-supply vendors in past Classic versions. Some limited-supply recipes were changed to unlimited-supply and BoP in the beta. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2392743)

---

## 7. Guides and addons: what players say is missing or contested

- **There is a large controversy over paid guides.** Threads include "Selling addons is ok now?" (196 replies), "Paid addon being promoted during the dueling tournament" (1,081), and "Paid Leveling Guides - Blizz needs to review" (430).
  - RestedXP has a free addon with paid guides beyond level 30. Zygor and Joana's are named.
  - A **"Journey" addon at $30** sponsored the duel tournament.
  - Many players resent paying and see it as a ToS gray area.

  **This is an opening for a free, transparent guide.** `[confirmed-Forever]` that the debate exists (https://us.forums.blizzard.com/en/wow/t/2388508; https://us.forums.blizzard.com/en/wow/t/2388977; https://us.forums.blizzard.com/en/wow/t/2395596; https://us.forums.blizzard.com/en/wow/t/2391853)
- Players who want a slow pace say they will "go where the quests take me." **Guides should support an unhurried path, not only speed routes.** Several posters planned to avoid guides on their first character. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2395579, posts #21, #30)
- **Missing content that players asked for:**
  - Reputation guides for new factions (Brotherhood of the Horse).
  - An explainer for Merchant's Favor and crates ("I didn't even know how to use those guys").
  - Library book locations.
  - Legacy point planning.
  - Whether profession bonuses exist.
  - Dungeon quest lists that can be done in one run.
  - How Drain Soul works.

  (https://us.forums.blizzard.com/en/wow/t/2394376; https://us.forums.blizzard.com/en/wow/t/2385559, post #7; https://us.forums.blizzard.com/en/wow/t/2357989; https://us.forums.blizzard.com/en/wow/t/2391663; https://us.forums.blizzard.com/en/wow/t/2389364)
- **Other addons mentioned:** "ForeverQuestLog" and "Forever_Quest_Arrow" (tracker and arrow), "One for All" (a "who knows recipe X" cross-player profession lookup), and a "Dialogue/Spoken" quest audiobook addon. Addons had issues with gamepad. `[beta-may-change]` (https://us.forums.blizzard.com/en/wow/t/2387033; https://us.forums.blizzard.com/en/wow/t/2390655; https://us.forums.blizzard.com/en/wow/t/2395579, post #21; thread 2384109 in search results)
- Talent-choice complaints matter for guide UX. Some leveling talents buff spells you will not learn for 10 or more levels, for example Demonic Brand affecting Soul Fire, which a level-20 player does not have yet. **Guides should state the order in which to take talent points at each level band and explain why.** (https://us.forums.blizzard.com/en/wow/t/2393811)

---

## 8. Contradictions and items likely changed after the beta

1. **Drain Hope vs. "Wrack"** as the Affliction capstone name. See section 3.4.
2. **Sleeping bag location:** the forums say Loch Modan ("Wet Bags" leading to "Eagle's Fist"), while the caller's context says a level-14 scavenger hunt in Westfall/Barrens. It may be a chain spanning both.
3. **Eureka! on DoTs:** an Oct 8 dev note says it no longer benefits periodics, but one player still recommends it "for dotting." It only reduces mana cost while casting DoTs; it does not boost tick damage.
4. **Riding cost:** 90g/900g versus "100g." Only the cost structure is firm: the mount is free and you pay for the skill.
5. **Dual spec at 40 versus a rumored move to 30.** Unconfirmed.
6. **Dungeon XP:** Blizzard says dungeon leveling is "very close to optimal questing," but player data says 2–3x slower for repeat runs. Final values may still change. No change was announced after the beta.
7. **Pet HP and warlock power:** beta values were inflated by the level-20/30 caps, the pet overbuff (fixed around Oct 15), farmed gear, and the 16 free Legacy Points. Expect warlocks to feel weaker at launch, especially from level 22 to 40.
8. **Scarce materials capped at level 25:** players are not sure this is intended. It could be changed.
9. **Waylaid crate drop rates** were reportedly nerfed mid-beta. One player says they drop more from chests and later levels, while others saw almost none.
10. **Merchant's Favor gear BoP vs. BoE:** heavy requests to make it BoE. No change was announced as of Oct 26.
11. **Racials** changed again on Oct 26 and 27, the day before name reservation. Gnome was untouched in that final pass, but watch the launch notes.
12. **Mobalytics' "profession bonuses"** (Mixology and similar) are disputed. Do not use them.

---

## 9. Source index (all Blizzard forums, US; dates are thread creation dates)

Official / blue:
- Dev Notes (updated Oct 26): https://us.forums.blizzard.com/en/wow/t/2360696 (Sept 24 – Oct 27)
- Aggrend dungeon XP blue post: https://us.forums.blizzard.com/en/wow/t/2376010 (Oct 8)
- Temporary Economy Holds: https://us.forums.blizzard.com/en/wow/t/2381433 (Oct 13)
- Actions Against Botting and RMT: https://us.forums.blizzard.com/en/wow/t/2368705 (Oct 1)
- Beta forum pointer: https://us.forums.blizzard.com/en/wow/t/2352595 (Sept 17)

Leveling and dungeons: 2395335 (Oct 28), 2383482 (Oct 15), 2379420 (Oct 11), 2376695 (Oct 8), 2368928 (Oct 1), 2391789 (Oct 25), 2388514 (Oct 21), 2391482 (Oct 25), 2390574 (Oct 23), 2392354 (Oct 26), 2362913 (Sept 26), 2377372 (Oct 9), 2395579 (Oct 29), 2387246 (Oct 20), 2358426 (Sept 22), 2371925 (Oct 4), 2386205 (Oct 18), 2387019 (Oct 19)

Alliance, zones and dungeons: 2353288 (Sept 18), 2357743 (Sept 22), 2354410 (Sept 19), 2367009 (Sept 30), 2367730 (Oct 1), 2366496 (Sept 29), 2354849 (Sept 19), 2369918 (Oct 2), 2374863 (Oct 7), 2378440 (Oct 10), 2377075 (Oct 9), 2379059 (Oct 11), 2353281 (Sept 18), 2360091 (Sept 24), 2373181 (Oct 5), 2374700 (Oct 7), 2373995 (Oct 6), 2390435 (Oct 23), 2394376 (Oct 28)

Warlock: 2380917 (Oct 13), 2380920 (Oct 13), 2380922 (Oct 13), 2384881 (Oct 16), 2391868 (Oct 25), 2389364 (Oct 22), 2389250 (Oct 22), 2373621 (Oct 6), 2368623 (Oct 1), 2357145 (Sept 21), 2365014 (Sept 28), 2362034 (Sept 25), 2394758 (Oct 28), 2365631 (Sept 29), 2377988 (Oct 10), 2387867 (Oct 20), 2392913 (Oct 27), 2386464 (Oct 18), 2395009 (Oct 28), 2392813 (Oct 27), 2394920 (Oct 28), 2389179 (Oct 22), 2393811 (Oct 27)

Systems: 2390406 (Oct 23), 2362081 (Sept 25), 2372181 (Oct 4), 2380971 (Oct 13), 2363572 (Sept 27), 2360061 (Sept 24), 2382899 (Oct 15), 2385608 (Oct 17), 2349998 (Sept 15), 2377021 (Oct 9), 2377264 (Oct 9), 2379171 (Oct 11), 2387626 (Oct 20), 2387080 (Oct 19), 2394780 (Oct 28), 2367004 (Sept 30), 2395113 (Oct 28), 2395414 (Oct 29), 2394965 (Oct 28), 2389105 (Oct 22), 2393205 (Oct 27), 2395434 (Oct 29), 2386600 (Oct 19), 2379724 (Oct 12), 2362711 (Sept 26), 2384697 (Oct 16), 2387033 (Oct 19), 2390753 (Oct 23), 2388218 (Oct 21), 2387874 (Oct 20), 2378495 (Oct 10), 2391412 (Oct 24), 2377430 (Oct 9)

Professions and economy: 2379537 (Oct 11), 2385559 (Oct 17), 2357989 (Sept 22), 2356361 (Sept 20), 2361383 (Sept 25), 2363555 (Sept 27), 2364225 (Sept 27), 2372223 (Oct 4), 2377603 (Oct 9), 2386371 (Oct 18), 2387847 (Oct 20), 2356010 (Sept 20), 2356339 (Sept 20), 2356428 (Sept 21), 2381328 (Oct 13), 2387575 (Oct 20), 2387562 (Oct 20), 2365915 (Sept 29), 2394765 (Oct 28), 2392743 (Oct 27), 2395378 (Oct 29), 2395120 (Oct 28), 2395369 (Oct 28), 2391663 (Oct 25), 2391215 (Oct 24), 2395556 (Oct 29), 2384061 (Oct 16), 2374189 (Oct 6)

Addons and guides: 2388977 (Oct 21), 2395596 (Oct 29), 2388508 (Oct 21), 2391853 (Oct 25), 2390655 (Oct 23)

All thread URLs follow the pattern `https://us.forums.blizzard.com/en/wow/t/<id>`.
