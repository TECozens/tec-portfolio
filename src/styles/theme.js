import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#FF6B00',     // Half-Life orange
    // Light mode colors
    background: '#FFFFFF',   // Clean white background
    secondary: '#EBEBEB',   // Light gray
    tertiary: '#D1D1D1',    // Medium gray for hover states
    text: '#1A1A1A',        // Nearly black for text
    // Dark mode colors
    backgroundDark: '#0D0D0D', // Nearly black background
    secondaryDark: '#1A1A1A',  // Dark gray
    tertiaryDark: '#2E2E2E',   // Medium gray for hover
    cardDark: '#1A1A1A',       // Card background in dark mode
    textDark: '#EBEBEB',       // Light gray text for dark mode
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