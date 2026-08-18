import { Lesson } from "@/types";

export const homeLesson: Lesson = {
  id: "lesson-home",
  buildingId: "home",
  title: "Zuhause: Begrüßung & die Familie",
  icon: "🏠",
  difficulty: "A1",
  estimatedTime: 15,
  audio: [],
  vocabulary: [
    { id: "h1", word: "Hallo", meaning: "Hello", example: "Hallo, ich heiße Anna.", exampleTranslation: "Hello, my name is Anna." },
    { id: "h2", word: "Tschüss", meaning: "Bye", example: "Tschüss, bis morgen!", exampleTranslation: "Bye, see you tomorrow!" },
    { id: "h3", word: "Familie", article: "die", plural: "die Familien", meaning: "family", example: "Meine Familie ist groß.", exampleTranslation: "My family is big." },
    { id: "h4", word: "Mutter", article: "die", plural: "die Mütter", meaning: "mother", example: "Meine Mutter heißt Petra.", exampleTranslation: "My mother's name is Petra." },
    { id: "h5", word: "Vater", article: "der", plural: "die Väter", meaning: "father", example: "Mein Vater arbeitet viel.", exampleTranslation: "My father works a lot." },
    { id: "h6", word: "eins, zwei, drei", meaning: "one, two, three", example: "Eins, zwei, drei — los!", exampleTranslation: "One, two, three — go!" },
    { id: "h7", word: "rot", meaning: "red", example: "Der Apfel ist rot.", exampleTranslation: "The apple is red." },
  ],
  grammar: [
    {
      id: "hg1",
      title: "Ich heiße... / Ich bin...",
      explanation:
        "To say your name, use 'Ich heiße' (I am called) or 'Ich bin' (I am) followed by your name.",
      examples: ["Ich heiße Tom.", "Ich bin Lena.", "Wie heißt du?"],
    },
  ],
  dialogues: [
    { speaker: "Anna", line: "Hallo! Ich heiße Anna. Wie heißt du?", translation: "Hi! My name is Anna. What's your name?" },
    { speaker: "Ben", line: "Hallo Anna, ich heiße Ben.", translation: "Hi Anna, my name is Ben." },
    { speaker: "Anna", line: "Freut mich, Ben!", translation: "Nice to meet you, Ben!" },
  ],
  quiz: [
    { id: "hq1", type: "multiple-choice", prompt: "Wie sagt man 'family' auf Deutsch?", options: ["die Familie", "der Vater", "das Haus", "die Mutter"], answer: "die Familie" },
    { id: "hq2", type: "fill-blank", prompt: "Ich ___ Anna. (heißen)", answer: "heiße" },
    { id: "hq3", type: "multiple-choice", prompt: "Welches Wort bedeutet 'father'?", options: ["die Mutter", "der Vater", "die Familie", "Tschüss"], answer: "der Vater" },
    { id: "hq4", type: "typing", prompt: "Wie sagt man 'Hello' auf Deutsch?", answer: "Hallo" },
  ],
};
