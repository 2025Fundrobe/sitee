import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer';
import { successStories } from '../data/successStories';

export function SuccessStoryDetail() {
  const { id } = useParams();
  const story = successStories.find(s => s.id === Number(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  const [location, instructor] = story.location.split(' - ');

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
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-6">
                  {/* Profile Picture with Frame */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px]">
                      <img
                        src="https://i.postimg.cc/cC8ckDzM/F-7.png"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={story.instructorImage}
                        alt={instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h1>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-[#5de0e6] font-medium">{story.school}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-[#5de0e6] font-medium">{location}</p>
                      </div>
                      <p className="text-gray-700 font-medium bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 rounded-full border border-gray-200 inline-block">
                        {instructor}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#5de0e6] text-gray-900 px-4 py-2 rounded-full text-lg font-medium">
                  {story.raised}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Backstory Section */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">Backstory</h2>
                <p className="text-gray-600 mb-6">{story.sections.backstory}</p>
                
                {/* Challenge Section */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {story.sections.challenge}
                </div>

                {/* Solution Section */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">The Solution</h2>
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {story.sections.solution}
                </div>

                {/* Results Section */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">The Results</h2>
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {story.sections.results}
                </div>

                {/* Moving Forward Section */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">Moving Forward</h2>
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {story.sections.movingForward}
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