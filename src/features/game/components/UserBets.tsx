import { IDataBets } from '@src/interfaces/bets';
import { mockBets } from './mockDataBets';
import { SvgIconLogo } from '@src/svgs/SvgIconLogo';
import { SvgRankBronze } from '@src/svgs/SvgRankBronze';

export const UserBets = () => {
  const renderBetsBlock = ({
    type,
    multiplier,
    bets,
  }: {
    type: 'red' | 'black' | 'green' | 'joker';
    multiplier: number;
    bets: IDataBets[];
  }) => {
    const bgColor =
      type === 'black'
        ? 'bg-cellBlack'
        : type === 'red'
        ? 'bg-cellRed'
        : type === 'green'
        ? 'bg-cellGreen'
        : 'bg-cellPurple';

    const total = bets.reduce((acc, item) => acc + item.bet, 0).toFixed(2);

    return (
      <div className="flex-auto">
        <div
          style={{
            borderTop: '2px solid #FFFFFF33',
          }}
          className={`px-4 py-3 flex items-center justify-between uppercase ${bgColor} ${
            type === 'green' ? 'text-mainBG' : 'text-white'
          } rounded-lg font-semibold`}
        >
          <p>bet on {type}</p>
          <p>plays {multiplier}x</p>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <p>{bets.length} Bets total</p>
          <div className="flex space-x-2">
            <SvgIconLogo />
            <p>{total}</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-darkGray">
          {bets.map(({ bet, name }, i) => (
            <div
              key={i}
              className={`pr-3 pl-7 py-2 flex items-center justify-between ${
                i === 1 ? 'bg-lightGray' : ''
              }`}
            >
              <div className="flex space-x-2">
                <SvgRankBronze />
                <p>{name}</p>
              </div>
              <div className="flex space-x-2">
                <SvgIconLogo />
                <p>{bet.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full gap-x-4 text-sm text-gray-300 pt-28">
      {renderBetsBlock({ type: 'red', multiplier: 2, bets: mockBets })}
      {renderBetsBlock({ type: 'black', multiplier: 2, bets: mockBets })}
      {renderBetsBlock({ type: 'green', multiplier: 14, bets: mockBets })}
      {renderBetsBlock({ type: 'joker', multiplier: 7, bets: mockBets })}
    </div>
  );
};
