import React from "react";
import { useTranslation } from "next-i18next";
import {
  Box,
  Text,
  VStack,
  Avatar,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const QuoteOpen = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
  </svg>
);

const QuoteClose = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
  </svg>
);

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <VStack align={"center"} mt={8}>
      <Avatar bg="#049dc9" src={src} mb={1} />
      <Stack spacing={-1} align={"center"}>
        <Text color="#049dc9" fontSize={"xl"} fontWeight={600}>
          {name}
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("light.primary", "dark.primary")}
        >
          {title}
        </Text>
      </Stack>
    </VStack>
  );
};

const TestimonialContent = ({ text }) => {
  const bgColor = useColorModeValue("#e9e7cc", "#182739");
  const quoteColor = "#049dc9";
  return (
    <Box
      bg={bgColor}
      boxShadow={"lg"}
      p={8}
      pt="4.5rem"
      pb="4.5rem"
      borderRadius={"3xl"}
      align={"center"}
      pos={"relative"}
      my={12}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-20px",
        left: "50%",
        transform: "translateX(-50%)",
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderTop: `20px solid ${useColorModeValue("#e9e7cc", "#182739")}`,
      }}
    >
      <Box pos={"absolute"} top="1.5rem" left="1.5rem">
        <QuoteOpen color={quoteColor} />
      </Box>
      <Text
        textAlign={"center"}
        color={useColorModeValue("light.primary", "dark.primary")}
        fontSize={"xl"}
      >
        {text}
      </Text>
      <Box pos={"absolute"} bottom="1.5rem" right="1.5rem">
        <QuoteClose color={quoteColor} />
      </Box>
    </Box>
  );
};

const Testimonials = () => {
  const { t } = useTranslation("common");
  const testimonials = [
    {
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      avatar: "/path/to/avatar.jpg",
      message: t("testimonial1.message"),
    },
    {
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      avatar: "/path/to/avatar.jpg",
      message: t("testimonial2.message"),
    },
    {
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      avatar: "/path/to/avatar.jpg",
      message: t("testimonial3.message"),
    },
  ];

  return (
    <Box borderRadius={"md"}>
      <Container maxW={"6xl"} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 6, lg: 10 }}
        >
          {testimonials.map((testimonial, index) => (
            <Box key={index}>
              <TestimonialContent
                heading={testimonial.role}
                text={testimonial.message}
              />
              <TestimonialAvatar
                src={testimonial.avatar}
                name={testimonial.name}
                title={testimonial.role}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
