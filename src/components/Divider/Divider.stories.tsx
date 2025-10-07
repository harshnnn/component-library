import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';

const meta = {
  title: 'ReactComponentLibrary/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    dashed: { control: 'boolean' },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    dashed: false,
    color: '#6366f1',
    thickness: 2,
    length: '100%',
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '40px', gap: '1rem' }}>
      <span>Item A</span>
      <Divider orientation="vertical" length={32} />
      <span>Item B</span>
    </div>
  ),
};

export const Dashed: Story = {
  args: {
    orientation: 'horizontal',
    dashed: true,
    color: '#94a3b8',
    thickness: 2,
    length: 160,
  },
};