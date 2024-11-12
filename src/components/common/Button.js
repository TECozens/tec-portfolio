import { Button as ChakraButton } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../../styles/theme';

export const Button = ({ children, ...props }) => {
  const color = useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark);
  const orange = theme.colors.brand.primary;

  return (
    <ChakraButton
      variant='outline'
      border='1px'
      borderColor={orange}
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
        transform: 'translateY(-2px)'
      }}
      transition="all 0.2s"
      style={{ color }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}; 