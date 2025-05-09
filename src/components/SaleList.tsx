import { useEffect, useState, useMemo } from "react";
import { Stack, Typography, Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { SaleCard, SaleCardProps } from "./SaleCard";
import { SkeletonSaleCard } from "./SkeletonSaleCard";
import { SaleListView } from "./SaleListView";
import { SkeletonSaleListView } from "./SkeletonSaleListView";

type ViewMode = "grid" | "list";

interface SaleListProps {
  data: SaleCardProps[];
  fetchMoreData?: () => void;
  hasMore?: boolean;
  loadingMore?: boolean;
  view?: ViewMode;
}

const VIEW_MODES = {
  GRID: "grid",
  LIST: "list",
} as const;

export const SaleList: React.FC<SaleListProps> = ({
  data,
  fetchMoreData = () => {},
  hasMore = false,
  loadingMore = false,
  view,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      const timeout = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [data]);

  const isGridView = view === VIEW_MODES.GRID;

  const skeletons = Array.from({ length: 6 }).map((_, idx) => (
    <Box key={idx} sx={isGridView ? gridItemStyle : listItemStyle}>
      <SkeletonSaleCard />
    </Box>
  ));

  const loadingMoreSkeletons = Array.from({ length: 3 }).map((_, idx) => (
    <Box
      key={`loading-more-${idx}`}
      sx={isGridView ? gridItemStyle : listItemStyle}
    >
      <SkeletonSaleCard />
    </Box>
  ));

  const renderedCards = useMemo(
    () =>
      data.map((sale, index) => (
        <Box key={index} sx={isGridView ? gridItemStyle : listItemStyle}>
          <SaleCard {...sale} />
        </Box>
      )),
    [data, isGridView],
  );

  if (!isLoading && !data?.length) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No presales found.
        </Typography>
      </Box>
    );
  }

  return (
    <div className="infinite-scroll-component__outerdiv">
      {isLoading ? (
        isGridView ? (
          <Box sx={gridContainerStyle}>{skeletons}</Box>
        ) : (
          <SkeletonSaleListView />
        )
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            loadingMore ? (
              isGridView ? (
                <Box sx={gridContainerStyle}>{loadingMoreSkeletons}</Box>
              ) : (
                <SkeletonSaleListView count={3} />
              )
            ) : null
          }
        >
          {isGridView ? (
            <Box sx={gridContainerStyle}>{renderedCards}</Box>
          ) : (
            <SaleListView data={data} />
          )}
        </InfiniteScroll>
      )}
    </div>
  );
};

const gridContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 2,
  px: 2,
  py: 1,
};

const gridItemStyle = {
  width: {
    xs: "100%",
    sm: "calc(50% - 16px)",
    md: "calc(33.333% - 16px)",
  },
  my: 4,
};

const listItemStyle = {
  width: "100%",
};
