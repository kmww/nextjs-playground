import type { Product } from '@/types';
import React, { useContext, useReducer } from 'react';
import { shopReducer } from './reducers';

interface ShoppingCartContextType {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
}

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode;
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext);

export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const products: Product[] = [];
  const [cartState, dispatch] = useReducer(shopReducer, products);

  const addProductToCart = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart: cartState, addProductToCart, removeProductFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
