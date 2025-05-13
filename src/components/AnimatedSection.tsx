// src/components/AnimatedSection.tsx
import React from "react";
import { Avatar, Box, useTheme, useMediaQuery } from "@mui/material";
import trendingIcon from "../assets/icons/trending.svg";
import AnimatedButton from "./AnimatedButton";
import TrendingMarquee from "./TrendingMarquee";

const AnimatedSection: React.FC = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm")); // show from sm (600px) up

  if (!isSm) {
    // hide entire section on xs
    return null;
  }

  // (you can keep your existing responsive sizing logic here if needed)
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingY: 2,
        paddingX: 3,
        overflow: "hidden",
      }}
    >
      <AnimatedButton />

      <Box
        sx={{
          mx: 2,
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24px",
          cursor: "pointer",
          boxSizing: "border-box",
          "&:hover": {
            bgcolor: "rgba(34, 96, 119, 0.1)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Avatar
          src={trendingIcon}
          sx={{
            width: 24,
            height: 24,
            filter: "invert(1) brightness(1)",
            "&:hover": {
              filter: "invert(1) brightness(2)",
            },
          }}
        />
      </Box>

      <TrendingMarquee />
    </Box>
  );
};

export default AnimatedSection;
