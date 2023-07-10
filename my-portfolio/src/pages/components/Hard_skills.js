import { Box, Flex, Heading, VStack, Wrap, Link, Text, HStack, useBreakpointValue } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiPostgresql, SiExpress, SiNextdotjs, SiChakraui, SiSequelize, SiGithub, SiVercel } from "react-icons/si";
import { useTranslation } from 'next-i18next';

const HardSkills = () => {
  const { t } = useTranslation('common'); 
  const spacing = useBreakpointValue({ base: 5, md: 50 });
  const headingMarginBottom = useBreakpointValue({ base: 5, md: 20 });
  const textMarginBottom = useBreakpointValue({ base: 12, md: 0 });
  const techBoxSize = useBreakpointValue({ base: 50, md: 80 });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const alignItemsValue = useBreakpointValue({ base: 'flex-start', md: 'center' });
  const textLineHeight = useBreakpointValue({ base: "1.7", md: "2.1" });


  return (
    <Box py={10} textAlign="center" letterSpacing="wide" mx="3%">
      <Box h="4vh"/>
      
      <VStack spacing={spacing} align="center">
        <Heading 
          as="h2" 
          size="3xl" 
          mb={headingMarginBottom}
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

        <Flex direction={flexDirection} justifyContent="space-around" width="100%" alignItems={alignItemsValue}>
        <Box width={{ base: "100%", md: "45%" }} mb={textMarginBottom}>
          <Text fontSize="xl" lineHeight={textLineHeight}>
          {t('prez.part1')}<br /><Text as="span" fontSize="1.5rem" fontWeight="bold" lineHeight="1.2"><Link href="https://www.francecompetences.fr/recherche/rncp/31114/" target="_blank" rel="noreferrer" _hover={{ textDecoration: "none", color: "#fcba28" }}>{t('prez.part2')}</Link></Text>.<br />{t('prez.part3')}
          </Text>
          </Box>
          <Box width={{ base: "100%", md: "45%" }}>
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
        </Flex>
      </VStack>
    </Box>
  );
};

export default HardSkills;