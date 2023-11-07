import React from "react";
import { useTranslation } from "react-i18next";
import {
  VStack,
  HStack,
  Grid,
  Flex,
  Image,
  Text,
  Badge,
  Box,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { SiGithub } from "react-icons/si";

const BigProjectCard = ({
  project = {},
  isLightMode,
  maxW,
  bg,
  boxShadow,
  shadowColor,
  gridMinHeight,
}) => {
  const { t } = useTranslation("common");

  const title = project.title || "Projet sans titre";
  const role = project.role || "Rôle non défini";
  const description = project.description || "Description non disponible";
  const description2 = project.description2 || "Description non disponible";
  const techStack = project.techStack || [];
  const githubUrl = project.githubUrl;
  const liveUrl = project.liveUrl || "#";
  const imgSrc1 =
    project.title === t("portfolio.title")
      ? isLightMode
        ? project.imgSrcLight
        : project.imgSrcDark
      : project.imgSrc1;

  const imgSrc3 =
    project.title === t("portfolio.title")
      ? isLightMode
        ? project.imgSrcLight
        : project.imgSrcDark
      : project.imgSrc3;

  const displayComponent = useBreakpointValue({
    base: (
      <>
        <Image
          borderRadius="md"
          src={imgSrc1}
          alt={title}
          maxH="60%"
          maxW={maxW}
          style={{
            boxShadow: `5px 5px 0px ${shadowColor}`,
          }}
        />
        <Text letterSpacing="wide" wordwrap="break-word" p={4}>
          {description}
        </Text>
      </>
    ),
    sm: (
      <>
        <Image
          borderRadius="md"
          src={imgSrc1}
          alt={title}
          maxH="60%"
          maxW={maxW}
          style={{
            boxShadow: `5px 5px 0px ${shadowColor}`,
          }}
        />
        <Text letterSpacing="wide" wordwrap="break-word" p={4}>
          {description}
        </Text>
      </>
    ),
    md: (
      <>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={4}
        >
          <Image
            borderRadius="md"
            src={imgSrc1}
            alt={title}
            maxW={maxW}
            style={{
              boxShadow: `5px 5px 0px ${shadowColor}`,
              gridRow: "1/2",
            }}
            justifySelf="center"
            alignSelf="center"
          />
          <Image
            borderRadius="md"
            src={imgSrc3}
            alt={title}
            maxW={maxW}
            style={{
              boxShadow: `5px 5px 0px ${shadowColor}`,
              gridRow: "1/2",
            }}
            justifySelf="center"
            alignSelf="center"
          />
          <Text
            letterSpacing="wide"
            wordwrap="break-word"
            p={4}
            gridRow="2/3"
            gridColumn="1/2"
          >
            {description}
          </Text>
          <Text
            letterSpacing="wide"
            wordwrap="break-word"
            p={4}
            gridRow="2/3"
            gridColumn="2/3"
          >
            {description2}
          </Text>
        </Grid>
      </>
    ),
    lg: (
      <>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={4}
        >
          <Image
            borderRadius="md"
            src={imgSrc1}
            alt={title}
            maxH="100%"
            maxW="100%"
            style={{
              boxShadow: `5px 5px 0px ${shadowColor}`,
              gridRow: "1/2",
            }}
            justifySelf="center"
            alignSelf="center"
          />
          <Image
            borderRadius="md"
            src={imgSrc3}
            alt={title}
            maxH="100%"
            maxW="90%"
            style={{
              boxShadow: `5px 5px 0px ${shadowColor}`,
              gridRow: "1/2",
            }}
            justifySelf="center"
            alignSelf="center"
          />
          <Text
            letterSpacing="wide"
            wordwrap="break-word"
            p={4}
            gridRow="2/3"
            gridColumn="1/2"
          >
            {description}
          </Text>
          <Text
            letterSpacing="wide"
            wordwrap="break-word"
            p={4}
            gridRow="2/3"
            gridColumn="2/3"
          >
            {description2}
          </Text>
        </Grid>
      </>
    ),
  });

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      p={2.5}
      bg={bg}
      borderRadius="md"
      borderWidth="2px"
      boxShadow={boxShadow}
      _hover={{ borderColor: "#049dc9" }}
      minHeight={gridMinHeight}
    >
      <VStack align="center" spacing={4}>
        <Text fontWeight="bold" letterSpacing="wide" fontSize="5xl">
          {title}
        </Text>
        {displayComponent}
        <Text fontSize="2xl">{role}</Text>
        <HStack spacing={4} wrap="wrap" justifyContent="center">
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
      </VStack>
      <HStack spacing={4} justify="center" mb={3} mt={4}>
        {githubUrl && (
          <Link href={githubUrl} isExternal>
            <Box as={SiGithub} size="30" _hover={{ color: "#049dc9" }} />
          </Link>
        )}
        <Link href={liveUrl} isExternal>
          <LinkIcon width="30px" height="30px" _hover={{ color: "#049dc9" }} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default BigProjectCard;
