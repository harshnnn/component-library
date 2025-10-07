import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Label } from './Label';

const meta = {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    required: { control: 'boolean' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Playground: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
    required: true,
    description: 'We use this to send account updates.',
  },
};