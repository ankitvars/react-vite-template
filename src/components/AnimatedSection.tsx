import { Avatar, Box } from "@mui/material";
import React from "react";
import trendingIcon from "../assets/icons/trending.svg";
import AnimatedButton from "./AnimatedButton";
import TrendingMarquee from "./TrendingMarquee";

const AnimatedSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        overflow: "hidden",
      }}
    >
      <AnimatedButton />
      {/* Wrap the icon in a Box to control the hover effect */}
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
