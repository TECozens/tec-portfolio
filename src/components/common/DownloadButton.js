import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import theme from '../../styles/theme';

export const DownloadButton = () => {
  const handleDownload = () => {
    // Assuming the PDF is in the public folder
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Tomas_Cozens_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      leftIcon={<Icon as={DownloadIcon} w={5} h={5} />}
      onClick={handleDownload}
      size="lg"
      bg={theme.colors.brand.primary}
      color="white"
      _hover={{
        transform: 'translateY(-2px)',
        bg: theme.colors.brand.primary,
        opacity: 0.9
      }}
      transition="all 0.2s"
      boxShadow="lg"
    >
      Download CV
    </Button>
  );
}; 