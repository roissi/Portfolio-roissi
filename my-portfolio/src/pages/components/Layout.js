import Header from './Header';
import { Box, useMediaQuery, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const Layout = ({ children, showIntro = true }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { colorMode, setColorMode } = useColorMode();
  const bgColor = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.primary', 'dark.primary');
  
  const { i18n } = useTranslation(); 

  useEffect(() => {
    setColorMode(isLargerThan768 ? "dark" : "light");
  }, [isLargerThan768, setColorMode]);

  const isFrench = i18n.language === 'fr';
  const changeLanguage = () => {
    i18n.changeLanguage(isFrench ? 'en' : 'fr');
  };

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      width="100%"
      m="0"
      p="0"
      boxSizing="border-box"
    >
      <Header showIntro={showIntro} changeLanguage={changeLanguage} />
      {children}
    </Box>
  );
};

export default Layout;