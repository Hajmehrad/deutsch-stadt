import { Lesson } from "@/types";

export const bankLesson: Lesson = {
  id: "lesson-bank",
  buildingId: "bank",
  title: "Bank: Konto & Karten",
  icon: "🏦",
  difficulty: "A1",
  estimatedTime: 14,
  audio: [],
  vocabulary: [
    { id: "bk1", word: "Konto", article: "das", plural: "die Konten", meaning: "account", example: "Ich möchte ein Konto eröffnen.", exampleTranslation: "I would like to open an account." },
    { id: "bk2", word: "Karte", article: "die", plural: "die Karten", meaning: "card", example: "Ich zahle mit Karte.", exampleTranslation: "I'm paying with card." },
    { id: "bk3", word: "Geldautomat", article: "der", plural: "die Geldautomaten", meaning: "ATM", example: "Der Geldautomat ist kaputt.", exampleTranslation: "The ATM is broken." },
    { id: "bk4", word: "bezahlen", meaning: "to pay", example: "Wie möchten Sie bezahlen?", exampleTranslation: "How would you like to pay?" },
    { id: "bk5", word: "bar", meaning: "cash", example: "Ich zahle bar.", exampleTranslation: "I'm paying in cash." },
  ],
  grammar: [
    {
      id: "bkg1",
      title: "Mit + Dativ",
      explanation: "The preposition 'mit' (with) always takes the dative case: mit der Karte, mit dem Geld.",
      examples: ["Ich zahle mit der Karte.", "Ich bezahle mit dem Konto."],
    },
  ],
  dialogues: [
    { speaker: "Kunde", line: "Ich möchte ein Konto eröffnen.", translation: "I would like to open an account." },
    { speaker: "Bankangestellte", line: "Kein Problem. Haben Sie Ihren Ausweis?", translation: "No problem. Do you have your ID?" },
    { speaker: "Kunde", line: "Ja, hier bitte.", translation: "Yes, here you go." },
  ],
  quiz: [
    { id: "bkq1", type: "multiple-choice", prompt: "Was bedeutet 'bezahlen'?", options: ["to pay", "to open", "to have"], answer: "to pay" },
    { id: "bkq2", type: "fill-blank", prompt: "Ich zahle mit ___ Karte. (der)", answer: "der" },
    { id: "bkq3", type: "typing", prompt: "Wie sagt man 'cash' auf Deutsch?", answer: "bar" },
    { id: "bkq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Konto'?", options: ["der", "die", "das"], answer: "das" },
  ],
};
