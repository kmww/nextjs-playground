import { Meta, StoryObj } from '@storybook/react';
import ShapeImage from '.';

const meta: Meta<typeof ShapeImage> = {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      contorl: { type: 'radio' },
      defaultValue: 'square',
      description: '이미지 형태',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
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
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '이미지 높이',
      table: {
        type: { summary: 'number' },
      },
    },
  },
  args: {
    width: 320,
    height: 320,
  },
};

export default meta;

type Story = StoryObj<typeof ShapeImage>;

const Template: Story = {
  render: (args) => <ShapeImage {...args} />,
};

export const Circle = {
  ...Template,
  args: {
    src: '/images/sample/1.jpg',
    shape: 'circle',
  },
};

export const Square = {
  ...Template,
  args: {
    src: '/images/sample/1.jpg',
    shape: 'square',
  },
};
