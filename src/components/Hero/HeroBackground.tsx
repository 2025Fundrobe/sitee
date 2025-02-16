import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Main Background Image */}
      <img
        src="https://i.postimg.cc/pX3VJ0Yb/Marketing-BG-FD-Site.png"
        alt="City skyline with children silhouettes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/45 to-transparent" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5de0e6]/10 to-transparent" />
    </div>
  );
}