import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the fundraising program work?",
    answer: "We create a custom online store for your school featuring branded merchandise. Your community can purchase items year-round, and you earn funds from every sale."
  },
  {
    question: "Is there any upfront cost?",
    answer: "No! There are absolutely no upfront costs or inventory requirements. We handle all production and shipping costs. You only earn money - you never spend it."
  },
  {
    question: "How long does it take to get started?",
    answer: "The process is quick! After a 15-minute consultation, we'll create your custom designs within 24-48 hours. Once approved, your store goes live within days."
  },
  {
    question: "How do we receive our funds?",
    answer: "Funds are automatically deposited into your program's account monthly with detailed reports of all sales and earnings."
  },
  {
    question: "What kind of support do you provide?",
    answer: "You'll have a dedicated fundraising advisor to help with everything from campaign strategy to technical support, ensuring your success."
  },
  {
    question: "Do you handle shipping and production?",
    answer: "Yes! We manage all production, shipping, and customer service, letting you focus on your program while we handle the logistics."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 relative overflow-hidden bg-[#57c3e7]">
      {/* Shimmering overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-50 max-w-2xl mx-auto">
            Get quick answers about our fundraising program
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-[#57c3e7] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors rounded-xl group ${
                    openIndex === index ? 'bg-gray-100' : ''
                  }`}
                >
                  <span className="font-medium text-gray-900 text-sm pr-4 group-hover:text-blue-500 transition-colors">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-48 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 pb-3 text-gray-600 text-sm border-t border-[#57c3e7]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}