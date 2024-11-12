import React, { useEffect } from 'react';
import { 
  Box, 
  VStack, 
  useColorModeValue, 
  Heading, 
  IconButton,
  Collapse,
  Tooltip,
  useBreakpointValue
} from '@chakra-ui/react';
import { 
  ViewIcon,
  CalendarIcon,
  ChatIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HamburgerIcon
} from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import theme from '../../styles/theme';
import NavButton from '../common/NavButton';
import LambdaLogo from '../common/LambdaLogo';
import { useNavbar } from '../../context/NavbarContext';
import { useSwipeGesture } from '../../hooks/useSwipeGesture';

const Navbar = () => {
  const { isExpanded, setIsExpanded } = useNavbar();
  const isMobile = useBreakpointValue({ base: true, sm: false });
  
  useSwipeGesture(
    () => isMobile && setIsExpanded(false), // onSwipeLeft
    () => isMobile && setIsExpanded(true),  // onSwipeRight
    30 // lower threshold for better response
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 480) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsExpanded]);

  const bg = useColorModeValue(
    theme.colors.brand.background, 
    theme.colors.brand.navbarDark
  );
  const orange = theme.colors.brand.primary;
  const location = useLocation();

  const NAV_ITEMS = [
    { path: '/', label: 'Home', icon: ViewIcon },
    { path: '/repositories', label: 'Repositories', icon: CalendarIcon },
    { path: '/contact', label: 'Contact', icon: ChatIcon },
  ];

  const Backdrop = () => (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blackAlpha.600"
      display={{ base: isExpanded ? 'block' : 'none', sm: 'none' }}
      onClick={() => setIsExpanded(false)}
      zIndex={900}
    />
  );

  return (
    <>
      <Backdrop />
      <Box 
        bg={bg} 
        h="100vh" 
        w={isExpanded ? "250px" : "80px"} 
        position="fixed" 
        left={0} 
        top={0}
        borderRight="1px"
        borderColor={orange}
        boxShadow="2xl"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        transform={{
          base: isExpanded ? "translateX(0)" : "translateX(-100%)",
          sm: "translateX(0)"
        }}
        zIndex="1000"
        sx={{
          '@media (hover: none)': {
            touchAction: 'pan-y',
            WebkitOverflowScrolling: 'touch',
          }
        }}
      >
        <IconButton
          aria-label="Toggle navbar"
          icon={isMobile ? <HamburgerIcon /> : (isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />)}
          position="absolute"
          right={isMobile ? "-40px" : "-12px"}
          top={isMobile ? "4" : "50%"}
          transform={isMobile ? "none" : "translateY(-50%)"}
          onClick={() => setIsExpanded(!isExpanded)}
          color={useColorModeValue(orange, 'white')}
          bg={useColorModeValue('white', theme.colors.brand.backgroundDark)}
          borderRadius="full"
          border="1px"
          borderColor={orange}
          boxShadow="md"
          zIndex="1001"
          _hover={{
            bg: orange,
            color: 'white',
          }}
        />

        <VStack spacing={6} align="center" p={4}>
          <Box className="logo-container">
            <LambdaLogo size={isExpanded ? "80px" : "40px"} />
            <Collapse in={isExpanded}>
              <Heading size="md" color={orange} mb={6}>TECozens</Heading>
            </Collapse>
          </Box>
          
          <VStack spacing={4} w="100%">
            {NAV_ITEMS.map((item) => (
              <Tooltip
                key={item.path}
                label={item.label}
                placement="right"
                isDisabled={isExpanded}
              >
                <Box w="100%">
                  <NavButton
                    as={RouterLink}
                    to={item.path}
                    icon={item.icon}
                    isActive={location.pathname === item.path}
                    aria-label={item.label}
                    isExpanded={isExpanded}
                  >
                    {item.label}
                  </NavButton>
                </Box>
              </Tooltip>
            ))}
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default Navbar;