import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    lightGray: '#f0f0f0',
    darkGray: '#292525',
    orange: '#c97327',
    primaryLight: '#292525', // Light mode color for contrast enhancement
    primaryDark: '#e9d8d8',  // Dark mode color for contrast enhancement
    secondaryLight: '#292525', // Additional light mode color
    secondaryDark: '#e9d8d8'   // Additional dark mode color
  }
};

const fonts = {
  body: 'Monaco, Consolas, monospace',
  heading: 'Monaco, Consolas, serif',
};

const config = {
  initialColorMode: 'system', // Set the default to light mode
  useSystemColorMode: true,  // Disable system color preference detection
};
const theme = extendTheme({ colors, fonts, config });

export default theme;