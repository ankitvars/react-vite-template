import React from 'react';
import Header from './Header';
import AnimatedSection from './AnimatedSection';
import ToolbarComponent from './ToolbarComponent';

interface RightSideComponentProps {
  // Define any props you might need here
}

const RightSideComponent: React.FC<RightSideComponentProps> = ({ }: RightSideComponentProps) => {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <Header />
      <AnimatedSection />
      <ToolbarComponent />
    </div>
  );
};

export default RightSideComponent;