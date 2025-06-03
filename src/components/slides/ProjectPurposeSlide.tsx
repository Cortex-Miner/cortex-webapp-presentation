
import React from 'react';
import { Card } from "@/components/ui/card";
import { Shield, Activity, Brain, Network } from 'lucide-react';

const ProjectPurposeSlide = () => {
  const features = [
    {
      icon: Shield,
      text: "Transparency & auditability"
    },
    {
      icon: Activity,
      text: "Real-time GPU control"
    },
    {
      icon: Brain,
      text: "AI-powered mining optimization"
    },
    {
      icon: Network,
      text: "Full Stratum & solo node mining support"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            What is Cortex?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Cortex is a next-gen open-source CUDA GPU miner for the Ergo blockchain, focused on:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-blue-500/50 transition-all duration-300 p-6 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-lg text-gray-300">{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPurposeSlide;
