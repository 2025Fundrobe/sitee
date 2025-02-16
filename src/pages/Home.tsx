import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features/Features';
import { HowItWorks } from '../components/HowItWorks'; // Correct import path
import { Testimonials } from '../components/Testimonials';
import { AboutBrand } from '../components/AboutBrand';
import { Footer } from '../components/Footer/Footer';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <AboutBrand />
      <Footer />
    </>
  );
}