import { IRouletteParams } from '@src/interfaces/roulette';
import { Cell } from './common/Cell';

interface IWheelProps {
  trackList: IRouletteParams[] | null;
  trackStyle: React.CSSProperties;
  containerRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  cellRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
}

export const Wheel = ({
  trackList,
  trackStyle,
  containerRef,
  trackRef,
  cellRefs,
}: IWheelProps) => {
  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{ height: 100 }}
    >
      <div
        ref={trackRef}
        className="flex items-center"
        style={{ ...trackStyle }}
      >
        {trackList
          ? trackList.map((cell, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cellRefs.current[idx] = el;
                }}
                style={{
                  marginRight: idx < trackList.length - 1 ? 6 : 0,
                  flex: '0 0 auto',
                }}
              >
                <Cell type={cell.type} color={cell.color} size="big" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
