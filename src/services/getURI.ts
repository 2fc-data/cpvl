const BASE_URI = process.env.REACT_APP_API_URI;

export const API = {
  profile: 'profile',
  login: 'login',
  pilots: 'pilots',
  userAdd: 'users/addUser',
  // usersDelete: 'users/delete',
  status: 'pilots/status-list',
  validStatusCadastral: 'pilots/validStatusCadastral',
  updateStatusPilot: 'pilots/statusPilot',
  paymentMonthly: 'paymentMonthly',
  confirmPayment: 'paymentMonthly/confirmPayment',
  createPaymentMonthly: 'paymentMonthly',
  statusCadastral: 'pilots/statusCadastral',
  statusPayment: 'pilots/statusPayment'
  // pilotByUserId: 'pilots/byUserId',
} as const;

export const getURI = (api: string) => `${BASE_URI}/${api}`;
