# FDE Campus

A multi-page marketing/learning platform for GlobalLogic's "Forward Deployed Engineer" program. Built with React + Vite (frontend) and Express 5 (API server), using a pnpm workspace layout.

## Run & Operate

- `pnpm --filter @workspace/fde-campus run dev` — run the frontend (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (requires `DATABASE_URL`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Optional env: `DATABASE_URL` — Postgres connection string (only needed for API server)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19, Vite 7, Tailwind CSS 4, Wouter (routing), TanStack Query
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/fde-campus/` — React frontend (pages: Home, About, Programs, Mentors, Career Roadmaps, Success Stories, Blogs, Events, Contact, Apply)
- `artifacts/api-server/` — Express API server
- `artifacts/mockup-sandbox/` — Vite preview server for component mockups
- `lib/` — shared libraries (api-client-react, api-spec, api-zod, db)
- `scripts/` — workspace utility scripts

## Architecture decisions

- pnpm workspaces keep frontend, API, and shared libs independently versioned
- OpenAPI spec is the source of truth for API contracts; Orval generates typed hooks + Zod validators
- Drizzle ORM for type-safe DB access without a heavy ORM abstraction

## Product

FDE Campus is GlobalLogic's AI-First Learning Initiative — a platform showcasing programs (Junior FDE, Senior FDE, Solutions Architect), mentors, career roadmaps, success stories, blogs, and events.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The frontend runs on a dynamic port (not 5000) in dev — check workflow logs for the actual port
- API server requires `PORT` env var; frontend runs without the API server (uses static/mock data)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
