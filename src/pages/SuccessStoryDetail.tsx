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
              alt={story.school}
              className="w-full h-[400px] object-cover"
            />
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {story.school}
                  </h1>
                  <p className="text-[#5de0e6] font-medium">{story.location}</p>
                </div>
                <div className="bg-[#5de0e6] text-gray-900 px-4 py-2 rounded-full text-lg font-medium">
                  {story.raised}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">{story.story}</p>
                
                <h2 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600 mb-6">
                  Like many schools, {story.school} faced the challenge of maintaining and upgrading their 
                  facilities and programs while working with limited resources. Traditional fundraising 
                  methods were becoming less effective and required significant volunteer time and effort.
                </p>

                <h2 className="text-xl font-bold text-gray-900 mb-4">The Solution</h2>
                <p className="text-gray-600 mb-6">
                  By partnering with FunDrobe, {story.school} implemented a year-round fundraising 
                  solution through custom spirit wear. This approach provided:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Sustainable, passive income throughout the year</li>
                  <li>Professional designs that resonated with the community</li>
                  <li>Zero upfront costs or inventory management</li>
                  <li>Automated ordering and fulfillment</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-900 mb-4">The Results</h2>
                <p className="text-gray-600 mb-6">
                  Within the first year, {story.school} raised {story.raised} through their custom 
                  spirit wear program. This success allowed them to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Fund essential program improvements</li>
                  <li>Reduce volunteer burnout</li>
                  <li>Build stronger community engagement</li>
                  <li>Create a sustainable funding source</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
      <Footer />
    </>
  );
}