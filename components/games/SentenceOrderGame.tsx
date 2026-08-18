"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, RotateCcw } from "lucide-react";
import { getAllSentences, shuffle } from "@/lib/vocabPool";
import { cn } from "@/lib/utils";

function cleanWords(sentence: string) {
  return sentence.replace(/[!?.]$/, "").split(" ");
}

export function SentenceOrderGame() {
  const [pool, setPool] = useState(() => shuffle(getAllSentences()).slice(0, 8));
  const [round, setRound] = useState(0);
  const [available, setAvailable] = useState<string[]>([]);
  const [chosen, setChosen] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const current = pool[round];

  useEffect(() => {
    if (current) setAvailable(shuffle(cleanWords(current.sentence)));
    setChosen([]);
    setStatus("idle");
  }, [round, current]);

  const pick = (word: string, index: number) => {
    if (status !== "idle") return;
    setChosen((c) => [...c, word]);
    setAvailable((a) => a.filter((_, i) => i !== index));
  };

  const undo = (index: number) => {
    if (status !== "idle") return;
    const word = chosen[index];
    setChosen((c) => c.filter((_, i) => i !== index));
    setAvailable((a) => [...a, word]);
  };

  const check = () => {
    const built = chosen.join(" ");
    const correct = built.toLowerCase() === cleanWords(current.sentence).join(" ").toLowerCase();
    setStatus(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (round + 1 < pool.length) {
      setRound((r) => r + 1);
    } else {
      setPool(shuffle(getAllSentences()).slice(0, 8));
      setRound(0);
      setScore(0);
    }
  };

  if (!current) return null;

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
        <span>Satz {round + 1} / {pool.length}</span>
        <span>Punkte: {score}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={round}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          className="mt-5 rounded-card border border-surface-border bg-white p-6 shadow-soft"
        >
          <p className="text-xs text-ink-soft">Bring die Wörter in die richtige Reihenfolge:</p>

          <div className="mt-4 flex min-h-[3.5rem] flex-wrap gap-2 rounded-sign border border-dashed border-surface-border bg-paper p-3">
            {chosen.length === 0 && (
              <span className="text-xs text-ink-soft/50">Tippe unten die Wörter an...</span>
            )}
            {chosen.map((word, i) => (
              <button
                key={`${word}-${i}`}
                onClick={() => undo(i)}
                className="rounded-sign bg-signal-blue px-3 py-1.5 text-sm font-medium text-white"
              >
                {word}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {available.map((word, i) => (
              <button
                key={`${word}-${i}`}
                onClick={() => pick(word, i)}
                disabled={status !== "idle"}
                className="rounded-sign border border-surface-border bg-white px-3 py-1.5 text-sm font-medium hover:border-signal-blue disabled:opacity-40"
              >
                {word}
              </button>
            ))}
          </div>

          {status !== "idle" && (
            <div
              className={cn(
                "mt-4 flex items-center gap-2 rounded-sign px-4 py-3 text-sm font-medium",
                status === "correct" ? "bg-signal-green/10 text-signal-green" : "bg-signal-brick/10 text-signal-brick"
              )}
            >
              {status === "correct" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {status === "correct" ? "Richtig!" : `Richtig wäre: ${current.sentence}`}
            </div>
          )}

          <div className="mt-5 flex gap-2">
            {status === "idle" ? (
              <button
                onClick={check}
                disabled={available.length > 0}
                className="flex-1 rounded-pill bg-ink py-3 text-sm font-semibold text-paper disabled:opacity-30"
              >
                Prüfen
              </button>
            ) : (
              <button
                onClick={next}
                className="flex flex-1 items-center justify-center gap-2 rounded-pill bg-ink py-3 text-sm font-semibold text-paper"
              >
                {round + 1 < pool.length ? "Nächster Satz" : "Neue Runde"}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => {
                setAvailable(shuffle(cleanWords(current.sentence)));
                setChosen([]);
                setStatus("idle");
              }}
              className="flex h-11 w-11 items-center justify-center rounded-pill border border-surface-border"
              aria-label="Zurücksetzen"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
