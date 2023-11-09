import { Meta } from '@storybook/react';
import UserProfile from './';

const meta: Meta<typeof UserProfile> = {
  title: 'Organisms/UserProfile',
  argTypes: {
    variant: {
      options: ['normal', 'small'],
      control: { type: 'radio' },
      defaultValue: 'normal',
      description: '변형',
      table: {
        type: { summary: 'normal | small' },
        defaultValue: { summarry: 'normal' },
      },
    },
    username: {
      control: { type: 'text' },
      description: '사용자명',
      table: {
        type: { summary: 'string' },
      },
    },
    profileImageUrl: {
      control: { type: 'text' },
      description: '사용자 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    numberOfProducts: {
      control: { type: 'number' },
      description: '사용자 소유 상품 수',
      table: {
        type: { summary: 'number' },
      },
    },
    description: {
      control: { type: 'text' },
      description: '사용자 설명',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
