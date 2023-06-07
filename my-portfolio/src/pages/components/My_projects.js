import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text, VStack, HStack, Link, useColorModeValue } from "@chakra-ui/react";
import { LinkIcon } from '@chakra-ui/icons';  // Import the icons you need from Chakra UI
import { SiGithub } from "react-icons/si";

const MyProjects = () => {
  const bg = useColorModeValue("#ddd9c2", "#5b4580");

  const shadowColorLightMode = '#4a3967B3'; // change this to the actual color you want in light mode
  const shadowColorDarkMode = '#f9f4daB3'; // change this to the actual color you want in dark mode
  const shadowColor = useColorModeValue(shadowColorLightMode, shadowColorDarkMode);

  const borderColorLightMode = "#4a3967"; // change this to the actual color you want in light mode
  const borderColorDarkMode = "#f9f4da"; // change this to the actual color you want in dark mode

  const borderColor = useColorModeValue(borderColorLightMode, borderColorDarkMode);

  // A mock of your project data
  const projects = [
    {
      title: "CyNoche",
      imgSrc: "/projects/CyNoche_1.png",
      alt: "HomePage J'adopte un humain",
      role: "Personnal project",
      description: "French application of a fictional animal shelter that allows future adopters to choose the companion best suited to their desires, values ​​and needs. Our ambition is to dust off the existing showcase sites, which are rather bland and without much interaction, and to provide shelters with a simplified and secure animal management system. The strong idea of ​​I adopt a human is based on a matching system between the profile filled in by the user during his connection and the profile of the animals filled in by the caregivers.",
      techStack: ["React", "Chakra UI", "Node.js", "Express", "PosgreSQL"],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
    {
      title: "J'adopte un humain",
      imgSrc: "/projects/Adopte_1.png",
      alt: "HomePage J'adopte un humain",
      role: "My mission : Product Owner & Dev Back-end",
      description: "French application of a fictional animal shelter that allows future adopters to choose the companion best suited to their desires, values ​​and needs. Our ambition is to dust off the existing showcase sites, which are rather bland and without much interaction, and to provide shelters with a simplified and secure animal management system. The strong idea of ​​I adopt a human is based on a matching system between the profile filled in by the user during his connection and the profile of the animals filled in by the caregivers.",
      techStack: ["React", "Sass", "Node.js", "Express", "PosgreSQL", "JWT", "Bcrypt", "Swagger", "Jest"],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
    {
      title: "Don Efficace",
      imgSrc: "/projects/DE_1.png",
      alt: "HomePage J'adopte un humain",
      role: "My mission : Product Owner & Dev Back-end",
      description: "French application of a fictional animal shelter that allows future adopters to choose the companion best suited to their desires, values ​​and needs. Our ambition is to dust off the existing showcase sites, which are rather bland and without much interaction, and to provide shelters with a simplified and secure animal management system. The strong idea of ​​I adopt a human is based on a matching system between the profile filled in by the user during his connection and the profile of the animals filled in by the caregivers.",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Jest", "Sanity"],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
    {
      title: "My portfolio",
      imgSrcLight: "/projects/Portfolio_dark.png",
      imgSrcDark: "/projects/Portfolio_light.png",
      alt: "HomePage J'adopte un humain",
      role: "Personnal project",
      description: "French application of a fictional animal shelter that allows future adopters to choose the companion best suited to their desires, values ​​and needs. Our ambition is to dust off the existing showcase sites, which are rather bland and without much interaction, and to provide shelters with a simplified and secure animal management system. The strong idea of ​​I adopt a human is based on a matching system between the profile filled in by the user during his connection and the profile of the animals filled in by the caregivers.",
      techStack: ["React", "Next.js", "Chakra UI", "Node.js", "Express"],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
  ];

  return (
    <Box py={4} textAlign="center" id="my-projects">
      <Heading as="h2" size="4xl" mb={20} style={{
          textShadow: `-1px 0 #049dc9, 0 1px #049dc9, 5px 0 #049dc9, 0 -5px #049dc9`
        }}
      >
        Works
      </Heading>
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6} m={16}>
        {projects.map((project, index) => (
        <GridItem key={index}>
          <Box bg={bg} p={5} borderRadius="md" shadow="md" borderWidth="3px" shadow="dark-lg" borderColor={borderColor} 
  _hover={{ borderColor: "#049dc9" }}>
            <VStack align="center" spacing={4}>
              <Text fontWeight="bold" fontSize="5xl">
                {project.title}
              </Text>
              <Image 
                borderRadius="md" 
                src={
                  project.title === "My portfolio" 
                    ? useColorModeValue(project.imgSrcLight, project.imgSrcDark)
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
              <Text as='i'>{project.description}</Text>
              <Text fontWeight="semibold">Tech stack: {project.techStack.join(", ")}</Text>
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