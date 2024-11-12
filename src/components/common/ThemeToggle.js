import React from 'react';
import { IconButton, useColorMode, Icon } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import theme from '../../styles/theme';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const orange = theme.colors.brand.primary;

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={
        colorMode === 'light' 
          ? <Icon as={MoonIcon} w={6} h={6} /> 
          : <Icon as={SunIcon} w={6} h={6} />
      }
      onClick={toggleColorMode}
      position="fixed"
      top="6"
      right="6"
      size="lg"
      color={orange}
      bg="transparent"
      _hover={{
        transform: 'rotate(360deg)',
        bg: `${orange}20`,
      }}
      transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      borderRadius="full"
      zIndex="1000"
      p={4}
    />
  );
};

export default ThemeToggle; 