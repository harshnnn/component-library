import React from 'react';
import './Badge.css';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  pill?: boolean;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  pill = false,
  className,
  children,
  ...rest
}) => {
  const badgeClass = [
    'rc-badge',
    `rc-badge--${variant}`,
    pill ? 'rc-badge--pill' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClass} {...rest}>
      {children}
    </span>
  );
};

export default Badge;