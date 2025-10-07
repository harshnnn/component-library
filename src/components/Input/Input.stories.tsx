import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';

const meta = {
  title: 'ReactComponentLibrary/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['text', 'password', 'number'],
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    label: 'Email',
    placeholder: 'hello@example.com',
    helperText: 'We’ll never share your email.',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Create a strong password',
  },
};

export const Number: Story = {
  args: {
    label: 'Team size',
    type: 'number',
    placeholder: '10',
    min: 1,
    max: 500,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Card number',
    type: 'text',
    placeholder: '•••• •••• •••• ••••',
    error: 'Card number is invalid.',
  },
};