import { Payment as PaymentIcon } from '@mui/icons-material';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Button
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { blue, blueGrey, green, lime } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { API, getURI } from '../../services';
import { PaymentQRCode } from '../PaymentQRCode';
import Switch from '@mui/material/Switch';

interface IPaymentMonthly {
  id?: number;
  userId: number;
  ref_year: string;
  ref_month: number;
  amount: number | string;
  type: string;
  description: string;
  status: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export const PaymentMonthly = () => {
  const { userId } = useParams<{ userId: string }>();

  const [payments, setPayments] = useState<IPaymentMonthly[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | 'all'>(
    new Date().getFullYear().toString()
  );
  const [confirmingLoading, setConfirmingLoading] = useState(false);
  const [confirmingError, setConfirmingError] = useState<string | null>(null);

  const [paymentConfirmed, setPaymentConfirmed] = useState<
    Record<string, boolean>
  >({});
  const [confirmingMonth, setConfirmingMonth] = useState<{
    year: string;
    month: number;
  } | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleSwitchClick = (year: string, month: number) => {
    setConfirmingMonth({ year, month });
    setOpenModal(true);
  };

  const { doFetch: doConfirm } = useFetch<IPaymentMonthly>({
    method: 'PATCH'
  });

  const handlePaymentConfirm = async () => {
    if (!confirmingMonth) return;

    if (!isUserIdValid) {
      setConfirmingError('ID de usuário inválido.');
      return;
    }

    const key = `${confirmingMonth.year}-${confirmingMonth.month}`;
    setConfirmingError(null);
    setConfirmingLoading(true);

    try {
      await doConfirm({
        url: getURI(API.confirmPayment),
        body: {
          userId,
          ref_year: confirmingMonth.year,
          ref_month: confirmingMonth.month
        },
        method: 'PATCH'
      });

      setPayments((prev) =>
        prev.map((p) =>
          p.ref_year === confirmingMonth.year &&
          p.ref_month === confirmingMonth.month
            ? {
                ...p,
                status: 'Confirmado',
                updatedAt: new Date().toISOString()
              }
            : p
        )
      );

      setPaymentConfirmed((prev) => ({ ...prev, [key]: true }));
    } catch (err: any) {
      console.error('Falha ao confirmar pagamento na API:', err);
      if (!confirmingError) {
        setConfirmingError(
          err.message || 'Erro desconhecido ao confirmar pagamento.'
        );
      }
    } finally {
      setConfirmingLoading(false);
      setOpenModal(false);
      setConfirmingMonth(null);
    }
  };

  const handleCancel = () => {
    setOpenModal(false);
    setConfirmingMonth(null);
    setConfirmingError(null);
  };

  const isUserIdValid = userId && !isNaN(parseInt(userId));
  const apiUrl = isUserIdValid
    ? getURI(`${API.paymentMonthly}/${userId}`)
    : undefined;

  const {
    data: paymentsData,
    error: paymentsError,
    loading: paymentsLoading
  } = useFetch<IPaymentMonthly[]>({
    method: 'GET',
    url: apiUrl
  });

  useEffect(() => {
    setSelectedYear(new Date().getFullYear().toString());
  }, []);

  useEffect(() => {
    if (paymentsData) {
      setPayments(Array.isArray(paymentsData) ? paymentsData : []);
    } else if (paymentsError) {
      setPayments([]); // Clear payments on error
    }
  }, [paymentsData, paymentsError]);

  if (paymentsLoading) {
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

  const formatMonth = (month: number) => {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
    return months[month - 1] || `Mês ${month}`;
  };

  const parseAmount = (amount: any): number => {
    if (!amount || amount === '') return 0;
    if (typeof amount === 'number') return amount;
    try {
      return parseFloat(amount.toString().replace(',', '.'));
    } catch (error) {
      console.error('Error parsing amount:', amount, error);
      return 0;
    }
  };

  const getAvailableYears = (): string[] => {
    const yearsSet = new Set(payments.map((p) => p.ref_year));
    const yearsArray = Array.from(yearsSet);
    return yearsArray.sort((a, b) => Number(b) - Number(a)); // Sort descending
  };

  const getFilteredPayments = (): IPaymentMonthly[] => {
    if (selectedYear === 'all') return payments;
    return payments.filter((payment) => payment.ref_year === selectedYear);
  };

  const getFinancialSummary = () => {
    const filteredPayments = getFilteredPayments();
    const totalAmount = filteredPayments.reduce(
      (sum, p) => sum + parseAmount(p.amount),
      0
    );

    const monthlyTotalsMissing: { [key: string]: number } =
      filteredPayments.reduce((acc, payment) => {
        const key = `${payment.ref_year}-${payment.ref_month}`;
        if (!(acc as { [key: string]: number })[key])
          (acc as { [key: string]: number })[key] = 0;
        (acc as { [key: string]: number })[key] += parseAmount(payment.amount);
        return acc;
      }, {} as { [key: string]: number });

    const paidMonths = Object.values(monthlyTotalsMissing).filter(
      (total) => !!total && total > 0
    ).length;
    const totalMissing = 12 - paidMonths;

    return {
      total: filteredPayments.length,
      totalMissing,
      totalAmount,
      monthlyStatus: [] as any[]
    };
  };

  const financialSummary = getFinancialSummary();
  const availableYears = getAvailableYears();
  const filteredPayments = getFilteredPayments();

  // Render invalid userId error
  if (!isUserIdValid) {
    console.error('Invalid userId:', userId);
    return (
      <Alert severity="error">
        ID de usuário inválido. Por favor, forneça um ID válido.
      </Alert>
    );
  }

  if (paymentsError) {
    let errorMessage = 'Não há histórico de pagamentos.';
    if (
      paymentsError.message &&
      paymentsError.message.includes('not valid JSON')
    ) {
      errorMessage =
        'Erro: A resposta do servidor não é um JSON válido. Verifique a configuração da API.';
    } else if (paymentsError.message === 'Unauthorized') {
      errorMessage = 'Acesso não autorizado. Por favor, faça login novamente.';
    } else if (paymentsError.message === 'Forbidden resource') {
      errorMessage =
        'Acesso proibido. Você não tem permissão para visualizar esses dados.';
    } else if (paymentsError.message) {
      errorMessage += ` ${paymentsError.message}`;
    }
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  const yearCurrent = new Date().getFullYear();
  const monthCurrent = new Date().getMonth() + 1;

  if (payments.length === 0) {
    return (
      <Alert severity="info">
        Nenhum registro de pagamento encontrado para este piloto.
      </Alert>
    );
  }

  return (
    <>
      {openModal && confirmingMonth && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="81vh"
          bgcolor="rgba(0,0,0,0.5)"
          zIndex={1300}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card sx={{ p: 4, minWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Confirmar Pagamento
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Deseja confirmar o pagamento do mês{' '}
              <strong>{formatMonth(confirmingMonth.month)}</strong> de{' '}
              <strong>{confirmingMonth.year}</strong>?
            </Typography>

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button onClick={handleCancel} disabled={confirmingLoading}>
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handlePaymentConfirm}
                disabled={confirmingLoading}
              >
                {confirmingLoading ? 'Confirmando...' : 'Confirmar'}
              </Button>
            </Box>

            {confirmingError && (
              <Typography color="error" variant="caption" mt={1}>
                {confirmingError}
              </Typography>
            )}
          </Card>
        </Box>
      )}

      <Card elevation={2} sx={{ mb: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6" color="primary">
              Filtrar por Ano:
            </Typography>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="year-select-label">Ano</InputLabel>
              <Select
                labelId="year-select-label"
                value={selectedYear}
                label="Ano"
                onChange={(e) => setSelectedYear(e.target.value)}
                sx={{ borderRadius: 3 }}
              >
                {availableYears.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              variant="body2"
              color="textSecondary"
            >{`Mostrando ${filteredPayments.length} registros de ${selectedYear}`}</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card elevation={3}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" fontSize="large" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box display="flex" alignItems="center" mb={2}>
              <PaymentIcon sx={{ fontSize: 32, color: blue[500], mr: 2 }} />
              <Typography variant="h5" color="primary">
                Resumo Financeiro{' '}
                {selectedYear !== 'all' && `- ${selectedYear}`}
              </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: blue[600], textAlign: 'center' }}>
                      <strong>Mês</strong>
                    </TableCell>
                    <TableCell sx={{ color: blue[600], textAlign: 'center' }}>
                      <strong>Tipo</strong>
                    </TableCell>
                    <TableCell sx={{ color: blue[600], textAlign: 'center' }}>
                      <strong>Valor</strong>
                    </TableCell>
                    <TableCell sx={{ color: blue[600], textAlign: 'center' }}>
                      <strong>Status</strong>
                    </TableCell>
                    <TableCell sx={{ color: blue[600], textAlign: 'center' }}>
                      <strong>Pagamento</strong>
                    </TableCell>
                    <TableCell sx={{ color: blue[600], textAlign: 'center' }}>
                      <strong>Confirmação</strong>
                    </TableCell>
                    <TableCell
                      sx={{ color: blue[600], textAlign: 'center' }}
                    ></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredPayments
                    .sort(
                      (a, b) =>
                        Number(a.ref_year) - Number(b.ref_year) ||
                        a.ref_month - b.ref_month
                    )
                    .map((payment, index) => (
                      <TableRow key={`${payment.id || index}`} hover>
                        <TableCell sx={{ textAlign: 'center' }}>
                          <Chip
                            label={formatMonth(payment.ref_month)}
                            size="small"
                            variant="outlined"
                            sx={{
                              backgroundColor:
                                payment.ref_month === monthCurrent &&
                                payment.ref_year.toString() ===
                                  yearCurrent.toString()
                                  ? blue[100]
                                  : blue[50],
                              color:
                                payment.ref_month === monthCurrent &&
                                payment.ref_year.toString() ===
                                  yearCurrent.toString()
                                  ? blue[800]
                                  : blue[700],
                              width: 150
                            }}
                            title={`${payment.ref_year}`}
                          />
                        </TableCell>

                        <TableCell sx={{ textAlign: 'center' }}>
                          {payment.type ? (
                            <Chip
                              label={payment.type}
                              size="small"
                              variant="outlined"
                              sx={{
                                backgroundColor: lime[50],
                                color: lime[800],
                                width: 150
                              }}
                            />
                          ) : (
                            ''
                          )}
                        </TableCell>

                        <TableCell sx={{ textAlign: 'center' }}>
                          {parseAmount(payment.amount) > 0 ? (
                            <Chip
                              label={payment.amount}
                              size="small"
                              variant="outlined"
                              sx={{
                                backgroundColor: green[50],
                                color: green[800],
                                width: 150
                              }}
                            />
                          ) : (
                            <Chip
                              label={payment.amount}
                              size="medium"
                              variant="outlined"
                              sx={{ color: blueGrey[300], width: 150 }}
                            />
                          )}
                        </TableCell>

                        <TableCell sx={{ textAlign: 'center' }}>
                          {payment.status && payment.status !== 'Confirmado' ? (
                            <BatteryCharging60Icon
                              color="warning"
                              fontSize="medium"
                              titleAccess="À confirmar"
                            />
                          ) : (
                            <CheckIcon
                              color="success"
                              fontSize="medium"
                              titleAccess="Confirmado"
                            />
                          )}
                        </TableCell>

                        <TableCell>
                          <Typography variant="body2">
                            {payment.createdAt
                              ? new Date(payment.createdAt).toLocaleDateString(
                                  'pt-BR'
                                )
                              : ''}
                          </Typography>
                        </TableCell>

                        <TableCell sx={{ textAlign: 'center' }}>
                          <Typography variant="body2">
                            {payment.updatedAt
                              ? new Date(payment.updatedAt).toLocaleDateString(
                                  'pt-BR'
                                )
                              : ''}
                          </Typography>
                        </TableCell>

                        <TableCell sx={{ textAlign: 'center' }}>
                          {payment.status !== 'Confirmado' &&
                          !paymentConfirmed[
                            `${payment.ref_year}-${payment.ref_month}`
                          ] ? (
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={false}
                                  onChange={() =>
                                    handleSwitchClick(
                                      payment.ref_year,
                                      payment.ref_month
                                    )
                                  }
                                />
                              }
                              label={`Confirmar mês ${payment.ref_month}`}
                            />
                          ) : null}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell colSpan={7}>
                      <Box
                        textAlign="center"
                        p={2}
                        bgcolor={blue[50]}
                        borderRadius={3}
                      >
                        <Typography variant="h5" color={blue[600]}>
                          R$ {financialSummary.totalAmount.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Valor Total Pago {`em ${selectedYear}`}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Card>

      {filteredPayments.length > 0 && (
        <Card elevation={3} sx={{ mt: 3, mb: 0 }}>
          <PaymentQRCode totalMissing={financialSummary.totalMissing} />
        </Card>
      )}
    </>
  );
};
