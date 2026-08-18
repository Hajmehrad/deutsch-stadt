import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface GameShellProps {
  title: string;
  emoji: string;
  children: ReactNode;
}

export function GameShell({ title, emoji, children }: GameShellProps) {
  return (
    <div className="min-h-[100dvh] bg-paper pb-16">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-surface-border bg-paper/90 px-5 py-4 backdrop-blur-sm sm:px-8">
        <a
          href="/practice"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-white"
          aria-label="Zurück zu Übungen"
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <p className="font-display text-lg font-semibold">
          {emoji} {title}
        </p>
      </header>
      <div className="mx-auto max-w-lg px-5 pt-6">{children}</div>
    </div>
  );
}
