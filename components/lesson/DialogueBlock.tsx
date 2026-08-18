"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { DialogueLine } from "@/types";
import { cn } from "@/lib/utils";

export function DialogueBlock({ lines }: { lines: DialogueLine[] }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const speakers = Array.from(new Set(lines.map((l) => l.speaker)));

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="signage-label text-signal-blue">Mini-Dialog</span>
        <button
          onClick={() => setShowTranslation((v) => !v)}
          className="flex items-center gap-1.5 rounded-pill border border-surface-border px-3 py-1.5 text-xs font-medium text-ink-soft hover:bg-paper"
        >
          <Languages className="h-3.5 w-3.5" />
          {showTranslation ? "Übersetzung aus" : "Übersetzung an"}
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {lines.map((line, i) => {
          const isFirstSpeaker = speakers[0] === line.speaker;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isFirstSpeaker ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn("flex flex-col", isFirstSpeaker ? "items-start" : "items-end")}
            >
              <span className="signage-label mb-1 text-[9px] text-ink-soft/60">{line.speaker}</span>
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                  isFirstSpeaker ? "bg-paper text-ink" : "bg-signal-blue text-white"
                )}
              >
                {line.line}
              </div>
              {showTranslation && (
                <span className="mt-1 max-w-[80%] text-xs italic text-ink-soft">
                  {line.translation}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
