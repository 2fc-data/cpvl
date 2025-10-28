import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

export const Footer = () => (
  <Box
    component="footer"
    color="white"
    border={0}
    borderRadius={4}
    py={5}
    px={3}
    mt={6}
    sx={{
      background: 'radial-gradient(ellipse at center, #0d325c, #1f5388)'
    }}
  >
    <Grid
      container
      spacing={4}
      maxWidth="lg"
      mx="auto"
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Grid item xs={12} md={3} sx={{ lineHeight: '2.1' }}>
        <Typography variant="h6" mb={2} fontFamily="Flamenco, system-ui">
          Institucional
        </Typography>
        <Link
          fontFamily="Flamenco, system-ui"
          href="/direction"
          color="inherit"
          underline="hover"
          display="block"
        >
          Diretoria
        </Link>
        <Link
          fontFamily="Flamenco, system-ui"
          href="/airspace"
          color="inherit"
          underline="hover"
          display="block"
        >
          Espaço aéreo
        </Link>
        <Link
          fontFamily="Flamenco, system-ui"
          href="/statute"
          color="inherit"
          underline="hover"
          display="block"
        >
          Estatuto
        </Link>
        <Link
          fontFamily="Flamenco, system-ui"
          href="/regiment"
          color="inherit"
          underline="hover"
          display="block"
        >
          Regimento Interno
        </Link>
        <Link
          fontFamily="Flamenco, system-ui"
          href="/about"
          color="inherit"
          underline="hover"
          display="block"
        >
          Sobre
        </Link>
      </Grid>
      <Grid item xs={12} md={3} sx={{ lineHeight: '2.1' }}>
        <Typography variant="h6" mb={2} fontFamily="Flamenco, system-ui">
          Rampa
        </Typography>
        <Typography mb={1.5} fontFamily="Flamenco, system-ui">
          <Link
            fontFamily="Flamenco, system-ui"
            href="https://www.google.com/maps/@-21.7716455,-46.5746857,17z?entry=ttu"
            color="inherit"
            underline="hover"
          >
            Mapa
          </Link>
        </Typography>
        <Typography mb={1.5} fontFamily="Flamenco, system-ui">
          WP: -21.7715658,-46.5749861
        </Typography>
        <Typography mb={1.5} fontFamily="Flamenco, system-ui">
          Altitude: 1480m
        </Typography>
        <Typography mb={1.5} fontFamily="Flamenco, system-ui">
          Desnível: 400m
        </Typography>
        <Typography mb={1.5} fontFamily="Flamenco, system-ui">
          Quadrante: S | NE | N | NW
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} sx={{ lineHeight: '2.1' }}>
        <Typography variant="h6" mb={2} fontFamily="Flamenco, system-ui">
          Mídias Sociais
        </Typography>
        <Link
          fontFamily="Flamenco, system-ui"
          href="https://facebook.com/cpvlpocos/"
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="hover"
          display="block"
        >
          Facebook
        </Link>
        <Link
          fontFamily="Flamenco, system-ui"
          href="https://instagram.com/cpvloficial"
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="hover"
          display="block"
        >
          Instagram
        </Link>
      </Grid>
    </Grid>
    <Typography textAlign="center" mt={4} fontFamily="Flamenco, system-ui">
      © Clube Poçoscaldense de Vôo Livre - CPVL
    </Typography>
  </Box>
);
