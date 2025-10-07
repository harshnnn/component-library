import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with label', () => {
    render(<Spinner label="Fetching" />);
    expect(screen.getByRole('status')).toHaveTextContent('Fetching');
  });

  it('applies size class', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('rc-spinner--lg');
  });
});