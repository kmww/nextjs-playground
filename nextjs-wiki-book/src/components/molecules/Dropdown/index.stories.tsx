import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './';

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  argTypes: {
    options: {
      control: { type: 'array' },
      description: '드롭다운 옵션',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: '에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    value: {
      control: { type: 'text' },
      description: '드롭다운 값',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '값 변경시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const Template: Story = {
  render: (args) => <Dropdown {...args} />,
};

export const Normal = {
  ...Template,
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'third', label: 'Third' },
    ],
    placeholder: 'Please select items',
  },
};

export const InitialValue = {
  ...Template,
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'third', label: 'Third' },
    ],
    placeholder: 'Please select items',
    value: 'first',
  },
};

export const ManyItems = {
  ...Template,
  args: {
    options: Array.from(Array(20), (_, index) => {
      return { value: index.toString(), label: index.toString() };
    }),
    placeholder: 'Please select items',
  },
};
