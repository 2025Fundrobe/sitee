import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionBackground } from '../components/common/SectionBackground';
import { StatsGrid } from '../components/Stats';
import { DonateSection } from '../components/DonateSection';
import { DonorsReel } from '../components/DonorsReel';
import { ArrowRight, MapPin, School } from 'lucide-react';
import { successStories } from '../data/successStories';
import { Footer } from '../components/Footer/Footer';

export function SuccessStories() {
  const navigate = useNavigate();

  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gold Box Section */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-lg opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 p-1 rounded-2xl">
              <div className="bg-white px-8 py-12 rounded-xl">
                <div className="text-center">
                  <div className="inline-block relative">
                    <h1 className="text-4xl md:text-5xl font-bold relative">
                      {/* Base text with gradient */}
                      <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent relative">
                        Success Stories
                      </span>

                      {/* Shine effect overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-sm animate-shimmer" 
                        style={{
                          '--rotation': '25deg',
                          maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                        }}
                      />

                      {/* Additional shine layer */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-md animate-shimmer delay-75"
                        style={{
                          '--rotation': '-15deg',
                          maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                        }}
                      />

                      {/* Neon underline */}
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 animate-pulse shadow-[0_0_15px_#fcd34d,0_0_30px_#fcd34d,0_0_45px_#fcd34d]" />
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-[3px] animate-pulse opacity-95" />
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-[6px] animate-pulse opacity-90" />
                    </h1>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                    Discover how programs across the region have transformed their fundraising with Fundrobe
                  </p>
                </div>

                <div className="mt-12">
                  <StatsGrid />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => {
              const [location, instructor] = story.location.split(' - ');
              
              return (
                <div 
                  key={story.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(`/success/${story.id}`)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center text-gray-700">
                            <School className="w-4 h-4 mr-1" />
                            <span>{story.school}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center text-[#5de0e6]">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span className="font-medium">{location}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <div className="text-gray-700 font-medium bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 rounded-full border border-gray-200">
                              {instructor}
                            </div>
                          </div>
                        </div>
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
              );
            })}
          </div>
        </div>
      </SectionBackground>
      <DonateSection />
      <DonorsReel />
      <Footer />
    </>
  );
}