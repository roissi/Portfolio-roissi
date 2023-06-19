import { VStack } from "@chakra-ui/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HardSkills from './components/Hard_skills';
import MyProjects from './components/My_projects';
import SoftSkills from './components/Soft_skills';
import Contact from './components/Contact';

const HomePage = () => (
  <VStack spacing={6} align="stretch">
    <HardSkills />
    <MyProjects />
    <SoftSkills />
    <Contact />
  </VStack>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

export default HomePage;