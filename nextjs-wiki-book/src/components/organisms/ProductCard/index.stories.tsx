import { Meta } from '@storybook/react';
import ProductCard from './';

const meta: Meta<typeof ProductCard> = {
  title: 'Organisms/ProductCard',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '상품명',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '상품 가격',
      table: {
        type: {
          type: { summary: 'number' },
        },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '상품 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    blurDataUrl: {
      control: { type: 'text' },
      description: '상품 blur 이미지 데이터 URL 스킴',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      options: ['listing', 'small', 'detail'],
      control: { type: 'radio' },
      defaultValue: 'listing',
      description: '변경(표시 스타일)',
      table: {
        type: { summary: 'listing | small | detail' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
};

export default meta;
