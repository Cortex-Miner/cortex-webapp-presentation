
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
        <div className="bg-slate-800/30 border border-slate-600 rounded-lg p-4 text-center">
          <img 
            src="/lovable-uploads/4bfdf81a-c30f-4525-b12d-877bb8edaac2.png" 
            alt="Ergo Node Manager UI" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NodeManagerSlide;
