import CartContext from '@/context/Cart';
import graphql from '@/graphql';
import getProductsById from '@/graphql/queries/getProductsById';
import getStripe from '@/stripe';
import { ProductsType } from '@/types/product';
import { exchangeForDollars } from '@/utils/exchangeForDollars';
import { getTotalCharge } from '@/utils/getTotalCharge';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

const CartPage = () => {
  const { items } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsType['products']>([]);
  const hasProducts = Object.keys(items).length;

  useEffect(() => {
    if (!hasProducts) return;
    graphql
      .request<ProductsType>(getProductsById, {
        ids: Object.keys(items),
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, [hasProducts, items]);

  const handlePayment = async () => {
    const stripe = await getStripe();
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
      }),
    });

    const { session } = await res.json();
    await stripe?.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <Box rounded='xl' boxShadow='2xl' w='container.lg' p='16' bgColor='white'>
      <Text as='h1' fontSize='2xl' fontWeight='bold'>
        Cart
      </Text>
      <Divider my='10' />
      <Box>
        {!hasProducts ? (
          <Text>the cart is empty.</Text>
        ) : (
          <>
            {products.map((product) => (
              <Flex key={product.id} justifyContent='space-between' mb='4'>
                <Box>
                  <Link href={`/product/${product.slug}`} passHref>
                    <Text
                      fontWeight='bold'
                      _hover={{
                        textDecoration: 'underine',
                        color: 'blue.500',
                      }}>
                      {product.name}
                      <Text as='span' color='gray.500'>
                        {''} x{items[product.id]}
                      </Text>
                    </Text>
                  </Link>
                </Box>
                <Box>
                  $
                  {items[product.id] *
                    Number(exchangeForDollars(product.price))}
                </Box>
              </Flex>
            ))}
            <Divider my='10' />
            <Flex alignItems='center' justifyContent='space-between'>
              <Text fontSize='xl' fontWeight='bold'>
                Total: ${getTotalCharge(items, products)}
              </Text>
              <Button colorScheme='blue' onClick={handlePayment}>
                Pay now
              </Button>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
