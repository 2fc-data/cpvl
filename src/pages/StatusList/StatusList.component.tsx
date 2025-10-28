import { Phone } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { API, getURI } from '../../services';

interface IPilot {
  id?: number;
  userId: number;
  firstName: string;
  lastName: string;
  cpf: string;
  cellphone: string;
  email: string;
  status: string;
}

const TodayNow = (data: Date) => {
  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ];

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();

  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
};

export const StatusList = () => {
  const [pilots, setPilots] = useState<Array<IPilot>>();
  const { data } = useFetch<Array<IPilot>>({ url: getURI(API.status) });

  useEffect(() => {
    if (data && data.length) {
      setPilots(data);
    }
  }, [data]);

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
      </Box>
      {pilots && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography
                    color="primary"
                    variant="h5"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Liberados para decolagem. {TodayNow(new Date())}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography color="primary" variant="h6">
                    Piloto
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="h6">
                    Fone
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="h6">
                    Emergência
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="h6">
                    Contato Emergência
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pilots.map((pilot) => (
                <TableRow key={pilot.userId}>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        alt={pilot.firstName}
                        src="/images/avatar/3.jpg"
                        sx={{ width: 32, height: 32, marginRight: 1 }}
                      />
                      <Typography variant="subtitle1" color={blueGrey[700]}>
                        {pilot.firstName} {pilot.lastName}
                      </Typography>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Phone sx={{ fontSize: 16, marginRight: 1 }} />
                      <Typography variant="subtitle2" color={blueGrey[500]}>
                        {`(${pilot.cellphone.slice(
                          0,
                          2
                        )}) ${pilot.cellphone.slice(
                          2,
                          7
                        )}-${pilot.cellphone.slice(7)}`}
                      </Typography>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      <Phone sx={{ fontSize: 16, marginRight: 1 }} />
                      {/* {`(${pilot.emergencyContact.slice(0, 2)}) ${pilot.emergencyContact.slice(2, 7)}-${pilot.emergencyContact.slice(7)}`} */}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {/* {pilot.emergencyContact || '—'} */}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography color="primary" variant="h6">
                    Total {pilots.length} pilotos.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
