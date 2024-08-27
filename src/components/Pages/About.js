// src/Components/About/About.js
import React from 'react';
import { 
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

/**
The `About` component is a simple React functional component that renders an about page.
It uses Chakra UI for styling and layout, specifically the Box and Heading components.
**/
const About = () => {
  return (
    <Box>
      <Heading as="h1" size="xl">About</Heading>
      <Text fontSize="lg">
        Machine Learning & AI (AI/ML) Student at the University of South Wales
      </Text>
    </Box>
  );
};

export default About;