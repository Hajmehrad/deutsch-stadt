"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { achievements } from "@/data/achievements";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";

export function AchievementsGrid() {
  const progress = useAppStore();

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <span className="signage-label text-signal-blue">Erfolge</span>
      <h3 className="mt-1 font-display text-lg font-semibold">Abzeichen</h3>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {achievements.map((a, i) => {
          const unlocked = a.isUnlocked(progress);
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-center",
                unlocked ? "border-signal-amber/30 bg-signal-amber/5" : "border-surface-border bg-paper"
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full text-2xl",
                  unlocked ? "bg-signal-amber/20" : "bg-surface-border grayscale"
                )}
              >
                {unlocked ? a.emoji : <Lock className="h-4 w-4 text-ink-soft" />}
              </div>
              <span className="text-xs font-semibold leading-tight">{a.title}</span>
              <span className="text-[10px] leading-snug text-ink-soft">{a.description}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
