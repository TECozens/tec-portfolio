import React from 'react';
import { 
  Box, 
  Heading, 
  Button, 
  VStack, 
  useColorModeValue,
  Image,
  Container,
  Flex,
  Stack,
  keyframes,
  Text,
} from '@chakra-ui/react';
import TypewriterText from '../common/TypewriterText';
import theme from '../../styles/theme';
import { Link as RouterLink } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
  const textColor = useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark);
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.backgroundDark);
  const animation = `${fadeIn} 1s ease-out`;
  
  return (
    <Box bg={bg} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={8}>
          <VStack align="flex-start" spacing={8} flex={1}>
            <Stack spacing={0} animation={animation}>
              <Heading size="2xl">
                <Text as="span" color={theme.colors.brand.primary}>T</Text>omas
              </Heading>
              <Heading size="2xl">
                <Text as="span" color={theme.colors.brand.primary}>E</Text>wan
              </Heading>
              <Heading size="2xl">
                <Text as="span" color={theme.colors.brand.primary}>C</Text>ozens
              </Heading>
            </Stack>
            
            <VStack align="flex-start" spacing={4}>
              <TypewriterText 
                text="Machine Learning & AI Student passionate about creating innovative solutions"
                color={textColor}
                delay={30}
              />
              <TypewriterText 
                text="Exploring the intersection of artificial intelligence and software development"
                color={textColor}
                delay={30}
              />
              <Button 
                as={RouterLink}
                to="/repositories"
                colorScheme="orange"
                size="lg"
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                opacity="0"
                animation={`${fadeIn} 1s ease-out 3s forwards`}
              >
                View My Work
              </Button>
            </VStack>
          </VStack>
          
          <Box 
            flex={1} 
            position="relative"
            animation={animation}
          >
            <Image 
              src="/images/hero.jpg"
              alt="Hero Image"
              borderRadius="full"
              boxSize={{ base: "300px", md: "400px" }}
              objectFit="cover"
              border="3px solid"
              borderColor={theme.colors.brand.primary}
              mx="auto"
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.3s ease-in-out",
              }}
              transition="all 0.3s ease-in-out"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;