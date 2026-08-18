import { lessons } from "@/data/lessons";
import { BuildingId, VocabCard } from "@/types";

export interface PoolVocabCard extends VocabCard {
  buildingId: BuildingId;
}

export function getAllVocab(): PoolVocabCard[] {
  return (Object.keys(lessons) as BuildingId[]).flatMap((id) =>
    lessons[id].vocabulary.map((v) => ({ ...v, buildingId: id }))
  );
}

export function getAllSentences(): { sentence: string; translation: string; buildingId: BuildingId }[] {
  return (Object.keys(lessons) as BuildingId[]).flatMap((id) =>
    lessons[id].dialogues.map((d) => ({
      sentence: d.line,
      translation: d.translation,
      buildingId: id,
    }))
  );
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickRandom<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count);
}
