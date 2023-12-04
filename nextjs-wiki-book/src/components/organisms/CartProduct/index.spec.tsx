import type { CartProductProps } from './';

const product: CartProductProps = {
  id: 1,
  imageUrl: '/images/example/1.jpg',
  price: 1000,
  title: 'Test Product',
  onBuyButtonClick: jest.fn(),
  onRemoveButtonClick: jest.fn(),
};
