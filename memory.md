# Project Memory - EduConnect (nunu)

## Current Context
- **Project**: EduConnect - Modern Educational Management Platform
- **Status**: Live in production at https://edu-connect-delta.vercel.app
- **Tech Stack**: Next.js 14, TypeScript, Supabase, Tailwind CSS, Vercel
- **Package Manager**: Using pnpm (per project rules)

## Key Project Rules
1. Use pnpm instead of npm for storage efficiency
2. Prefer Tauri over Electron for desktop apps
3. Use SQLite for offline functionality
4. Regular documentation updates (README.md, project.md, plan.md)
5. Generate relevant code and fix errors automatically
6. Document Next Steps in project.md

## Current Issue Identified
- Tailwind config file has syntax errors:
  - Invalid TypeScript comment in JS file
  - Malformed content array with syntax errors
  - Missing proper module.exports structure

## Project Structure
```
nunu/
├── app/                    # Next.js 14 app router
├── components/            # Reusable UI components
├── features/              # Feature-based modules
├── lib/                  # Utilities and configurations
├── stores/               # Zustand state stores
├── hooks/                # Custom React hooks
├── types/                # TypeScript definitions
└── docs/                 # Documentation
```

## Development Progress
- Phase 1: Frontend Foundation (100%) ✅
- Phase 2: Deployment & Infrastructure (100%) ✅
- Phase 3: Code Refinement & Architecture (100%) ✅
- Phase 4: Core Features (40%) 🔄
- Phase 5: Advanced Features (0%) ⏳

## Next Actions Needed
1. Fix Tailwind config syntax errors
2. Update project.md with current status
3. Continue core feature development