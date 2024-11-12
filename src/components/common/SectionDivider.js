import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import theme from '../../styles/theme';

const SectionDivider = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  
  return (
    <Box 
      w="100%" 
      h="1px" 
      bg={bgColor}
      my={8}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '3px',
        bg: theme.colors.brand.primary,
        bottom: '-1px',
      }}
    />
  );
};

export default SectionDivider; 