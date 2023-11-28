import { ApiContext, Product } from '@/types';
import { fetcher } from '@/utils';

export interface AddProductsparams {
  product: Omit<Product, 'id'>;
}

const addProduct = async (
  context: ApiContext,
  { product }: AddProductsparams,
): Promise<Product> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/products`, {
    method: 'POST',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(product),
  });
};

export default addProduct;
