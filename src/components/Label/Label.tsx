import React from 'react';
import './Label.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  required?: boolean;
  description?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  required = false,
  description,
  htmlFor,
  ...rest
}) => {
  const labelClass = ['rc-label', className].filter(Boolean).join(' ');

  return (
    <label className={labelClass} htmlFor={htmlFor} {...rest}>
      <span className="rc-label__content">
        <span className="rc-label__text">{children}</span>
        {required ? (
          <span className="rc-label__required" aria-hidden="true">
            *
          </span>
        ) : null}
      </span>
      {description ? <span className="rc-label__description">{description}</span> : null}
    </label>
  );
};

export default Label;