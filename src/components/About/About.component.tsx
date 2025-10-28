import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Baiano from '../../assets/images/baianoVoandoSul.jpg';
import Alvara from '../../assets/images/alvará_cpvl.jpg';

export const About: React.FC = () => {
  const [hoveredBaiano, setHoveredBaiano] = useState(false);
  const [hoveredAlvara, setHoveredAlvara] = useState(false);

  // function translate3d(arg0: number, arg1: number, arg2: number): import("@mui/system").SystemStyleObject<import("@mui/material").Theme> | (string | number) | ((theme: import("@mui/material").Theme) => string | number | import("@mui/system").SystemStyleObject<import("@mui/material").Theme>) | import("@mui/system/styleFunctionSx").ResponsiveStyleValue<...> | ((theme: import("@mui/material").Theme) => import("@mui/system/styleFunctionSx").ResponsiveStyleValue<...>) {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        mb: 30,
        px: 2,
        color: '#424242',
        minHeight: '81vh'
      }}
    >
      <Grid container spacing={0}>
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
            História CPVL
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            lineHeight={2}
            paragraph
            textAlign="justify"
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="400"
          >
            Paulo Sérgio Trevisan, em 1976, jovem aventureiro, inteligente e
            ousado, natural da nossa querida Poços de Caldas, decidiu realizar
            seu sonho de voar. Sempre com muita admiração ele observava e
            desfrutava da Serra de São Domingos, localizada ao norte da cidade,
            e um belo dia percebeu que já tinha o local de decolagem, só faltava
            a asa.
          </Typography>

          <Typography
            lineHeight={2}
            paragraph
            textAlign="justify"
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="400"
          >
            Em 12/12/1976, ele fez sua própria Asa Delta e decolou da rampa Sul
            (quadrantes S e SE) da Serra de São Domingos, local denominado hoje
            rampa do Arteninho, em homenagem ao piloto Artenio Z. Filho. Já a
            rampa Norte é denominada rampa do Baiano (quadrantes N e NE), em
            homenagem ao nosso amigo Paulo Sérgio Trevisan.
          </Typography>

          <Typography
            lineHeight={2}
            paragraph
            textAlign="justify"
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="400"
          >
            Em 1992, Luís Pasquale começou a voar de parapente, em 1993 formou a
            primeira turma de pilotos de parapente e em 1995, já com 20 alunos,
            fundou o Clube Poçoscaldense de Vôo Livre - CPVL.
          </Typography>

          <Typography
            lineHeight={2}
            paragraph
            textAlign="justify"
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="400"
          >
            No início de 2023, nosso espaço de decolagens na serra de São
            Domingos, através de um{' '}
            <a href="/docs/edital.pdf">edital de licitação da prefeitura</a>,
            tornou-se uma concessão da empresa CITUR, a qual trouxe inovações e
            melhorias na infraestrutura da rampa norte.{' '}
            <a href="/docs/contrato.pdf">Contrato</a>
          </Typography>
        </Grid>

        {/* Segunda linha: Duas imagens em duas colunas */}
        <Grid
          item
          xs={12}
          sm={6}
          mt={6}
          sx={{
            // transform: translate3d(0, 0, 0),
            transform: hoveredBaiano ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={Baiano}
            alt="Baiano"
            style={{ width: '100%', height: 'auto' }}
            onMouseEnter={() => setHoveredBaiano(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredBaiano(false)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          mt={6}
          sx={{
            transform: hoveredAlvara ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={Alvara}
            alt="Alvará CPVL"
            style={{ width: '100%', height: 'auto' }}
            onMouseEnter={() => setHoveredAlvara(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredAlvara(false)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
