import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Alert
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks';
import { API, getURI } from '../../services';
import { useParams } from 'react-router-dom';

interface StatusPilotProps {
  userId: number;
  currentStatus: string;
  onStatusChange: (newStatus: string) => void;
}

export const StatusPilot = ({
  currentStatus,
  onStatusChange
}: StatusPilotProps) => {
  const { userId } = useParams<{ userId: string }>();
  const [status, setStatus] = useState(currentStatus);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Hook para fazer a requisição
  const { doFetch, loading, error } = useFetch({
    method: 'PATCH'
  });

  useEffect(() => {
    if (error) {
      setErrorMessage('Erro ao atualizar status');
    }
  }, [error]);

  const handleUpdateStatus = async () => {
    try {
      const response = await doFetch({
        url: getURI(
          `${API.updateStatusPilot}?userId=${userId}&status=${status}`
        ),
        method: 'PATCH'
      });

      if (response) {
        alert('Status atualizado com sucesso!');
      }
      onStatusChange(status);
    } catch (error) {
      setErrorMessage('Erro ao atualizar status');
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mt={1}>
      <FormControl size="small">
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
          sx={{ borderRadius: 3, minWidth: 150 }}
        >
          <MenuItem value="filiado">Filiado</MenuItem>
          <MenuItem value="desfiliado">Desfiliado</MenuItem>
          <MenuItem value="expulso">Expulso</MenuItem>
          <MenuItem value="pendente">Pendente</MenuItem>
          <MenuItem value="suspenso">Suspenso</MenuItem>
          <MenuItem value="trancado">Trancado</MenuItem>
        </Select>
      </FormControl>

      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateStatus}
          size="small"
          sx={{ borderRadius: 3 }}
        >
          Atualizar
        </Button>
      )}

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Box>
  );
};
