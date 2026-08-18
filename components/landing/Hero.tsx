"use client";

import { motion } from "framer-motion";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { StreetSign } from "@/components/shared/StreetSign";
import { fadeUpStagger, staggerContainer, signSwing } from "@/animations/variants";

const buildings = [
  { emoji: "🏠", label: "Zuhause" },
  { emoji: "🏪", label: "Markt" },
  { emoji: "🍞", label: "Bäckerei" },
  { emoji: "☕", label: "Café" },
  { emoji: "🚉", label: "Bahnhof" },
  { emoji: "🏦", label: "Bank" },
  { emoji: "🏫", label: "Schule" },
  { emoji: "🌳", label: "Park" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-grid px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-signal-amber/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-signal-blue/10 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.div variants={signSwing}>
          <StreetSign label="Deutsch A1" code="EINGANG" variant="blue" />
        </motion.div>

        <motion.h1
          variants={fadeUpStagger(0.1)}
          className="mt-7 text-balance font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Lerne Deutsch, indem du
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">durch die Stadt läufst</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 z-0 h-4 w-full origin-left rounded-full bg-signal-amber/60 sm:h-5"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUpStagger(0.2)}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft"
        >
          Jedes Gebäude ist eine Lektion. Kein Menü, kein Lehrbuch — geh zur
          Bäckerei für Vokabeln, zum Bahnhof für Grammatik. Deutsch A1, so wie
          du es wirklich brauchst.
        </motion.p>

        <motion.div variants={fadeUpStagger(0.3)} className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/city"
            className="group inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-3.5 text-sm font-semibold text-paper shadow-lifted transition-transform hover:-translate-y-0.5"
          >
            Stadt kostenlos betreten
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-pill border border-surface-border bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-border/30"
          >
            Wie funktioniert's?
          </a>
        </motion.div>

        <motion.p variants={fadeUpStagger(0.35)} className="mt-4 text-xs text-ink-soft/70">
          Keine Kreditkarte nötig · 15 Gebäude · CEFR A1 zertifiziert
        </motion.p>
      </motion.div>

      {/* skyline teaser strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-card border border-surface-border bg-white p-3 shadow-lifted">
          <div className="relative flex h-56 items-end justify-center gap-3 overflow-hidden rounded-[14px] bg-gradient-to-b from-signal-blue/5 to-signal-amber/10 px-4 pb-4 sm:h-72 sm:gap-5">
            {/* floating cloud */}
            <div className="absolute left-6 top-6 h-8 w-16 rounded-full bg-white/80 animate-float sm:h-10 sm:w-24" />
            <div className="absolute right-10 top-12 h-6 w-12 rounded-full bg-white/70 animate-float [animation-delay:1.2s] sm:h-8 sm:w-16" />

            {buildings.map((b, i) => (
              <motion.button
                key={b.label}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.06 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-white text-2xl shadow-soft transition-shadow group-hover:shadow-lifted sm:h-20 sm:w-20 sm:text-4xl">
                  {b.emoji}
                </div>
                <span className="signage-label text-ink-soft opacity-0 transition-opacity group-hover:opacity-100">
                  {b.label}
                </span>
              </motion.button>
            ))}

            {/* ground line */}
            <div className="absolute bottom-3 left-4 right-4 h-px bg-ink/10" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-soft">
          <MousePointerClick className="h-3.5 w-3.5" />
          Klicke ein Gebäude in der echten Stadt für eine komplette Lektion
        </div>
      </motion.div>
    </section>
  );
}
