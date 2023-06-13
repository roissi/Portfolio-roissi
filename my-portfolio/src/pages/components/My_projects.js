import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text, Badge, VStack, HStack, Link, useColorModeValue } from "@chakra-ui/react";
import { LinkIcon } from '@chakra-ui/icons';  // Import the icons you need from Chakra UI
import { SiGithub } from "react-icons/si";

const MyProjects = () => {
  const bg = useColorModeValue("#e0daba", "#212e40");
  const shadowColor = useColorModeValue('#0e1a29B3', '#f9f4daB3'); 
  const isLightMode = useColorModeValue(true, false); // Hook to determine the current color mode


  // A mock of your project data
  const projects = [
    {
      title: "CyNoche",
      imgSrc: "/projects/CyNoche_1.png",
      alt: "HomePage J'adopte un humain",
      role: "Personnal project",
      description: "CyNoche is a web application that catalogs (almost) every movie I've seen in my life. The application is built with React and Chakra UI and uses an API to provide data (movies, ratings, directors, release years, posters, and summaries). Features: Display of a movie catalog / Star rating system (out of 5) / Sort by movie names, directors' names, release years, and ratings / Add and/or update and/or delete a movie from the database / Search for movies (titles and/or directors) / Select a movie's card (poster + summary) / Summaries in English or French / Dark or light mode. You can use my data (about 2000 movies) or yours if you fill the database with your own movies.",
      techStack: ["React", "Chakra UI", "Node.js", "Express", "PosgreSQL"],
      githubUrl: "https://github.com/roissi/CyNoche",
      liveUrl: "https://cynoche.netlify.app/",
    },
    {
      title: "J'adopte un humain",
      imgSrc: "/projects/Adopte_1.png",
      alt: "HomePage J'adopte un humain",
      role: "Product Owner & Dev Back-end",
      description: "French application of a fictional animal shelter that allows future adopters to choose the companion best suited to their desires, values, and needs. Our ambition is to revamp the existing showcase sites, which are rather dull and lack interaction, and to provide shelters with a simplified and secure animal management system. The key idea behind J'adopte un humain is based on a matching system between the profile filled in by the user during their connection and the profile of the animals filled in by the caregivers.",
      techStack: ["React", "Sass", "Node.js", "Express", "PosgreSQL", "JWT", "Bcrypt", "Swagger", "Jest"],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
    {
      title: "Don Efficace",
      imgSrc: "/projects/DE_1.png",
      alt: "HomePage J'adopte un humain",
      role: "Dev Front-end & Back-end",
      description: "I participated in the internationalization (with the i18next framework) of the Giving What We Can association's website to create the French version of the new Don Efficace site, a nonprofit NGO intended to finance actions to reduce the suffering of all sentient beings (human and non-human) as efficiently as possible, directly or indirectly. I also updated the Marketing part of the site using Sanity, an open-source headless CMS written in JavaScript and designed with developers in mind.",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Jest", "Sanity"],
      githubUrl: "https://github.com/centre-for-effective-altruism/lyra/tree/french-gwwc",
      liveUrl: "https://givingwhatwecan-git-french-gwwc-centreea.vercel.app/fr",
    },
    {
      title: "My portfolio",
      imgSrcLight: "/projects/Portfolio_dark.png",
      imgSrcDark: "/projects/Portfolio_light.png",
      alt: "HomePage J'adopte un humain",
      role: "Personnal project",
      description: "The portfolio you are currently browsing can be viewed in light or dark mode according to your preferences. I am delighted to present some of my achievements here. Stay tuned, as I will soon add amazing new things...",
      techStack: ["React", "Next.js", "Chakra UI", "Node.js", "Express"],
      githubUrl: "https://github.com/roissi/Portfolio-roissi",
      liveUrl: "https://porfolio-roissi.vercel.app/",
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
      id="my-projects" // Déplacez l'ID vers le composant de titre
      paddingTop="100px" // Ajoute un rembourrage supérieur à l'élément.
      marginTop="-100px" // Déplace l'élément vers le haut de la même quantité pour masquer le rembourrage lorsque vous faites défiler la page normalement.
      bg="transparent" // Assure que le rembourrage est invisible.
    >
      WORKS
      </Heading>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6} m={16}>
        {projects.map((project, index) => (
        <GridItem key={index}>
      <Box 
        bg={bg} 
        p={2.5} 
        borderRadius="md" 
        borderWidth="1px" 
        boxShadow="0px 10px 15px -3px rgba(4, 157, 201, 0.8), 0px 4px 6px -2px rgba(4, 157, 201, 0.6)"
        _hover={{ borderColor: "#049dc9" }}
      >
        <VStack align="center" spacing={4}>
          <Text fontWeight="bold" letterSpacing="wide" fontSize="5xl">
            {project.title}
          </Text>
          <Image 
              borderRadius="md" 
              src={
                project.title === "My portfolio" 
                  ? isLightMode ? project.imgSrcLight : project.imgSrcDark
                  : project.imgSrc
              } 
              alt={project.title} 
              maxH="400px"  // Maximum height
              maxW="600px"  // Maximum width
              style={{
                boxShadow: `5px 5px 0px ${shadowColor}`,
              }}
            />
          <Text fontSize="2xl">{project.role}</Text>
          <Text as='i' letterSpacing="wide">{project.description}</Text>
            <HStack spacing={4}>
            {project.techStack.map((tech, index) => (
                <Badge key={index} color="#f9f4da" bg="#049dc9" fontSize="sm" p="1.5">{tech}</Badge>
                ))}
            </HStack>
            <HStack spacing={4} justify="center">
            <Link href={project.githubUrl} isExternal>
              <Box as={SiGithub} size="30" _hover={{ color: "#049dc9" }} />
            </Link>
            <Link href={project.liveUrl} isExternal>
              <LinkIcon width="30px" height="30px" _hover={{ color: "#049dc9" }} />
            </Link>
            </HStack>
          </VStack>
        </Box>
        </GridItem>
      ))}
      </Grid>
    </Box>
  );
};

export default MyProjects;