
import React from 'react';
import { Card } from "@/components/ui/card";
import { Code, Database, Zap, Shield } from 'lucide-react';

const TechStackSlide = () => {
  const technologies = [
    {
      category: "Mining Core",
      icon: Zap,
      items: ["CUDA & OpenCL", "Ergo Autolykos", "GPU Optimization", "Memory Management"]
    },
    {
      category: "AI & ML",
      icon: Code,
      items: ["TensorFlow/PyTorch", "Real-time Analytics", "Performance Modeling", "Predictive Systems"]
    },
    {
      category: "Networking",
      icon: Database,
      items: ["Stratum Protocol", "Pool Integration", "Share Validation", "Network Optimization"]
    },
    {
      category: "Security",
      icon: Shield,
      items: ["Open Source", "Code Auditing", "Reproducible Builds", "Community Review"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Built on Proven Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cortex leverages battle-tested open-source foundations while pioneering 
            new AI-driven optimizations for the mining ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-blue-500/50 transition-all duration-300 p-6 group"
            >
              <div className="text-center mb-6">
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{tech.category}</h3>
              </div>
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSlide;
