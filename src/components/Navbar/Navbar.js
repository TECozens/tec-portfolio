import { Box, Flex, Link, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('blue.300', 'blue.900');
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <div className="logo-container">
            <img src="/images/coolimage.gif" alt="Cool" className="rounded-image" />
          </div>
        </Box>
        <Flex alignItems={'center'} ml={4}>
          <h1 style={{ marginRight: '20px' }}>TECozens</h1>
          <Link as={RouterLink} to="/" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>
            Contact
          </Link>
          <Button onClick={toggleColorMode} ml={4}>
            Toggle {useColorModeValue('Dark', 'Light')}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;