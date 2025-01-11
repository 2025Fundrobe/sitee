import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  'Savannah',
  'Pooler',
  'Richmond Hill',
  'Hinesville',
  'Statesboro',
  'Brunswick',
  'Bluffton',
  'Hilton Head',
  'Beaufort',
  'Charleston'
];

export function BrandPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#7de8ec] via-[#6de5ea] to-[#7de8ec] py-4 mt-[-1px]">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Title with Stronger Gradient */}
        <h2 className="text-center text-2xl font-bold mb-2 flex items-center justify-center" style={{ fontFamily: "'Varela Round', serif" }}>
          <MapPin className="w-6 h-6 mr-2 animate-bounce text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]" />
          <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
            <u>Current Operation Cities</u>
          </span>
        </h2>

        {/* Enhanced Call to Action Text with Stronger Gradient - Now Smaller */}
        <p className="text-center mb-4 max-w-2xl mx-auto">
          <span className="text-base bg-gradient-to-r from-white to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] font-medium">
            Help us provide more monetary opportunities for extra-curricular students & programs by starting your fundraiser today!
          </span>
        </p>
        
        {/* Scrolling Container */}
        <div className="relative flex overflow-hidden mx-auto max-w-5xl">
          {/* Scrolling Content */}
          <div className="flex space-x-24 animate-scroll-right whitespace-nowrap py-4">
            {[...cities, ...cities].map((city, index) => (
              <div
                key={`${city}-${index}`}
                className="relative group"
              >
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/40 to-white/30 rounded-lg blur transition-all duration-300 group-hover:bg-white/50 group-hover:blur-md" />
                
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/50 via-white/60 to-white/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Enhanced Text Content */}
                <div className="relative px-6 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] group-hover:from-white group-hover:to-white transition-all duration-300">
                    {city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
            style={{
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}