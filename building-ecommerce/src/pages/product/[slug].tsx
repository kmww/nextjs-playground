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
import { useContext, useState } from 'react';
import CartContext from '@/context/Cart';
import SelectQuantity from '@/components/SelectQuantity';

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
  const [quantity, setQuantity] = useState(0);
  const { items, setItems } = useContext(CartContext);

  const alreadyInCart = product.id in items;

  const addToCart = () => {
    setItems({
      ...items,
      [product.id]: quantity,
    });
  };

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
          <SelectQuantity
            onChange={(quantity: string) => setQuantity(parseInt(quantity))}
          />
          <Button colorScheme='blue' onClick={addToCart}>
            {alreadyInCart ? 'Update' : 'Add to cart'}
          </Button>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProductPage;
