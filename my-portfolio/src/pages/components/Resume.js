import { Box, Button, Link, Center, useColorMode, Image, useBreakpointValue } from "@chakra-ui/react";
import Layout from './Layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ResumePage = () => {
  const { t } = useTranslation('common');

  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, sm: false });

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
                {t('resume.cv')}
              </Link>
          </Button>
        </Center>
        {isMobile && (
          <Center>
            <Image src="/CV_modal.png" alt="CV Preview" maxWidth="90%" mt={10}/>
          </Center>
        )}
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

ResumePage.showIntro = false;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}

export default ResumePage;