import React from 'react';
import { Heart, DollarSign, Users, Trophy } from 'lucide-react';
import { DonorsReel } from '../components/DonorsReel';
import { Footer } from '../components/Footer/Footer';

const impactStats = [
  {
    icon: DollarSign,
    stat: "$2M+",
    label: "Raised for Schools"
  },
  {
    icon: Users,
    stat: "100K+",
    label: "Students Supported"
  },
  {
    icon: Trophy,
    stat: "500+",
    label: "Programs Funded"
  }
];

const donationTiers = [
  {
    amount: "$5",
    title: "Bronze Donor",
    description: "Help provide essential educational resources",
    benefits: [
      "Provide art supplies for one student",
      "Support classroom creativity"
    ],
    color: "text-amber-600",
    link: "https://buy.stripe.com/test_cN2bIPf1J4D8c4U5kk"
  },
  {
    amount: "$20",
    title: "Silver Donor",
    description: "Support classroom learning and activities",
    benefits: [
      "Provide art supplies for one student",
      "Support classroom creativity",
      "Fund educational field trips",
      "Supply learning materials"
    ],
    color: "text-gray-400",
    link: "https://buy.stripe.com/test_00g5kL0Vn2Ht1ri000"
  },
  {
    amount: "$75",
    title: "Gold Donor",
    description: "Enable comprehensive program support",
    benefits: [
      "Provide art supplies for one student",
      "Support classroom creativity",
      "Fund educational field trips",
      "Supply learning materials",
      "Support after-school programs",
      "Provide sports equipment",
      "Enable music education"
    ],
    color: "text-yellow-400",
    link: "https://buy.stripe.com/test_aEU8wDf1J6Lgd8Y8wy"
  },
  {
    amount: "$150",
    title: "Diamond Donor",
    description: "Transform educational opportunities",
    benefits: [
      "Provide art supplies for one student",
      "Support classroom creativity",
      "Fund educational field trips",
      "Supply learning materials",
      "Support after-school programs",
      "Provide sports equipment",
      "Enable music education",
      "Fund technology resources",
      "Support STEM programs",
      "Enable performance arts"
    ],
    color: "text-blue-300",
    link: "https://buy.stripe.com/test_eVadQXg5N6Lg9WM8wz"
  }
];

export function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800">
      <div id="top" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 [text-shadow:_2px_2px_0_rgb(0_0_0)]">
              Support Our Mission
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your donation helps us provide sustainable funding solutions to schools across the nation.
              Every contribution makes a difference in a student's education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.stat}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {donationTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className={`text-3xl font-bold ${tier.color} mb-2`}>{tier.amount}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="space-y-2 text-left">
                    {tier.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <Heart className={`w-4 h-4 ${tier.color} mr-2 flex-shrink-0`} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Donate {tier.amount}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DonorsReel />
      <Footer />
    </div>
  );
}