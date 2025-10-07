import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders text', () => {
    render(<Badge>Alpha</Badge>);
    expect(screen.getByText('Alpha')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Badge variant="success">Live</Badge>);
    expect(screen.getByText('Live')).toHaveClass('rc-badge--success');
  });
});