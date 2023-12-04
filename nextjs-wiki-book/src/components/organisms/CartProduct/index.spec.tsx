import { RenderResult, render, screen } from '@testing-library/react';
import type { CartProductProps } from './';
import CartProduct from './';

const product: CartProductProps = {
  id: 1,
  imageUrl: '/images/example/1.jpg',
  price: 1000,
  title: 'Test Product',
};

describe('ProductCart', () => {
  let renderResult: RenderResult;
  let onBuyButtonClick: jest.Mock;
  let onRemoveButtonClick: jest.Mock;

  afterEach(() => {
    renderResult.unmount();
  });

  it('카트에 제품이 올바르게 렌더링된다.', () => {
    renderResult = render(<CartProduct {...product} />);

    // 이미지 alt
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    // 제품 제목
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    // 제품 가격
    expect(screen.getByText('1000원')).toBeInTheDocument();
  });
});
