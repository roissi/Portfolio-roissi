import Header from './Header';
import { Box, useMediaQuery, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from 'react';

const Layout = ({ children, showIntro = true }) => {
  const { colorMode, setColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const bgColor = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.primary', 'dark.primary');

  useEffect(() => {
    setColorMode(isLargerThan768 ? "dark" : "light");
  }, [isLargerThan768, setColorMode]);

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
      <Header showIntro={showIntro} />
      {children}
    </Box>
  );
};

export default Layout;