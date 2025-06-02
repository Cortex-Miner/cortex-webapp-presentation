
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Shield, Activity } from 'lucide-react';

const Hero = () => {
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
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/97c851ab-fa03-49d3-8098-22f2f90bf9a9.png" 
            alt="Cortex Logo" 
            className="w-32 h-32 animate-fade-in"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          CORTEX
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-cyan-300 mb-4 animate-fade-in">
          AI-Optimized GPU Miner for Ergo
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Next-generation open-source mining with machine learning optimization, 
          transparent code, and community-driven innovation for the Ergo blockchain.
        </p>
        
        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300">Open Source</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full">
            <Activity className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">Real-time</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
            Start Mining
          </Button>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg">
            View on GitHub
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
