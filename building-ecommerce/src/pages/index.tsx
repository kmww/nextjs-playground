import ProductCard from '@/components/ProductCard';
import graphql from '@/graphql';
import getAllProducts from '@/graphql/queries/getAllProducts';
import { ProductsType } from '@/types/product';
import { Grid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<ProductsType> = async () => {
  const { products }: ProductsType = await graphql.request(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};

const Home = (props: ProductsType) => {
  return (
    <Grid gridTemplateColumns='repeat(4, 1fr)' gap='5'>
      {props.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default Home;
