import React from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Card, 
  Image, 
  Link,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { 
  EmailIcon, 
  PhoneIcon, 
  ViewIcon, 
  AtSignIcon 
} from '@chakra-ui/icons';
import theme from '../../styles/theme';

const ContactLink = ({ icon: Icon, text, href }) => (
  <Link 
    href={href} 
    isExternal 
    _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
    transition="all 0.2s"
  >
    <HStack 
      spacing={3} 
      p={4} 
      bg={useColorModeValue(theme.colors.brand.secondary, theme.colors.brand.secondaryDark)}
      borderRadius="lg"
      _hover={{ 
        bg: useColorModeValue(theme.colors.brand.accent, theme.colors.brand.accentDark),
        transform: 'translateY(-2px)',
        boxShadow: 'lg'
      }}
    >
      <Icon color={theme.colors.brand.primary} boxSize={5} />
      <Text color={useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark)}>
        {text}
      </Text>
    </HStack>
  </Link>
);

const Contact = () => {
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.backgroundDark);
  const cardBg = useColorModeValue(theme.colors.brand.secondary, theme.colors.brand.cardDark);
  
  return (
    <Box bg={bg} minH="100vh" p={5}>
      <Box maxW="container.md" mx="auto">
        <Card 
          p={8} 
          borderRadius="xl" 
          boxShadow="xl"
          bg={cardBg}
          border="1px"
          borderColor={theme.colors.brand.primary}
          borderLeft="4px"
        >
          <VStack spacing={8} align="stretch">
            <VStack spacing={4}>
              <Box position="relative">
                <Box
                  position="absolute"
                  inset="-4"
                  bg={useColorModeValue(theme.colors.brand.accent, theme.colors.brand.accentDark)}
                  borderRadius="full"
                  filter="blur(40px)"
                  opacity="0.6"
                  zIndex={0}
                />
                <Image 
                  src="/images/profile.jpg"
                  alt="Profile" 
                  borderRadius="full" 
                  boxSize="150px"
                  border="4px solid"
                  borderColor={theme.colors.brand.primary}
                  position="relative"
                  zIndex={1}
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.02)' }}
                />
              </Box>
              <Heading size="xl" color={theme.colors.brand.primary}>Let's Connect</Heading>
              <Text 
                fontSize="lg" 
                textAlign="center" 
                color={useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark)}
              >
                I'm always open to discussing new projects, opportunities, and collaborations.
              </Text>
            </VStack>

            <VStack spacing={4} width="100%">
              <ContactLink 
                icon={EmailIcon}
                text="TECozens@gmail.com"
                href="mailto:TECozens@gmail.com"
              />
              <ContactLink 
                icon={PhoneIcon}
                text="+44 7940279564"
                href="tel:+44 7940279564"
              />
              <ContactLink 
                icon={ViewIcon}
                text="GitHub Profile"
                href="https://github.com/TECozens"
              />
              <ContactLink 
                icon={AtSignIcon}
                text="LinkedIn Profile"
                href="https://www.linkedin.com/in/tomas-cozens/"
              />
            </VStack>
          </VStack>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;