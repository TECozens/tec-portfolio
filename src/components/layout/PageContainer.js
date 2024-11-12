import { Box, Container } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../../styles/theme';

export const PageContainer = ({ children, withBackground = true }) => {
  const bg = useColorModeValue(
    theme.colors.brand.background, 
    theme.colors.brand.backgroundDark
  );
  return (
    <Box 
      bg={withBackground ? bg : 'transparent'} 
      minH="100vh" 
      py={{ base: 4, md: 8 }}
      px={{ base: 2, md: 4 }}
    >
      <Container 
        maxW="container.xl"
        px={{ base: 2, sm: 4, md: 6 }}
      >
      </Container>
    </Box>
  );
};