import { Box, VStack, Icon, Button, useColorMode, useColorModeValue, Heading, Image, ButtonGroup } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../styles/theme';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.backgroundDark);
  const color = useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark);
  const orange = theme.colors.brand.primary;

  return (
    <Box 
      bg={bg} 
      h="100vh" 
      w="250px" 
      position="fixed" 
      left={0} 
      top={0}
      borderRight="1px"
      borderColor={orange}
    >
      <VStack spacing={6} align="center" p={4}>
        <Box className="logo-container">
          <Image 
            src="/images/coolimage.gif" 
            alt="Cool" 
            className="rounded-image"
            mb={4}
          />
          <Heading size="md" color={orange} mb={6}>TECozens</Heading>
        </Box>
        
        <VStack spacing={4} w="100%">
          <Button 
            as={RouterLink} 
            to="/" 
            w="100%"
            variant='outline' 
            border='1px' 
            borderColor={orange} 
            _hover={{bg: useColorModeValue('gray.200', 'gray.700')}}
            style={{color}}
          >
            Home
          </Button>
          <Button 
            as={RouterLink} 
            to="/repositories" 
            w="100%"
            variant='outline' 
            border='1px' 
            borderColor={orange} 
            _hover={{bg: useColorModeValue('gray.200', 'gray.700')}}
            style={{color}}
          >
            Repositories
          </Button>
          <Button 
            as={RouterLink} 
            to="/resume" 
            w="100%"
            variant='outline' 
            border='1px' 
            borderColor={orange} 
            _hover={{bg: useColorModeValue('gray.200', 'gray.700')}}
            style={{color}}
          >
            Resume
          </Button>
          <Button 
            as={RouterLink} 
            to="/contact" 
            w="100%"
            variant='outline' 
            border='1px' 
            borderColor={orange} 
            _hover={{bg: useColorModeValue('gray.200', 'gray.700')}}
            style={{color}}
          >
            Contact
          </Button>
        </VStack>

        <Button onClick={toggleColorMode} mt="auto">
          <Icon as={useColorModeValue(SunIcon, MoonIcon)} />
        </Button>
      </VStack>
    </Box>
  );
};

export default Navbar;