# frontChessTutorAi — Frontend (React + Vite)

## Stack
- React 19 / JSX
- React Router DOM 7 (client-side routing)
- Axios (HTTP client → FastAPI backend)
- TailwindCSS 3 (utility-first styling)
- Vite 7 (build tool)

## Source layout (read these)
```
src/
├── main.jsx             # React entry point
├── App.jsx              # Router with all routes
├── index.css            # Global styles + Tailwind directives
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── layouts/
│   └── MainLayouts.jsx  # Shared page wrapper
└── pages/
    ├── Login.jsx
    ├── CreateAccont.jsx
    ├── analize.jsx      # PGN upload and analysis submission
    ├── Coach.jsx        # AI coaching feedback view
    └── Games.jsx        # Game history list
```

## Routes
| Path              | Component        |
|-------------------|-----------------|
| `/`               | Login           |
| `/create-account` | CreateAccont    |
| `/analize`        | analize         |
| `/coach`          | Coach           |
| `/games`          | Games           |

## Ignore (do not read unless explicitly asked)
- `node_modules/` — Dependencies
- `package-lock.json` — Lock file
- `tailwind.config.js` — Only relevant when changing design tokens
- `vite.config.js` — Only relevant for build/proxy config
- `eslint.config.js` — Only relevant for lint rule changes
- `postcss.config.js` — CSS toolchain config
- `vercel.json` — Deployment config
- `public/` — Static assets (icons, SVGs)

## Key conventions
- All API calls use Axios; base URL is configured per environment
- Backend dev: `http://localhost:8000`, prod: `https://chesstutor-ai.onrender.com`
- Theme: primary green `#0fb87d`, dark bg `#0f172a`, light bg `#f6f8f7`
- Fonts: Space Grotesk (display), JetBrains Mono (monospace)
