import clsx from 'clsx';
import './Icon.scss';
import { IconProps } from './types';

export const FavIcon = ({ size = 'md' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 38"
      className={clsx('icon', `icon__size--${size}`)}
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20 11.803-6-3.641-6 3.641v7.804l12 10.231 12-10.231v-7.803l-6-3.642-6 3.641Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
