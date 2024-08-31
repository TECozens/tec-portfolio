// src/Components/About/About.js
import React from 'react';
import { 
  Box,
  Heading,
  useColorModeValue,
  Divider
} from '@chakra-ui/react';
import Projects from '../Projects/Projects';
import theme from '../../styles/theme';



/**
 The `About` component is a simple React functional component that renders an about page.
 It uses Chakra UI for styling and layout, specifically the Box and Heading components.
 **/
const Home = () => {
  const bg = useColorModeValue(theme.colors.brand.lightGray, theme.colors.brand.primaryDark);
  const bg2 = useColorModeValue(theme.colors.brand.secondaryLight, theme.colors.brand.secondaryDark);
  return (
    <Box bg={bg2} p={5}>
      <Box p={4}>
        <Heading>
            Repositories
        </Heading>
      </Box>
      <Box bg={bg} p={5} style={{overflowY: 'auto', height: '100vh'}} rounded={'xl'}>
        <Projects/>
      </Box>
    </Box>
  );
};

export default Home;