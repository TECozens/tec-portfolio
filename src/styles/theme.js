import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#FF6B00',     // Half-Life orange
    // Light mode colors
    background: '#E2E2E2',   // Darker gray background
    secondary: '#FFFFFF',    // White for cards
    tertiary: '#D1D1D1',    // Darker gray for hover states
    text: '#1A1A1A',        // Nearly black for text
    accent: '#FFE5D4',      // Light orange accent
    cardBg: '#FFFFFF',      // White for card backgrounds
    
    // Dark mode colors
    backgroundDark: '#121212', // Dark background
    secondaryDark: '#1E1E1E',  // Darker gray for cards
    tertiaryDark: '#2A2A2A',   // Medium gray for hover states
    cardDark: '#242424',       // Card background in dark mode
    textDark: '#F5F5F5',       // Off-white for better readability
    accentDark: '#2E1500',     // Dark orange accent
    navbarDark: '#1A1A1A'      // Navbar background in dark mode
  }
};

const fonts = {
  body: 'Monaco, Consolas, monospace',
  heading: 'Monaco, Consolas, serif',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ 
  colors,
  fonts,
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? colors.brand.backgroundDark : colors.brand.background,
        color: props.colorMode === 'dark' ? colors.brand.textDark : colors.brand.text,
      }
    })
  },
  components: {
    Card: {
      baseStyle: (props) => ({
        bg: props.colorMode === 'dark' ? colors.brand.cardDark : colors.brand.background,
        color: props.colorMode === 'dark' ? colors.brand.textDark : colors.brand.text,
        boxShadow: 'lg',
        borderRadius: 'xl',
      })
    },
    Button: {
      baseStyle: (props) => ({
        _hover: {
          bg: props.colorMode === 'dark' ? colors.brand.tertiaryDark : colors.brand.tertiary,
        }
      })
    }
  }
});

export default theme;