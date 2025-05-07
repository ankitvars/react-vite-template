import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PublicIcon from "@mui/icons-material/Public";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import topIcon from "../assets/cardlogo.svg";
import cardImage from "../assets/images/banner1.png";
import centerIcon from "../assets/images/cardtitle.webp";
import "./SaleCard.css";

export interface SaleCardProps {
  topImage: string;
  ribbonText: string;
  status: string;
  timeRemaining: string;
  tagText: string;
  title: string;
  subtitle: string;
  maxBuySol: number;
  progressValueSol: number;
  progressPercent: number;
  softcap: string;
  hardcap: string;
  liquidity: string;
  lock: string;
}
export const SaleCard: React.FC<SaleCardProps> = ({
  topImage,
  ribbonText,
  status,
  timeRemaining,
  tagText,
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
    <Box className="salecard-root">
      <Card className="salecard-card" elevation={0}>
        <Stack className="salecard-topicon-stack">
          <Stack className="salecard-topicon-inner">
            <Box className="salecard-topicon-bg" />
            <img className="salecard-topicon-img" src={topIcon} alt="" />
            <Box className="salecard-topicon-triangle" />
          </Stack>
        </Stack>
        
        <svg
          className="salecard-pushpin"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3"
          />
        </svg>

        <Stack className="salecard-ribbon-stack">
          <Typography className="salecard-ribbon-text" variant="body1">
            {ribbonText}
          </Typography>
        </Stack>

        <CardMedia component="img" src={cardImage} alt="" className="salecard-media" />

        <CardContent className="salecard-content">
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <FiberManualRecordIcon className="salecard-status-dot" />
            <Typography variant="caption" className="salecard-status">
              {status}
            </Typography>
            <Typography
              variant="caption"
              className="salecard-timer"
              style={{ display: timeRemaining ? "block" : "none" }}
            >
              {timeRemaining}
            </Typography>
            <Box flexGrow={1} />
            <Chip label={tagText} size="small" variant="outlined" className="salecard-tag" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
            <Box component="img" src={centerIcon} alt="" className="salecard-centericon" />
            <Box className="salecard-titlebox">
              <Typography variant="subtitle2" className="salecard-title">
                {title}
              </Typography>
              <Typography variant="body2" className="salecard-subtitle">
                {subtitle}
              </Typography>
              <Typography variant="body2" className="salecard-maxbuy">
                Max Buy: {maxBuySol} SOL
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row">
            <Typography variant="caption" className="salecard-progress-label">
              Progress
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={Math.min(progressPercent, 100)}
            className="salecard-progress MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-buffer"
          />
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography variant="caption" className="salecard-progress-value">
              {progressValueSol.toFixed(3)} SOL
            </Typography>
            <Typography variant="caption" className="salecard-progress-percent">
              {progressPercent.toFixed(2)}%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-around" mb={1}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" className="salecard-label">
                  Softcap
                </Typography>
                <Typography variant="caption" className="salecard-value">
                  {softcap}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" className="salecard-label">
                  Liquidity
                </Typography>
                <Typography variant="caption" className="salecard-value">
                  {liquidity}
                </Typography>
              </Stack>
            </Box>
            <Box textAlign="right">
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" className="salecard-label">
                  Hardcap
                </Typography>
                <Typography variant="caption" className="salecard-value">
                  {hardcap}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" className="salecard-label">
                  Lock
                </Typography>
                <Typography variant="caption" className="salecard-value">
                  {lock}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={1}>
              <IconButton size="small" className="salecard-iconbtn">
                <PublicIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" className="salecard-iconbtn">
                <TelegramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" className="salecard-iconbtn">
                <ClearIcon fontSize="small" />
              </IconButton>
            </Stack>
            <IconButton size="small" className="salecard-iconbtn">
              <AddIcon fontSize="small" />
            </IconButton>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" className="salecard-iconbtn">
                <ChatBubbleOutlineIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" className="salecard-iconbtn">
                <NotificationsNoneIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" className="salecard-iconbtn">
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};