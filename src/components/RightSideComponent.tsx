import React from 'react';
import salesData from "../constants/sampleData.json";
import AnimatedSection from './AnimatedSection';
import Header from './Header';
import { SaleList } from "./SaleList";
import ToolbarComponent from './ToolbarComponent';


interface RightSideComponentProps {
  // Define any props you might need here
}

const RightSideComponent: React.FC<RightSideComponentProps> = ({ }: RightSideComponentProps) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const { allPresales, myContributions, favorites } = salesData;
  const currentData: any =
    tabIndex === 0 ? allPresales : tabIndex === 1 ? myContributions : favorites;
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Header />
      <AnimatedSection />
      <ToolbarComponent tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <SaleList data={currentData} />

    </div>
  );
};

export default RightSideComponent;