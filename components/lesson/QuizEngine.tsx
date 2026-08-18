"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { QuizQuestion } from "@/types";
import { cn } from "@/lib/utils";

interface QuizEngineProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function QuizEngine({ questions, onComplete }: QuizEngineProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const question = questions[index];
  const isLast = index === questions.length - 1;

  const checkAnswer = (answer: string) => {
    const correct = normalize(answer) === normalize(question.answer);
    setStatus(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
  };

  const handleChoice = (option: string) => {
    if (status !== "idle") return;
    setSelected(option);
    checkAnswer(option);
  };

  const handleTypeSubmit = () => {
    if (status !== "idle" || !typedAnswer.trim()) return;
    checkAnswer(typedAnswer);
  };

  const next = () => {
    if (isLast) {
      onComplete(score);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setTypedAnswer("");
    setStatus("idle");
  };

  return (
    <div className="rounded-card border border-surface-border bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="signage-label text-signal-blue">Quiz</span>
        <span className="text-xs font-medium text-ink-soft">
          {index + 1} / {questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mt-5 font-display text-lg font-semibold">{question.prompt}</p>

          {(question.type === "multiple-choice" || question.type === "fill-blank") && question.options && (
            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {question.options.map((opt) => {
                const isSelected = selected === opt;
                const isCorrectOpt = normalize(opt) === normalize(question.answer);
                return (
                  <button
                    key={opt}
                    onClick={() => handleChoice(opt)}
                    disabled={status !== "idle"}
                    className={cn(
                      "rounded-sign border px-4 py-3 text-left text-sm font-medium transition-colors",
                      status === "idle" && "border-surface-border hover:border-signal-blue hover:bg-signal-blue/5",
                      status !== "idle" && isCorrectOpt && "border-signal-green bg-signal-green/10 text-signal-green",
                      status !== "idle" && isSelected && !isCorrectOpt && "border-signal-brick bg-signal-brick/10 text-signal-brick"
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {(question.type === "typing" || (question.type === "fill-blank" && !question.options)) && (
            <div className="mt-5 flex gap-2">
              <input
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTypeSubmit()}
                disabled={status !== "idle"}
                placeholder="Antwort eingeben..."
                className={cn(
                  "flex-1 rounded-sign border px-4 py-3 text-sm outline-none focus:border-signal-blue",
                  status === "correct" && "border-signal-green bg-signal-green/10",
                  status === "wrong" && "border-signal-brick bg-signal-brick/10"
                )}
              />
              {status === "idle" && (
                <button
                  onClick={handleTypeSubmit}
                  className="rounded-sign bg-ink px-4 py-3 text-sm font-semibold text-paper"
                >
                  Prüfen
                </button>
              )}
            </div>
          )}

          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "mt-4 flex items-center gap-2 rounded-sign px-4 py-3 text-sm font-medium",
                status === "correct" ? "bg-signal-green/10 text-signal-green" : "bg-signal-brick/10 text-signal-brick"
              )}
            >
              {status === "correct" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {status === "correct" ? "Richtig!" : `Richtige Antwort: ${question.answer}`}
            </motion.div>
          )}

          {status !== "idle" && (
            <button
              onClick={next}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3 text-sm font-semibold text-paper"
            >
              {isLast ? "Ergebnis anzeigen" : "Weiter"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
