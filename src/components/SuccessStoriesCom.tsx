import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionBackground } from './common/SectionBackground';
import { StatsGrid } from './Stats';
import { DonateSection } from './DonateSection';
import { DonorsReel } from './DonorsReel';
import { MapPin, School } from 'lucide-react';
import { fetchSuccessStories } from '../lib/supabase';
import { Footer } from './Footer/Footer';

interface SuccessStory {
  id: number;
  title: string;
  school: string;
  location: string;
  raised: string;
  imageUrl: string;
  instructorImage: string;
  sections: {
    backstory: string;
    challenge: string;
    solution: string;
    results: string;
    movingForward: string;
  };
}

export function SuccessStories() {
  const navigate = useNavigate();
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStories = async () => {
      try {
        const data = await fetchSuccessStories();
        // Filter out "Orchestra Harmony" and "Drama Club Productions"
        const filteredData = data.filter(
          (story: SuccessStory) =>
            story.title !== "Orchestra Harmony" && story.title !== "Drama Club Productions"
        );
        setStories(filteredData);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      } finally {
        setLoading(false);
      }
    };

    getStories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SectionBackground className="pt-24 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Gold Box Section */}
          <div className="relative mb-6 sm:mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-lg opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 p-1 rounded-2xl">
              <div className="bg-white px-4 md:px-8 py-6 sm:py-12 rounded-xl">
                <div className="text-center">
                  <div className="inline-block relative">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold relative pb-4 sm:pb-6">
                      {/* Base text with gradient */}
                      <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent relative">
                        Success Stories
                      </span>

                      {/* Shine effect overlay - hidden on mobile */}
                      <span className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-sm animate-shimmer" 
                        style={{
                          '--rotation': '25deg',
                          maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                        } as React.CSSProperties & { '--rotation': string }}
                      />

                      {/* Additional shine layer - hidden on mobile */}
                      <span className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-md animate-shimmer delay-75"
                        style={{
                          '--rotation': '-15deg',
                          maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                        } as React.CSSProperties & { '--rotation': string }}
                      />

                      {/* Neon underline */}
                      <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 animate-pulse shadow-[0_0_15px_#fcd34d,0_0_30px_#fcd34d,0_0_45px_#fcd34d]" />
                      <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-[3px] animate-pulse opacity-95" />
                      <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-[6px] animate-pulse opacity-90" />
                    </h1>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 sm:mt-12">
                    Discover how programs across the region have transformed their fundraising with Fundrobe
                  </p>
                </div>

                <div className="mt-8 sm:mt-12">
                  <StatsGrid />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {stories.map((story) => {
              const [location, instructor] = story.location.split(' - ');

              return (
                <div 
                  key={story.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(`/success/${story.id}`)}
                >
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-gray-600">
                        <School className="w-4 h-4 mr-2" />
                        <span className="text-center flex-1">{story.school}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-center flex-1">{location}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center space-y-3">
                      <div className="text-[#5de0e6] font-medium text-center">
                        {instructor}
                      </div>
                      <div className="bg-[#5de0e6]/10 text-[#5de0e6] px-3 py-1 rounded-full font-medium">
                        {story.raised}
                      </div>
                    </div>
                    <div className="mt-4">
                      <p dangerouslySetInnerHTML={{ __html: story.sections.backstory }}></p>
                      <p dangerouslySetInnerHTML={{ __html: story.sections.challenge }}></p>
                      <p dangerouslySetInnerHTML={{ __html: story.sections.solution }}></p>
                      <p dangerouslySetInnerHTML={{ __html: story.sections.results }}></p>
                      <p dangerouslySetInnerHTML={{ __html: story.sections.movingForward }}></p>
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