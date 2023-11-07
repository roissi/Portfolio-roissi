import React from "react";
import { useTranslation } from "react-i18next";
import { VStack, HStack, Text, Image, Flex, Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionBox = motion(Box);

const SpecialProjectCard = ({
  project = {},
  isLightMode,
  maxW,
  bgSpecial,
  boxShadow,
}) => {
  const { t } = useTranslation("common");

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const title = project.title || "Projet sans titre";
  const role = project.role || "Rôle non défini";
  const description = project.description || "Description non disponible";
  const defaultImgDark = "/projects/yourproject_light.png";
  const defaultImgLight = "/projects/yourproject_dark.png";

  return (
    <MotionFlex
      direction="column"
      justifyContent="space-between"
      bg={bgSpecial}
      p={2.5}
      borderRadius="md"
      borderWidth="2px"
      boxShadow={boxShadow}
      _hover={{ borderColor: "#049dc9" }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <VStack align="center" spacing={4}>
        <Text fontWeight="bold" letterSpacing="wide" fontSize="5xl">
          {title}
        </Text>
        <MotionImage
          borderRadius="md"
          src={
            title === t("yourproject.title")
              ? isLightMode
                ? project.imgSrcDark || defaultImgLight
                : project.imgSrcLight || defaultImgDark
              : project.imgSrc || defaultImgLight
          }
          alt={title}
          maxH="60%"
          maxW={maxW}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
        />
        <Text letterSpacing="wide" wordwrap="break-word" p={4}>
          {description}
        </Text>
        <Text fontSize="2xl">{role}</Text>
      </VStack>
      <HStack spacing={4} justify="center" mb={3} mt={4}>
        <Link href="/#contact" passHref>
          <MotionBox
            _hover={{ color: "#049dc9" }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope size="60" color="gray.400" />
          </MotionBox>
        </Link>
      </HStack>
    </MotionFlex>
  );
};

export default SpecialProjectCard;
