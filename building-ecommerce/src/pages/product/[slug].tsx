import { GetStaticPaths, GetStaticProps } from 'next';
import graphql from '@/graphql';
import getAllProducts from '@/graphql/queries/getAllProducts';
import { ProductsType } from '@/types/product';
import getProductDetail from '@/graphql/queries/getProductDetail';

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }

  const { products }: ProductsType = await graphql.request(getProductDetail, {
    slug: params.slug,
  });

  return {
    props: {
      product: products[0],
    },
  };
};

const ProductPage = () => {};

export default ProductPage;
