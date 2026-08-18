import { ArrowLeft, Layers, Grid3x3, Volume2, Shuffle } from "lucide-react";
import { StreetSign } from "@/components/shared/StreetSign";

const modes = [
  {
    href: "/practice/flashcards",
    icon: Layers,
    title: "Karteikarten",
    desc: "Wische durch alle Vokabeln, die du gelernt hast",
    accent: "bg-signal-blue/10 text-signal-blue",
  },
  {
    href: "/practice/memory",
    icon: Grid3x3,
    title: "Memory",
    desc: "Finde die passenden Wort-Bedeutungs-Paare",
    accent: "bg-signal-green/10 text-signal-green",
  },
  {
    href: "/practice/listening",
    icon: Volume2,
    title: "Hörquiz",
    desc: "Hör die Vokabel und wähle die richtige Bedeutung",
    accent: "bg-signal-amber/10 text-signal-amber",
  },
  {
    href: "/practice/sentences",
    icon: Shuffle,
    title: "Satz-Puzzle",
    desc: "Bring die Wörter in die richtige Reihenfolge",
    accent: "bg-signal-brick/10 text-signal-brick",
  },
];

export default function PracticePage() {
  return (
    <main className="min-h-[100dvh] bg-paper pb-16">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-surface-border bg-paper/90 px-5 py-4 backdrop-blur-sm sm:px-8">
        <a
          href="/city"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-white"
          aria-label="Zurück zur Stadt"
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <p className="font-display text-lg font-semibold">Übungsplatz</p>
      </header>

      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        <StreetSign label="Übung" code="ALLE VOKABELN" variant="ink" />
        <h1 className="mt-4 font-display text-2xl font-semibold">Wähle ein Spiel</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Alle Übungen mischen Vokabeln aus jedem Gebäude, das du bereits besucht hast.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {modes.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className="group rounded-card border border-surface-border bg-white p-6 shadow-soft transition-shadow hover:shadow-lifted"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${m.accent}`}>
                <m.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{m.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
