# Project Guidelines

## Code Style

- Use Prettier for formatting (see .prettierrc for config: 2-space indent, no semicolons, double quotes, trailing commas, 100 char line width).
- ESLint config (eslint.config.mjs) enforces import order, no duplicates, and integrates with Next.js and Prettier.
- TypeScript is used throughout (see tsconfig.json for strict settings).
- Use functional React components, hooks, and Zustand for state management.
- CSS variables and Tailwind are used for styling (see app/globals.css and tailwind.config.ts).
- Example: [app/layout.tsx](app/layout.tsx), [src/components/Sidebar/Sidebar.tsx](src/components/Sidebar/Sidebar.tsx)

## Architecture

- Main app entry: [app/layout.tsx](app/layout.tsx), [app/page.tsx](app/page.tsx)
- Components are organized in src/components by feature (CrimeList, CrimeMarker, Map, Sidebar, etc).
- API layer in src/api/data-police-uk handles all data fetching from https://data.police.uk/api.
- State is managed with Zustand stores (src/stores/crimes.ts, src/stores/map.ts).
- Utility functions are in src/utils (e.g., src/utils/crime.ts).
- Map features use Leaflet/React Leaflet and MapBox.

## Build and Test

- Install: `yarn install` or `npm install`
- Run dev server: `yarn dev` or `npm run dev`
- Build: `yarn build` or `npm run build`
- Lint: `yarn lint` or `npm run lint`
- Format: `yarn format` or `npm run format`
- Type check: `yarn type-check` or `npm run type-check`
- Prepare (husky): `yarn prepare` or `npm run prepare`

## Project Conventions

- Use path aliases (see tsconfig.json: @/_ for src/_).
- All API calls are in src/api/data-police-uk/api.ts.
- Crime severity and category logic in src/utils/crime.ts.
- Use CSS variables for theme colors (see app/globals.css, tailwind.config.ts).
- Use functional components with "use client" directive where needed.
- Example: [src/components/Map/Controls/Search.tsx](src/components/Map/Controls/Search.tsx)

## Integration Points

- External APIs: https://data.police.uk/api, MapBox (requires NEXT_PUBLIC_MAPBOX_TOKEN in .env.local).
- Uses React Leaflet, MapBox, Zustand, Radix UI, Recharts, Lucide icons.
- See package.json for dependencies.

## Security

- Sensitive keys (MapBox tokens) must be set in .env.local (see .env.local.example).
- Do not commit .env files (see .prettierignore).
- Use rel="noopener noreferrer" for external links.

---

If any section is unclear or incomplete, please provide feedback to iterate.
