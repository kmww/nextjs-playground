import { Meta } from '@storybook/react';
import Input from './';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: '보더 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;
