const getHeaderOptions = (): unknown => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  cache: 'no-cache'
});

export default getHeaderOptions;
