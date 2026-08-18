import { Lesson } from "@/types";

export const policeLesson: Lesson = {
  id: "lesson-police",
  buildingId: "police",
  title: "Polizei: Notfallsätze",
  icon: "👮",
  difficulty: "A1",
  estimatedTime: 10,
  audio: [],
  vocabulary: [
    { id: "pl1", word: "Polizei", article: "die", meaning: "police", example: "Rufen Sie die Polizei!", exampleTranslation: "Call the police!" },
    { id: "pl2", word: "Notfall", article: "der", plural: "die Notfälle", meaning: "emergency", example: "Das ist ein Notfall!", exampleTranslation: "This is an emergency!" },
    { id: "pl3", word: "verloren", meaning: "lost", example: "Ich habe meinen Pass verloren.", exampleTranslation: "I lost my passport." },
    { id: "pl4", word: "Ausweis", article: "der", plural: "die Ausweise", meaning: "ID card", example: "Ihr Ausweis, bitte.", exampleTranslation: "Your ID, please." },
    { id: "pl5", word: "Hilfe brauchen", meaning: "to need help", example: "Ich brauche Hilfe.", exampleTranslation: "I need help." },
  ],
  grammar: [
    {
      id: "plg1",
      title: "Imperativ: Rufen Sie!",
      explanation: "The formal imperative (Sie-form) is used to give urgent instructions politely — the verb stem plus 'Sie'.",
      examples: ["Rufen Sie die Polizei!", "Kommen Sie schnell!"],
    },
  ],
  dialogues: [
    { speaker: "Tourist", line: "Entschuldigung, ich habe meine Tasche verloren.", translation: "Excuse me, I lost my bag." },
    { speaker: "Polizist", line: "Kein Problem. Wie ist Ihr Name?", translation: "No problem. What's your name?" },
  ],
  quiz: [
    { id: "plq1", type: "multiple-choice", prompt: "Was bedeutet 'Notfall'?", options: ["emergency", "police", "help"], answer: "emergency" },
    { id: "plq2", type: "fill-blank", prompt: "Ich habe meinen Pass ___. (verloren)", answer: "verloren" },
    { id: "plq3", type: "typing", prompt: "Wie sagt man 'ID card' auf Deutsch?", answer: "Ausweis" },
    { id: "plq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Polizei'?", options: ["der", "die", "das"], answer: "die" },
  ],
};
