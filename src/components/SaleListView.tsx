import {
  Stack,
  Paper,
  Badge,
  Avatar,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import { SaleCardProps } from "./SaleCard";
import "./SaleListView.css";
import badgeIcon from "../assets/promotions/2.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import topImage from "../assets/chains/shido.png";
interface SaleListViewProps {
  data: SaleCardProps[];
}

export const SaleListView: React.FC<SaleListViewProps> = ({ data }) => (
  <Stack className="listRoot">
    {/* Header */}
    <Stack direction="row" className="listHeader">
      <Stack className="listProject">Project</Stack>
      <Stack className="listChain">Blockchain</Stack>
      <Stack className="listSaleType">Sale Type</Stack>
      <Stack className="listStatus">Sale Status</Stack>
      <Stack className="listProgress">Progress</Stack>
    </Stack>
    {/* Data rows */}
    {data.map((sale, idx) => (
      <Paper key={idx} elevation={0} className="listPaper">
        <Stack direction="row" className="listRow">
          {/* Project */}
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            className="listProject"
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Avatar
                  src={badgeIcon}
                  className="listAvatarBadge"
                  sx={{ width: 20, height: 20 }}
                />
              }
              className="listBadge"
            >
              <Avatar
                src={topImage}
                alt={sale.title}
                className="listAvatarImg"
                sx={{ width: 40, height: 40 }}
              />
            </Badge>
            <Typography noWrap className="listProjectName" variant="body1">
              {sale.title}
            </Typography>
          </Stack>

          {/* Blockchain */}
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            className="listChain"
          >
            <Box
              component="img"
              src={"/src/assets/chains/sol.png"}
              className="listChainIcon"
              sx={{ width: 24, height: 24 }}
            />
            <Typography className="listChainText" noWrap variant="body2">
              SOL
            </Typography>
          </Stack>

          {/* Sale Type */}
          <Stack className="listSaleType">
            <Typography variant="subtitle2" className="listSaleTypeText">
              {sale.tagText}
            </Typography>
          </Stack>

          {/* Sale Status */}
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            className="listStatus"
          >
            <Stack className="listStatusStack">
              <FiberManualRecordIcon className="salecard-status-dot" />
              <Typography variant="caption" className="listStatusText">
                {sale.status}
              </Typography>
            </Stack>
            <Typography className="listTimer">
              <time dateTime={sale.timeRemaining}>{"2025-05-19"}</time>
            </Typography>
          </Stack>

          {/* Progress */}
          <Stack className="listProgress">
            <LinearProgress
              variant="buffer"
              value={Math.min(sale.progressPercent, 100)}
              valueBuffer={100}
              className="custom-progress-bar"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="listProgressDetails"
            >
              <Typography className="listProgressLabel" variant="body2">
                {sale.progressValueSol} <small>SOL</small>
              </Typography>
              {sale.hardcap === "∞" ? (
                <svg viewBox="0 0 24 24" className="listProgressSvg">
                  <path
                    fill="currentColor"
                    d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37"
                  />
                </svg>
              ) : (
                <Typography className="listProgressValue">
                  {sale.hardcap}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    ))}
  </Stack>
);
