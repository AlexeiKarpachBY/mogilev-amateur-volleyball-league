# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A client-side-only volleyball league management app for Mogilev, Belarus. No build tools, no package manager, no backend — pure HTML5, CSS3, and ES6 JavaScript loaded directly by the browser.

## Running the Project

Open `index.html` directly in a browser, or serve with any static file server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

There are no build, lint, or test commands — the project has no toolchain configuration.

## Architecture

### JavaScript Module Load Order (defined in index.html)

Scripts are loaded synchronously in this dependency order:

1. `js/scheduleData.js` — exports `SCHEDULE_DATA` global constant (14 gameweeks × 4 matches)
2. `js/matchResults.js` — exports `MATCH_RESULTS` global object (`.results` array of 56 match objects) and `updateMatchResult()`
3. `js/standings.js` — exports `calculateStandings()`, `sortStandings()`, and `refreshStandings()`; depends on MATCH_RESULTS
4. `js/teamCard.js` — exports `getTeamStats()` and `createTeamCardHTML()`; depends on SCHEDULE_DATA + MATCH_RESULTS
5. `js/playoff.js` — exports `PLAYOFF_DATA`, `showPlayoff()`, and SVG connector drawing functions; depends on MATCH_RESULTS + currentStandings
6. `js/app.js` — main orchestrator; wires DOM events, view switching, and animation coordination

All inter-module communication happens via globals. There is no import/export syntax.

### Four View Modes

- **Gameweek view** (default): shows 4 matches for a selected round
- **Team view**: shows one team's full schedule with home/away filter
- **Table view**: standings table; clicking a row opens a team card overlay
- **Playoff view**: bracket display for upper bracket (places 1-4) and lower bracket (places 5-8); SVG connectors are drawn after render via `requestAnimationFrame` and redrawn on window resize

### Data Layer

Match results live in `js/matchResults.js` as `MATCH_RESULTS.results`. To record a result, call `updateMatchResult(matchId, homeSets, awaySets, setScores)` or manually set `played: true`, populate `sets` (home/away set counts), `set_scores` (array of per-set scores), and `points`. Each match always has exactly 3 sets played regardless of outcome. See `docs/STANDINGS_GUIDE.md` for the exact format.

`data/schedule.json` and `data/team-info.json` are static reference files but are **not loaded at runtime** — the app reads from the JS constants (`SCHEDULE_DATA` in `scheduleData.js`) instead.

### CSS Module System

`css/styles.css` is an `@import` orchestrator only. Each file owns a single concern:

| File | Concern |
|---|---|
| `base.css` | Reset, grid background, shared animations |
| `header.css` | h1, parallax scroll effect |
| `view-modes.css` | Tab buttons, ripple effect |
| `controls.css` | Dropdowns, filter buttons |
| `matches.css` | Match card grid |
| `match-result.css` | Played match card: set scores, winner/loser highlights |
| `teams.css` | Team name badges, home/away indicators |
| `standings.css` | Tournament table |
| `playoff.css` | Playoff bracket grid, finalist cards, prize display |
| `team-card.css` | The team statistics overlay panel |
| `transitions.css` | Fade/slide transition classes used by app.js |

### Scoring System

3-set volleyball format. Tournament points awarded per match:
- 3-0 or 3-1 win → winner gets 3 pts, loser gets 0
- 3-2 win → winner gets 2 pts, loser gets 1

Standings tie-breaking uses 6 criteria in this order, implemented in `sortStandings()` in `standings.js`:
1. Tournament points
2. Wins
3. Set difference (sets won minus sets lost)
4. Sets won
5. Point difference (points won minus points lost across all sets)
6. Points won