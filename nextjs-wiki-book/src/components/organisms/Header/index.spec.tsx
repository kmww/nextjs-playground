import { AuthContextProvider } from '@/contexts/AuthContext';
import { theme } from '@/styles/themes';
import { Product, User } from '@/types';
import { RenderResult, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './';

jest.mock('contexts/shoppingCartContext');
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext';
const { ShoppingCartContextProvider } = jest.requireActual(
  'contexts/ShoppingCartContext',
);

// 더미 사용자
const authUser: User = {
  id: 1,
  username: 'T.S',
  displayName: 'Test User',
  email: 'test@test.com',
  description: '',
  profileImageUrl: '/images/sample/1.jpg',
};

// 더미 상품
const product: Product = {
  id: 1,
  category: 'emoji',
  title: 'Product',
  description: '',
  imageUrl: '/images/sample/1.jpg',
  blurDataUrl: '',
  price: 3000,
  condition: 'new',
  owner: authUser,
};

describe('Header', () => {
  let renderResult: RenderResult;
  const useShoppingCartContextMock =
    useShoppingCartContext as jest.MockedFunction<
      typeof useShoppingCartContext
    >;

  it('카트에 상품이 존재한다.', async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [product],
      addProductToCart: () => {},
      removeProductFromCart: () => {},
    });

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider
            authUser={authUser}
            context={{ apiRootUrl: 'https://dummy' }}
          >
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>,
    );
    // 카트에 상품 존재시 배지가 표시된다.
    expect(screen.getAllByTestId('badge-wrapper').length).toBeGreaterThan(0);

    renderResult.unmount();
    useShoppingCartContextMock.mockReset();
  });
});
