import React from "react";
import './Button.css';

const BASE_CLASS = 'rc-button';

const VARIANT_CLASS_MAP: Record<ButtonVariant, string> = {
  primary: `${BASE_CLASS}--primary`,
  secondary: `${BASE_CLASS}--secondary`,
  outline: `${BASE_CLASS}--outline`,
  destructive: `${BASE_CLASS}--destructive`,
  ghost: `${BASE_CLASS}--ghost`,
};

const SIZE_CLASS_MAP: Record<ButtonSize, string> = {
  sm: `${BASE_CLASS}--sm`,
  md: `${BASE_CLASS}--md`,
  lg: `${BASE_CLASS}--lg`,
};

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  type = 'button',
  ...rest
}) => {
  const mergedClassName = [
    BASE_CLASS,
    VARIANT_CLASS_MAP[variant],
    SIZE_CLASS_MAP[size],
    loading ? `${BASE_CLASS}--loading` : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={mergedClassName}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className={`${BASE_CLASS}__spinner`} aria-hidden="true" />}
      <span className={`${BASE_CLASS}__label`}>{label}</span>
    </button>
  );
};

export default Button;
