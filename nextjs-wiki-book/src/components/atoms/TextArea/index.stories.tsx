import { Meta, StoryObj } from '@storybook/react';
import TextArea from './';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '행 수',
      table: {
        type: { summary: 'number' },
      },
    },
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '최소 행수',
      table: {
        type: { summary: 'number' },
      },
    },
    maxRows: {
      control: { type: 'number' },
      defaultValue: 10,
      description: '최대 행수',
      table: {
        type: { summary: 'number' },
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
    onChange: {
      description: '이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const template: Story = {
  render: (args) => <TextArea {...args} />,
};

export const Normal = {
  ...template,
};

export const Error = {
  ...template,
  args: {
    hasError: true,
  },
};
