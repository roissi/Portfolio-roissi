import React from 'react';
import { VStack, HStack, Text, Image, Flex, Box, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

// Convertir certains composants Chakra en composants animés
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionBox = motion(Box);  // Convertir Box en composant animé

const SpecialProjectCard = ({ project, isLightMode, shadowColor, maxW, bgSpecial, boxShadow, gridMinHeight, t }) => {
  
  // Exemple de variant pour les animations
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <MotionFlex 
      direction="column" 
      justifyContent="space-between" 
      bg = {bgSpecial} 
      p={2.5} 
      borderRadius="md" 
      borderWidth="2px"
      boxShadow={boxShadow}
      _hover={{ borderColor: "#049dc9" }}
      minHeight={gridMinHeight}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <VStack align="center" spacing={4}>
        <Text fontWeight="bold" letterSpacing="wide" fontSize="5xl">
          {project.title}
        </Text>
        <MotionImage 
          borderRadius="md" 
          src={
            project.title === t('yourproject.title') 
              ? isLightMode ? project.imgSrcDark : project.imgSrcLight
              : project.imgSrc
          } 
          alt={project.title} 
          maxH="60%"
          maxW={maxW}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
        />
        <Text fontSize="2xl">{project.role}</Text>
        <Text letterSpacing="wide" wordwrap="break-word" p={4}>{project.description}</Text>
      </VStack>
      <HStack spacing={4} justify="center" mb={3} mt={4}>
    <Link href="/#contact" passHref>
        <MotionBox 
            _hover={{ color: "#049dc9" }}
            whileHover={{ scale: 1.4 }}  // Effet de zoom
            transition={{ duration: 0.5 }}
        >
            <FaEnvelope size="60" color="gray.400" />
        </MotionBox>
    </Link>
      </HStack>
    </MotionFlex>
  );
};

export default SpecialProjectCard;