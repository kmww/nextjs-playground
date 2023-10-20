import { Meta, StoryObj } from '@storybook/react';
import Badge from './';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '배지 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배지 색상',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const Template: Story = {
  render: (args) => <Badge {...args} />,
};

export const Orange = {
  ...Template,
  args: {
    content: '1',
    backgroundColor: '#ed9f28',
  },
};

export const Green = {
  ...Template,
  args: {
    content: '2',
    backgroundColor: '#32bf00',
  },
};

export const Red = {
  ...Template,
  args: {
    content: '3',
    backgroundColor: '#d4001a',
  },
};
