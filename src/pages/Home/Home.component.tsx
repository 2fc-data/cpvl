import React from 'react';
import { Box } from '@mui/material';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Direction } from '../../components/Direction';
import { Airspace } from '../../components/Airspace/Airspace.component';
import { Statute } from '../../components/Statute';
import { Regiment } from '../../components/Regiment';

export const Home = () => (
  <Box textAlign="justify">
    <Hero />
    <About />
    <Direction />
    <Airspace />
    <Statute />
    <Regiment />
  </Box>
);
