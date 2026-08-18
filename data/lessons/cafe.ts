import { Lesson } from "@/types";

export const cafeLesson: Lesson = {
  id: "lesson-cafe",
  buildingId: "cafe",
  title: "Café: Ein Gespräch führen",
  icon: "☕",
  difficulty: "A1",
  estimatedTime: 15,
  audio: [],
  vocabulary: [
    { id: "c1", word: "Kaffee", article: "der", meaning: "coffee", example: "Ich trinke gern Kaffee.", exampleTranslation: "I like drinking coffee." },
    { id: "c2", word: "Tee", article: "der", meaning: "tea", example: "Möchtest du Tee oder Kaffee?", exampleTranslation: "Would you like tea or coffee?" },
    { id: "c3", word: "Zucker", article: "der", meaning: "sugar", example: "Ohne Zucker, bitte.", exampleTranslation: "Without sugar, please." },
    { id: "c4", word: "Rechnung", article: "die", plural: "die Rechnungen", meaning: "bill/check", example: "Die Rechnung, bitte.", exampleTranslation: "The bill, please." },
    { id: "c5", word: "Wie geht's?", meaning: "How are you?", example: "Hallo! Wie geht's dir?", exampleTranslation: "Hi! How are you?" },
    { id: "c6", word: "Mir geht's gut", meaning: "I'm doing well", example: "Danke, mir geht's gut.", exampleTranslation: "Thanks, I'm doing well." },
  ],
  grammar: [
    {
      id: "cg1",
      title: "Fragen mit 'Wie'",
      explanation: "'Wie' means 'how' and is used to ask about state, manner, or method.",
      examples: ["Wie geht's?", "Wie heißt du?", "Wie viel kostet das?"],
    },
  ],
  dialogues: [
    { speaker: "Lea", line: "Hallo! Wie geht's dir?", translation: "Hi! How are you?" },
    { speaker: "Tom", line: "Mir geht's gut, danke! Und dir?", translation: "I'm doing well, thanks! And you?" },
    { speaker: "Lea", line: "Auch gut. Ich hätte gern einen Kaffee.", translation: "Also good. I would like a coffee." },
    { speaker: "Kellner", line: "Mit oder ohne Zucker?", translation: "With or without sugar?" },
  ],
  quiz: [
    { id: "cq1", type: "multiple-choice", prompt: "Was antwortest du auf 'Wie geht's?'", options: ["Mir geht's gut", "Die Rechnung, bitte", "Ein Kaffee"], answer: "Mir geht's gut" },
    { id: "cq2", type: "fill-blank", prompt: "___ geht's dir? (Wie)", answer: "Wie" },
    { id: "cq3", type: "typing", prompt: "Wie sagt man 'bill/check' auf Deutsch?", answer: "Rechnung" },
    { id: "cq4", type: "multiple-choice", prompt: "Welches Wort bedeutet 'sugar'?", options: ["Zucker", "Tee", "Kaffee"], answer: "Zucker" },
  ],
};
