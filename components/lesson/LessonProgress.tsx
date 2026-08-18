"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LessonProgressProps {
  steps: string[];
  currentStep: number;
}

export function LessonProgress({ steps, currentStep }: LessonProgressProps) {
  return (
    <div className="mx-auto flex w-full max-w-lg items-center gap-2 px-5 pt-5">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="h-1.5 w-full overflow-hidden rounded-pill bg-surface-border">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: i < currentStep ? "100%" : i === currentStep ? "50%" : "0%" }}
              transition={{ duration: 0.4 }}
              className={cn(
                "h-full rounded-pill",
                i <= currentStep ? "bg-signal-amber" : "bg-transparent"
              )}
            />
          </div>
          <span
            className={cn(
              "signage-label text-[9px]",
              i === currentStep ? "text-ink" : "text-ink-soft/50"
            )}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}
