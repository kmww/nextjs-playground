import { Category, Condition, Product } from '@/types';

export interface GetAllProductsParams {
  category?: Category;
  conditon?: Condition[];
  userId?: number;
  sort?: keyof Omit<Product, 'owner'>;
  order?: 'asc' | 'desc';
  limit?: number;
  page?: number;
}
