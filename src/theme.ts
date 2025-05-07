import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Primary color as white
      contrastText: 'rgb(18, 24, 31)', // Text on primary
    },
    secondary: {
      main: 'rgb(12, 175, 96)',
    },
    background: {
      default: 'rgb(18, 24, 31)',
      paper: 'rgb(22, 29, 39)', // Optional: paper background
    },
    text: {
      primary: '#fff', // Default text color as white
      secondary: '#ccc', // Optional: secondary text color
    },
  },
  typography: {
    fontFamily: 'Poppins, Helvetica, Arial, sans-serif',
  },
});

export default theme;