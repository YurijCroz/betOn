'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IRouletteParams } from '@src/interfaces/roulette';
import { winnerLog } from '../helpers/winnerLog';

export const useRouletteLogic = () => {
  const [roulette, setRoulette] = useState<IRouletteParams[] | null>(null);
  const [trackList, setTrackList] = useState<IRouletteParams[] | null>(null);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [rotations, setRotations] = useState<number>(0);
  const [phase, setPhase] = useState<'idle' | 'primary' | 'secondary'>('idle');
  const [spinning, setSpinning] = useState(false);
  const [trackStyle, setTrackStyle] = useState<React.CSSProperties>({});
  const [initialized, setInitialized] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<Array<HTMLDivElement | null>>([]);
  const centerShiftRef = useRef<number>(0);

  const SPIN_DURATION = 4;
  const ALIGN_DURATION = 0.5;

  useEffect(() => {
    const startKit: IRouletteParams[] = [];
    for (let i = 1; i <= 11; i++) {
      startKit.push({
        id: i,
        color: i === 1 ? 'green' : i % 2 === 0 ? 'red' : 'black',
        type: i === 1 ? 'super' : i === 2 || i === 11 ? 'joker' : 'normal',
      });
    }
    setRoulette(startKit);
  }, []);

  useEffect(() => {
    if (!roulette) return;
    const triple: IRouletteParams[] = [];
    for (let i = 0; i < 3; i++) {
      triple.push(...roulette);
    }
    setTrackList(triple);
    setWinnerIndex(null);
    setRotations(0);
    setPhase('idle');
    setSpinning(false);
    setInitialized(false);
    setTrackStyle({ transform: 'translateX(0)', transition: 'none' });
    cellRefs.current = [];
  }, [roulette]);

  useEffect(() => {
    if (
      !trackList ||
      !roulette ||
      phase !== 'idle' ||
      initialized ||
      trackList.length !== roulette.length * 3
    ) {
      return;
    }
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      const n = roulette.length;
      const firstCell = cellRefs.current[0];
      const firstCellSecondCopy = cellRefs.current[n];
      if (!firstCell || !firstCellSecondCopy) return;

      const copyWidth = firstCellSecondCopy.offsetLeft - firstCell.offsetLeft;

      setTrackStyle({
        transform: `translateX(-${copyWidth}px)`,
        transition: 'none',
      });
      setInitialized(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [trackList, phase, initialized, roulette]);

  const startSpin = useCallback(() => {
    if (spinning || !roulette) return;
    const n = roulette.length;

    const winIdx = Math.floor(Math.random() * n);
    const rot = Math.floor(Math.random() * 4) + 1;

    setWinnerIndex(winIdx);
    setRotations(rot);
    setPhase('primary');
    setSpinning(true);

    winnerLog(roulette[winIdx]);

    const repeats = rot + 2;
    const newTrack: IRouletteParams[] = [];
    for (let i = 0; i < repeats; i++) {
      newTrack.push(...roulette);
    }
    setTrackList(newTrack);

    setTrackStyle({ transform: 'translateX(0)', transition: 'none' });
    cellRefs.current = [];
  }, [spinning, roulette]);

  useEffect(() => {
    if (!trackList || phase !== 'primary' || winnerIndex === null || !roulette)
      return;

    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      const n = roulette.length;
      const globalWinnerIdx = rotations * n + winnerIndex;
      const winnerEl = cellRefs.current[globalWinnerIdx];
      if (!winnerEl) return;

      const cellWidth = winnerEl.offsetWidth;
      const cellOffsetLeft = winnerEl.offsetLeft;
      const containerWidth = containerRef.current.offsetWidth;

      const shiftCenter = cellOffsetLeft + cellWidth / 2 - containerWidth / 2;
      centerShiftRef.current = shiftCenter;

      const randomDelta = Math.random() * cellWidth - cellWidth / 2;
      const primaryShift = -(shiftCenter + randomDelta);

      setTrackStyle({
        transform: `translateX(${primaryShift}px)`,
        transition: `transform ${SPIN_DURATION}s cubic-bezier(0.33, 1, 0.68, 1)`,
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [trackList, phase, winnerIndex, rotations, roulette]);

  useEffect(() => {
    const handleTransitionEnd = (e: Event) => {
      const te = e as TransitionEvent;
      if (te.propertyName !== 'transform') return;

      if (phase === 'primary') {
        const shiftCenter = centerShiftRef.current;
        setPhase('secondary');
        setTrackStyle({
          transform: `translateX(-${shiftCenter}px)`,
          transition: `transform ${ALIGN_DURATION}s ease`,
        });
      } else if (phase === 'secondary') {
        setPhase('idle');
        setSpinning(false);
      }
    };

    const tr = trackRef.current;
    if (tr) {
      tr.addEventListener('transitionend', handleTransitionEnd);
    }
    return () => {
      if (tr) {
        tr.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [phase]);

  return {
    trackList,
    trackStyle,
    containerRef,
    trackRef,
    cellRefs,
    spinning,
    startSpin,
  };
};
