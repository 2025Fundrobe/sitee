import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { AboutBrand } from '../components/AboutBrand';
import { BrandPartners } from '../components/BrandPartners';
import { DonateSection } from '../components/DonateSection';
import { Footer } from '../components/Footer/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <BrandPartners />
      <HowItWorks />
      <Features />
      <Testimonials />
      <DonateSection />
      <AboutBrand />
      <Footer />
    </>
  );
}