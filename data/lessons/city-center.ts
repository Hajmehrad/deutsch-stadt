import { Lesson } from "@/types";

export const cityCenterLesson: Lesson = {
  id: "lesson-city-center",
  buildingId: "city-center",
  title: "Stadtzentrum: Abschlusstest",
  icon: "🏆",
  difficulty: "A1",
  estimatedTime: 25,
  audio: [],
  vocabulary: [
    { id: "cc1", word: "Zertifikat", article: "das", plural: "die Zertifikate", meaning: "certificate", example: "Ich habe mein Zertifikat bekommen.", exampleTranslation: "I received my certificate." },
    { id: "cc2", word: "geschafft", meaning: "done/accomplished", example: "Ich habe es geschafft!", exampleTranslation: "I did it!" },
    { id: "cc3", word: "stolz", meaning: "proud", example: "Ich bin stolz auf mich.", exampleTranslation: "I am proud of myself." },
  ],
  grammar: [
    {
      id: "ccg1",
      title: "Perfekt: Ich habe... gemacht",
      explanation: "The perfect tense uses 'haben' or 'sein' + past participle to talk about completed actions — useful for reflecting on what you've learned.",
      examples: ["Ich habe Deutsch gelernt.", "Ich habe die Stadt erkundet."],
    },
  ],
  dialogues: [
    { speaker: "Bürgermeister", line: "Herzlichen Glückwunsch! Du hast das Niveau A1 geschafft.", translation: "Congratulations! You've achieved A1 level." },
    { speaker: "Du", line: "Danke! Ich bin sehr stolz.", translation: "Thank you! I am very proud." },
  ],
  quiz: [
    { id: "ccq1", type: "multiple-choice", prompt: "Was bedeutet 'geschafft'?", options: ["accomplished", "lost", "tired"], answer: "accomplished" },
    { id: "ccq2", type: "fill-blank", prompt: "Ich ___ Deutsch gelernt. (habe)", answer: "habe" },
    { id: "ccq3", type: "typing", prompt: "Wie sagt man 'proud' auf Deutsch?", answer: "stolz" },
    { id: "ccq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Zertifikat'?", options: ["der", "die", "das"], answer: "das" },
  ],
};
