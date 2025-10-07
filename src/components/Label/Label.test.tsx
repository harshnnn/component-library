import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders text', () => {
    render(<Label htmlFor="name">Name</Label>);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Label required>Name</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Label description="Optional detail">Field</Label>);
    expect(screen.getByText('Optional detail')).toBeInTheDocument();
  });
});