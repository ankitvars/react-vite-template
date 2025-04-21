import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { SaleCard, SaleCardProps } from "./SaleCard";

interface SaleListProps {
  data: SaleCardProps[];
}

export const SaleList: React.FC<SaleListProps> = ({ data }) => {
  const [view, setView] = React.useState<"grid" | "list">("grid");

  // Persist view preference
  React.useEffect(() => {
    const storedView = sessionStorage.getItem("saleView");
    if (storedView === "list" || storedView === "grid") {
      setView(storedView as "grid" | "list");
    }
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem("saleView", view);
  }, [view]);

  if (data.length === 0) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No presales found.
        </Typography>
      </Box>
    );
  }

  return view === "grid" ? (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        p: 2,
      }}
    >
      {data.map((sale, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: "100%", // full width on mobile
              sm: "calc(50% - 16px)", // two per row on tablets
              md: "calc(33.333% - 16px)", // three per row on desktop
            },
          }}
        >
          <SaleCard {...sale} />
        </Box>
      ))}
    </Box>
  ) : (
    <Stack spacing={2} sx={{ p: 2 }}>
      {data.map((sale, index) => (
        <Box key={index}>
          <SaleCard {...sale} />
        </Box>
      ))}
    </Stack>
  );
};
