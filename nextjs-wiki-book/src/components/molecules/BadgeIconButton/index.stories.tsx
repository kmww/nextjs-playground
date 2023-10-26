import { Meta } from '@storybook/react';
import BadgeIconButton from '.';

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
    size: {
      contorl: { type: 'number' },
      description: '배지 컨테이너 사이즈',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;
