import React from 'react';
import { VStack, Stack, Flex, Box, Text } from '@chakra-ui/react';
import { PageContainer } from '../../layout/PageContainer';
import { Button } from '../../common/Button';
import { TypewriterText } from '../../common/TypewriterText';
import { ProfileImage } from './ProfileImage';
import { NameStack } from './NameStack';

export const Hero = () => {
  return (
    <PageContainer>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={8}>
        <VStack align="flex-start" spacing={8} flex={1}>
          <NameStack />
          <VStack align="flex-start" spacing={4}>
            <TypewriterText 
              texts={[
                "Machine Learning & AI Student passionate about creating innovative solutions",
                "Exploring the intersection of artificial intelligence and software development"
              ]}
            />
            <Button as={RouterLink} to="/repositories" size="lg">
              View My Work
            </Button>
          </VStack>
        </VStack>
        <ProfileImage />
      </Flex>
    </PageContainer>
  );    
}; 