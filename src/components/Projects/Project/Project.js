// src/components/Projects/Project/Project.js
import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, Box, Link, Badge } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import theme from '../../../styles/theme';

const Project = ({ project }) => {
  const bg = useColorModeValue(theme.colors.brand.background, theme.colors.brand.cardDark);
  const hoverBg = useColorModeValue(theme.colors.brand.tertiary, theme.colors.brand.tertiaryDark);
  const textColor = useColorModeValue(theme.colors.brand.text, theme.colors.brand.textDark);

  return (
    <Box spacing='30px' p={4}>
      <Link href={project.html_url} isExternal _hover={{ textDecoration: 'none' }}>
        <Card 
          bg={bg}
          color={textColor}
          _hover={{ 
            bg: hoverBg,
            transform: 'translateY(-2px)',
            boxShadow: 'xl'
          }} 
          transition="all 0.2s ease-in-out"
        >
          <CardHeader>
            <Heading size='md' color={theme.colors.brand.primary}>{project.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={4}>{project.description || 'No description available'}</Text>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Badge colorScheme='orange'>{project.language}</Badge>
              <Text fontSize='sm'>⭐ {project.stargazers_count}</Text>
            </Box>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};

export default Project;
