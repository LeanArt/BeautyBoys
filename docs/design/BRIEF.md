# Design brief – Waypoint (WoW: Forever beginner leveling companion)

## Product
- **Waypoint**: free, fan-made, interactive leveling companion for *World of Warcraft: Forever* (Blizzard's "Classic+", launches 2026-11-04).
- MVP guide: **Gnome Warlock** (Alliance). Pages: home, Start here (new player basics), guide overview, Route (checklist of ~65 hub-and-zone steps with key quests, NPCs, coordinates, `/way` copy buttons, progress bar, resume/jump-to-level, backup codes), Talents/spells/demons (tables), Professions & support alts, Bag advisor (filterable cards: keep/sell/buy/bank/auction/use/destroy), Forever systems explainer, Library books checklist (41 books grouped by zone), Glossary.
- Every fact has a **confidence badge** (official / beta-tested / community / theory) and collapsible **sources**.
- A global **"My level"** input highlights what matters now on every page.
- Wowhead tooltips (`wow.zamimg.com/js/tooltips.js`) iconize and color item/spell/quest links by quality (q0 grey … q5 legendary).

## Audience & context of use
- **Brand-new WoW players** (never played). Plain language, low jargon.
- Used **on a phone or second monitor while playing**: glanceable, big tap targets, readable at arm's length, dark mode matters (gaming at night), long sessions.
- Dense reference data (tables, coordinates, quest lists) must stay scannable.
- Private for now; will be shared with friends/testers later.

## Constraints
- Stack: **Astro 5 static site**, vanilla CSS with custom properties in `src/styles/global.css`, scoped `<style>` in `.astro` components, small vanilla TS in `src/scripts/`. No CSS framework. Keep it that way.
- Must support **light and dark** (system preference + manual toggle via `data-theme` on `<html>`), WCAG AA contrast, visible focus, reduced motion, no horizontal scroll at 360px, 44px touch targets for primary controls.
- **Fan site, not Blizzard**: do not imitate Blizzard's logos, brand marks, UI chrome or copyrighted art/fonts (e.g. Friz Quadrata is a licensed font – don't use it). Evoking the *world* (Azeroth, parchment, arcane, fel) is fine; impersonating the *company* is not. Google Fonts (or system fonts) only. Any icon/illustration must be hand-made inline SVG or from an openly licensed set.
- Must coexist with Wowhead tooltip link colors (quality colors) in both themes.
- Don't break any existing interaction (checkboxes/progress/localStorage, filters, copy buttons, level highlighting, theme toggle).

## Known weaknesses of the current design (from Anthropic's frontend-design skill "generated design tells")
The current UI uses several defaults that read as templated: warm cream background (#f6f2ea) + high-contrast serif display (Spectral); tracked ALL-CAPS eyebrow labels above headings; middle-dot meta strings ("Dun Morogh · Kharanos"); monospace for small data labels (coords); the "SaaS card kit" (identical rounded cards with the same soft shadow everywhere); purple accent chosen without a reason. The goal is a **deliberate, subject-specific design system**, not a reskin.

## Reference skills (read as reference material only – do not install or execute their scripts)
- Anthropic frontend-design: `/home/user/anthropics/skills/skills/frontend-design/SKILL.md`
- UI/UX Pro Max (≈112k★): `/home/user/nextlevelbuilder/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/` – `SKILL.md`, `references/quick-reference.md` (119 UX rules), `references/pro-rules.md`, and data tables in `data/` (`styles.csv`, `colors.csv`, `typography.csv`, `ux-guidelines.csv`, `products.csv`, `ui-reasoning.csv`). Read/grep the CSVs directly; do not run `scripts/*.py`.
- UI/UX Pro Max design-system skill: `/home/user/nextlevelbuilder/ui-ux-pro-max-skill/.claude/skills/design-system/SKILL.md`
- Graph orchestration method (this workflow follows it): `/home/user/token-eater/skills-marketplace/skills/graph-skills/SKILL.md`

## Codebase
- Repo: `/home/user/BeautyBoys` (branch `claude/design-system`). Key files: `src/styles/global.css`, `src/layouts/Base.astro`, `src/components/*.astro`, `src/pages/**/*.astro`, `src/scripts/*.ts`.
- Build: `cd /home/user/BeautyBoys && npx astro build` (static output in `dist/`). Preview: `npx astro preview --port <port>`.
- Data validation: `node scripts/validate-data.mjs`.
- Playwright + Chromium are preinstalled: `require('playwright')` works from any directory; `chromium.launch()` needs no options. Never run `playwright install`.
