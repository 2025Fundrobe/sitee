import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { successStories } from '../data/successStories';

export function SuccessStoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Handle invalid or missing id
  if (!id) {
    navigate('/success');
    return null;
  }

  const story = successStories.find(s => s.id === Number(id));

  // Handle story not found
  if (!story) {
    navigate('/success');
    return null;
  }

  const [location, instructor] = story.location.split(' - ');

  const handleImNextClick = () => {
    navigate('/');
    setTimeout(() => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/success"
            className="inline-flex items-center text-[#5de0e6] hover:text-[#4bc5cb] mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Link>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-[400px] object-cover"
            />
            
            <div className="p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start mb-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 flex-1">
                  {/* Profile Picture with Frame */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] sm:w-[124px] h-[64px] sm:h-[124px]">
                      <img
                        src="https://i.postimg.cc/cC8ckDzM/F-7.png"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="relative z-10 w-12 h-12 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                      <img
                        src={story.instructorImage}
                        alt={instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h1>
                    <div className="flex flex-col items-center sm:items-start space-y-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-[#5de0e6] font-medium">{story.school}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-[#5de0e6] font-medium">{location}</p>
                      </div>
                      <p className="text-gray-700 font-medium bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 rounded-full border border-gray-200 inline-block">
                        {instructor}
                      </p>
                      {/* Amount raised - Only shown on mobile */}
                      <div className="sm:hidden mt-3">
                        <div className="bg-[#5de0e6] text-gray-900 px-4 py-2 rounded-full text-lg font-medium inline-block">
                          {story.raised}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Amount raised - Only shown on desktop */}
                  <div className="hidden sm:block">
                    <div className="bg-[#5de0e6] text-gray-900 px-4 py-2 rounded-full text-lg font-medium">
                      {story.raised}
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Backstory Section */}
                <div className="mb-12">
                  <div className="relative bg-gradient-to-r from-[#5de0e6]/10 to-[#4bc5cb]/10 p-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/5 via-transparent to-[#4bc5cb]/5 animate-shimmer"></div>
                    <p className="relative z-10 text-gray-700 leading-relaxed">
                      {story.sections.backstory}
                    </p>
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <div className="whitespace-pre-line text-gray-700">
                      {story.sections.challenge}
                    </div>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-[#5de0e6]/5 to-[#4bc5cb]/5 p-6 rounded-xl">
                    <div className="whitespace-pre-line text-gray-700">
                      {story.sections.solution}
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <div className="whitespace-pre-line text-gray-700">
                      {story.sections.results}
                    </div>
                  </div>
                </div>

                {/* Moving Forward Section */}
                <div className="mb-12">
                  <div className="relative bg-gradient-to-r from-[#5de0e6]/10 to-[#4bc5cb]/10 p-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/5 via-transparent to-[#4bc5cb]/5 animate-shimmer"></div>
                    <div className="relative z-10 whitespace-pre-line text-gray-700">
                      {story.sections.movingForward}
                    </div>
                  </div>
                </div>

                {/* I'M NEXT Button */}
                <div className="mt-12 text-center">
                  <button
                    onClick={handleImNextClick}
                    className="inline-flex items-center bg-[#5de0e6] text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-[#4bc5cb] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    I'M NEXT
                    <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
      <Footer />
    </>
  );
}