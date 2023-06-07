import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from 'next/head';
import theme from './components/Theme';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;