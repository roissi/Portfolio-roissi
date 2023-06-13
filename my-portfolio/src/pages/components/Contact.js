import React from 'react';
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Flex, Image, Link, Grid, Input, Heading, Text, Textarea } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = async (data) => {
    const response = await fetch('https://formspree.io/f/xwkjgkpl', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // if the submission was successful, reset the form
      reset();
      alert('Thank you for your message! I will get back to you soon.');
    } else {
      alert('Something went wrong while submitting the form. Please try again.');
    }
  };

  return (
    <Box py={10} textAlign="center" letterSpacing="wide">
    <Heading 
      as="h2" 
      size="3xl" 
      style={{
        textShadow: `-1px 0 #f55e0a, 0 1px #f55e0a, 5px 0 #f55e0a, 0 -5px #f55e0a`
      }}
      id="contact" // Déplacez l'ID vers le composant de titre
      paddingTop="100px" // Ajoute un rembourrage supérieur à l'élément.
      marginTop="-100px" // Déplace l'élément vers le haut de la même quantité pour masquer le rembourrage lorsque vous faites défiler la page normalement.
      bg="transparent" // Assure que le rembourrage est invisible.
    >
      CONTACT
  </Heading>
  <Grid templateColumns={["repeat(1, 1fr)", "1.5fr 1fr"]} gap={2} px={4} mx="auto">
    <Box w="100%" textAlign="center" p={20}>
      <Text fontSize="2xl" letterSpacing="wide" mb={4}>
      Please, leave a message so I can better understand your needs in creating, redesigning and optimizing websites and mobile applications on both front-end and back-end. <Text>You're also welcome to visit my social media pages and my profile on marketplace platforms like Malt, where I offer my services.</Text><Text>Again, sincerely, I look forward to working with you.</Text>
      </Text>
      <Flex justifyContent="center" mt={20}>
        <Link href="https://www.malt.fr/profile/yourusername" isExternal mx={35}>
        <Image
          src={isHovered ? "/Malt_logo_hover.png" : (colorMode === 'dark' ? "/Malt_logo_darkmode.png" : "/Malt_logo_lightmode.png")}
          alt="Malt logo"
          width="170px"
          height="auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        </Link>
        <Link href="https://github.com/roissi" isExternal mx={35}>
          <Box as={FaGithub} size="60px" _hover={{ color: "#f55e0a" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/cyril-de-graeve/" isExternal mx={35}>
          <Box as={FaLinkedin} size="60px" _hover={{ color: "#f55e0a" }} />
        </Link>
        <Link href="https://twitter.com/roissi" isExternal mx={35}>
          <Box as={FaTwitter} size="60px" _hover={{ color: "#f55e0a" }} />
        </Link>
      </Flex>
    </Box>

    <Box textAlign="left" p={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
          <Input {...register('name', { required: 'Please enter your name.' })} w="100%" bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"} color="#0e1a29" _focus={{ borderColor: "#f55e0a", boxShadow: "none" }} />
          {errors.name && <p>{errors.name.message}</p>}
        </FormControl>

        <FormControl id="organisation" mt={4}>
        <FormLabel>Organisation</FormLabel>
          <Input {...register('organisation')} w="100%" bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"} color="#0e1a29" _focus={{ borderColor: "#f55e0a", boxShadow: "none" }} />
          {errors.organisation && <p>{errors.organisation.message}</p>}
        </FormControl>

        <FormControl id="email" mt={4} isRequired>
        <FormLabel>Email address</FormLabel>
          <Input type="email" {...register('email', { required: 'Please enter your email address.' })} w="100%" bg={colorMode === "dark" ? "#f9f4da" : "#e0daba"} color="#0e1a29" _focus={{ borderColor: "#f55e0a", boxShadow: "none" }} />
          {errors.email && <p>{errors.email.message}</p>}
        </FormControl>

        <FormControl id="message" mt={4} isRequired>
        <FormLabel>Message</FormLabel>
          <Textarea
          {...register('message', { required: 'Please enter your message.' })}
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
            Submit
          </Button>
      </form>
    </Box>
  </Grid>
    </Box>
  );
};

export default ContactForm;