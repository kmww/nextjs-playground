import { Product } from '@/types';

export interface UseProductProps {
  id: number;
  initial?: Product;
}

export type UseProduct = {
  product?: Product;
  isLoading: boolean;
  isError: boolean;
};
