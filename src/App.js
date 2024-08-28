import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './styles/theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </ChakraProvider>
  );
}

export default App;