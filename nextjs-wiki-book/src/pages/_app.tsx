import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { SWRConfig } from 'swr';
import { createApolloClient } from '@/apollo/createApolloClient';
import GlobalSpinner from '@/components/organisms/GlobalSpinner';
import { AuthContextProvider } from '@/contexts/AuthContext';
import GlobalSpinnerContextProvider from '@/contexts/GlobalSpinnerContext';
import { ShoppingCartContextProvider } from '@/contexts/ShoppingCartContext';
import { theme } from '@/styles/themes';
import { ApiContext } from '@/types';
import { fetcher } from '@/utils';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
  }

  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: #000;
  }

  ol, ul {
    list-style: none;
  }
`;

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_BASE_PATH || '/api/proxy',
};

export const apolloClient = createApolloClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <SWRConfig
            value={{
              shouldRetryOnError: false,
              fetcher,
            }}
          >
            <GlobalSpinnerContextProvider>
              <ShoppingCartContextProvider>
                <AuthContextProvider context={context}>
                  <GlobalSpinner />
                  <Component {...pageProps} />
                </AuthContextProvider>
              </ShoppingCartContextProvider>
            </GlobalSpinnerContextProvider>
          </SWRConfig>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
