import React from 'react';
import Header from './Header';

interface RightSideComponentProps {
  // Define any props you might need here
}

const RightSideComponent: React.FC<RightSideComponentProps> = ({ }: RightSideComponentProps) => {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <Header />
    </div>
  );
};

export default RightSideComponent;