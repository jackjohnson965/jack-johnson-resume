import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
      <span className="text-sm text-amber-300 font-mono">Scroll Down</span>
      <div className="w-6 h-10 border-2 border-amber-300 rounded-full relative">
        <div className="w-1 h-2 bg-amber-300 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-down"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;