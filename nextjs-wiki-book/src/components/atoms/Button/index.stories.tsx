import { StoryObj, Meta } from '@storybook/react';
import Button from './';

const meta: Meta = {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: '버튼 변형',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: '버튼 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabled 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '버튼 너비',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '버튼 높이',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClick 이벤트 핸들러',
      table: {
        type: { summary: 'function ' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  render: (args) => <Button {...args} />,
};

export const Primary = {
  ...Template,
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  ...Template,
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled = {
  ...Template,
  args: {
    variant: 'disabled',
    children: 'Disabled Button',
  },
};
