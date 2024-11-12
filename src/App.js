import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import ThemeToggle from './components/common/ThemeToggle';
import { Box, Flex, useBreakpointValue, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import theme from './styles/theme';
import { NavbarProvider, useNavbar } from './context/NavbarContext';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { PageTransition } from './components/common/PageTransition';
import Home from './components/Pages/Home';
import Repositories from './components/Pages/Repositories';
import Contact from './components/Pages/Contact';

function AppContent() {
  const { isExpanded } = useNavbar();
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const location = useLocation();
  
  return (
    <Flex h="100vh" overflow="hidden">
      {isMobile && !isExpanded && (
        <Box className="nav-touch-area">
          <Box className="nav-handle" />
        </Box>
      )}
      <Navbar />
      <Box 
        as="main"
        flex="1"
        ml={{ 
          base: "0",
          sm: isExpanded ? "250px" : "80px" 
        }}
        overflowY="auto"
        position="relative"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        pt={{ base: "60px", sm: 0 }}
      >
        <ThemeToggle />
        <Box position="relative">
          <AnimatePresence mode="wait" initial={false}>
            <PageTransition key={location.pathname}>
              <RouterRoutes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/repositories" element={<Repositories />} />
                <Route path="/contact" element={<Contact />} />
              </RouterRoutes>
            </PageTransition>
          </AnimatePresence>
        </Box>
      </Box>
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>  
      <Router>
        <NavbarProvider>
          <AppContent />
        </NavbarProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;