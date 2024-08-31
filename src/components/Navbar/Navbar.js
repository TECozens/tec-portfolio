import { Box, Flex, Icon, Button, useColorMode, useColorModeValue, Heading, Image, ButtonGroup } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';
import theme from '../../styles/theme'; // Ensure this path is correct
import { MoonIcon, SunIcon } from '@chakra-ui/icons'; // Import the appropriate icons from Chakra UI or wherever they are defined

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue(theme.colors.brand.primaryLight, theme.colors.brand.darkGray);
  const color = useColorModeValue('black', 'white');
  const orange = theme.colors.brand.orange;

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Box className="logo-container">
            <Image src="/images/coolimage.gif" alt="Cool" className="rounded-image" />
          </Box>
        </Box>
        <Flex alignItems={'center'} ml={4}>
          <Heading style={{ marginRight: '20px', color: orange }}>TECozens</Heading>
          <ButtonGroup>
              <Button as={RouterLink} to="/" rounded={'md'} variant='outline' border='1px' borderColor={orange} _hover={{bg: useColorModeValue('gray.200', 'gray.700') }} style={{color}}>
                Home
              </Button>
              <Button as={RouterLink} to="/resume" rounded={'md'} variant='outline'  border='1px' borderColor={orange} _hover={{bg: useColorModeValue('gray.200', 'gray.700') }} style={{color}}>
                Resume
              </Button>
              <Button as={RouterLink} to="/contact" rounded={'md'} variant='outline' border='1px' borderColor={orange} _hover={{bg: useColorModeValue('gray.200', 'gray.700') }} style={{ color }}>
                Contact
              </Button>
          </ButtonGroup>
          <Button onClick={toggleColorMode} ml={4}>
            <Icon as={useColorModeValue(SunIcon, MoonIcon)} /> 
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;