import { Meta } from '@storybook/react';
import ImagePreview from './';

const meta: Meta<typeof ImagePreview> = {
  title: 'Molecules/ImagePreview',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '대체 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'string' },
      description: '너비',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'string' },
      description: '높이',
      table: {
        type: { summary: 'string' },
      },
    },
    onRemove: {
      description: '삭제 버튼시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
