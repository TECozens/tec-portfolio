import { Box, Flex, Link, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';
import theme from '../../styles/theme'; // Ensure this path is correct

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue(theme.colors.brand.lightGray, theme.colors.brand.darkGray);
  const color = useColorModeValue('black', 'white');
  const primaryText = useColorModeValue(theme.colors.brand.primaryLight, theme.colors.brand.primaryDark);
  const secondaryText = useColorModeValue(theme.colors.brand.secondaryLight, theme.colors.brand.secondaryDark);

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <div className="logo-container">
            <img src="/images/coolimage.gif" alt="Cool" className="rounded-image" />
          </div>
        </Box>
        <Flex alignItems={'center'} ml={4}>
          <h1 style={{ marginRight: '20px', color: primaryText }}>TECozens</h1>
          <Link as={RouterLink} to="/" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }} style={{ color: secondaryText }}>
            Home
          </Link>
          <Link as={RouterLink} to="/resume" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }} style={{ color: secondaryText }}>
            Resume
          </Link>
          <Link as={RouterLink} to="/contact" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }} style={{ color: secondaryText }}>
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