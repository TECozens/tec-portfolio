import React from 'react';
import { 
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import Projects from '../Projects/Projects';
import theme from '../../styles/theme';

const Repositories = () => {
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.backgroundDark);
  const containerBg = useColorModeValue(theme.colors.brand.secondary, theme.colors.brand.secondaryDark);
  
  return (
    <Box bg={containerBg} p={5} minH="100vh">
      <Box p={4}>
        <Heading 
          color={theme.colors.brand.primary} 
          mb={6}
          size="2xl"
        >
          Repositories
        </Heading>
      </Box>
      <Box 
        bg={bg} 
        p={6} 
        rounded={'xl'}
        boxShadow="xl"
      >
        <Projects/>
      </Box>
    </Box>
  );
};

export default Repositories;