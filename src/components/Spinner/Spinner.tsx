import { ComponentProps } from 'react';
import './Spinner.scss';

export type SpinnerProps = ComponentProps<'div'>;

export const Spinner = (props: SpinnerProps) => {
  return (
    <div className="load" {...props}>
      <div className="load__icon-wrap">
        <svg className="load__icon">
          <path
            fill="currentColor"
            d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
          />
        </svg>
      </div>
    </div>
  );
};
