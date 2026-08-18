import { GameShell } from "@/components/games/GameShell";
import { MemoryGame } from "@/components/games/MemoryGame";

export default function MemoryPage() {
  return (
    <GameShell title="Memory" emoji="🧠">
      <MemoryGame />
    </GameShell>
  );
}
