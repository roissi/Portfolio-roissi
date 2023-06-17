import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import theme from '../../config/Theme';
import Layout from './components/Layout';
import './styles/global.css';
import { useEffect } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const config = {
    useSystemColorMode: false,
  }

  const customTheme = extendTheme({ config, ...theme });

  useEffect(() => {
    const handleRouteChange = url => {
      window.scrollTo(0, 0);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

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