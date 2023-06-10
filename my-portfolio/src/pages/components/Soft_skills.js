import React from 'react';
import { Box, Flex, Heading } from "@chakra-ui/react";
import Carousel from './Carousel';

export const SoftSkills = () => {
  const skills = [
    {
      id: '1',
      index: 0,
      skill: "WRITING SKILLS",
      description: "Able to communicate complex ideas in a simple and understandable manner.",
      example: "Presented a complex project to non-technical stakeholders, leading to successful project acceptance.",
    },
    {
      id: '2',
      index: 1,
      skill: "TEAM WORK",
      description: "Able to write clear, structured, and persuasive documents.",
      example: "Wrote a successful grant proposal that resulted in €500,000 of funding.",
    },
    {
      id: '3',
      index: 2,
      skill: "TREND MONITORING",
      description: "Able to write clear, structured, and persuasive documents.",
      example: "Wrote a successful grant proposal that resulted in €500,000 of funding.",
    },
    {
      id: '4',
      index: 3,
      skill: "SOCIAL NETWORK & WEB 3",
      description: "Able to write clear, structured, and persuasive documents.",
      example: "Wrote a successful grant proposal that resulted in €500,000 of funding.",
    },
    // Ajoutez ici vos propres compétences...
  ];

  return (
    <Box py={1} textAlign="center" id="soft-skills" pb="24">
      <Heading as="h2" size="3xl" mb={20} style={{
            textShadow: `-1px 0 #02ad59, 0 1px #02ad59, 5px 0 #02ad59, 0 -5px #02ad59`
          }}
        >
        SOFT SKILLS
      </Heading>
      <Flex justifyContent="space-around" wrap="wrap">
        <Carousel skills={skills} />
      </Flex>
    </Box>
  );
};

export default SoftSkills;