import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";
import { useBreakpointValue } from "@chakra-ui/react";

const SkillCard = ({
  id,
  skill,
  description,
  example,
  isFlipped,
  flipCard,
}) => {
  const cardWidth = useBreakpointValue({ base: "325px", md: "400px" });
  const handleClick = () => {
    if (isFlipped) {
      flipCard(null);
    } else {
      flipCard(id);
    }
  };

  const bgColor = useColorModeValue(
    isFlipped ? "#02ad59" : "#f9f4da",
    isFlipped ? "#02ad59" : "#0e1a29",
  );
  const textColor = useColorModeValue(
    isFlipped ? "#0e1a29" : "#02ad59",
    isFlipped ? "#f9f4da" : "#02ad59",
  );
  const fontSize = useBreakpointValue({ base: "3xl", md: "4xl" });

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Box
        onClick={handleClick}
        cursor="pointer"
        borderColor="#02ad59"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        width={cardWidth}
        height="350px"
        bg={bgColor}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box p="7">
          <Box d="flex" alignItems="baseline">
            <Text
              color={textColor}
              fontSize={fontSize}
              fontWeight="semibold"
              letterSpacing="wide"
            >
              {skill}
            </Text>
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
        width={cardWidth}
        height="350px"
        bg={bgColor}
      >
        <Box p="2">
          <Box
            mt="5"
            fontSize="lg"
            fontWeight="semibold"
            as="h4"
            letterSpacing="wide"
            lineHeight="tight"
            color={textColor}
          >
            {description}
          </Box>

          <Box mt="1" letterSpacing="wide" color={textColor}>
            {example}
          </Box>
        </Box>
      </Box>
    </ReactCardFlip>
  );
};

export default SkillCard;
