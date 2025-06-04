
import React from 'react';
import { Github, Users, Target, Heart } from 'lucide-react';

const FinalSlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
            <img 
              src="/lovable-uploads/97c851ab-fa03-49d3-8098-22f2f90bf9a9.png" 
              alt="Cortex Logo" 
              className="relative w-24 h-24 object-contain drop-shadow-2xl animate-pulse"
            />
          </div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Thank You
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Cortex represents the next evolution in cryptocurrency mining—combining transparency, 
          AI optimization, and community collaboration for ErgoHack 10.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-cyan-500/20">
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
            <p className="text-gray-300 text-center">AI-driven optimization pushing mining efficiency forward</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-blue-500/20">
            <Github className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
            <p className="text-gray-300 text-center mb-4">Fully transparent with community auditing and collaboration</p>
            <a 
              href="https://github.com/orgs/Cortex-Miner/repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline text-sm"
            >
              github.com/orgs/Cortex-Miner/repositories
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-purple-500/20">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300 text-center">Built by miners, for miners, advancing the ecosystem</p>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-6 border border-red-500/20 mb-8">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6" />
            Donations
          </h3>
          <div className="bg-slate-900/50 rounded p-3 border border-slate-600">
            <p className="text-gray-300 text-sm mb-2">ERG Address:</p>
            <code className="text-cyan-400 text-xs break-all">
              9h3dCuaU9BkyriZi2EG4xDagckZ1vGiT8xpXwdvvGtWkH9FnhgZ
            </code>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-cyan-400 mb-4">ErgoHack 10 Submission</p>
          <p className="text-gray-400">Project by Arohbe</p>
        </div>
      </div>
    </section>
  );
};

export default FinalSlide;
