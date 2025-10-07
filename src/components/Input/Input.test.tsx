import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input', () => {
  it('renders label and helper text', () => {
    render(<Input label="Name" helperText="Enter your full name" placeholder="Jane Doe" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('shows error state', () => {
    render(<Input label="Email" error="Email is required" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });
});