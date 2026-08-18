"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

const XP_PER_LEVEL = 100;

export function DashboardHeader() {
  const { xp } = useAppStore();
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpIntoLevel = xp % XP_PER_LEVEL;
  const percent = (xpIntoLevel / XP_PER_LEVEL) * 100;

  return (
    <div className="flex items-center gap-5 rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-signal-blue text-2xl font-semibold text-white">
        🧑‍🎓
        <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-signal-amber text-[11px] font-bold text-ink">
          {level}
        </span>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-semibold">Level {level}</p>
          <span className="text-xs font-medium text-ink-soft">{xpIntoLevel} / {XP_PER_LEVEL} XP</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-surface-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-pill bg-signal-amber"
          />
        </div>
        <p className="mt-1.5 text-xs text-ink-soft">{xp} XP insgesamt</p>
      </div>
    </div>
  );
}
