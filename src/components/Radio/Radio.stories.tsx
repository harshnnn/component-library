import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';

const meta = {
  title: 'ReactComponentLibrary/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Group: Story = {
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <legend style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Preferred contact method</legend>
      <Radio name="contact" label="Email" description="We’ll send updates to your inbox." defaultChecked />
      <Radio name="contact" label="SMS" description="For quick notifications." />
      <Radio name="contact" label="Phone call" description="Great for detailed conversations." />
    </fieldset>
  ),
};