import { GrammarPoint } from "@/types";
import { BookOpen } from "lucide-react";

export function GrammarBlock({ point }: { point: GrammarPoint }) {
  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <div className="flex items-center gap-2 text-signal-blue">
        <BookOpen className="h-4 w-4" />
        <span className="signage-label">Grammatik</span>
      </div>
      <h3 className="mt-2 font-display text-xl font-semibold">{point.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.explanation}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {point.examples.map((ex) => (
          <li
            key={ex}
            className="rounded-sign bg-paper px-3 py-2 font-mono text-sm text-ink"
          >
            {ex}
          </li>
        ))}
      </ul>
    </div>
  );
}
