// src/Components/About/About.js
import React from 'react';
import { 
  Box,
  Heading,
  Container
} from '@chakra-ui/react';
import Projects from '../Projects/Projects';
import theme from '../../styles/theme';

/**
The `About` component is a simple React functional component that renders an about page.
It uses Chakra UI for styling and layout, specifically the Box and Heading components.
**/
const Home = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Heading>
        Repositories
      </Heading>
      <Box  p={5} style={{overflowY: 'auto', height: '100vh'}}>
        <Projects/>
      </Box>
    </Container>
  );
};

export default Home;