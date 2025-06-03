
import React from 'react';

const TitleSlide = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-purple-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-blue-400/20 rotate-12 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-cyan-500/20 rotate-45 animate-ping"></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo with improved styling */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
            <img 
              src="/lovable-uploads/97c851ab-fa03-49d3-8098-22f2f90bf9a9.png" 
              alt="Cortex Logo" 
              className="relative w-32 h-32 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          CORTEX
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-cyan-300 mb-6 animate-fade-in">
          AI-Optimized, Open GPU Miner for Ergo
        </p>
        
        {/* Project info */}
        <div className="space-y-4 mb-8 animate-fade-in">
          <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
            <span className="text-2xl">💡</span>
            An Ergohack 10 Project by Arohbe
          </p>
          <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
            <span className="text-2xl">🚀</span>
            Bridging performance, transparency, and intelligent optimization in mining
          </p>
        </div>
      </div>
    </section>
  );
};

export default TitleSlide;
