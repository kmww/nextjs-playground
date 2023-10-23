import { Meta, StoryObj } from '@storybook/react';
import {
  CancelIcon,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  CloseIcon,
  CloudUploadIcon,
  GitHubIcon,
  PersonIcon,
  PersonOutlineIcon,
  SearchIcon,
  ShoppingCartIcon,
} from './';

const meta: Meta<typeof SearchIcon> = {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'string' },
      description: '아이콘 색상',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: '아이콘 크기',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClick 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

const Template: Story = {
  render: (args) => (
    <>
      <CloseIcon {...args} />
      <SearchIcon {...args} />
      <CancelIcon {...args} />
      <CheckBoxOutlineBlankIcon {...args} />
      <CheckBoxIcon {...args} />
      <PersonIcon {...args} />
      <GitHubIcon {...args} />
      <ShoppingCartIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
    </>
  ),
};

export const Normal = { ...Template };
