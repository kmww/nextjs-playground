import { Product } from '@/types';

export interface AddProductsparams {
  product: Omit<Product, 'id'>;
}
