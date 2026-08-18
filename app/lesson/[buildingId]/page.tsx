"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getLesson } from "@/data/lessons";
import { getBuilding } from "@/data/buildings";
import { useAppStore } from "@/store/useAppStore";
import { LessonProgress } from "@/components/lesson/LessonProgress";
import { VocabCard } from "@/components/lesson/VocabCard";
import { GrammarBlock } from "@/components/lesson/GrammarBlock";
import { DialogueBlock } from "@/components/lesson/DialogueBlock";
import { QuizEngine } from "@/components/lesson/QuizEngine";
import { CompletionScreen } from "@/components/lesson/CompletionScreen";

const STAGES = ["Vokabeln", "Grammatik", "Dialog", "Quiz"];

export default function LessonPage() {
  const params = useParams<{ buildingId: string }>();
  const lesson = getLesson(params.buildingId);
  const building = getBuilding(params.buildingId);
  const { completeBuilding } = useAppStore();

  const [stage, setStage] = useState(0);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  if (!lesson || !building) {
    return (
      <div className="flex h-[100dvh] flex-col items-center justify-center gap-3 text-center">
        <p className="text-lg font-semibold">Lektion nicht gefunden</p>
        <a href="/city" className="text-sm text-signal-blue underline">Zurück zur Stadt</a>
      </div>
    );
  }

  const xpEarned = lesson.vocabulary.length * 5 + lesson.quiz.length * 10;

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setFinished(true);
    completeBuilding(building.id, xpEarned);
  };

  if (finished) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-paper px-5 py-16">
        <CompletionScreen
          buildingName={building.name}
          emoji={building.emoji}
          score={finalScore}
          totalQuestions={lesson.quiz.length}
          xpEarned={xpEarned}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-paper pb-20">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-surface-border bg-paper/90 px-5 py-4 backdrop-blur-sm">
        <a
          href="/city"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-white"
          aria-label="Lektion verlassen"
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <div>
          <p className="font-display text-base font-semibold">{lesson.title}</p>
          <p className="text-xs text-ink-soft">{building.emoji} {building.name}</p>
        </div>
      </header>

      <LessonProgress steps={STAGES} currentStep={stage} />

      <div className="mx-auto max-w-lg px-5 pt-8">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div key="vocab" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <VocabCard card={lesson.vocabulary[vocabIndex]} />
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setVocabIndex((i) => Math.max(0, i - 1))}
                  disabled={vocabIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs font-medium text-ink-soft">
                  {vocabIndex + 1} / {lesson.vocabulary.length}
                </span>
                <button
                  onClick={() => setVocabIndex((i) => Math.min(lesson.vocabulary.length - 1, i + 1))}
                  disabled={vocabIndex === lesson.vocabulary.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => setStage(1)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3.5 text-sm font-semibold text-paper shadow-soft"
              >
                Weiter zur Grammatik
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div key="grammar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
              {lesson.grammar.map((g) => (
                <GrammarBlock key={g.id} point={g} />
              ))}
              <button
                onClick={() => setStage(2)}
                className="flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3.5 text-sm font-semibold text-paper shadow-soft"
              >
                Weiter zum Dialog
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div key="dialogue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
              <DialogueBlock lines={lesson.dialogues} />
              <button
                onClick={() => setStage(3)}
                className="flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3.5 text-sm font-semibold text-paper shadow-soft"
              >
                Weiter zum Quiz
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <QuizEngine questions={lesson.quiz} onComplete={handleQuizComplete} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
