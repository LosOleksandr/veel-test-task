import clsx from 'clsx';
import * as React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<Props> = ({ className, label, ...props }) => {
  return (
    <div className="text-foreground/80 flex w-full flex-col text-sm font-bold">
      {label ? (
        <label className="mb-1.5" htmlFor={props.id}>
          {label}
        </label>
      ) : null}

      <input
        className={clsx(
          'border-foreground/50 bg-foreground/10 rounded-md border-2 p-2',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
