import React from "react";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LockIcon from "@mui/icons-material/Lock";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AddIcon from "@mui/icons-material/Add";
import ModeIcon from "@mui/icons-material/Mode";
import HandymanIcon from "@mui/icons-material/Handyman";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import TelegramIcon from "@mui/icons-material/Telegram";
import CrueltyFreeIcon from "@mui/icons-material/CrueltyFree";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

// Example nav data for each section
const navSections = [
  {
    title: "Explore",
    items: [
      { text: "Presales", icon: <DashboardIcon />, link: "" },
      { text: "Locks", icon: <LockIcon />, link: "" },
      { text: "Staking", icon: <MonetizationOnOutlinedIcon />, link: "" },
      { text: "OTC Sales", icon: <SyncAltIcon />, link: "" },
    ],
  },
  {
    title: "Developers",
    items: [
      { text: "Create", icon: <AddIcon />, link: "" },
      { text: "Manage", icon: <ModeIcon />, link: "" },
      { text: "Utility", icon: <HandymanIcon />, link: "" },
    ],
  },
  {
    title: "Extras",
    items: [
      { text: "Docs", icon: <InsertDriveFileIcon />, link: "" },
      { text: "Sale Alerts", icon: <TelegramIcon />, link: "" },
      { text: "Alpha Club", icon: <CrueltyFreeIcon />, link: "" },
      { text: "SolSale", icon: <HourglassEmptyIcon />, link: "" },
    ],
  },
];

const NavigationList: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { background: "rgba(0, 0, 0, 0.1)" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "4px",
          },
        }}
      >
        {navSections.map((section) => (
          <List
            key={section.title}
            subheader={
              <ListSubheader
                sx={{
                  boxSizing: "border-box",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "16px",
                  paddingBottom: "8px",
                  fontWeight: 800,
                  lineHeight: 1.5,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  fontFamily:
                    "__Poppins_4de79c, __Poppins_Fallback_4de79c, Helvetica, Arial, sans-serif",
                  cursor: "pointer",
                  display: "inline-flex",
                  color: "rgb(99, 115, 129)",
                  listStyle: "none",
                  transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                  bgcolor: "inherit",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {section.title}
              </ListSubheader>
            }
          >
            {section.items.map((item) => (
              <ListItemButton
                key={item.text}
                component="a"
                href={item.link}
                sx={{
                  py: 0.5, // reduce vertical gap
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.04)", // subtle hover effect
                  },
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: 1, color: "rgb(99, 115, 129)" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ sx: { fontSize: "0.7rem" } }}
                />
              </ListItemButton>
            ))}
          </List>
        ))}
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        {/* Video will be show here */}
        <Typography
          variant="body2"
          component="a"
          href="https://gempad.gitbook.io/the-gempad/all-about-gempad/changelog"
          target="_blank"
          rel="noopener"
          sx={{
            textDecoration: "none",
            color: "rgb(99, 115, 129)",
            fontSize: "0.75rem",
          }}
        >
          Ver evo10724
        </Typography>
      </Box>
    </>
  );
};

export default NavigationList;
