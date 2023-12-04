import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
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

  it('구입 버튼을 누르면 onBuyButtonClick이 호출된다.', () => {
    onBuyButtonClick = jest.fn();
    renderResult = render(
      <CartProduct {...product} onBuyButtonClick={onBuyButtonClick} />,
    );

    fireEvent.click(screen.getByText('구입'));
    expect(onBuyButtonClick).toHaveBeenNthCalledWith(1, product.id);
  });

  it('삭제 버튼을 누르면 onRemoveButtonClick이 호출된다.', () => {
    onRemoveButtonClick = jest.fn();
    renderResult = render(
      <CartProduct {...product} onRemoveButtonClick={onRemoveButtonClick} />,
    );

    fireEvent.click(screen.getByText('삭제'));
    expect(onRemoveButtonClick).toHaveBeenNthCalledWith(1, product.id);
  });

  it('카트에서 삭제 버튼을 누르면 onRemoveButtonClickc이 호출된다.', () => {
    onRemoveButtonClick = jest.fn();
    renderResult = render(
      <CartProduct {...product} onRemoveButtonClick={onRemoveButtonClick} />,
    );

    fireEvent.click(screen.getByText('카트에서 삭제'));
    expect(onRemoveButtonClick).toHaveBeenNthCalledWith(1, product.id);
  });
});
