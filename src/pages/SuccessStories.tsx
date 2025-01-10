import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionBackground } from '../components/common/SectionBackground';
import { StatsGrid } from '../components/Stats';
import { DonateSection } from '../components/DonateSection';
import { DonorsReel } from '../components/DonorsReel';
import { ArrowRight } from 'lucide-react';
import { successStories } from '../data/successStories';
import { Footer } from '../components/Footer/Footer';

export function SuccessStories() {
  const navigate = useNavigate();

  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-lg opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 p-1 rounded-2xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    Success Stories
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Discover how schools across the region have transformed their fundraising with Fundrobe
            </p>
          </div>

          <div className="mb-16">
            <StatsGrid />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/success/${story.id}`)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={story.imageUrl}
                    alt={story.school}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{story.school}</h3>
                      <p className="text-[#5de0e6]">{story.location}</p>
                    </div>
                    <div className="bg-[#5de0e6]/10 text-[#5de0e6] px-4 py-2 rounded-full font-medium">
                      {story.raised}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{story.story}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-[#5de0e6] text-[#5de0e6] group-hover:bg-[#5de0e6] group-hover:text-white transition-all duration-300">
                    Read Full Story 
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>
      <DonateSection />
      <DonorsReel />
      <Footer />
    </>
  );
}