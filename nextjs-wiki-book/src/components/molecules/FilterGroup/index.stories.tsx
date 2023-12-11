import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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

type Story = StoryObj<typeof FilterGroup>;

const Template: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string[]>([]);
    const handleChange = (value: string[]) => {
      setValue(value);
      args && args.onChange && args.onChange(value);
    };

    return <FilterGroup value={value} onChange={handleChange} {...args} />;
  },
};

export const Standard = {
  ...Template,
  args: {
    title: 'All categories',
    items: [
      { label: 'Clothes', name: 'clothes' },
      { label: 'HandBook', name: 'handbook' },
      { label: 'Figure', name: 'figure' },
    ],
  },
};
