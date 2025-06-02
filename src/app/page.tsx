import { Game } from '@src/features/game/Game';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-mainBG">
      <Game />
    </main>
  );
}
