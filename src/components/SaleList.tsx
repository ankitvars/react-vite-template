import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { SaleCard, SaleCardProps } from "./SaleCard";

type ViewMode = "grid" | "list";

interface SaleListProps {
  data: SaleCardProps[];
}

const VIEW_MODES = {
  GRID: "grid",
  LIST: "list",
} as const;

export const SaleList: React.FC<SaleListProps> = ({ data }) => {
  const [view, setView] = React.useState<ViewMode>(VIEW_MODES.GRID);

  // Load persisted view mode
  React.useEffect(() => {
    const storedView = sessionStorage.getItem("saleView") as ViewMode;
    if (storedView === VIEW_MODES.LIST || storedView === VIEW_MODES.GRID) {
      setView(storedView);
    }
  }, []);

  // Persist view mode changes
  React.useEffect(() => {
    sessionStorage.setItem("saleView", view);
  }, [view]);

  const isGridView = view === VIEW_MODES.GRID;

  if (!data?.length) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No presales found.
        </Typography>
      </Box>
    );
  }

  const renderedCards = React.useMemo(
    () =>
      data.map((sale, index) => (
        <Box key={index} sx={isGridView ? gridItemStyle : listItemStyle}>
          <SaleCard {...sale} />
        </Box>
      )),
    [data, isGridView]
  );

  return isGridView ? (
    <Box sx={gridContainerStyle}>{renderedCards}
    </Box>
  ) : (
    <Stack spacing={2} sx={{ px: 2, py: 1 }}>{renderedCards}</Stack>
  );
};

// Styles extracted for clarity
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
