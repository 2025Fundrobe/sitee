import React from 'react';


export function HowItWorksBackground() {
  return (
    <>
      {/* Main Background Image */}
      <img
        src="https://i.im.ge/2025/01/06/zp6n9P.ezgif-com-video-to-gif-converter.gif"
        alt="Students collaborating"
        className="absolute inset-0 w-full h-full object-cover opacity-20" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />

      {/* Ambient Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#5de0e6]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/10 blur-3xl" />
    </>
  );
}
