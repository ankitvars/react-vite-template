import { Stack, Paper, Skeleton } from "@mui/material";
import "./SaleListView.css";

export const SkeletonSaleListView: React.FC<{ count?: number }> = ({
  count = 6,
}) => (
  <Stack className="listRoot">
    {/* Header */}
    <Stack direction="row" className="listHeader">
      <Stack className="listProject">
        <Skeleton width={80} />
      </Stack>
      <Stack className="listChain">
        <Skeleton width={80} />
      </Stack>
      <Stack className="listSaleType">
        <Skeleton width={80} />
      </Stack>
      <Stack className="listStatus">
        <Skeleton width={80} />
      </Stack>
      <Stack className="listProgress">
        <Skeleton width={80} />
      </Stack>
    </Stack>
    {/* Skeleton rows */}
    {Array.from({ length: count }).map((_, idx) => (
      <Paper key={idx} elevation={0} className="listPaper">
        <Stack direction="row" className="listRow" alignItems="center">
          {/* Project */}
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            className="listProject"
          >
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton width={120} height={24} />
          </Stack>
          {/* Blockchain */}
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            className="listChain"
          >
            <Skeleton variant="rectangular" width={24} height={24} />
            <Skeleton width={40} height={20} />
          </Stack>
          {/* Sale Type */}
          <Stack className="listSaleType">
            <Skeleton width={60} height={20} />
          </Stack>
          {/* Sale Status */}
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            className="listStatus"
          >
            <Skeleton variant="circular" width={16} height={16} />
            <Skeleton width={50} height={20} />
            <Skeleton width={60} height={20} />
          </Stack>
          {/* Progress */}
          <Stack className="listProgress" sx={{ minWidth: 180, maxWidth: 180 }}>
            <Skeleton
              variant="rectangular"
              height={8}
              width="100%"
              sx={{ borderRadius: 4, mb: 1 }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Skeleton width={60} height={20} />
              <Skeleton width={40} height={20} />
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    ))}
  </Stack>
);
