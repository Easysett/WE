import React from 'react';
import ServicesSection from '../components/ServicesSection';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import AboutUs from '../components/AboutUs';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs/>
      <CTASection />
    </div>
  );
};

export default HomePage;