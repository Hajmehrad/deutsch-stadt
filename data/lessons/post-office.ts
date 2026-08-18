import { Lesson } from "@/types";

export const postOfficeLesson: Lesson = {
  id: "lesson-post-office",
  buildingId: "post-office",
  title: "Post: Briefe & Pakete",
  icon: "🏤",
  difficulty: "A1",
  estimatedTime: 12,
  audio: [],
  vocabulary: [
    { id: "po1", word: "Brief", article: "der", plural: "die Briefe", meaning: "letter", example: "Ich schreibe einen Brief.", exampleTranslation: "I'm writing a letter." },
    { id: "po2", word: "Paket", article: "das", plural: "die Pakete", meaning: "package", example: "Das Paket ist schwer.", exampleTranslation: "The package is heavy." },
    { id: "po3", word: "Briefmarke", article: "die", plural: "die Briefmarken", meaning: "stamp", example: "Ich brauche eine Briefmarke.", exampleTranslation: "I need a stamp." },
    { id: "po4", word: "Adresse", article: "die", plural: "die Adressen", meaning: "address", example: "Wie ist deine Adresse?", exampleTranslation: "What's your address?" },
    { id: "po5", word: "senden", meaning: "to send", example: "Ich möchte das Paket senden.", exampleTranslation: "I want to send the package." },
  ],
  grammar: [
    {
      id: "pog1",
      title: "Buchstabieren: das Alphabet",
      explanation: "When giving your address, Germans often ask you to spell it out (buchstabieren). Practice saying letters individually.",
      examples: ["Wie schreibt man das?", "M-Ü-L-L-E-R"],
    },
  ],
  dialogues: [
    { speaker: "Postbote", line: "Guten Tag, ich möchte dieses Paket senden.", translation: "Good day, I would like to send this package." },
    { speaker: "Angestellte", line: "Wie ist die Adresse?", translation: "What's the address?" },
    { speaker: "Postbote", line: "Hauptstraße 12, Berlin.", translation: "Hauptstraße 12, Berlin." },
  ],
  quiz: [
    { id: "poq1", type: "multiple-choice", prompt: "Was bedeutet 'Briefmarke'?", options: ["stamp", "letter", "package"], answer: "stamp" },
    { id: "poq2", type: "fill-blank", prompt: "Wie ist deine ___? (Adresse)", answer: "Adresse" },
    { id: "poq3", type: "typing", prompt: "Wie sagt man 'package' auf Deutsch?", answer: "Paket" },
    { id: "poq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Brief'?", options: ["der", "die", "das"], answer: "der" },
  ],
};
