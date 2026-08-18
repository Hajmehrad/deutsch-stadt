import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BuildingId, UserProgress } from "@/types";
import { buildings } from "@/data/buildings";

interface AppState extends UserProgress {
  isDaytime: boolean;
  toggleDayNight: () => void;
  completeBuilding: (id: BuildingId, xpGained: number) => void;
  isUnlocked: (id: BuildingId) => boolean;
  toggleFavorite: (word: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      xp: 0,
      coins: 0,
      streak: 1,
      completedBuildings: [],
      unlockedBuildings: ["home"],
      weakVocab: [],
      favorites: [],
      isDaytime: true,

      toggleDayNight: () => set((s) => ({ isDaytime: !s.isDaytime })),

      completeBuilding: (id, xpGained) =>
        set((s) => {
          const completed = s.completedBuildings.includes(id)
            ? s.completedBuildings
            : [...s.completedBuildings, id];

          const next = buildings.find((b) => b.unlockRequires === id);
          const unlocked =
            next && !s.unlockedBuildings.includes(next.id)
              ? [...s.unlockedBuildings, next.id]
              : s.unlockedBuildings;

          return {
            completedBuildings: completed,
            unlockedBuildings: unlocked,
            xp: s.xp + xpGained,
            coins: s.coins + Math.round(xpGained / 2),
          };
        }),

      isUnlocked: (id) => get().unlockedBuildings.includes(id),

      toggleFavorite: (word) =>
        set((s) => ({
          favorites: s.favorites.includes(word)
            ? s.favorites.filter((w) => w !== word)
            : [...s.favorites, word],
        })),
    }),
    { name: "deutsch-stadt-progress" }
  )
);
