import { Box, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button, VStack, useColorMode } from "@chakra-ui/react";
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
                  <Button as="a">Hard Skills</Button>
                </Link>
                <Link href="/#my-projects" passHref>
                  <Button as="a">Works</Button>
                </Link>
                <Link href="/components/Resume" passHref>
                  <Button 
                    as="a"
                    color={
                      currentPath === '/components/Resume' 
                      ? (colorMode === "light" ? '#f9f4da' : '#0e1a29') 
                      : '#0e1a29'
                    }
                    opacity={currentPath === '/components/Resume' ? '0.6' : '1'}
                    pointerEvents={currentPath === '/components/Resume' ? 'none' : 'auto'}
                  >
                    Resume
                  </Button>
                </Link>
                <Link href="/#soft-skills" passHref>
                  <Button as="a">Soft Skills</Button>
                </Link>
                <Link href="/#contact" passHref>
                  <Button as="a">Contacts</Button>
                </Link>
              </VStack>
              <IconButton
                variant='unstyled'
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                position="absolute"
                top={5}
                right={5}
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default MobileNavigation;