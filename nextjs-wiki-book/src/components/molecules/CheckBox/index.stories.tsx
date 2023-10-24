import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './';

const meta: Meta<typeof CheckBox> = {
  title: 'Molecules/CheckBox',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '체크박스 라벨',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: '체크',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: '체크 변경시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

const Template: Story = {
  render: (args) => <CheckBox {...args} />,
};

export const WithLabel = {
  ...Template,
  args: {
    label: 'Label',
  },
};
