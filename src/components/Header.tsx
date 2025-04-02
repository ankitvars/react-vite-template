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
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      elevation={4}
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 1100,
        color: "rgb(255,255,255)",
        backgroundColor: "rgb(18, 24, 31)",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              className="relative overflow-hidden"
            >
              <Typography
                variant="body1"
                component={Link}
                href=""
                underline="none"
                target="_blank"
                sx={{ color: "inherit" }}
                className={`transition-opacity duration-200 ease-in-out flex items-center ${
                  isAnimating
                    ? "opacity-0 translate-y-[-2px]"
                    : "opacity-100 translate-y-[2px]"
                }`}
              >
                {currentMessage === 1 ? (
                  <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
                ) : (
                  <>
                    <span className="relative flex size-3 mx-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                    </span>
                  </>
                )}{" "}
                {messages[currentMessage]}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Link href="https://solsale.app" target="_blank" underline="none">
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  minHeight: "35px",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(145, 158, 171, 0.32)",
                  "&:hover": {
                    backgroundColor: "rgba(145, 158, 171, 0.08)",
                    borderColor: "rgba(255, 255, 255, 1)",
                    borderWidth: "1px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={solLogo}
                  alt="solsale"
                  sx={{ width: 12, height: 12, mr: 0.5 }}
                />
                <Typography variant="caption" fontSize="11px" color="#fff" fontWeight={600}>
                  SolSale
                </Typography>
              </Button>
            </Link>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                  borderRadius: "14px",
                },
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <img
                alt="gem point"
                src={gemPointSvg}
                style={{
                  maxWidth: "100%",
                  display: "inline-block",
                  verticalAlign: "bottom",
                  height: "14px",
                  width: "14px",
                }}
              />
              <Typography variant="caption">0</Typography>
            </Stack>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                minHeight: "35px",
                padding: "5px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(145, 158, 171, 0.32)",
                "&:hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                  borderColor: "rgba(255, 255, 255, 1)",
                  borderWidth: "1px",
                },
              }}
            >
              <Typography variant="body2" color="#fff" fontWeight={700}>
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
