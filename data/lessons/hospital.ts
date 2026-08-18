import { Lesson } from "@/types";

export const hospitalLesson: Lesson = {
  id: "lesson-hospital",
  buildingId: "hospital",
  title: "Krankenhaus: Beim Arzt",
  icon: "🏥",
  difficulty: "A1",
  estimatedTime: 16,
  audio: [],
  vocabulary: [
    { id: "ho1", word: "Kopf", article: "der", plural: "die Köpfe", meaning: "head", example: "Mein Kopf tut weh.", exampleTranslation: "My head hurts." },
    { id: "ho2", word: "Bauch", article: "der", plural: "die Bäuche", meaning: "stomach", example: "Mein Bauch tut weh.", exampleTranslation: "My stomach hurts." },
    { id: "ho3", word: "Arzt", article: "der", plural: "die Ärzte", meaning: "doctor (m)", example: "Ich brauche einen Arzt.", exampleTranslation: "I need a doctor." },
    { id: "ho4", word: "Schmerzen", article: "die", meaning: "pain", example: "Ich habe starke Schmerzen.", exampleTranslation: "I have strong pain." },
    { id: "ho5", word: "krank", meaning: "sick", example: "Ich bin krank.", exampleTranslation: "I am sick." },
    { id: "ho6", word: "Hilfe!", meaning: "Help!", example: "Hilfe, ich brauche einen Arzt!", exampleTranslation: "Help, I need a doctor!" },
  ],
  grammar: [
    {
      id: "hog1",
      title: "'Mein/e ... tut weh'",
      explanation: "To say a body part hurts, use the possessive pronoun + body part + 'tut weh' (singular) or 'tun weh' (plural).",
      examples: ["Mein Kopf tut weh.", "Meine Augen tun weh."],
    },
  ],
  dialogues: [
    { speaker: "Patient", line: "Guten Tag, mein Bauch tut weh.", translation: "Good day, my stomach hurts." },
    { speaker: "Arzt", line: "Seit wann haben Sie die Schmerzen?", translation: "Since when have you had the pain?" },
    { speaker: "Patient", line: "Seit gestern.", translation: "Since yesterday." },
  ],
  quiz: [
    { id: "hoq1", type: "multiple-choice", prompt: "Was bedeutet 'krank'?", options: ["sick", "healthy", "tired"], answer: "sick" },
    { id: "hoq2", type: "fill-blank", prompt: "Mein Kopf ___ weh. (tut)", answer: "tut" },
    { id: "hoq3", type: "typing", prompt: "Wie sagt man 'doctor' auf Deutsch?", answer: "Arzt" },
    { id: "hoq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Kopf'?", options: ["der", "die", "das"], answer: "der" },
  ],
};
