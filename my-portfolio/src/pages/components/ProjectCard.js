import React from "react";
import { useTranslation } from "next-i18next";
import {
  VStack,
  HStack,
  Text,
  Image,
  Badge,
  Flex,
  Grid,
  Link,
  Box,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LinkIcon } from "@chakra-ui/icons";
import { SiGithub } from "react-icons/si";

const ErrorMessage = ({ message }) => (
  <Box
    p={10}
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    textAlign="center"
  >
    <Text fontSize="xl">{message}</Text>
  </Box>
);

const MotionImage = motion(Image);

const ProjectCard = ({ project }) => {
  const { t } = useTranslation("common");
  const breakpoint = useBreakpointValue({ base: "base", xl: "xl" });
  const maxW = useBreakpointValue({
    base: "80%",
    sm: "80%",
    md: "80%",
    lg: "80%",
    xl: "60%",
  });
  const minH = useBreakpointValue({
    base: "1700px",
    sm: "1800px",
    md: "1900px",
    lg: "950px",
    xl: "1010px",
    "2xl": "950px",
  });
  const shadowColor = useColorModeValue("#0e1a29B3", "#f9f4daB3");
  const isLightMode = useColorModeValue(true, false);
  const descriptionWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "100%",
    lg: "50%",
  });
  const descriptionFlex = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "none",
    lg: "1",
  });
  const mbTitle = useBreakpointValue({ base: "4", sm: "4", md: "6", lg: "8" });
  const mtRole = useBreakpointValue({ base: "4", sm: "4", md: "6", lg: "12" });
  const mbImage = useBreakpointValue({
    base: "12",
    sm: "10",
    md: "10",
    lg: "0",
    xl: "8",
  });
  const descriPaddingLeft = useBreakpointValue({
    base: "4",
    sm: "8",
    md: "8",
    lg: "8",
    xl: "20",
  });
  const descriPaddingRight = useBreakpointValue({
    base: "4",
    sm: "8",
    md: "8",
    lg: "8",
    xl: "20",
  });
  const imgSrc3Display = useBreakpointValue({
    base: "block",
    sm: "block",
    md: "block",
    lg: "none",
    xl: "none",
  });
  const gridTemplateRows = useBreakpointValue({
    base: "auto 0.5fr auto",
    sm: "auto 0.5fr auto",
    md: "auto 0.5fr auto",
    lg: "auto 0.5fr auto",
    xl: "auto 0.5fr auto",
    "2xl": "auto 0.5fr auto",
  });
  const bgColor = useColorModeValue("#e9e7cc", "#182739");

  if (!project || !project.title) {
    // Gérer l'absence de données ou retourner null ou un indicateur de chargement
    return <ErrorMessage message="Project information unavailable." />;
  }

  const title = project.title || "Projet sans titre";
  const role = project.role || "Rôle non défini";
  const description = project.description || "Description non disponible";
  const techStack = project.techStack || [];
  const imgSrc =
    project.title === t("portfolio.title")
      ? isLightMode
        ? project.imgSrcLight
        : project.imgSrcDark
      : project.imgSrc;
  const imgSrc2 =
    project.title === t("portfolio.title")
      ? isLightMode
        ? project.imgSrcLight2
        : project.imgSrcDark2
      : project.imgSrc2;
  const imgSrc3 =
    project.title === t("portfolio.title")
      ? isLightMode
        ? project.imgSrcLight3
        : project.imgSrcDark3
      : project.imgSrc3;
  const githubUrl = project.githubUrl;
  const liveUrl = project.liveUrl || "#";

  const imageVariants = {
    hover: {
      scale: 1.25,
    },
    tap: {
      rotate: 3,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <Grid
      backgroundColor={bgColor}
      minH={minH}
      templateRows={gridTemplateRows}
      gap={1}
      p={2.5}
      borderColor={bgColor}
      borderRadius="md"
      borderWidth="4px"
      _hover={{ borderColor: "#049dc9" }}
    >
      {/* Titre */}
      <Text
        fontWeight="bold"
        marginTop="60px"
        letterSpacing="wide"
        fontSize="5xl"
        textAlign="center"
        mb={mbTitle}
      >
        {title}
      </Text>

      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-between"
      >
        {/* Colonne gauche: Images */}
        <VStack align="center" spacing={8} w={descriptionWidth}>
          {imgSrc && (
            <MotionImage
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={imageVariants}
              borderRadius="md"
              src={imgSrc}
              alt={title}
              maxH="60%"
              maxW={maxW}
              style={{
                boxShadow: `5px 5px 0px ${shadowColor}`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          )}
          {imgSrc2 && (
            <MotionImage
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={imageVariants}
              borderRadius="md"
              src={imgSrc2}
              alt={title}
              maxH="60%"
              maxW={maxW}
              style={{
                boxShadow: `5px 5px 0px ${shadowColor}`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          )}
          {imgSrc3 && (
            <MotionImage
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={imageVariants}
              borderRadius="md"
              src={imgSrc3}
              alt={title}
              maxH="60%"
              maxW={maxW}
              display={imgSrc3Display}
              style={{
                boxShadow: `5px 5px 0px ${shadowColor}`,
                transition: "all 0.3s ease-in-out",
              }}
              mb={mbImage}
            />
          )}
        </VStack>

        {/* Colonne droite: Description */}
        <VStack
          align="center"
          spacing={4}
          w={descriptionWidth}
          flex={descriptionFlex}
        >
          <Box
            dangerouslySetInnerHTML={{ __html: description }}
            style={{
              letterSpacing: "wide",
              wordWrap: "break-word",
            }}
            paddingLeft={descriPaddingLeft}
            paddingRight={descriPaddingRight}
            textAlign="left" // ou tout autre style Chakra UI que vous souhaitez appliquer
          />
          {breakpoint === "xl" && (
            <>
              {/* Rôle, TechStack, et Liens */}
              <Text fontSize="2xl" textAlign="center" mt={mtRole}>
                {role}
              </Text>
              <HStack spacing={4} wrap="wrap" justifyContent="center" mt={2}>
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    color="#f9f4da"
                    bg="#049dc9"
                    fontSize="sm"
                    p="1.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
              <HStack spacing={4} justify="center" mb={3} mt={4}>
                {githubUrl && (
                  <Link href={githubUrl} isExternal>
                    <Box
                      as={SiGithub}
                      size="30"
                      _hover={{ color: "#049dc9" }}
                    />
                  </Link>
                )}
                <Link href={liveUrl} isExternal>
                  <LinkIcon
                    width="30px"
                    height="30px"
                    _hover={{ color: "#049dc9" }}
                  />
                </Link>
              </HStack>
            </>
          )}
        </VStack>
      </Flex>

      {breakpoint !== "xl" && (
        <>
          <Text fontSize="2xl" textAlign="center" mt={mtRole}>
            {role}
          </Text>
          <HStack spacing={4} wrap="wrap" justifyContent="center" mt={4}>
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                color="#f9f4da"
                bg="#049dc9"
                fontSize="sm"
                p="1.5"
              >
                {tech}
              </Badge>
            ))}
          </HStack>
          <HStack spacing={4} justify="center" mb={3} mt={4}>
            {githubUrl && (
              <Link href={githubUrl} isExternal>
                <Box as={SiGithub} size="30" _hover={{ color: "#049dc9" }} />
              </Link>
            )}
            <Link href={liveUrl} isExternal>
              <LinkIcon
                width="30px"
                height="30px"
                _hover={{ color: "#049dc9" }}
              />
            </Link>
          </HStack>
        </>
      )}
    </Grid>
  );
};

export default React.memo(ProjectCard);
