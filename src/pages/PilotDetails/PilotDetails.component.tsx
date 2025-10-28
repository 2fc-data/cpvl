import {
  ArrowBack as ArrowBackIcon,
  Person as PersonIcon,
  Badge as BadgeIcon
} from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Chip,
  Divider,
  CircularProgress,
  Alert
} from '@mui/material';
import { blueGrey, blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { API, getURI } from '../../services';
import { PaymentMonthly } from '../../components/PaymentMonthly';
import { StatusPilot } from '../../components/StatusPilot';

interface IPilotDetails {
  id?: number;
  userId: number;
  firstName: string;
  lastName: string;
  cpf: string;
  cellphone: string;
  email: string;
  status: string;
}

interface PilotDetailsProps {
  pilot: IPilotDetails;
}

export const PilotDetails = ({ pilot: initialPilot }: PilotDetailsProps) => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [pilot, setPilot] = useState<IPilotDetails | null>(null);

  const {
    data: pilotData,
    error: pilotError,
    loading: pilotLoading
  } = useFetch<IPilotDetails>({
    url: getURI(`${API.pilots}/${userId}`)
  });

  useEffect(() => {
    if (pilotData) {
      setPilot(pilotData);
    }
  }, [pilotData]);

  const handleBackClick = () => {
    navigate('/pilots');
  };

  if (pilotLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (pilotError || !pilot) {
    return (
      <Box sx={{ padding: '15px' }}>
        <Alert severity="error">
          Erro ao carregar detalhes do piloto. Piloto não encontrado.
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ padding: '15px' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <IconButton onClick={handleBackClick} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>

          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Link
              underline="hover"
              color="inherit"
              onClick={handleBackClick}
              sx={{ cursor: 'pointer' }}
            >
              Pilotos
            </Link>
            <Typography color="text.primary">
              {pilot.firstName} {pilot.lastName}
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* Card com informações do piloto */}
        <Card elevation={3} sx={{ mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center" mb={3}>
                <PersonIcon sx={{ fontSize: 40, color: blue[500], mr: 2 }} />
                <Box>
                  <Typography variant="h4" component="h1">
                    {pilot.firstName} {pilot.lastName}
                  </Typography>
                  <Chip
                    label={pilot.status}
                    color="primary"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              </Box>

              <Box sx={{ mr: 3 }}>
                <StatusPilot
                  currentStatus={pilot.status}
                  onStatusChange={(newStatus) =>
                    setPilot((prev) => ({ ...prev, status: newStatus }))
                  }
                  userId={0}
                />
              </Box>
            </Box>

            <Divider sx={{ mb: 1 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom color="primary">
                  Informações Pessoais:
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <BadgeIcon sx={{ mr: 1, color: blueGrey[500] }} />
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      CPF
                    </Typography>
                    <Typography variant="body1">{pilot.cpf}</Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mr: 2, minWidth: '80px' }}
                  >
                    Celular:
                  </Typography>
                  <Typography variant="body1">{pilot.cellphone}</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mr: 2, minWidth: '80px' }}
                  >
                    E-mail:
                  </Typography>
                  <Typography variant="body1">{pilot.email}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ mb: 3 }}>
          {userId && <PaymentMonthly />}
        </Card>
      </Box>
    </Box>
  );
};
