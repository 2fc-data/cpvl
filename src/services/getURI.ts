const BASE_URI = process.env.REACT_APP_API_URI;

export const API = {
  profile: 'profile',
  login: 'login',
  pilots: 'pilots'
} as const;

export const getURI = (api: string) => `${BASE_URI}/${api}`;
