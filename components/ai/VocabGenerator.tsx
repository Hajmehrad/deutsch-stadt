"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Sparkles } from "lucide-react";

const TOPIC_BANKS: Record<string, { word: string; meaning: string }[]> = {
  wetter: [
    { word: "die Sonne", meaning: "sun" },
    { word: "der Regen", meaning: "rain" },
    { word: "der Wind", meaning: "wind" },
    { word: "die Wolke", meaning: "cloud" },
  ],
  reisen: [
    { word: "der Koffer", meaning: "suitcase" },
    { word: "der Flughafen", meaning: "airport" },
    { word: "die Reise", meaning: "trip" },
    { word: "das Hotel", meaning: "hotel" },
  ],
  sport: [
    { word: "laufen", meaning: "to run" },
    { word: "schwimmen", meaning: "to swim" },
    { word: "der Ball", meaning: "ball" },
    { word: "das Spiel", meaning: "game" },
  ],
};

export function VocabGenerator() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<{ word: string; meaning: string }[] | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      const key = Object.keys(TOPIC_BANKS).find((k) => topic.toLowerCase().includes(k));
      setResults(key ? TOPIC_BANKS[key] : TOPIC_BANKS.reisen);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <div className="flex items-center gap-2 text-signal-blue">
        <Wand2 className="h-4 w-4" />
        <span className="signage-label">Vokabel-Generator</span>
      </div>
      <p className="mt-2 text-sm text-ink-soft">
        Gib ein Thema ein (z.B. "Wetter", "Reisen", "Sport") und erhalte passende A1-Vokabeln.
      </p>

      <div className="mt-4 flex gap-2">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generate()}
          placeholder="Thema eingeben..."
          className="flex-1 rounded-sign border border-surface-border bg-paper px-4 py-2.5 text-sm outline-none focus:border-signal-blue"
        />
        <button
          onClick={generate}
          disabled={!topic.trim() || loading}
          className="rounded-sign bg-ink px-4 py-2.5 text-sm font-semibold text-paper disabled:opacity-40"
        >
          {loading ? "..." : "Los"}
        </button>
      </div>

      {results && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 grid grid-cols-2 gap-2"
        >
          {results.map((r) => (
            <div key={r.word} className="rounded-sign border border-surface-border bg-paper px-3 py-2.5">
              <p className="text-sm font-semibold">{r.word}</p>
              <p className="text-xs text-ink-soft">{r.meaning}</p>
            </div>
          ))}
        </motion.div>
      )}

      <div className="mt-4 flex items-center gap-1.5 text-[10px] text-ink-soft">
        <Sparkles className="h-3 w-3" />
        Demo-Oberfläche — begrenzte Themenauswahl
      </div>
    </div>
  );
}
