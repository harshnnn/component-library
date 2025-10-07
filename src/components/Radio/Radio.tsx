import React, { forwardRef, useId } from 'react';
import './Radio.css';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, label, description, className, disabled = false, ...rest }, ref) => {
    const generatedId = useId();
    const radioId = id ?? generatedId;
    const descriptionId = description ? `${radioId}-description` : undefined;

    const containerClass = ['rc-radio', disabled ? 'rc-radio--disabled' : null, className]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={containerClass} htmlFor={radioId}>
        <input
          {...rest}
          ref={ref}
          id={radioId}
          type="radio"
          className="rc-radio__input"
          disabled={disabled}
          aria-describedby={descriptionId}
        />
        <span className="rc-radio__outer" aria-hidden="true">
          <span className="rc-radio__dot" />
        </span>
        <span className="rc-radio__content">
          {label && <span className="rc-radio__label">{label}</span>}
          {description && (
            <span id={descriptionId} className="rc-radio__description">
              {description}
            </span>
          )}
        </span>
      </label>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;