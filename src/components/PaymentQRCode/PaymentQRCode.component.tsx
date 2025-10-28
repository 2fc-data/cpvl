import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCodePix, { payload } from 'react-qrcode-pix';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Button,
  Card,
  Box,
  Chip,
  Grid
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useFetch } from '../../hooks';
import { API, getURI } from '../../services';

interface PaymentProps {
  totalMissing: number;
}

interface IPaymentMonthly {
  userId: string;
  amount: number;
  ref_year: string;
  ref_month: number;
  type?: string;
  description?: string;
  status?: string;
  date?: Date;
}

export const PaymentQRCode: React.FC<PaymentProps> = ({ totalMissing }) => {
  const { userId } = useParams<{ userId: string }>();
  const [selectedPaymentType, setSelectedPaymentType] = useState<string>('');
  const [pixCode, setPixCode] = useState<string>('');
  const [notice, setNotice] = useState<string>('');

  const amountMonthly = 50;

  const { doFetch: doNotice } = useFetch<IPaymentMonthly>({ method: 'POST' });

  const handlePaymentNotice = async () => {
    if (!userId) return;

    let currentValue = getPaymentValue(selectedPaymentType);
    let n = currentValue / amountMonthly;
    let ref_month = 12 - totalMissing;

    try {
      for (let i = 1; i <= n; i++, n > 0) {
        await doNotice({
          url: getURI(API.createPaymentMonthly),
          body: {
            userId,
            amount: amountMonthly,
            ref_year: new Date().getFullYear(),
            ref_month: ref_month + i,
            type: selectedPaymentType,
            description: '',
            status: 'Confirmar',
            date: new Date(),
            createdAt: new Date()
          },
          method: 'POST'
        });

        setSelectedPaymentType('');
        setNotice('Avisado. Lançaremos em breve!');
      }
    } catch (err) {
      console.error('Erro ao avisar pagamento', err);
    }
  };

  const getPaymentValue = (paymentType: string): number => {
    switch (paymentType) {
      case 'mensal':
        return amountMonthly;
      case 'trimestral':
        return amountMonthly * 3;
      case 'semestral':
        return amountMonthly * 6;
      case 'anual':
        return amountMonthly * 12;
      default:
        return 0;
    }
  };

  const getDiscount = (paymentType: string): number => {
    switch (paymentType) {
      case 'trimestral':
        return 0.0; // 0.05;
      case 'semestral':
        return 0.0; // 0.10;
      case 'anual':
        return 0.0; // 0.15;
      default:
        return 0;
    }
  };

  const calculateFinalValue = (paymentType: string): number => {
    const baseValue = getPaymentValue(paymentType);
    const discount = getDiscount(paymentType);
    return Math.round(baseValue * (1 - discount) * 100) / 100;
  };

  const paymentType = (totalMissing: number | undefined): string[] => {
    if (totalMissing === undefined || totalMissing < 0 || totalMissing > 12) {
      return [];
    }

    const types: string[] = [];
    if (totalMissing > 0) types.push('mensal');
    if (totalMissing >= 3) types.push('trimestral');
    if (totalMissing >= 6) types.push('semestral');
    if (totalMissing === 12) types.push('anual');

    return types;
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedPaymentType(event.target.value);
    setPixCode(''); // Clear previous code
  };

  const copyToClipboard = async () => {
    if (pixCode) {
      try {
        await navigator.clipboard.writeText(pixCode);
        alert('Código PIX copiado para a área de transferência!');
      } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = pixCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Código PIX copiado!');
      }
    }
  };

  const availableTypes = paymentType(totalMissing);
  const currentValue = selectedPaymentType
    ? calculateFinalValue(selectedPaymentType)
    : 0;
  const currentDiscount = selectedPaymentType
    ? getDiscount(selectedPaymentType)
    : 0;
  const baseValue = selectedPaymentType
    ? getPaymentValue(selectedPaymentType)
    : 0;

  return (
    <Card>
      <Grid container spacing={3} alignItems="flex-start" padding={3}>
        <Grid item xs={12} md={4} padding={2}>
          {notice ? (
            <Typography
              borderRadius={3}
              variant="h6"
              color="white"
              sx={{
                bgcolor: 'warning.main',
                textAlign: 'center',
                mb: 0
              }}
            >
              {notice}
            </Typography>
          ) : totalMissing > 0 ? (
            <Box>
              <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                {totalMissing} meses à pagar.
              </Typography>

              <FormControl fullWidth sx={{ minWidth: 280, mb: 1 }}>
                <InputLabel id="tipoPagamento">Tipo do pagamento</InputLabel>
                <Select
                  labelId="tipoPagamento"
                  value={selectedPaymentType}
                  label="Tipo do pagamento"
                  onChange={handleChange}
                  disabled={availableTypes.length === 0}
                  sx={{ borderRadius: 3 }}
                >
                  {availableTypes.map((type: string, index: number) => {
                    const amount = calculateFinalValue(type);
                    const discount = getDiscount(type);

                    return (
                      <MenuItem key={index} value={type}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%'
                          }}
                        >
                          <span>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </span>
                          <Box sx={{ textAlign: 'right' }}>
                            {discount > 0 && (
                              <Chip
                                label={`-${(discount * 100).toFixed(0)}%`}
                                size="small"
                                color="success"
                                sx={{ mr: 1 }}
                              />
                            )}
                            <span style={{ fontWeight: 'bold' }}>
                              R$ {amount.toFixed(2)}
                            </span>
                          </Box>
                        </Box>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Typography variant="body1" color="primary" mt={2}>
                Antes de finalizar o pagamento, confira o NOME e o CNPJ do
                clube!
              </Typography>
            </Box>
          ) : (
            <Typography variant="body1" color="primary">
              {totalMissing} meses à pagar.
              <br />
              CPVL agradece!
            </Typography>
          )}
        </Grid>

        {selectedPaymentType && (
          <>
            <Grid item xs={12} md={4} padding={2} sx={{ textAlign: 'center' }}>
              <Typography variant="body1" color="primary" gutterBottom>
                Pagamento PIX -{' '}
                {selectedPaymentType.charAt(0).toUpperCase() +
                  selectedPaymentType.slice(1)}
              </Typography>

              {currentDiscount > 0 && (
                <Chip
                  label={`Economize ${(currentDiscount * 100).toFixed(
                    0
                  )}% - R$ ${(baseValue - currentValue).toFixed(2)}`}
                  color="success"
                  sx={{
                    mb: 2
                  }}
                />
              )}

              <Typography variant="h5" paddingBottom={1}>
                R$ {currentValue.toFixed(2)}
              </Typography>
              <QRCodePix
                pixkey={process.env.REACT_APP_PIX_KEY_CPVL || ''}
                merchant="CPVL"
                city="POCOS CALDAS"
                cep="37701000"
                amount={currentValue}
                size={280}
                bgColor="#FFFFFF"
                level="M"
                onLoad={(payload) => setPixCode(payload)}
              />

              {pixCode && (
                <Box>
                  <Typography variant="body1" paddingTop={1}>
                    Ou
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={copyToClipboard}
                    sx={{
                      mb: 0,
                      mt: 2,
                      borderRadius: 3,
                      textTransform: 'none'
                    }}
                  >
                    Código PIX (Copia/Cola)
                  </Button>
                </Box>
              )}
            </Grid>

            <Grid item xs={12} md={4} padding={2}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body1" color="primary" gutterBottom>
                  <u>APÓS</u> o pagamento
                </Typography>
                <Typography variant="body1" color="primary">
                  <ArrowDownwardIcon color="primary" fontSize="medium" />
                </Typography>
                <Button
                  color="warning"
                  variant="contained"
                  disabled={!pixCode ? true : false}
                  size="large"
                  onClick={handlePaymentNotice}
                  sx={{
                    mb: 3,
                    mt: 1,
                    borderRadius: 3,
                    textTransform: 'none',
                    padding: '10px 20px'
                  }}
                >
                  Avisar o pagamento
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Card>
  );
};
