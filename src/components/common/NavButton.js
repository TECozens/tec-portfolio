import React, { useState } from 'react';
import { Button, Icon, Text, HStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../../styles/theme';

const NavButton = ({ icon: IconComponent, children, isActive, isExpanded = true, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const orange = theme.colors.brand.primary;
  
  const bgColor = useColorModeValue('white', theme.colors.brand.backgroundDark);
  const hoverBg = useColorModeValue(orange, 'white');
  const textColor = useColorModeValue('black', 'white');
  const hoverTextColor = useColorModeValue('white', 'black');
  const iconColor = useColorModeValue(orange, 'white');
  const hoverIconColor = useColorModeValue('white', orange);

  return (
    <Button
      w="100%"
      variant="solid"
      bg={bgColor}
      border="1px"
      borderColor={orange}
      _hover={{
        bg: hoverBg,
        transform: 'translateX(5px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="all 0.3s ease"
      h="auto"
      py={3}
      px={isExpanded ? 4 : 2}
      {...props}
    >
      <HStack w="100%" spacing={4} justify={isExpanded ? "flex-start" : "center"}>
        <IconComponent 
          color={isHovered ? hoverIconColor : iconColor} 
          boxSize="20px"
          transition="color 0.3s ease"
        />
        {isExpanded && (
          <Text
            color={isHovered ? hoverTextColor : textColor}
            transition="color 0.3s ease"
          >
            {children}
          </Text>
        )}
      </HStack>
    </Button>
  );
};

export default NavButton;