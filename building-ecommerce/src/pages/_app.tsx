import Navbar from '@/components/Navbar';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Flex w='full' minH='100vh' bgColor='gray.100'>
        <Navbar />
        <Box maxW='70vw' m='auto'>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
