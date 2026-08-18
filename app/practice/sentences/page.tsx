import { GameShell } from "@/components/games/GameShell";
import { SentenceOrderGame } from "@/components/games/SentenceOrderGame";

export default function SentencesPage() {
  return (
    <GameShell title="Satzbau" emoji="🧩">
      <SentenceOrderGame />
    </GameShell>
  );
}
