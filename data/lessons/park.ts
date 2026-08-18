import { Lesson } from "@/types";

export const parkLesson: Lesson = {
  id: "lesson-park",
  buildingId: "park",
  title: "Park: Wortschatz wiederholen",
  icon: "🌳",
  difficulty: "A1",
  estimatedTime: 10,
  audio: [],
  vocabulary: [
    { id: "p1", word: "Baum", article: "der", plural: "die Bäume", meaning: "tree", example: "Der Baum ist groß.", exampleTranslation: "The tree is big." },
    { id: "p2", word: "Hund", article: "der", plural: "die Hunde", meaning: "dog", example: "Der Hund spielt im Park.", exampleTranslation: "The dog plays in the park." },
    { id: "p3", word: "Bank", article: "die", plural: "die Bänke", meaning: "bench", example: "Wir sitzen auf der Bank.", exampleTranslation: "We sit on the bench." },
    { id: "p4", word: "spielen", meaning: "to play", example: "Die Kinder spielen im Park.", exampleTranslation: "The children play in the park." },
    { id: "p5", word: "laufen", meaning: "to run/walk", example: "Ich laufe jeden Tag.", exampleTranslation: "I run every day." },
  ],
  grammar: [
    {
      id: "pg1",
      title: "Verben im Präsens: -en Endung",
      explanation: "Regular verbs in the present tense drop -en and add personal endings: ich spiele, du spielst, er/sie/es spielt.",
      examples: ["ich spiele", "du spielst", "er spielt"],
    },
  ],
  dialogues: [
    { speaker: "Mia", line: "Was machst du im Park?", translation: "What are you doing in the park?" },
    { speaker: "Jonas", line: "Ich laufe mit meinem Hund.", translation: "I'm walking with my dog." },
  ],
  quiz: [
    { id: "pq1", type: "multiple-choice", prompt: "Wie konjugiert man 'spielen' für 'ich'?", options: ["spiele", "spielst", "spielt"], answer: "spiele" },
    { id: "pq2", type: "fill-blank", prompt: "Der Hund ___ im Park. (spielen)", answer: "spielt" },
    { id: "pq3", type: "typing", prompt: "Wie sagt man 'tree' auf Deutsch?", answer: "Baum" },
    { id: "pq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Bank' (bench)?", options: ["der", "die", "das"], answer: "die" },
  ],
};
