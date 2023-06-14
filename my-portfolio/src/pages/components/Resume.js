import { Box, Button, Link, Center, useColorMode } from "@chakra-ui/react";
import Layout from './Layout'; // Assurez-vous que c'est le bon chemin pour le composant Layout

const ResumePage = () => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'light' ? 'light.background' : 'dark.background';
  const textColor = colorMode === 'light' ? 'light.primary' : 'dark.primary';

  return (
    <Layout showIntro={false}>
      <Box
        bg={bgColor}
        color={textColor}
      >
        <Center p={5}>
          <Button
              width="150px"
              bg="#f73b68"
              color="#0e1a29"
              _hover={{
                bg: "#ed809a",
                color: "#0e1a29",
                textDecoration: "none"
              }}
              mt={4} >
              <Link 
                href="/CV_CyrilDeGraeve_juin2023.pdf" 
                _hover={{
                  textDecoration: "none"
                }}
                isExternal
                download
              >
                Download CV
              </Link>
          </Button>
        </Center>
        <Box p={5}>
          <iframe
            src="/CV_CyrilDeGraeve_juin2023.pdf"
            style={{ width: "100%", height: "1000px" }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

ResumePage.showIntro = false; // Ici, nous définissons que pour cette page, nous ne voulons pas afficher l'introduction.

export default ResumePage;