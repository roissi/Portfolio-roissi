import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import theme from "../../config/Theme";
import Layout from "./components/Layout";
import "./styles/global.css";
import { useEffect } from "react";
import Router from "next/router";
import { appWithTranslation, useTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const config = {
    useSystemColorMode: false,
  };

  const customTheme = extendTheme({ config, ...theme });

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scrollTo(0, 0);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  const isFrench = i18n.language === "fr";

  return (
    <ChakraProvider theme={customTheme}>
      <Box minH="100vh">
        <Layout
          showIntro={Component.showIntro}
          isFrench={isFrench}
          changeLanguage={changeLanguage}
        >
          <Component
            {...pageProps}
            isFrench={isFrench}
            changeLanguage={changeLanguage}
          />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
