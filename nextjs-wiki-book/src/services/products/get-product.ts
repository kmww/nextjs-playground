import { ApiContext, Product } from '@/types';
import { fetcher } from '@/utils';

export interface GetProductParams {
  id: number;
}

const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams,
): Promise<Product> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/products/${id}`,
    {
      headers: {
        Origin: '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};

export default getProduct;
