# Fastest route: research notes

Source notes behind `src/data/fast-route-gnome-warlock.json` (the step-by-step 1–60 route on
`/guides/gnome-warlock/fast-route/`). Written Nov 5–6, 2026, one to two days after launch.

| File | What |
|---|---|
| `sweep-official.md` | Blizzard posts, dev notes, launch hotfixes, XP rules, the Alliance travel network |
| `sweep-wowhead.md` | Wowhead Forever database: zone-by-zone quest inventory, new Forever quests and ids |
| `sweep-forums.md` | Blizzard forums (US/EU): launch-week and beta leveling threads, measured XP/hour |
| `sweep-launch.md` | The launch race (race.aotc.gg): who went where at which level, /played milestones |
| `sweep-youtube.md` | YouTube leveling guides (titles, descriptions, chapters; no transcripts) |
| `sweep-guides.md` | Guide sites, RestedXP/Questie for Forever, Classic Alliance speed routes as the 30–60 baseline |
| `skeleton.md` | The judged macro route: decisions at every fork with evidence, legs, time model, skips |
| `critic.md` | Round 1: cross-leg continuity check, fixes, open issues, the /played estimate (~145 h) |
| `round2-plan.md` | Round 2: which grind blocks to replace with which quest hubs, per part, with an XP budget |
| `critic-round2.md` | Round 2: continuity check after the reroute, training table, hours per part (~138 h) |

How it was made: six source sweeps → two independent route designs (minimum travel vs maximum XP/hour) →
a judge merged them → one builder and one adversarial verifier per leg → a continuity critic. Round 2 replaced
about 2,600 grind kills with quest hubs (planner → one rerouter and one verifier per part → critic) and rewrote all
player-facing text in plain language. "Leg" in these notes is "part" on the site; published ids are `part-1` … `part-10`.
Every Wowhead id in the data is checked against Wowhead Forever's tooltip API (`npm run verify:wowhead`).
Reddit could not be reached; YouTube was read through titles, descriptions and chapters only.
