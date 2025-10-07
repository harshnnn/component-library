import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';

const meta = {
  title: 'ReactComponentLibrary/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Get alerts about important activity.',
    defaultChecked: true,
  },
};