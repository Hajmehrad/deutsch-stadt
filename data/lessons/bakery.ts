import { Lesson } from "@/types";

export const bakeryLesson: Lesson = {
  id: "lesson-bakery",
  buildingId: "bakery",
  title: "Bäckerei: Frühstück bestellen",
  icon: "🍞",
  difficulty: "A1",
  estimatedTime: 12,
  audio: [],
  vocabulary: [
    { id: "b1", word: "Brot", article: "das", plural: "die Brote", meaning: "bread", example: "Das Brot ist frisch.", exampleTranslation: "The bread is fresh." },
    { id: "b2", word: "Brötchen", article: "das", plural: "die Brötchen", meaning: "bread roll", example: "Ich hätte gern zwei Brötchen.", exampleTranslation: "I'd like two bread rolls." },
    { id: "b3", word: "Butter", article: "die", meaning: "butter", example: "Brot mit Butter schmeckt gut.", exampleTranslation: "Bread with butter tastes good." },
    { id: "b4", word: "Croissant", article: "das", plural: "die Croissants", meaning: "croissant", example: "Ein Croissant, bitte.", exampleTranslation: "A croissant, please." },
    { id: "b5", word: "Ich hätte gern...", meaning: "I would like...", example: "Ich hätte gern ein Brötchen.", exampleTranslation: "I would like a bread roll." },
  ],
  grammar: [
    {
      id: "bg1",
      title: "Höfliche Bestellung: Ich hätte gern...",
      explanation:
        "'Ich hätte gern' is the polite way to order something, more formal than 'Ich möchte'.",
      examples: ["Ich hätte gern ein Brot.", "Ich hätte gern zwei Croissants."],
    },
  ],
  dialogues: [
    { speaker: "Bäcker", line: "Guten Morgen! Was darf's sein?", translation: "Good morning! What would you like?" },
    { speaker: "Kunde", line: "Ich hätte gern drei Brötchen, bitte.", translation: "I would like three bread rolls, please." },
    { speaker: "Bäcker", line: "Sonst noch etwas?", translation: "Anything else?" },
    { speaker: "Kunde", line: "Nein, danke. Das ist alles.", translation: "No thanks. That's all." },
  ],
  quiz: [
    { id: "bq1", type: "multiple-choice", prompt: "Was bedeutet 'Brötchen'?", options: ["bread roll", "butter", "croissant"], answer: "bread roll" },
    { id: "bq2", type: "fill-blank", prompt: "Ich ___ gern ein Brot. (hätte)", answer: "hätte" },
    { id: "bq3", type: "typing", prompt: "Wie sagt man 'bread' auf Deutsch?", answer: "Brot" },
    { id: "bq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Butter'?", options: ["der", "die", "das"], answer: "die" },
  ],
};
