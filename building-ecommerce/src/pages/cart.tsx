import { Box, Divider, Text } from '@chakra-ui/react';

const CartPage = () => {
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
