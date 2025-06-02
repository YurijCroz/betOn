'use client';
import React from 'react';
import { useRouletteLogic } from '../hooks/useRouletteLogic';
import { useAutoSpin } from '../hooks/useAutoSpin';
import { Marker } from './common/Marker';
import { Wheel } from './Wheel';

export const Roulette = () => {
  const {
    trackList,
    trackStyle,
    containerRef,
    trackRef,
    cellRefs,
    spinning,
    startSpin,
  } = useRouletteLogic();

  useAutoSpin(startSpin, 4, 0.5);

  return (
    <div className="w-full h-full relative rounded-lg mt-8">
      <Marker />
      <Wheel
        trackList={trackList}
        trackStyle={trackStyle}
        containerRef={containerRef}
        trackRef={trackRef}
        cellRefs={cellRefs}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r z-50 pointer-events-none from-mainBG/100 to-mainBG/100 ${
          spinning ? 'via-mainBG/20' : 'via-mainBG/10'
        }`}
      />
    </div>
  );
};
