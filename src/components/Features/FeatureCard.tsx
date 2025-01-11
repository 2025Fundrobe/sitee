import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bulletPoints?: string[];
}

export function FeatureCard({ icon, title, description, bulletPoints }: FeatureCardProps) {
  return (
    <div className="relative group">
      {/* Animated gradient background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[length:200%_auto]" />
      
      {/* Card content */}
      <div className="relative bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="text-[#5de0e6] mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-[#5de0e6] rounded-full mr-2" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}