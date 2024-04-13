import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { createApolloClient } from '@/apollo/createApolloClient';
import GlobalSpinner from '@/components/organisms/GlobalSpinner';
import { theme } from '@/styles/themes';

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
          <RecoilRoot>
            <GlobalSpinner />
            <Component {...pageProps} />
          </RecoilRoot>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
