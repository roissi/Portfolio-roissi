import {
  Box,
  Flex,
  Heading,
  VStack,
  Wrap,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaJs, FaReact } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiChakraui,
  SiSequelize,
  SiGithub,
  SiVercel,
  SiFramer,
  SiBootstrap,
  SiSupabase,
} from "react-icons/si";
import { useTranslation } from "next-i18next";

const HardSkills = () => {
  const { t } = useTranslation("common");
  const spacing = useBreakpointValue({ base: 5, md: 50 });
  const headingMarginBottom = useBreakpointValue({ base: 5, md: 20 });
  const textMarginBottom = useBreakpointValue({ base: 12, md: 0 });
  const techBoxSize = useBreakpointValue({ base: 50, md: 80 });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const alignItemsValue = useBreakpointValue({
    base: "flex-start",
    md: "center",
  });
  const textLineHeight = useBreakpointValue({ base: "1.7", md: "2.1" });

  return (
    <Box py={10} textAlign="center" letterSpacing="wide" mx="3%">
      <Box h="4vh" />

      <VStack spacing={spacing} align="center">
        <Heading
          as="h2"
          size="3xl"
          mb={headingMarginBottom}
          style={{
            textShadow: `-1px 0 #fcba28, 0 1px #fcba28, 5px 0 #fcba28, 0 -5px #fcba28`,
          }}
          id="hard-skills"
          paddingTop="100px"
          marginTop="-100px"
          bg="transparent"
        >
          HARD SKILLS
        </Heading>

        <Flex
          direction={flexDirection}
          justifyContent="space-around"
          width="100%"
          alignItems={alignItemsValue}
        >
          <Box width={{ base: "100%", md: "45%" }} mb={textMarginBottom}>
            <Text fontSize="xl" lineHeight={textLineHeight}>
              {t("prez.part1")}
              <br />
              <Text
                as="span"
                fontSize="1.5rem"
                fontWeight="bold"
                lineHeight="1.2"
              >
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/31114/"
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none", color: "#fcba28" }}
                >
                  {t("prez.part2")}
                </Link>
              </Text>
              .<br />
              {t("prez.part3")}
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "45%" }}>
            <VStack spacing={spacing} align="center">
              {/* Première ligne */}
              <Wrap justify="center" spacing={spacing}>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={FaJs}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>JavaScript</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={FaReact}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>React</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={IoLogoNodejs}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Node.js</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiNextdotjs}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Next.js</Text>
                  </VStack>
                </Box>
              </Wrap>

              {/* Deuxième ligne */}
              <Wrap justify="center" spacing={spacing}>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiExpress}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Express.js</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiSupabase}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Supabase</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiPostgresql}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>PostgreSQL</Text>
                  </VStack>
                </Box>
              </Wrap>

              {/* Troisième ligne */}
              <Wrap justify="center" spacing={spacing}>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiSequelize}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Sequelize</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiFramer}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Framer</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiChakraui}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Chakra UI</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiBootstrap}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Bootstrap</Text>
                  </VStack>
                </Box>
              </Wrap>

              {/* Quatrième ligne */}
              <Wrap justify="center" spacing={spacing}>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={DiScrum}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>
                      {t("hardskills.scrum")}
                      <br />
                      {t("hardskills.method")}
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiGithub}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>GitHub</Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={2}>
                    <Box
                      as={SiVercel}
                      size={techBoxSize}
                      _hover={{ color: "#fcba28" }}
                    />
                    <Text>Vercel</Text>
                  </VStack>
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
