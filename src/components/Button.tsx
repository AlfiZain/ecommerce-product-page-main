import clsx from 'clsx';
import type { ReactNode } from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  width?: string;
  ariaLabel?: string;
  onClick?: () => void;
  children?: ReactNode;
};

export default function Button({
  variant = 'primary',
  width = '',
  ariaLabel = '',
  onClick = () => {},
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx('transition duration-300', {
        'flex cursor-pointer items-center justify-center gap-x-4 rounded-lg bg-orange p-4 text-base font-bold text-black hover:bg-pale-orange':
          variant === 'primary',
      })}
      style={{ width: width }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
