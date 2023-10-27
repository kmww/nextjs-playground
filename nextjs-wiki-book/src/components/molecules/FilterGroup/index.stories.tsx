import { Meta } from '@storybook/react';
import FilterGroup from './';

const meta: Meta<typeof FilterGroup> = {
  title: 'Molecules/FilterGroup',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '제목',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'array' },
      description: '옵션',
      table: {
        type: { summary: 'array' },
      },
    },
    onChange: {
      defaultValue: 'onchange 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
