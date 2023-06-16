import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, IconButton, useColorMode, Flex, VStack, HStack, Button, useBreakpointValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileNavigation from './mobile/MobileNavigation';

const Header = ({ showIntro = true }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  // Définir le state local
  const [currentPath, setCurrentPath] = useState("");

  // Mettre à jour currentPath lorsqu'un changement de route se produit
    useEffect(() => {
      setCurrentPath(router.pathname);
    }, [router.pathname]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack
      justify="start"
      align="center"
      h="auto"
      w="100%"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
      color={colorMode === "light" ? "#0e1a29" : "#f9f4da"}
      position="relative"
    >
      <Box h="4vh"/>
      <Box p={5} pt={showIntro ? "60px" : "1px"}>
        {showIntro && (
        <>
          <Text fontSize="2xl" textAlign="center" letterSpacing="wide">
            Hi, I&apos;m <Text as="span" fontSize="2rem" fontWeight="bold">Cyril De Graeve</Text>, a freelance Fullstack Javascript Developer, and I look forward to working with <Text as="span" fontSize="2.5rem" fontWeight="bold">you</Text>.
          </Text>
          <Heading 
            textAlign="center"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
            letterSpacing="wide"
            textShadow={colorMode === "light" ? '1px 1px #f9f4da, 2px 2px #0e1a29' : '1px 1px #0e1a29, 2px 2px #f9f4da'}
            m='2' 
            mb={-3}>WELCOME TO MY PORTFOLIO
          </Heading>
        </>
        )}
        <Box 
          position="fixed"
          top="0"
          left="0"
          right="0"
          w="100%"
          zIndex="1"
          bg={colorMode === "light" ? "light.background" : "dark.background"}
        >
        <Flex
          justifyContent="center"
          width="100%"
          marginTop={8}
          >
            {isMobile ? (
              <MobileNavigation />
            ) : (
        <HStack
          spacing={20}
          justify="center"
          width="100%"
          mb={7}
        >
        <Link href="/#hard-skills" passHref>
          <Button
            as="a"
            letterSpacing="wide"
            width="150px"
            bg="#fcba28"
            color="#0e1a29"
            _hover={{
              bg: "#f0f25a",
              color: "#0e1a29"
            }}
          >
          {"Hard skills"}
          </Button>
        </Link>
        <Link href="/#my-projects" passHref>
          <Button
            as="a"
            letterSpacing="wide"
            width="150px"
            bg="#049dc9"
            color="#0e1a29"
            _hover={{
              bg: "#8fdbf2",
              color: "#0e1a29"
            }}>
              {"Works"}
            </Button>
          </Link>
          <Link href="/components/Resume" passHref>
  <Button
    as="a"
    letterSpacing="wide"
    width="150px"
    bg={
      currentPath === '/components/Resume' 
      ? (colorMode === "light" ? '#0e1a29' : '#f9f4da') 
      : '#f73b68'
    }
    color={
      currentPath === '/components/Resume' 
      ? (colorMode === "light" ? '#f9f4da' : '#0e1a29') 
      : '#0e1a29'
    }
    _hover={{
      bg: currentPath === '/components/Resume'
      ? (colorMode === "light" ? '#0e1a29' : '#f9f4da') 
      : '#ed809a',
      color: "#0e1a29",
      textDecoration: "none"
    }}
    pointerEvents={currentPath === '/components/Resume' ? 'none' : 'auto'}
    textDecoration="none"
    opacity={currentPath === '/components/Resume' ? '0.6' : '1'}
  >
    Resume
  </Button>
</Link>
          <Link href="/#soft-skills" passHref>
            <Button
            as="a"
            letterSpacing="wide"
            width="150px"
            bg="#02ad59"
            color="#0e1a29"
            _hover={{
              bg: "#51d695",
              color: "#0e1a29"
            }}>
            {"Soft skills"}
            </Button>
          </Link>
          <Link href="/#contact" passHref>
            <Button
            as="a"
            letterSpacing="wide"
            width="150px"
            bg="#f55e0a"
            color="#0e1a29"
            _hover={{
              bg: "#f58445",
              color: "#0e1a29"
            }}>
                Contacts
            </Button>
          </Link>
          
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
          )}
          </Flex>
          </Box>
        </Box>
      </VStack>
  )
}

export default Header;