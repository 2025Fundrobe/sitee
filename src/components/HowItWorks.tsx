import React from 'react';

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100" style={{ border: '4px solid #57c3e7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#57c3e7' }}>
          ↘️ How It Works ↙️
          </h2>
          <p className="text-gray-600 text-lg">Learn how our platform can help you achieve your fundraising goals.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#57c3e7' }}>Step 1 📅</h3>
            <p className="text-gray-600 text-center">Book your onboarding call to start the design process</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#57c3e7' }}>Step 2 🏫</h3>
            <p className="text-gray-600 text-center">Engage your students while we build your store</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#57c3e7' }}>Step 3 📢</h3>
            <p className="text-gray-600 text-center">Begin marketing to start bringing in donation orders</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#57c3e7' }}>Step 4 💰</h3>
            <p className="text-gray-600 text-center">Celebrate your funding and fulfill donor orders</p>
          </div>
        </div>
      </div>
    </section>
  );
}