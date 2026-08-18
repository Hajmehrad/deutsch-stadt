import { Lesson } from "@/types";

export const trainStationLesson: Lesson = {
  id: "lesson-train-station",
  buildingId: "train-station",
  title: "Bahnhof: Ticket kaufen & reisen",
  icon: "🚉",
  difficulty: "A1",
  estimatedTime: 18,
  audio: [],
  vocabulary: [
    { id: "ts1", word: "Zug", article: "der", plural: "die Züge", meaning: "train", example: "Der Zug fährt um acht Uhr.", exampleTranslation: "The train leaves at eight o'clock." },
    { id: "ts2", word: "Fahrkarte", article: "die", plural: "die Fahrkarten", meaning: "ticket", example: "Ich brauche eine Fahrkarte nach Berlin.", exampleTranslation: "I need a ticket to Berlin." },
    { id: "ts3", word: "Gleis", article: "das", plural: "die Gleise", meaning: "platform/track", example: "Der Zug fährt von Gleis 5.", exampleTranslation: "The train departs from platform 5." },
    { id: "ts4", word: "Abfahrt", article: "die", plural: "die Abfahrten", meaning: "departure", example: "Die Abfahrt ist um neun Uhr.", exampleTranslation: "Departure is at nine o'clock." },
    { id: "ts5", word: "Ankunft", article: "die", plural: "die Ankünfte", meaning: "arrival", example: "Die Ankunft ist um elf Uhr.", exampleTranslation: "Arrival is at eleven o'clock." },
  ],
  grammar: [
    {
      id: "tsg1",
      title: "Uhrzeiten: Um wie viel Uhr?",
      explanation: "'Um wie viel Uhr' asks 'at what time'. Answer with 'um' + the hour.",
      examples: ["Um wie viel Uhr fährt der Zug?", "Um acht Uhr."],
    },
  ],
  dialogues: [
    { speaker: "Reisender", line: "Eine Fahrkarte nach München, bitte.", translation: "One ticket to Munich, please." },
    { speaker: "Schalter", line: "Einfach oder hin und zurück?", translation: "One-way or round trip?" },
    { speaker: "Reisender", line: "Hin und zurück, bitte. Von welchem Gleis fährt der Zug?", translation: "Round trip, please. Which platform does the train leave from?" },
    { speaker: "Schalter", line: "Von Gleis 3, um 14 Uhr.", translation: "From platform 3, at 2pm." },
  ],
  quiz: [
    { id: "tsq1", type: "multiple-choice", prompt: "Was bedeutet 'Gleis'?", options: ["platform", "train", "ticket"], answer: "platform" },
    { id: "tsq2", type: "fill-blank", prompt: "___ wie viel Uhr fährt der Zug? (Um)", answer: "Um" },
    { id: "tsq3", type: "typing", prompt: "Wie sagt man 'ticket' auf Deutsch?", answer: "Fahrkarte" },
    { id: "tsq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Zug'?", options: ["der", "die", "das"], answer: "der" },
  ],
};
