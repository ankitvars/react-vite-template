import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
} from "@mui/material";
import React from "react";
import "./SaleCard.css";

export const SkeletonSaleCard: React.FC = () => (
  <Box className="salecard-root">
    <Card className="salecard-card" elevation={0}>
      <CardMedia>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={80}
          className="salecard-media"
        />
      </CardMedia>

      <CardContent className="salecard-content">
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <Skeleton
            variant="circular"
            width={8}
            height={8}
            className="salecard-status-dot"
          />
          <Skeleton
            variant="text"
            width={60}
            height={16}
            className="salecard-status"
          />
          <Skeleton
            variant="text"
            width={40}
            height={16}
            className="salecard-timer"
          />
          <Box flexGrow={1} />
          <Skeleton
            variant="rectangular"
            width={50}
            height={20}
            className="salecard-tag"
          />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
          <Skeleton
            variant="circular"
            width={42}
            height={42}
            className="salecard-centericon"
          />
          <Box className="salecard-titlebox" sx={{ width: "100%" }}>
            <Skeleton
              variant="text"
              width="60%"
              height={20}
              className="salecard-title"
            />
            <Skeleton
              variant="text"
              width="40%"
              height={16}
              className="salecard-subtitle"
            />
            <Skeleton
              variant="text"
              width="30%"
              height={16}
              className="salecard-maxbuy"
            />
          </Box>
        </Stack>
        <Stack direction="row">
          <Skeleton
            variant="text"
            width={60}
            height={16}
            className="salecard-progress-label"
          />
        </Stack>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={8}
          className="salecard-progress"
        />
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Skeleton
            variant="text"
            width={60}
            height={16}
            className="salecard-progress-value"
          />
          <Skeleton
            variant="text"
            width={40}
            height={16}
            className="salecard-progress-percent"
          />
        </Stack>
        <Stack direction="row" justifyContent="space-around" mb={1}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton
                variant="text"
                width={40}
                height={16}
                className="salecard-label"
              />
              <Skeleton
                variant="text"
                width={30}
                height={16}
                className="salecard-value"
              />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton
                variant="text"
                width={40}
                height={16}
                className="salecard-label"
              />
              <Skeleton
                variant="text"
                width={30}
                height={16}
                className="salecard-value"
              />
            </Stack>
          </Box>
          <Box textAlign="right">
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton
                variant="text"
                width={40}
                height={16}
                className="salecard-label"
              />
              <Skeleton
                variant="text"
                width={30}
                height={16}
                className="salecard-value"
              />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton
                variant="text"
                width={40}
                height={16}
                className="salecard-label"
              />
              <Skeleton
                variant="text"
                width={30}
                height={16}
                className="salecard-value"
              />
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1}>
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              className="salecard-iconbtn"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              className="salecard-iconbtn"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              className="salecard-iconbtn"
            />
          </Stack>
          <Skeleton
            variant="circular"
            width={32}
            height={32}
            className="salecard-iconbtn"
          />
          <Stack direction="row" spacing={1}>
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              className="salecard-iconbtn"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              className="salecard-iconbtn"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              className="salecard-iconbtn"
            />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  </Box>
);
