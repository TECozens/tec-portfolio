import React from 'react';
import { Box, Button, Stack, Divider } from '@chakra-ui/react';

const ResumeMenu = ({ onSelect }) => {
    const menuItems = ['Experience', 'Education', 'Skills', 'About Me'];
    
    return (
        <Stack spacing={4}>
            <Divider/>
            {menuItems.map((item, index) => (
                <Button align="center" key={index}  onClick={() => onSelect(item)}>{item}</Button>
            ))}
        </Stack>
    );
};

export default ResumeMenu;