import React from 'react';
import './Divider.css';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  dashed?: boolean;
  color?: string;
  thickness?: number | string;
  length?: number | string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  dashed = false,
  color,
  thickness,
  length,
  className,
  style,
  ...rest
}) => {
  const dividerClass = [
    'rc-divider',
    `rc-divider--${orientation}`,
    dashed ? 'rc-divider--dashed' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inlineStyle: React.CSSProperties = { ...style };

  if (color) {
    (inlineStyle as React.CSSProperties & Record<string, string>)['--rc-divider-color'] = color;
  }

  if (thickness) {
    const thicknessValue = typeof thickness === 'number' ? `${thickness}px` : thickness;
    (inlineStyle as React.CSSProperties & Record<string, string>)['--rc-divider-thickness'] =
      thicknessValue;
  }

  if (length !== undefined) {
    const lengthValue = typeof length === 'number' ? `${length}px` : length;
    if (orientation === 'horizontal') {
      inlineStyle.width = lengthValue;
    } else {
      inlineStyle.height = lengthValue;
    }
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={dividerClass}
      style={inlineStyle}
      {...rest}
    />
  );
};

export default Divider;