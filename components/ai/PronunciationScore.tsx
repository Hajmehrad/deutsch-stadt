"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const WORDS = ["Entschuldigung", "Frühstück", "Straße", "Brötchen", "Rechnung"];

export function PronunciationScore() {
  const [word, setWord] = useState(WORDS[0]);
  const [recording, setRecording] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const record = () => {
    setRecording(true);
    setScore(null);
    setTimeout(() => {
      setRecording(false);
      setScore(Math.floor(70 + Math.random() * 30));
    }, 1800);
  };

  const nextWord = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setScore(null);
  };

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 text-center shadow-soft">
      <span className="signage-label text-signal-brick">Aussprache-Score</span>
      <h3 className="mt-3 font-display text-2xl font-semibold">{word}</h3>
      <p className="mt-1 text-xs text-ink-soft">Sprich das Wort laut aus</p>

      <button
        onClick={record}
        disabled={recording}
        className={cn(
          "mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lifted transition-transform",
          recording ? "animate-pulse bg-signal-brick" : "bg-signal-blue hover:scale-105"
        )}
        aria-label="Aufnahme starten"
      >
        <Mic className="h-7 w-7" />
      </button>

      {recording && <p className="mt-3 text-xs font-medium text-signal-brick">Höre zu...</p>}

      {score !== null && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          <div className="mx-auto h-3 w-full max-w-xs overflow-hidden rounded-pill bg-surface-border">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 0.6 }}
              className={cn(
                "h-full rounded-pill",
                score >= 90 ? "bg-signal-green" : score >= 75 ? "bg-signal-amber" : "bg-signal-brick"
              )}
            />
          </div>
          <p className="mt-2 font-display text-lg font-semibold">{score}% Genauigkeit</p>
          <button onClick={nextWord} className="mt-4 rounded-pill border border-surface-border px-5 py-2 text-sm font-medium">
            Nächstes Wort
          </button>
        </motion.div>
      )}

      <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-ink-soft">
        <Sparkles className="h-3 w-3" />
        Demo-Oberfläche — Score wird simuliert
      </div>
    </div>
  );
}
