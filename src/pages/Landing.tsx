import React from 'react';
import Hero from '../components/public/Hero';
import HowItWorks from '../components/public/HowItWorks';
import PublicHeader from '../components/public/PublicHeader';
import Testimonials from '../components/public/Testimonials';
import ValueProps from '../components/public/ValueProps';

interface LandingProps {}

const Landing: React.FC = (props: LandingProps) => {
  return (
    <>
      <div className="container mx-auto">
        <PublicHeader />
        <Hero />
        <ValueProps />
      </div>
      <HowItWorks />
      <div className="container mx-auto pt-12">
        <Testimonials />
      </div>
    </>
  );
};

export default Landing;
