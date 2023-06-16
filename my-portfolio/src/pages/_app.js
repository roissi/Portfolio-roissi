import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import theme from '../../config/Theme';
import Layout from './components/Layout';
import './styles/global.css';

function MyApp({ Component, pageProps }) {
  const config = {
    useSystemColorMode: false,
  }

  const customTheme = extendTheme({ config, ...theme });

  return (
    <ChakraProvider theme={customTheme}>
      <Box minH="100vh">
        <Layout showIntro={Component.showIntro}>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;