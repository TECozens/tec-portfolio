import { Card as ChakraCard } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../../styles/theme';

export const Card = ({ children, ...props }) => {
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.cardDark);
  const color = useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark);

  return (
    <ChakraCard
      bg={bg}
      color={color}
      boxShadow="lg"
      borderRadius="xl"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'xl'
      }}
      transition="all 0.2s ease-in-out"
      {...props}
    >
      {children}
    </ChakraCard>
  );
}; 