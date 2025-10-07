import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import Button  from '../Button';

const meta = {
  title: 'ReactComponentLibrary/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'elevated', 'outline'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    title: 'Pro Workspace',
    description: 'Collaborate with your team in real time.',
    children: (
      <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
        <li>Unlimited projects</li>
        <li>Advanced analytics</li>
        <li>Priority support</li>
      </ul>
    ),
    footer: (
      <>
        <Button variant="outline" label="Learn more" />
        <Button variant="primary" label="Upgrade" />
      </>
    ),
    variant: 'elevated',
  },
};