import { Box, Heading, VStack, Wrap, Link, Text, HStack } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiPostgresql, SiExpress, SiNextdotjs, SiChakraui, SiSequelize, SiGithub, SiVercel } from "react-icons/si";

const HardSkills = () => {
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
      id="hard-skills" // Déplacez l'ID vers le composant de titre
      paddingTop="100px" // Ajoute un rembourrage supérieur à l'élément.
      marginTop="-100px" // Déplace l'élément vers le haut de la même quantité pour masquer le rembourrage lorsque vous faites défiler la page normalement.
      bg="transparent" // Assure que le rembourrage est invisible.
    >
      HARD SKILLS
  </Heading>
  <VStack spacing={50} align="center">
    {/* Première ligne */}
    <Wrap justify="center" spacing={100}>
      <Box>
        <HStack>
          <Link href="https://html.spec.whatwg.org/" isExternal>
            <Box as={FaHtml5} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
            <Text>HTML 5</Text>
          </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://www.css3.com/" isExternal>
          <Box as={FaCss3} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>CSS 3</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://www.javascript.com/" isExternal>
          <Box as={FaJs} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>JavaScript</Text>
        </HStack>
      </Box>
    </Wrap>

    {/* Deuxième ligne */}
    <Wrap justify="center" spacing={100}>
      <Box>
        <HStack>
          <Link href="https://nodejs.org/" isExternal>
          <Box as={IoLogoNodejs} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Node.js</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://expressjs.com/" isExternal>
          <Box as={SiExpress} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Express.js</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://www.postgresql.org/" isExternal>
          <Box as={SiPostgresql} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>PostgreSQL</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://sequelize.org/" isExternal>
          <Box as={SiSequelize} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Sequelize</Text>
        </HStack>
      </Box>
    </Wrap>

    {/* Troisième ligne */}
    <Wrap justify="center" spacing={100}>
      <Box>
        <HStack>
          <Link href="https://legacy.reactjs.org/" isExternal>
          <Box as={FaReact} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>React</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://nextjs.org/" isExternal>
          <Box as={SiNextdotjs} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Next.js</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://chakra-ui.com/" isExternal>
          <Box as={SiChakraui} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>Chakra UI</Text>
        </HStack>
      </Box>
    </Wrap>

    {/* Quatrième ligne */}
    <Wrap justify="center" spacing={100}>
      <Box>
        <HStack>
          <Link href="https://github.com/" isExternal>
          <Box as={SiGithub} size={80} _hover={{ color: "#fcba28" }} />
          </Link>
          <Text>GitHub</Text>
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Link href="https://vercel.com/" isExternal>
          <Box as={SiVercel} size={80} _hover={{ color: "#fcba28" }} />
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