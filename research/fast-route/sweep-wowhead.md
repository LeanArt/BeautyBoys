# Sweep: Wowhead Forever database — per-zone quest inventory (Alliance, 1–60)

Researched **2026-11-05** (launch +1 day). Sweep owner: "wowhead".
Companion data file (the full machine-readable inventory, all 898 quests found):
`WORK/wowhead-forever-quests-90500-100500.json` (id, name, level where known, heuristic zone guess, objective text, URL).

## How this was done (read once, applies to every fact below)
- **Tooltip API scan.** I queried every quest id from **90500 to 100500** (10,001 ids) on the public Wowhead Forever tooltip API
  `https://nether.wowhead.com/forever/tooltip/quest/<id>` (the same endpoint `tools/wh.mjs` uses), at about 6 requests/second.
  I also sampled 9000–60000 (every 200th id), 60000–90400 (every 100th), 88000–90500 (every 5th), 100550–140000 (every 50th) and
  140000–300000 (every 500th). Outside 90500–100500 the only hits were Classic ids 9000/9200, **84400** ("The Knight and the Lady") and
  the known **65602/65603** ("What Is Love?" / "The Binding", the Incubus quests). So **new Forever quests in Wowhead's DB live in
  91208–99411**, and there are **898** of them.
- **Quest pages.** Wowhead Forever quest pages (`https://www.wowhead.com/forever/quest=<id>`) render partly in WebFetch. They show the
  **quest level** (the `experience-calculator?level=N` link), the **Series/Storyline** (chain with ids), reward items, reputation and
  objective NPC links. They do **not** show XP amounts, required level, or the start/end NPC box. I checked that the
  experience-calculator value is the quest level: quest 19 "Tharil'zun" shows `level=25`, matching its tooltip "Level 25" and Classic.
  I fetched about 75 quest pages for the route-relevant zones.
- **NPC coordinates** come from the tooltip API (`node tools/wh.mjs npc:<id>`), which returns zone id and map coords.
- **What did not render:** Wowhead Forever **zone pages** (no quest list; the Quests tab is JS), the **quest-list pages**
  (`/forever/quests/eastern-kingdoms/loch-modan`, empty), **guides** (e.g. `/forever/guide/zones-maps-locations-rewards`, title only,
  by Serenal, updated 2026/09/17) and **news bodies** (e.g. news 383574 "Repeatable Quest Experience Exploit Fixed for WoW: Forever Launch",
  title only). Plain `curl` of wowhead.com returns **403**, so I did not use it again. All Wowhead text below comes from the tooltip API
  or rendered quest pages.
- **Confidence and vintage tags.** Facts read from the Wowhead DB are `official` (per BRIEF). Their **vintage is "DB"**: Wowhead built its
  Forever DB from beta and launch client data, and a page does not say which build an entry came from. Treat DB levels as **beta-era
  unless launch-confirmed**. "Classic" = a Classic quest id that still exists in the Forever DB (carry-over). `theory` = my inference.
- URL shorthand: **Q:n** = https://www.wowhead.com/forever/quest=n · **N:n** = https://www.wowhead.com/forever/npc=n (coords from
  `nether.wowhead.com/forever/tooltip/npc/n`) · **Z:n** = https://www.wowhead.com/forever/zone=n. All accessed 2026-11-05.

---

## Route-changing findings (summary)
1. **Wowhead's Forever DB has no Riverglades quests at all.** It also has no new quests for Badlands, Tanaris, Feralas, Hinterlands,
   Searing Gorge, Un'Goro, Felwood, Burning Steppes, the Plaguelands, Winterspring or Silithus. The 898 new-id quests cover levels
   **1–42 only**: the highest is Khan Hratha at 42, Q:96222. Riverglades exists as **Z:16591 "Level 36-44"** and Shen'dralas as
   **Z:16651** (no level), but neither has quest data yet. → **35–60 cannot be built from Wowhead.** It stays Classic carry-over plus
   theory until Questie/launch guides publish ids. [official·DB, Nov 5]
2. **The Wetlands is the largest Alliance rework in the DB.** It has about **30 new quests at levels 22–34**, including a **new quest
   giver, Howin Kindfeather (Wetlands 49.4, 42.0)**, a new **Dragonmaw Retreat** chain (levels 30–34, ending with a group kill at 34), a
   Goaz Stone chain from Prospector Whelgar (levels 31–32, choice of cloak, ring or neck), and Menethil Keep additions. **The Wetlands now
   runs to about 32–34, not 30.** [official·DB]
3. **Excavation Site: Wetlands dungeon quests are level 31** (Songblade Search, Lost Relic Carry, Horrors in the Highland, Changing
   Tastes, Seeking Caitlin…). Our files say 24–29, so plan the run at **~28–31**. **Songblade Search starts in Lakeshire** (Dorin
   Songblade, Redridge 25.6, 46.4), not in the Wetlands. [official·DB]
4. **Dun Morogh has about 12 new quests at levels 6–10** in Kharanos, Brewnall, Misty Pine Refuge and Gol'Bolar. Examples: Secure the
   Mountain ×3 (8), Flintfire's Shipment (7), Frosthowl (9, a boots reward), the Misty Pine chain (8: Dawn in the Mountains, Finding Warmth,
   Rime's Wrath ×2, Treacherous Cold), Stolen Blasting Powder ×2 (10), Never Saddle on Quality (10) and Data Hoarders (10). The Hall of
   Thanes chain is 13–16. → **Leaving Dun Morogh at ~11–12 and going straight into Hall of Thanes prep works without Loch Modan.**
   [official·DB; theory for routing]
5. **Loch Modan has zero new quests in the DB** (the only hits are shaman "Call of Fire/Water" class steps). It is pure Classic, so it is
   the natural zone to **shorten or skip**. [official·DB]
6. **Westfall has a new 11-step "Toxic Soil" storyline** (Alba Fairmoon, Sentinel Hill 52.4, 53.0), levels **12 → 18**, ending inside
   **Deadmines**. It has a hard stop: **"A Dynamite Plan" needs 10 Rough Dynamite from crafting or the Auction House**, and it detours to
   Stormwind's Dwarven District. There is also "Harvesting the Harvesters" ×3 (Ozwin Ironsprocket 51.4, 32.2; level 15; Gnomeregan rep).
   [official·DB]
7. **Redridge has only 6 new quests in the DB**, despite the forum talk of "tons". Alther's Mill and Blackrock Blockade (21) are inserted
   into the Classic Blackrock Menace → Tharil'zun chain. The others are Show of Force (17) and **WANTED: Incinerator Gar'im (25;
   150 Stormwind rep, boots choice)**. [official·DB]
8. **Darkshore has about 7 new quests (13–21).** The **Stormwind → Auberdine boat breadcrumb** "Business in Auberdine" (97894) leads into
   Classic "Deep Ocean, Vast Sea" (982). The others are WANTED: Jai'vhanel (13, cloak/knife), It's All Fun and Games (17), Swelling Forces
   (20) and Baron Marinous (21, caster-orb choice). [official·DB]
9. **Duskwood, Ashenvale and Hillsbrad are nearly untouched.** Duskwood adds the Sirra Von'Indi "Valor family" chain (25–28, Darkshire).
   Ashenvale adds 3 Alliance quests (25–30). Hillsbrad adds 4 Alliance quests (27–30) plus Strahnbrad Mystery (36) and An Acquaintance in
   Southshore (40). → Their XP/hour is Classic-like; the new density is in the Wetlands, Westfall and Dun Morogh. [official·DB]
10. **Mid-30s+ content that is in the DB:** **City of Dalaran quests are level 33** (Modera's image is at **Silverpine 68.4, 45.2**).
    Stromgarde (Arathi) is 34–39. The **Drowned City (Alliance: Loremaster Dibbs, Southshore 50.4, 57.0) is 40**. The Swamp of Sorrows
    Harborage is about 34. **Desolace Magram/Gelkis rep chains are 38–42, need Honored, and run into Shen'dralas (Orgrul at 35.6, 12;
    Nerlokh at 20.8, 22.6)**. [official·DB]
11. **Some Classic chains were extended:** Claws from the Deep → Return the Statuette now continues to new 98189 → 98190/98191 (Stormwind
    turn-ins). The Nek'rosh chain gains **From the Ashes (28)**, the Greenwarden chain gains **Carnage (30)**, and Uncovering the Past
    continues into the Goaz Stone quests. Khan Hratha has a new id (96222). The **Treaty of Understanding (Hall of Thanes) id is 98423**,
    which our route was missing. [official·DB]
12. **XP amounts are not available from Wowhead pages**, so a "high XP" flag can only use level, elite/group status or boss kills. Every
    such flag below is `theory`.

---

## A. Wowhead Forever zone ids and level ranges (tooltip API, accessed 2026-11-05) [official·DB]
Retrieved with `node tools/wh.mjs zone:<id>`. These are Wowhead's displayed ranges (largely mob-level spans), **not** quest bands.

| Zone | id | Wowhead range | | Zone | id | Wowhead range |
|---|---|---|---|---|---|---|
| Dun Morogh | 1 | 1–56 (artifact) | | Desolace | 405 | 30–39 |
| Elwynn Forest | 12 | 1–10 | | Thousand Needles | 400 | 6–35 |
| Loch Modan | 38 | 10–18 | | Badlands | 3 | 36–45 |
| Westfall | 40 | 9–18 | | Swamp of Sorrows | 8 | 36–43 |
| Redridge Mountains | 44 | 15–25 | | Dustwallow Marsh | 15 | 36–61 |
| Darkshore | 148 | 11–19 | | **Riverglades** | **16591** | **36–44** |
| Duskwood | 10 | 10–30 | | **Shen'dralas** | **16651** | (none) |
| Wetlands | 11 | 20–30 | | Feralas | 357 | 41–60 |
| Ashenvale | 331 | 19–30 | | Tanaris | 440 | 40–50 |
| Hillsbrad Foothills | 267 | 20–31 | | The Hinterlands | 47 | 41–56 |
| Stonetalon Mountains | 406 | 15–25 | | Azshara | 16 | 42–55 |
| Arathi Highlands | 45 | 30–40 | | Searing Gorge | 51 | 43–56 |
| Alterac Mountains | 36 | 27–39 | | Felwood | 361 | 47–54 |
| Stranglethorn Vale | 33 | 30–50 | | Un'Goro Crater | 490 | 48–55 |
| The Barrens | 17 | 10–33 | | Western Plaguelands | 28 | 46–57 |
| Silverpine Forest | 130 | 10–20 | | Burning Steppes | 46 | 50–59 |
| Deadwind Pass | 41 | 50–60 | | Eastern Plaguelands | 139 | 54–59 |
| Zephras Isle | 16593 | 1–12 | | Winterspring / Silithus | 618 / 1377 | 55–60 / 55–59 |

New instance and zone ids found while probing ids 16400–16800: City of Dalaran **16544** (and 16560), The Drowned City **16550**,
Blackmaw Hold **16554**, Hillsbrad Foothills "Dungeon" **16562**, Ruins of Lordaeron **16611**, Excavation Site – Bael Modan **16619**
(Horde counterpart), Alcaz Prison **16620**, Half-Pint Tavern **16632** (datamined, zone), The Shaper's Terrace **16667**, Excavation
Site: Wetlands **16732**, Ruins of Gilneas **16756** (zone), Darkspear Islands battleground **16606** ("Level 30-60"), Battle for Gilneas
**16653**. Also 16508 "Burning Steppes Level 54-55" and 16510 "Elwynn Forest Level 1-8", which are probably phased copies.
Source: `nether.wowhead.com/forever/tooltip/zone/<id>`.

---

## B. Zone-by-zone inventory (route zones first)
Columns: **id · name · Lvl** (quest level; "p" = read from the quest page, "t" = tooltip, blank = unknown) · **giver / turn-in (coords)** ·
**chain / notes**. Every row: `official·DB`, URL = Q:id. "NEW" = a Forever-only id. Rows without NEW are Classic carry-overs.

### B1. Dun Morogh (Coldridge, Kharanos, Brewnall, Misty Pine, Gol'Bolar) — Forever adds ~12 quests at levels 6–10
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 96628 NEW | The Adventurer | 6p | → **Eric Brighthammer** (N:265813, **46.6, 53.8**) "near Kharanos" | Camping intro; leads to The Great Outdoors |
| 96608 NEW | The Great Outdoors | 6p | sit at **Eric's Basic Campfire** | Then learn a tradeskill and its camp item. Id was missing in our route |
| 96629 NEW | Camping 101: Cooking | – | Gremlock Pilsnor, Kharanos | Cooking unlocks campfires |
| 96047 / 96057 / 96059 NEW | Camping 101: First Aid / Tailoring / Enchanting | – | Thamner Pol (Kharanos) / Uthrar Threx (IF) / Thonys Pillarstone (IF) | Profession camp-item unlocks; also 96031 Leatherworking (Gretta Finespindle, IF), 96046 Mining, 96044 Blacksmithing, 96058 Engineering (Kharanos), 96055 Herbalism, 96056 Skinning, 96045 Alchemy (IF) |
| 98321 NEW | Flintfire's Shipment | 7p | Tongus Flintfire, Kharanos | 8 shipments from the **Grizzled Den**. 100 IF + 100 Gnomeregan rep |
| 98322 → 98319 → 98323 NEW | Secure the Mountain ×3 | 8p | **Mountaineer Gretchen** (N:271546, **44.0, 57.0**, west of Kharanos) → Mountaineer Cornelius (Grizzled Den) → Senir Whitebeard (Kharanos) | Storyline of 3. Pairs with Classic "The Grizzled Den" (313) |
| 99158 NEW | Dawn in the Mountains | 8p | → **Father Gavin** (N:1253, **57.4, 44.8**, Misty Pine Refuge) | Delivery that opens the Misty Pine group: 99159 Finding Warmth (14 firewood), 99160/99161 Rime's Wrath (10 Minor Ice Elementals, then kill **Avala**), 99162 Treacherous Cold (3 mountaineer rifles; rifle loot fixed in dev notes) — all level 8 |
| 98326 NEW | Frosthowl | 9p | **Gretta Ganter** (N:8508, **31.4, 44.6**, Brewnall) | Rare-style kill. Reward **Frosthowl's Footwarmers** (item 281322). Likely good XP/time `theory` |
| 95213 / 95214 NEW | Stolen Blasting Powder ×2 | 10p | **Quarrymaster Thesten** (N:1256, **69.0, 54.8**, Gol'Bolar) | 16 powder from troggs east of the quarry. 75 IF rep |
| 95217 NEW | The Quarry's Smith | 10p | Frast Dokner (N:1698, 68.8, 55.8) | Needs **12 Copper Bars + 4 Toughened Boar Hides** → **skip** (materials) |
| 95212 NEW | Never Saddle on Quality | 10p | → Amberstill Ranch | 6 Pristine Leopard Pelts (drop chance unknown) |
| 95041 NEW | Data Hoarders | 10p | → **Jemma Quikswitch** (N:11028, Ironforge 67.4, 43.8) | 7 Archival Data cards "around Gnomeregan". 75 Gnomeregan rep |
| 96408 → 96392 → 96390 → 96391 → 96393 NEW | A Visitor to Dun Morogh → Farsen's Watch → Nip 'Em in the Bud → Underground Map → Old Ironforge Incursion | 13p / – / – / – / 16t | Beldin Steelgrill (Kharanos) → Earthseer Farsen | Hall of Thanes prep chain (in our route already). **96408 is level 13** |
| 98574 / 98581 NEW | Hallowed Memorandum / Archaic Rune | – | Branstock Khalder / Teo Hammerstorm (Anvilmar) | Paladin and shaman class letters: **not for warlocks** |
| Classic | 179, 170, 233, 3361, 183, 182, 218, 3364, 282, 2160, 420, 384, 400, 412, 317, 313, 318, 319, 315, 310, 287, 291, 314 (Protecting the Herd, **12t**), 432, 433, 419, 413 | | | All still exist in the Forever DB (`wh.mjs`, Nov 5) |

### B2. Ironforge (Hall of Thanes and turn-ins)
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 96403 NEW | Important Heirlooms | 15t | Thom Filch | HoT |
| 96394 NEW | The Restless Dead | 15t | Afadra Dunwall | HoT |
| 96395 NEW | An Ancient Grudge | 15t | Ghostly Attendant (inside) | HoT |
| 96393 NEW | Old Ironforge Incursion | 16t | Earthseer Farsen | HoT, final boss |
| **98423** NEW | **The Treaty of Understanding** | – | → **Magni Bronzebeard** | HoT final-room tablet. **The id was missing in our route; verified with wh.mjs** |
| 98300 NEW | Word to Ironforge | – | → Magni | End of the Wetlands Howin chain (from level ~34 content) |
| 98313 NEW | For Further Study | – | → Historian Karnik | End of the Wetlands Whelgar chain |
| 98824 NEW | Prehistoric Prism | 31t | → High Explorer Magellas, Hall of Explorers | Excavation follow-up with the Titan Relic |
| 95817 / 95818 NEW | Rotgath Stonebeard / A Quick Craft | – | Rotgath Stonebeard, Great Forge | ACA advertising chain (needs crafted mats) — skip |

### B3. Loch Modan — **no new quests in the DB**
- The scan found only shaman class steps there (94465/94466 Call of Fire – Braldir Ashmantle; 94494/94501/94505 Call of Water – Norric
  Lochthane). [official·DB]
- Classic quests verified present: 416 Rat Catching (**level 11p**, rewards Burnt Hide Bracers/Cavalier's Boots, 100 IF rep), 418, 307,
  224, 298. The dev-note fix "Resupplying the Excavation" is Classic quest **273** (https://warcraft.wiki.gg/wiki/Resupplying_the_Excavation_(Classic)).
  warcraft.wiki.gg "Loch Modan (Forever)" lists no Forever changes (last edited 28 June 2024): https://warcraft.wiki.gg/wiki/Loch_Modan_(Forever)
- **Route implication (`theory`):** Loch Modan gives no Forever bonus density, so do only the cheap Thelsamar quests or skip it.

### B4. Westfall — new "Toxic Soil" storyline (12 → 18) + Harvesters
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 92742 NEW | Testing the Wells | 12p | (Alba Fairmoon) | Use the Well Water Sample Kit at **Jansen Stead** (north) and **Molsen Farm**. 50 SW rep |
| 92744 NEW | Murloc Gills | 12p | **Alba Fairmoon** (N:253092, **Sentinel Hill 52.4, 53.0**) | 7 Longshore Murloc Gills, coast |
| 92745 NEW | The State of the Mines | – | Alba | 4 Kobold Diggers (Jangolode) + 6 Riverpaw Miners (Gold Coast Quarry) |
| 92747 NEW | Moonbrook Espionage | – | Alba | 8 Suspicious Industrial Supplies, Moonbrook |
| 92748 NEW | Explosive Consultation | – | → Stormwind Dwarven District | **Detour to Stormwind** |
| 92749 NEW | A Dynamite Plan | – | Sprite Jumpsprocket (SW Dwarven District) | **Needs 10 Rough Dynamite (crafting/AH) — route blocker; likely skip the rest** |
| 92750 / 92751 NEW | Detonation at a Distance ×2 | – | SI:7 → Sprite | Stormwind |
| 92752 NEW | Explosive Consultation | – | → Alba | |
| 92753 / 92819 NEW | Destruction in Deadmines ×2 | **18t** | Alba | Plant explosives at the Deadmines forge; **a dungeon quest** (50% less bonus XP per the Oct 1 notes) |
| 92909 / 92910 / 92911 NEW | Harvesting the Harvesters ×3 | 15p | **Ozwin Ironsprocket** (N:253395, **Saldean's Farm 51.4, 32.2**) | 14 Golem Isosprings + 5 Gyrostabilizers; then 8 Isosprings + 4 Copper Modulators + a Crude Scope (a **Crude Scope is crafted** → probably skip step 3). 50 Gnomeregan rep |
| 92109 / 92110 NEW | My First Alchemy Set / My First Real Potion | – | young alchemist, Moonbrook barn | Needs 5 Empty Vials + 5 Silverleaf + 5 Peacebloom → skip unless herbalist |
| 97926 NEW | Making Do | – | → Thundris Windweaver (Auberdine) | From Baros Alexston (SW). Part of the Darkshore boat chain (B6) |
| 98021 NEW | Journey to Sentinel Hill | 13p | → Gryan Stoutmantle | **Skyborne (Zephras) breadcrumb** (High Order rep), not for gnomes |
| Classic | 12 The People's Militia (**12p**; series 12→13→14), 36, 22, 65 | | | Present |
- Toxic Soil series as listed on Q:92744 (11 steps: 92742, 92744, 92745, 92747, 92748, 92749, 92750, 92751, 92752, 92753, 92819). [official·DB]

### B5. Redridge Mountains — 6 new (17–25), plus the ACA hub
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 98407 NEW | Show of Force | 17p | **Deputy Feldon** (N:1070, **25.4, 60.0**) | 5 Spiked Collars from Redridge Thrashers. 100 SW rep |
| 98386 NEW | Alther's Mill | 21p | **Foreman Oslow** (N:341, **27.0, 48.4**, Lakeshire bridge) | 12 Greater Tarantulas + 6 Tarantula Eggs at Alther's Mill |
| 98387 NEW | Blackrock Blockade | 21p | → **Marshal Marris** (N:382, 28.2, 49.0) | 8 Stolen Weapons + 10 Blackrock Supplies |
| — | Chain | | | Series on Q:98386/Q:19: **Blackrock Menace (20) → Alther's Mill (98386) + Blackrock Blockade (98387) → Tharil'zun (19, level 25, elite)** |
| 95999 NEW | WANTED: Incinerator Gar'im | 25p/t | → **Magistrate Solomon** (N:344, 24.8, 44.2) | Choice of Incinerator's Boots / Alacritous Treads / Disjointed Shoes; **150 SW rep**. Likely elite/rare `theory` |
| 98247 NEW | Shipping Label | – | → ACA trade hub, Redridge | Merchant's Favor intro (2,000 rep + 50 MF per gamedata.md) |
| 95816 NEW | Sign Me Up! | – | → Elaine Compton | ACA advertising (crafting) chain → skip |
| 95772 NEW | **Songblade Search** | **31p** | **Dorin Songblade** (N:956, **Lakeshire 25.6, 46.4**) | **Excavation Site breadcrumb starts in Redridge**; turn-in chain 95795 Fallen in the Fen ("Return to Dorin") |
| Classic | 244, 118, 145 (Messenger to Darkshire), 19 Tharil'zun (25) | | | Present |

### B6. Darkshore — ~7 new (13–21) + the boat chain
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 97894 NEW | Business in Auberdine | – | Borgus (Stormwind Harbor) → **Gorbold Steelhand** (N:6301, Auberdine) | Take the boat from the **southern-most dock of Stormwind Harbor**. Series → **Deep Ocean, Vast Sea (982, Classic)** |
| 97914 NEW | Expanding Horizons | 17p | Thundris Windweaver (Auberdine) → **Baros Alexston** (N:1646, Stormwind 49.0, 30.2) | Series: 97914 → 97926 Making Do (back to Thundris). Free XP if you are shuttling SW↔Auberdine anyway `theory` |
| 98025 NEW | WANTED: Jai'vhanel | 13p | → **Sentinel Glynda Nal'Shea** (N:2930, **37.6, 43.4**) | Black owl north of Ameth'Aran. Choice of **Swordfeather Cloak** (281289) / Darnassian Knife. 150 Darnassus rep |
| 98042 NEW | It's All Fun and Games Until... | 17p | → Thundris (Auberdine) | Peerless Eye from Twilight Disciple/Thug at the **Master's Glaive**. 100 Darn rep |
| 98013 NEW | Swelling Forces | 20p | **Arbal** (N:270269, **Grove of the Ancients 43.6, 76.4**) | 12 Myrmidons + 8 Sorceresses + 6 Warriors (Stormscale naga). 150 Darn rep |
| 98028 NEW | Baron Marinous | 21p | → **Onu** (N:3616, 43.4, 76.2) | Clouded Water Globe. Choice of **Mathystra Channeling Orb** (281291, likely a caster off-hand) / Onu's Patience |
| 98209 NEW | Bloom of the Heavens (pt 2) | – | from Sylessa (Menethil) → Thundris (Auberdine) | Uses the **Menethil ↔ Auberdine boat** |
| Classic | 982, 971 Knowledge in the Deeps (**23t**), 1275 Researching the Corruption (**24t**) | | | BFD quests present |

### B7. Wetlands — ~30 new (22–34): the main Forever density for Alliance in the 20s–30s
Hubs: **Menethil Harbor/Keep** (Captain Stoutfist N:2104 **9.8, 57.4**; James Halloran N:2094 **8.4, 55.8**; Caitlin Grassman N:1480
**11.6, 58.4**; Valstag Ironjaw N:2086 **10.0, 56.8**; Sylessa Duskwhisper N:270844 **8.0, 55.8**), **Howin Kindfeather's camp**
(N:270637, **49.4, 42.0**, "east of Menethil along the road", Wildhammer rep), **Whelgar's Excavation Site** (Prospector Whelgar N:1077
**38.8, 52.2**), **Rethiel the Greenwarden** (N:1244 **56.2, 40.4**, The Green Belt).

| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 98282 NEW | Alchemical Hazards | 22p | Caitlin Grassman | Unruptured Stalker Gland from **Thelgen Rock** spiders. Reward: Strong Anti-Venom (item 6453; useful against the Excavation diseases `theory`) |
| 98197 NEW | Spoils of War | 22p | Valstag Ironjaw | 6 Khaz Modan Timber + 30 Khaz Modan Iron **underwater** in Menethil Harbor. 100 IF rep |
| 98189 NEW | Return the Statuette | 25p | → Captain Stoutfist | **Extends Classic chain** 279 Claws from the Deep → 281 → 284 → 285 → 286 Return the Statuette (→ Karl Boran) → **98189 → 98190 A Friend of the Family (Bolvar, SW Keep) → 98191 (Lord Grayson Shadowbreaker, Cathedral)**. The last two are Stormwind trips: do them only if passing through `theory` |
| 98072 NEW | Crocs of the Sky | 27p | James Halloran | 8 Pristine Crimson Scales from whelps east along the Green Belt. 100 SW rep. Series: **98072 → 98240 Crimson Crate Delivery (→ Howin) → 98245 Razormaw Needling (29p)** |
| 98221 NEW | From the Ashes | 28p | Captain Stoutfist | Destroy 4 Attack Plans at **Angerfang Encampment**. **Inserted into Classic chain** 473 → 464 War Banners → **98221** → 465 Nek'rosh's Gambit → 474 Defeat Nek'rosh (**32t**). 100 IF rep |
| 98815 | Highland Hides | 28t | James Halloran | 4 Thicket Raptor Hides (Excavation area). Reported bugged in beta (gamedata.md) |
| 98208 → 98209 NEW | Bloom of the Heavens ×2 | 29p | Sylessa Duskwhisper → Thundris (Auberdine) | Nord'el from the wreck south of the city (murloc raiders). Reward **Bouquet of Auberdine Flowers**. 100 Darn rep |
| 98230 NEW | This Land Was Their Land | 29p | → Howin Kindfeather | Intro to Howin. 10 Wildhammer rep |
| 98245 / 98246 NEW | Razormaw Needling / Trying Times | 29p / – | Howin | 10 Razormaw Incisors / 12 Perfect Razormaw Eggs |
| 98291 NEW | Death to the Dragonmaw | 30p/t | Howin | 8 Reclaimers + 5 Soulbinders + 3 Infiltrators in **Dragonmaw Retreat** |
| 98293 NEW | Forced Disarmament | 30p/t | → Captain Stoutfist | 30 Dragonmaw Armaments in Dragonmaw Retreat. 100 Wildhammer rep |
| 98297 NEW | Stopping the Cycle | 34p/t | Howin | Kill the Subdued Dragonspawn at the **Dragonmaw Gates** after its warlock captors. Text: "You'll certainly need friends" → **group quest**. Choice of **Fallen Dragon's Scepter** (281312) / Trusty Sword / Subdued Dragon's Fang. 150 Wildhammer rep. **Likely high XP but needs a group** `theory` |
| 98300 NEW | Word to Ironforge | – | → Magni | Chain end |
| 98283 NEW | Carnage | 30p/t | → Rethiel | **Inserted at the end of the Classic Greenwarden chain**: 463 → 276 Tramping Paws → 277 Fire Taboo → 275 Blisters on the Land → **98283** (lure with Malignant Rotclaw Flesh). Choice of Razormaw Shorts / Carnage Trousers |
| 98216 NEW | Understanding Our Present | 31t | Prospector Whelgar | **Continues Classic 299 Uncovering the Past**. Goaz Stone at the Goaz Warder |
| 98310 NEW | Gleaning Our Future | 32p | Whelgar | Hearts of Ados/Modr/Golm/Neru (golems). Choice of **Golem War Cloak / Rune-Etched Ring / Giantstone Medallion**. Next: 98313 For Further Study (→ Ironforge) |
| 98223 NEW | Old Habits | – | → Captain Stoutfist | Tattered Spellbook (drop/starter) |
| 98459 / 98461 NEW | A Lack of Virtue / Unrequited Love | – | → Bart Tidewater / Tarrel Rockweaver | Menethil delivery pair (cheap if in town) |
| Excavation Site: Wetlands (dungeon) | 95737 Seeking Caitlin, 95647 Lost in the Thicket Things, 95809 Heartwoven, 95697 Changing Tastes, 95646 Horrors in the Highland, 95810 Lost Relic Carry, 98824 Prehistoric Prism, 95772/95795 Songblade | **31t (all)** | Caitlin (Menethil), Rethiel, Dorin Songblade (Redridge), Whelgar | **Level 31 in the DB** vs "24–29" in our research. Horde-side: 95663 Dragonmaw Rumors, 95682 Open the Maw, 95664 Elder Knowledge |
| Classic | 279, 463, 484, 305 (all present); 474 Defeat Nek'rosh **32t** | | | |

### B8. Duskwood — Sirra Von'Indi "Valor family" (25–28) + RoL letter
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 96137 NEW | Ira's Dagger | 25p | **Sirra Von'Indi** (N:268, **Darkshire 72.4, 47.4**) | 10 Young Black Ravagers + 7 Black Ravagers |
| 96138 NEW | Merrick's Bow | 28p | Sirra | 8 Splinter Fist Warriors + 4 Taskmasters (gnoll camps) |
| 96139 / 98447 NEW | The Valor Family ×2 | 27p | Sirra | Search **Raven Hill**, then return with the weapons to free the ghosts |
| 98372 / 99267 NEW | An Unfortunate End | – | dead Night Watchman (found) | Reward **Night Watchman's Torch** (280612, light source) |
| 95161 NEW | Remember That I Love You (pt 2) | – | → Avette Fellwood | Continues **92415** (Ruins of Lordaeron, level 22t → Orphan Matron Nightingale, SW) |
| Classic | 56 The Night Watch, 145 | | | Present |

### B9. Ashenvale (Alliance) — 3 new
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 95042 NEW | Seeking the Kor Gem | 25t | → Ulric Frostveil | Corrupted Kor Gem |
| 98027 NEW | Gleaming Crescent Necklace | 26p | → **Maliynn** (N:3961, **Astranaar 36.6, 49.8**) | Starts from a found item (279274). Reward Replica Crescent Necklace. 100 Darn rep |
| 98417 → 98418 NEW | Vengeful Trail → Shared Fury | 30p | **Maseara Autumnmoon** (N:221269, ~**81.0, 50.2 / 86.2, 45.8**, Forest Song area) | Satyrnaar; 5 each of 4 Xavian/Felsworn types |
| Horde (skip) | 98251/98252 Va'xug Firefure (Thunder Bluff rep) | 22p | | |
| Classic | 1200 Blackfathom Villainy **27t**, 1198 In Search of Thaelrid **24t**, 1740 Orb of Soran'ruk **25t** | | | Present |
- Launch known issue (not Wowhead): "Vorsha the Lasher" was reported disabled on Nov 5. Source: the WebSearch summary for
  "wowhead forever news November 5 2026" (mmohuts/timesaver.gg results, not read directly) — `community`, verify.

### B10. Hillsbrad Foothills / Alterac — Alliance new
| id | Quest | Lvl | Giver / turn-in | Notes |
|---|---|---|---|---|
| 98059 NEW | Hillsbrad's Hoard | 27p | → table in Hillsbrad town hall | From a "company" (sender unknown) |
| 98071 NEW | Brewer's Trade | 27p | → Dun Garok (SE Hillsbrad) | Reward **Brewer's Bracers** (279388) |
| 98219 NEW | The Shamed Lieutenant | 30p | **Lieutenant Farren Orinelle** (N:2228, **Southshore 51.4, 58.4**) | Alliance ("one of Stormwind's finest"), via the Menethil boat |
| 95534 NEW | Strahnbrad Mystery | 36p | → "town in Hillsbrad" | Reward **Brilliant Cloak** (277206) |
| 95786 NEW | An Acquaintance in Southshore | 40p | → **Loremaster Dibbs** (N:2277, **Southshore 50.4, 57.0**) | Savage Coast Report Bundle (STV) → opens the Alliance **Drowned City** quests (B12) |
| City of Dalaran (dungeon) | 92432 An Alarming Request (**33p**; Emissary Jaques, Southshore) → 92458 Heart of Disruption (33t) → 92459 Friend of the Kirin Tor; 92434 Blood in the Streets; 92457 Starving Arcane (33t); 92489 Power Overwhelming (33t, Andromath SW); 92456 A Green Sample (33t, Shylamiir SW); 96987 Opportunistic Education (33t, Rexxie Copperclutch at the sewer entrance); 97287 Shrewd Negotiations | **33** | **Image of Archmage Modera** (N:269127, **Silverpine 68.4, 45.2**) | All Dalaran quests are **level 33** → run at **~30–33**, not 28 `theory` |
| Horde (skip) | 93680 Key to the City, 96984/96986 (Tarren Mill), 98094/98095 | | | |
| Rogue only (skip) | 96779–96786 Myrokos Silentform (Ravenholdt) | 34 | | Pickpocket chain |

### B11. Arathi Highlands — Stromgarde additions (34–39)
| id | Quest | Lvl | Notes |
|---|---|---|---|
| 92867 NEW | Ground to Keep | 39p | Groundskeeper Lomar. Boulderfist/Syndicate/Witherbark in Stromgarde Keep. Choice of two items |
| 92872 NEW | Dutiful Steps | 38p | Caretaker Alaric (Stromgarde crypt). Throw Tomb Dust into the sea |
| 96783–96785 NEW | A Way In / Master of Disguise / Ain't No Telling | 34p | Syndicate infiltration; part of the rogue Ravenholdt chain (turn-in Myrokos) → **probably rogue-only**, skip |
| Horde (skip) | 92519, 92707, 97539 (Hammerfall) | | |

### B12. Stranglethorn Vale — Booty Bay + Drowned City
| id | Quest | Lvl | Notes |
|---|---|---|---|
| 98463 NEW | Talk of the Town | 33p | **Nixxrax Fillamug** (N:2832, Booty Bay 27.0, 77.2) |
| 97328 / 97329 / 97331 NEW | Anything of Value / Where's the Key? / Zimmix's Great Escape | 35p | Ruins of Zul'Kunda (stolen shipments, key, escort) → Booty Bay (Wharfmaster Lozgil) |
| 97420 NEW | Reduce, Reuse, Reconcile | 36p | Knaz Blunderflame; 5 Drums of Crude Oil, Lake Nazferiti |
| 97047 / 97048 NEW | The Cook in the Cage / Returning to Port | 38p | Free Wendel from the Kurzen compound → Captain Aransas (Booty Bay) |
| 95384 NEW | Partial Mystical Notes | – | → Dudd Fizzlescroll, Booty Bay |
| **Drowned City (Alliance)** | 95787 **Take Two With Water** (40p, Loremaster Dibbs, 100 SW rep); 95788 Magics of the Drowned City (40t) | | Alliance chain via Dibbs (Southshore). **Horde** versions: 95775, 95776 (38), 95770 (40), 96774 (40, Mazu'kon) |
| Classic | Nesingwary etc. | | Not checked individually |

### B13. Desolace + Shen'dralas — centaur reputation chains (38–42)
- **Magram storyline** (series on Q:92841): Classic 1385 → 1367 / 1386 → 1369 → **92743 A Conqueror's Crown** (Badlands) → **92841 Valley
  of Bones (40p, requires Honored with Magram)** → 92844 / 92846 → 92847 → 92873 → 92893 / 92894 → 93066 → 93072 / 93129 → 93188 →
  93196 Khan Jehn. The giver is **Orgrul** (N:253136) **in Shen'dralas (zone 16651) at 35.6, 12.0**.
- **Gelkis storyline** (series on Q:93034): Classic 1382 → 1368 / 1384 → 1370 → 1373 → **93034 Valley of Bones (38p, requires Honored
  with Gelkis)** → 93035 / 93037 → 93041 → 93044 → 93045. **Nerlokh** (N:253177) is **in Shen'dralas at 20.8, 22.6**. Also 93122
  Checking Things Out (POIs in Shen'dralas), 93058, 93062, 93125, 93128.
- **Rep accelerators:** 93224/93225 Carved Centaur Totems (5 totems from any centaur), 93226/93227 and 94872/94873 Buying Friendship (Totem
  Tote), 92811/92812 Economic Warfare, plus crafting turn-ins (92754, 92755, 92814, 92817, 92818).
- **96222 Khan Hratha (42p)** → Umarak (N:253066, **Desolace 43.4, 78.6**, elite). The rewards are the Classic Khan Hratha items (6773,
  6774, 6788, 6789), so this is a **reworked Classic quest**.
- **97284 Vahlarriel's Vengeance (33p)** → Vahlarriel Demonslayer (N:5642, **Nijel's Point 66.4, 11.4**): kill 4 each of Burning Blade
  Augur/Reaver/Adept/Felsworn at Thunder Axe Fortress. **Alliance-friendly 33 kill quest.** Horde equivalent: 97265 Hate the Hatefury
  (Shadowprey).
- **Route implication (`theory`):** the centaur chains need **Honored** first, so they are a rep grind, not fast XP. Skip them, except
  Vahlarriel's Vengeance.

### B14. Swamp of Sorrows — new Harborage (~34)
- 93585 This Light of Mine (**34p**; escort Father Tuttle, N:255597 at **22.0, 50.6**, to The Harborage; Alliance-flavoured text), 93663 Lost
  in Transit, 93678 Abridged Notes on Draenethyst (→ Magtoor, Harborage), 93429 Blood of My Blood (10 Lost Ones, Fallow Sanctuary), 93430
  Taking the Bait Back. Desolace link: 93464 The Visiting Mage / 93465 Notes on Draenethyst. [official·DB]

### B15. Other zones on a plausible path
- **Elwynn Forest** (not on the gnome path; useful only on Stormwind visits): about 25 new quests at levels 1–8 (Northshire, Goldshire,
  Tower of Azora, Eastvale, Crystal Lake). Library-related: 91775 Book Return (**6t**), 91777 Rare Books (**7t**), 92124 Book Inventory.
  Stormwind library: 97234 Reading Room, 97237 Shelf Picked (Roy Lewells, SW Park). [official·DB]
- **Stormwind:** 92415 Remember That I Love You (22t), 95195 Bloodied Insignia (22t), 95189 Crest of Lordaeron (22t) are the Ruins of
  Lordaeron Alliance turn-ins; 92401 A Frightened Request (22t) is also RoL. Fishing: 95065 Fishin' Time. Merchant's Favor: 91899–91901 and
  91904–91906 "A Sealed Crate" (Apprentice/Journeyman/Expert). [official·DB]
- **The Barrens** (Alliance-usable): 92706 WANTED: Bruuz (**20t**, → Gazlowe, Ratchet); 97005 Chol'aruk the Ravener (**21t**, → Bainham —
  probably the non-Horde version, since the Horde version 97003 goes to Gur'ak; Bainham's faction is unverified); 97253 Parts and Pieces (Ratchet); 96264 Elemental Aid (33t, RFK). [official·DB]
- **Thousand Needles / Stonetalon:** only Horde-flavoured new quests in the DB (98069/98070 Freewind; 97985 Thundering Hearts 33p, Undercity
  rep; 97538 Thunder Bluff; 98424 Venture Co. Mine). **No Alliance additions** → skip both for new content. [official·DB]
- **Dustwallow Marsh:** 98913–98915 Theramore Care Packages (Theramore Expeditionary Force rep tiers, Darkspear Islands PvP) — no PvE
  questing additions in the DB. [official·DB]
- **Darkspear Islands battleground** quests (98887–98908; Alliance hub "Brelinda McFarry at Northwatch Hold", Barrens) at 39/49/59/60:
  PvP XP option, not part of the PvE route. [official·DB]
- **Zephras Isle** (Skyborne, about 116 quests) and Horde starts (Tirisfal, Durotar, Mulgore, Silverpine, about 130) make up the rest of the
  898 and are not relevant. [official·DB]
- **Warlock class quests** in the DB: 65602 What Is Love? (→ Gakin), 65603 The Binding (Incubus); 1715/1688/1689 Voidwalker; 1716 Devourer
  of Souls ("Speak with Takar the Seer **in the Barrens**" — the Classic Succubus route still sends Alliance to the Barrens); 1738
  Heartswood (Ashenvale); 1798 Seeking Strahad; 1758 Tome of the Cabal (→ Krom Stoutarm, IF). All verified present with wh.mjs. [official·DB]

---

## C. Level ladder of NEW Alliance content (from the DB levels above) — for routing
| Level | New quest content in the Wowhead DB | Zone |
|---|---|---|
| 6–10 | Camping intro (6); Kharanos, Brewnall, Misty Pine, Gol'Bolar (7–10) | Dun Morogh |
| 12–18 | Toxic Soil (12→18), Harvesters (15) | Westfall |
| 13–16 | HoT prep (13), Hall of Thanes (15–16) | Dun Morogh / Ironforge |
| 13–21 | Jai'vhanel (13), Fun and Games (17), Expanding Horizons (17), Swelling Forces (20), Baron Marinous (21) | Darkshore |
| 17–25 | Show of Force (17), Alther's Mill / Blockade (21), Gar'im (25) | Redridge |
| 21–22 | Ruins of Lordaeron Alliance quests | Tirisfal (dungeon) |
| 22–34 | Menethil, Howin and Whelgar chains (22–32), Dragonmaw Retreat (30–34) | Wetlands |
| 25–28 | Valor family | Duskwood |
| 25–30 | Kor Gem (25), Crescent Necklace (26), Forest Song (30) | Ashenvale |
| 27–30 | Hoard / Brewer's Trade (27), Shamed Lieutenant (30) | Hillsbrad |
| 31 | Excavation Site: Wetlands quests | Wetlands (dungeon) |
| 33 | City of Dalaran quests; Vahlarriel's Vengeance (Desolace) | Alterac / Desolace |
| 33–38 | Booty Bay additions (33–38) | Stranglethorn |
| 34 | Harborage | Swamp of Sorrows |
| 36–40 | Strahnbrad Mystery (36), Dibbs → Drowned City (40) | Hillsbrad / STV |
| 38–42 | Centaur rep chains (Honored), Khan Hratha (42) | Desolace / Shen'dralas |
| 36–44 | **Riverglades — no quest data in Wowhead** | Riverglades |

## D. Deliberate-skip candidates surfaced by the DB (`theory`, for the route builder)
- 92749 **A Dynamite Plan** (10 Rough Dynamite) and the rest of Toxic Soil after Moonbrook Espionage, unless you buy the dynamite.
- 95217 The Quarry's Smith (12 Copper Bars), 92911 Harvesting the Harvesters step 3 (Crude Scope), 92109 My First Alchemy Set (vials +
  herbs), 95818 A Quick Craft, and the 95816 Sign Me Up! chain: all need materials.
- 98190/98191 A Friend of the Family (Stormwind/Cathedral turn-ins) — only if passing through Stormwind.
- The centaur Valley of Bones chains (need Honored).
- 98297 Stopping the Cycle (group).
- Rogue-only Ravenholdt/Stromgarde 96779–96786 and all Horde/Zephras ids.

---

## Zones skipped or only partly covered (and why)
- **Riverglades, Tanaris, Feralas, Hinterlands, Badlands, Searing Gorge, Un'Goro, Felwood, Azshara, Burning Steppes, W/E Plaguelands,
  Winterspring, Silithus:** the Wowhead DB has **no new quests** for these. Their Classic quests were **not** inventoried quest-by-quest
  here, because the brief prioritised Forever changes and they are pure Classic carry-over in the DB.
- **Stonetalon, Thousand Needles:** only Horde additions; Classic quests not inventoried.
- **Arathi, STV, Alterac:** new quests listed; Classic quests not re-listed.
- **Elwynn:** new quests counted but not detailed (off the gnome path).

## Gaps (what I could not find)
1. **Riverglades quest list, hubs and ids.** There is no data in Wowhead's Forever DB as of Nov 5 (ids 9000–300000 sampled; 90500–100500 fully
   scanned). Only the zone (16591, 36–44) exists. Best next sources: Questie (Forever) data files, launch-week guides, warcraft.wiki.gg
   Farholde Keep / Demar Brant pages (https://warcraft.wiki.gg/wiki/Farholde_Keep). The flight master at Farholde is reportedly around
   60.6, 81.6 per search snippets (`community`, unverified).
2. **All 35–60 new quests** (Shen'dralas beyond the centaur NPCs, Dustwallow/Alcaz, Feralas, Tanaris, Hyjal): absent from the DB.
3. **Quest XP amounts:** not rendered on Wowhead pages, so "high XP" flags are inferred from level, elite/group status and boss kills only.
4. **Required level and start NPC** for most new quests: the Quick Facts box is JS-rendered. Givers above come from objective text, chain
   context or NPC links. Where only a turn-in NPC is known, the giver is probably the same NPC but unverified.
5. **Removed Classic quests:** every Classic id I tested still exists in the Forever DB. I could not get Classic quest levels from Wowhead
   Classic pages for comparison, so **level changes to Classic quests are unverified** (e.g. The People's Militia shows level 12 and Rat
   Catching 11 in Forever).
6. **Launch-vs-beta vintage** of each DB entry is not shown. Levels may have shifted at launch (e.g. dungeon quest XP nerfs on Oct 1/8).
7. **Wowhead guides and news bodies** (zones guide, "Repeatable Quest Experience Exploit Fixed…" news 383574 that names an Alliance-only
   repeatable XP quest) do not render, so I don't know which quest that exploit was.
8. **Cozy Sleeping Bag chain** quest names ("…and that note you found", "Stepping Stones", "Eagle's Fist", etc.) are not in 90500–100500,
   so they are likely hidden or flagged ids. Their ids remain unverified.
9. Exact coords for **mob areas** (Grizzled Den, Dragonmaw Retreat, Alther's Mill, etc.) and NPC ids for Tongus Flintfire, Ulric Frostveil,
   the Misty Pine givers and Borgus were not resolved.
