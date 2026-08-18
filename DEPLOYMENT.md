# Deployment Guide

## Recommended: Vercel

Deutsch Stadt is a standard Next.js 15 App Router project — Vercel is the
path of least resistance.

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment
   variables are required — the app has no backend/API dependencies.
4. Deploy. Vercel builds with `next build` and serves automatically.

Every push to your default branch redeploys. Preview deployments are
created automatically for pull requests.

## Before your first deploy

1. Update `BASE_URL` in `app/sitemap.ts` and `app/robots.ts` to your real
   production domain.
2. Update the Open Graph metadata in `app/layout.tsx` if you want custom
   social preview cards.
3. Run a production build locally to catch issues early:

   ```bash
   npm run build
   npm run start
   ```

## Self-hosting (Node server)

```bash
npm install
npm run build
npm run start   # serves on port 3000 by default
```

Put this behind a reverse proxy (nginx, Caddy) with TLS termination for
production traffic.

## Static export note

This project uses dynamic routes (`/lesson/[buildingId]`) and client-side
state (Zustand + localStorage), which work fine with Vercel's default
Node runtime. A fully static export (`output: 'export'`) is possible
since there's no server-side data fetching, but isn't configured by
default — add it to `next.config.js` only if you specifically need a
static host (e.g. GitHub Pages, S3).

## Performance checklist

- [x] Next/font for zero layout-shift font loading
- [x] Images use `next/image` formats (avif/webp) where added
- [x] Route-level code splitting via the App Router (automatic)
- [x] Client components scoped narrowly (`"use client"` only where needed)
- [ ] Add real audio files under `public/audio/` and wire them into
      `VocabCard` in place of the Web Speech API fallback, if you want
      consistent native-speaker pronunciation instead of the browser's
      TTS voice.
- [ ] Replace the AI demo components (`components/ai/`) with real API
      calls if you want live model-backed features instead of the
      canned/simulated responses.

## Data & privacy

All user progress (XP, streaks, completed lessons, favorites) is stored
in the browser via `localStorage` through Zustand's persist middleware —
there is no backend and no user data leaves the device. If you add
accounts or cross-device sync later, you'll need a database and auth
layer; the store in `store/useAppStore.ts` is the natural place to start
swapping local persistence for a remote one.
