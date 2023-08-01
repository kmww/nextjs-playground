import { Dispatch, SetStateAction, createContext } from 'react';

interface CartContextType {
  items: Record<string, any>;
  setItems: Dispatch<SetStateAction<{}>>;
}

const CartContext = createContext<CartContextType>({
  items: {},
  setItems: () => {},
});

export default CartContext;
