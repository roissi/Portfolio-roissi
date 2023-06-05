import { ChakraProvider, useColorMode, extendTheme } from "@chakra-ui/react";
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import theme from './components/Theme';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
  const { colorMode } = useColorMode();

  const config = {
    useSystemColorMode: false,
  }

  const customTheme = extendTheme({ config, ...theme });

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Outfit&display=swap" rel="stylesheet" />
      </Head>
      <Global
        styles={css`
          body {
            background-color: ${colorMode === "light" ? theme.colors.light.background : theme.colors.dark.background};
            color: ${colorMode === "light" ? theme.colors.light.primary : theme.colors.dark.primary};
            min-height: 100vh;
            min-width: 100vw;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;