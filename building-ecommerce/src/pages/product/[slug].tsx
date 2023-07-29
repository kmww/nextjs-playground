import { GetStaticPaths, GetStaticProps } from 'next';
import graphql from '@/graphql';
import getAllProducts from '@/graphql/queries/getAllProducts';
import { ProductType, ProductsType } from '@/types/product';
import getProductDetail from '@/graphql/queries/getProductDetail';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Select,
  Text,
} from '@chakra-ui/react';

interface ProductDetailType {
  product: ProductType;
}

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

const ProductPage = ({ product }: ProductDetailType) => {
  const price = ((product.price / 100) * 1.1).toFixed(2);

  return (
    <Flex rounded='xl' boxShadow='2xl' w='full' p='16' bgColor='white'>
      <Image
        height='96'
        width='96'
        src={product.images[0].url}
        alt={product.name}
      />
      <Box ml='12' width='container.xs'>
        <Text as='h1' fontSize='4xl' fontWeight='bold'>
          {product.name}
        </Text>
        <Text
          lineHeight='none'
          fontSize='xl'
          my='3'
          fontWeight='bold'
          textColor='blue.500'>
          ${price}
        </Text>
        <Text maxW='96' textAlign='justify' fontSize='sm'>
          {product.description}
        </Text>
        <Divider my='6' />
        <Grid gridTemplateColumns='2fr 1fr' gap='5' alignItems='center'>
          <Select placeholder='Quantity' onChange={() => {}} />
          <Button colorScheme='blue'>Add to Cart</Button>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProductPage;
