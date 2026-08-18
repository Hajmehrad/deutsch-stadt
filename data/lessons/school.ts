import { Lesson } from "@/types";

export const schoolLesson: Lesson = {
  id: "lesson-school",
  buildingId: "school",
  title: "Schule: Grammatik-Grundlagen",
  icon: "🏫",
  difficulty: "A1",
  estimatedTime: 20,
  audio: [],
  vocabulary: [
    { id: "sc1", word: "Lehrer", article: "der", plural: "die Lehrer", meaning: "teacher (m)", example: "Der Lehrer erklärt die Grammatik.", exampleTranslation: "The teacher explains the grammar." },
    { id: "sc2", word: "Schüler", article: "der", plural: "die Schüler", meaning: "student (m)", example: "Die Schüler lernen Deutsch.", exampleTranslation: "The students learn German." },
    { id: "sc3", word: "Buch", article: "das", plural: "die Bücher", meaning: "book", example: "Ich brauche mein Buch.", exampleTranslation: "I need my book." },
    { id: "sc4", word: "lernen", meaning: "to learn", example: "Wir lernen jeden Tag.", exampleTranslation: "We learn every day." },
    { id: "sc5", word: "verstehen", meaning: "to understand", example: "Verstehst du die Frage?", exampleTranslation: "Do you understand the question?" },
  ],
  grammar: [
    {
      id: "scg1",
      title: "Personalpronomen & sein",
      explanation: "The verb 'sein' (to be) is irregular: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.",
      examples: ["Ich bin Schüler.", "Du bist mein Freund.", "Wir sind in der Schule."],
    },
    {
      id: "scg2",
      title: "Bestimmte Artikel: der, die, das",
      explanation: "German nouns have three genders: der (masculine), die (feminine), das (neuter). Learn each noun with its article.",
      examples: ["der Lehrer", "die Schule", "das Buch"],
    },
  ],
  dialogues: [
    { speaker: "Lehrer", line: "Versteht ihr die Grammatik?", translation: "Do you all understand the grammar?" },
    { speaker: "Schüler", line: "Ja, ich verstehe. Danke!", translation: "Yes, I understand. Thanks!" },
  ],
  quiz: [
    { id: "scq1", type: "multiple-choice", prompt: "Wie konjugiert man 'sein' für 'du'?", options: ["bin", "bist", "ist"], answer: "bist" },
    { id: "scq2", type: "fill-blank", prompt: "___ Buch ist neu. (Das/Die/Der)", answer: "Das" },
    { id: "scq3", type: "typing", prompt: "Wie sagt man 'to understand' auf Deutsch?", answer: "verstehen" },
    { id: "scq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Schüler'?", options: ["der", "die", "das"], answer: "der" },
  ],
};
