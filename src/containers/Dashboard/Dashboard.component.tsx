import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import MainNav from '../../components/MainNav';
import { API, getURI } from '../../services';
import { IAllowedRoutes } from '../../components/MainNav/MainNav.component';
import { Box, Typography } from '@mui/material';
import { useFetch } from '../../hooks';
import { Outlet, useNavigate } from 'react-router-dom';

export const DashboardHome = () => {
  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="body1" textAlign="center">
        Utilize o menu para acessar os serviços.
      </Typography>
    </Box>
  );
};

const Dashboard = () => {
  const { data: allowedRoutes } = useFetch<IAllowedRoutes[]>({
    url: getURI(API.profile)
  });
  const [, setIsLogged] = useLocalStorage(
    process.env.REACT_APP_LOGGED_KEY,
    false
  );
  const navigate = useNavigate();

  const doLogout = useCallback(() => {
    setIsLogged(false);
    navigate('/home');
  }, [setIsLogged, navigate]);

  const navTo = useCallback(
    (link: IAllowedRoutes) => {
      navigate(link.route);
    },
    [navigate]
  );

  if (!allowedRoutes) return null;

  return (
    <>
      <MainNav
        onLogout={doLogout}
        allowedRoutes={allowedRoutes}
        onNav={navTo}
      ></MainNav>
      <Box sx={{ paddingTop: '50px' }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Dashboard;
