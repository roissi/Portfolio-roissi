import Header from './Header';
import { Box, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  const bgColor = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.primary', 'dark.primary');

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      minW="100vw"
      m="0"
      p="0"
      boxSizing="border-box"
    >
      <Header />
      {children}
    </Box>
  );
};

export default Layout;