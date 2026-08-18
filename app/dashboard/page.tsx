"use client";

import { ArrowLeft } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsRow } from "@/components/dashboard/StatsRow";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { AchievementsGrid } from "@/components/dashboard/AchievementsGrid";
import { RecentLessons } from "@/components/dashboard/RecentLessons";
import { WeakVocabList } from "@/components/dashboard/WeakVocabList";

export default function DashboardPage() {
  const { completedBuildings, favorites } = useAppStore();

  return (
    <main className="min-h-[100dvh] bg-paper pb-16">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-surface-border bg-paper/90 px-5 py-4 backdrop-blur-sm sm:px-8">
        <a
          href="/city"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-white"
          aria-label="Zurück zur Stadt"
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <p className="font-display text-lg font-semibold">Mein Fortschritt</p>
      </header>

      <div className="mx-auto flex max-w-2xl flex-col gap-5 px-5 pt-6 sm:px-8">
        <DashboardHeader />
        <StatsRow />
        <ProgressChart />
        <AchievementsGrid />
        <RecentLessons completedBuildings={completedBuildings} />
        <WeakVocabList favorites={favorites} />
      </div>
    </main>
  );
}
