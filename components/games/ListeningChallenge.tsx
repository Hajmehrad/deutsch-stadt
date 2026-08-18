"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Check, X, ArrowRight } from "lucide-react";
import { getAllVocab, pickRandom } from "@/lib/vocabPool";
import { cn } from "@/lib/utils";

const ROUND_SIZE = 8;

export function ListeningChallenge() {
  const [round, setRound] = useState(() => pickRandom(getAllVocab(), ROUND_SIZE));
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const card = round[index];
  const isDone = index >= round.length;

  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !card) return;
    const utter = new SpeechSynthesisUtterance(`${card.article ?? ""} ${card.word}`);
    utter.lang = "de-DE";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  };

  const check = () => {
    if (!input.trim()) return;
    const correct = input.trim().toLowerCase() === card.word.toLowerCase();
    setStatus(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
  };

  const next = () => {
    setInput("");
    setStatus("idle");
    setIndex((i) => i + 1);
  };

  const restart = () => {
    setRound(pickRandom(getAllVocab(), ROUND_SIZE));
    setIndex(0);
    setInput("");
    setStatus("idle");
    setScore(0);
  };

  if (isDone) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-card border border-surface-border bg-white p-8 text-center shadow-soft">
        <p className="font-display text-lg font-semibold">
          {score} / {round.length} richtig gehört
        </p>
        <button onClick={restart} className="rounded-pill bg-ink px-6 py-2.5 text-sm font-semibold text-paper">
          Neue Runde
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
        <span>{index + 1} / {round.length}</span>
        <span>Punkte: {score}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={card.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          className="mt-5 flex flex-col items-center rounded-card border border-surface-border bg-white p-8 shadow-soft"
        >
          <button
            onClick={speak}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-signal-blue text-white shadow-lifted transition-transform hover:scale-105"
            aria-label="Wort anhören"
          >
            <Volume2 className="h-6 w-6" />
          </button>
          <p className="mt-3 text-xs text-ink-soft">Tippe auf den Lautsprecher, um zu hören</p>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && status === "idle" && check()}
            disabled={status !== "idle"}
            placeholder="Was hast du gehört?"
            className={cn(
              "mt-6 w-full rounded-sign border px-4 py-3 text-center text-sm outline-none focus:border-signal-blue",
              status === "correct" && "border-signal-green bg-signal-green/10",
              status === "wrong" && "border-signal-brick bg-signal-brick/10"
            )}
          />

          {status !== "idle" && (
            <div
              className={cn(
                "mt-3 flex w-full items-center justify-center gap-2 rounded-sign px-4 py-3 text-sm font-medium",
                status === "correct" ? "bg-signal-green/10 text-signal-green" : "bg-signal-brick/10 text-signal-brick"
              )}
            >
              {status === "correct" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {status === "correct" ? "Richtig!" : `Richtig: ${card.article ? card.article + " " : ""}${card.word}`}
            </div>
          )}

          <button
            onClick={status === "idle" ? check : next}
            disabled={status === "idle" && !input.trim()}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3 text-sm font-semibold text-paper disabled:opacity-30"
          >
            {status === "idle" ? "Prüfen" : "Weiter"}
            {status !== "idle" && <ArrowRight className="h-4 w-4" />}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
