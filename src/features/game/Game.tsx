import { Roulette } from '@src/features/game/components/Roulette';
import { History } from './components/History';
import { UserBets } from './components/UserBets';

export const Game = () => {
  return (
    <div className="max-w-screen-xl overflow-hidden">
      <History />
      <Roulette />
      <UserBets />
    </div>
  );
};
