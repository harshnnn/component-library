import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders a separator', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('supports vertical orientation', () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveClass('rc-divider--vertical');
  });

  it('applies custom thickness and color', () => {
    render(<Divider thickness={4} color="#000" />);
    expect(screen.getByRole('separator')).toHaveStyle('--rc-divider-thickness: 4px');
    expect(screen.getByRole('separator')).toHaveStyle('--rc-divider-color: #000');
  });
});