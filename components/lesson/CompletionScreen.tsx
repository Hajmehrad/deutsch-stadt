"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { StreetSign } from "@/components/shared/StreetSign";

interface CompletionScreenProps {
  buildingName: string;
  emoji: string;
  score: number;
  totalQuestions: number;
  xpEarned: number;
}

export function CompletionScreen({ buildingName, emoji, score, totalQuestions, xpEarned }: CompletionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="mx-auto flex max-w-md flex-col items-center rounded-card border border-surface-border bg-white p-8 text-center shadow-lifted"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-signal-amber/20 text-4xl"
      >
        {emoji}
      </motion.div>

      <div className="mt-5">
        <StreetSign label="Abgeschlossen" variant="amber" />
      </div>

      <h2 className="mt-4 font-display text-2xl font-semibold">{buildingName} gemeistert!</h2>
      <p className="mt-2 text-sm text-ink-soft">
        Du hast {score} von {totalQuestions} Fragen richtig beantwortet.
      </p>

      <div className="mt-6 flex items-center gap-2 rounded-pill bg-signal-amber/15 px-5 py-2.5 text-sm font-semibold text-signal-amber">
        <Sparkles className="h-4 w-4" />
        +{xpEarned} XP verdient
      </div>

      <div className="mt-8 flex w-full flex-col gap-3">
        <a
          href="/city"
          className="flex items-center justify-center gap-2 rounded-pill bg-ink py-3.5 text-sm font-semibold text-paper shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <MapPin className="h-4 w-4" />
          Zurück zur Stadt
        </a>
        <a
          href="/dashboard"
          className="flex items-center justify-center gap-2 rounded-pill border border-surface-border py-3.5 text-sm font-semibold text-ink-soft hover:bg-paper"
        >
          Fortschritt ansehen
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
