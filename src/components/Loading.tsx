// src/components/Loading.tsx
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        background: 'linear-gradient(135deg, rgba(18,24,31,0.8), rgba(12,175,96,0.6))',
        animation: `${fadeIn} 0.5s ease-out`,
        color: '#fff',
        textAlign: 'center',
        p: 2,
        fontFamily: 'inherit',
        zIndex: 999999,
      }}
    >
      <CircularProgress
        color="secondary"
        size={80}
        sx={{
          mb: 3,
          animation: `${pulse} 1.5s infinite`,
        }}
      />
      <Typography variant="h3" sx={{ mt: 2, fontWeight: 700 }}>
        Loading...
      </Typography>
      <Typography variant="h6" sx={{ mt: 1, opacity: 0.8 }}>
        Please wait while we prepare everything for you.
      </Typography>
    </Box>
  );
};

export default Loading;
