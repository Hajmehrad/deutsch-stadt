# 🏙️ Deutsch Stadt

Learn German A1 by walking through a virtual German town. Every building is
a complete lesson — no boring menus, no textbook feel.

Built like a modern startup product: Next.js 15, TypeScript, TailwindCSS,
Framer Motion, and Zustand.

## ✨ Features

- **Interactive city map** — pannable, zoomable, with day/night lighting
  and a sequential unlock chain across 15 buildings
- **Full A1 curriculum** — vocabulary, grammar, mini-dialogues, and quizzes
  for every building, strictly scoped to CEFR A1
- **Gamification** — XP, levels, coins, streaks, and 8 unlockable achievements
- **Practice hub** — flashcards, memory matching, sentence-building, and a
  listening challenge, all pulling from the full vocabulary pool
- **AI demo lab** — mock chat teacher, grammar checker, pronunciation
  scorer, and vocabulary generator (demo UI, not wired to a real model)
- **Dashboard** — level, XP bar, per-building progress chart, achievements,
  recent lessons, and a favorited-vocabulary review list
- **Dark mode, keyboard navigation, skip-to-content, reduced-motion support**

## 🗂️ Project Structure

```
app/
  (marketing)/        landing page
  city/                interactive city map
  lesson/[buildingId]/ lesson flow (vocab → grammar → dialogue → quiz)
  practice/            standalone game modes
  dashboard/           progress & gamification
  ai-lab/              AI demo features
components/
  shared/              Navbar, Footer, StreetSign, SkipLink
  landing/             Hero, Features
  city/                CityCanvas, BuildingMarker, HUD, preview sheet
  lesson/              VocabCard, GrammarBlock, DialogueBlock, QuizEngine
  dashboard/           header, stats, chart, achievements
  games/                practice-mode components
  ai/                  AI demo components
data/
  buildings.ts         building metadata, positions, unlock chain
  lessons/             one file per building's A1 content
  achievements.ts      achievement definitions
store/
  useAppStore.ts       Zustand store, persisted to localStorage
types/
  index.ts             shared TypeScript interfaces
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🎨 Design System

The signature visual motif is the German street nameplate
(*Straßenschild*) — see `components/shared/StreetSign.tsx`. Palette,
fonts, and spacing tokens live in `tailwind.config.ts` and
`app/globals.css`.

- **Colors:** paper `#F5F6F4` · ink `#171A1E` · signal blue `#1E4B8C` ·
  signal amber `#F2B705` · brick `#C1391F`
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels)

## 🧠 Content Notes

All lesson content is handwritten to stay within CEFR A1 — no future
tense, no subordinate clauses, no A2 vocabulary. Extend the curriculum
by adding a new file under `data/lessons/` and registering it in
`data/lessons/index.ts`.

## 📦 Tech Stack

Next.js 15 (App Router) · React 18 · TypeScript · TailwindCSS ·
Framer Motion · Zustand (+ localStorage persistence) · Recharts ·
Lucide Icons

See `DEPLOYMENT.md` for deployment instructions.
