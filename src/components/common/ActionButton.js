import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../styles/theme';

export const ActionButton = () => {
  return (
    <Button
      as={RouterLink}
      to="/repositories"
      size="lg"
      bg={theme.colors.brand.primary}
      color="white"
      _hover={{
        transform: 'translateY(-2px)',
        bg: theme.colors.brand.primary,
        opacity: 0.9
      }}
      transition="all 0.2s"
      boxShadow="lg"
    >
      View My Projects
    </Button>
  );
}; 