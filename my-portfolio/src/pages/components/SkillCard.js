import React from 'react';
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import ReactCardFlip from 'react-card-flip';

const SkillCard = ({ id, skill, description, example, isFlipped, flipCard }) => {
  const handleClick = () => {
    if(isFlipped) {
      flipCard(null);
    } else {
      flipCard(id);
    }
  };

  const bgColor = useColorModeValue(isFlipped ? "#02ad59" : "#f9f4da", isFlipped ? "#02ad59" : "#0e1a29");
  const textColor = useColorModeValue(isFlipped ? "#0e1a29" : "#02ad59", isFlipped ? "#f9f4da" : "#02ad59");

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Box
        onClick={handleClick}
        cursor="pointer"
        borderColor="#02ad59"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        width="400px"
        height="300px"
        bg={bgColor}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
      <Box p="7">
        <Box d="flex" alignItems="baseline">
          <Text color={textColor} fontSize="4xl" fontWeight="semibold" letterSpacing="wide">{skill}</Text>
        </Box>
      </Box>
      </Box>
      
      <Box 
        onClick={handleClick}
        cursor="pointer"
        borderWidth="1px"
        borderColor="#02ad59" 
        borderRadius="lg" 
        overflow="hidden" 
        width="400px"
        height="300px"
        bg={bgColor}
      >
        <Box p="3">
          <Box mt="8" fontSize="lg" fontWeight="semibold" as="h4" letterSpacing="wide" lineHeight="tight" color={textColor}>
            {description}
          </Box>

          <Box mt="2" letterSpacing="wide" color={textColor}>
            {example}
          </Box>
        </Box>
      </Box>
    </ReactCardFlip>
  );
};

export default SkillCard;