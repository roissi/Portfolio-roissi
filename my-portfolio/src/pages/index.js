import { VStack } from "@chakra-ui/react";
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

export default HomePage;