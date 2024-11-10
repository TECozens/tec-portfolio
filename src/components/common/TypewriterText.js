import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

const TypewriterText = ({ text, delay = 50, color }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <Text color={color}>{displayText}</Text>;
};

export default TypewriterText; 