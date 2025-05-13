// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  Paper,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import solLogo from "../assets/logo/sol_logo.svg";
import gemPointSvg from "../assets/logo/GemPoints.svg";

const messages = [
  "Create a SOL sale without market ID FEES!",
  "Vector Smart Chain is live on our app!",
];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));      // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px

  const [currentMessage, setCurrentMessage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Responsive typography sizes
  const msgFontSize = isMobile
    ? "0.7rem"
    : isTablet
      ? "0.8rem"
      : "0.875rem";

  const buttonFontSize = isMobile ? "0.65rem" : "0.75rem";
  const iconSize = isMobile ? 10 : 12;
  const gemFontSize = isMobile ? "0.65rem" : "0.75rem";

  return (
    <Paper
      elevation={4}
      sx={{
        color: "#fff",
        backgroundColor: "rgba(18, 24, 31, 0.6)",
        border: "none",
        borderBottom: "1px solid rgba(145, 158, 171, 0.32)",
        boxShadow: "none",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            flexDirection: isMobile || isTablet ? "column" : "row",
            alignItems: isMobile || isTablet ? "stretch" : "center",
            px: isMobile ? 1 : 2,
            py: isMobile ? 0.5 : 1,
          }}
        >
          {/* Left side marquee */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              flexGrow: 1,
              mb: isMobile || isTablet ? 1 : 0,
              overflow: "hidden",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{ position: "relative", width: "100%" }}
            >
              <Typography
                variant="subtitle2"
                component={Link}
                href="#"
                underline="none"
                target="_blank"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.2s ease-in-out",
                  fontSize: msgFontSize,
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating
                    ? "translateY(-2px)"
                    : "translateY(2px)",
                }}
              >
                {currentMessage === 1 ? (
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    style={{ marginRight: 4, fontSize: iconSize, color: "#fff" }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-flex",
                      width: iconSize,
                      height: iconSize,
                      mx: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
                        bgcolor: "rgb(12,175,96)",
                        opacity: 0.75,
                      }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        width: iconSize,
                        height: iconSize,
                        borderRadius: "50%",
                        bgcolor: "rgb(12,175,96)",
                      }}
                    />
                  </Box>
                )}
                {messages[currentMessage]}
              </Typography>
            </Box>
          </Stack>

          {/* Right side controls */}
          <Stack
            direction="row"
            spacing={isMobile ? 1 : 2}
            alignItems="center"
            sx={{
              width: isMobile || isTablet ? "100%" : "auto",
              justifyContent: isMobile || isTablet ? "space-between" : "flex-end",
            }}
          >
            <Link href="https://solsale.app" target="_blank" underline="none">
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  fontSize: buttonFontSize,
                  minHeight: isMobile ? 28 : 35,
                  px: isMobile ? 1 : 2,
                  borderRadius: 2,
                  border: "1px solid rgba(145, 158, 171, 0.32)",
                  "&:hover": {
                    backgroundColor: "rgba(145, 158, 171, 0.08)",
                    borderColor: "#fff",
                  },
                }}
              >
                <Box
                  component="img"
                  src={solLogo}
                  alt="solsale"
                  sx={{ width: iconSize, height: iconSize, mr: 0.5 }}
                />
                <Typography
                  variant="caption"
                  fontSize={buttonFontSize}
                  fontWeight={600}
                  color="#fff"
                >
                  SolSale
                </Typography>
              </Button>
            </Link>

            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                },
              }}
            >
              <Box
                component="img"
                src={gemPointSvg}
                alt="gem point"
                sx={{
                  width: iconSize,
                  height: iconSize,
                }}
              />
              <Typography variant="caption" fontSize={gemFontSize} color="#fff">
                0
              </Typography>
            </Stack>

            <Button
              variant="outlined"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                fontSize: buttonFontSize,
                minHeight: isMobile ? 28 : 35,
                px: isMobile ? 1 : 2,
                borderRadius: 2,
                border: "1px solid rgba(145, 158, 171, 0.32)",
                "&:hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                  borderColor: "#fff",
                },
              }}
            >
              <Typography variant="body2" fontSize={buttonFontSize} fontWeight={700} color="#fff">
                Connect Wallet
              </Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Header;
