import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureHighlight({ icon: Icon, title, description }: FeatureHighlightProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      <div className="absolute top-0 right-0 bg-[#5de0e6]/10 w-64 h-64 rounded-full blur-3xl group-hover:bg-[#5de0e6]/20 transition-colors duration-300" />
      <div className="relative">
        <div className="inline-block bg-[#5de0e6]/10 p-3 rounded-xl mb-6">
          <Icon className="w-8 h-8 text-[#5de0e6]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}