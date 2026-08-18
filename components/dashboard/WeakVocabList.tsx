import { Heart } from "lucide-react";
import { lessons } from "@/data/lessons";
import { BuildingId } from "@/types";

interface WeakVocabListProps {
  favorites: string[];
}

export function WeakVocabList({ favorites }: WeakVocabListProps) {
  const allVocab = (Object.keys(lessons) as BuildingId[]).flatMap((id) => lessons[id].vocabulary);
  const favoritedCards = allVocab.filter((v) => favorites.includes(v.word));

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <span className="signage-label text-signal-brick">Zum Wiederholen</span>
      <h3 className="mt-1 font-display text-lg font-semibold">Deine Favoriten</h3>

      {favoritedCards.length === 0 ? (
        <p className="mt-4 text-sm text-ink-soft">
          Markiere Vokabeln mit dem Herz-Symbol in einer Lektion, um sie hier zu sammeln.
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {favoritedCards.map((v) => (
            <div
              key={v.id}
              className="flex items-center gap-1.5 rounded-pill border border-signal-brick/20 bg-signal-brick/5 px-3 py-1.5 text-xs font-medium"
            >
              <Heart className="h-3 w-3 fill-signal-brick text-signal-brick" />
              {v.article ? `${v.article} ` : ""}{v.word}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
