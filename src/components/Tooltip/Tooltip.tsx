import React from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  text: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactElement;
}

const mergeIds = (existing: string | undefined, added: string) =>
  [existing, added].filter(Boolean).join(' ') || undefined;

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  className,
  children,
  ...rest
}) => {
  const tooltipId = React.useId();
  const [visible, setVisible] = React.useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const wrapperClass = ['rc-tooltip', `rc-tooltip--${position}`, className]
    .filter(Boolean)
    .join(' ');

  const trigger = React.cloneElement(children, {
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
      children.props.onMouseEnter?.(event);
      if (!event.defaultPrevented) show();
    },
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
      children.props.onMouseLeave?.(event);
      if (!event.defaultPrevented) hide();
    },
    onFocus: (event: React.FocusEvent<HTMLElement>) => {
      children.props.onFocus?.(event);
      if (!event.defaultPrevented) show();
    },
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      children.props.onBlur?.(event);
      if (!event.defaultPrevented) hide();
    },
    'aria-describedby': mergeIds(children.props['aria-describedby'], tooltipId),
  });

  return (
    <span className={wrapperClass} {...rest}>
      {trigger}
      <span
        role="tooltip"
        id={tooltipId}
        className={`rc-tooltip__bubble${visible ? ' rc-tooltip__bubble--visible' : ''}`}
      >
        {text}
      </span>
    </span>
  );
};

export default Tooltip;