import { Lesson } from "@/types";

export const cinemaLesson: Lesson = {
  id: "lesson-cinema",
  buildingId: "cinema",
  title: "Kino: Hörverstehen",
  icon: "🎭",
  difficulty: "A1",
  estimatedTime: 14,
  audio: [],
  vocabulary: [
    { id: "ci1", word: "Film", article: "der", plural: "die Filme", meaning: "movie", example: "Der Film beginnt um acht Uhr.", exampleTranslation: "The movie starts at eight o'clock." },
    { id: "ci2", word: "Karte", article: "die", plural: "die Karten", meaning: "ticket (cinema)", example: "Zwei Karten, bitte.", exampleTranslation: "Two tickets, please." },
    { id: "ci3", word: "Popcorn", article: "das", meaning: "popcorn", example: "Ich möchte Popcorn und eine Cola.", exampleTranslation: "I'd like popcorn and a cola." },
    { id: "ci4", word: "Geschichte", article: "die", plural: "die Geschichten", meaning: "story", example: "Das ist eine lustige Geschichte.", exampleTranslation: "That's a funny story." },
    { id: "ci5", word: "verstehen", meaning: "to understand", example: "Ich verstehe den Film gut.", exampleTranslation: "I understand the movie well." },
  ],
  grammar: [
    {
      id: "cig1",
      title: "Adjektive: lustig, spannend, traurig",
      explanation: "Descriptive adjectives come after 'sein' without an ending: Der Film ist lustig.",
      examples: ["Der Film ist spannend.", "Die Geschichte ist traurig."],
    },
  ],
  dialogues: [
    { speaker: "Freund", line: "Wie war der Film?", translation: "How was the movie?" },
    { speaker: "Lena", line: "Sehr spannend! Ich habe alles verstanden.", translation: "Very exciting! I understood everything." },
  ],
  quiz: [
    { id: "ciq1", type: "multiple-choice", prompt: "Was bedeutet 'spannend'?", options: ["exciting", "boring", "sad"], answer: "exciting" },
    { id: "ciq2", type: "fill-blank", prompt: "Der Film ___ um acht Uhr. (beginnt)", answer: "beginnt" },
    { id: "ciq3", type: "typing", prompt: "Wie sagt man 'story' auf Deutsch?", answer: "Geschichte" },
    { id: "ciq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Film'?", options: ["der", "die", "das"], answer: "der" },
  ],
};
