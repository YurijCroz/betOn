import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainBG: '#151619',
        cellBlack: '#343843',
        cellRed: '#FF4242',
        cellGreen: '#47FF69',
        cellPurple: '#7246D9',
        darkGray: '#23262C',
        lightGray: '#2D323C',
      },
    },
  },
  plugins: [],
};
export default config;
