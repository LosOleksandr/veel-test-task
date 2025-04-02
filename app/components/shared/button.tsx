import clsx from 'clsx';
import * as React from 'react';

const variants = {
  default:
    'flex items-center justify-center cursor-pointer transition-colors duration-300 rounded-md px-4 py-2 w-full disabled:opacity-50 disabled:cursor-auto',
  primary:
    'bg-accent hover:bg-accent/80 text-white font=bold active:bg-blue-900 focus:shadow-outline',
  icon: 'bg-transparent text-foreground/50 hover:text-foreground active:text-foreground/50 max-w-max',
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(variants.default, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
