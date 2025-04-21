import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Typography, Avatar } from '@mui/material';
import mooniIcon from '../assets/logo/GemPoints.svg'; // Ensure the path is correct

const trendingCoins = [
  { id: 1, name: 'GPR', icon: mooniIcon },
  { id: 2, name: 'MOONI', icon: mooniIcon },
  { id: 3, name: 'PLPR', icon: mooniIcon },
  { id: 4, name: 'TBN', icon: mooniIcon },
  { id: 5, name: 'PEPECAR', icon: mooniIcon },
  { id: 6, name: 'KWN', icon: mooniIcon },
  { id: 7, name: 'GCT', icon: mooniIcon },
  { id: 8, name: 'TIGRO', icon: mooniIcon },
  { id: 9, name: 'DEEPGT', icon: mooniIcon },
  { id: 10, name: 'KWN', icon: mooniIcon },
];

// Duplicate the coins array to create a continuous loop effect.
const repeatedCoins = [...trendingCoins, ...trendingCoins];

const TrendingMarquee: React.FC = () => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      direction="left"
      autoFill={true}
      style={{
        maxWidth: "65vw",
      }}
    >
      {repeatedCoins.map((coin, index) => (
        <Box
          key={`${coin.id}-${index}`}
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 2,
            cursor: "pointer",
            bgcolor: "rgba(121, 134, 134, 0.1)",
            borderRadius: '10px',
            py: 0.5
          }}
        >
          <Box
            sx={{
              backgroundColor: "#12c15b",
              width: 20,
              height: 20,
              borderRadius: "50%",
              color: "white",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            {coin.id}
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: "white",
              mr: 1,
            }}
          >
            {coin.name}
          </Typography>
          <Avatar
            src={coin.icon}
            sx={{ width: 18, height: 18, opacity: 0.5 }}
          />
        </Box>
      ))}
    </Marquee>
  );
};

export default TrendingMarquee;
