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
  { skill: "Juggling", confidence: 25, desc: "Great at juggling" },
  { skill: "Dying", confidence: 30, desc: "Can also die a lot" },
  { skill: "Chilling", confidence: 35, desc: "Super chill dude" }
];

const Education = () => {
    return (
      <Box>
        <Heading as="h1" size="xl">Education</Heading>
        <Text fontSize="lg">
          Tomas has experience in these fields and takes his interests in these areas to heart, always looking for new challenges and opportunities to learn and grow.
        </Text>
        <Card p={2}>
            {csvData.map((row, index) => (
              <CardHeader key={index}>
                    <Heading>{row.skill}</Heading>
                    <Text>{row.confidence}</Text>
                    <Text>{row.desc}</Text>
            </CardHeader>
            ))}
        </Card>
        </Box>
        );
    };

export default Education;