import { IRouletteParams } from '@src/interfaces/roulette';

export const winnerLog = (cell: IRouletteParams) => {
  let colorStyle = '';

  switch (cell.color) {
    case 'red':
      colorStyle = 'color: #E53E3E; font-weight: bold;';
      break;
    case 'black':
      colorStyle = 'color: #2D3748; font-weight: bold;';
      break;
    case 'green':
      colorStyle = 'color: #38A169; font-weight: bold;';
      break;
    default:
      colorStyle = 'font-weight: bold;';
  }

  console.log('%c🏆 Winner:', colorStyle, cell);
};
