
import React from 'react';
import { Github, Users, Target } from 'lucide-react';

const ConclusionSlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/97c851ab-fa03-49d3-8098-22f2f90bf9a9.png" 
            alt="Cortex Logo" 
            className="w-24 h-24 animate-pulse"
          />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          The Future of Mining
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Cortex represents the next evolution in cryptocurrency mining—combining the transparency of open source, 
          the power of AI optimization, and the strength of community collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-cyan-500/20">
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
            <p className="text-gray-300 text-center">AI-driven optimization pushing mining efficiency to new heights</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-blue-500/20">
            <Github className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
            <p className="text-gray-300 text-center">Fully open-source with reproducible builds and community auditing</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-purple-500/20">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300 text-center">Built by miners, for miners, with shared improvements for all</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-cyan-400 mb-4">ErgoHack 10 Submission</p>
          <p className="text-gray-400">Advancing the Future of Decentralized Mining</p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSlide;
