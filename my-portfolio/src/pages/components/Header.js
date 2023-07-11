import React from 'react';
import { Heading, Text, Box, IconButton, useColorMode, useColorModeValue, Flex, VStack, HStack, Button, useBreakpointValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileNavigation from './mobile/MobileNavigation';
import { useTranslation } from 'next-i18next';

const Header = ({ showIntro = true }) => {
  const { t, i18n } = useTranslation('common'); 
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const isFrench = i18n.language === 'fr';
  const changeLanguage = () => {
    let newLang = i18n.language === 'en' ? 'fr' : 'en';
    let { pathname, query } = router;
    
    router.push({ pathname, query }, undefined, { locale: newLang });
  };
  
  const ButtonBackgroundColor = useColorModeValue("#e0daba", "#212e40");
  const ButtonHoverColor = useColorModeValue("#c2bc9c", "#344966");

  const sizeFontIntro = useBreakpointValue({ base: "2xl", md: "2xl" });
  const spaceBeforeWTMP = useBreakpointValue({ base: "8", md: "4" });
  const buttonSpacing = useBreakpointValue({ base: '2%', '865px': '5%', lg: '5%', xl: '5%' });
  const buttonMaxW = useBreakpointValue({ base: "100px", md: "120px", lg: "150px" });

  const [currentPath, setCurrentPath] = React.useState("");

    React.useEffect(() => {
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
          <Text fontSize={sizeFontIntro} textAlign="center" letterSpacing="wide">
            {t('greeting.part1')}
            <Text as="span" fontSize="2rem" fontWeight="bold" lineHeight="1.2">
            {t('greeting.name')}
            </Text>
            {t('greeting.part2')}
            <Text as="span" fontSize="2rem" fontWeight="bold" lineHeight="1.2">
            {t('greeting.you')}
            </Text>
            {t('greeting.part3')}
          </Text>
          <Heading 
            textAlign="center"
            fontSize={{ base: "5xl", sm: "5xl", md: "6xl", lg: "8xl" }}
            letterSpacing="wide"
            textShadow={colorMode === "light" ? '1px 1px #f9f4da, 2px 2px #0e1a29' : '1px 1px #0e1a29, 2px 2px #f9f4da'}
            m={spaceBeforeWTMP} 
            mb={-3}>{t('welcome.portfolio')}
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
              <MobileNavigation isFrench={isFrench} changeLanguage={changeLanguage} />
            ) : (
        <HStack
          spacing={buttonSpacing}
          justify="center"
          width="100%"
          mb={7}
        >
        <Link href="/#hard-skills" passHref>
          <Button
            as="a"
            letterSpacing="wide"
            width={"100%"}
            maxW={buttonMaxW}
            bg="#fcba28"
            color="#0e1a29"
            _hover={{
              bg: "#f0f25a",
              color: "#0e1a29"
            }}
          >
          {t('menu.hardskills')}
          </Button>
        </Link>
        <Link href="/#my-projects" passHref>
          <Button
            as="a"
            letterSpacing="wide"
            width={"100%"}
            maxW={buttonMaxW}
            bg="#049dc9"
            color="#0e1a29"
            _hover={{
              bg: "#8fdbf2",
              color: "#0e1a29"
            }}>
              {t('menu.works')}
            </Button>
          </Link>

          <Link href="/#game" passHref>
            <Button
            as="a"
            letterSpacing="wide"
            width={"100%"}
            maxW={buttonMaxW}
            bg="#f73b68"
            color="#0e1a29"
            _hover={{
              bg: "#ed809a",
              color: "#0e1a29"
            }}>
              {t('menu.game')}
            </Button>
          </Link>

          <Link href="/#soft-skills" passHref>
            <Button
            as="a"
            letterSpacing="wide"
            width={"100%"}
            maxW={buttonMaxW}
            bg="#02ad59"
            color="#0e1a29"
            _hover={{
              bg: "#51d695",
              color: "#0e1a29"
            }}>
            {t('menu.softskills')}
            </Button>
          </Link>
          <Link href="/#contact" passHref>
            <Button
            as="a"
            letterSpacing="wide"
            width={"100%"}
            maxW={buttonMaxW}
            bg="#f55e0a"
            color="#0e1a29"
            _hover={{
              bg: "#f58445",
              color: "#0e1a29"
            }}>
                {t('menu.contact')}
            </Button>
          </Link>
          
          <Button
            onClick={changeLanguage}
            fontSize="xl"
            fontWeight="bold"
            position="absolute"
            top={5}
            right={20}
            backgroundColor={ButtonBackgroundColor}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform .2s",
              backgroundColor: ButtonHoverColor
            }}
          >
            {isFrench ? 'EN' : 'FR'}
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
          )}
          </Flex>
          </Box>
        </Box>
      </VStack>
  )
}

export default Header;