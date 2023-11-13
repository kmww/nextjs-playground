import { ApiContext, Category, Condition, Product } from '@/types';
import { fetcher } from '@/utils';

export interface GetAllProductsParams {
  category?: Category;
  conditions?: Condition[];
  userId?: number;
  sort?: keyof Omit<Product, 'owner'>;
  order?: 'asc' | 'desc';
  limit?: number;
  page?: number;
}

const getAllProducts = async (
  context: ApiContext,
  {
    category,
    conditions,
    userId,
    sort = 'id',
    order = 'desc',
    limit,
    page,
  }: GetAllProductsParams,
): Promise<Product[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`;
  const params = new URLSearchParams();

  category && params.append('category', category);
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition));
  userId && params.append('owner.id', `${userId}`);
  page && params.append('_page', `${page}`);
  limit && params.append('_limit', `${limit}`);
  sort && params.append('_sort', sort);
  order && params.append('_order', order);

  const query = params.toString();

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      credentials: 'include',
    },
  });
};

export default getAllProducts;
