import { VStack } from "@chakra-ui/react";
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HardSkills from './components/Hard_skills';
import MyProjects from './components/My_projects';
import Game from './components/Game';
import SoftSkills from './components/Soft_skills';
import Contact from './components/Contact';

const HomePage = () => (
  <>
    <Head>
      <title>Mon Portfolio</title>
      <meta name="description" content="Hi, I'm Cyril De Graeve, a freelance Fullstack Javascript Developer, and I look forward to working for you." />
        <meta name="keywords" content="Developer, Javascript, Fullstack" />
        <meta name="author" content="Cyril De Graeve" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
  <VStack spacing={6} align="stretch">
    <HardSkills />
    <MyProjects />
    <Game />
    <SoftSkills />
    <Contact />
  </VStack>
  </>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

export default HomePage;