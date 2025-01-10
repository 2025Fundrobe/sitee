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
    <section className="relative overflow-hidden bg-gradient-to-r from-[#5de0e6] via-blue-500 to-[#4bc5cb] py-4 mt-[-1px]">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white text-2xl font-bold mb-2 flex items-center justify-center" style={{ fontFamily: "'Varela Round', serif" }}>
          <MapPin className="w-6 h-6 mr-2 animate-bounce" />
          <u>Current Operation Cities</u>
        </h2>
        
        {/* Scrolling Container */}
        <div className="relative flex overflow-hidden mx-auto max-w-5xl">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#5de0e6] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#4bc5cb] to-transparent z-10" />
          
          {/* Scrolling Content */}
          <div className="flex space-x-24 animate-scroll-right whitespace-nowrap py-4">
            {[...cities, ...cities].map((city, index) => (
              <div
                key={`${city}-${index}`}
                className="text-xl font-bold text-white/70 hover:text-white transition-colors duration-300"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}