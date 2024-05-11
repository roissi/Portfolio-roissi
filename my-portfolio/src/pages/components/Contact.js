import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Wrap,
  Flex,
  VStack,
  Image,
  Link,
  Input,
  Heading,
  Text,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const flexDir = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "column",
    "2xl": "row",
  });
  const m = useBreakpointValue({ base: 1, sm: 12, md: 16 });
  const Container = useBreakpointValue({ base: Wrap, sm: Wrap, md: Flex });
  const spacing = useBreakpointValue({ base: 5, sm: 10, md: 30 });
  const boxContactPadding = useBreakpointValue({ base: 5, sm: 5, md: 10 });

  const onSubmit = async (data) => {
    const response = await fetch("https://formspree.io/f/xwkjgkpl", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      reset();
      alert("Thank you for your message! I will get back to you soon.");
    } else {
      alert(
        "Something went wrong while submitting the form. Please try again.",
      );
    }
  };

  return (
    <Box py={10} textAlign="center" letterSpacing="wide">
      <Heading
        as="h2"
        size="3xl"
        style={{
          textShadow: `-1px 0 #f55e0a, 0 1px #f55e0a, 5px 0 #f55e0a, 0 -5px #f55e0a`,
        }}
        id="contact"
        paddingTop="100px"
        marginTop="-100px"
        bg="transparent"
      >
        CONTACT
      </Heading>
      <Flex direction={flexDir} gap={2} mx="auto" m={m} justify="center">
        <Box w="100%" textAlign="center" p={boxContactPadding}>
          <Text fontSize="2xl" letterSpacing="wide" mb={4}>
            {t("contact.leavemessage")}
          </Text>
          <Container justify="center" mt={20} spacing={spacing}>
            <VStack spacing={spacing} alignItems="center" width="100%">
              <Flex justify="center" width="100%">
                {" "}
                {/* 1ère ligne */}
                <Link href="https://github.com/roissi" isExternal mx={spacing}>
                  <Box
                    as={FaGithub}
                    size="60px"
                    _hover={{ color: "#f55e0a" }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/cyril-de-graeve/"
                  isExternal
                  mx={spacing}
                >
                  <Box
                    as={FaLinkedin}
                    size="60px"
                    _hover={{ color: "#f55e0a" }}
                  />
                </Link>
                <Link href="https://twitter.com/roissi" isExternal mx={spacing}>
                  <Image
                    src={
                      isHovered2
                        ? "/X_logo_hover.png"
                        : colorMode === "dark"
                        ? "/X_logo_darkmode.png"
                        : "/X_logo_lightmode.png"
                    }
                    alt="X logo"
                    maxWidth={["60px", "65px"]}
                    height="auto"
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  />
                </Link>
                <Link
                  href="mailto:contact@cyrildegraeve.dev"
                  isExternal
                  mx={spacing}
                >
                  <Box
                    as={FaEnvelope}
                    size="60px"
                    _hover={{ color: "#f55e0a" }}
                  />
                </Link>
              </Flex>

              <Flex justify="center" width="100%" mt={6}>
                {" "}
                {/* 2ème ligne */}
                <Link
                  href="https://www.malt.fr/profile/cyrildegraeve"
                  isExternal
                  mx={spacing}
                >
                  <Image
                    src={
                      isHovered
                        ? "/Malt_logo_hover.png"
                        : colorMode === "dark"
                        ? "/Malt_logo_darkmode.png"
                        : "/Malt_logo_lightmode.png"
                    }
                    alt="Malt logo"
                    maxWidth={["150px", "170px"]}
                    height="auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                </Link>
                <Link
                  href="https://www.codeur.com/-cyrilde26l"
                  isExternal
                  mx={spacing}
                  mt={-1}
                >
                  <Image
                    src={
                      isHovered3
                        ? "/Codeur_logo_hover.png"
                        : colorMode === "dark"
                        ? "/Codeur_logo_darkmode.png"
                        : "/Codeur_logo_lightmode.png"
                    }
                    alt="Codeur logo"
                    maxWidth={["60px", "60px"]}
                    height="auto"
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                  />
                </Link>
              </Flex>
            </VStack>
          </Container>
        </Box>

        <Box
          textAlign="left"
          p={boxContactPadding}
          w={["100%", "100%", "100%", "100%"]}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="name" isRequired>
              <FormLabel>{t("contact.formname")}</FormLabel>
              <Input
                {...register("name", { required: "Please enter your name." })}
                w="100%"
                bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"}
                color="#0e1a29"
                _focus={{ borderColor: "#f55e0a", boxShadow: "none" }}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </FormControl>

            <FormControl id="organisation" mt={4}>
              <FormLabel>{t("contact.formorganisation")}</FormLabel>
              <Input
                {...register("organisation")}
                w="100%"
                bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"}
                color="#0e1a29"
                _focus={{ borderColor: "#f55e0a", boxShadow: "none" }}
              />
              {errors.organisation && <p>{errors.organisation.message}</p>}
            </FormControl>

            <FormControl id="email" mt={4} isRequired>
              <FormLabel>{t("contact.formemail")}</FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: "Please enter your email address.",
                })}
                w="100%"
                bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"}
                color="#0e1a29"
                _focus={{ borderColor: "#f55e0a", boxShadow: "none" }}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FormControl>

            <FormControl id="message" mt={4} isRequired>
              <FormLabel>{t("contact.formmessage")}</FormLabel>
              <Textarea
                {...register("message", {
                  required: "Please enter your message.",
                })}
                w="100%"
                bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"}
                color="#0e1a29"
                _focus={{ borderColor: "#f55e0a", boxShadow: "none" }}
                rows={6}
                size="lg"
              />
              {errors.message && <p>{errors.message.message}</p>}
            </FormControl>

            <Button
              mt={10}
              type="submit"
              size="lg"
              width="100%"
              variant="solid"
              bg="#f55e0a"
              _hover={{ bg: "#f58445" }}
              _active={{ bg: "#f58445" }}
              color="#0e1a29"
            >
              {t("contact.formsubmit")}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactForm;
