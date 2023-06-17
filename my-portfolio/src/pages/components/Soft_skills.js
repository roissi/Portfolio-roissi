import React, { useState } from 'react';
import { Box, Flex, Heading } from "@chakra-ui/react";
import SkillCard from './SkillCard';

export const SoftSkills = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const skills = [
    {
      id: '1',
      index: 0,
      skill: "WRITING SKILLS",
      description: "Great editing, writing and rewriting skills (French & English) / Graduate Diploma in Journalism.",
      example: "For 20 years, I was a journalist (GQ, Paris-Match...). I also founded a cybercultural magazine on the Internet and on newsstands, of which I was the editor-in-chief for more than 15 years.",
    },
    {
      id: '2',
      index: 1,
      skill: "LEADERSHIP & AUTONOMY",
      description: "Experienced leader and independent worker with a history of managing teams and self-directing projects.",
      example: "Successfully led a team of 40 journalists, while demonstrating autonomy through resourceful and independent task completion. This combination of leadership and self-direction allows me to effectively handle complex roles.",
    },
    {
      id: '3',
      index: 2,
      skill: "TREND MONITORING",
      description: "Proficient in observing and analyzing cultural, societal and technological trends.",
      example: "Successfully captured the interests of a young and trendy audience by consistently providing cutting-edge content, grounded in timely trend monitoring.",
    },
    {
      id: '4',
      index: 3,
      skill: "SOCIAL NETWORK & WEB 3",
      description: "Efficient in leveraging social media platforms and understanding Web 3.0 dynamics.",
      example: "Optimized online presence by strategically utilizing social networks, while keeping abreast of Web 3.0 developments, to enhance audience engagement and reach.",
    },
    {
      id: '5',
      index: 4,
      skill: "FLEXIBLE & AVAILABLE",
      description: "High flexibility and availability, adept at remote work and unconventional work hours.",
      example: "Managed remote projects across various time zones, consistently delivering high-quality results, independent of location or hours.",
    },
    {
      id: '6',
      index: 5,
      skill: "GEEK CULTURE & VIDEO GAMES",
      description: "An avid video game enthusiast and cyberpunk fan. Deeply immersed in digital cultures from the early stages.",
      example: "Experience with a wide variety of gaming consoles, open worlds, computers, from Amstrad to Atari ST, and Amiga. This passion fueled my immersion in digital cultures, enabling me to understand and adapt to emerging trends.",
    },
    {
      id: '7',
      index: 6,
      skill: "ANIMALS / MACHINES",
      description: "A technology enthusiast with a profound love for animals, cherishing both innovation and living beings.",
      example: "I live with two human companions and a little dog, aspiring to a future filled with advanced technology and diverse pets. As a vegan & antispecist human, I respect all forms of life, whether animal, vegetal or digital.",
    },
    {
      id: '8',
      index: 7,
      skill: "STRENGHTS & WEAKNESSES",
      description: "Dedicated, meticulous, punctual, curious, receptive, open-minded, and mature. Embracing my human imperfections.",
      example: "Consistently demonstrated integrity and reliability in professional settings. I acknowledge my shortcomings and constantly strive for personal growth and improvement.",
    },
  ];

  return (
    <Box py={1} textAlign="center" letterSpacing="wide" pb="10">
    <Heading 
      as="h2" 
      size="3xl" 
      mb={20} 
      style={{
        textShadow: `-1px 0 #02ad59, 0 1px #02ad59, 5px 0 #02ad59, 0 -5px #02ad59`
      }}
      id="soft-skills"
      paddingTop="100px"
      marginTop="-100px"
      bg="transparent"
    >
      SOFT SKILLS
      </Heading>
      <Flex justifyContent="space-around" wrap="wrap" gap="8">
        {skills.map(skill => (
          <SkillCard 
            key={skill.id}
            {...skill} 
            isFlipped={flippedCardId === skill.id} 
            flipCard={setFlippedCardId} 
          />
        ))}
      </Flex>
    </Box>
  );
};

export default SoftSkills;