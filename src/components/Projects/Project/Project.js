// src/components/Projects/Project/Project.js
import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, Box, Link } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const Project = ({ project }) => {
  // Define hover style using color mode value
  const hoverStyle = useColorModeValue({ bg: 'gray.100' }, { bg: 'gray.700' });

  return (
          <Box spacing='30px' p={4} >
                <Link href={project.html_url} isExternal>
                <Card key={project.id} _hover={hoverStyle} transition="background-color 0.3s ease">
                        <CardHeader>
            <                   Heading size='md'>{project.name}</Heading>
                        </CardHeader>
                        <CardBody>
                                <Text>{project.description || 'No description available'}</Text>
                                <Box display='flex' justifyContent='space-between' mt={2}>
                                        <Text fontSize='sm'>Language: {project.language}</Text>
                                        <Text fontSize='sm'>Stars: {project.stargazers_count}</Text>
                                </Box>
                        </CardBody>
                </Card>
                </Link>
        </Box>
  );
};

export default Project;
