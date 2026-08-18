"use client";

import { ArrowLeft, Flame, Coins, Gamepad2, Sparkles } from "lucide-react";
import { DayNightToggle } from "./DayNightToggle";
import { useAppStore } from "@/store/useAppStore";
import { buildings } from "@/data/buildings";

export function CityHUD() {
  const { completedBuildings, xp, coins, streak } = useAppStore();
  const progress = Math.round((completedBuildings.length / buildings.length) * 100);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between gap-3 p-4 sm:p-6">
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/90 shadow-soft backdrop-blur-sm"
          aria-label="Zurück zur Startseite"
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <a
          href="/practice"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/90 shadow-soft backdrop-blur-sm sm:flex"
          aria-label="Übungen"
        >
          <Gamepad2 className="h-4 w-4" />
        </a>
        <a
          href="/ai-lab"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/90 shadow-soft backdrop-blur-sm sm:flex"
          aria-label="KI-Lernlabor"
        >
          <Sparkles className="h-4 w-4" />
        </a>
      </div>

      <div className="pointer-events-auto flex flex-1 max-w-xs flex-col gap-1.5 rounded-card border border-surface-border bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur-sm sm:max-w-sm">
        <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
          <span>Fortschritt</span>
          <span>{completedBuildings.length}/{buildings.length}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-pill bg-surface-border">
          <div
            className="h-full rounded-pill bg-signal-amber transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="pointer-events-auto flex items-center gap-2">
        <div className="hidden items-center gap-3 rounded-pill border border-surface-border bg-white/90 px-3.5 py-2 text-xs font-semibold shadow-soft backdrop-blur-sm sm:flex">
          <span className="flex items-center gap-1 text-signal-brick">
            <Flame className="h-3.5 w-3.5" /> {streak}
          </span>
          <span className="flex items-center gap-1 text-signal-amber">
            <Coins className="h-3.5 w-3.5" /> {coins}
          </span>
          <span className="text-ink-soft">{xp} XP</span>
        </div>
        <DayNightToggle />
      </div>
    </div>
  );
}
