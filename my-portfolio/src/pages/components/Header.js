import React from 'react';
import { Heading, Text, Box, IconButton, useColorMode, VStack, HStack, Button, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <VStack
      justify="start"
      align="center"
      h="auto"
      bg={colorMode === "light" ? "light.background" : "dark.background"}
      color={colorMode === "light" ? "#1a202c" : "#f9f4da"}
      position="relative"
    >
      <Box h="4vh"/>
      <Box p={5}>
        <Heading 
          textAlign="center"
          fontSize="8xl" 
          textShadow={colorMode === "light" ? '1px 1px #f9f4da, 2px 2px #1a202c' : '1px 1px #1a202c, 2px 2px #f9f4da'}
          m='6' 
          mb={4}>WELCOME TO MY PORTFOLIO
        </Heading>
          <Text fontSize="2xl" textAlign="center">Hi, I'm <span style={{ fontSize: "2rem", fontWeight: "bold" }}>Cyril</span>, and I look forward to working with <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>you</span>.</Text>

          <HStack spacing={20} marginTop={50} justify="center">
          <Button
            width="150px"
            bg="#fcba28"
            color="#1a202c"
            _hover={{
              bg: "#f0f25a",
              color: "#1a202c"
            }}>Hard skills
          </Button>
          <Button
            width="150px"
            bg="#049dc9"
            color="#1a202c"
            _hover={{
              bg: "#8fdbf2",
              color: "#1a202c"
            }}>My projects
          </Button>
          <Button
            width="150px"
            bg={
            router.pathname === '/components/Resume' 
            ? (colorMode === "light" ? '#1a202c' : '#f9f4da') 
            : '#f73b68'
            }
            color={
            router.pathname === '/components/Resume' 
            ? (colorMode === "light" ? '#f9f4da' : '#1a202c') 
            : '#1a202c'
            }
            _hover={{
              bg: router.pathname === '/components/Resume'
              ? (colorMode === "light" ? '#1a202c' : '#f9f4da') 
              : '#ed809a',
              color: "#1a202c"
            }}
            pointerEvents={router.pathname === '/components/Resume' ? 'none' : 'auto'}>
          <Link
            href="./components/Resume"
            textDecoration="none"
            _hover={{textDecoration: "none"}}
            color={
            router.pathname === '/components/Resume' 
            ? (colorMode === "light" ? '#f9f4da' : '#1a202c') 
            : '#1a202c'
            }
            disabled={router.pathname === '/components/Resume'}>
            Resume
          </Link>
          </Button>
          <Button
            width="150px"
            bg="#02ad59"
            color="#1a202c"
            _hover={{
              bg: "#51d695",
              color: "#1a202c"
            }}>Soft skills
          </Button>
          <Button
            width="150px"
            bg="#f55e0a"
            color="#1a202c"
            _hover={{
              bg: "#f58445",
              color: "#1a202c"
            }}>Contacts
          </Button>
          </HStack>

          <IconButton
            variant='unstyled'
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            position="absolute"
            top={5}
            right={5}
          />
        </Box>
      </VStack>
  )
}

export default Header;