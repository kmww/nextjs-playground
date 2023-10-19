import { Meta } from '@storybook/react';
import Text from './';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      defaultValue: 'medium',
      description: '텍스트 변형',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large, extraLarge',
        },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description: '폰트 굵기',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: '행 높이',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'color' },
      description: '텍스트 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    m: {
      control: { type: 'number' },
      description: '마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mt: {
      control: { type: 'number' },
      description: '위쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mr: {
      control: { type: 'number' },
      description: '오른쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mb: {
      control: { type: 'number' },
      description: '아래쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    ml: {
      control: { type: 'number' },
      description: '왼쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    p: {
      control: { type: 'number' },
      description: '패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pt: {
      control: { type: 'number' },
      description: '위쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pr: {
      control: { type: 'number' },
      description: '오른쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pb: {
      control: { type: 'number' },
      description: '아래쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pl: {
      control: { type: 'number' },
      description: '왼쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};
