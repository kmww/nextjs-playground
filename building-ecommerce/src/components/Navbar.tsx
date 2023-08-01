import CartContext from '@/context/Cart';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactElement, useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';

const Navbar = (): ReactElement => {
  const { items } = useContext(CartContext);

  const itemsCount = Object.values(items).reduce((acc, cur) => acc + cur, 0);

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      w='full'
      bgColor='white'
      boxShadow='md'>
      <Flex width='container.xl' m='auto' p='5' justifyContent='space-between'>
        <Link href='/' passHref>
          <Text textColor='blue.800' fontWeight='bold' fontSize='2xl'>
            My e-commerce
          </Text>
        </Link>
        <Link href='/cart' passHref>
          <Button>
            <MdShoppingCart />
            <Text ml='3'>{itemsCount}</Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
