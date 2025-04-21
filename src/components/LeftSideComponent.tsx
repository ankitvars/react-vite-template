import React from "react";
import { Box, Divider, Drawer, styled } from "@mui/material";
import LeftSideHeader from "./LeftSideHeader";
import NavigationList from "./NavigationList";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 180,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 180,
    boxSizing: "border-box",
    backgroundColor: "rgba(18, 24, 31, 0.6)",
    color: "#fff",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const LeftSideComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        borderRight: "1px solid rgb(121, 134, 134)",
      }}
    >
      <StyledDrawer variant="permanent" anchor="left">
        <LeftSideHeader />
        <Divider />
        <NavigationList />
      </StyledDrawer>
    </Box>
  );
};

export default LeftSideComponent;
