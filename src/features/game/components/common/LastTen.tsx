'use client';
import { useEffect, useState } from 'react';
import { IRouletteParams } from '@src/interfaces/roulette';
import { Cell } from './Cell';

export const LastTen = () => {
  const [roulette, setRoulette] = useState<IRouletteParams[] | null>(null);

  useEffect(() => {
    const startKit: IRouletteParams[] = [];

    for (let i = 0; i < 10; i++) {
      startKit.push({
        id: i,
        color: i === 1 ? 'green' : i % 2 === 0 ? 'red' : 'black',
        type: i === 1 ? 'super' : i === 2 || i === 11 ? 'joker' : 'normal',
      });
    }

    setRoulette(startKit);
  }, []);

  return (
    <div className="flex space-x-1">
      {roulette &&
        roulette.map(({ id, type, color }) => (
          <Cell key={id} type={type} color={color} size="md" />
        ))}
    </div>
  );
};
