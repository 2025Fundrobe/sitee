import React from 'react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { HeartHandshake, MessageCircle, Clock, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { AnimatedHeader } from '../components/common/AnimatedHeader';
import { FAQSection } from '../components/support/FAQSection';

const features = [
  {
    icon: HeartHandshake,
    title: "Dedicated Support Advisor",
    description: "Get paired with a personal fundraising advisor who understands your program's unique needs"
  },
  {
    icon: MessageCircle,
    title: "Always Available",
    description: "Whether you're troubleshooting or brainstorming, we're here to help anytime"
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    description: "Get answers to your questions within hours, not days"
  },
  {
    icon: Users2,
    title: "Community Support",
    description: "Connect with other instructors and share fundraising success stories"
  }
];

export function Support() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800">
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedHeader as="h1" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </AnimatedHeader>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Ready to transform your school's fundraising? We're here to help you get started 
                and answer any questions you may have.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
                <ContactForm />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
                <ContactInfo />
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free Support, Always
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                At Fundrobe, we believe instructors should never have to pay for great service and support. 
                Your success is our success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="inline-block p-3 bg-purple-500/30 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-purple-200" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-100">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 mb-20">
              <FAQSection />
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of instructors who have transformed their fundraising with Fundrobe's 
                  dedicated support system.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                >
                  Start Your Campaign
                </Link>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}