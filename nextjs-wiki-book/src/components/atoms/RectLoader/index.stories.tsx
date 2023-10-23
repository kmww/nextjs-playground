import { Meta } from '@storybook/react';
import RectLoader from './';

const meta: Meta<typeof RectLoader> = {
  title: 'Atoms/RectLoader',
  argTypes: {
    with: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      contorl: { type: 'number' },
      defaultValue: 320,
      description: '세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;
