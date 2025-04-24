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
  Divider,
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
import centerIcon from "../assets/images/cardtitle.webp";
import cardImage from "../assets/images/banner1.png";
import topIcon from "../assets/cardlogo.svg";

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

const rotateBorder = keyframes`
  0% {
    background-position: 0% 0%, 100% 0%, 100% 100%, 0% 100%;
  }
  100% {
    background-position: 100% 0%, 100% 100%, 0% 100%, 0% 0%;
  }
`;

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
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          borderRadius: 2,
          padding: "2px",
          background: `
            linear-gradient(90deg, #7928CA, #FF0080) top,
            linear-gradient(180deg, #7928CA, #FF0080) right,
            linear-gradient(270deg, #7928CA, #FF0080) bottom,
            linear-gradient(0deg, #7928CA, #FF0080) left
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 2px, 2px 100%, 100% 2px, 2px 100%",
          backgroundPosition: "0% 0%, 100% 0%, 100% 100%, 0% 100%",
          transition: "opacity .3s ease",
          opacity: 0,
          pointerEvents: "none",
        },
        "&:hover": {
          transform: "translateY(-20px) scale(1.02)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Card
        elevation={0}
        sx={{
          position: "relative",
          overflow: "visible",
          borderRadius: 10,
          bgcolor: "#141826",
          transition: "transform .3s ease",
          zIndex: 2,
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Box
          component="img"
          src={topIcon}
          alt=""
          sx={{
            width: 40,
            height: 40,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            transform: "translate(-50%)",
            marginLeft: "50%",
            top: "-25px",
            borderRadius: 50,
          }}
        />
        <PushPinIcon
          sx={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            color: "rgb(99, 115, 129)",
            zIndex: 3,
            userSelect: "none",
            width: "1em",
            display: "inline-block",
            fill: "currentcolor",
            flexShrink: 0,
            fontSize: "1.5rem",
            height: "30px",
            transform: "rotate(45deg)",
            transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.4px 12px",
            top: "20px",
            right: "-50px",
            width: "160px",
            position: "absolute",
            backgroundColor: "rgb(12, 175, 96)",
            transform: "rotate(45deg)",
            zIndex: 2,
            textTransform: "uppercase",
            color: "white",
            fontWeight: 600,
            fontSize: "0.75rem",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px",
          }}
        >
          {ribbonText}
        </Box>

        {/* Card image */}
        <CardMedia
          component="img"
          src={cardImage}
          alt=""
          sx={{
            color: "transparent",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />

        {/* Card content */}
        <CardContent
          sx={{
            pt: 2,
            px: 2,
            pb: 2,
            position: "relative",
            zIndex: 1,
            backgroundColor: "rgb(22, 29, 39)",
            color: "rgb(255, 255, 255)",
            backgroundImage: "none",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
            width: "100%",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          {/* Status / Timer / Tag */}
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <FiberManualRecordIcon
              sx={{
                color: "rgb(142, 51, 255)",
                fontSize: "0.75rem",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "rgb(142, 51, 255)",
              }}
            />

            <Typography variant="caption" color="white">
              {status}
            </Typography>
            <Typography
              variant="caption"
              color="white"
              display={timeRemaining ? "block" : "none"}
            >
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
          <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
            <Box
              component="img"
              src={centerIcon}
              alt=""
              sx={{
                width: 24,
                height: 58,
                position: "relative",
                display: "inline-flex",
                verticalAlign: "middle",
                flexShrink: 0,
                paddingTop: "16px",
                "@media (min-width: 0px)": {
                  minWidth: "42px",
                },
              }}
            />

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                whiteSpace: "pre",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize={14}
                color="white"
                fontWeight={500}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                fontSize={12}
                fontWeight={600}
                color="white"
              >
                {subtitle}
              </Typography>
              <Typography variant="body2" fontSize={12} color="lightgray">
                Max Buy: {maxBuySol} SOL
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row">
            <Typography variant="caption" color="white">
              Progress
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={Math.min(progressPercent, 100)}
            sx={{
              height: 8,
              borderRadius: 1,
              marginBottom: "2px",
              position: "relative",
              overflow: "hidden",
              display: "block",
              zIndex: 0,
              backgroundImage:
                "radial-gradient(rgb(6, 87, 48) 0%, rgb(6, 87, 48) 16%, transparent 42%)",
              backgroundPosition: "0px -23px",
              animation:
                "3s linear 0s infinite normal none running animation-1lq7mgo",
              "& .MuiLinearProgress-bar": {
                borderRadius: 2,
                background: "linear-gradient(90deg, #7928CA, #FF0080)",
              },
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
          <Stack direction="row" justifyContent="space-around" mb={1}>
            <Box>
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: 400, lineHeight: "1.57143", fontSize:"0.75rem" }}
                >
                  Softcap
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 400,
                    color: "rgb(12, 175, 96)",
                    lineHeight: "1.57143",
                  }}
                >
                  {softcap}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: 400, lineHeight: "1.57143", fontSize:"0.75rem" }}
                >
                  Liquidity
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 400,
                    color: "rgb(12, 175, 96)",
                    lineHeight: "1.57143",
                  }}
                >
                  {liquidity}
                </Typography>
              </Stack>
            </Box>
            <Box textAlign="right">
              <Stack direction={"row"} spacing={1} alignItems="center">
                 <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: 400, lineHeight: "1.57143", fontSize:"0.75rem" }}
                >
                  Hardcap
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 400,
                    color: "rgb(12, 175, 96)",
                    lineHeight: "1.57143",
                  }}
                >
                  {hardcap}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center">
                 <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: 400, lineHeight: "1.57143", fontSize:"0.75rem" }}
                >
                  Lock
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 400,
                    color: "rgb(12, 175, 96)",
                    lineHeight: "1.57143",
                  }}
                >
                  {lock}
                </Typography>
              </Stack>
            </Box>
          </Stack>
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
    </Box>
  );
};
