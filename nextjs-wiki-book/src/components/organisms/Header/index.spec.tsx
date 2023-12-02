jest.mock('contexts/shoppingCartContext');
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { Product, User } from '@/types';
const { ShoppingCartContextProvider } = jest.requireActual(
  'contexts/ShoppingCartContext',
);

const authUser: User = {
  id: 1,
  username: 'T.S',
  displayName: 'Test User',
  email: 'test@test.com',
  description: '',
  profileImageUrl: '/images/sample/1.jpg',
};

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
