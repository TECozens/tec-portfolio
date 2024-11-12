import React, { useState, useEffect } from 'react';
import { Text, VStack, useColorModeValue } from '@chakra-ui/react';
import theme from '../../styles/theme';

export const TypewriterText = ({ texts = [], delay = 35 }) => {
  const [displayTexts, setDisplayTexts] = useState(Array(texts.length).fill(''));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const textColor = useColorModeValue(
    theme.colors.brand.text, 
    theme.colors.brand.textDark
  );

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayTexts(prev => {
            const newTexts = [...prev];
            newTexts[currentTextIndex] = currentText.slice(0, currentCharIndex + 1);
            return newTexts;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }
  }, [currentTextIndex, currentCharIndex, texts, delay]);

  return (
    <VStack align="flex-start" spacing={2}>
      {displayTexts.map((text, index) => (
        <Text key={index} color={textColor} fontSize="lg">
          {text}
        </Text>
      ))}
    </VStack>
  );
}; 