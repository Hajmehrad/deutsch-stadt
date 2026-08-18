import { MapPin } from "lucide-react";
import { StreetSign } from "./StreetSign";

const columns = [
  {
    heading: "Die Stadt",
    links: ["Alle Gebäude", "Lernpfad", "Fortschritt", "Erfolge"],
  },
  {
    heading: "Ressourcen",
    links: ["Grammatik A1", "Wortschatz-Liste", "Aussprachehilfe", "FAQ"],
  },
  {
    heading: "Unternehmen",
    links: ["Über uns", "Blog", "Kontakt", "Karriere"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-white px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div className="max-w-xs">
            <a href="/" className="flex items-center gap-2.5">
              <MapPin className="h-5 w-5 text-signal-blue" strokeWidth={2.5} />
              <span className="font-display text-lg font-semibold">
                Deutsch <span className="text-signal-blue">Stadt</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Eine virtuelle deutsche Stadt zum Deutschlernen. CEFR A1,
              Gebäude für Gebäude.
            </p>
            <div className="mt-5">
              <StreetSign label="Auf Wiedersehen" code="AUSGANG" variant="amber" className="scale-90" />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="signage-label text-ink-soft">{col.heading}</h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-6 text-xs text-ink-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Deutsch Stadt. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Datenschutz</a>
            <a href="#" className="hover:text-ink">AGB</a>
            <a href="#" className="hover:text-ink">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
