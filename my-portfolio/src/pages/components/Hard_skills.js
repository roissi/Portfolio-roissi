import { Box, Heading, VStack, Wrap, Link, Text, HStack, useBreakpointValue } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiPostgresql, SiExpress, SiNextdotjs, SiChakraui, SiSequelize, SiGithub, SiVercel } from "react-icons/si";

const HardSkills = () => {
  const spacing = useBreakpointValue({ base: 10, md: 50 });
  const techBoxSize = useBreakpointValue({ base: 50, md: 80 });

  return (
    <Box py={10} textAlign="center" letterSpacing="wide">
    <Box h="4vh"/>
    <Heading 
      as="h2" 
      size="3xl" 
      mb={20} 
      style={{
        textShadow: `-1px 0 #fcba28, 0 1px #fcba28, 5px 0 #fcba28, 0 -5px #fcba28`
      }}
      id="hard-skills"
      paddingTop="100px"
      marginTop="-100px"
      bg="transparent"
    >
      HARD SKILLS
  </Heading>
  <VStack spacing={spacing} align="center">
    {/* Première ligne */}
    <Wrap justify="center" spacing={spacing}>
      <Box>
        <HStack>
          <Link href="https://html.spec.whatwg.org/" target="_blank" rel="noreferrer">
            <Box as={FaHtml5} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
            <Text>HTML 5</Text>
          </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://www.css3.com/" target="_blank" rel="noreferrer">
          <Box as={FaCss3} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>CSS 3</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://www.javascript.com/" target="_blank" rel="noreferrer">
          <Box as={FaJs} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>JavaScript</Text>
        </HStack>
      </Box>
    </Wrap>

    {/* Deuxième ligne */}
    <Wrap justify="center" spacing={spacing}>
      <Box>
        <HStack>
          <Link href="https://nodejs.org/" target="_blank" rel="noreferrer">
          <Box as={IoLogoNodejs} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Node.js</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <Box as={SiExpress} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Express.js</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
          <Box as={SiPostgresql} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>PostgreSQL</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://sequelize.org/" target="_blank" rel="noreferrer">
          <Box as={SiSequelize} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Sequelize</Text>
        </HStack>
      </Box>
    </Wrap>

    {/* Troisième ligne */}
    <Wrap justify="center" spacing={spacing}>
      <Box>
        <HStack>
          <Link href="https://legacy.reactjs.org/" target="_blank" rel="noreferrer">
          <Box as={FaReact} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>React</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <Box as={SiNextdotjs} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Next.js</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
          <Box as={SiChakraui} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Chakra UI</Text>
        </HStack>
      </Box>
    </Wrap>

    {/* Quatrième ligne */}
    <Wrap justify="center" spacing={spacing}>
      <Box>
        <HStack>
          <Link href="https://github.com/" target="_blank" rel="noreferrer">
          <Box as={SiGithub} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>GitHub</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://vercel.com/" target="_blank" rel="noreferrer">
          <Box as={SiVercel} size={techBoxSize} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Vercel</Text>
        </HStack>
      </Box>
    </Wrap>
  </VStack>
</Box>
  );
};

export default HardSkills;