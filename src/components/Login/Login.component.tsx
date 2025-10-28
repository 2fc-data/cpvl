import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { API, getURI } from '../../services';
import { useFetch } from '../../hooks';

interface ILoginBody {
  username: string;
  password: string;
}

interface IApiResponse {
  status: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useLocalStorage(
    process.env.REACT_APP_LOGGED_KEY,
    false
  );
  const [loginBody, setLoginBody] = useState<ILoginBody>({
    username: '',
    password: ''
  });
  const {
    doFetch: doLogin,
    data,
    error
  } = useFetch<IApiResponse>({ method: 'POST' });
  const [formError, setFormError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  const clearErrorMessage = useCallback(() => setFormError(undefined), []);

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = target;
      setLoginBody((prevState) => ({
        ...prevState,
        [name]: value.trim()
      }));
      clearErrorMessage();
    },
    [clearErrorMessage]
  );

  const handleLogin = useCallback(() => {
    if (!loginBody.username || !loginBody.password) {
      return setFormError('Preencha os campos corretamente');
    }
    setIsLoading(true);
    doLogin({ url: getURI(API.login), body: loginBody });
  }, [doLogin, loginBody]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
      setFormError(
        error.message === 'Unauthorized'
          ? 'Usuário ou senha incorretos'
          : error.message
      );
    }
    if (data && data.status === 'ok') {
      setIsLogged(true);
    }
  }, [error, data, setIsLogged]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '84vh'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          CPVL
        </Typography>
        <Typography variant="body2" align="center" mb={4}>
          Bem-vindo ao portal de serviços administrativos. Entre com o seu
          usuário e senha para continuar.
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            variant="outlined"
            value={loginBody.username}
            name="username"
            label="Usuário"
            onChange={handleChange}
            onFocus={clearErrorMessage}
            fullWidth
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            variant="outlined"
            value={loginBody.password}
            name="password"
            type="password"
            label="Senha"
            onChange={handleChange}
            onFocus={clearErrorMessage}
            fullWidth
          />
        </Box>

        <Button
          disabled={isLoading}
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          size="large"
          sx={{ bgcolor: '#1f5388', marginBottom: 2 }}
        >
          Entrar
        </Button>

        {formError && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {formError}
          </Alert>
        )}

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2">
            <Link
              to="/rescuePassword"
              style={{ textDecoration: 'underline', color: '#1f5388' }}
            >
              Esqueceu a senha?
            </Link>
          </Typography>
        </Box>

        <Box sx={{ marginTop: 1 }}>
          <Typography variant="body2">
            Não tem conta?{' '}
            <Link
              to="/signup"
              style={{ textDecoration: 'underline', color: '#1f5388' }}
            >
              Cadastre-se
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
