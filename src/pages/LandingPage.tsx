import React from 'react';
import LeftSideComponent from '../components/LeftSideComponent';
import RightSideComponent from '../components/RightSideComponent';

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        backgroundColor: 'rgb(18,24,31)',
        color: '#fff',
      }}
    >
      {/* Left side navigation */}
      <LeftSideComponent />

      {/* The rest of the page (right side) */}
      <div style={{ flex: 1 }}>
        <RightSideComponent />
      </div>
    </div>
  );
};

export default LandingPage;
