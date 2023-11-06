import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";
import ProjectCard from "./ProjectCard";

const ChakraCarousel = ({ projects, isLightMode, shadowColor, maxW }) => {
  console.log("isLightMode:", isLightMode);

  const customDots = ({ activeIndex, setActiveIndex }) => {
    return (
      <Box
        position="absolute"
        top="20px"
        left="50%"
        transform="translateX(-50%)"
      >
        {projects.map((_, i) => (
          <Button
            key={i}
            size={["xs", "xs", "sm", "sm"]}
            marginX={[0.5, 0.5, 1, 1]}
            onClick={() => setActiveIndex(i)}
            backgroundColor={
              activeIndex === i
                ? "#049dc9"
                : isLightMode
                ? "#0e1a29"
                : "#F9F4DA"
            }
            _hover={{ backgroundColor: "#049dc9" }}
            marginX={1}
          />
        ))}
      </Box>
    );
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      height="100%"
    >
      <Carousel
        autoPlay={false}
        renderDots={customDots}
        renderArrowLeft={() => null}
        renderArrowRight={() => null}
      >
        {projects.map((project, i) => (
          <Box key={i}>
            <ProjectCard
              project={project}
              isLightMode={isLightMode}
              shadowColor={shadowColor}
              maxW={maxW}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ChakraCarousel;
