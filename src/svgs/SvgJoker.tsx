import { ISvg } from '@src/interfaces/svg';

export const SvgJoker = ({ color = '#151619', size = 'big' }: ISvg) => {
  const width = size === 'big' ? 58 : size === 'md' ? 18.4 : 13.8;
  const height = size === 'big' ? 34 : size === 'md' ? 6.6 : 4.95;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 58 34"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={color}
        d="M17.816 28.218h22.369v5.473h-22.37zM54.172 14.554a4 4 0 0 0-.2.006c-1.056-5.882-6.2-10.346-12.386-10.346C34.635 4.214 29 9.85 29 16.8c0-6.95-5.635-12.585-12.586-12.585-6.186 0-11.33 4.463-12.387 10.345a3.578 3.578 0 1 0 .166.013A6.995 6.995 0 0 1 17.816 16.8v8.048h22.369V16.8a6.994 6.994 0 0 1 13.622-2.227 3.579 3.579 0 1 0 .365-.019"
      />
      <path
        fill={color}
        d="M29 6.99a16.2 16.2 0 0 1 4.36-3.867A5.26 5.26 0 0 0 29 .809a5.26 5.26 0 0 0-4.36 2.314A16.217 16.217 0 0 1 29 6.99"
      />
    </svg>
  );
};
