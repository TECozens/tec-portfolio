import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, Box, Badge } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../../../styles/theme';

export const ProjectCard = ({ project }) => {
  const bg = useColorModeValue('#FFFFFF', '#2A2A2A');
  const hoverBg = useColorModeValue('#F8F8F8', '#323232');
  
  return (
    <Card 
      bg={bg}
      _hover={{ 
        bg: hoverBg,
        transform: 'translateY(-2px)',
        boxShadow: 'xl'
      }} 
      // ... rest of the styling
    >
      <CardHeader>
        <Heading size='md'>{project.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{project.description}</Text>
        <Box display='flex' justifyContent='space-between'>
          <Badge>{project.language}</Badge>
          <Text>⭐ {project.stargazers_count}</Text>
        </Box>
      </CardBody>
    </Card>
  );
}; 