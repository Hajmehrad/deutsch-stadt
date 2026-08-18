import { GameShell } from "@/components/games/GameShell";
import { FlashcardDeck } from "@/components/games/FlashcardDeck";

export default function FlashcardsPage() {
  return (
    <GameShell title="Karteikarten" emoji="📇">
      <FlashcardDeck />
    </GameShell>
  );
}
