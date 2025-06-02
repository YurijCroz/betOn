import { SvgJoker } from '@src/svgs/SvgJoker';
import { SvgNormal } from '@src/svgs/SvgNormal';
import { SvgSuper } from '@src/svgs/SvgSuper';
import React from 'react';

interface ICell {
  type: 'normal' | 'joker' | 'super';
  color: 'black' | 'red' | 'green' | 'purple';
  size: 'big' | 'md' | 'sm';
}

export const Cell = ({ type, color, size }: ICell) => {
  const Svg =
    type === 'normal' ? SvgNormal : type === 'joker' ? SvgJoker : SvgSuper;

  const bgColor =
    color === 'black'
      ? 'bg-cellBlack'
      : color === 'red'
      ? 'bg-cellRed'
      : color === 'green'
      ? 'bg-cellGreen'
      : 'bg-cellPurple';

  return (
    <div
      style={{
        borderRadius: size === 'big' ? 8 : 4,
        borderTop:
          size === 'big' ? '2px solid #FFFFFF33' : '1px solid #FFFFFF33',
      }}
      className={`${bgColor} flex justify-center items-center aspect-square ${
        size === 'big' ? 'w-24' : size === 'md' ? 'w-8' : 'w-6'
      }`}
    >
      <Svg size={size} color={color !== 'red' ? '#ffffff' : '#14151C'} />
    </div>
  );
};
