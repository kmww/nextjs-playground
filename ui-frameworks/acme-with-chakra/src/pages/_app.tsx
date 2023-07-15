import TopBar from '@/components/TopBar';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <TopBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
