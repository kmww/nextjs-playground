import graphql from '@/graphql';
import getAllProducts from '@/graphql/queries/getAllProducts';
import { ProductType } from '@/types/product';
import { GetStaticProps } from 'next';

interface ProductsType {
  products: ProductType;
}

export const getStaticProps: GetStaticProps<ProductsType> = async () => {
  const { products }: ProductsType = await graphql.request(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};

const Home = () => {
  return <></>;
};

export default Home;
