import { Meta, StoryObj } from '@storybook/react';
import BadgeIconButton from '.';
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/IconButton';

const meta: Meta<typeof BadgeIconButton> = {
  title: 'Molecules/BadgeIconButton',
  argTypes: {
    icon: {
      control: { type: 'objec' },
      description: '아이콘',
      table: {
        type: { summary: 'object' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: '배지 콘텐츠',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: '배지 배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BadgeIconButton>;

const Template: Story = {
  render: (args) => <BadgeIconButton {...args} />,
};

export const SearchBadgIcon = {
  ...Template,
  args: {
    icon: <SearchIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#ed9f28',
  },
};

export const PersonBadgeIcon = {
  ...Template,
  args: {
    icon: <PersonIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#d4001a',
  },
};

export const ShoppingCartBadgeIcon = {
  ...Template,
  args: {
    icon: <ShoppingCartIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#32bf00',
  },
};
