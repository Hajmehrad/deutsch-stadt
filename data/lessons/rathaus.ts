import { Lesson } from "@/types";

export const rathausLesson: Lesson = {
  id: "lesson-rathaus",
  buildingId: "rathaus",
  title: "Rathaus: Termine & Dokumente",
  icon: "🏛",
  difficulty: "A1",
  estimatedTime: 20,
  audio: [],
  vocabulary: [
    { id: "r1", word: "Termin", article: "der", plural: "die Termine", meaning: "appointment", example: "Ich habe einen Termin um zehn Uhr.", exampleTranslation: "I have an appointment at ten o'clock." },
    { id: "r2", word: "Anmeldung", article: "die", plural: "die Anmeldungen", meaning: "registration", example: "Die Anmeldung ist im ersten Stock.", exampleTranslation: "Registration is on the first floor." },
    { id: "r3", word: "Dokument", article: "das", plural: "die Dokumente", meaning: "document", example: "Ich brauche dieses Dokument.", exampleTranslation: "I need this document." },
    { id: "r4", word: "Formular", article: "das", plural: "die Formulare", meaning: "form", example: "Bitte füllen Sie das Formular aus.", exampleTranslation: "Please fill out the form." },
    { id: "r5", word: "unterschreiben", meaning: "to sign", example: "Bitte hier unterschreiben.", exampleTranslation: "Please sign here." },
  ],
  grammar: [
    {
      id: "rg1",
      title: "Trennbare Verben: ausfüllen",
      explanation: "Separable verbs split in the present tense — the prefix moves to the end of the sentence: 'ausfüllen' → 'Ich fülle das Formular aus'.",
      examples: ["Ich fülle das Formular aus.", "Füllen Sie bitte hier aus."],
    },
  ],
  dialogues: [
    { speaker: "Bürger", line: "Ich habe einen Termin um elf Uhr.", translation: "I have an appointment at eleven o'clock." },
    { speaker: "Beamter", line: "Ihr Name, bitte?", translation: "Your name, please?" },
    { speaker: "Bürger", line: "Anna Schmidt.", translation: "Anna Schmidt." },
    { speaker: "Beamter", line: "Bitte füllen Sie dieses Formular aus.", translation: "Please fill out this form." },
  ],
  quiz: [
    { id: "rq1", type: "multiple-choice", prompt: "Was bedeutet 'Formular'?", options: ["form", "document", "appointment"], answer: "form" },
    { id: "rq2", type: "fill-blank", prompt: "Ich fülle das Formular ___. (aus)", answer: "aus" },
    { id: "rq3", type: "typing", prompt: "Wie sagt man 'appointment' auf Deutsch?", answer: "Termin" },
    { id: "rq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Dokument'?", options: ["der", "die", "das"], answer: "das" },
  ],
};
