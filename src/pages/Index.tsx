
import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeatureShowcase from '@/components/home/FeatureShowcase';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
