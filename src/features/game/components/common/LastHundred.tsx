import React from 'react';
import { Cell } from './Cell';

export const LastHundred = () => {
  return (
    <div className="flex space-x-2 text-sm items-center">
      <h3 className="text-gray-500">LAST 100</h3>
      <div className="flex items-center">
        <Cell type="normal" color="red" size="sm" />
        <p className="text-white pl-2">39</p>
      </div>
      <div className="flex items-center">
        <Cell type="normal" color="black" size="sm" />
        <p className="text-white pl-2">39</p>
      </div>
      <div className="flex items-center">
        <Cell type="super" color="green" size="sm" />
        <p className="text-white pl-2">9</p>
      </div>
      <div className="flex items-center">
        <Cell type="joker" color="purple" size="sm" />
        <p className="text-white pl-2">13</p>
      </div>
    </div>
  );
};
