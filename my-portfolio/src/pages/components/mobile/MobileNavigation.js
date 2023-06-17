import { Box, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, Center, DrawerCloseButton, DrawerHeader, DrawerBody, Button, VStack, useColorMode, Switch, Text } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
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

  const handleClick = (href) => {
    router.push(href);
    onClose();
    window.scrollTo(0, 0);
  }

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
                <Button bg="#fcba28" color="#0e1a29" onClick={() => handleClick('/#hard-skills')}>Hard Skills</Button>
                <Button bg="#049dc9" color="#0e1a29" onClick={() => handleClick('/#my-projects')}>Works</Button>
                <Button bg="#f73b68" color="#0e1a29" onClick={() => handleClick('/components/Resume')}>Resume</Button>
                <Button bg="#02ad59" color="#0e1a29" onClick={() => handleClick('/#soft-skills')}>Soft Skills</Button>
                <Button bg="#f55e0a" color="#0e1a29" onClick={() => handleClick('/#contact')}>Contacts</Button>
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