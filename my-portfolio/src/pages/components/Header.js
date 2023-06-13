import React from 'react';
import { Heading, Text, Box, IconButton, useColorMode, Flex, VStack, HStack, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <VStack
      justify="start"
      align="center"
      h="auto"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
      color={colorMode === "light" ? "#0e1a29" : "#f9f4da"}
      position="relative"
    >
      <Box h="4vh"/>
      <Box p={5}>
      <Text fontSize="2xl" textAlign="center" letterSpacing="wide">
          Hi, I'm <Text as="span" fontSize="2rem" fontWeight="bold">Cyril</Text>, a freelance Fullstack Javascript Developer, and I look forward to working with <Text as="span" fontSize="2.5rem" fontWeight="bold">you</Text>.
        </Text>
        <Heading 
          textAlign="center"
          fontSize="7xl"
          letterSpacing="wide"
          textShadow={colorMode === "light" ? '1px 1px #f9f4da, 2px 2px #0e1a29' : '1px 1px #0e1a29, 2px 2px #f9f4da'}
          m='2' 
          mb={-3}>WELCOME TO MY PORTFOLIO
        </Heading>

        <Box 
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1"
          bg={colorMode === "light" ? "light.background" : "dark.background"}
        >
        <Flex
          justifyContent="center"
          width="100%"
          marginTop={5}
        >
        
        <HStack
          spacing={20}
          justify="center"
          width="100%"
          mb={6}
        >
          <Button
            letterSpacing="wide"
            width="150px"
            bg="#fcba28"
            color="#0e1a29"
            _hover={{
              bg: "#f0f25a",
              color: "#0e1a29"
            }}>
              <Link href="/#hard-skills">
              {"Hard skills"}
              </Link>
          </Button>
          <Button
            letterSpacing="wide"
            width="150px"
            bg="#049dc9"
            color="#0e1a29"
            _hover={{
              bg: "#8fdbf2",
              color: "#0e1a29"
            }}>
              <Link href="/#my-projects">
              {"Works"}
              </Link>
          </Button>
          <Button
            letterSpacing="wide"
            width="150px"
            bg={
            router.pathname === '/components/Resume' 
            ? (colorMode === "light" ? '#0e1a29' : '#f9f4da') 
            : '#f73b68'
            }
            color={
            router.pathname === '/components/Resume' 
            ? (colorMode === "light" ? '#f9f4da' : '#0e1a29') 
            : '#0e1a29'
            }
            _hover={{
              bg: router.pathname === '/components/Resume'
              ? (colorMode === "light" ? '#0e1a29' : '#f9f4da') 
              : '#ed809a',
              color: "#0e1a29"
            }}
            pointerEvents={router.pathname === '/components/Resume' ? 'none' : 'auto'}>
          <Link
            href="/components/Resume"
            textDecoration="none"
            _hover={{textDecoration: "none"}}
            color={
            router.pathname === '/components/Resume' 
            ? (colorMode === "light" ? '#f9f4da' : '#0e1a29') 
            : '#0e1a29'
            }
            disabled={router.pathname === '/components/Resume'}>
            Resume
          </Link>
          </Button>
          <Button
            letterSpacing="wide"
            width="150px"
            bg="#02ad59"
            color="#0e1a29"
            _hover={{
              bg: "#51d695",
              color: "#0e1a29"
            }}>
            <Link href="/#soft-skills">
            {"Soft skills"}
            </Link>
          </Button>
          <Button
            letterSpacing="wide"
            width="150px"
            bg="#f55e0a"
            color="#0e1a29"
            _hover={{
              bg: "#f58445",
              color: "#0e1a29"
            }}>
              <Link href="/#contact">
                Contacts
              </Link>
          </Button>

          
          <IconButton
            variant='unstyled'
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            position="absolute"
            top={5}
            right={5}
          />
          </HStack>
  </Flex>
</Box>
        </Box>
      </VStack>
  )
}

export default Header;