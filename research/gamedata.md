# Gnome Warlock 1–60 (WoW: Forever) — Game Data Seed

Research date: 2026-10-29 (launch 2026-11-04; beta 2026-09-17 → 2026-10-22, dev notes posted through 2026-10-27).
Beta level caps: 20 at start, later 30 (some guides cite a level-38 BlizzCon demo). **Nothing above level 30 was publicly testable** – every 31–60 recommendation below is theory-crafted.

## Confidence tags
- **[CF]** confirmed-Forever – Blizzard dev notes / class deep dive, Forever wiki pages, or several Forever guides agreeing.
- **[BETA]** beta-may-change – guide recommendations or numbers seen on beta builds; may shift at launch.
- **[CLASSIC?]** Classic-carryover-unverified – Classic data assumed to still apply; not confirmed for Forever.
- **[UNKNOWN]** – no source found. Do NOT invent a value.

## Source list (key)
| ID | URL | Notes |
|---|---|---|
| WT-WL | https://www.warcrafttavern.com/forever/guides/warlock/ | Class overview (beta 1.60.1.69913, cap 20 at writing) |
| WT-LVL | https://www.warcrafttavern.com/forever/guides/warlock-leveling/ | Leveling guide (cap 30) – best single source |
| WT-AFF / WT-DEMO / WT-DESTRO | https://www.warcrafttavern.com/forever/guides/affliction-warlock/ , /demonology-warlock/ , /destruction-warlock/ | Level-30 beta builds |
| WT-DD | https://www.warcrafttavern.com/forever/news/poison-pets-rogue-warlock-deep-dive-for-wow-forever/ | Summary of Blizzard's Oct 7 Rogue/Warlock deep dive |
| BLIZZ-DEV | https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-15/2360696 | Official beta dev notes (Sep 24 → Oct 27) |
| PMM | https://patchmymain.com/beta-changes-by-class/ (+ /builds/2026-10-15/, -10-26/, -10-27/, -10-08/) | Per-class mirror of the dev notes |
| CC-PN | https://conquestcapped.com/guides/wow-forever/wow-forever-patch-notes/ | Patch note digest |
| GO-TAL | https://guildorder.com/games/wow_classic/tools/talents/forever/warlock | Full talent list, **pre-Oct-15** (still shows Malediction) |
| WIKI-F | https://warcraft.wiki.gg/wiki/World_of_Warcraft:_Forever | Feature overview (dual spec 10g etc.) |
| WIKI-WL | https://warcraft.wiki.gg/wiki/Warlock_abilities_(Forever) | Spell-by-level list (no costs) |
| WIKI-RACIAL | https://warcraft.wiki.gg/wiki/Eureka! , /Expansive_Mind , /Escape_Artist , /Engineering_Specialization | Gnome racial tooltips |
| METHOD | https://www.method.gg/wow-forever/wow-forever-warlock-leveling-guide-and-talents | Leveling talents (pre-Oct-15) |
| METHOD-MNT | https://www.method.gg/wow-forever/how-to-get-a-mount-in-wow-forever-cost-requirement-and-mount-options | Mount costs |
| CC-WL | https://conquestcapped.com/guides/wow-forever/wow-forever-warlock-leveling/ | Updated 28 Oct 2026 – most current talent order (post-Oct-15) |
| WFGG | https://wowforever.gg/en/builds/warlock-affliction-leveling/ | Affliction leveling build, updated 26 Oct 2026 |
| RB | https://rankedboost.com/world-of-warcraft/forever/build/warlock/ | 33/18/0 Voidwalker build |
| ICY | https://www.icy-veins.com/wow-forever/affliction-warlock-leveling (403 to fetch; data from search snippets only) | 40/11/0 |
| MOBA | https://mobalytics.gg/wow-forever/classes/warlock-leveling-guide ; Kargoz: https://mobalytics.gg/wow-forever/profile/kargoz/classes/1-60-affliction-warlock-leveling-guide-wands-talents-rotation-macros-tips (403; snippets only) | |
| WT-RIDE | https://www.warcrafttavern.com/forever/guides/riding/ | Riding costs/trainers |
| WT-PROF | https://www.warcrafttavern.com/forever/guides/professions/ | Profession list, caps, camp objects |
| WT-CAMP | https://www.warcrafttavern.com/forever/guides/camping/ | Camping mechanics |
| WT-LEG | https://www.warcrafttavern.com/forever/guides/legacy/ | Legacy system |
| WT-XP | https://www.warcrafttavern.com/forever/guides/experience/ | XP table, rested |
| WT-BAG | https://www.warcrafttavern.com/forever/guides/cozy-sleeping-bag/ | Cozy Sleeping Bag chain |
| WT-LIB | https://www.warcrafttavern.com/forever/guides/library-books/ | 41 library books |
| WT-DUN | https://www.warcrafttavern.com/forever/guides/dungeons/ | Dungeon level table |
| WT-TRAIN | https://www.warcrafttavern.com/forever/guides/class-trainers/ | Trainer coords |
| WPROF-MF | https://www.wow-professions.com/forever/merchants-favor-durotar-supply-azeroth-commerce | Merchant's Favor vendors/costs |
| WIKI-TAIL / WIKI-ENCH | https://warcraft.wiki.gg/wiki/Forever_tailoring_patterns , /Forever_enchanting_formulas | Recipe lists |
| EXPC-ALLY | https://expcarry.com/wow-forever-leveling-guide-alliance | Alliance 1–60 route (modified 2026-10-27; has promo content) |
| OVG | https://overgear.com/guides/wow-forever/1-60-leveling-guide/ | Route 1–30, Legacy perks |
| GG-DM | https://games.gg/world-of-warcraft/guides/wow-forever-dun-morogh/ | Dun Morogh 1–12 quest route |
| GG-GNOME | https://games.gg/world-of-warcraft/guides/wow-forever-gnome-guide/ | Gnome (older convention-build numbers) |
| WIKI-RG | https://warcraft.wiki.gg/wiki/Riverglades , https://warcraft.wiki.gg/wiki/Shen'dralas | New zones |

Sites that blocked fetching (HTTP 403): icy-veins.com, mobalytics.gg, zockify.com, dving.net, massivelyop.com. Wowhead Forever pages rendered empty (JS). Their data is included only where search snippets quoted it.

---

## 1. WARLOCK IN FOREVER

### 1.1 Baseline class changes [CF – Oct 7 deep dive via WT-DD, lfcarry, accountshark]
- **Curse of Agony → Bane of Agony; Curse of Doom → Bane of Doom.** One Bane per warlock per target; a Bane does **not** share the Curse slot (you can run Bane of Agony + a Curse together). Anything that modified Curses also modifies Banes.
- **Curse of the Elements** now affects **all magic damage**, learned at **level 20** (WIKI-WL / WT-LVL; was 32 in Classic). **Curse of Shadow removed.**
- Firestone (lvl 28) and Spellstone (lvl 36) are now **weapon imbues** that stack with temporary enchants such as Wizard Oil. Firestone = Fire damage + crit; Spellstone = Shadow damage + spell haste.
- **Life Tap scales with Spirit** (tooltip shows the mana). The exact coefficient is [UNKNOWN]. At level 6, rank 1 costs about 1/3 of your health (WT-WL).
- **Drain Soul**: progressive chance **per tick** to give a Soul Shard, rising each failed tick until guaranteed (shards no longer require the kill). Since Oct 1, Drain Soul is interrupted if you start casting another spell (BLIZZ-DEV).
- **Pets scale with the warlock's stats/gear.**
- **Debuff cap removed**; DoTs are **dynamic** (recalculated each tick, no snapshotting) and **DoTs can crit** (WT-WL) [BETA].
- **Meeting Stones no longer summon.** Ritual of Summoning (lvl 20, needs 2 helpers) is the only summon, so keep 1–2 spare shards (WT-LVL, METHOD) [CF].
- Dev-note fixes [CF, BLIZZ-DEV]: Voidwalker Sacrifice scales with 10% of spell healing (Sep 24). Hellfire can crit (Oct 1). Pet **Aggressive mode** restored (Oct 1). Your current pet is stunned while you summon a new one (Oct 8). Shadow Bolt ranks 1–4 rebalanced so each rank is an upgrade (Oct 8). Demonic Brand bonus pet damage is high-threat only when it deals Shadow damage (Oct 8). **Orc "Command" returns: +5% warlock pet damage** (Oct 26; Horde only).

### 1.2 Capstone naming: **Wrack** vs "Drain Hope" (CONTRADICTION)
- **Wrack** (spell 1316697) is the Affliction 31-point capstone in the **Oct 7 Blizzard deep dive**, Warcraft Tavern, the wiki (WIKI-WL: tier 7, 1 rank, **requires Siphon Life**), lfcarry, accountshark, Conquest Capped, and wowforever.gg. → **Use "Wrack".** [CF]
- "**Drain Hope**" appears in Icy Veins, Mobalytics, Zockify and wow.gg. Those pages are based on the **BlizzCon / pre-beta demo**. Its tooltip-style text ("Drains all hope from the target, 52 Shadow damage every 1 sec, +10% to your other Shadow DoTs on target, 6 sec") is functionally the same as Wrack. It is almost certainly the earlier name. No source documents a rename; it is inferred from dates.
- Wrack effect [BETA]: a channeled Shadow drain that ticks every second for 6 sec and makes the target take **+10% from your other Shadow DoTs** for 6 sec. Base damage: GO-TAL "36 Shadow damage per sec" vs the older listing "52/sec". It **replaces Shadow Bolt as the Affliction filler**. It is affected by Improved Drains, Fel Concentration, Pandemic, Nightfall and Soul Siphon.

### 1.3 Full talent trees
Source: GO-TAL (row = points required ÷ 5 + 1; 51-point cap), merged with WT-DD and the dev notes. **GO-TAL predates Oct 15**, so the Oct 15 changes are applied in **bold** below. "Gold medal" talents sit at 11/16/21/31 points (lfcarry).

#### Affliction (17 talents)
| Row | Talent | Max | Effect (per rank unless noted) | Tag |
|---|---|---|---|---|
| 1 | Improved Life Tap | 2 | +10% Life Tap mana (moved to row 1) | BETA |
| 1 | Suppression | 5 | +1% hit, –4% threat (up to 5% hit / 20% threat reduction). 4 points = no misses vs same-level mobs (WT-AFF, METHOD) | BETA |
| 1 | Improved Corruption | 5 | –0.4 s Corruption cast, +2% damage → instant and +10% at 5/5 | BETA |
| 2 | ~~Malediction~~ → **Grim Reach** | **2** | **+10/20% range on Affliction spells** (Oct 15; Malediction gave +1% periodic dmg per rank, 5 ranks) | CF (dev notes) |
| 2 | Soul Harvest (was "Improved Drain Soul" / "Soul Harvesting") | 2 | After a Drain Soul kill: 50/100% more mana regen (fixed Oct 1). A player reports it effectively forces shard deletion each fight | BETA |
| 2 | Improved Drains (new) | 3 | Conflicting data. GO-TAL/wow.gg: +2% Drain Life/Soul dmg per other Affliction effect (max 6%) at rank 1 → 6% per effect (cap 18%) at 3/3, tripled on Drain Soul below 20% HP, Drain Life +3/…/10 yd range. WT-DD: "up to 20% more" Drain Life/Soul/Wrack. WT-AFF: +20% at 3/3 | BETA |
| 3 | Improved Bane of Agony | 2 | +Bane of Agony damage (2 ranks; was 3) | BETA |
| 3 | Fel Concentration | 3 | Pushback/interrupt avoidance on Drain Life/Mana/Soul **and Wrack** (3 ranks; was 5) – enables drain-tanking | BETA |
| 3 | Amplify Curse | 1 | Next Weakness/Agony +50% or Exhaustion +20% for 30 s | BETA |
| 3 | Pandemic (new) | 3 | +33% crit damage bonus per rank on Corruption, Agony, Doom, Drain Soul, Drain Life, Siphon Life, Wrack (crit bonus 1.5× → 2× at 3/3). WT-LVL: skip while leveling | BETA |
| 4 | Malevolence (new) | 5 | +1% Shadow spell crit per rank | BETA |
| 4 | Nightfall | 2 | 2% per rank Shadow Trance (instant Shadow Bolt). Also procs from Drain Soul and Wrack | BETA |
| 4 | Curse of Exhaustion | 1 | 16-pt gold medal. –30% move speed, 12 s | BETA |
| 5 | Siphon Life | 1 | Drains 15 HP / 3 s for 30 s (rank-1 values). Prerequisite for Wrack | BETA |
| 5 | Soul Siphon (new) | 3 | WT-DD/WT-AFF: +4% (WT-DD: up to 12%) Drain/Wrack dmg per other Affliction effect, capped at 36% at 3/3. GO-TAL/wow.gg rank-1 text: +17% drain rate, –10% Drain Life healing | BETA |
| 6 | Shadow Mastery | 5 | **+2/4/6/8/10% Shadow spell damage** (Oct 15; was 1–5%) | CF |
| 7 | **Wrack** | 1 | 31-pt capstone; requires Siphon Life | CF (name) / BETA (numbers) |

Removed from Affliction: Improved Curse of Weakness, Improved Drain Life, Improved Drain Mana, Improved Curse of Exhaustion, Dark Pact. Grim Reach was removed in the deep dive and re-added Oct 15 as a 2-point range talent replacing Malediction (WT-DD, BLIZZ-DEV).

#### Demonology (19 talents)
| Row | Talent | Max | Effect | Tag |
|---|---|---|---|---|
| 1 | Improved Health Funnel | 2 | +20% funnel healing, –15% HP cost, –50% threat; usable at any demon HP | BETA |
| 1 | Improved Imp | 3 | +10% Firebolt / Fire Shield (no longer affects Blood Pact) | BETA |
| 1 | Demonic Embrace | 5 | +3% Stamina per rank (no Spirit penalty any more) | BETA |
| 1 | Unholy Power | 5 | +2% demon damage per rank (moved to row 1, nerfed) | BETA |
| 2 | Demonic Aegis (new) | 2 | +15% Demon Skin/Armor effect per rank (up to 30%) | BETA |
| 2 | Improved Voidwalker | 3 | +10% Torment/Consume Shadows/Sacrifice/Suffering per rank | BETA |
| 2 | Fel Vitality (new) | 3 | +5% demon max HP/mana and +5% your max mana per rank | BETA |
| 2 | Demonic Energies (new) | 2 | Pet healed for 8%/15% of your spell damage; pet gets 50/100% of Life Tap mana | BETA |
| 3 | Improved Sayaad | 3 | +10% Lash of Pain/Soothing Kiss; +10% Seduction/Lesser Invis duration | BETA |
| 3 | Demonic Sacrifice | 1 | **11-pt gold medal**, 2-hour buff: Imp +15% Shadow dmg; Voidwalker 2% mana/4 s; Succubus/Incubus +15% Fire; Felhunter 3% HP/4 s | BETA |
| 3 | Master Summoner | 2 | –2 s demon summon cast, –20% mana per rank | BETA |
| 4 | Decimation (new) | 2 | Soul Fire CD reduced (–45%/–90%). Shadow Bolt/Searing Pain on targets <35% HP buffs Soul Fire (faster cast, no shard) for 10 s | BETA |
| 4 | Fel Domination | 1 | 16-pt gold medal (requires Master Summoner). Next summon –5.5 s cast, –50% mana; 5 min CD | BETA |
| 4 | Demonic Brand (new) | 3 | Searing Pain brands target (–threat). Pet's next attacks deal bonus Fire/Shadow damage. WT-DEMO 3/3: 10 s brand, next 6 pet attacks. Kargoz: 10 s, next 3 attacks | BETA |
| 5 | Improved Felhunter (new) | 3 | Tainted Blood/Devour heal/Paranoia +10%; Spell Lock CD –2 s | BETA |
| 5 | Soul Link | 1 | **21-pt gold medal** (moved from row 7). 30% of damage taken goes to the demon; both deal +3% | BETA |
| 5 | Demonic Knowledge (new) | 3 | Spell damage = up to 33% of your level while a demon is out; WT-DEMO says "33% of your level per point", i.e. 30 SP at 3/3 at level 30 (scaling at 60 unverified) | BETA |
| 6 | Master Demonologist | 5 | Imp +2% Fire; VW –2% physical taken; Succubus/Incubus +2% Shadow; Felhunter –2% magic taken (per rank, for you and the pet) | BETA |
| 7 | **Demonic Pact** | 1 | 31-pt capstone (requires Soul Link). Summoning a *different* demon no longer cancels Demonic Sacrifice; re-summoning the sacrificed one still does. E.g. sacrifice Imp (+15% Shadow), then summon Succubus (+10% Shadow via Master Demonologist) (WT-WL) | CF |

Removed: Improved Healthstone, Fel Intellect, Fel Stamina, Improved Subjugate Demon, Improved Firestone, Improved Spellstone.

#### Destruction (16 talents)
| Row | Talent | Max | Effect | Tag |
|---|---|---|---|---|
| 1 | Destructive Reach | 2 | **+10/20% range on Destruction spells** (Oct 15) | CF |
| 1 | Improved Shadow Bolt | 5 | SB crit → +4% Shadow taken per rank for 12 s (your own Shadow damage only, no charges) | BETA |
| 1 | Bane | 5 | –0.1 s cast per rank on SB/Immolate/Incinerate; –0.4 s on Soul Fire | BETA |
| 2 | Molten Skin (new) | 5 | –2% all damage taken per rank | BETA |
| 2 | Cataclysm | 3 | –3% Destruction mana cost per rank | BETA |
| 2 | Aftermath (reworked) | 5 | +10% Immolate initial damage per rank; Conflagrate 20%/rank chance to Daze (–50% speed, 5 s) | BETA |
| 3 | Ruin | 5 | +Destruction crit damage (now 5 points) | BETA |
| 3 | Shadowburn | 1 | Instant; costs a shard, refunded if target dies within 8 s | BETA |
| 4 | Intensity | 3 | Pushback resistance on all Destruction spells | BETA |
| 4 | Agonizing Flames (ex Imp. Searing Pain) | 3 | +3% Destruction dmg and +3% Searing Pain crit per rank | BETA |
| 4 | Conflagrate | 1 | 16-pt gold medal. Consumes Immolate; 10 s CD | BETA |
| 5 | Pyroclasm | 2 | Stun chance from Soul Fire/Rain of Fire/Hellfire | BETA |
| 5 | Bane of Havoc | 1 | 21-pt gold medal. 5 min; 15% of your damage to other targets is copied to the Havoc target | BETA |
| 5 | Fire and Brimstone (new) | 3 | +8% Conflagrate crit per rank | BETA |
| 6 | Shadow and Flame (new) | 5 | Conflagrate → +2% Shadow dmg 20 s and 20% chance per rank not to consume Immolate; Shadowburn → +2% Fire dmg 20 s and 20% chance per rank to refund shard | BETA |
| 7 | **Incinerate** | 1 | 31-pt capstone (requires Bane of Havoc). Fire dmg (125–140 rank 1), +25% if target has Immolate; 2.5 s cast, 30 yd | CF |

Removed: Improved Firebolt, Improved Lash of Pain, Devastation, Improved Immolate, Emberstorm.

Overall: Warlock has 23 new, 26 changed and 3 unchanged talents (powerupgaming, via search) [BETA].

### 1.4 Recommended leveling spec → **AFFLICTION** (consensus) [BETA]
- **Affliction**: recommended by WT-LVL, METHOD, ICY, CC-WL, OVG (21/0/0 at 30), MOBA and Kargoz ("fastest"). It uses instant DoTs while moving, wand/Drain Life filler, and drain-tanks from about 20–30.
- **Demonology**: comfortable from Demonic Brand (25 pts / ~lvl 26–30) and Soul Link at 30. It is safer on PvP realms but costs more mana (CC-WL, WT-LVL). Kargoz calls it "potentially one of the strongest".
- **Destruction**: worst solo (drinks after nearly every fight) but strong in dungeons. Icy: don't level Destruction early; consider switching at 40 for Incinerate + Shadow and Flame.

### 1.5 Talent orders found (compare – they differ)
Without the **Talented** Legacy perk, the first point comes at level 10 (1 per level, 51 at 60). With Talented 5/5 the first point comes at level 5 (WT-LEG says "level 9 → 5 at max rank"), still capped at 51, so 26 points at 30.

**A. Conquest Capped (updated 28 Oct, post-Oct-15 tree – most current)** [BETA]
- 10–14 Improved Corruption 5/5 → 15–17 Suppression 3/5 → 18–19 Grim Reach 2/2 → 20–22 Improved Drains 3/3 → 23–25 Pandemic 3/3 → 26–27 Nightfall 2/2 → 28 Amplify Curse 1/1 → 29–30 Improved Bane of Agony 2/2
- 30+: Siphon Life, then Malevolence, Improved Drains, Fel Concentration, Soul Siphon, Shadow Mastery → **40 Wrack**, then Destructive Reach and Bane (Destruction).
- Alternatives at 10–22: a Destruction "Bane" wand build, or a drain-tank build (Improved Drains 3 + Fel Concentration 3 right after Improved Corruption).

**B. wowforever.gg (26 Oct)** [BETA] – final 31/20/0
- 10: Improved Corruption 1 … by 20: Suppression 2, Improved Corruption 5, Improved Drains 3, Fel Concentration 1 … by 30: Improved Bane of Agony 2, Fel Concentration 3, Pandemic 3, Nightfall 2, Siphon Life 1 … by 40: Improved Life Tap 2, Soul Siphon 2, Shadow Mastery 5, **Wrack** … by 50: Demonic Embrace 5, Unholy Power 5 … by 60: Demonic Aegis 2, Improved Voidwalker 3, Fel Vitality 3, Master Summoner 2.

**C. Method (pre-Oct-15)** [BETA]: 4 Suppression → 5 Improved Corruption → 1 Suppression → Pandemic → Improved Bane of Agony → Malevolence → 30 Siphon Life → Fel Concentration → 34: 1 Soul Siphon, then 5 Shadow Mastery → **40 Wrack**.

**D. Icy Veins (snippets)** [BETA]: 10–13 Suppression 4 → 14–18 Improved Corruption 5 → … 25–26 Nightfall 2 → 30 Siphon Life → then **11 points into Demonology for Demonic Sacrifice at 41** → back to Affliction → **Wrack at 51**, then drain talents. Final 40/11/0.

**E. Warcraft Tavern (cap 30)** [BETA]: Improved Corruption (lvl 10, "most important"), Suppression 4, Malediction (now Grim Reach), Improved Bane of Agony, Nightfall (25). Level-30 drain-tank: Improved Drains, Fel Concentration, Improved Life Tap, Soul Siphon 3/3 (+2 Malediction to reach Shadow Mastery). Skip Pandemic while leveling. Siphon Life is optional. If you have no good wand, take the drain talents from the start.

**F. Kargoz/Mobalytics** [BETA]: final 31/7/13. Wand build 10–14 Improved Corruption, 15–19 Improved Bane of Agony(?), 20–21 Destructive Reach; **respec at 22 into drain-tanking**; Siphon Life 30, Soul Siphon 31–33, Wrack 40.

**G. RankedBoost** [BETA]: 33/18/0 "Voidwalker" solo build (Wrack + Fel Domination; Improved Voidwalker, Demonic Embrace, Fel Vitality, Improved Health Funnel, Demonic Energies). No hit talents.

**Synthesized default for the guide (my synthesis – label it as such in the guide):** valid for the post-Oct-15 tree, no Talented assumed.
| Lvl | Point | Running Aff |
|---|---|---|
| 10–14 | Improved Corruption 5/5 | 5 |
| 15–17 | Suppression 3/5 | 8 |
| 18–19 | Grim Reach 2/2 (or Improved Life Tap 2/2) | 10 |
| 20–22 | Improved Drains 3/3 | 13 |
| 23–25 | Fel Concentration 3/3 (drain tanking; wands are weaker since Sep 24 / Oct 15) | 16 |
| 26–27 | Nightfall 2/2 | 18 |
| 28–29 | Improved Bane of Agony 2/2 | 20 |
| 30 | Siphon Life 1/1 | 21 |
| 31–33 | Soul Siphon 3/3 | 24 |
| 34–38 | Shadow Mastery 5/5 | 29 |
| 39 | Suppression 4/5 (or Amplify Curse) | 30 |
| 40 | **Wrack** | 31 |
| 41–43 | Pandemic 3/3 | 34 |
| 44–45 | Improved Life Tap 2/2 (if not taken) / Suppression 5/5 | 36 |
| 46–50 | Malevolence 5/5 (DoTs can crit) | 41 |
| 51–60 | 10 points, two options: **(a) Demonology utility** – Demonic Embrace / Fel Vitality / Demonic Aegis / Improved Voidwalker (WFGG, RB style); or **(b) Demonic Sacrifice** route (Icy: 11 Demo incl. Unholy Power/Fel Vitality) | |
Row requirements were checked against GO-TAL: row N needs 5×(N–1) points in the tree, and Wrack needs Siphon Life.

### 1.6 Dual spec at 40 [CF cost / BETA advice]
- Dual Talent Specialization: **level 40, 10 gold, class trainer** (WIKI-F). Swap anywhere out of combat and outside battlegrounds. Each spec has its own respec fee that "slowly drops down to 1 gold over time".
- Respec at a class trainer in a major city (Legacy talents too). Beta fee was 1 silver; launch fee schedule [UNKNOWN]. Classic was 1g → 5g → 10g … 50g [CLASSIC?]. Dev notes: "After your first talent reset, the subsequent cost will be much higher."
- Suggested pairing (inferred from Icy/WT): **Spec 1 Affliction (Wrack) for questing; Spec 2 Destruction (31 → Incinerate at 40)** for dungeons/groups, or Demonology (Demonic Pact needs 31, also available at 40).

### 1.7 Demons & how to get them
| Demon | Lvl | How (Alliance) | Use | Tag |
|---|---|---|---|---|
| Imp | 1 (quest "Beginnings", lvl 4 per GG-DM) | Coldridge Valley: Alamar Grimm (Anvilmar). Classic version: collect 3 Feather Charms from Frostmane Novices in the troll cave. Start letter "Tainted Memorandum" from Sten Stoutarm | Ranged DPS + **Blood Pact** (grimoire/trainer lvl 4). Damage falls off after 10; bring for groups | CF that Imp is a quest (WIKI-WL, WT-LVL); quest steps CLASSIC? |
| Voidwalker | 10 | Gnome: quest starts in **Ironforge** (Forlorn Cavern trainer), WT-LVL names "The Slaughtered Lamb". The chain runs via Gakin the Darkbinder / Surena Caledon to the summoning circle under the Slaughtered Lamb (Stormwind). Final quest "The Binding". METHOD: IF and SW versions both easy, SW slightly faster | Main leveling tank (holds 2 mobs, Consume Shadows, Sacrifice off-GCD). Torment rank 3 at 30. CC-WL: "best leveling demon" | BETA / CLASSIC? |
| Succubus | 20 | "Devourer of Souls" (Stormwind) | Highest single-target DPS; Seduction (grimoire lvl 26). From 30, drain-tank with it | BETA |
| **Incubus** (new) | 20 | "What Is Love?" (Stormwind). CC-WL: Incubus quest is easier | Same kit as Succubus ("Sayaad") | CF (exists) / BETA |
| Felhunter | 30 | "Seeking Strahad" (each capital → Ratchet), also learnable via **Subjugate Demon** at 30 | Devour Magic; Spell Lock (grimoire lvl 36); PvP; near-Succubus DPS with Demonology | BETA |
| Felsteed | 40 | Quest "Summon Felsteed" – Strahad Farsan, **Ratchet** | Mount (see §6) | CF (WIKI-WL lists quest) |
| Infernal / Doomguard / Dreadsteed | 50 / 60 | Inferno at 50 (quest "Kroshius' Infernal Core" lvl 55), Ritual of Doom 60, Dreadsteed quest at 60 | | CLASSIC? |

- **Grimoires** (pet abilities) come from demon trainers and are "very expensive" (METHOD); costs [UNKNOWN]. Grimoire levels (WIKI-WL): Imp – Blood Pact 4, Phase Shift 12, Fire Shield 14. Voidwalker – Torment 10 (default), Sacrifice 16, Consume Shadows 18, Suffering 24. Sayaad – Lash of Pain 20 (default), Soothing Kiss 22, Seduction 26, Lesser Invisibility 32. Felhunter – Devour Magic 30 (default), Tainted Blood 32, Spell Lock 36, Paranoia 42.
- Coldridge (Wren Darkspring) and Northshire demon trainers teach only Imp/Voidwalker abilities.
- Demon by level [BETA, WT-LVL/CC-WL]: 1–10 Imp → 10–20 Voidwalker → 20+ Voidwalker (safe) or Succubus/Incubus (damage; preference until 30) → 30+ drain-tank with Succubus/Incubus, Voidwalker for multi-pulls/elite quests, Felhunter on PvP realms. Destruction: Voidwalker in the open world. Demonology: Succubus default.
- Tips: put the pet on passive and send it in manually; bind Attack/Follow to easy keys. Health Funnel doesn't scale with spell power, so re-summoning is often faster (CC-WL).

### 1.8 Spell list by level (Forever) [CF levels from WIKI-WL + WT-LVL; costs UNKNOWN]
| Lvl | Spells |
|---|---|
| 1 | Shadow Bolt, Demon Skin (default), Immolate (10c per METHOD), Summon Imp (quest) |
| 4 | Corruption, Curse of Weakness, Blood Pact (Imp) |
| 6 | Life Tap, Shadow Bolt r2 |
| 8 | **Bane of Agony**, Fear (20 yd; r1 10 s) |
| 10 | Drain Soul, Create Healthstone, Summon Voidwalker (quest) |
| 12 | Health Funnel |
| 14 | Drain Life, Curse of Recklessness (WT-LVL lists 14; reduces armor, stops fleeing from Fear) |
| 16 | Unending Breath |
| 18 | Create Soulstone, Searing Pain |
| 20 | Demon Armor, Rain of Fire, Ritual of Summoning, **Curse of the Elements**, Succubus/Incubus (quest) |
| 22 | Eye of Kilrogg |
| 24 | Drain Mana, Sense Demons |
| 26 | Curse of Tongues (–60% cast speed at max rank), Detect Invisibility |
| 28 | Banish, Create Firestone (imbue) |
| 30 | Hellfire, Subjugate Demon, Summon Felhunter (quest + trainer); Siphon Life (talent) |
| 32 | Shadow Ward |
| 36 | Create Spellstone (imbue) |
| 40 | Howl of Terror, Summon Felsteed (quest), Dual Spec, Apprentice Riding |
| 42 | Death Coil |
| 48 | Soul Fire |
| 50 | Inferno |
| 60 | Bane of Doom, Ritual of Doom, Dreadsteed (quest) |
- Talent spells: Shadowburn (needs 10 Destro, ~lvl 20–24), Conflagrate (16 pts), Demonic Brand (15 Demo), Siphon Life (20 Aff), Wrack/Demonic Pact/Incinerate (31 pts, earliest lvl 40 without Talented; ~35 with Talented 5/5 – inference).
- **Training costs per spell / total 1–60: [UNKNOWN]** for Forever; no guide publishes them. In-game addons read real prices: "What's Training? (Forever)" (https://www.curseforge.com/wow/addons/whats-training-forever; grimoires not listed) and "Ranksmith" (warlock trainer has **147 services** from 8 to 60). Recommend the guide tell players to use one of these rather than print numbers.
- Alliance warlock trainers [CF, WT-TRAIN]: Alamar Grimm* (Coldridge 28.6,66.2), **Gimrizz Shadowcog (Kharanos 47.2,53.6)**, Drusilla La Salle* (Northshire), Maximillian Crowe (Goldshire 44.4,66.0), **Ironforge Forlorn Cavern**: Alexander Calder (50.8,6.4) / Briarthorn (50.2,7.4) / Thistleheart (50.8,6.6), Stormwind Mage Quarter: Demisette Cloyce / Sandahl / Ursula Deline (~39.5,85). *teach only up to level 6. Demon trainers: Wren Darkspring* (Coldridge), Dannie Fizzwizzle (Kharanos), Jubahi Corpseseeker (IF 53.2,7.6), Spackle Thornberry (SW 39.6,84.6), Cylina Darkheart (Goldshire). **No Alliance warlock trainers on Kalimdor.**

### 1.9 Leveling rotations [BETA – WT-LVL, CC-WL, METHOD]
- **1–4**: Shadow Bolt, Immolate while the bolt flies, finish in melee. **4–8**: Corruption + Immolate → wand. **8–10**: Bane of Agony + Corruption → wand.
- **Affliction <30**: pet in → Bane of Agony (pull) → Corruption → Immolate (if the mob lives) → Siphon Life (when learned) → **wand** to death. Life Tap when HP > mana. Two mobs: DoT + Fear the first, kill the second with the pet, re-Fear.
- **Affliction 30+ (drain tank)**: pet in → Agony → Corruption → curse/3rd Affliction effect (feeds Soul Siphon/Improved Drains) → **Drain Life** until dead (wand when full HP or mob nearly dead). From 40: **Wrack** as filler after DoTs are up, Nightfall procs → instant Shadow Bolt.
- **Demonology**: pet in → Searing Pain (brand; never before Demonic Brand – it pulls aggro) → Agony, Corruption, Immolate → wand/Shadow Bolt → refresh Searing Pain before the brand expires. Decimation: free Soul Fire at <35%.
- **Destruction**: pet in → Agony/Corruption/Immolate → Shadow Bolt until aggro → wand → Conflagrate just before Immolate expires → Shadowburn finisher (shard refunded).
- AoE: Hellfire (30) or Rain of Fire (20).

### 1.10 Soul shards & bags
- Shard costs: Voidwalker/Succubus/Incubus/Felhunter summons, Healthstone, Soulstone, Soul Fire (except Decimation), Shadowburn, Ritual of Summoning [CF]. Imp is free.
- Farming: let the pet tank and channel **rank 1 Drain Soul**; each tick can give a shard [CF].
- **Shards do not stack** (players asking for 5/20 stacks; no Blizzard reply) [BETA, forum https://us.forums.blizzard.com/en/wow/t/2368623].
- **Soul bags can go in the new 5th "Reagent bag" slot** (WT-WL, WT-LVL, forum) [CF]. The trade-off: herbs/reagents then go into normal bags.
- Soul bag recipes (WIKI-TAIL): **Soul Pouch – Tailoring 215, vendor** (lower than Classic's skill req); **Felcloth Bag – 285**; **Core Felcloth Bag – 300, drop**. Slot counts for Forever [UNKNOWN]. Classic: Soul Pouch 16, Felcloth 24, Core Felcloth 28 [CLASSIC?].
- Legacy perk **Reagent Economy**: class abilities no longer need vendor reagents. It does not remove shard costs; a bug that made Incubus free with it was fixed Oct 15.
- Keep ~3–5 shards (Voidwalker emergency, Healthstone, Soulstone, 1–2 for summons).

---

## 2. GNOME (Forever)

### 2.1 Racials – final state as of Oct 27 dev notes [CF unless noted]
| Racial | Forever version | Source |
|---|---|---|
| **Expansive Mind** (passive) | **+5% maximum mana** (resource) | WIKI-RACIAL, METHOD, lfcarry |
| **Eureka!** (new, active) | 2 min CD, instant, **8 s buff (no charges since Oct 15)**: **non-periodic** damaging/healing abilities cost **10% less** and deal **10% more**. **Oct 1: "no longer benefits periodic effects at all. Channeled spells do not count as periodics."** So it buffs Shadow Bolt, Searing Pain, Immolate's initial hit(?), Conflagrate, Shadowburn, Incinerate, Soul Fire **and channels (Drain Life, Drain Soul, likely Wrack)**, but **not** Corruption/Agony/Siphon Life ticks. Doesn't work in stealth/invisibility | WIKI-RACIAL, BLIZZ-DEV/PMM |
| **Escape Artist** | Instant (no cast), **2 min CD**; removes movement-impairing effects + **3 s immunity** | WIKI-RACIAL, WT-WL |
| **Engineering Specialization** | Engineering devices fail/backfire **20% less** (no more skill bonus) | WIKI-RACIAL |
| Arcane Resistance | **Removed** (all resistance racials gone) | WT gnome |

Outdated or contradictory claims to ignore: GG-GNOME ("next 3 spells 50% cheaper", Escape Artist 1 min – convention build); WT-WL "Eureka also applies to active DoTs" (pre-Oct-1); Method "Eureka does not affect DoTs" (still true; it now *does* affect channels).

**Warlock interaction summary**: +5% mana means slightly more Life Tap headroom. Eureka is a 2-min burst for Destruction/Demonology direct casts and for Affliction **Drain Life/Wrack** windows (use it after DoTs are up, during Wrack/Drain). Escape Artist is anti-snare/root PvP utility. Engineering racial suits Engineering (PvP) builds.

### 2.2 Gnome vs Human (Alliance warlock choices; only these two can be Alliance warlocks) [BETA]
- Human after Oct 26: **Ruthless +1% crit** (was 2%), **The Human Spirit +10% Spirit** (was 5%; strong with **Spirit-scaling Life Tap**), **Will to Survive** (stun break / PvP trinket), Perception.
- Rankings conflict: METHOD Human S / Gnome B (pre-Oct-26), Icy Veins picks Gnome for Alliance, CC-WL "Human strongest Alliance", wowtbc.gg "all races within 1% DPS", RankedBoost Undead > Troll > Gnome.

### 2.3 Starting zone [CF/BETA]
- **Coldridge Valley (Dun Morogh)**, shared with Dwarves; start at **Anvilmar (29.9, 71.2)**. Unchanged as of beta (GG-DM: route built on Classic Anniversary quest data; Blizzard reworking itemization, so rewards may differ). Capital **Ironforge**; rep **Gnomeregan Exiles** (mount/riding discount 5/10/15/20% at Friendly/Honored/Revered/Exalted per WT gnome; the generic rule elsewhere is 10% at Honored).
- Gnome starting stats (Warlock): Str 17, Agi 21, Int 25, Sta 20, Spi 22 (WT gnome).
- Gnome mount: **Mechanostrider**; trainer Binjy Featherwhistle (49.2,48.1) and vendor Milli Featherwhistle (49.1,48.0) at **Steelgrill's Depot**, Dun Morogh. No reputation needed for gnomes.

---

## 3. ALLIANCE LEVELING ROUTE (Gnome perspective)

### 3.1 Dungeon table [CF levels from WT-DUN unless noted; ★ = new in Forever]
| Dungeon | Levels | Location | Alliance notes |
|---|---|---|---|
| ★ **Hall of Thanes** | 13–18 (Icy: 13–20) | **Ironforge** (King's hall, spider-web passage at 43.5,52.0) | Alliance-only quests (Horde get none). Quests: Important Heirlooms (Thom Filch, at bridge), The Restless Dead (Afadra Dunwall), **Old Ironforge Incursion** (Earthseer Farsen, Dun Morogh 64.8,58.5; prereq "Nip 'Em in the Bud" – 10 Dark Iron Spies ~76.7,60.7, a spy drops **Dark Iron Map** → breadcrumb; kill Durgen Dirgehammer → King Magni), An Ancient Grudge (Ghostly Attendant, room 2), The Treaty of Understanding (tablet in final room → Magni, XP). Bosses: Faldrim Anvilmar, Magmatus, Plunder, Durgen Dirgehammer. Loot [UNKNOWN] |
| ★ Ruins of Lordaeron | 15–20 (Icy 15–22) | Tirisfal Glades (Horde territory) | 4 Alliance quests picked up inside: Abominable Creatures, Bloodied Insignia (→ Gen. Marcus Jonathan, SW), Remember That I Love You (→ SW Cathedral → Darkshire), Crest of Lordaeron. Out of the way for Alliance |
| The Deadmines | 15–22 (OVG 17–26) | Westfall | Classic |
| Wailing Caverns | 17–24 | Barrens | |
| Shadowfang Keep | 20–26 | Silverpine | Orb of Soran'ruk fragments (with BFD) |
| **Blackfathom Deeps** | 22–28 | Ashenvale | **Blackfathom Villainy** (req 18; Argent Guard Thaelrid inside → Head of Kelris → Dawnwatcher Selgorm, Darnassus) → **Gravestone Scepter** wand, the best wand before ~30–40. Forever stats conflict: 29.0 DPS, +3 Spi, +6 Shadow vs 30–57 dmg, +3 Spi, +4 Shadow res. Other quests: Knowledge in the Deeps (Gerrig Bonegrip, IF), Researching the Corruption (Auberdine), In Search of Thaelrid / Twilight Falls (Darnassus) |
| The Stockade | 25–29 | Stormwind | |
| ★ **Excavation Site: Wetlands** | 24–29 (dungeon page: 26–33, quests from 24) | Wetlands (path left of Thelgen Rock 53.9,65.4; entrance 48.1,56.5) | Alliance: Songblade Search (Dorin Songblade, Lakeshire), Lost in the Thicket Things (Caitlin Grassman, Menethil; breadcrumb Seeking Caitlin from Astranaar), Highland Hides (bugged in beta), Horrors in the Highland (Rethiel, Wetlands 56.3,40.3; prereqs Tramping Paws/Fire Taboo/Blisters on the Land), Lost Relic Carry (in dungeon → Prehistoric Prism). Bosses Saltspine, Shadetooth, Highland Horror, Relic Guardian |
| ★ **City of Dalaran** | 28–33 (Mobalytics 28–30) | Alterac Mountains | Alliance: Power Overwhelming (High Sorcerer Andromath, SW 48.9,87.7), A Green Sample (Shylamiir, SW), Starving Arcane & Heart of Disruption (Archmage Modera, Silverpine 68.5,45.1; prereq An Alarming Request from Emissary Jaques, Southshore) |
| Gnomeregan | 29–38 | Dun Morogh | Quests same as Classic, "only the rewards updated": Save Techbot's Brain!, Gnogaine / The Only Cure is More Green Glow (Ozzie, Kharanos), Data Rescue, Essential Artificials, Gyrodrillmatic Excavationators, **The Grand Betrayal** (Mekkatorque) – rewards [UNKNOWN] |
| Razorfen Kraul | 29–38 | Barrens | **Staff of the Shade** (+37 Shadow, 15 Sta, very rare) – Affliction from 22 (WT-LVL) |
| SM GY / Lib / Arm / Cath | 30–38 / 33–41 / 36–44 / 38–46 | Tirisfal | |
| ★ **The Drowned City** | 35–40 (Mobalytics 35–50) | Stranglethorn Vale | Quests/loot [UNKNOWN] |
| Uldaman | 36–45 | Badlands | |
| Razorfen Downs | 37–46 | Barrens | |
| Zul'Farrak | 40–47 | Tanaris | |
| ★ **Krol'dok Stronghold** | **40–45** (Blizzard clarified; not 55. Wiki still 40–55) | Riverglades | [UNKNOWN] |
| Maraudon | 45–51 | Desolace | |
| ★ **Alcaz Island Prison** | 48–53 | Dustwallow Marsh | |
| Sunken Temple | 50–55 | Swamp of Sorrows | |
| BRD | 52–60 | Blackrock Mtn | |
| ★ **Blackmaw Hold** | 55–60 | Azshara | |
| LBRS 57–60, UBRS 60, DM E 58–60, DM W/N 60, Strat L/U 58–60, Scholo 58–60 | | | Classic |
| ★ **Shaper's Terrace** | 58–60 | Un'Goro Crater | |
- Datamined, not in the list: Manor Mistmantle, Half-Pint Tavern [UNKNOWN].
- Raids (Dec 9 unlock): Hyjal Summit (20), Barrow Deeps (10), Onyxia's Lair (40) (WIKI-F).
- Dungeon XP (dev notes) [CF]: Oct 1 – dungeon quests give **50% less extra XP**. Oct 8 – dungeon mob XP **+~20%**. Higher-level group members heavily reduce your kill XP. Low-level boosting is nerfed.

### 3.2 Zone minimum levels (WT-LVL) [BETA]
1: Elwynn, Dun Morogh, Teldrassil, Zephras Isle (Skyborne 1–12) · 10: Westfall, Loch Modan, Darkshore · 15: Redridge · 18: Ashenvale · 20: Wetlands, Hillsbrad, Duskwood · 25: Thousand Needles · 30: Alterac, Arathi, Desolace, STV · **35: Badlands, Dustwallow, Feralas, Riverglades, Swamp of Sorrows** · **40: Shen'dralas, Tanaris, Hinterlands** · 43: Searing Gorge · 45: Azshara, Felwood, Blasted Lands · 48: Un'Goro · 50: Burning Steppes, WPL · 53: Winterspring, EPL · 55: Silithus, Deadwind · **60: Mount Hyjal**.

### 3.3 Suggested Alliance route for a Gnome warlock (merged from EXPC-ALLY, CC-WL, OVG, GG-DM) [BETA]
| Bracket | Zones | Dungeons | Notes |
|---|---|---|---|
| 1–6 | Coldridge Valley | – | Imp quest (Alamar Grimm). Train at Alamar Grimm (only to lvl 6) |
| 6–10/12 | Kharanos / Brewnall / Shimmer Ridge → eastern Dun Morogh (Gol'Bolar, Amberstill) | – | Bind in Kharanos; trainer Gimrizz Shadowcog. "The Reports" → Ironforge flight path. **Voidwalker quest at 10 (Ironforge)**. Library book: Ironforge (Hall of Explorers 76.1,10.2). "Stout to Kadrell" → Loch Modan |
| 10–15 | Loch Modan (Thelsamar) | **Hall of Thanes 13–18** (do "Nip 'Em in the Bud" in Dun Morogh for the Dark Iron Map chain) | Library books: Thelsamar inn 35.6,48.9; Mo'grosh cave 77.5,14.1. Enchanting: Lesser Magic Wand (lvl 5) / Greater Magic Wand (lvl 13) |
| 15–20 | Westfall (Sentinel Hill) + Redridge (Lakeshire) **or** Darkshore (Auberdine – new **Stormwind ↔ Auberdine boat**) | Deadmines; BFD from ~20; Ruins of Lordaeron optional | Library: Westfall Moonbrook 45.4,70.4 & Sentinel Hill Inn 52.7,53.7; Darkshore 59.6,22.2. **Azeroth Commerce Authority camp – Three Corners, W Redridge (Marcy Baker)** – start Merchant's Favor. **Cozy Sleeping Bag chain at 14+** (Westfall → Barrens → Stonetalon → Loch Modan → Hillsbrad). **Succubus/Incubus quest at 20 (Stormwind)** |
| 20–25 | Duskwood (Darkshire), Wetlands, Ashenvale (Astranaar); alt. Redridge, Hillsbrad | **BFD** (Gravestone Scepter), Stockade | Library: Duskwood catacombs 6.7,28.5; Wetlands 33.6,47.9 |
| 25–30 | Wetlands (Menethil), Duskwood, Ashenvale; alt. Hillsbrad (Southshore), Stonetalon | **Excavation Site: Wetlands (24–29)** | New boat Menethil ↔ Southshore ↔ Auberdine. **Felhunter quest at 30** |
| 30–35 | Stranglethorn (Booty Bay), Arathi (Refuge Pointe), Desolace; alt. Alterac | **City of Dalaran (28–33)**, Gnomeregan, SM | Library: Alterac 48.5,57.6; Arathi 73.0,65.0; Desolace "Demons and You" 55.0,28.0; STV 41.5,50.8 |
| 35–40 | **Riverglades (Farholde Keep)**, STV; alt. Dustwallow, Arathi, Desolace, Badlands | **The Drowned City (35–40)** | Riverglades 35–45: 150–200 quests, entry from Redridge (Blackrock/Redridge Pass), Powderfuse Port neutral, boat to Tanaris. **40: mount (Felsteed quest in Ratchet), Dual Spec 10g, Wrack** |
| 40–45 | Riverglades, Tanaris (Gadgetzan), Feralas (Feathermoon), Hinterlands (Aerie Peak); Shen'dralas (lvl ? – WT says 40+, unofficial) | **Krol'dok Stronghold (40–45)**, ZF | Shen'dralas: SE of Desolace via Valley of Bones; contested; ties to Maraudon/RFD; official range [UNKNOWN] |
| 45–50 | Tanaris, Feralas, Hinterlands; Searing Gorge, early Un'Goro | Maraudon, **Alcaz Prison (48–53)** | |
| 50–55 | Un'Goro (Marshal's Refuge), Felwood (Talonbranch), Burning Steppes (Morgan's Vigil), WPL (Chillwind), Azshara | Alcaz, Sunken Temple, BRD | |
| 55–60 | WPL/EPL (Light's Hope), Winterspring (Everlook), Silithus (Cenarion Hold) | **Blackmaw Hold (55–60)**, **Shaper's Terrace (58–60)**, BRD, LBRS, DM, Strat, Scholo | |
| 60 | **Mount Hyjal** (endgame zone; reached via Darkwhisper Gorge) | Raids Dec 9 | |
- Forever has **no level scaling**; skip gray/low-value quests (EXPC-ALLY). Quests >5 levels below you lose 10–20% XP per extra level (WT-XP).
- Exact 31–60 quest-by-quest routes **do not exist yet** (no beta access). All 30+ routing is [BETA]/theory.

### 3.4 Warlock-relevant items on the route
- **Wands** (Enchanting, WIKI-ENCH): Novice's Practice Wand (skill 1, new), Lesser Magic Wand (10; req lvl 5, 11.3 DPS per WT-LVL), Greater Magic Wand (70; req lvl 13, 17.5 DPS), Lesser Mystic Wand (155), Greater Mystic Wand (175), Twisted Nether Wand (185), Dreambough Wand (215), Lesser Eternal (245), Greater Eternal (275), **Brilliant Wand (275, Merchant's Favor 180, Honored, req 55)**. Required levels for Mystic and later [UNKNOWN].
- **Wand nerfs [CF]**: Sep 24 – wands **no longer gain damage from spell power**. Oct 15 – you must **stand still 0.5 s** before a wand shot. Oct 1 – crafted common/uncommon wands vendor for 1c. Wands are still the main filler to ~30 (Mobalytics main: "wands very strong, Drain Life very weak until the 30s"). Some guides say wands matter into the 40s.
- **Gravestone Scepter** (BFD quest) – best wand ~20–40 [BETA].
- **Staff of Soran'ruk** (2H, +34 Shadow & Fire dmg, 14 Sta) / **Orb of Soran'ruk** (OH, +9 Shadow & Fire, use: heal over 30 s). Fragments from BFD + SFK (WT-LVL) [BETA].
- **Staff of the Shade** (RFK, +37 Shadow, 15 Sta, very rare) [BETA].
- **Filigreed Shadow Gown** (Tailoring 75, dungeon-drop recipe) / Leggings (100) / Circlet (125). Shadow dmg + Int for Affliction. Fire variants ("Filigreed Flame Gown") for Destruction/Demonology. Low-level dungeon drops; which dungeon [UNKNOWN]. Soulbound / crafter-only per WT-LVL & METHOD.
- Hall of Thanes / Excavation / Dalaran / Gnomeregan quest reward items: **[UNKNOWN]** – no source lists them. Rewards were reworked from Classic.
- **Library-book rewards** (turn in to Garon Wendell, Stormwind 38,81): 10 books → Scholarly Pendant or Erudite's Amulet; 20 books (lvl 20) → Field Researcher's Loop or Philanthropist's Ring; 25 books (lvl 30) → Truthseeker's Bow / Crest of Elucidation / **Researcher's Night Light** (likely caster off-hand – stats [UNKNOWN]). Locations are based on Season of Discovery; a couple of books may have moved [BETA]. Easy Alliance books: Elwynn 65.4,70.1 (Tower of Azora), Ironforge, Loch Modan ×2, Westfall ×2, Darkshore = 7, plus Duskwood/Wetlands/Stonetalon = 10.

---

## 4. PROFESSIONS

### 4.1 List & caps [CF, WT-PROF]
- **Primary (pick 2)**: Alchemy, Blacksmithing, Enchanting, Engineering, **Herbalism, Leatherworking, Mining, Skinning**, Tailoring. **Secondary (all 3)**: Cooking, First Aid, **Fishing**. **No Jewelcrafting.** Herbalism, Mining, Skinning and Fishing are all present.
- Max skill **300**. Apprentice (lvl 1 gathering / 5 crafting) to 75 · Journeyman (lvl 10) 50–150 · Expert (lvl 20) 125–225 · Artisan (lvl 35) 200–300 (special trainers; secondary via quest).
- Starter quest gives one gathering profession +2 skill (Mining for Dummies / Pelt Collecting for Beginners / Wild Harvest).
- Changes: **Minor Healing Potion moved Alchemy → First Aid** (First Aid crafts health potions and cures). Armor crafters get **new BoP patterns**. 600+ recipes. Crafting specializations are expected (Gnomish/Goblin Engineering at 200+). Oct 15: many crafted items vendor for less.
- Legacy points: 150/225/300 in Alchemy, Blacksmithing, Enchanting, Engineering, Leatherworking or Tailoring.
- **Reagent bag slot** (5th slot) [CF]: Linen Reagent Bag (Tailoring 5, 6 slots), Woolen (70), Silk (125, quest), Mageweave (190, MF), Runecloth (215, MF), Mooncloth (255), Bottomless (300). **Red Linen Bag now 8 slots**. Default bank ~96 slots (WT bags news).

### 4.2 Camping [CF mechanics / BETA numbers]
- Needs the **Cooking** profession learned (no skill needed for a Basic Campfire). Campfire = Flint and Tinder + wood: Basic (Cooking 1, Simple Wood, 3 object slots), Journeyman (140, Star Wood, 5), Expert (220, Thick Logs, 10). Fire burns 10 min, 5 min CD, single use. Camping unlocks at ~lvl 5. Profession camp buffs start at skill 20 (WIKI-F).
- Each object: 1 per character, 1 h CD. `/sit` for 1 min near the fire → combined "Camp Benefits" buff. Buffs are slightly weaker than the class equivalent and don't stack with it (e.g. 8% vs 10% Kings). Multiple players can share a camp.
- Tier-1 objects/buffs: Alchemy Mana Well (mana regen ≈ Wisdom) · Blacksmithing Sharpening Wheel (Str) · Enchanting Enchanted Lute (stats & resist ≈ MotW) · Engineering Reagent Bot (vendor; T2 Repair Bot) · First Aid Kit (Stamina ≈ Fort) · Fishing Fish Bowl (stats ≈ Kings) · **Herbalism Incense Candle (Intellect ≈ AI)** · Leatherworking **Camp Tent (Rested XP / XP buff 1 h, persists through death)** · Mining Lodestone (AP) · **Skinning Camp Chair (+crit; WT-LVL "2% crit")** · **Tailoring Faction Banner (Spirit ≈ Divine Spirit → more Life Tap mana)**. T2/T3: Spinning Wheel/Loom, Arcane Salvager/Arcane Forge, Greenhouse/Seed Hybridizer, etc. Exact buff values [UNKNOWN].
- XP buffs [CF, WT-XP]: Well Fed (cooking) **+5% kill XP ~15 min** (lost on death); **Cozy Sleeping Bag** up to **+3%** (3 stacks × 1%/min lying on it; persists through death; counts as a rested area; 1 h CD; party-usable; not in rested zones); Camp Tent rested buff. All stack.
- **Cozy Sleeping Bag (item 211527), Alliance, lvl 14+** [BETA]: Nailed Plank at Alexston Farmstead, Westfall 37,50 ("...and that note you found") → Burned-Out Remains, Barrens 46,74 ("Stepping Stones") → Pocket Litter near Sun Rock Retreat, Stonetalon (gives Flint and Tinder + 3 Simple Wood; "Scramble" mound east) → Carved Figurine on Stonewrought Dam, Loch Modan 49,12 ("Eagle's Fist") → Messenger Bag atop Thoradin's Wall, Hillsbrad ("This Must Be the Place") → Cozy Sleeping Bag + 5 Student Fodder.

### 4.3 Merchant's Favor / Azeroth Commerce Authority [BETA numbers]
- Alliance camp: **Azeroth Commerce Authority, Three Corners (W Redridge)**; hand-in **Marcy Baker**. (Horde: Durotar Supply and Logistics, Dokimi, outside the Crossroads.)
- Loop: **Waylaid Crates** drop in the open world or come from the AH → fill with ONE listed bundle (e.g. 40 Linen Cloth / 20 Light Leather / 20 Copper Ore / 20 Peacebloom or Silverleaf / 20 Strange Dust) → Sealed crate (bound) → turn in for MF + some silver. Apprentice (lvl 10) 5/10 MF, Journeyman (lvl 10) 10/20, Expert (lvl 20) 15/30, Artisan (35) [UNKNOWN]. **Craftsman's Writs** (daily) give rep only: 75/125/200. First Shipping Label quest: 2,000 rep + 50 MF. Legacy "Performance Bonus": 5% chance of double MF.
- **Tailoring – Shadow set (Mivin Shadowweave, Alliance)**, no rep needed, **30 MF each**: Shadow Boots (req lvl 12, skill 60), Shadow Gloves (15/75), Shadow Sash (17/85), Shadow Circlet (20/100), **Shadow Gown (22/110)**, Shadow Leggings (25/125). Friendly: Black Handwraps (35/165, 60 MF), Netherpearl Shoulders (42/195), Netherpearl Cuffs (45/205), Black Waistcord (47/215), 60 MF each. Honored: Black Sandals (50/235, 90 MF). The Flame set (Fire, for Destruction/Demonology) has the same structure: Flame Boots…, Fiery Handwraps, Netherflame Shoulders/Cuffs, Fiery Waistcord/Sandals. Per WT-LVL, MF Shadow pieces are **soulbound, crafter-only**.
- **Enchanting (Alynsia, Alliance)**: Glimmering Staff / **Soulstaff** / **Orb of Souls** / Orb of Mystic Insight (req 25, skill 140, 45 MF, no rep). Dreamstaff / Radiant Staff / Truesilver Conduit / Twisting Essence Jar (req 45, skill 220, 120 MF, Friendly). **Brilliant Wand** (req 55, skill 275, 180 MF, Honored).
- Engineering cloth items: Whimsical Waistwrap (req 30, skill 175, 180 MF, Friendly), Floppy Goggles (req 40, skill 200, 180 MF, Friendly).
- Long-term: Pack Kodo mount 6,000 MF (Exalted, lvl 60), tabard 200 MF (Exalted), profession certifications 1,000 MF.

### 4.4 Recommended combos for a Gnome Warlock [BETA]
1. **Tailoring + Enchanting** (consensus: WT-WL, WT-LVL, METHOD, CC-WL, lfcarry "PvE"). Tailoring gives Shadow/Fire leveling gear (MF Shadow set lvl 12–25, Filigreed Shadow Gown), Soul Pouch/Felcloth bags, Faction Banner Spirit camp buff and Legacy points. Enchanting disenchants Tailoring output and makes Lesser/Greater Magic Wand early plus Soulstaff/Orb of Souls (45 MF) at 25.
2. **Engineering + Tailoring** (lfcarry "PvP"; synergy with the Gnome racial's 20% less backfire, Gnomish spec at 200).
3. **Herbalism + Alchemy / Skinning** (gold; Herbalism Int camp buff; Skinning crit camp buff).
- Always: **Cooking** (campfire + XP food) and **First Aid** (bandage, then Life Tap the HP back; health potions).

---

## 5. GEAR / STATS [BETA]
- Leveling priority (WT-LVL): **early: wand DPS > Spell Power/Int > Sta/Spi**. Affliction 30+: Spell Power/Shadow dmg > Int/Spirit > Stamina (wand DPS matters until ~30). Demonology: SP/Shadow > wand > Int/Spi > Sta. Destruction: SP/Fire > wand > Int/Spi > Sta. CC-WL: Spell Power > Stamina/Int/Spirit. WT-AFF: Spell Damage > Stamina/Spirit > Intellect.
- Spirit matters more than in Classic (**Life Tap scales with Spirit**; Tailoring banner +Spirit; Human Spirit +10%).
- Crit now matters for Affliction (DoTs crit, Pandemic, Malevolence). Haste isn't on leveling gear (beta). Hit: spells have a 3% miss vs equal level and 16% vs raid bosses; Suppression 4/5 covers same-level mobs.
- Stat conversions (WT stats): 1 Int = 15 mana (pets too); ~54–60 Int per 1% spell crit (warlock at the high end); 1 Sta = 10 HP.
- Firestone (28) / Spellstone (36) imbues stack with Wizard Oil.
- **Pre-raid BiS**: Forever-specific lists exist only partly (wowtbc.gg Destruction/Demonology BiS pages; lfcarry hub). Items are reworked vs Classic, so [UNKNOWN]/[BETA]. Dungeon Set 2 is mentioned as part of pre-raid.

---

## 6. COSTS
| Item | Cost | Tag / Source |
|---|---|---|
| Apprentice Riding (60%) | **lvl 40, 100 g** | CF – WT-RIDE, METHOD |
| Racial mount (mechanostrider) | 20 g (WT-RIDE) **vs** included in the 100 g with extra colors 20 g each (METHOD) – CONTRADICTION | BETA |
| Journeyman Riding (100%) | lvl 60, **1,000 g**; epic mount 200 g | BETA – WT-RIDE, METHOD |
| Discounts | Honored with home faction 10% (riding + mounts); Legacy **Bartering** up to 10% off mounts (not riding); Gnomeregan Exiles 5/10/15/20% per WT gnome page | BETA |
| **Warlock Felsteed** | lvl 40 quest "Summon Felsteed" from **Strahad Farsan, Ratchet** (Barrens). METHOD: free mount. WT-RIDE: warlocks "learn riding and get their mounts through class quests". Whether the 100 g riding fee is waived is **not confirmed** | BETA |
| Dreadsteed | lvl 60 quest chain; reagents cost "hundreds of gold" (METHOD) | CLASSIC? |
| Dual Spec | **10 g at lvl 40** | CF – WIKI-F |
| Respec | Per-spec fee, rises with use, decays back to 1 g over time. Beta 1 s. Launch schedule [UNKNOWN] | CF (mechanic) / UNKNOWN (numbers) |
| Spell training total | **[UNKNOWN]** – use What's Training? (Forever) / Ranksmith addons | |
| Grimoires | "very expensive" – [UNKNOWN] | |
| Flight paths | Legacy Frequent Flier: –50% cost, +20% flight speed | CF |
| Time to 60 | lfcarry: "about 150 hours of play" | BETA (low confidence) |

### XP table (WT-XP) [CF]
Lvl 1→2: 400 · 5: 2,800 · 10: 7,600 · 20: 23,200 · 30: 47,400 · 40: 90,700 · 50: 147,500 · 59→60: 209,800. Total to 60: **4,084,700** (Classic curve). Rested: 5% of a level per 8 h; cap 150% (30 bubbles); doubles kill XP only.

### Legacy system (WT-LEG) [BETA]
- First point at **lvl 25** or 150 in a crafting skill. Points come from character levels 25/45/60 per class, tradeskill 150/225/300, PvP, exploration, dungeon "Spelunker" groups and raids (65 total). Season cap **16 investable** at launch. Earned account-wide but distributed per character. Rewards at 15/25/40/55 from Innkeeper Wiley (Ratchet).
- Leveling perks: **Talented** (5 ranks; first talent point at 9 → 5 instead of 10), **Well Rested** (5; +4% rested rate/cap per rank), **Thrill of Adventure** (5; 1% HP+mana per rank over 10 s on non-trivial kills, open world only), Frequent Flier (1), Field Guide (camp CD –8%), Permanence (+50% buff/camp duration), Gourmand (+33% food buff), **Reagent Economy** (no vendor reagents), Bartering (–5% vendor prices per rank), Working Overtime, Dedicated Study.
- On a first character, Legacy points only start at 25 (or Tailoring/Enchanting 150), so early Talented benefits are mostly for alts. Whether buying Talented mid-level grants points retroactively is [UNKNOWN].

---

## 7. BAGS / INVENTORY
- Slots: backpack + 4 bags + **1 Reagent slot** (put the **Soul Pouch** here) [CF]. Bank ~96 slots [BETA]. Mounts and transmog are collections, so no mount items take bag space [CF].
- Shards don't stack → cap at ~3–5 (summon, Healthstone, Soulstone, emergency Voidwalker, 1–2 for Ritual of Summoning). Delete extras from Drain Soul/Soul Harvest [BETA].
- **Keep**: Healthstone, Soulstone, current wand, Flint and Tinder + wood (Simple/Star/Thick) for campfires, XP food, bandages, Waylaid Crates (fill → MF), **library books** (individual turn-in at Garon Wendell, SW), quest-starter drops (**Dark Iron Map** – Hall of Thanes; **Bloodied Insignia** / Crumpled Paper / Crest of Lordaeron – Ruins; Titan Relic – Excavation; Head of Kelris – BFD), class-quest items for Voidwalker/Succubus/Felhunter steps, Student Fodder.
- **Vendor**: gray loot, crafted common/uncommon wands (sell for 1c – not worth crafting for profit), most crafted gear (sell prices reduced Oct 15). Disenchant greens if you're an Enchanter.

---

## 8. OPEN QUESTIONS / UNKNOWNS (do not fabricate in the guide)
1. Spell and grimoire training costs (per spell and total).
2. Exact Life Tap Spirit coefficient; Wrack base damage (36 vs 52/s); final numbers for Improved Drains and Soul Siphon (two conflicting datasets).
3. Quest reward items in Hall of Thanes, Excavation Site, Dalaran, Drowned City, Krol'dok, Alcaz and Gnomeregan (reworked).
4. Shen'dralas official level range; Drowned City location/quests; Riverglades quest rewards.
5. Soul bag slot counts in Forever; whether shards stack (assume no).
6. Whether the Felsteed quest waives the 100 g riding fee; whether the 100 g includes the racial mount.
7. Respec fee schedule at launch.
8. Level-60 Affliction build (Wrack untested above 30 per CC-WL).
9. Voidwalker quest exact names/steps for gnomes in Forever (WT-LVL "The Slaughtered Lamb" from Ironforge vs Classic Gakin chain; final step "The Binding").
10. Whether Researcher's Night Light (library reward) is a good caster off-hand.
