import { Meta } from '@storybook/react';
import CartProduct from './';

const meta: Meta<typeof CartProduct> = {
  title: 'Organisms/CartProduct',
  argTypes: {
    id: {
      control: { type: 'number' },
      description: '상품 ID',
      table: {
        type: { summary: 'number' },
      },
    },
    title: {
      control: { type: 'text' },
      description: '상품명',
      table: {
        type: { summary: 'string' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '상품 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '상품 가격',
      table: {
        type: { summary: 'number' },
      },
    },
    onBuyButtonClick: {
      description: '구입 버튼 클릭시 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    onRemoveButtonClick: {
      description: '삭제 버튼 클릭시 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
