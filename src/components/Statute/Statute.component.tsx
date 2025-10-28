import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';

export const Statute: React.FC = () => {
  return (
    <Box
      maxWidth={1200}
      mx="auto"
      my={20}
      px={2}
      color="#424242"
      sx={{ minHeight: '50vh' }}
    >
      <Grid container spacing={3}>
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
          >
            Estatuto
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Na Assembleia Geral Extraordinária (AGE) de 20 de novembro de 2023,
            foram definidos os tópicos, anteriormente debatidos na AGE de
            21/09/2023. Assim, o Clube Poçoscaldense de Vôo Livre - CPVL tem um
            novo Estatuto aprovado na gestão 2022/2023 e registrado em cartório
            no dia 21 de novembro de 2023.
          </Typography>
          <Typography
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            O CPVL agradece a todos que contribuíram para a atualização do
            estatuto e reforça que a participação dos associados nas assembleias
            é de extrema importância, pois entende que todos têm algo a
            contribuir com o clube.
          </Typography>

          <Link
            href={'/docs/EstatutoCPVL_2023.pdf'}
            download
            target="_blank"
            sx={{ textDecoration: 'none', color: '#1f5388' }}
          >
            <Typography
              lineHeight={2}
              fontSize="18px"
              fontFamily="Flamenco, system-ui"
              fontWeight="300"
            >
              Estatuto 2023
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
