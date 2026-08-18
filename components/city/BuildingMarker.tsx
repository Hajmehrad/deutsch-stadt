"use client";

import { motion } from "framer-motion";
import { Lock, CheckCircle2 } from "lucide-react";
import { Building } from "@/types";
import { cn } from "@/lib/utils";

const accentBg: Record<Building["accent"], string> = {
  blue: "bg-signal-blue text-white",
  amber: "bg-signal-amber text-ink",
  brick: "bg-signal-brick text-white",
  green: "bg-signal-green text-white",
};

interface BuildingMarkerProps {
  building: Building;
  unlocked: boolean;
  completed: boolean;
  onSelect: (b: Building) => void;
  delay?: number;
}

export function BuildingMarker({ building, unlocked, completed, onSelect, delay = 0 }: BuildingMarkerProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={unlocked ? { y: -8, scale: 1.08 } : { x: [0, -3, 3, -3, 0] }}
      whileTap={unlocked ? { scale: 0.95 } : {}}
      onClick={() => onSelect(building)}
      style={{ left: `${building.position.x}%`, top: `${building.position.y}%` }}
      className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
    >
      <div className="relative flex flex-col items-center gap-1.5">
        <div
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-2xl shadow-soft transition-shadow sm:h-16 sm:w-16 sm:text-3xl",
            unlocked
              ? "border-white bg-white group-hover:shadow-lifted"
              : "border-surface-border bg-surface-border/50 grayscale"
          )}
        >
          {building.emoji}

          {completed && (
            <div className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-signal-green text-white shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
          )}

          {!unlocked && (
            <div className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink-soft text-white shadow-sm">
              <Lock className="h-3 w-3" />
            </div>
          )}
        </div>

        <span
          className={cn(
            "signage-label rounded-sign px-2 py-0.5 text-[10px] shadow-sign",
            unlocked ? accentBg[building.accent] : "bg-ink-soft/70 text-white"
          )}
        >
          {building.name}
        </span>
      </div>
    </motion.button>
  );
}
