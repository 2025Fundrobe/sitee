import React from 'react';
import { Circle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonialData';
import { SectionBackground } from '../common/SectionBackground';
import './Testimonials.css'; // Import the CSS file for the shine effect

export function Testimonials() {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/success');
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <SectionBackground className="py-20 bg-gray-100 border-4 border-[#57c3e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-white border-4 border-[#57c3e7] p-12 rounded-lg shadow-lg w-full max-w-6xl mx-auto shine-box">
            <h2 className="text-5xl font-bold mb-10 flex items-center justify-center text-[#000000] testimonials-header">
              🐝 Most Recent Buzz On Fundrobe 🐝
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
             What are people saying about Fundrobe? Check out some of our most recent success stories below!
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleSeeMore}
            className="inline-flex items-center bg-[#FFD700] text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-[#e0e4e8] transition-colors shadow-lg hover:shadow-xl"
          >
            See More Success Stories
          </button>
        </div>
      </div>
    </SectionBackground>
  );
}