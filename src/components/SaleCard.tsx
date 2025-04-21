// SaleCard.tsx
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import { keyframes } from "@mui/system";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PublicIcon from "@mui/icons-material/Public";
import TelegramIcon from "@mui/icons-material/Telegram";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PushPinIcon from "@mui/icons-material/PushPin";

export interface SaleCardProps {
  topImage: string;
  ribbonText: string; // e.g. "3% REF"
  status: string; // e.g. "SALE LIVE"
  timeRemaining: string; // e.g. "00:01:41:19"
  tagText: string; // e.g. "AUDIT"
  centerIcon: string; // URL for the small icon at top‑center
  title: string; // e.g. "Neptune Exchange"
  subtitle: string; // e.g. "Fair Launch"
  maxBuySol: number; // e.g. 100
  progressValueSol: number; // e.g. 119.293
  progressPercent: number; // e.g. 11929.31
  softcap: string; // e.g. "1 SOL"
  hardcap: string; // e.g. "∞"
  liquidity: string; // e.g. "15%"
  lock: string; // e.g. "90 Days"
}

const borderMove = keyframes`
  0% { background-position: 0% 50% }
  100% { background-position: 100% 50% }
`;

export const SaleCard: React.FC<SaleCardProps> = ({
  topImage,
  ribbonText,
  status,
  timeRemaining,
  tagText,
  centerIcon,
  title,
  subtitle,
  maxBuySol,
  progressValueSol,
  progressPercent,
  softcap,
  hardcap,
  liquidity,
  lock,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "visible",
        borderRadius: 2,
        bgcolor: "#141826",
        transition: "transform .3s ease",
        border: "2px solid transparent",
        cursor: 'pointer',
        // animated gradient border via a pseudo-element
        "@keyframes borderMove": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "&:before": {
          content: '""',
          position: "absolute",
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          borderRadius: "inherit",
          background:
            "linear-gradient(90deg, #7928CA, #FF0080, #7928CA, #FF0080)",
          backgroundSize: "200% 200%",
          zIndex: 0,
          opacity: 0,
          transition: "opacity .3s ease",
        },
        "&:hover": {
          transform: "translateY(-8px)",
          "&:before": {
            opacity: 1,
            animation: `${borderMove} 3s linear infinite`,
          },
        },
        "&:hover:before": {
          opacity: 1,
          animation: "borderMove 3s linear infinite",
        },
      }}
    >
      {/* Top‐center icon */}
      <Box
        component="img"
        src={centerIcon}
        alt=""
        sx={{
          position: "absolute",
          top: -20,
          left: "50%",
          transform: "translateX(-50%)",
          width: 40,
          height: 40,
          zIndex: 2,
        }}
      />

      {/* Pin icon top‐right */}
      <PushPinIcon
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "rgba(255,255,255,0.6)",
          zIndex: 2,
        }}
      />

      {/* Ribbon */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: -30,
          px: 1.5,
          py: 0.5,
          bgcolor: "#28a745",
          color: "white",
          fontWeight: 600,
          fontSize: "0.75rem",
          transform: "rotate(45deg)",
          transformOrigin: "top right",
          zIndex: 2,
        }}
      >
        {ribbonText}
      </Box>

      {/* Top image */}
      <CardMedia component="img" src={topImage} alt="" />

      <CardContent
        sx={{ pt: 2, px: 2, pb: 2, position: "relative", zIndex: 1 }}
      >
        {/* Status / Timer / Tag */}
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <FiberManualRecordIcon
            sx={{ color: "#28a745", fontSize: "0.75rem" }}
          />
          <Typography variant="caption" color="white">
            {status}
          </Typography>
          <Typography variant="caption" color="white">
            {timeRemaining}
          </Typography>
          <Box flexGrow={1} />
          <Chip
            label={tagText}
            size="small"
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              height: 20,
              fontSize: "0.65rem",
            }}
          />
        </Stack>

        {/* Icon + Title + Subtitle + Max Buy */}
        <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
          <Box
            component="img"
            src={centerIcon}
            alt=""
            sx={{ width: 24, height: 24 }}
          />
          <Box>
            <Typography variant="subtitle1" color="white" fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="body2" color="rgb(121, 134, 134)">
              {subtitle} · Max Buy: {maxBuySol} SOL
            </Typography>
          </Box>
        </Stack>

        {/* Progress bar */}
        <LinearProgress
          variant="determinate"
          value={Math.min(progressPercent, 100)}
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.1)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 2,
              background: "linear-gradient(90deg, #7928CA, #FF0080)",
            },
            mb: 0.5,
          }}
        />
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography variant="caption" color="white">
            {progressValueSol.toFixed(3)} SOL
          </Typography>
          <Typography variant="caption" color="white">
            {progressPercent.toFixed(2)}%
          </Typography>
        </Stack>

        {/* Four key stats */}
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Box>
            <Typography variant="caption" color="rgb(121, 134, 134)">
              Softcap
            </Typography>
            <Typography variant="body2" color="white">
              {softcap}
            </Typography>
            <Typography variant="caption" color="rgb(121, 134, 134)">
              Liquidity
            </Typography>
            <Typography variant="body2" color="white">
              {liquidity}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography variant="caption" color="rgb(121, 134, 134)">
              Hardcap
            </Typography>
            <Typography variant="body2" color="white">
              {hardcap}
            </Typography>
            <Typography variant="caption" color="rgb(121, 134, 134)">
              Lock
            </Typography>
            <Typography variant="body2" color="white">
              {lock}
            </Typography>
          </Box>
        </Stack>

        {/* Bottom icons row */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
              <PublicIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
              <TelegramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Stack>

          <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
            <AddIcon fontSize="small" />
          </IconButton>

          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
              <NotificationsNoneIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgb(121, 134, 134)" }}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
