import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Logo from '../../assets/images/cpvlLogoVet1.png';
import { Navbar } from '../Navbar';

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        zIndex: 1201
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link
            component={RouterLink}
            to="/home"
            underline="none"
            sx={{ alignItems: 'center', display: 'flex', margin: '9px 0' }}
          >
            <img src={Logo} alt="CPVL Logo" style={{ height: 90 }} />
          </Link>
        </Box>

        <Box>
          <Navbar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
