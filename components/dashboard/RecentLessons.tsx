import { ArrowRight } from "lucide-react";
import { buildings } from "@/data/buildings";
import { BuildingId } from "@/types";

interface RecentLessonsProps {
  completedBuildings: BuildingId[];
}

export function RecentLessons({ completedBuildings }: RecentLessonsProps) {
  const recent = [...completedBuildings]
    .reverse()
    .slice(0, 5)
    .map((id) => buildings.find((b) => b.id === id))
    .filter(Boolean);

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <span className="signage-label text-signal-blue">Verlauf</span>
      <h3 className="mt-1 font-display text-lg font-semibold">Zuletzt abgeschlossen</h3>

      {recent.length === 0 ? (
        <p className="mt-4 text-sm text-ink-soft">
          Noch keine Lektion abgeschlossen. Betritt die Stadt und starte deine erste!
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-2">
          {recent.map((b) => (
            <a
              key={b!.id}
              href={`/lesson/${b!.id}`}
              className="group flex items-center gap-3 rounded-sign border border-surface-border px-4 py-3 transition-colors hover:bg-paper"
            >
              <span className="text-xl">{b!.emoji}</span>
              <span className="flex-1 text-sm font-medium">{b!.name}</span>
              <ArrowRight className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
