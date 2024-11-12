import React from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  VStack, 
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { NameStack } from './NameStack';
import { TypewriterText } from '../common/TypewriterText';
import { ActionButton } from '../common/ActionButton';
import { DownloadButton } from '../common/DownloadButton';
import theme from '../../styles/theme';

const Hero = () => {
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.backgroundDark);
  const cardBg = useColorModeValue(theme.colors.brand.secondary, theme.colors.brand.cardDark);
  const accentBg = useColorModeValue(theme.colors.brand.accent, theme.colors.brand.accentDark);

  const texts = [
    "Machine Learning & AI Student passionate about creating innovative solutions",
    "Exploring the intersection of artificial intelligence and software development",
    "Thankyou for visiting my portfolio, this is a work in progress and I will be updating it with new projects so keep an eye out and feel free to reach out to me!"
  ];

  return (
    <Box 
      bg={bg} 
      minH="100vh" 
      py={10}
      px={{ base: 4, md: 10 }}
    >
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          align="center" 
          justify="space-between"
          gap={8}
          mt={{ base: 16, md: 0 }}
        >
          <Box 
            flex={1} 
            bg={cardBg}
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="xl"
            borderLeft="4px"
            borderColor={theme.colors.brand.primary}
            w="100%"
          >
            <VStack align="flex-start" spacing={8}>
              <NameStack />
              <TypewriterText texts={texts} />
              <Flex 
                gap={4} 
                direction={{ base: 'column', sm: 'row' }}
                w={{ base: '100%', sm: 'auto' }}
              >
                <ActionButton />
                <DownloadButton />
              </Flex>
            </VStack>
          </Box>

          <Box 
            position="relative"
            flex={1}
            maxW={{ base: "250px", lg: "400px" }}
            mt={{ base: 8, lg: 0 }}
          >
            <Box
              position="absolute"
              inset="-4"
              bg={accentBg}
              borderRadius="full"
              filter="blur(40px)"
              opacity="0.6"
              zIndex={0}
            />
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              borderRadius="full"
              border="4px solid"
              borderColor={theme.colors.brand.primary}
              position="relative"
              zIndex={1}
              transition="transform 0.3s ease"
              _hover={{ transform: 'scale(1.02)' }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;