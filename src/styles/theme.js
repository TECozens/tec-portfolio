import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    lightGray: '#e2e2e2', // Light mode background color
    darkGray: '#161616',   // Dark mode background color
    orange: '#c97327',     // Vibrant color for both modes
    primaryLight: '#ffffff',  // White for light mode contrast enhancement
    primaryDark: '#000000',   // Black for dark mode contrast enhancement
    secondaryLight: '#f3f3f3', // Additional light mode color (same as lightGray)
    secondaryDark: '#292525'   // Additional dark mode color (same as darkGray)
  }
};

const fonts = {
  body: 'Monaco, Consolas, monospace',
  heading: 'Monaco, Consolas, serif',
};

const config = {
  initialColorMode: 'light', // Set the default to light mode
  useSystemColorMode: false,  // Disable system color preference detection
};

const theme = extendTheme({ 
  colors, 
  fonts, 
  config, 
      styles: {
          global: (props) => ({
            body: {
                bg: props.colorMode === 'dark' ? colors.brand.darkGray : colors.brand.lightGray
            }
          })
      }
  });

export default theme;