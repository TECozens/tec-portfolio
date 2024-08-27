// src/components/Projects/Project.js
import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, Box, WrapItem} from '@chakra-ui/react';

const Project = ({ project }) => {
  return (
    <WrapItem spacing='30px'>
            <Card key={project.id}>
                    <CardHeader>
                        <Heading size='md'>{project.name}</Heading>
                    </CardHeader>

                    <CardBody>
                        <Text>{project.description || 'No description available'}</Text>
                        <Box display='flex' justifyContent='space-between' mt={2}>
                                <Text fontSize='sm'>Language: {project.language}</Text>
                                <Text fontSize='sm'>Stars: {project.stargazers_count}</Text>
                        </Box>
                    </CardBody>
            </Card>
    </WrapItem>
  );
};

export default Project;
