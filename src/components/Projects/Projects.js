import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Project from './Project/Project';
import { SimpleGrid } from '@chakra-ui/react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/TECozens/repos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <SimpleGrid 
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 4, md: 6 }}
      w="100%"
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </SimpleGrid>
  );
};

export default Projects;
