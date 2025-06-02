import { ISvg } from '@src/interfaces/svg';

export const SvgNormal = ({ color = '#14151C', size = 'big' }: ISvg) => {
  const width = size === 'big' ? 50 : size === 'md' ? 16 : 12;
  const height = size === 'big' ? 24 : size === 'md' ? 7.16 : 5.37;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 24"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={color}
        d="M13.087 1.327a.322.322 0 0 1 .26-.511h36.331c.199 0 .35.179.318.375l-1.502 8.978a.32.32 0 0 1-.317.27H19.893c-.103 0-.2-.05-.26-.133zM36.913 22.673a.322.322 0 0 1-.26.511H.322a.322.322 0 0 1-.318-.375l1.502-8.978a.32.32 0 0 1 .317-.27h28.284c.103 0 .2.05.26.133z"
      />
    </svg>
  );
};
