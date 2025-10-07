import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders tooltip text on focus', () => {
    render(
      <Tooltip text="Helpful info">
        <button type="button">Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button', { name: 'Trigger' });
    const bubble = screen.getByRole('tooltip');

    expect(bubble).not.toHaveClass('rc-tooltip__bubble--visible');

    fireEvent.focus(trigger);
    expect(bubble).toHaveClass('rc-tooltip__bubble--visible');
  });
});