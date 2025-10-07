import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders title and content', () => {
    render(
      <Card title="Summary">
        <p>Content goes here.</p>
      </Card>,
    );
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Content goes here.')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Card variant="outline">Item</Card>);
    const content = screen.getByText('Item');
    expect(content).toHaveClass('rc-card__content');

    const card = content.closest('section');
    expect(card).toHaveClass('rc-card--outline');
  });
});