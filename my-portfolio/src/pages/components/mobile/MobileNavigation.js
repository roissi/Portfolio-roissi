import { Box, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, Center, DrawerCloseButton, DrawerHeader, DrawerBody, Button, VStack, useColorMode, Switch, Text } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function MobileNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  
  const [currentPath, setCurrentPath] = useState("");
  
  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

return (
  <Box display={{ base: "block", md: "none" }}>
  <IconButton
    variant="outline"
    onClick={onOpen}
    icon={<HamburgerIcon />}
  />
  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4}>
            <Link href="/#hard-skills" passHref>
              <Button as="a" bg="#fcba28" color="#0e1a29" onClick={onClose}>Hard Skills</Button>
            </Link>
            <Link href="/#my-projects" passHref>
              <Button as="a" bg="#049dc9" color="#0e1a29" onClick={onClose}>Works</Button>
            </Link>
            <Link href="/components/Resume" passHref>
              <Button 
                as="a"
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
                onClick={onClose}
              >
                Resume
              </Button>
            </Link>
            <Link href="/#soft-skills" passHref>
              <Button as="a" bg="#02ad59" color="#0e1a29" onClick={onClose}>Soft Skills</Button>
            </Link>
            <Link href="/#contact" passHref>
              <Button as="a" bg="#f55e0a" color="#0e1a29" onClick={onClose}>Contacts</Button>
            </Link>
              </VStack>
              <Center display="flex" alignItems="center" mt={10}>
                <Text mr={3}>
                  {colorMode === 'light' ? 'Select dark mode' : 'Select light mode'}
                </Text>
                <Switch color="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
              </Center>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default MobileNavigation;