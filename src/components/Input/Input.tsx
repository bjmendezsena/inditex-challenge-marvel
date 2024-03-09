import { ComponentProps } from 'react';
import './Input.scss';

export type InputProps = {
  leftAddon?: React.ReactNode;
} & ComponentProps<'input'>;

export const Input = ({ leftAddon, ...props }: InputProps) => {
  return (
    <div className="container">
      {leftAddon}
      <input className="container__input" {...props} />
      <div className="container__bar" />
    </div>
  );
};
