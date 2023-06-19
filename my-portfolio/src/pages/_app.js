import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import theme from '../../config/Theme';
import Layout from './components/Layout';
import './styles/global.css';
import { useEffect, useState, createContext } from "react";
import Router from "next/router";
import { appWithTranslation, useTranslation } from 'next-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      checkWhitelist: true,
    },
    backend: {
      loadPath: '/public/locales/{{lng}}/{{ns}}.json',
    },
  });

export const LanguageContext = createContext();

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

  const { i18n } = useTranslation('common');
  const [isFrench, setIsFrench] = useState(i18n.language === 'fr');

  useEffect(() => {
    setIsFrench(i18n.language === 'fr');
  }, [i18n.language]);

  const changeLanguage = () => {
    const newLanguage = isFrench ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
    setIsFrench(!isFrench);
  };

  return (
    <LanguageContext.Provider value={{ isFrench, changeLanguage }}>
      <ChakraProvider theme={customTheme}>
        <Box minH="100vh">
          <Layout showIntro={Component.showIntro} isFrench={isFrench} changeLanguage={changeLanguage}>
            <Component {...pageProps} isFrench={isFrench} changeLanguage={changeLanguage} />
          </Layout>
        </Box>
      </ChakraProvider>
    </LanguageContext.Provider>
  );
}

export default appWithTranslation(MyApp);