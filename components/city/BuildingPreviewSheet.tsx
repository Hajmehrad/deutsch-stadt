"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, Lock, ArrowRight } from "lucide-react";
import { Building } from "@/types";
import { StreetSign } from "@/components/shared/StreetSign";

interface BuildingPreviewSheetProps {
  building: Building | null;
  unlocked: boolean;
  completed: boolean;
  requiredName?: string;
  onClose: () => void;
}

export function BuildingPreviewSheet({
  building,
  unlocked,
  completed,
  requiredName,
  onClose,
}: BuildingPreviewSheetProps) {
  return (
    <AnimatePresence>
      {building && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-lg rounded-t-card border border-b-0 border-surface-border bg-white p-6 shadow-lifted sm:bottom-6 sm:rounded-card sm:border-b"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-surface-border/50 text-ink-soft"
              aria-label="Schließen"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-surface-border bg-paper text-3xl">
                {building.emoji}
              </div>
              <div>
                <StreetSign
                  label={unlocked ? "Verfügbar" : "Gesperrt"}
                  variant={unlocked ? "blue" : "ink"}
                  className="scale-90"
                />
                <h3 className="mt-2 font-display text-2xl font-semibold">{building.name}</h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{building.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {building.topics.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-surface-border bg-paper px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-1.5 text-xs text-ink-soft">
              <Clock className="h-3.5 w-3.5" />
              ca. {building.estimatedMinutes} Min
            </div>

            {unlocked ? (
              <a
                href={`/lesson/${building.id}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3.5 text-sm font-semibold text-paper shadow-soft transition-transform hover:-translate-y-0.5"
              >
                {completed ? "Nochmal üben" : "Lektion starten"}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <div className="mt-6 flex w-full items-center justify-center gap-2 rounded-pill bg-surface-border/60 py-3.5 text-sm font-medium text-ink-soft">
                <Lock className="h-4 w-4" />
                {requiredName ? `Schließe "${requiredName}" ab, um freizuschalten` : "Noch gesperrt"}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
