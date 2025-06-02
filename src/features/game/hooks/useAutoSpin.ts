'use client';
import { useEffect, useRef } from 'react';

export const useAutoSpin = (
  startSpin: () => void,
  spinDuration: number,
  alignDuration: number
) => {
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const totalMs = (spinDuration + alignDuration) * 1000;

    const scheduleNext = () => {
      const now = new Date();
      const secondsWithMs = now.getSeconds() + now.getMilliseconds() / 1000;
      const untilNextMinute = 60 - secondsWithMs;

      let initialDelay = untilNextMinute * 1000 - totalMs;
      if (initialDelay < 0) {
        initialDelay += 60000;
      }
      timeoutRef.current = window.setTimeout(() => {
        startSpin();

        intervalRef.current = window.setInterval(startSpin, 60000);
      }, initialDelay);
    };

    scheduleNext();
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startSpin, spinDuration, alignDuration]);
};
