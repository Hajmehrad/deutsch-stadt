"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Heart } from "lucide-react";
import { VocabCard as VocabCardType } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";

interface VocabCardProps {
  card: VocabCardType;
}

export function VocabCard({ card }: VocabCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { favorites, toggleFavorite } = useAppStore();
  const isFavorite = favorites.includes(card.word);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(`${card.article ?? ""} ${card.word}`);
      utter.lang = "de-DE";
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <motion.button
      onClick={() => setFlipped((f) => !f)}
      whileTap={{ scale: 0.98 }}
      className="relative h-52 w-full [perspective:1200px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-card border border-surface-border bg-white p-6 shadow-soft [backface-visibility:hidden]"
        >
          <div className="absolute right-4 top-4 flex gap-2">
            <button
              onClick={speak}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-blue/10 text-signal-blue"
              aria-label="Aussprache anhören"
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(card.word);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-brick/10 text-signal-brick"
              aria-label="Favorit"
            >
              <Heart className={cn("h-4 w-4", isFavorite && "fill-signal-brick")} />
            </button>
          </div>
          {card.article && (
            <span className="signage-label text-signal-blue">{card.article}</span>
          )}
          <span className="font-display text-3xl font-semibold">{card.word}</span>
          {card.plural && <span className="text-xs text-ink-soft">Plural: {card.plural}</span>}
          <span className="mt-2 text-xs text-ink-soft">Tippe zum Umdrehen</span>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-card border border-surface-border bg-signal-blue p-6 text-center text-white shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <span className="font-display text-xl font-semibold">{card.meaning}</span>
          <p className="text-sm italic text-white/90">"{card.example}"</p>
          <p className="text-xs text-white/70">{card.exampleTranslation}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}
