import getAllProducts from '@/services/products/get-all-products';
import { ApiContext, Category } from '@/types';
import { InferGetStaticPropsType } from 'next';

const categoryNameDict: Record<Category, string> = {
  emoji: '이모티콘',
  figures: '피규어',
  pad: '마우스 패드',
};

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
};

export const getStaticPaths = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  };

  const products = await getAllProducts(context);
  const paths = products.map((product) => `/products/${product.id}`);

  return { paths, fallback: true };
};
