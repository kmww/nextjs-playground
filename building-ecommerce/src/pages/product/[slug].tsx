import { GetStaticPaths } from 'next';
import graphql from '@/graphql';
import getAllProducts from '@/graphql/queries/getAllProducts';
import { ProductsType } from '@/types/product';

export const getStaticPaths: GetStaticPaths = async () => {
  const { products }: ProductsType = await graphql.request(getAllProducts);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {};

const ProductPage = () => {};

export default ProductPage;
