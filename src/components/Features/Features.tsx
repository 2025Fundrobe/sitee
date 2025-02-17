import React from 'react';
import { Calendar, DollarSign, Truck, Users, Palette } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FeatureHighlight } from './FeatureHighlight';
import { SectionBackground } from '../common/SectionBackground';
import './Features.css'; // Import the CSS file for the shine effect

const additionalFeatures = [
  {
    icon: Users,
    title: "Community Building",
    description: "Foster school spirit and unity through custom branded merchandise"
  },
  {
    icon: Palette,
    title: "Custom Design Service",
    description: "Professional designers create unique designs that represent your school"
  }
];

export function Features() {
  return (
    <SectionBackground className="py-20 features-section"> {/* Apply the features-section class */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-4 border-[#57c3e7] p-9 rounded-lg shadow-lg w-full max-w-5xl mx-auto shine-box"> {/* Updated outline color */}
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Need Funding All Year? ♻️
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands who have funded their programs <u>without school funding</u> with our <strong>all-in-one platform, offering news, tips, and a custom merchandise store.</strong>.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <FeatureHighlight 
            icon={Calendar}
            title="Year-Round Revenue"
            description="Unlike traditional one-time events, Fundrobe provides continuous passive income through customized spirit wear sales, supporting your program's needs throughout the entire year."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <FeatureCard 
            icon={<DollarSign className="w-8 h-8 text-[#5de0e6]" />}
            title="No Upfront Cost"
            description="Launch your fundraising campaign without any monetary investment. We handle all production and shipping costs."
          />
          <FeatureCard 
            icon={<Truck className="w-8 h-8 text-[#5de0e6]" />}
            title="Full-Service Solution"
            description="We handle everything from design to delivery, including production, shipping, and customer service. You focus on your program while we manage the rest."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {additionalFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<feature.icon className="w-8 h-8 text-[#5de0e6]" />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}