import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text, Badge, VStack, HStack, Link, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { LinkIcon } from '@chakra-ui/icons';
import { SiGithub } from "react-icons/si";
import { useTranslation } from 'next-i18next';

const MyProjects = () => {
  const { t } = useTranslation('common');
  const bg = useColorModeValue("#e0daba", "#212e40");
  const shadowColor = useColorModeValue('#0e1a29B3', '#f9f4daB3'); 
  const isLightMode = useColorModeValue(true, false);

  const gridTemplateColumns = useBreakpointValue({ base: null, md: "repeat(2, 1fr)" });
  const GridOrBox = gridTemplateColumns ? Grid : Box;
  const maxW = useBreakpointValue({ base: "80%", sm: "70%", md: "60%" });
  const m = useBreakpointValue({ base: 1, sm: 12, md: 16 });
  const boxShadow = useBreakpointValue({ base: "none", md: "0px 10px 15px -3px rgba(4, 157, 201, 0.8), 0px 4px 6px -2px rgba(4, 157, 201, 0.6)"});


  const projects = [
    {
      title: "CyNoche",
      imgSrc: "/projects/CyNoche_1.png",
      alt: "HomePage Cynoche",
      role: t('cynoche.role'),
      description: t('cynoche.description'),
      techStack: ["React", "Chakra UI", "Node.js", "Express", "PosgreSQL", "Winston/Papertail"],
      githubUrl: "https://github.com/roissi/CyNoche",
      liveUrl: "https://cynoche.vercel.app/",
    },
    {
      title: "J'adopte un humain",
      imgSrc: "/projects/Adopte_1.png",
      alt: "HomePage J'adopte un humain",
      role: t('jadopte.role'),
      description: t('jadopte.description'),
      techStack: ["React", "Sass", "Node.js", "Express", "PosgreSQL", "JWT", "Bcrypt", "Swagger", "Jest"],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
    {
      title: "Don Efficace",
      imgSrc: "/projects/DE_1.png",
      alt: "HomePage Don Efficace",
      role: t('donefficace.role'),
      description: t('donefficace.description'),
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Jest", "Sanity"],
      liveUrl: "https://givingwhatwecan-git-french-gwwc-centreea.vercel.app/fr",
    },
    {
      title: t('portfolio.title'),
      imgSrcLight: "/projects/Portfolio_dark.png",
      imgSrcDark: "/projects/Portfolio_light.png",
      alt: "HomePage protfolio",
      role: t('portfolio.role'),
      description: t('portfolio.description'),
      techStack: ["React", "Next.js", "Chakra UI", "Node.js", "Express"],
      githubUrl: "https://github.com/roissi/Portfolio-roissi",
      liveUrl: "https://portfolio-roissi.vercel.app/",
    },
  ];

  return (
    <Box py={4} textAlign="center" letterSpacing="wide">
    <Heading 
      as="h2" 
      size="3xl" 
      mb={20} 
      style={{
        textShadow: `-1px 0 #049dc9, 0 1px #049dc9, 5px 0 #049dc9, 0 -5px #049dc9`
      }}
      id="my-projects"
      paddingTop="100px"
      marginTop="-100px"
      bg="transparent"
    >
      {t('title.works')}
      </Heading>
      <GridOrBox templateColumns={gridTemplateColumns} gap={6} m={m}>
        {projects.map((project, index) => (
        <GridItem key={index}>
      <Box 
        bg={bg} 
        p={2.5} 
        borderRadius="md" 
        borderWidth="2px" 
        boxShadow={boxShadow}
        _hover={{ borderColor: "#049dc9" }}
      >
        <VStack align="center" spacing={4}>
          <Text fontWeight="bold" letterSpacing="wide" fontSize="5xl">
            {project.title}
          </Text>
          <Image 
              borderRadius="md" 
              src={
                project.title === t('portfolio.title') 
                  ? isLightMode ? project.imgSrcLight : project.imgSrcDark
                  : project.imgSrc
              } 
              alt={project.title} 
              maxH="60%"
              maxW={maxW}
              style={{
                boxShadow: `5px 5px 0px ${shadowColor}`,
              }}
            />
          <Text fontSize="2xl">{project.role}</Text>
          <Text letterSpacing="wide" wordwrap="break-word" p={4}>{project.description}</Text>
            <HStack spacing={4} wrap="wrap" justifyContent="center">
            {project.techStack.map((tech, index) => (
                <Badge key={index} color="#f9f4da" bg="#049dc9" fontSize="sm" p="1.5" style={{ overflowWrap: "break-word", wordWrap: "break-word", hyphens: "auto", wordBreak: "break-word" }}>{tech}</Badge>
                ))}
            </HStack>
            <HStack spacing={4} justify="center" mb={3}>
            {project.githubUrl && (
              <Link href={project.githubUrl} isExternal>
                <Box as={SiGithub} size="30" _hover={{ color: "#049dc9" }} />
              </Link>
            )}
            <Link href={project.liveUrl} isExternal>
              <LinkIcon width="30px" height="30px" _hover={{ color: "#049dc9" }} />
            </Link>
            </HStack>
          </VStack>
        </Box>
        </GridItem>
      ))}
      </GridOrBox>
    </Box>
  );
};

export default MyProjects;