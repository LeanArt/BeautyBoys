# WoW: Forever — Blizzard-sourced research for a beginner leveling guide (Gnome Warlock, Alliance)

Researched 2026-10-29 (launch is 2026-11-04). Sources: Blizzard news (worldofwarcraft.blizzard.com / news.blizzard.com), Blizzard forums (us./eu.forums.blizzard.com, read via their Discourse JSON API), Wowhead Forever blue tracker and news RSS. Wowhead article bodies and DB pages mostly would not render (JS / bot wall), so Wowhead is used mainly for titles and dates.

Confidence tags:
- **[confirmed-official]**: a Blizzard news article or a staff forum post (Kaivax = community manager, Aggrend = developer, Nethaera = CM).
- **[beta-may-change]**: official, but from beta dev notes. The last class notes are from Oct 16 and the last racial notes from Oct 26–27. No launch patch notes have been published yet.
- **[player-claim]**: forum players, datamining, or Wowhead DB/quest text with no blue confirmation.

---

## 0. Corrections to the "already established" context

1. **Gathering professions are NOT gone.** Blizzard's official New Player's Starter Guide (Oct 28) lists **Gathering: Herbalism, Mining, Skinning; Crafting: Alchemy, Blacksmithing, Enchanting, Engineering, Leatherworking, Tailoring; Secondary: Cooking, Fishing, First Aid.** Characters get 2 primary professions plus all 3 secondary ones. The wiki list was just incomplete. [confirmed-official]
   - http://worldofwarcraft.blizzard.com/en-us/news/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever (Oct 28, 2026)
2. **"Drain Hope" is not the current Affliction capstone. The 31-point Affliction talent is now "Wrack."** Drain Hope was the name seen pre-beta and early in beta (Sept 14–15 forum posts). Blizzard's Oct 7 Warlock deep dive names **Wrack** as the 31-point gold-medal talent. Players have since made threads asking to "Change Wrack back to Drain Hope" (Oct 10, Oct 19). [confirmed-official for Wrack; Drain Hope→Wrack history is player-reported]
   - https://news.blizzard.com/en-us/article/24310968/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock (forum thread opened Oct 7, 2026)
   - https://us.forums.blizzard.com/en/wow/t/warlock-change-wrack-back-to-drain-hope/2378653 (Oct 10)
   - https://us.forums.blizzard.com/en/wow/t/change-wrack-back-to-drain-hope/2387067 (Oct 19)
   - https://us.forums.blizzard.com/en/wow/t/world-of-warcraft-forever-class-deep-dives-%E2%80%94-rogue-and-warlock/2375390/104 (Oct 11: "Why was Drain Hope replaced by a lower dps Wrack?")
3. **Dual spec cost of "10g" could not be confirmed.** Level 40 is official. Players report the cost as anything from "100g" to "an absurd amount", and say re-speccing either spec has an escalating cost while swapping between the two is free. [player-claim]
4. **The "Oct 16 gnome change"** is the Oct 16 dev-notes build (Eureka! became an 8-second buff). The **Oct 26/27 final racial pass did NOT touch Gnomes.** [confirmed-official]

---

## 1. Launch logistics and practical info

| Item | Detail | Tag | Source |
|---|---|---|---|
| Launch | **Nov 4, 2026, 3:00 p.m. Pacific, global.** Blizzard writes both "PDT" and "PST". DST ends Nov 1, so it is PST, which is 23:00 UTC. | confirmed-official | https://worldofwarcraft.blizzard.com/en-us/news/24302093 ; https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap |
| Access | Included with a WoW subscription or Game Time. Install via Battle.net, then Game Version → "World of Warcraft: Forever". | confirmed-official | Starter Guide (Oct 28) |
| Name reservation | **Oct 27 – Nov 3** (NA from Oct 27 1:00 p.m. PDT; EU 18:00 CET). **Pre-purchasers only** (Skyborne Heroic Pack / Epic Pack / Warcraft Forever Collection; footnote also mentions Digital Upgrade or Collector's Edition). **Max 3 characters total across all rulesets**, first-come first-served. | confirmed-official | https://worldofwarcraft.blizzard.com/en-us/news/24303866 (Oct 20); https://news.blizzard.com/en-gb/article/24303866/world-of-warcraft-forever-early-name-reservations-are-now-live |
| Character creation | Kaivax: "Character creation opens Tuesday, October 27. Select a ruleset and choose a name before launch." | confirmed-official | https://us.forums.blizzard.com/en/wow/t/thank-you-for-testing-the-wow-forever-beta/2390466 (Oct 23) |
| Names | Every character has a **first name + secondary name (surname)**. The full combination must be unique **per region**. Restricted words are checked across both halves. The secondary name can be hidden from nameplates (Options > Nameplates) but still shows in chat. | confirmed-official | https://news.blizzard.com/en-us/article/24304161/create-a-name-of-your-own-in-wow-forever |
| Known issue: names | An over-restrictive name filter blocked e.g. names containing "c-o-n". The fix lands with the next realm restart per region; retry afterwards. | confirmed-official | https://us.forums.blizzard.com/en/wow/t/overly-restrictive-name-check-and-fix-incoming-october-27/2394467 (Kaivax, Oct 28 01:28 UTC) |
| Known issue: Oceanic | Players on Australian servers must create Roleplay / RP-PvP characters **before** Normal or PvP ones, or they lose access to RP rulesets. Fix is in progress. | confirmed-official | https://us.forums.blizzard.com/en/wow/t/name-reservation-issue-for-oceanic-players/2393431 (Oct 27) |
| Reservation-day problems | Reservations went live late, with queues, disconnects and greyed-out rulesets. | player-claim (Wowhead news) | https://www.wowhead.com/forever/news=383608/name-reservations-for-wow-forever-delayed (Oct 27) |
| Rulesets at launch | **Normal, PvP, Roleplay, Roleplay-PvP** (RP-PvP added Oct 22 by Aggrend). **Hardcore comes "sometime after launch", no date.** | confirmed-official | https://news.blizzard.com/en-us/article/24302070/updated-10-22-choose-your-ruleset-in-world-of-warcraft-forever ; https://us.forums.blizzard.com/en/wow/t/the-roleplay-pvp-ruleset-is-coming-to-wow-forever/2389502 (Aggrend, Oct 22) |
| Realm structure | **Realmless.** You pick a ruleset, not a realm, and each ruleset is one "broad player ecosystem". Grouping, dungeons and raids are same-ruleset and same-faction only. Battlegrounds can mix rulesets (except Hardcore). You can't move a character between rulesets (exception: a dead Hardcore character can transfer out). Collections and Legacy points are account-wide (Hardcore is special). | confirmed-official | Ruleset article (updated Oct 22); Deep Dive panel recap https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap |
| PvP ruleset faction lock | On the PvP ruleset, an account can make characters for **only one faction**. Normal / RP allow both. The article doesn't say which rule RP-PvP uses. Faction-balance systems may temporarily limit creation for one faction (as in SoD). | confirmed-official | Ruleset article |
| Language | Preferred online language is account-wide with a 24-hour change cooldown (Options > Languages and Social). | confirmed-official | Ruleset article |
| Layering | Blizzard calls it **"world instances."** Dev notes: "Creating or changing party composition may transfer players to a different world instance" (Sept 24 known issue); "Adjustments have been made to world instances" and "Party leaders should no longer be transferred…" (Oct 1); "Players can no longer accept the 'refresh world' prompt while in combat" (Oct 16). Grouping can move you to your party's world instance. | confirmed-official / beta-may-change | https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-26/2360696 |
| Regional hardware | The Oct 21 stress test ran "on its proper regional hardware". Oceanic players use Australian-based servers. | confirmed-official | https://us.forums.blizzard.com/en/wow/t/heads-up-wow-forever-stress-test-on-october-21/2387920 (Oct 20) |
| Queues | No official guidance on queues. Beta players reported login queues of 22k+ and "no realms available" disconnects. A Sept 27 queue bug was fixed. Launch-week queues are likely. | player-claim; Kaivax fix confirmed | https://eu.forums.blizzard.com/en/wow/t/22000-login-queue-during-the-beta-%E2%80%94-what-happens-at-launch/629259 ; https://us.forums.blizzard.com/en/wow/t/realm-is-full/2363282/19 (Kaivax, Sept 27) |
| Mob tagging / crowding | Tagging is Classic-style (first tag). Beta launch had about 300 players in Coldridge Valley fighting over about 20 wolves. 650+ post thread asking for retail-style shared tagging, **no blue response found**. Guide tip: group up for kill quests in starter zones on launch day. | player-claim | https://us.forums.blizzard.com/en/wow/t/mob-tagging-needs-to-be-reverted-to-the-same-as-retail/2352890 ; https://us.forums.blizzard.com/en/wow/t/unshared-tags-do-not-work-with-realmless-tech/2361742/25 |
| RMT / economy holds | Accounts suspected of RMT can get a **Temporary Economy Hold** (restricted trade, mail, guild bank and AH) until investigated. A warning appears when trading with strangers. Don't buy gold. | confirmed-official | https://us.forums.blizzard.com/en/wow/t/temporary-economy-holds-for-rmt/2381433 (Oct 13); https://us.forums.blizzard.com/en/wow/t/actions-taken-against-botting-and-rmt/2368705 (Oct 1) |
| GPU requirement | Needs AMD GCN1 / NVIDIA Maxwell / Intel Skylake or newer (e.g. GTX 750 Ti, HD 7850, Intel HD 530). Older GPUs such as GTX 760/770/780 are **not supported**. Full specs are on the Battle.net Shop. | confirmed-official | https://worldofwarcraft.blizzard.com/en-us/news/24301512/world-of-warcraft-forever-gpu-requirements (Sept 17) |
| Experience presets | First login offers **Classic** (SD models, no quest blobs, One-bag off, transmog off, classic keybinds/UI) or **Enhanced** (HD, quest markers, One-bag on, transmog on, strafe keys, centralized UI). Blizzard recommends Enhanced if unsure. HD/SD is per character. Controller support is in beta. | confirmed-official | Starter Guide (Oct 28) |
| New-player tutorial | "Added a new tutorial experience for new players." | confirmed-official (Oct 16 build) | dev notes post #6 |
| Raids | Barrow Deeps (10), Hyjal Summit (20, 13 bosses), Onyxia (40). **All unlock Dec 9.** Onyxia needs the Drakefire Amulet. | confirmed-official | https://worldofwarcraft.blizzard.com/en-us/news/24303009 (Oct 20) |

---

## 2. Gnome racials: final known state

Official changelog history (dev notes thread https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-26/2360696 , EU mirror https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-26-october/631316):

- **Pre-beta / beta start (Sept 12–15, player listings):** Eureka! = "reduced cost and 10% increased damage or healing on next 3 spells or abilities". Players said the cost reduction was 50% of mana. Escape Artist = instant, brief immunity to roots and snares. Expansive Mind (passive) = +5% maximum mana/rage/energy. Engineering Specialization (passive) = "more reliable engineering devices". [player-claim] https://us.forums.blizzard.com/en/wow/t/updated-racials/2347553 ; https://us.forums.blizzard.com/en/wow/t/pvp-whats-the-deal-with-gnome-racials/2349720
- **Sept 24:** "Changed Eureka on every class to a 10% discount on Mana, Rage, or Energy abilities." [confirmed-official]
- **Oct 1:** "Eureka! no longer benefits periodic effects at all. Channeled spells do not count as periodics." Known issue: Eureka didn't affect every damage/heal spell for some classes (marked as fixed in a later build). [confirmed-official]
- **Oct 16:** "Eureka!: Now an 8 second buff with no charges. Same effect on damage and ability costs. Now also benefits Power Word: Shield." "Eureka! cannot correctly be used while in stealth or invisibility." [confirmed-official / beta-may-change]
- **Oct 26/27 final racial pass (Human, Dwarf, Tauren, Orc, Troll, Undead, Skyborne): no Gnome entries.** [confirmed-official]

**Best reconstruction of launch Gnome kit (verify in-game on Nov 4):**
- **Eureka! (active):** 2-minute cooldown, **8-second buff, no charges**. While active, abilities cost **10% less** mana/rage/energy and deal **~10% more** damage/healing. Periodic effects (DoT/HoT ticks) are excluded; **channels (Drain Life, Drain Soul) still benefit.** Not usable in stealth or invisibility. The Wowhead spell DB (spell 1259813, Warrior variant) shows 8s / 2 min with effect values -9% cost and +11% damage, which may be a rounding or data quirk. https://www.wowhead.com/forever/spell=1259813/eureka [official structure; numbers partly player/DB]
- **Expansive Mind (passive):** +5% max mana/rage/energy. [player-claim; no dated official change found]
- **Escape Artist (active):** instant, short immunity to roots/snares. Players say about 3s with a 2-minute CD. [player-claim]
- **Engineering Specialization (passive):** engineering devices fail/backfire less. Wowhead says 20% reduction. [player-claim / DB] https://www.wowhead.com/forever/spell=20593/engineering-specialization
- **What this means for a Gnome Warlock (player analysis):** Eureka doesn't boost DoT ticks (Corruption, Banes, Immolate ticks). It helps Shadow Bolt, Soul Fire, Searing Pain, Incinerate and Conflagrate, plus channels (Drain Life/Drain Soul). Use it with a burst of direct casts or a long drain. Players argue Human is the better Alliance warlock on paper (Human Spirit is now +10% Spirit, and Life Tap scales with Spirit). The only Alliance warlock races are Human and Gnome. [player-claim] https://us.forums.blizzard.com/en/wow/t/no-reason-to-roll-gnome-warlock-with-eureka-nerf/2369299 (Oct 2); https://us.forums.blizzard.com/en/wow/t/gnome-warlock-eureka-the-october-1-dot-nerf-conflicts-with-blizzards-october-7-affliction-design/2375151 (Oct 7)
- Related final racial changes (Oct 26, official): **Human** Ruthless +1% crit (was 2%), Human Spirit +10% Spirit (was 5%). **Orc** gets back "Command" (+5% Warlock/Hunter pet damage), Horde only. Design note: weapon specialization racials will **not** return.

---

## 3. Warlock: baseline design and latest changes

### 3a. Baseline (Blizzard class deep dive, Oct 7) [confirmed-official / beta-may-change]
https://news.blizzard.com/en-us/article/24310968/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock
- **Banes:** Curse of Agony becomes **Bane of Agony** and Curse of Doom becomes **Bane of Doom**. Only **one Bane per Warlock per target**. Curse of the Elements now covers all magic damage. **Curse of Shadows removed.**
- **Firestone / Spellstone** are now **weapon imbues** that stack with Wizard Oil. Firestone gives Fire damage and crit; Spellstone gives Shadow damage and spell haste.
- **Life Tap scales with Spirit.**
- **Drain Soul:** each tick has a growing chance to give a Soul Shard, guaranteed eventually.
- **Pets scale from the summoner's stats**, so spell power and stamina matter for pets.
- **Talents start at level 10.** Milestone ("gold medal") talents at 11 / **16 (new)** / 21 / 31 points. Change talents (including Legacy talents) at a class trainer in a major city. **Dual spec at level 40.**
- **Affliction:** Improved Life Tap is now row 1. New talents: Malediction, Improved Drains, Pandemic, Malevolence, Soul Siphon. Curse of Exhaustion is the 16-point talent. **Wrack** is the 31-point talent (Shadow damage every second; target takes +10% from your other Shadow DoTs for 6s). Improved Drain Soul renamed Soul Harvest. Grim Reach and Dark Pact were removed in the deep dive (**Grim Reach came back Oct 16, see below**).
- **Demonology:** **Demonic Sacrifice** is now the 11-point talent with 2-hour effects (Imp gives Shadow damage, Voidwalker restores mana, Succubus/Incubus gives Fire damage, Felhunter restores health). Fel Domination is the 16-point talent. **Soul Link** is the 21-point talent. New: Demonic Aegis, Fel Vitality, Demonic Energies, Decimation, Demonic Brand, Improved Felhunter, Demonic Knowledge. Master Demonologist redesigned. **Demonic Pact** is the 31-point talent and requires Soul Link: summoning a *different* pet no longer cancels Demonic Sacrifice.
- **Destruction:** Destructive Reach moved to row 1. Aftermath redesigned (Conflagrate can Daze). Ruin is now row 3. **Conflagrate** is the 16-point talent. New: Molten Skin, Fire and Brimstone. **Bane of Havoc** is the 21-point talent. **Shadow and Flame** (Conflag buffs Shadow, Shadowburn buffs Fire, chance to not consume Immolate, Shadowburn shard refund). **Incinerate** is the 31-point talent and requires Bane of Havoc (2.5s cast, +25% damage if the target has Immolate).
- Staff corrections in that thread (Nethaera, Oct 7) were Rogue-only.

### 3b. Warlock patch history in dev notes [confirmed-official / beta-may-change]
- **Sept 24:** Life Tap tooltip shows life converted, scales only with Spirit. Voidwalker Sacrifice scales with 10% of the Warlock's spell healing. Known issue: Banes/Curses don't track properly if you drop and re-acquire the target.
- **Oct 1:** Drain Soul is now interrupted when you start another cast. Incubus model replaced. **Hellfire can crit.** Soul Harvesting renamed Soul Harvest (now really grants +50/100% mana regen). Pet **Aggressive mode** is back (in the pet tab of the spellbook).
- **Oct 8:** Your **current pet is stunned while you summon a new one**. Shadow Bolt ranks 1–4 retuned so every new rank is an upgrade. Demonic Brand bonus pet damage is high-threat only when it deals Shadow damage.
- **Oct 16 (latest class changes):** Summon Incubus no longer free with the Reagent Economy Legacy perk. Fixed multiple Curse of Recklessness debuffs stacking. **Affliction: Malediction replaced by Grim Reach (+10/20% Affliction spell range); Shadow Mastery now +2/4/6/8/10% Shadow damage (was 1–5%).** Demonology: fixed Soul Link not castable on the pet. **Destruction: Destructive Reach now +10/20% range of Destruction spells.**
- **Oct 26/27:** No warlock entries. Racials only (Orc Command +5% pet damage).
- **Undocumented Oct 15/16 pet nerf:** players report large pet HP and damage losses (e.g. "Succubus 850 HP at level 30", "VW HP reduced ~50%"). 250+ post thread, **no blue reply**. Later posts say it "smoothed out a bit" and that leveling is still fine. [player-claim] https://us.forums.blizzard.com/en/wow/t/warlock-pets-badly-nerfed-bug-or-intentional/2384437 (Oct 16–18)
- **Caution:** Wowhead's Forever RSS also carries *retail* (Midnight 12.1.5) hotfixes, e.g. Oct 27 "Unstable Affliction +20%" and "Rain of Fire +20%". **These are not Forever changes.**

### 3c. Warlock forum feedback relevant to a beginner [player-claim]
- Leveling feels slow early because base spell damage was cut, so **spell power gear matters** (pets scale off it too). Early mana is the bottleneck (about 8 Shadow Bolts, then Life Tap). **Imp is weak early** (Forever Imp Firebolt at level 6 hits 3–6 vs 7–10 in Era). The **Voidwalker takes over at level 10**. Succubus is strong DPS when you don't need a tank. Buy **Demonic Grimoires** from the demon trainer next to the warlock trainer to rank up pet spells. Drain-tanking "comes online at ~23 (18 with Talented)".
  - https://us.forums.blizzard.com/en/wow/t/warlock-in-forever-feedback-and-suggestions/2379496 (Oct 11–17)
  - https://us.forums.blizzard.com/en/wow/t/warlock-leveling-pet/2361564 (Sept 25)
  - https://us.forums.blizzard.com/en/wow/t/warlock-imp-is-useless/2374815 (Oct 7)
  - https://eu.forums.blizzard.com/en/wow/t/the-state-of-warlocks-in-foreverall-3-specs-are-still-shadow-bolt-spam-not-working-as-intended/634946 (Oct 11)
- Spec opinions: **Demonology called "likely the best tree"** (Demonic Brand praised). Affliction "much improved" but Wrack weak. Destruction "quite good" but Incinerate a boring capstone, and Shadow Bolt still dominates all specs. One player recommends Affliction (DoT plus Fear kiting, drains) as the classic leveling approach.
  - https://us.forums.blizzard.com/en/wow/t/warlock-leveling-spec-to-40-choices-pve/2373529 (Oct 6)
  - https://us.forums.blizzard.com/en/wow/t/wow-forever-destruction-warlock-filler/2369247 (Oct 2)
- **Decimation** (Demo) mostly buffs Soul Fire, which you only learn at 48, so it's weak while leveling. https://us.forums.blizzard.com/en/wow/t/warlock-demonology-leveling/2371752 (Oct 4)
- Range complaints (Fear stuck at 20 yards, curses at 30) were raised before Oct 16. Grim Reach's return partly addresses this.
- **Soul Shards are still bag items** ("bag tax"). The soul bag display was buggy in beta. The **Reagent Economy** Legacy perk removes purchasable class reagents.
- **Class mount (Felsteed / Dreadsteed): status unclear.** One player asked "Why were warlock mounts removed?" (Oct 11). Others say there is "No info on this yet" (Oct 5) or argue it is still a free spell at 40. **No blue answer found.** The guide should say "check your trainer at 40". https://us.forums.blizzard.com/en/wow/t/warlock-and-paladin-class-mounts/2370227 ; https://us.forums.blizzard.com/en/wow/t/alliance-warlocks-are-unicorns/2372552/14

---

## 4. Professions (gathering included)

- **All gathering professions exist:** Herbalism, Mining, Skinning (primary); Fishing (secondary). 2 primary + Cooking/Fishing/First Aid. Hotkey K opens Professions. [confirmed-official] Starter Guide (Oct 28)
- Dev notes about gathering [confirmed-official / beta-may-change]:
  - Elwynn: you can learn Skinning from Helene Peltskinner even while on her quest (Sept 24).
  - **Fewer Poor Copper Vein nodes in starter areas**, and **creatures can only be skinned once before disappearing** (Oct 1).
  - Tauren Cultivation herbs have level requirements (Sept 24).
- **Legacy points only count non-gathering primary professions** (150/225/300 skill each). Gathering professions give no Legacy challenge points. [confirmed-official] https://news.blizzard.com/en-us/article/24307383/get-to-know-the-world-of-warcraft-forever-legacy-system
- **Bountiful Harvest** (Legacy perk) gives more Scarce resources from Mining, Herbalism and Skinning. A player quotes it as +20%. [official perk; % is a player-claim]
- **Camp objects at profession skill 20** [confirmed-official] https://news.blizzard.com/en-us/article/24301516/gather-around-the-campfire-in-world-of-warcraft-forever (Oct 21):
  - Cooking (skill 1): Basic Campfire, up to 3 features. Cooks can upgrade it to hold 5 or 10.
  - First Aid: First Aid Kit (+Stamina)
  - Fishing: Fishing Bowl (+8% stats)
  - Alchemy: Mana Well
  - Blacksmithing: Sharpening Wheel (+Str)
  - Enchanting: Enchanted Lute
  - Engineering: Reagent Bot (sells reagents)
  - **Herbalism: Incense Candle (+2–25 Int)**
  - **Leatherworking: Camp Tent (+5% of a level rested XP)**
  - **Skinning: Camp Chair (+2% crit)**
  - Tailoring: Faction Banner (+Spirit)
  - Camp buffs share a 1-hour cooldown, need about 1 minute sitting nearby, and don't stack with the matching class buffs. Skill-20 items come from starter quests or trainers; 140+ items come from dungeon/raid Blueprints. **On PvP rulesets, camps can be attacked.**
- **Economy feedback** [player-claim]:
  - Mats are flooding the single AH (realmless), and leather is cheap: https://us.forums.blizzard.com/en/wow/t/bind-on-pick-up-miningleatherherbalism/2366975 (Sept 30)
  - Starter zones give 6s → 12s at exit (gold intake about doubled). Gathering in starter zones is lucrative: one player skinned 5 stacks of Ruined Leather Scraps at 1s40 each. https://us.forums.blizzard.com/en/wow/t/xp-gain-rate-and-professions/2357319 (Sept 21–22)
  - Some "profession perk" lists online (Mining +5% HP, etc.) are **fabricated / AI-hallucinated**; players couldn't find them in-game: https://us.forums.blizzard.com/en/wow/t/skinning-perk-vs-mining-and-herbalism/2380945 (Oct 13)
- Vendor/AH changes [confirmed-official]:
  - Selling a BoE item whose appearance you haven't collected makes it soulbound (Oct 1).
  - **Vendor sell prices of many profession-made items were reduced** (Oct 16), so don't plan to vendor crafted goods.
  - Crafted common/uncommon wands sell for 1c (Oct 1).
  - AH shows an equippable-level column and suffix stats (Oct 16).
  - Scrolls now trigger the GCD (Oct 16).
- **Azeroth Commerce Authority / Merchant's Favor:**
  - Official: the Legacy perk **Performance** sometimes gives extra Merchant's Favor from the ACA (Alliance) or Durotar Supply and Logistics (Horde). [confirmed-official]
  - Mechanics [player-claim / Wowhead DB]: loot Waylaid Crates in the world, fill them with materials, turn them in for Merchant's Favor, then spend it on recipes, mounts and toys. Feedback says returns are low, recipes cost 30–200+ favor, and the crafted gear is BoP. https://us.forums.blizzard.com/en/wow/t/feedback-the-azeroth-commerce-authority-is-a-horribly-implemented-good-idea/2385559 (Oct 17–21); https://www.wowhead.com/forever/currency=3402/merchants-favor
- **600+ new recipes**; Blueprint recipes drop from specific dungeon bosses. [confirmed-official] Deep Dive panel recap

---

## 5. XP and leveling pace

- **XP-per-level table is unchanged from Classic.** Wowhead's "26% reduced" article was retracted. [player-claim/datamined] https://us.forums.blizzard.com/en/wow/t/experience-requirements-significantly-reduced-in-wow-forever/2357330 (Sept 21–22)
- Dev notes [confirmed-official / beta-may-change]:
  - **Oct 1:** "Dungeon quests now reward 50% less extra experience beyond normal quest values" (dungeon quests had been heavily buffed). Some quest rewards recalibrated. Escort quests can be started with 25+ quests in the log.
  - **Oct 8:** Dungeon creature XP **+~20%**. Party XP penalty for lower-level enemies now uses each player's own level (Classic Era behavior). Aggrend confirmed this in the podcast thread: https://us.forums.blizzard.com/en/wow/t/the-wow-forever-podcast-episode-3-dive-into-dungeons-with-devs-ft-hammerdancegaming/2376010/20 (Oct 8)
  - Beta level cap was raised to 30 on Oct 1, so **nobody has tested 30–60 publicly.**
- **Rested XP:**
  - Leatherworking Camp Tent adds +5% of a level (no effect if you already have more rested than that; the "Boosted Rest" debuff blocks reuse for 1 hour). [confirmed-official]
  - Legacy **Well Rested** perk raises the rested cap and accumulation rate. [confirmed-official]
  - Campfire buffs can be gained while sitting, in a chair, sleeping, lying down or kneeling, and you can craft or buff while waiting (Sept 24). [confirmed-official]
- **Food:** "Crafted food can grant a small XP bonus and stat boosts." [confirmed-official, Deep Dive recap] Players say it's about 5% mob-kill XP. [player-claim]
- **Cozy Sleeping Bag:** about 3% XP for 2 hours, 1-hour cooldown, persists through death (player). Wowhead lists it as required level 40 and obtained from a quest/vendor (DB). [player-claim] https://us.forums.blizzard.com/en/wow/t/blizzard-why-cant-we-have-this-on-retail/2363906 ; https://www.wowhead.com/forever/guide/cozy-sleeping-bag-locations-rewards
- **Pace opinions** [player-claim]:
  - 1–30 is "about the same as Classic". Beta felt faster because players already knew the game, had 16 free Legacy points (Talented), and could farm gold/gear for alts. https://us.forums.blizzard.com/en/wow/t/12-hours-to-level-30/2387246 (Oct 20)
  - 1–10 takes a couple of hours; 10–30 a few days; mobs are easier to solo. https://us.forums.blizzard.com/en/wow/t/people-in-the-beta-is-leveling-too-fast/2389141 (Oct 22)
- Blizzard stance: leveling is "equally important to endgame". **No flying, no level scaling.** [confirmed-official, What's Next recap]

---

## 6. Alliance / Gnome leveling path

- **Blizzard has published no intended leveling path.** [not found]
- **Gnomes still start in Coldridge Valley, Dun Morogh, shared with Dwarves.** The official known-issues list mentions "Coldridge Valley does not reveal on the map when explored" (Sept 17/18). Players report Coldridge → Kharanos → Loch Modan, with only a few new quests in Dun Morogh (nothing at the Ironforge airfield or the western mountains). [official mention + player-claim]
  - https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-known-issues-october-8/2352687
  - https://us.forums.blizzard.com/en/wow/t/wasted-opportunities-in-alliance-starter-zones/2366800 (Sept 30)
  - https://us.forums.blizzard.com/en/wow/t/so1000-new-quests-eh/2359285/19 (Sept 23)
- **Hall of Thanes (13–18)** is beneath Ironforge, an Alliance-side entrance. [confirmed-official] Its questline starts in **Kharanos with "Visitor to Dun Morogh" (Beldin Steelgrill)**. [player-claim] https://us.forums.blizzard.com/en/wow/t/quest-for-last-boss-hall-of-thanes/2354410 (Sept 19)
- A player-posted "new" Alliance route (Human perspective): **Elwynn 1–13 → Hall of Thanes 13–15 → Westfall 15–19 → Deadmines 19–21**, vs the old zone-hopping route. The player found it smoother: "You never have to hop from zone to zone." Another sample route places Wetlands at 24–30, between Ashenvale and Stonetalon. [player-claim] https://eu.forums.blizzard.com/en/wow/t/leveling-has-changed-is-it-for-the-better/630018 (Sept 19)
- **New dungeons (official, Oct 20):** https://worldofwarcraft.blizzard.com/en-us/news/24301455

  | Dungeon | Levels | Location / notes |
  |---|---|---|
  | Hall of Thanes | 13–18 | Beneath Ironforge |
  | Ruins of Lordaeron | 15–20 | Horde side |
  | Excavation Site | 24–29 | Wetlands. The Oct 1 notes said 26–31; use the newer article. |
  | City of Dalaran | 28–33 | Alterac. Alliance start: "An Alarming Request" from Emissary Jacques in **Southshore**; enter through the sewers. |
  | The Drowned City | 35–40 | Underwater, west of Grom'gol, STV |
  | Krol'dok Stronghold | 40–45 | Riverglades. Kaivax corrected the level range Sept 15: https://eu.forums.blizzard.com/en/wow/t/krol%E2%80%99dok-stronghold/628618 |
  | Alcaz Prison | 48–53 | Dustwallow |
  | Blackmaw Hold | 55–60 | Azshara |
  | Shaper's Terrace | 58–60 | Un'Goro |

- **New zones** (What's Next panel recap, official): https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap
  - **Riverglades:** mid-30s to mid-40s, 150+ quests. Wowhead DB says 36–44, contested.
  - **Shen'dralas:** between Mulgore and Desolace (Shen'dralar / Eldre'Thalas / centaur). No level given.
  - **Mount Hyjal:** Archimonde aftermath; raid hub. No level given.
  - **Zephras Isle:** Skyborne start, 1–12.
  - **Darkspear Islands:** 15v15 battleground.
- **Transport:** a boat from the **southern-most dock of Stormwind Harbor to Auberdine** (Wowhead quest text "Business in Auberdine"). Players also report Auberdine ↔ Southshore boats. [player-claim / DB] https://www.wowhead.com/forever/quest=97894/business-in-auberdine ; https://us.forums.blizzard.com/en/wow/t/logic-of-new-transit-routes/2356588
- **Library books** [player-claim / Wowhead news]: collect books across Azeroth. 10 books → necklace (ilvl 25); 20 → caster or melee ring (the melee ring is no longer Rogue-only); a level 30 turn-in for 25 books. Starts with Elwynn "Book Return" / Stormwind Library (the Book Bag was fixed Sept 24, official).
  - https://www.wowhead.com/forever/news/everyone-can-collect-books-for-rewards-in-wow-forever-383141
  - https://us.forums.blizzard.com/en/wow/t/library-books-are-a-great-idea-but-the-reward-thresholds-feel-way-too-high/2363572
- Quest changes: Mor'ladim (Duskwood) now also gives a caster ring; Nesingwary adds options; **unique dungeon boss items are blue quality**. [confirmed-official, Deep Dive recap]

---

## 7. Legacy system (beginner-relevant) [confirmed-official unless noted]

Source: https://news.blizzard.com/en-us/article/24307383/get-to-know-the-world-of-warcraft-forever-legacy-system

- **65 challenges, 1 point each, account-wide** (non-Hardcore). Unlocked by your first point: usually **first character to level 25**, or **150 skill in a non-gathering primary profession**, or exploring the whole world map. Open with the shield icon or **Y**.
- Categories:
  - Classes (27 points): 25/45/60 per class
  - Tradeskills (18 points): 150/225/300 per crafting profession
  - PvP (12 points)
  - Adventure (2 points): map exploration and the Valthalak set chain
  - Dungeons (3 points)
  - Raids (3 points)
- **16-point spending cap per character at launch.** One character alone can earn up to 29 points.
- Perks:
  - **Professions:** Working Overtime, Bountiful Harvest, Bartering, Performance, Master Chef, Luremaster, Dedicated Study
  - **Adventure:** Well Rested, Thrill of Adventure, High Alert, Field Guide, Field Medicine, **Talented (talent points up to 5 levels earlier)**, Frequent Flier
  - **Resourcefulness:** Gourmand, The Quick and the Dead, Reinforce, For Great Honor, Permanence, Diplomat, **Reagent Economy (no purchasable class reagents)**
- Beta-era fixes: Bartering no longer discounts training/repairs (Oct 16). Legacy respec minimum cost 1s, dropping by one respec level per hour (Oct 8; may be beta-only).
- Beginner implication: a first character's realistic early points are reaching **25** plus **crafting milestones** (2 crafting professions = up to 6 points). **Gathering doesn't earn Legacy points.** [derived]

---

## 8. Mounts, bags, dual spec

- **Mounts:**
  - Official: "The up-front mount cost moves into riding training, so you receive a mount when you learn the riding skill." No gold or level figures given. [confirmed-official, Deep Dive recap]
  - Players: riding is learned at **level 40**; 60% training shows **100g**, 100% training **1,000g**. [player-claim] https://us.forums.blizzard.com/en/wow/t/warlock-and-paladin-class-mounts/2370227 (Oct 2–13)
  - **No flying.** [confirmed-official]
  - The Heroic Pack's Cerulean Prideclaw still requires buying riding in-game. [confirmed-official]
- **Bags:**
  - Official: the Starter Guide gives **no backpack/bag counts**. "One-bag" is an Enhanced-preset UI option, not an item.
  - Players [player-claim]:
    - Starting-area quests give **6-slot bags**: https://us.forums.blizzard.com/en/wow/t/bag-space-give-us-more-at-start/2375981 (Oct 8)
    - Tailors can make 6-slot bags early.
    - A starting-area vendor reportedly sells cheap 6-slot mining/skinning/herb bags.
    - A "20 slot backpack" is mentioned by one player (unverified).
- **Dual spec:** level 40 [confirmed-official, class deep dives]. Cost not confirmed [player-claim]. https://us.forums.blizzard.com/en/wow/t/dual-talent-specilization-wow-forever/2391901 (Oct 25–26)

---

## 9. Couldn't find / open questions

- No launch-day patch notes or launch known-issues list yet (as of Oct 29). The last beta build was Oct 22. The Oct 26 racial changes and Elixir of Wisdom / Hunter tuning appear on live data, per Wowhead Oct 28 (unconfirmed hotfixes): https://www.wowhead.com/forever/news=383641/new-class-and-item-tuning-on-wow-forever-hunter-changes
- No official numbers for: backpack size, riding cost, dual-spec cost, Expansive Mind / Escape Artist / Engineering Specialization final values, Cozy Sleeping Bag values, or warlock class mount status.
- No official intended Alliance leveling route and no official level ranges for Shen'dralas or Mount Hyjal.
- No official statement on world-instance (layer) caps, queue expectations or regional separation beyond "regional hardware" and Oceanic servers in Australia.
- Whether Wrack differs between the deep-dive text and the client: one player (Oct 7) says "there is currently a difference between the Wrack implementation described in the showcase and what is present in the beta client."
