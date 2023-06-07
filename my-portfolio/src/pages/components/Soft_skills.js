import { Box, Heading } from "@chakra-ui/react";

const SoftSkills = () => {
  return (
    <Box py={1} textAlign="center" id="soft-skills">
  <Heading as="h2" size="4xl" mb={20} style={{
          textShadow: `-1px 0 #02ad59, 0 1px #02ad59, 5px 0 #02ad59, 0 -5px #02ad59`
        }}
      >
    Soft skills
  </Heading>
  </Box>
  );
};

export default SoftSkills;