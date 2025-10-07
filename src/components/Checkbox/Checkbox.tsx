import React, { forwardRef } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, description, className, disabled = false, ...rest }, ref) => {
    const checkboxId = id ?? rest.name ?? `rc-checkbox-${Math.random().toString(36).slice(2)}`;
    const descriptionId = description ? `${checkboxId}-description` : undefined;

    const containerClass = ['rc-checkbox', disabled ? 'rc-checkbox--disabled' : null, className]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={containerClass} htmlFor={checkboxId}>
        <input
          {...rest}
          id={checkboxId}
          ref={ref}
          type="checkbox"
          className="rc-checkbox__input"
          disabled={disabled}
          aria-describedby={descriptionId}
        />
        <span className="rc-checkbox__box" aria-hidden="true">
          <svg viewBox="0 0 16 16" className="rc-checkbox__icon">
            <polyline points="3.5 8.5 6.7 11.5 12.5 4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="rc-checkbox__content">
          {label && <span className="rc-checkbox__label">{label}</span>}
          {description && (
            <span id={descriptionId} className="rc-checkbox__description">
              {description}
            </span>
          )}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;