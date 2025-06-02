import React from 'react';
import { LastTen } from './common/LastTen';
import { LastHundred } from './common/LastHundred';

export const History = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <LastTen />
      <LastHundred />
    </div>
  );
};
