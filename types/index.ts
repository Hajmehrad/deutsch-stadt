export type BuildingId =
  | "home"
  | "supermarket"
  | "bakery"
  | "cafe"
  | "park"
  | "school"
  | "bank"
  | "post-office"
  | "train-station"
  | "hospital"
  | "police"
  | "rathaus"
  | "apartment"
  | "cinema"
  | "city-center";

export interface Building {
  id: BuildingId;
  name: string;
  emoji: string;
  topics: string[];
  description: string;
  /** x, y as percentage of the map canvas (0-100) */
  position: { x: number; y: number };
  /** id of the building that must be completed first, null if unlocked by default */
  unlockRequires: BuildingId | null;
  accent: "blue" | "amber" | "brick" | "green";
  estimatedMinutes: number;
}

export interface VocabCard {
  id: string;
  word: string;
  article?: "der" | "die" | "das";
  plural?: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  audioUrl?: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  explanation: string;
  examples: string[];
}

export interface DialogueLine {
  speaker: string;
  line: string;
  translation: string;
}

export interface QuizQuestion {
  id: string;
  type: "multiple-choice" | "fill-blank" | "match" | "listening" | "typing";
  prompt: string;
  options?: string[];
  answer: string;
}

export interface Lesson {
  id: string;
  buildingId: BuildingId;
  title: string;
  icon: string;
  vocabulary: VocabCard[];
  grammar: GrammarPoint[];
  dialogues: DialogueLine[];
  quiz: QuizQuestion[];
  audio: string[];
  difficulty: "A1";
  estimatedTime: number;
}

export interface UserProgress {
  xp: number;
  coins: number;
  streak: number;
  completedBuildings: BuildingId[];
  unlockedBuildings: BuildingId[];
  weakVocab: string[];
  favorites: string[];
}
