import Header from './Header';
import { Box, useColorMode } from "@chakra-ui/react";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'light' ? 'light.background' : 'dark.background';
  const textColor = colorMode === 'light' ? 'light.primary' : 'dark.primary';

  return (
    <Box
      bg={bgColor}
      color={textColor}
    >
      <Header />
      {children}
    </Box>
  );
};

export default Layout;