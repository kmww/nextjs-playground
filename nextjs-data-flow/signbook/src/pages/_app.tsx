import { useApollo } from '@/lib/apollo';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initalApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
