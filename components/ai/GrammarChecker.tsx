"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Check, Sparkles } from "lucide-react";

interface Correction {
  original: string;
  corrected: string;
  explanation: string;
}

// Simple demo rules — a real integration would call a language model.
const DEMO_RULES: Correction[] = [
  { original: "Ich bin Student.", corrected: "Ich bin Student.", explanation: "Perfekt! Kein Fehler gefunden." },
  { original: "die Tisch", corrected: "der Tisch", explanation: "'Tisch' ist maskulin — der Artikel ist 'der', nicht 'die'." },
  { original: "Ich habe gegangen", corrected: "Ich bin gegangen", explanation: "Bewegungsverben wie 'gehen' bilden das Perfekt mit 'sein', nicht 'haben'." },
  { original: "Ich esse gehabt", corrected: "Ich habe gegessen", explanation: "Die richtige Perfekt-Form ist 'habe gegessen', nicht 'esse gehabt'." },
];

export function GrammarChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<Correction | null>(null);
  const [checking, setChecking] = useState(false);

  const check = () => {
    if (!text.trim()) return;
    setChecking(true);
    setResult(null);

    setTimeout(() => {
      const match = DEMO_RULES.find((r) => text.toLowerCase().includes(r.original.toLowerCase().slice(0, 6)));
      setResult(
        match ?? {
          original: text,
          corrected: text,
          explanation: "Sieht gut aus! (Demo-Modus prüft nur eine begrenzte Auswahl an Sätzen.)",
        }
      );
      setChecking(false);
    }, 900);
  };

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <div className="flex items-center gap-2 text-signal-blue">
        <Wand2 className="h-4 w-4" />
        <span className="signage-label">Grammatik-Check</span>
      </div>
      <p className="mt-2 text-sm text-ink-soft">
        Schreib einen deutschen Satz. Probier z.B. "die Tisch" oder "Ich habe gegangen".
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Schreib deinen Satz hier..."
        className="mt-4 w-full resize-none rounded-sign border border-surface-border bg-paper p-4 text-sm outline-none focus:border-signal-blue"
      />

      <button
        onClick={check}
        disabled={!text.trim() || checking}
        className="mt-3 flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-paper disabled:opacity-40"
      >
        {checking ? "Prüfe..." : "Prüfen"}
      </button>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 rounded-sign border border-signal-green/25 bg-signal-green/5 p-4"
          >
            <div className="flex items-center gap-2 text-signal-green">
              <Check className="h-4 w-4" />
              <span className="text-sm font-semibold">{result.corrected}</span>
            </div>
            <p className="mt-2 text-xs text-ink-soft">{result.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex items-center gap-1.5 text-[10px] text-ink-soft">
        <Sparkles className="h-3 w-3" />
        Demo-Oberfläche — begrenzte Regeln zur Veranschaulichung
      </div>
    </div>
  );
}
