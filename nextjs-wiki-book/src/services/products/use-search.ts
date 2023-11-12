import { Category, Condition, Product } from '@/types';

export interface UseSearchProps {
  category?: Category;
  conditions?: Condition[];
  userId?: number;
  sort?: keyof Omit<Product, 'owner'>;
  order?: 'asc' | 'desc';
  initial?: Product[];
}

export interface UseSearch {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}
