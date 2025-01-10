import React from 'react';
import { SectionBackground } from '../components/common/SectionBackground';
import { StatsGrid } from '../components/Stats';
import { Mission, Values } from '../components/about';
import { CareerPreview } from '../components/careers';
import { DonateSection } from '../components/DonateSection';
import { Footer } from '../components/Footer/Footer';

export function About() {
  return (
    <div className="overflow-x-hidden">
      <div id="mission" className="relative bg-[#5de0e6]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5de0e6]/50 via-transparent to-[#5de0e6]/30" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5de0e6]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#5de0e6]/20 to-transparent" />
          
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  transform: `rotate(${i * 15}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative pt-32 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Mission />
            <div id="stats" className="mb-0">
              <StatsGrid />
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 bg-[#5de0e6]">
        <div className="h-full bg-gradient-to-b from-[#5de0e6] to-transparent" />
      </div>

      <DonateSection />

      <div id="values">
        <SectionBackground className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Values />
          </div>
        </SectionBackground>
      </div>

      <DonateSection />

      <div id="careers">
        <SectionBackground className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CareerPreview />
          </div>
        </SectionBackground>
      </div>
      
      <Footer />
    </div>
  );
}