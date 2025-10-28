import React, { useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import EspacoAereoCPVL from '../../assets/docs/EspacoAereoCPVL.jpg';
import EspacoAereoCPVL1 from '../../assets/images/EspacoAereoCPVL1.jpg';
import EspacoAereoCPVL_SulMinas1 from '../../assets/images/EspacoAereoCPVL_SulMinas1.jpg';
import EspacoAereoCPVL_SulMinas2 from '../../assets/images/EspacoAereoCPVL_SulMinas2.png';

export const Airspace: React.FC = () => {
  const [hoveredCPVL, setHoveredCPVL] = useState(false);
  const [hoveredCPVLeRegiao, setHoveredCPVLeRegiao] = useState(false);
  const [hoveredCPVLeRegiao1, setHoveredCPVLeRegiao1] = useState(false);

  return (
    <Box
      mx="auto"
      mt={0}
      mb={5}
      px={5}
      py={10}
      color="#424242"
      sx={{ minHeight: '81vh' }}
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
            Espaço Aéreo
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
            Desde 1986, o Código Brasileiro de Aeronáutica estabelece que o
            aerodesporto deverá ser praticado em áreas determinadas pela
            autoridade aeronáutica.
          </Typography>

          <Typography
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Por isso, a prática só é regular quando realizada dentro do Espaço
            Aéreo Condicionado (EAC), em áreas geralmente estabelecidas por
            SBR´s ou NOTAM destinadas ao aerodesporto e disponíveis no site do
            Departamento de Controle de Espaço Aéreo (DECEA).
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={0} mt={5}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            transform: hoveredCPVL ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={EspacoAereoCPVL1}
            alt="Espaço Aéreo CPVL"
            style={{ width: '100%', height: 'auto' }}
            onMouseEnter={() => setHoveredCPVL(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredCPVL(false)}
          />
          <Typography
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Espaço Aéreo CPVL
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            transform: hoveredCPVLeRegiao ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={EspacoAereoCPVL_SulMinas1}
            alt="Espaço Aéreo CPVL e Região"
            style={{ width: '100%', height: 'auto' }}
            onMouseEnter={() => setHoveredCPVLeRegiao(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredCPVLeRegiao(false)}
          />
          <Typography
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Espaço Aéreo CPVL e Região
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            mt: 5,
            transform: hoveredCPVLeRegiao1 ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={EspacoAereoCPVL_SulMinas2}
            alt="Espaço Aéreo CPVL e Região Sul de Minas Gerais"
            style={{ width: '100%', height: 'auto' }}
            onMouseEnter={() => setHoveredCPVLeRegiao1(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredCPVLeRegiao1(false)}
          />
          <Typography
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Espaço Aéreo Poços de Caldas, Andradas, Cambuí, Sta Rita do Sapucaí
            e Albertina.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} mt={5} p={1}>
          <Typography
            gutterBottom
            variant="h5"
            textAlign={'justify'}
            fontSize="30px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Documento Regulamentar
          </Typography>
          <img
            src={EspacoAereoCPVL}
            alt="Documento Espaço Aéreo"
            style={{ width: '100%', height: 'auto' }}
            onMouseEnter={() => setHoveredCPVL(true)} // Quando o mouse entra
            onMouseLeave={() => setHoveredCPVL(false)}
          />
        </Grid>

        <Grid item xs={12} sm={6} mt={5} p={1}>
          <Typography
            gutterBottom
            variant="h5"
            textAlign={'justify'}
            fontSize="30px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Baixe os way points:
          </Typography>
          <Typography
            gutterBottom
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Flymaster e XCTrack
            <ul>
              <li>
                <Link
                  href={
                    '/wp/flymaster-xctrack/espaco-aereo-condicionado-permanente-sul-de-minas.air'
                  }
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
                    CPVL e Região
                  </Typography>
                </Link>
              </li>

              <li>
                <Link
                  href={'/wp/flymaster-xctrack/SBD326-PicodoGaviao.air'}
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
                    Pico do Gavião - MG
                  </Typography>
                </Link>
              </li>

              <li>
                <Link
                  href={'/wp/flymaster-xctrack/SBD357-PocosdeCaldasMG.air'}
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
                    Pocos de Caldas - MG
                  </Typography>
                </Link>
              </li>

              <li>
                <Link
                  href={'/wp/flymaster-xctrack/SBD425-CambuiMG.air'}
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
                    Cambuí - MG
                  </Typography>
                </Link>
              </li>

              <li>
                <Link
                  href={'/wp/flymaster-xctrack/SBR456-SantaRitadoSapucaiMG.air'}
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
                    Santa Rita do Sapucaí - MG
                  </Typography>
                </Link>
              </li>

              <li>
                <Link
                  href={'/wp/flymaster-xctrack/SBR492-AlbertinaMG.air'}
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
                    Albertina - MG
                  </Typography>
                </Link>
              </li>
            </ul>
          </Typography>

          <Typography
            gutterBottom
            lineHeight={2}
            paragraph
            textAlign={'justify'}
            fontSize="18px"
            fontFamily="Flamenco, system-ui"
            fontWeight="300"
          >
            Naviter
            <ul>
              <li>
                <Link
                  href={
                    '/wp/flymaster-xctrack/espaco-aereo-condicionado-permanente-sul-de-minas.air'
                  }
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
                    CPVL e Região
                  </Typography>
                </Link>
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
