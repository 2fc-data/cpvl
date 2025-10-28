import React, { useState } from 'react';
import { Box, Typography, Divider, Grid, Link } from '@mui/material';
import dir_2025 from '../../assets/images/ata_diretoria_2024-2025.jpg';

interface DirectionItem {
  periodo: string;
  presidente: string;
  vice: string;
  tesoureiro: string;
  diretorTecnico: string;
  diretorSocial: string;
  ata: string;
}

const directionList: DirectionItem[] = [
  {
    periodo: '2024/2025',
    presidente: 'Gilberto Raposo',
    vice: 'Cássio Sarti',
    tesoureiro: 'Cláudio Lellis',
    diretorTecnico: 'Gustavo Borges',
    diretorSocial: 'Gustavo Garcia',
    ata: '/docs/ata_diretoria_2024-2025.pdf'
  },
  {
    periodo: '2021/2023',
    presidente: 'Cristiano Ricci',
    vice: 'Juliano de Vito',
    tesoureiro: 'Fernando C. Filho',
    diretorTecnico: 'Walter Moraes',
    diretorSocial: 'Leonardo Santos',
    ata: '/docs/ata_diretoria_2021-2023.pdf'
  },
  {
    periodo: '2020/2022',
    presidente: 'Renan Braz',
    vice: 'Rinaldo Marcondes',
    tesoureiro: 'Ricardo Galo',
    diretorTecnico: 'Cristiano Ricci',
    diretorSocial: 'Walter Moraes',
    ata: '/docs/ata_diretoria_2020-2022.pdf'
  }
];

export const Direction: React.FC = () => {
  const [hoveredDirection, setHoveredDirection] = useState(false);

  return (
    <Box
      mx="auto"
      mt={1}
      mb={0}
      px={5}
      py={10}
      color="#ccc"
      bgcolor="#222222"
      sx={{ minHeight: '81vh' }}
    >
      <Grid container spacing={3} mb={3}>
        {/* Primeira linha: Título à esquerda e texto à direita */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            alignItems: 'center',
            display: 'flex',
            pr: 4
          }}
        >
          <Typography
            variant="h4"
            mb={6}
            fontSize="42px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
            sx={{ textShadow: '2px 2px 3px rgba(255, 255, 255, 0.3)' }}
          >
            Diretoria
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pr: 1,
            transform: hoveredDirection ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={dir_2025}
            alt="Diretoria 2025"
            style={{ width: '100%' }}
            onMouseEnter={() => setHoveredDirection(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredDirection(false)}
          />
        </Grid>
      </Grid>

      {directionList.map(
        ({
          periodo,
          presidente,
          vice,
          tesoureiro,
          diretorTecnico,
          diretorSocial,
          ata
        }) => (
          <Box key={periodo} mb={4}>
            <Grid container spacing={3} alignItems="flex-start">
              {/* Coluna 1 - Período */}
              <Grid item xs={12} sm={4} textAlign={'center'}>
                <Typography
                  lineHeight={2}
                  variant="h5"
                  fontSize="24px"
                  fontFamily="Flamenco, system-ui"
                  fontWeight="300"
                  mb={1}
                >
                  {periodo}
                </Typography>
              </Grid>

              {/* Coluna 2 - Nomes */}
              <Grid item xs={12} sm={4}>
                <Typography
                  lineHeight={2}
                  fontSize="18px"
                  fontFamily="Flamenco, system-ui"
                  fontWeight="300"
                >
                  <strong>Presidente:</strong> {presidente}
                </Typography>
                <Typography
                  lineHeight={2}
                  fontSize="18px"
                  fontFamily="Flamenco, system-ui"
                  fontWeight="300"
                >
                  <strong>Vice Presidente:</strong> {vice}
                </Typography>
                <Typography
                  lineHeight={2}
                  fontSize="18px"
                  fontFamily="Flamenco, system-ui"
                  fontWeight="300"
                >
                  <strong>Tesoureiro:</strong> {tesoureiro}
                </Typography>
                <Typography
                  lineHeight={2}
                  fontSize="18px"
                  fontFamily="Flamenco, system-ui"
                  fontWeight="300"
                >
                  <strong>Diretor Técnico:</strong> {diretorTecnico}
                </Typography>
                <Typography
                  lineHeight={2}
                  fontSize="18px"
                  fontFamily="Flamenco, system-ui"
                  fontWeight="300"
                >
                  <strong>Diretor Social:</strong> {diretorSocial}
                </Typography>
              </Grid>

              {/* Coluna 3 - Link de Download */}
              <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                {ata && (
                  <Link
                    href={ata}
                    download
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#ccc' }}
                  >
                    <Typography lineHeight={2}>Ata</Typography>
                  </Link>
                )}
              </Grid>
            </Grid>
            <Divider sx={{ bgcolor: '#ccc', mt: 2 }} />
          </Box>
        )
      )}
    </Box>
  );
};
