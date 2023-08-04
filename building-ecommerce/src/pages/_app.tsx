import Navbar from '@/components/Navbar';
import CartContext from '@/context/Cart';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import checkout from './api/checkout';

const App = ({ Component, pageProps }: AppProps) => {
  const [items, setItems] = useState({});

  return (
    <ChakraProvider>
      <CartContext.Provider value={{ items, setItems }}>
        <Flex w='full' minH='100vh' bgColor='gray.100'>
          <Navbar />
          <Box maxW='70vw' m='auto'>
            <Component {...pageProps} />
          </Box>
        </Flex>
      </CartContext.Provider>
    </ChakraProvider>
  );
};

export default App;
