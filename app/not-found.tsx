import { MapPin } from "lucide-react";
import { StreetSign } from "@/components/shared/StreetSign";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-5 bg-paper px-5 text-center">
      <StreetSign label="Nicht gefunden" code="404" variant="brick" />
      <h1 className="font-display text-3xl font-semibold">Diese Straße gibt es nicht</h1>
      <p className="max-w-sm text-sm text-ink-soft">
        Die Seite, die du suchst, existiert nicht in Deutsch Stadt. Vielleicht ist sie noch im Bau.
      </p>
      <a
        href="/"
        className="mt-2 flex items-center gap-2 rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-soft"
      >
        <MapPin className="h-4 w-4" />
        Zurück zur Startseite
      </a>
    </main>
  );
}
