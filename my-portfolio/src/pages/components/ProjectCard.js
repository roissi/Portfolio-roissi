import React from 'react';
import { useTranslation } from 'react-i18next';
import { VStack, HStack, Text, Image, Badge, Flex, Link, Box } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ project = {}, isLightMode, shadowColor, maxW, bg, boxShadow, gridMinHeight}) => {
  const { t } = useTranslation('common');

  const title = project.title || 'Projet sans titre';
  const role = project.role || 'Rôle non défini';
  const description = project.description || 'Description non disponible';
  const techStack = project.techStack || [];
  const imgSrc = project.title === t('portfolio.title') 
                  ? isLightMode 
                    ? project.imgSrcLight 
                    : project.imgSrcDark 
                  : project.imgSrc;
  const githubUrl = project.githubUrl;
  const liveUrl = project.liveUrl || '#';

  return (
    <Flex 
      direction="column" 
      justifyContent="space-between" 
      bg={bg} 
      p={2.5} 
      borderRadius="md" 
      borderWidth="2px"
      boxShadow={boxShadow}
      _hover={{ borderColor: "#049dc9" }}
      minHeight={gridMinHeight}
    >
      <VStack align="center" spacing={4}>
        <Text fontWeight="bold" letterSpacing="wide" fontSize="5xl">
          {title}
        </Text>
        {imgSrc && (
          <Image 
            borderRadius="md" 
            src={imgSrc} 
            alt={title} 
            maxH="60%"
            maxW={maxW}
            style={{
              boxShadow: `5px 5px 0px ${shadowColor}`,
            }}
          />
        )}
        <Text fontSize="2xl">{role}</Text>
        <Text letterSpacing="wide" wordwrap="break-word" p={4}>{description}</Text>
        <HStack spacing={4} wrap="wrap" justifyContent="center">
          {techStack.map((tech, index) => (
            <Badge key={index} color="#f9f4da" bg="#049dc9" fontSize="sm" p="1.5">{tech}</Badge>
          ))}
        </HStack>
      </VStack>
      <HStack spacing={4} justify="center" mb={3} mt={4}>
        {githubUrl && (
          <Link href={githubUrl} isExternal>
            <Box as={SiGithub} size="30" _hover={{ color: "#049dc9" }} />
          </Link>
        )}
        <Link href={liveUrl} isExternal>
          <LinkIcon width="30px" height="30px" _hover={{ color: "#049dc9" }} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default ProjectCard;