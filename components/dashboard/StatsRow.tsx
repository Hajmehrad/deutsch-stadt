import { Flame, Coins, CheckCircle2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { buildings } from "@/data/buildings";

const stats = [
  { key: "streak" as const, label: "Tage-Serie", icon: Flame, color: "text-signal-brick", bg: "bg-signal-brick/10" },
  { key: "coins" as const, label: "Münzen", icon: Coins, color: "text-signal-amber", bg: "bg-signal-amber/10" },
  { key: "completed" as const, label: "Gebäude", icon: CheckCircle2, color: "text-signal-green", bg: "bg-signal-green/10" },
];

export function StatsRow() {
  const { streak, coins, completedBuildings } = useAppStore();
  const values = {
    streak,
    coins,
    completed: `${completedBuildings.length}/${buildings.length}`,
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((s) => (
        <div
          key={s.key}
          className="flex flex-col items-center gap-2 rounded-card border border-surface-border bg-white p-4 text-center shadow-soft"
        >
          <div className={`flex h-9 w-9 items-center justify-center rounded-full ${s.bg} ${s.color}`}>
            <s.icon className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-semibold">{values[s.key]}</span>
          <span className="signage-label text-[9px] text-ink-soft">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
