jest.mock('contexts/shoppingCartContext');
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext';
const { ShoppingCartContextProvider } = jest.requireActual(
  'contexts/ShoppingCartContext',
);
