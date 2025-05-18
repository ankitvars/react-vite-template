import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import logo from "../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";

const LeftSideHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 4, cursor: "pointer" }} onClick={() => navigate('/')}>
        <img alt="logo" src={logo} height={24} width={24} />
        <Stack spacing={0} sx={{ flexGrow: 1, alignItems: "center" }}>
          <Typography
            variant="h6"
            marginTop="10px"
            sx={{
              fontSize: "0.95rem",
              fontWeight: "700",
            }}
          >
            GemPad
          </Typography>
          <Stack direction="row" sx={{ marginTop: "-5px" }}>
            <IconButton
              size="small"
              href="/"
              target="_blank"
              rel="noopener"
              sx={{ color: "lightgray" }}
            >
              <TelegramIcon sx={{ fontSize: "1rem" }} />
            </IconButton>
            <IconButton
              size="small"
              href="/"
              target="_blank"
              rel="noopener"
              sx={{ color: "lightgray" }}
            >
              <XIcon sx={{ fontSize: "0.675rem" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LeftSideHeader;
