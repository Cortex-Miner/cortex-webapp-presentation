
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import AIOptimization from '../components/AIOptimization';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <Hero />
      <Features />
      <AIOptimization />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
