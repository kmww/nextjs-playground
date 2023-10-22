import { Meta, StoryObj } from '@storybook/react';
import ScaleImage from './';

const meta: Meta<typeof ScaleImage> = {
  title: 'Atoms/ScaleImage',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '이미지 너비',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '이미지 높이',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    containerWidth: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '너비',
      table: {
        type: { summary: 'number' },
      },
    },
    containerHeight: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '높이',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScaleImage>;

const Template: Story = {
  render: (args) => <ScaleImage {...args} />,
};

export const Normal = {
  ...Template,
  args: {
    src: '/images/sample/1.jpg',
  },
};
