import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useFetch } from '../../hooks';
import { API, getURI } from '../../services';
import {
  isEmail,
  isNotEmpty,
  isEqualToOtherValue,
  hasMinLength
} from '../../util/validation';

interface IInsertBody {
  name: string;
  cpf: string;
  cellphone: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeStatute: boolean;
  agreeRI: boolean;
  agreeLGPD: boolean;
  username?: string;
}

type ErrorInfo = { status?: number; message: string };

function extractErrorInfo(err: any): ErrorInfo {
  // err pode ser: undefined | string | Error | AxiosError | Fetch error | nosso objeto de retorno
  if (!err) {
    return { message: 'Erro ao conectar com o servidor.' };
  }

  // Axios-like error (err.response)
  if (err.response) {
    const status = err.response.status || err.status || undefined;
    // axios normalmente guarda payload em err.response.data
    const data = err.response.data || err.response;
    let message = 'Erro ao conectar com o servidor.';
    if (typeof data === 'string') message = data;
    else if (data && typeof data === 'object') {
      if (typeof data.message === 'string') message = data.message;
      else if (Array.isArray(data.message)) message = data.message.join(' - ');
      else if (data.error && typeof data.error === 'string')
        message = data.error;
      else message = JSON.stringify(data);
    } else if (err.message) {
      message = err.message;
    }
    return { status, message };
  }

  // Fetch-like where status might be on the object
  if (typeof err === 'object' && (err.status || err.statusCode)) {
    const status = err.status || err.statusCode;
    const message =
      (err.message && String(err.message)) ||
      'Erro ao conectar com o servidor.';
    return { status, message };
  }

  // Simple string or Error
  if (typeof err === 'string') return { message: err };
  if (err instanceof Error) return { message: err.message };

  // Fallback - stringify
  try {
    return { message: JSON.stringify(err) };
  } catch {
    return { message: 'Erro desconhecido.' };
  }
}

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  const initialState: IInsertBody = {
    name: '',
    cpf: '',
    cellphone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeStatute: false,
    agreeRI: false,
    agreeLGPD: false
  };

  const [formState, setFormState] = useState<IInsertBody>(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const [formError, setFormError] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();

  // useFetch hook — assume signature: useFetch<T>({ method }) returns { doFetch, data, error, loading? }
  const {
    doFetch: doAddPilot,
    data,
    error,
    loading
  } = useFetch<any>({ method: 'POST' });

  const stripNonDigits = (value: string) => value.replace(/\D/g, '');

  useEffect(() => {
    // on success
    if (data) {
      setSuccessMessage(
        'Cadastro realizado com sucesso. Você será redirecionado para o login.'
      );
      // opcional: limpar formulário
      setFormState(initialState);

      // após 2s redireciona para login (ou remova se preferir)
      const t = setTimeout(() => {
        navigate('/login');
      }, 2000);

      return () => clearTimeout(t);
    }
    // eslint-disable-next-line
  }, [data, navigate]);

  useEffect(() => {
    if (error) {
      // se seu useFetch devolve error.message
      setFormError(
        typeof error === 'string'
          ? error
          : error!.message
          ? error!.message
          : 'Erro ao criar usuário'
      );
    } else {
      setFormError(undefined);
    }
  }, [error]);

  // manipulador de envio
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setFormError(undefined);
    setSuccessMessage(undefined);

    const {
      name,
      cpf,
      cellphone,
      email,
      password,
      confirmPassword,
      agreeStatute,
      agreeRI,
      agreeLGPD
    } = formState;

    const errorMessages: string[] = [];

    if (!isNotEmpty(name) || !hasMinLength(name, 10)) {
      errorMessages.push('Nome completo deve ter no mínimo 10 caracteres');
    }

    if (!isNotEmpty(cpf) || stripNonDigits(cpf).length !== 11) {
      errorMessages.push('CPF deve ter exatamente 11 dígitos');
    }

    if (!isNotEmpty(cellphone) || stripNonDigits(cellphone).length < 11) {
      errorMessages.push('Telefone deve ter no mínimo 11 dígitos');
    }

    if (!isNotEmpty(email) || !isEmail(email)) {
      errorMessages.push('Digite um E-mail válido');
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errorMessages.push('Senha deve ter no mínimo 6 caracteres');
    }

    if (!isEqualToOtherValue(password, confirmPassword)) {
      errorMessages.push('Senha e Confirmação da Senha devem coincidir');
    }

    if (!agreeStatute) {
      errorMessages.push('Confirme o entendimento do Estatuto CPVL');
    }

    if (!agreeRI) {
      errorMessages.push('Confirme o entendimento do Regimento Interno CPVL');
    }

    if (!agreeLGPD) {
      errorMessages.push('Confirme o entendimento da LGPD');
    }

    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      return;
    }

    const cleanedCpf = stripNonDigits(cpf);
    const cleanedCellphone = stripNonDigits(cellphone);
    const normalizedEmail = String(email).trim().toLowerCase();
    const username = normalizedEmail.includes('@')
      ? normalizedEmail.split('@')[0]
      : normalizedEmail;

    const payload: IInsertBody = {
      ...formState,
      cpf: cleanedCpf,
      cellphone: cleanedCellphone,
      email: normalizedEmail,
      username
    };

    try {
      // Algumas implementações do useFetch retornam o objeto de resposta em vez de lançar.
      const possibleResponse = await doAddPilot({
        url: getURI(API.userAdd),
        body: payload,
        method: 'POST'
      });

      // Se a função do useFetch retorna explicitamente um objeto com status/erro:
      if (
        possibleResponse &&
        (possibleResponse.status || possibleResponse.status === 0)
      ) {
        const status = possibleResponse.status;
        const data = possibleResponse.data || possibleResponse;
        const msg =
          (data && (data.message || data.error)) ||
          possibleResponse.message ||
          'Erro ao conectar com o servidor.';
        if (status >= 400) {
          if (status === 401) {
            setFormError(
              'Não autorizado. Verifique seu token ou faça login novamente.'
            );
          } else {
            setFormError(String(msg));
          }
          return;
        }
        // sucesso
        setSuccessMessage(
          possibleResponse.message ||
            (data && data.message) ||
            'Piloto cadastrado com sucesso'
        );
        setFormState(initialState);
        return;
      }

      // Caso o doAddPilot lance exceção, chegaremos ao catch. Caso contrário, assumimos sucesso:
      setSuccessMessage('Piloto cadastrado com sucesso');
      setFormState(initialState);
    } catch (err: any) {
      const { status, message } = extractErrorInfo(err);
      if (status === 401) {
        setFormError(
          'Não autorizado. Verifique seu token ou faça login novamente.'
        );
      } else {
        setFormError(String(message));
      }
    }
  };

  const handleReset = () => {
    setFormState(initialState);
    setErrors([]);
    setFormError(undefined);
    setSuccessMessage(undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    setFormError(undefined);
    setErrors([]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '81vh',
        backgroundColor: '#f4f6f8'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          boxShadow: 3
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Cadastre-se
        </Typography>
        <Typography variant="body2" align="center" mb={4}>
          Preencha os campos abaixo para criar sua conta.
        </Typography>

        {formError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {formError}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nome completo"
            name="name"
            value={formState.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          <InputMask
            mask="999.999.999-99"
            value={formState.cpf}
            onChange={handleChange}
          >
            {(inputProps: any) => (
              <TextField
                {...inputProps}
                fullWidth
                label="CPF"
                name="cpf"
                variant="outlined"
                margin="normal"
                required
              />
            )}
          </InputMask>

          <InputMask
            mask="(99) 99999-9999"
            value={formState.cellphone}
            onChange={handleChange}
          >
            {(inputProps: any) => (
              <TextField
                {...inputProps}
                fullWidth
                label="Telefone"
                name="cellphone"
                variant="outlined"
                margin="normal"
                required
              />
            )}
          </InputMask>

          <TextField
            fullWidth
            label="E-mail"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Senha"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Confirme a senha"
            name="confirmPassword"
            type="password"
            value={formState.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agreeStatute"
                checked={formState.agreeStatute}
                onChange={handleChange}
              />
            }
            label={
              <Box component="span">
                Li e concordo com o{' '}
                <Link to="/docs/EstatutoCPVL_2023.pdf" download target="_blank">
                  <Typography
                    component="span"
                    lineHeight={2}
                    fontSize="18px"
                    fontFamily="Flamenco, system-ui"
                    fontWeight="400"
                  >
                    Estatuto CPVL
                  </Typography>
                </Link>
              </Box>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agreeRI"
                checked={formState.agreeRI}
                onChange={handleChange}
              />
            }
            label={
              <Box component="span">
                Li e concordo com o{' '}
                <Link
                  to="/docs/RegimentoInternoCPVL_2024.pdf"
                  download
                  target="_blank"
                >
                  <Typography
                    component="span"
                    lineHeight={2}
                    fontSize="18px"
                    fontFamily="Flamenco, system-ui"
                    fontWeight="400"
                  >
                    Regimento Interno CPVL
                  </Typography>
                </Link>
              </Box>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agreeLGPD"
                checked={formState.agreeLGPD}
                onChange={handleChange}
              />
            }
            label={
              <Box component="span">
                Li e concordo com a{' '}
                <Link to="/docs/lgpd_cpvl.pdf" download target="_blank">
                  <Typography
                    component="span"
                    lineHeight={2}
                    fontSize="18px"
                    fontFamily="Flamenco, system-ui"
                    fontWeight="400"
                  >
                    LGPD
                  </Typography>
                </Link>
              </Box>
            }
          />

          {errors.length > 0 && (
            <Box sx={{ marginTop: 2 }}>
              {errors.map((err, idx) => (
                <Alert key={idx} severity="error" sx={{ marginBottom: 1 }}>
                  {err}
                </Alert>
              ))}
            </Box>
          )}

          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              type="button"
              fullWidth
              sx={{ marginBottom: 2 }}
              onClick={handleReset}
              disabled={loading}
            >
              Limpar
            </Button>

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ bgcolor: '#1f5388' }}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={18} /> : undefined}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </Box>
        </form>

        <Box sx={{ marginTop: 3 }}>
          <Typography variant="body2" align="center">
            Já tem conta?{' '}
            <Link
              to="/login"
              style={{ textDecoration: 'underline', color: '#1f5388' }}
            >
              Faça login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
