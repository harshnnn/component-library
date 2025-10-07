import React, { forwardRef } from 'react';
import './Switch.css';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, description, className, disabled = false, ...rest }, ref) => {
    const switchId = id ?? rest.name ?? `rc-switch-${Math.random().toString(36).slice(2)}`;
    const descriptionId = description ? `${switchId}-description` : undefined;

    const containerClass = ['rc-switch', disabled ? 'rc-switch--disabled' : null, className]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={containerClass} htmlFor={switchId}>
        <input
          {...rest}
          id={switchId}
          ref={ref}
          type="checkbox"
          role="switch"
          className="rc-switch__input"
          disabled={disabled}
          aria-describedby={descriptionId}
        />
        <span className="rc-switch__track" aria-hidden="true">
          <span className="rc-switch__thumb" />
        </span>
        <span className="rc-switch__content">
          {label && <span className="rc-switch__label">{label}</span>}
          {description && (
            <span id={descriptionId} className="rc-switch__description">
              {description}
            </span>
          )}
        </span>
      </label>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;