import { Lesson } from "@/types";

export const supermarketLesson: Lesson = {
  id: "lesson-supermarket",
  buildingId: "supermarket",
  title: "Supermarkt: Einkaufen",
  icon: "🏪",
  difficulty: "A1",
  estimatedTime: 18,
  audio: [],
  vocabulary: [
    { id: "s1", word: "Apfel", article: "der", plural: "die Äpfel", meaning: "apple", example: "Ich kaufe einen Apfel.", exampleTranslation: "I'm buying an apple." },
    { id: "s2", word: "Milch", article: "die", meaning: "milk", example: "Die Milch ist im Kühlregal.", exampleTranslation: "The milk is in the fridge aisle." },
    { id: "s3", word: "Wasser", article: "das", meaning: "water", example: "Ich brauche eine Flasche Wasser.", exampleTranslation: "I need a bottle of water." },
    { id: "s4", word: "Kasse", article: "die", plural: "die Kassen", meaning: "checkout", example: "Die Kasse ist dort drüben.", exampleTranslation: "The checkout is over there." },
    { id: "s5", word: "Geld", article: "das", meaning: "money", example: "Ich habe nicht viel Geld.", exampleTranslation: "I don't have much money." },
    { id: "s6", word: "kaufen", meaning: "to buy", example: "Was möchtest du kaufen?", exampleTranslation: "What would you like to buy?" },
  ],
  grammar: [
    {
      id: "sg1",
      title: "Der unbestimmte Artikel: ein / eine",
      explanation:
        "Use 'ein' before der/das nouns and 'eine' before die nouns when talking about 'a/an' something.",
      examples: ["ein Apfel (der)", "eine Milch (die)", "ein Wasser (das)"],
    },
  ],
  dialogues: [
    { speaker: "Verkäufer", line: "Guten Tag! Was möchten Sie kaufen?", translation: "Good day! What would you like to buy?" },
    { speaker: "Kunde", line: "Ich möchte einen Apfel und eine Milch, bitte.", translation: "I'd like an apple and a milk, please." },
    { speaker: "Verkäufer", line: "Das macht drei Euro fünfzig.", translation: "That's three euros fifty." },
  ],
  quiz: [
    { id: "sq1", type: "multiple-choice", prompt: "Welcher Artikel passt zu 'Apfel'?", options: ["der", "die", "das"], answer: "der" },
    { id: "sq2", type: "fill-blank", prompt: "Ich kaufe ___ Wasser. (ein/eine)", answer: "ein" },
    { id: "sq3", type: "multiple-choice", prompt: "Wo bezahlst du im Supermarkt?", options: ["an der Kasse", "im Kühlregal", "an der Tür"], answer: "an der Kasse" },
    { id: "sq4", type: "typing", prompt: "Wie sagt man 'money' auf Deutsch?", answer: "Geld" },
  ],
};
