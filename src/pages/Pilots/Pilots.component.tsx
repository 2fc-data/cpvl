// src/pages/Pilots.tsx
import {
  Add as AddIcon,
  EmailOutlined as Email,
  Phone,
  ArrowForward as ArrowForwardIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { API, getURI } from '../../services';
import * as Styled from './Pilots.styled';
// import { useAuth } from '../../hooks/useAuth'; / ajuste se necessário

interface IPilot {
  id?: number;
  userId: number;
  firstName: string;
  lastName: string;
  cpf: string;
  cellphone: string;
  email: string;
  status: string;
  agreeStatute?: boolean;
  agreeRI?: boolean;
}

export const Pilots = () => {
  const [pilots, setPilots] = useState<Array<IPilot>>([]);
  const [filteredPilots, setFilteredPilots] = useState<Array<IPilot>>([]);
  const [statusType, setStatusType] = useState<string>('statusPayment');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [statusOptions, setStatusOptions] = useState<string[]>([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [pilotToDelete, setPilotToDelete] = useState<IPilot | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  // const auth = useAuth(); // { user: { role: 'admin' } } expected

  // GET - lista de pilotos (executa automaticamente se url fornecido)
  const {
    doFetch: fetchPilots,
    data: pilotsData,
    error: pilotsError,
    loading: loadingPilots
  } = useFetch<Array<IPilot>>({
    method: 'GET',
    url: getURI(API.pilots)
  });

  // GET - statusPayment list (executa automaticamente)
  const { data: pilotsPaymentData } = useFetch<Array<IPilot>>({
    method: 'GET',
    url: getURI(API.pilots) + '/statusPayment'
  });

  // GET - status options (cadastral)
  const { data: statusCadastralData } = useFetch<string[]>({
    method: 'GET',
    url: getURI(API.pilots) + '/validStatus'
  });

  // GET - status options (payment)
  const { data: statusPaymentData } = useFetch<string[]>({
    method: 'GET',
    url: getURI(API.pilots) + '/validStatusPayment'
  });

  // const { doFetch: doDelete, loading: deleting } = useFetch<{
  //   message?: string;
  // }>({
  //   method: 'DELETE'
  // });

  // Sincroniza estado local quando os GETs mudam
  useEffect(() => {
    if (
      statusType === 'statusCadastral' &&
      pilotsData &&
      Array.isArray(pilotsData)
    ) {
      setPilots(pilotsData);
      setFilteredPilots(pilotsData);
    } else if (
      statusType === 'statusPayment' &&
      pilotsPaymentData &&
      Array.isArray(pilotsPaymentData)
    ) {
      setPilots(pilotsPaymentData);
      setFilteredPilots(pilotsPaymentData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusType, pilotsData, pilotsPaymentData]);

  useEffect(() => {
    if (
      statusType === 'statusCadastral' &&
      statusCadastralData &&
      Array.isArray(statusCadastralData)
    ) {
      setStatusOptions(statusCadastralData);
    } else if (
      statusType === 'statusPayment' &&
      statusPaymentData &&
      Array.isArray(statusPaymentData)
    ) {
      setStatusOptions(statusPaymentData);
    } else {
      setStatusOptions([]);
    }
  }, [statusType, statusCadastralData, statusPaymentData]);

  useEffect(() => {
    if (pilotsError) {
      setActionError(
        pilotsError && pilotsError.message
          ? pilotsError.message
          : 'Erro ao carregar pilotos'
      );
    } else {
      setActionError(null);
    }
  }, [pilotsError]);

  const handlePilotClick = (pilot: IPilot) => {
    const identifier = pilot.userId;
    navigate('/pilots/' + identifier);
  };

  const handleStatusChange = (event: any) => {
    const selectedStatus = event.target.value as string;
    setStatusFilter(selectedStatus);

    if (selectedStatus && pilots && Array.isArray(pilots)) {
      const filtered = pilots.filter((p) => p.status === selectedStatus);
      setFilteredPilots(filtered);
    } else {
      setFilteredPilots(pilots);
    }
  };

  const handleStatusType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatusType = event.target.value as string;
    setStatusType(newStatusType);
    setStatusFilter('');
  };

  // open dialog
  const openDeleteDialog = (pilot: IPilot) => {
    setPilotToDelete(pilot);
    setOpenConfirm(true);
    setActionError(null);
    setActionMessage(null);
  };

  const closeDeleteDialog = () => {
    setOpenConfirm(false);
    setPilotToDelete(null);
    setActionError(null);
  };

  // Confirm delete: usa doDelete e recarrega lista via fetchPilots
  const confirmDelete = async () => {
    if (!pilotToDelete) {
      setActionError('Piloto inválido para exclusão.');
      return;
    }

    setActionError(null);
    setActionMessage(null);

    // preferir userId para deletar User; se ausente, usar pilot.id
    const idToDelete = pilotToDelete.userId
      ? pilotToDelete.userId
      : pilotToDelete.id
      ? pilotToDelete.id
      : null;
    if (!idToDelete) {
      setActionError('ID inválido para exclusão.');
      return;
    }

    // try {
    //   const url = getURI(API.deleteUser); // -> BASE_URI/user/:id
    //   const result = await doDelete({
    //     url,
    //     body: {
    //       idToDelete
    //     },
    //     method: 'DELETE'
    //   });

    //   // se o resultado tiver mensagem, armazena para feedback
    //   if (result && result.message) {
    //     setActionMessage(result.message);
    //   } else {
    //     setActionMessage('Usuário e piloto removidos com sucesso.');
    //   }

    //   // Recarregar a lista de pilotos do servidor (garante consistência)
    //   try {
    //     await fetchPilots({ url: getURI(API.pilots), method: 'GET' });
    //   } catch (e) {
    //     // se falhar apenas atualiza localmente (optimistic)
    //     setPilots((prev) =>
    //       prev.filter((p) => {
    //         if (p.userId && p.userId === idToDelete) return false;
    //         if (p.id && p.id === idToDelete) return false;
    //         return true;
    //       })
    //     );
    //     setFilteredPilots((prev) =>
    //       prev.filter((p) => {
    //         if (p.userId && p.userId === idToDelete) return false;
    //         if (p.id && p.id === idToDelete) return false;
    //         return true;
    //       })
    //     );
    //   }

    //   setOpenConfirm(false);
    //   setPilotToDelete(null);
    // } catch (err: any) {
    //   const msg = err && err.message ? err.message : 'Erro ao remover usuário';
    //   setActionError(msg);
    // }
  };

  return (
    <>
      <Box>
        <Box sx={{ padding: '15px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Typography color="text.primary">Pilotos</Typography>
          </Breadcrumbs>
        </Box>

        {/* Filtro de status */}
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '15px 0'
          }}
        >
          <Box sx={{ mr: 2, width: '300px' }}>
            <FormControl>
              <FormLabel id="filterPilotsType">Filtro por status:</FormLabel>
              <RadioGroup
                row
                aria-labelledby="filterPilotsType"
                defaultValue="statusPayment"
                name="radio-buttons-status"
                onChange={handleStatusType}
              >
                <FormControlLabel
                  value="statusCadastral"
                  control={<Radio />}
                  label="Cadastral"
                />
                <FormControlLabel
                  value="statusPayment"
                  control={<Radio />}
                  label="Pagamento"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{ mr: 2, width: '300px' }}>
            <FormControl fullWidth>
              <InputLabel id="status-filter">Status</InputLabel>
              <Select
                labelId="status-filter"
                value={statusFilter}
                label="Status"
                onChange={handleStatusChange}
                sx={{ borderRadius: 3 }}
              >
                <MenuItem value="">Todos</MenuItem>
                {statusOptions &&
                  statusOptions.length > 0 &&
                  statusOptions.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* mensagens */}
        {actionMessage && (
          <Box sx={{ px: 2, mb: 1 }}>
            <Typography variant="body2" color="success.main">
              {actionMessage}
            </Typography>
          </Box>
        )}
        {actionError && (
          <Box sx={{ px: 2, mb: 1 }}>
            <Typography variant="body2" color="error.main">
              {actionError}
            </Typography>
          </Box>
        )}

        <Box>
          {loadingPilots ? (
            <Box display="flex" justifyContent="center" py={6}>
              <CircularProgress />
            </Box>
          ) : (
            <List
              subheader={
                <ListSubheader component="div" color="primary">
                  Total de {filteredPilots ? filteredPilots.length : 0}{' '}
                  piloto(s) em nossa base de dados.
                </ListSubheader>
              }
            >
              {filteredPilots &&
                filteredPilots.map((pilot) => (
                  <Box key={pilot.userId}>
                    <ListItem
                      disablePadding
                      secondaryAction={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {/* {auth && auth.user && auth.user.role === 'admin' && ( */}
                          <IconButton
                            edge="end"
                            aria-label="deletar"
                            onClick={() => openDeleteDialog(pilot)}
                            sx={{ color: 'error.main', mr: 1 }}
                            // disabled={deleting}
                            title="Excluir usuário/piloto"
                          >
                            <DeleteIcon />
                          </IconButton>
                          {/* )} */}
                          <IconButton
                            edge="end"
                            aria-label="ver detalhes"
                            onClick={() => handlePilotClick(pilot)}
                          >
                            <ArrowForwardIcon />
                          </IconButton>
                        </Box>
                      }
                    >
                      <ListItemButton onClick={() => handlePilotClick(pilot)}>
                        <ListItemText
                          primary={
                            pilot.firstName && pilot.firstName !== ''
                              ? pilot.firstName + ' ' + (pilot.lastName || '')
                              : pilot.email || '---'
                          }
                          secondary={
                            <span
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <Phone sx={{ fontSize: '14px' }} />
                              <Typography
                                sx={{ paddingLeft: '5px', paddingTop: '2px' }}
                                variant="caption"
                                color={blueGrey[500]}
                              >
                                {pilot.cellphone}
                              </Typography>
                              <Email sx={{ fontSize: '15px', ml: 1 }} />
                              <Typography
                                sx={{ paddingLeft: '5px' }}
                                variant="caption"
                                color={blueGrey[500]}
                              >
                                {pilot.email}
                              </Typography>
                            </span>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </Box>
                ))}
            </List>
          )}
        </Box>
      </Box>

      {/* Dialog de confirmação */}
      <Dialog open={openConfirm} onClose={closeDeleteDialog}>
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente excluir o usuário/piloto{' '}
            <strong>
              {pilotToDelete
                ? pilotToDelete.firstName && pilotToDelete.firstName !== ''
                  ? pilotToDelete.firstName +
                    ' ' +
                    (pilotToDelete.lastName || '')
                  : pilotToDelete.email || ''
                : ''}
            </strong>
            {pilotToDelete
              ? ' (id: ' +
                (pilotToDelete.userId
                  ? pilotToDelete.userId
                  : pilotToDelete.id
                  ? pilotToDelete.id
                  : '?') +
                ')'
              : ''}
            ? Esta ação removerá também os dados associados.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} disabled={deleting}>
            Cancelar
          </Button>
          <Button
            onClick={confirmDelete}
            color="error"
            variant="contained"
            disabled={deleting}
          >
            {deleting ? 'Excluindo...' : 'Excluir'}
          </Button>
        </DialogActions>
      </Dialog>

      <Styled.AddButton color="primary" aria-label="add">
        <AddIcon />
      </Styled.AddButton>
    </>
  );
};
