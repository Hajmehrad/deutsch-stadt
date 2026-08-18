"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { buildings } from "@/data/buildings";
import { useAppStore } from "@/store/useAppStore";

export function ProgressChart() {
  const { completedBuildings } = useAppStore();

  const data = buildings.map((b) => ({
    name: b.emoji,
    fullName: b.name,
    value: completedBuildings.includes(b.id) ? 1 : 0,
  }));

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <span className="signage-label text-signal-blue">Fortschritt pro Gebäude</span>
      <h3 className="mt-1 font-display text-lg font-semibold">Deine Reise durch die Stadt</h3>

      <div className="mt-4 h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fontSize: 14 }} axisLine={false} tickLine={false} />
            <YAxis hide domain={[0, 1]} />
            <Tooltip
              formatter={(value: number, _name, props) => [
                value === 1 ? "Abgeschlossen" : "Offen",
                props.payload.fullName,
              ]}
              contentStyle={{ borderRadius: 10, border: "1px solid #E3E5E1", fontSize: 12 }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.value === 1 ? "#F2B705" : "#E3E5E1"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
