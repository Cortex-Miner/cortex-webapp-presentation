
import React from 'react';
import { Card } from "@/components/ui/card";
import { Settings, Globe, Brain, Cpu } from 'lucide-react';

const CurrentArchitectureSlide = () => {
  const components = [
    {
      icon: Settings,
      title: "Backend",
      description: "Node/Stratum/GPU manager (Node.js + Express)",
      emoji: "⚙️"
    },
    {
      icon: Globe,
      title: "Frontend",
      description: "React dashboard with live controls",
      emoji: "🌐"
    },
    {
      icon: Brain,
      title: "AI Service (FastAPI)",
      description: "Training & logic engine for optimization",
      emoji: "🧠"
    },
    {
      icon: Cpu,
      title: "CUDA Miner",
      description: "Native GPU mining binary (built from scratch)",
      emoji: "🧱"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Current Architecture
          </h2>
          <p className="text-xl text-gray-300">Modular System Components</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-blue-500/50 transition-all duration-300 p-8 group"
            >
              <div className="text-center">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <span className="text-3xl">{component.emoji}</span>
                  <component.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{component.title}</h3>
                <p className="text-gray-300 leading-relaxed">{component.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentArchitectureSlide;
