import React from 'react';
import './Card.css';

export type CardVariant = 'default' | 'elevated' | 'outline';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  variant?: CardVariant;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  footer,
  variant = 'default',
  className,
  children,
  ...rest
}) => {
  const cardClass = ['rc-card', `rc-card--${variant}`, className].filter(Boolean).join(' ');

  return (
    <section className={cardClass} {...rest}>
      {(title || description) && (
        <header className="rc-card__header">
          {title && <h3 className="rc-card__title">{title}</h3>}
          {description && <p className="rc-card__description">{description}</p>}
        </header>
      )}
      {children && <div className="rc-card__content">{children}</div>}
      {footer && <footer className="rc-card__footer">{footer}</footer>}
    </section>
  );
};

export default Card;