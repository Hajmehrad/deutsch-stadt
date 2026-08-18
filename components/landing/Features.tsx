"use client";

import { motion } from "framer-motion";
import { Volume2, MessagesSquare, Trophy, Sparkles } from "lucide-react";
import { StreetSign } from "@/components/shared/StreetSign";
import { fadeUp, staggerContainer } from "@/animations/variants";

const features = [
  {
    icon: Volume2,
    title: "Hören & sprechen",
    body: "Jede Vokabel mit nativer Aussprache. Klick den Audio-Button und hör den Unterschied zwischen \"Brot\" und \"Boot\".",
  },
  {
    icon: MessagesSquare,
    title: "Echte Dialoge",
    body: "Keine isolierten Wörter — an der Bäckerei bestellst du wirklich dein Brötchen, auf Deutsch.",
  },
  {
    icon: Trophy,
    title: "Fortschritt, der zählt",
    body: "XP, Streaks und Abzeichen für jedes Gebäude, das du meisterst. Dein Level wächst mit der Stadt.",
  },
  {
    icon: Sparkles,
    title: "A1, sauber abgegrenzt",
    body: "Kein Grammatik-Vorgriff, kein Vokabel-Overload. Jede Lektion bleibt exakt im CEFR A1 Rahmen.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 flex flex-col items-center text-center"
        >
          <StreetSign label="So funktioniert's" code="§1" variant="ink" />
          <h2 className="mt-5 max-w-lg text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Lernen fühlt sich an wie ein Spaziergang, nicht wie Unterricht
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-card border border-surface-border bg-white p-7 shadow-soft transition-shadow hover:shadow-lifted"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-signal-blue/10 text-signal-blue transition-colors group-hover:bg-signal-blue group-hover:text-white">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
