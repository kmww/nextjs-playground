import ProductCard from '@/components/ProductCard';
import graphql from '@/graphql';
import getAllProducts from '@/graphql/queries/getAllProducts';
import { ProductsType } from '@/types/product';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, Grid, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

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
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user) {
    return (
      <Box>
        <Text textColor='blue.800' fontWeight='bold' fontSize='2xl'>
          Welcome! please Login
        </Text>
      </Box>
    );
  }

  return (
    <Grid gridTemplateColumns='repeat(4, 1fr)' gap='5'>
      {props.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default Home;
