import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'capitalize',
          borderRadius: 8.5,
        },
        contained: {
          backgroundColor: '#009be5',
          ':hover': {
            backgroundColor: '#006db3',
          },
        },
        outlined: {
          color: '#fff',
          borderColor: '#fff',
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.7rem',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.5px',
      textTransform: 'capitalize',
    },
  },
});
