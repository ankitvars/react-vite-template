import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

// Example SVG icons. You can replace them with MUI icons or Iconify icons as needed:
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import logo from "../assets/logo/logo.svg"; // Replace with your logo path

// Styled drawer for controlling width, background, etc.
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
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Drawer (docked on the left). */}
      <StyledDrawer variant="permanent" anchor="left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 1,
          }}
        >
          {/* Top section with logo, name, social icons */}
          <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ px: 3 }}
            >
              <img alt="logo" src={logo} height={28} width={28} />
              <Stack spacing={0} sx={{ flexGrow: 1 }}>
                {/* Decrease the font size slightly */}
                <Typography
                  variant="h6"
                  marginTop={"10px"}
                  sx={{
                    fontSize: "0.9375rem",
                    fontWeight: "700",
                  }}
                >
                  GemPad
                </Typography>
                <Stack direction="row">
                  <IconButton
                    size="small"
                    href="#"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "lightgray" }}
                  >
                    <TelegramIcon
                      sx={{
                        fontSize: "1rem",
                      }}
                    />
                  </IconButton>
                  <IconButton
                    size="small"
                    href="#"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "lightgray" }}
                  >
                    <XIcon
                      sx={{
                        fontSize: "0.875rem",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Divider />

          {/* Navigation Lists */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              // Custom scrollbar styling
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(0, 0, 0, 0.1)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "4px",
              },
            }}
          >
            {/* Explore */}
            <List
              subheader={
                <ListSubheader
                  sx={{
                    bgcolor: "inherit",
                    color: "rgb(12, 175, 96)",
                    fontSize: "0.85rem",
                  }}
                >
                  Explore
                </ListSubheader>
              }
            >
              <ListItemButton component="a" href="/presale/all">
                <ListItemIcon>
                  {/* Replace with your SVG or MUI icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="--secondary-text"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3z" />
                  </svg>
                </ListItemIcon>
                {/* Decrease font size for list items */}
                <ListItemText
                  primary="Presales"
                  primaryTypographyProps={{ sx: { fontSize: "0.7rem" } }}
                />
              </ListItemButton>

              <ListItemButton component="a" href="/locks">
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Locks"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton component="a" href="/staking">
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-64a32 32 0 0 1-32 32v4a12 12 0 0 1-24 0v-4h-12a12 12 0 0 1 0-24h36a8 8 0 0 0 0-16h-24a32 32 0 0 1 0-64v-4a12 12 0 0 1 24 0v4h12a12 12 0 0 1 0 24h-36a8 8 0 0 0 0 16h24a32 32 0 0 1 32 32" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Staking"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton component="a" href="/otcsale/all">
                <ListItemIcon>
                  {/* Example placeholder box for an SVG */}
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="OTC Sales"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>
            </List>

            {/* Developers */}
            <List
              subheader={
                <ListSubheader
                  sx={{
                    bgcolor: "inherit",
                    color: "rgb(12, 175, 96)",
                    fontSize: "0.85rem",
                  }}
                >
                  Developers
                </ListSubheader>
              }
            >
              <ListItemButton component="a" href="/create">
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Create"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton
                component="a"
                href="/profile/undefined?type=myprojects"
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Manage"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton component="a" href="/utility">
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.8 3.8 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.8 3.8 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Utility"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>
            </List>

            {/* Extras */}
            <List
              subheader={
                <ListSubheader
                  sx={{
                    bgcolor: "inherit",
                    color: "rgb(12, 175, 96)",
                    fontSize: "0.85rem",
                  }}
                >
                  Extras
                </ListSubheader>
              }
            >
              <ListItemButton
                component="a"
                href="https://gempad.gitbook.io/the-gempad/"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Docs"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton
                component="a"
                href="https://t.me/GemPadPresaleAlerts"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Sale Alerts"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton
                component="a"
                href="https://gempad.gitbook.io/the-gempad/all-about-gempad/alpha-club"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Alpha Club"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>

              <ListItemButton
                component="a"
                href="https://solsale.app"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "grey.400",
                      borderRadius: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="SolSale"
                  primaryTypographyProps={{ sx: { fontSize: "0.8rem" } }}
                />
              </ListItemButton>
            </List>
          </Box>

          <Divider />

          {/* Version link at the bottom */}
          <Box sx={{ p: 1 }}>
            <Typography
              variant="body2"
              component="a"
              href="https://gempad.gitbook.io/the-gempad/all-about-gempad/changelog"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: "none",
                color: "text.secondary",
                fontSize: "0.75rem",
              }}
            >
              Ver evo10724
            </Typography>
          </Box>
        </Box>
      </StyledDrawer>
    </Box>
  );
};

export default LeftSideComponent;
