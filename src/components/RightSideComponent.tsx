import { useState, useEffect } from "react";
import salesData from "../constants/sampleData.json";
import AnimatedSection from "./AnimatedSection";
import Header from "./Header";
import { SaleList } from "./SaleList";
import ToolbarComponent from "./ToolbarComponent";
import "./RightSideComponent.css";
import { Box, Container } from "@mui/material";

const PAGE_SIZE = 25;
interface SaleItem {
  topImage: string;
  ribbonText: string;
  status: string;
  tagText: string;
  centerIcon: string;
  title: string;
  subtitle: string;
  maxBuySol: number;
  progressValueSol: number;
  progressPercent: number;
  softcap: string;
  hardcap: string;
  liquidity: string;
  lock: string;
  // if there are any extra properties, you can enable this:
  // [key: string]: unknown;
}

const RightSideComponent: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const { allPresales, myContributions, favorites } = salesData;
  const allTabs = [allPresales, myContributions, favorites];
  const currentData = allTabs[tabIndex];

  // Reset visibleCount when tab changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [tabIndex]);

  const [loadingMore, setLoadingMore] = useState(false);

  const fetchMoreData = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, currentData.length));
      setLoadingMore(false);
    }, 2000);
  };

  const hasMore = visibleCount < currentData.length;
  console.log(currentData[0]);
  const visibleData = currentData
    .slice(0, visibleCount)

    .map((item: SaleItem) => ({
      timeRemaining: "",
      ...item,
    }));

  return (
    <Box className="rightSideComponent">
      <Container maxWidth={false} className="rightSideContainer">
        <Header />
        <AnimatedSection />
        <ToolbarComponent
          view={view}
          setView={setView}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
        <SaleList
          data={visibleData}
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
          loadingMore={loadingMore}
          view={view}
        />
      </Container>
    </Box>
  );
};

export default RightSideComponent;
