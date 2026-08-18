"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "teacher";
  text: string;
}

const CANNED_REPLIES = [
  "Sehr gut! Kannst du das noch einmal im Perfekt sagen?",
  "Fast richtig — es heißt 'der Tisch', nicht 'die Tisch'. Versuch es nochmal!",
  "Toll gemacht! Dein Deutsch wird jeden Tag besser.",
  "Interessant! Erzähl mir mehr davon, auf Deutsch bitte.",
  "Kleine Korrektur: 'Ich habe gegessen' statt 'Ich esse gehabt'.",
];

export function ChatTeacher() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "teacher", text: "Hallo! Ich bin deine KI-Lehrerin. Worüber möchtest du sprechen?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", text: input.trim() }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
      setMessages((m) => [...m, { role: "teacher", text: reply }]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="flex h-[70vh] flex-col rounded-card border border-surface-border bg-white shadow-soft">
      <div className="flex items-center gap-2 border-b border-surface-border px-5 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-blue text-sm text-white">
          🧑‍🏫
        </span>
        <div>
          <p className="text-sm font-semibold">Frau Weber</p>
          <p className="text-xs text-ink-soft">KI-Sprachlehrerin · Demo</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                m.role === "user" ? "bg-signal-blue text-white" : "bg-paper text-ink"
              )}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-start">
              <div className="flex gap-1 rounded-2xl bg-paper px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: d * 0.15 }}
                    className="h-1.5 w-1.5 rounded-full bg-ink-soft"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      <div className="flex items-center gap-2 border-t border-surface-border p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Schreib etwas auf Deutsch..."
          className="flex-1 rounded-pill border border-surface-border bg-paper px-4 py-2.5 text-sm outline-none focus:border-signal-blue"
        />
        <button
          onClick={send}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper"
          aria-label="Senden"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-1.5 border-t border-surface-border px-5 py-2 text-[10px] text-ink-soft">
        <Sparkles className="h-3 w-3" />
        Demo-Oberfläche — Antworten sind simuliert
      </div>
    </div>
  );
}
