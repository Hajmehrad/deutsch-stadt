"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";
import { VocabCard } from "@/components/lesson/VocabCard";
import { getAllVocab, shuffle } from "@/lib/vocabPool";

export function FlashcardDeck() {
  const deck = useMemo(() => shuffle(getAllVocab()), []);
  const [index, setIndex] = useState(0);
  const [known, setKnown] = useState(0);
  const [reviewing, setReviewing] = useState(0);

  const card = deck[index];
  const isDone = index >= deck.length;

  const advance = (isKnown: boolean) => {
    if (isKnown) setKnown((k) => k + 1);
    else setReviewing((r) => r + 1);
    setIndex((i) => i + 1);
  };

  const restart = () => {
    setIndex(0);
    setKnown(0);
    setReviewing(0);
  };

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
        <span>{Math.min(index + 1, deck.length)} / {deck.length}</span>
        <span className="flex gap-3">
          <span className="text-signal-green">✓ {known}</span>
          <span className="text-signal-brick">↻ {reviewing}</span>
        </span>
      </div>

      <div className="mt-5">
        <AnimatePresence mode="wait">
          {isDone ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-card border border-surface-border bg-white p-8 text-center shadow-soft"
            >
              <p className="font-display text-lg font-semibold">Deck durchgearbeitet!</p>
              <p className="text-sm text-ink-soft">
                {known} bekannt, {reviewing} zum Wiederholen
              </p>
              <button
                onClick={restart}
                className="mt-2 flex items-center gap-2 rounded-pill bg-ink px-6 py-2.5 text-sm font-semibold text-paper"
              >
                <RotateCcw className="h-4 w-4" />
                Nochmal
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <VocabCard card={card} />
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => advance(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-pill border border-signal-brick/30 bg-signal-brick/5 py-3 text-sm font-semibold text-signal-brick"
                >
                  <ThumbsDown className="h-4 w-4" />
                  Nochmal üben
                </button>
                <button
                  onClick={() => advance(true)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-pill border border-signal-green/30 bg-signal-green/5 py-3 text-sm font-semibold text-signal-green"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Weiß ich
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
