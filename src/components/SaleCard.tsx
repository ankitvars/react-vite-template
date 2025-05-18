import { Icon } from "@iconify/react";
import AddIcon from "@mui/icons-material/Add";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import './DetailInfo.css';
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import topIcon from "../assets/promotions/2.svg";
import centerIcon from "../assets/chains/sol.png";
import "./SaleCard.css";
import Grid from "@mui/material/Grid";

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
  id: string;
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

        <CardMedia
          component="img"
          src={topImage}
          alt=""
          className="salecard-media"
        />

        <CardContent className="salecard-content">
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            {/* <FiberManualRecordIcon className="salecard-status-dot" /> */}
            <Box className="custom-box-jze36l" />
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
            <Chip
              label={tagText}
              size="small"
              variant="outlined"
              className="salecard-tag"
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
            <Box
              component="img"
              src={centerIcon}
              alt=""
              className="salecard-centericon"
            />
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

          {/* Softcap and Hardcap section */}
          <Grid container className="salecard-info-grid">
            <Grid className="salecard-info-item">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={1}
                className="salecard-info-stack"
              >
                <Typography className="salecard-info-label" variant="body2">
                  Softcap
                </Typography>
                <Typography className="salecard-info-value" variant="body2">
                  {softcap}
                </Typography>
              </Stack>
            </Grid>
            <Grid className="salecard-info-item">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={1}
                className="salecard-info-stack"
              >
                <Typography className="salecard-info-label" variant="body2">
                  Hardcap
                </Typography>
                {hardcap === "∞" ? (
                  <svg
                    style={{ width: 20, height: 20, color: "rgb(12, 175, 96)" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37"
                    />
                  </svg>
                ) : (
                  <Typography className="salecard-info-value" variant="body2">
                    {hardcap}
                  </Typography>
                )}
              </Stack>
            </Grid>

            {/* Divider rows */}
            <Grid className="salecard-info-item">
              <Divider className="salecard-info-divider" />
            </Grid>
            <Grid className="salecard-info-item">
              <Divider className="salecard-info-divider" />
            </Grid>

            <Grid className="salecard-info-item">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={1}
                className="salecard-info-stack"
              >
                <Typography className="salecard-info-label" variant="body2">
                  Liquidity
                </Typography>
                <Typography className="salecard-info-value" variant="body2">
                  {liquidity}
                </Typography>
              </Stack>
            </Grid>
            <Grid className="salecard-info-item">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={1}
                className="salecard-info-stack"
              >
                <Typography className="salecard-info-label" variant="body2">
                  Lock
                </Typography>
                <Typography className="salecard-info-value" variant="body2">
                  {lock}
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="salecard-icon-row"
          >
            {/* Left icon group */}
            <Stack direction="row" spacing={1} className="salecard-icon-group">
              <IconButton
                size="small"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                className="salecard-icon"
              >
                <Icon
                  icon="mdi:earth"
                  width="20"
                  height="20"
                  className="salecard-icon"
                />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                className="salecard-icon"
              >
                <Icon
                  icon="cib:telegram-plane"
                  width="20"
                  height="20"
                  className="salecard-icon"
                />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                className="salecard-icon"
              >
                <Icon
                  icon="mdi:twitter"
                  width="20"
                  height="20"
                  className="salecard-icon"
                />
              </IconButton>
            </Stack>

            {/* Main plus button */}
            <IconButton size="medium" className="salecard-icon-main">
              <AddIcon />
            </IconButton>

            {/* Right icon group */}
            <Stack direction="row" spacing={1} className="salecard-icon-group">
              <IconButton size="small" className="salecard-icon">
                <Badge badgeContent={0} color="primary">
                  <Icon
                    icon="eva:message-circle-outline"
                    width="20"
                    height="20"
                    className="salecard-icon"
                  />
                </Badge>
              </IconButton>
              <IconButton size="small" disabled className="salecard-icon">
                <Icon
                  icon="eva:bell-outline"
                  width="20"
                  height="20"
                  className="salecard-icon"
                />
              </IconButton>
              <IconButton size="small" className="salecard-icon">
                <Icon
                  icon="eva:heart-outline"
                  width="20"
                  height="20"
                  className="salecard-icon"
                />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
