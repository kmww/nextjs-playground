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

const products: Product[] = [
  {
    id: 1,
    category: 'emoji',
    title: 'Product',
    description: '',
    imageUrl: '/images/sample/1.jpg',
    blurDataUrl: '',
    price: 3000,
    condition: 'new',
    owner: authUser,
  },
  {
    id: 2,
    category: 'emoji',
    title: 'Product',
    description: '',
    imageUrl: '/images/sample/2.jpg',
    blurDataUrl: '',
    price: 5000,
    condition: 'new',
    owner: authUser,
  },
];

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

  it('카트에 상품이 2개 존재한다.', async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [...products],
      addProductToCart: () => {},
      removeProductFromCart: () => {},
    });

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider
            authUser={authUser}
            context={{ apiRootUrl: 'https/dummy' }}
          >
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>,
    );

    expect(screen.queryAllByTestId('badge-wrapper')[0].textContent).toBe('2');

    renderResult.unmount();
    useShoppingCartContextMock.mockReset();
  });

  it('비 로그인', async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [],
      addProductToCart: () => {},
      removeProductFromCart: () => {},
    });

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider context={{ apiRootUrl: 'https://dummy ' }}>
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>,
    );

    // 유저 이미지 없음
    expect(screen.queryByTestId('profile-shape-image')).toBeNull();

    // 카트가 비어있음
    expect(screen.queryByTestId('badge-wrapper')).toBeNull();

    renderResult.unmount();
    useShoppingCartContextMock.mockReset();
  });
});
