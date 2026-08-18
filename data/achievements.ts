import { UserProgress } from "@/types";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  isUnlocked: (progress: UserProgress) => boolean;
}

export const achievements: Achievement[] = [
  {
    id: "first-step",
    title: "Erster Schritt",
    description: "Schließe dein erstes Gebäude ab",
    emoji: "👣",
    isUnlocked: (p) => p.completedBuildings.length >= 1,
  },
  {
    id: "explorer",
    title: "Stadtentdecker",
    description: "Schließe 5 Gebäude ab",
    emoji: "🧭",
    isUnlocked: (p) => p.completedBuildings.length >= 5,
  },
  {
    id: "half-way",
    title: "Auf halbem Weg",
    description: "Schließe 8 Gebäude ab",
    emoji: "🌉",
    isUnlocked: (p) => p.completedBuildings.length >= 8,
  },
  {
    id: "master",
    title: "Stadtmeister",
    description: "Schließe alle 15 Gebäude ab",
    emoji: "🏆",
    isUnlocked: (p) => p.completedBuildings.length >= 15,
  },
  {
    id: "collector",
    title: "Wortschatz-Sammler",
    description: "Markiere 10 Vokabeln als Favorit",
    emoji: "📚",
    isUnlocked: (p) => p.favorites.length >= 10,
  },
  {
    id: "streak-3",
    title: "Dabeigeblieben",
    description: "Erreiche eine 3-Tage-Serie",
    emoji: "🔥",
    isUnlocked: (p) => p.streak >= 3,
  },
  {
    id: "streak-7",
    title: "Eine Woche stark",
    description: "Erreiche eine 7-Tage-Serie",
    emoji: "⚡",
    isUnlocked: (p) => p.streak >= 7,
  },
  {
    id: "xp-500",
    title: "500 XP Club",
    description: "Sammle 500 XP",
    emoji: "💎",
    isUnlocked: (p) => p.xp >= 500,
  },
];
