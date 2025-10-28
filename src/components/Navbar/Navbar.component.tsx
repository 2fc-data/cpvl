import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button } from '@mui/material';
import { ParaglidingTwoTone } from '@mui/icons-material';

const MenuItems = [
  {
    title: 'Associados',
    icon: (
      <ParaglidingTwoTone
        sx={{
          color: '#1f5388'
        }}
      />
    ),
    link: '/login'
  }
];

export const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 0 }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0'
        }}
      >
        <Box sx={{ display: { sm: 'flex' } }}>
          {MenuItems.map((item) => (
            <Button
              key={item.title}
              sx={{ color: '#424242' }}
              component={RouterLink}
              to={item.link}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {item.icon}
                <Box sx={{ marginLeft: 1 }}>{item.title}</Box>
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};
