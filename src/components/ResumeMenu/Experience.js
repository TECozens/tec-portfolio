import React from 'react';
import { 
    Box,
    Heading,
    Text,
    Card,
    CardHeader,
    CardFooter,
    CardBody
  } from '@chakra-ui/react';


const csvData = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "Chicago" }
];

const Experience = () => {
    return (
      <Box>
        <Heading as="h1" size="xl">Experience</Heading>
        <Text fontSize="lg">
          Tomas has experience in these fields and takes his interests in these areas to heart, always looking for new challenges and opportunities to learn and grow.
        </Text>
        <Card p={2}>
            {csvData.map((row, index) => (
              <CardHeader key={index}>
                    <Heading>{row.name}</Heading>
                    <Text>{row.age}</Text>
                    <Text>{row.city}</Text>
            </CardHeader>
            ))}
        </Card>
        </Box>
        );
    };

export default Experience;