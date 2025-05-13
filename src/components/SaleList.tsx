// src/components/SaleList.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

import { SaleCard, SaleCardProps } from "./SaleCard";
import { SaleListView } from "./SaleListView";
import { SkeletonSaleCard } from "./SkeletonSaleCard";
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
  fetchMoreData = () => { },
  hasMore = false,
  loadingMore = false,
  view,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isGridView = view === VIEW_MODES.GRID;

  // Initial skeletons (first page)
  const initialSkeletons = Array.from({ length: 6 }).map((_, idx) => (
    <Box key={idx} sx={isGridView ? gridItemStyle : listItemStyle}>
      <SkeletonSaleCard />
    </Box>
  ));

  // Skeletons for “load more” (next page)
  const loadingMoreSkeletons = isGridView
    ? Array.from({ length: 3 }).map((_, idx) => (
      <Box key={`loading-more-${idx}`} sx={gridItemStyle}>
        <SkeletonSaleCard />
      </Box>
    ))
    : null;

  // Rendered real cards
  const renderedCards = useMemo(
    () =>
      data.map((sale, index) => (
        <Box
          key={index}
          sx={isGridView ? gridItemStyle : listItemStyle}
          onClick={() => navigate(`/sale/${sale.id}`, { state: sale })}
        >
          <SaleCard {...sale} />
        </Box>
      )),
    [data, isGridView, navigate]
  );

  // Simulate initial loading
  useEffect(() => {
    if (data.length > 0) {
      const timeout = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [data]);

  // No results state
  if (!isLoading && data.length === 0) {
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
          <Box sx={gridContainerStyle}>{initialSkeletons}</Box>
        ) : (
          <SkeletonSaleListView count={6} />
        )
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
          loader={null} // we'll append skeletons manually
        >
          {isGridView ? (
            <Box sx={gridContainerStyle}>
              {renderedCards}
              {loadingMore && loadingMoreSkeletons}
            </Box>
          ) : (
            <>
              <SaleListView data={data} />
              {loadingMore && <SkeletonSaleListView count={3} />}
            </>
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
