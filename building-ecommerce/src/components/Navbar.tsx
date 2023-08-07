import CartContext from '@/context/Cart';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactElement, useContext } from 'react';
import { MdShoppingCart, MdLogin, MdLogout } from 'react-icons/md';

const Navbar = (): ReactElement => {
  const { user } = useUser();
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
        <Flex>
          {user ? (
            <Link href='api/auth/logout' passHref>
              <Button>
                <MdLogout />
                <Text ml='3'>Logout</Text>
              </Button>
            </Link>
          ) : (
            <Link href='api/auth/login' passHref>
              <Button>
                <MdLogin />
                <Text ml='3'>Login</Text>
              </Button>
            </Link>
          )}
          <Link href='/cart' passHref>
            <Button>
              <MdShoppingCart />
              <Text ml='3'>{itemsCount}</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
