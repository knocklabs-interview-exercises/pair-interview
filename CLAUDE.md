# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is a **Knock interview/pairing scaffold**, not a production codebase. It holds the prompts, starter code, and reference data for a set of timed exercises. Most of the "work" is implemented live by a candidate during an interview — so several parts are intentionally incomplete or contain only a specification with no code.

Two tracks, selected by the role being interviewed (see `README.md`):

- **Backend** — `part-one` (build a message delivery service) + a systems-design discussion (`part-two/systems-design`).
- **Full-stack** — `part-one` + `part-two/fullstack` (extend a React app).

## part-one — message delivery service (spec only, no starter code)

`part-one/README.md` is the exercise brief; `part-one/data/jobs.json` is the input; `part-one/API Documentation.md` is the downstream provider contract. **There is no implementation** — the candidate writes the service from scratch, in whatever language they choose (the interviewer here works in Elixir).

The service must: read `jobs.json`, dedupe by `id`, sort by `timestamp` (jobs arrive out of order), then dispatch each job to a provider based on `type` (`sms` → SMS API, `email` → Email API), and finally report success/failure counts. Part 4 adds a checkpointing mechanism so a restart re-runs only unprocessed jobs.

Job shape (from `jobs.json`): `id`, `type` (`sms`/`email`), `message` (`{to, body}`), `settings.api_key` (per-job bearer token), `plan`, `tenant_id`, `timestamp`.

Downstream provider APIs (real, hosted at `knock-delivery-api.onrender.com`) — these **fail intermittently by design**; the brief says do *not* retry:
- `POST /service/email` — body `{to, body}`
- `POST /service/sms` — body `{to, message}` (note: `message`, not `body`)
- Both use `Authorization: Bearer {api_key}` and return `{messageId, status: "ok"}` on 200, or a non-2xx with `{error, status: "error"}`.

## part-two/fullstack — React app (create-react-app)

A deliberately barebones CRA. The exercise (`part-two/fullstack/README.md`) is to (1) replace the static list with an API fetch and (2) wire up search + type filtering.

Commands (run from `part-two/fullstack/`):
```bash
npm install      # a yarn.lock is also present; either package manager works
npm start        # dev server on :3000
npm test         # react-scripts (jest) in watch mode
npm test -- --watchAll=false WorkflowItem   # run once, filter by filename
npm run build
```

Architecture and the intentionally-stubbed pieces (these ARE the exercise, don't treat them as bugs to "just fix"):
- `src/App.js` renders items from the **static** `src/data.js`. Part 1 replaces this with a fetch to `GET https://knock-delivery-api.onrender.com/workflow/items` (query params `name`, `types` — see `part-two/fullstack/API Documentation.md`).
- `src/components/Search.js` is a complete controlled input, but is **commented out** in `Header.js`.
- `src/components/TypeFilter.js` renders an **empty** `<div>`; the `types` list and `FilterButton` are defined but unused (eslint-disabled). Part 2 builds the real filter here.
- `WorkflowItem.js` / `WorkflowItemInformation.js` each re-`findItem` from `data.js` by id rather than receiving the item as a prop — a pattern to be aware of when swapping the static source for API data.
- Styling is CSS Modules (`*.module.css`) throughout.

## part-two/systems-design — discussion prompt only

`part-two/systems-design/README.md` is a whiteboard-style prompt for designing Knock's delivery pipeline (at-most-once delivery, retries, audit logs, 10k–50k notifications/sec, multi-tenant with Enterprise/Paid/Free tiers). No code.
</content>
</invoke>
