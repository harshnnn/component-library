import React, { forwardRef } from 'react';
import './Input.css';

export type InputType = 'text' | 'password' | 'number';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  id?: string;
  label?: string;
  type?: InputType;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = 'text',
      helperText,
      error,
      className,
      fullWidth = false,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const inputId = id ?? rest.name ?? `rc-input-${type}-${Math.random().toString(36).slice(2)}`;
    const messageId = `${inputId}-message`;

    const containerClass = [
      'rc-input',
      fullWidth ? 'rc-input--full' : null,
      error ? 'rc-input--error' : null,
      disabled ? 'rc-input--disabled' : null,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClass}>
        {label && (
          <label className="rc-input__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className="rc-input__field-wrapper">
          <input
            id={inputId}
            ref={ref}
            type={type}
            className="rc-input__field"
            aria-invalid={Boolean(error)}
            aria-describedby={helperText || error ? messageId : undefined}
            disabled={disabled}
            {...rest}
          />
          <span className="rc-input__focus-ring" aria-hidden="true" />
        </div>
        {(helperText || error) && (
          <p id={messageId} className="rc-input__message" role={error ? 'alert' : undefined}>
            {error ?? helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;