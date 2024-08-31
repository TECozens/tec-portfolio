import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import SwitchView from '../ResumeMenu/SwitchView'; // Adjust the import path as necessary
import ResumeMenu from '../ResumeMenu/ResumeMenu';

const Resume = () => {
    const [selectedView, setSelectedView] = useState('Experience');

    return (
    <Box p={4} display="flex">
      <Box flex="1" mr={8}>
          <Heading as="h1" size="xl">Resume</Heading>
                <Text fontSize="lg">Machine Learning & AI (AI/ML) Student at the University of South Wales</Text>
                <ResumeMenu onSelect={setSelectedView} />
            </Box>
      <Box flex="2">
                {/* SwitchView based on selected view */}
                <SwitchView view={selectedView} />
      </Box>
    </Box>
  );
};

export default Resume;