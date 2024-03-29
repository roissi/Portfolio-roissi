import { VStack } from "@chakra-ui/react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HardSkills from "./components/Hard_skills.js";
import MyProjects from "./components/My_projects.js";
import Game from "./components/Game.js";
import SoftSkills from "./components/Soft_skills.js";
import Contact from "./components/Contact.js";

const HomePage = () => (
  <>
    <Head>
      <title>Mon Portfolio</title>
      <meta
        name="description"
        content="Hi, I'm Cyril De Graeve, a Fullstack Javascript Developer, Problem solver, Freelance & Solopreneur. I look forward to working for you."
      />
      <meta
        name="keywords"
        content="Cyril De Graeve, roissi, Portfolio, Freelance, Developer, Javascript, Fullstack, React, Node.js"
      />
      <meta name="author" content="Cyril De Graeve" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="fr" />
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default HomePage;
