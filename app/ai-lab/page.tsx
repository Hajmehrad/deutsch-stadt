"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatTeacher } from "@/components/ai/ChatTeacher";
import { GrammarChecker } from "@/components/ai/GrammarChecker";
import { PronunciationScore } from "@/components/ai/PronunciationScore";
import { VocabGenerator } from "@/components/ai/VocabGenerator";

const tabs = [
  { id: "chat", label: "Chat-Lehrerin" },
  { id: "grammar", label: "Grammatik" },
  { id: "pronunciation", label: "Aussprache" },
  { id: "vocab", label: "Vokabeln" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function AiLabPage() {
  const [active, setActive] = useState<TabId>("chat");

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
        <p className="font-display text-lg font-semibold">KI-Lernlabor</p>
      </header>

      <div className="mx-auto max-w-lg px-5 pt-6">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "shrink-0 rounded-pill px-4 py-2 text-sm font-medium transition-colors",
                active === tab.id ? "bg-ink text-paper" : "border border-surface-border bg-white text-ink-soft"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-5">
          {active === "chat" && <ChatTeacher />}
          {active === "grammar" && <GrammarChecker />}
          {active === "pronunciation" && <PronunciationScore />}
          {active === "vocab" && <VocabGenerator />}
        </div>
      </div>
    </main>
  );
}
