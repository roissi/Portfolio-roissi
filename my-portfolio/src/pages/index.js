import { VStack } from "@chakra-ui/react";
import HardSkills from './components/Hard_skills';
import MyProjects from './components/My_projects';
import SoftSkills from './components/Soft_skills';

const HomePage = () => (
  <VStack spacing={6} align="stretch">
    <HardSkills />
    <MyProjects />
    <SoftSkills />
  </VStack>
);

export default HomePage;