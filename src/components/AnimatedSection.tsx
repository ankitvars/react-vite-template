import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/material';
import React from 'react';
import AnimatedButton from './AnimatedButton';
import TrendingMarquee from './TrendingMarquee';

const AnimatedSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        overflow: 'hidden',
        marginTop: 10,
      }}
    >
      <AnimatedButton />
      {/* Wrap the icon in a Box to control the hover effect */}
      <Box
        sx={{
          mx: 2,
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24px',
          cursor: 'pointer',
          boxSizing: 'border-box',
          "&:hover": {
            bgcolor: "rgba(34, 96, 119, 0.1)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <TrendingUpIcon sx={{ color: 'white', fontSize: 24 }} />
      </Box>
      <TrendingMarquee />
    </Box>
  );
};

export default AnimatedSection;
