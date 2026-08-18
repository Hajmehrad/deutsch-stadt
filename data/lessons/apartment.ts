import { Lesson } from "@/types";

export const apartmentLesson: Lesson = {
  id: "lesson-apartment",
  buildingId: "apartment",
  title: "Wohnung: Möbel & Alltag",
  icon: "🏡",
  difficulty: "A1",
  estimatedTime: 15,
  audio: [],
  vocabulary: [
    { id: "a1", word: "Zimmer", article: "das", plural: "die Zimmer", meaning: "room", example: "Mein Zimmer ist klein.", exampleTranslation: "My room is small." },
    { id: "a2", word: "Bett", article: "das", plural: "die Betten", meaning: "bed", example: "Das Bett ist bequem.", exampleTranslation: "The bed is comfortable." },
    { id: "a3", word: "Tisch", article: "der", plural: "die Tische", meaning: "table", example: "Der Tisch steht in der Küche.", exampleTranslation: "The table is in the kitchen." },
    { id: "a4", word: "Stuhl", article: "der", plural: "die Stühle", meaning: "chair", example: "Der Stuhl ist neu.", exampleTranslation: "The chair is new." },
    { id: "a5", word: "Küche", article: "die", plural: "die Küchen", meaning: "kitchen", example: "Ich koche in der Küche.", exampleTranslation: "I cook in the kitchen." },
    { id: "a6", word: "aufstehen", meaning: "to get up", example: "Ich stehe um sieben Uhr auf.", exampleTranslation: "I get up at seven o'clock." },
  ],
  grammar: [
    {
      id: "ag1",
      title: "Wo? + Dativ-Präpositionen (in, auf)",
      explanation: "To say where something is located, use 'in' or 'auf' with the dative case: in der Küche, auf dem Tisch.",
      examples: ["Der Tisch ist in der Küche.", "Das Buch liegt auf dem Tisch."],
    },
  ],
  dialogues: [
    { speaker: "Mitbewohner", line: "Wo ist die Küche?", translation: "Where is the kitchen?" },
    { speaker: "Anna", line: "Die Küche ist neben dem Wohnzimmer.", translation: "The kitchen is next to the living room." },
  ],
  quiz: [
    { id: "aq1", type: "multiple-choice", prompt: "Was bedeutet 'aufstehen'?", options: ["to get up", "to sit", "to sleep"], answer: "to get up" },
    { id: "aq2", type: "fill-blank", prompt: "Der Tisch ist in ___ Küche. (der)", answer: "der" },
    { id: "aq3", type: "typing", prompt: "Wie sagt man 'room' auf Deutsch?", answer: "Zimmer" },
    { id: "aq4", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Stuhl'?", options: ["der", "die", "das"], answer: "der" },
  ],
};
