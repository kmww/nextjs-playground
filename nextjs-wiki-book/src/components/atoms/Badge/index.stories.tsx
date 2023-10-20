import { Meta } from '@storybook/react';
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
