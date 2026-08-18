"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy } from "lucide-react";
import { getAllVocab, pickRandom, shuffle } from "@/lib/vocabPool";
import { cn } from "@/lib/utils";

interface MemoryTile {
  key: string;
  pairId: string;
  label: string;
  kind: "word" | "meaning";
}

const PAIR_COUNT = 6;

function buildTiles(): MemoryTile[] {
  const vocab = pickRandom(getAllVocab(), PAIR_COUNT);
  const tiles: MemoryTile[] = vocab.flatMap((v) => [
    { key: `${v.id}-word`, pairId: v.id, label: v.word, kind: "word" as const },
    { key: `${v.id}-meaning`, pairId: v.id, label: v.meaning, kind: "meaning" as const },
  ]);
  return shuffle(tiles);
}

export function MemoryGame() {
  const [tiles, setTiles] = useState<MemoryTile[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setTiles(buildTiles());
  }, []);

  const isWon = matched.length === PAIR_COUNT * 2 && tiles.length > 0;

  const handleFlip = (tile: MemoryTile) => {
    if (flipped.length === 2 || flipped.includes(tile.key) || matched.includes(tile.pairId)) return;

    const nextFlipped = [...flipped, tile.key];
    setFlipped(nextFlipped);

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstKey, secondKey] = nextFlipped;
      const first = tiles.find((t) => t.key === firstKey)!;
      const second = tiles.find((t) => t.key === secondKey)!;

      if (first.pairId === second.pairId && first.key !== second.key) {
        setTimeout(() => {
          setMatched((m) => [...m, first.pairId]);
          setFlipped([]);
        }, 500);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  const reset = () => {
    setTiles(buildTiles());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-ink-soft">Züge: {moves}</p>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 rounded-pill border border-surface-border px-3 py-1.5 text-xs font-medium hover:bg-white"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Neu mischen
        </button>
      </div>

      {isWon ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 flex flex-col items-center gap-3 rounded-card border border-signal-amber/30 bg-signal-amber/10 p-8 text-center"
        >
          <Trophy className="h-8 w-8 text-signal-amber" />
          <p className="font-display text-lg font-semibold">Geschafft in {moves} Zügen!</p>
          <button
            onClick={reset}
            className="mt-2 rounded-pill bg-ink px-6 py-2.5 text-sm font-semibold text-paper"
          >
            Nochmal spielen
          </button>
        </motion.div>
      ) : (
        <div className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
          {tiles.map((tile) => {
            const isFlipped = flipped.includes(tile.key) || matched.includes(tile.pairId);
            return (
              <button
                key={tile.key}
                onClick={() => handleFlip(tile)}
                className="relative h-20 [perspective:800px] sm:h-24"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-signal-blue text-xl text-white [backface-visibility:hidden]">
                    ?
                  </div>
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center rounded-2xl border p-2 text-center text-xs font-semibold [backface-visibility:hidden] [transform:rotateY(180deg)]",
                      matched.includes(tile.pairId)
                        ? "border-signal-green bg-signal-green/10 text-signal-green"
                        : "border-surface-border bg-white text-ink"
                    )}
                  >
                    {tile.label}
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
