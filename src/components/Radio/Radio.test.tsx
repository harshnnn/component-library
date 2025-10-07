import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders label text', () => {
    render(<Radio label="Option A" name="group" />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('selects only one in a group', () => {
    render(
      <>
        <Radio label="Option A" name="group" value="a" />
        <Radio label="Option B" name="group" value="b" />
      </>,
    );

    const [a, b] = screen.getAllByRole('radio');

    fireEvent.click(a);
    expect(a).toBeChecked();
    expect(b).not.toBeChecked();

    fireEvent.click(b);
    expect(a).not.toBeChecked();
    expect(b).toBeChecked();
  });
});