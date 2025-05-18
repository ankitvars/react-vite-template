import { Icon } from '@iconify/react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React from 'react';
import './DetailTabs.css';
import AboutComponent from './AboutComponent';
import SaleComponent from './SaleComponent';


const TokenomicsComponent = () => <div>Tokenomics Content</div>;
const LocksComponent = () => <div>Locks Content</div>;

const tabData = [
  { label: 'About', icon: 'mdi:book-open-variant', component: <AboutComponent /> },
  { label: 'Sale', icon: 'mdi:info-outline', component: <SaleComponent /> },
  { label: 'Tokenomics', icon: 'eva:pie-chart-2-fill', component: <TokenomicsComponent /> },
  { label: 'Locks', icon: 'eva:lock-outline', component: <LocksComponent /> },
];

export default function DetailTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack className="tabs-outer">
        <Tabs
          value={value}
          onChange={handleChange}
          className="tabs-root"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ className: 'custom-tabs-indicator' }}
        >
          {tabData.map((tab) => (
            <Tab
              key={tab.label}
              icon={<Icon icon={tab.icon} className="tab-icon" />}
              label={<Typography className="tab-label">{tab.label}</Typography>}
              className="tab-btn"
            />
          ))}
        </Tabs>
      </Stack>

      {tabData[value].component}
    </>
  );
}