import React from 'react';
import { Box } from '@chakra-ui/react';
import theme from '../../styles/theme';

const LambdaLogo = ({ size = "40px" }) => {
  const orange = theme.colors.brand.primary;
  
  return (
    <Box
      position="relative"
      width={size}
      height={size}
      transform="rotate(0deg)"
      _hover={{
        transform: "rotate(360deg)",
      }}
      transition="transform 0.5s ease-in-out"
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5 L80 80 L65 80 L50 40 L35 80 L20 80 L50 5"
          fill={orange}
          strokeWidth="2"
        />
      </svg>
    </Box>
  );
};

export default LambdaLogo; 