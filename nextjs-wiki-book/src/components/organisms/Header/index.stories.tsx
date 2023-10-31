import { Meta } from '@storybook/react';
import Header from './';
import { User } from '@/types';
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from '@/contexts/ShoppingCartContext';
import { useEffect } from 'react';
import { AuthContextProvider } from '@/contexts/AuthContext';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
};

export default meta;

// 로그인 x
export const NoLogin = () => <Header />;

// 로그인 o
export const Login = () => {
  const authSampleUser: User = {
    id: 1,
    username: 'dummy',
    displayName: 'KMW',
    email: 'mw.k@example.com',
    profileImageUrl: '/images/sample/1.jpg',
    description: '',
  };

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext();
    // 더미 상품
    useEffect(() => {
      addProductToCart({
        id: 1,
        category: 'book',
        title: 'Product',
        description: '',
        imageUrl: '/images/sample/1.jpg',
        blurDataUrl: '',
        price: 1000,
        condition: 'used',
        owner: authSampleUser,
      });
    }, []);
    return <Header />;
  };

  return (
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: 'https://dummy' }}
        authUser={authSampleUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  );
};
