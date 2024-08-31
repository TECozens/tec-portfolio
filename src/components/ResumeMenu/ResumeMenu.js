import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

const ResumeMenu = ({ onSelect }) => {
    const menuItems = ['Experience', 'Education', 'Skills', 'About Me'];
    
    return (
        <VStack spacing={4}>
            {menuItems.map((item, index) => (
                <Box key={index} w="100%" textAlign="center">
                    <Button variant="ghost" onClick={() => onSelect(item)}>{item}</Button>
                </Box>
            ))}
        </VStack>
    );
};

export default ResumeMenu;