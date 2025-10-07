import React from 'react';
import './Spinner.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerVariant = 'primary' | 'neutral';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  label = 'Loading',
  className,
  ...rest
}) => {
  const spinnerClass = ['rc-spinner', `rc-spinner--${size}`, `rc-spinner--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div role="status" aria-live="polite" className={spinnerClass} {...rest}>
      <span className="rc-spinner__circle" aria-hidden="true" />
      <span className="rc-spinner__label">{label}</span>
    </div>
  );
};

export default Spinner;