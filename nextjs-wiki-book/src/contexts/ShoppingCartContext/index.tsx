import type { Product } from '@/types';
import React, { useContext } from 'react';

interface ShoppingCartContextType {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
}

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode;
}
