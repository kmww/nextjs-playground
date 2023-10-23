import { Meta, StoryObj } from '@storybook/react';
import RectLoader from './';

const meta: Meta<typeof RectLoader> = {
  title: 'Atoms/RectLoader',
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '세로폭',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RectLoader>;

const Template: Story = {
  render: (args) => <RectLoader {...args} />,
};

export const Normal = {
  ...Template,
};
