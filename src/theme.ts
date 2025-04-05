// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(18, 24, 31)', 
    },
    secondary: {
      main: 'rgb(12, 175, 96)',
    },
    background: {
      default: 'rgb(18, 24, 31)',
    },
  },
  typography: {
    fontFamily:
      '__Poppins_4de79c, __Poppins_Fallback_4de79c, Helvetica, Arial, sans-serif',
  },
});

export default theme;
