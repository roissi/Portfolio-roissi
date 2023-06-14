import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from '../../config/Theme';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {

  const config = {
    useSystemColorMode: false,
  }

  const customTheme = extendTheme({ config, ...theme });

  return (
    <ChakraProvider theme={customTheme}>
      <Layout showIntro={Component.showIntro}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;