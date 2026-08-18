"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

export function DayNightToggle() {
  const { isDaytime, toggleDayNight } = useAppStore();

  return (
    <button
      onClick={toggleDayNight}
      aria-label="Tag- und Nachtmodus wechseln"
      className="relative flex h-9 w-16 items-center rounded-pill border border-surface-border bg-white px-1 shadow-soft"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper"
        style={{ marginLeft: isDaytime ? 0 : "auto" }}
      >
        {isDaytime ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </motion.div>
    </button>
  );
}
