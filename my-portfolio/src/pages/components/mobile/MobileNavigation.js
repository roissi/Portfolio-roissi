import { Box, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, Center, DrawerCloseButton, DrawerHeader, DrawerBody, Button, VStack, useColorMode, Switch, Text } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const MobileNavigation = ({ isFrench, changeLanguage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const { t } = useTranslation('common');
  const [currentPath, setCurrentPath] = React.useState("");
  
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
                <Button bg="#fcba28" color="#0e1a29" onClick={() => handleClick('/#hard-skills')}>{t('mobilemenu.hardskills')}</Button>
                <Button bg="#049dc9" color="#0e1a29" onClick={() => handleClick('/#my-projects')}>{t('mobilemenu.works')}</Button>
                <Button bg="#f73b68" color="#0e1a29" onClick={() => handleClick('/components/Resume')}>{t('mobilemenu.resume')}</Button>
                <Button bg="#02ad59" color="#0e1a29" onClick={() => handleClick('/#soft-skills')}>{t('mobilemenu.softskills')}</Button>
                <Button bg="#f55e0a" color="#0e1a29" onClick={() => handleClick('/#contact')}>{t('mobilemenu.contact')}</Button>
                </VStack>
              <Center display="flex" alignItems="center" mt={10}>
                <Text mr={3}>
                  {colorMode === 'light' ? t('mobilemenu.dark') : t('mobilemenu.light')}
                </Text>
                <Switch color="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
              </Center>
              <Center display="flex" alignItems="center" mt={10}>
                <Text mr={3}>
                  {isFrench ? t('mobilemenu.switchen') : t('mobilemenu.switchfr')}
                </Text>
                <Switch color="blue" isChecked={isFrench} onChange={changeLanguage} />
              </Center>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default MobileNavigation;