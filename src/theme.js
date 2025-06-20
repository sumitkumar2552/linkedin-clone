import { createTheme } from '@mui/material';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#f4f4f4',
          },
        }
      : {
          background: {
            default: '#121212',
          },
        }),
  },
});
