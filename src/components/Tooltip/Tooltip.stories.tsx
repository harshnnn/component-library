import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';
import Button from '../Button';

const meta = {
  title: 'ReactComponentLibrary/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  args: {
    text: 'Quick actions live here',
    position: 'top',
    children: <Button label="Hover me" variant="outline" />,
  },
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <Tooltip text="Above" position="top">
        <Button label="Top" variant="ghost" />
      </Tooltip>
      <Tooltip text="Right side" position="right">
        <Button label="Right" variant="ghost" />
      </Tooltip>
      <Tooltip text="Below" position="bottom">
        <Button label="Bottom" variant="ghost" />
      </Tooltip>
      <Tooltip text="Left side" position="left">
        <Button label="Left" variant="ghost" />
      </Tooltip>
    </div>
  ),
};