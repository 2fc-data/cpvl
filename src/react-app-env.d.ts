/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_API_URI: string;
    REACT_APP_LOGGED_KEY: string;
    PIX_KEY_CPVL: string;
  }
}

declare module 'react/jsx-runtime' {
  const content: string;
  export default content;
}
