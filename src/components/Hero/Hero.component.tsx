import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import heroImage0 from '../../assets/images/hero_00.jpg';
import heroImage1 from '../../assets/images/hero_01.jpg';
import heroImage2 from '../../assets/images/hero_02.jpg';
import heroImage3 from '../../assets/images/hero_03.jpg';
import heroImage4 from '../../assets/images/hero_04.jpg';

const images = [heroImage0, heroImage1, heroImage2, heroImage3, heroImage4];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height={1200}
      position="relative"
      overflow="hidden"
      mb={2}
      mt={0}
      sx={{ zIndex: 0 }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '81%',
            opacity: currentImageIndex === index ? 1 : 0,
            transform: currentImageIndex === index ? 'scale(1.1)' : 'scale(1)',
            transition: 'opacity 2s ease-in-out, transform 9s ease-in-out',
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}

      <Box
        position="relative"
        zIndex={2}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textAlign="center"
        p={0}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{
            fontSize: {
              xs: '1.8rem',
              sm: '2.4rem',
              md: '2.8rem'
            }
          }}
        >
          Clube Poçoscaldense de Vôo Livre
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{
            fontSize: {
              xs: '0.9rem',
              sm: '1.1rem',
              md: '1.3rem'
            }
          }}
        >
          Desafios, Conquistas, Conhecimento e Responsabilidade.
        </Typography>
      </Box>
    </Box>
  );
};
