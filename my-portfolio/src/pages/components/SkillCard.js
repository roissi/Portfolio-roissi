import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import styles from '../styles/carousel.module.scss';

const SkillCard = ({ skill, description, example }) => {
  const bgColor = useColorModeValue("#0e1a29","#f9f4da");
  const textColor = useColorModeValue("#f9f4da","#0e1a29");

  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      className={styles['card']}
      bg={bgColor}
    >
      <Box p="7">
        <Box d="flex" alignItems="baseline">
          <Text color="#02ad59" mr="2" fontSize="2xl" fontWeight="semibold" letterSpacing="wide">{skill}</Text>
        </Box>

        <Box mt="8" fontWeight="semibold" as="h4" lineHeight="tight" color={textColor}>
          {description}
        </Box>

        <Box mt="2" color={textColor}>
          {example}
        </Box>
      </Box>
    </Box>
  );
};

export default SkillCard;