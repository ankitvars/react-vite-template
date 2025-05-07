import React from "react";
import { Box } from "@mui/material";

const TopIconBadge: React.FC<{ src: string }> = ({ src }) => (
  <Box
    component="img"
    src={src}
    alt=""
    sx={{
      width: 40,
      height: 40,
      zIndex: 3,
      position: "absolute",
      transform: "translate(-50%)",
      marginLeft: "50%",
      top: "-25px",
      borderRadius: 50,
    }}
  />
);

export default TopIconBadge;
