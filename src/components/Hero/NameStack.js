import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
import theme from '../../styles/theme';

export const NameStack = () => {
  return (
    <Stack spacing={0}>
      <Heading size={{ base: "xl", md: "2xl" }}>
        <Text as="span" color={theme.colors.brand.primary}>T</Text>omas
      </Heading>
      <Heading size={{ base: "xl", md: "2xl" }}>
        <Text as="span" color={theme.colors.brand.primary}>E</Text>wan
      </Heading>
      <Heading size={{ base: "xl", md: "2xl" }}>
        <Text as="span" color={theme.colors.brand.primary}>C</Text>ozens
      </Heading>
    </Stack>
  );
}; 