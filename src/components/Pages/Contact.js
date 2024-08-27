import React from 'react';
import { Box, Heading, Text, Card, Image } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box p={4} maxW="container.md" mx="auto">
    <Card p={5} boxShadow="md" borderRadius="md">
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Image src="https://www.svgrepo.com/show/75578/avatar.svg" alt="Contact Avatar" borderRadius="full" boxSize="100px" />
      </Box>
      <Heading as="h1" size="xl" mb={3}>Contact</Heading>
      <Text mb={2}>Please reach out to me if you have any offers for Internships or Full-time positions.</Text>
      <Text mb={2}>Email: example@example.com</Text>
      <Text>Phone: +1234567890</Text>
    </Card>
    </Box>
  );
};

export default Contact;