import { GameShell } from "@/components/games/GameShell";
import { ListeningChallenge } from "@/components/games/ListeningChallenge";

export default function ListeningPage() {
  return (
    <GameShell title="Hörverstehen" emoji="🎧">
      <ListeningChallenge />
    </GameShell>
  );
}
