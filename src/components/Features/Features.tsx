import React from 'react';
import { Calendar, DollarSign, Truck, Users, Palette } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FeatureHighlight } from './FeatureHighlight';
import { SectionBackground } from '../common/SectionBackground';

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
    <SectionBackground className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced 3D Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#5de0e6]/20 via-blue-400/15 to-[#4bc5cb]/20 animate-gradient"
            style={{
              transform: 'perspective(1000px) rotateX(10deg)',
              backgroundSize: '200% 200%',
            }}
          />
          {/* Secondary gradient layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-[#5de0e6]/15 via-transparent to-blue-400/15 animate-gradient"
            style={{
              transform: 'perspective(1000px) rotateY(5deg)',
              backgroundSize: '200% 200%',
              animationDelay: '1s',
            }}
          />
          {/* Highlight layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-gradient"
            style={{
              transform: 'perspective(1000px) rotateZ(2deg)',
              backgroundSize: '200% 200%',
              animationDelay: '2s',
            }}
          />
        </div>

        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Do We Mean By Cost-Free Funding Year-Round?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of school programs just like yours that have transformed their fundraising 
              with our Multi-Use platform including <strong className="underline"><u>fundraising news, tips, and updates throughout the week, and of course our all inclusive fund-all-year personalized merchandise fundraising platform</u></strong>!
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <FeatureHighlight 
              icon={Calendar}
              title="Year-Round Fundraising Solution"
              description="Transform your fundraising with our continuous revenue stream. Unlike traditional one-time events, Fundrobe provides year-long passive income through customized spirit wear sales, supporting your school's needs throughout the entire academic year."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <FeatureCard 
              icon={<DollarSign className="w-8 h-8 text-[#5de0e6]" />}
              title="No Upfront Cost"
              description="Launch your fundraising campaign without any monetary investment from you. All we need is some of your time so we can have our designers create something absolutely one of a kind!"
            />
            <FeatureCard 
              icon={<Truck className="w-8 h-8 text-[#5de0e6]" />}
              title="Full-Service Solution"
              description="We handle everything from production to delivery, letting you focus on what matters most."
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
      </div>
    </SectionBackground>
  );
}