import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Repositories from './components/Pages/Repositories';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>  
      <Router>
        <Box display="flex">
          <Navbar/>
          <Box ml="250px" w="calc(100% - 250px)" minH="100vh">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/repositories" element={<Repositories />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;