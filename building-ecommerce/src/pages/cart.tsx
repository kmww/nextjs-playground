import CartContext from '@/context/Cart';
import graphql from '@/graphql';
import getProductsById from '@/graphql/queries/getProductsById';
import { ProductsType } from '@/types/product';
import { Box, Divider, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

const CartPage = () => {
  const { items } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsType>();
  const hasProducts = Object.keys(items).length;

  useEffect(() => {
    if (!hasProducts) return;
    graphql
      .request<{ products: ProductsType }>(getProductsById, {
        ids: Object.keys(items),
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, [hasProducts, items]);

  return (
    <Box rounded='xl' boxShadow='2xl' w='container.lg' p='16' bgColor='white'>
      <Text as='h1' fontSize='2xl' fontWeight='bold'>
        Cart
      </Text>
      <Divider my='10' />
      <Box>
        <Text>the cart is empty.</Text>
      </Box>
    </Box>
  );
};

export default CartPage;
