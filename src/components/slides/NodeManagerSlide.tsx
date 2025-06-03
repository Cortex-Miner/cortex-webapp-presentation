
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const NodeManagerSlide = () => {
  const features = [
    {
      emoji: "🎛",
      text: "Deploys Ergo nodes (testnet/mainnet) via UI"
    },
    {
      emoji: "📝",
      text: "Supports live config editing, version selection"
    },
    {
      emoji: "🛰",
      text: "Exposes REST APIs for full node control"
    },
    {
      emoji: "📦",
      text: "Handles static and dynamic node storage"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Node Manager
            </h2>
            <CheckCircle className="w-8 h-8 text-green-400" />
            <span className="text-green-400 font-bold text-xl">Complete</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-green-500/50 transition-all duration-300 p-6 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </span>
                <p className="text-lg text-gray-300">{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Screenshot area */}
        <div className="mt-12 bg-slate-800/30 border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400 text-lg">Screenshot Area</p>
          <p className="text-slate-500 text-sm mt-2">Node Manager UI Demo</p>
        </div>
      </div>
    </section>
  );
};

export default NodeManagerSlide;
