import { Dispatch, SetStateAction, createContext } from 'react';
import React from 'react';

interface CartContextType {
  items: Object;
  setItems: Dispatch<SetStateAction<{}>>;
}

const ShoppingCartContext = createContext<CartContextType>({
  items: {},
  setItems: () => null,
});

export default ShoppingCartContext;
