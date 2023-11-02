import { Meta } from '@storybook/react';
import ProductForm from './';

const meta: Meta<typeof ProductForm> = {
  title: 'Organisms/ProductForm',
  argTypes: {
    onProductSave: {
      description: '등록 버튼 클릭시 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;
