
import React from 'react';
import { Card } from "@/components/ui/card";
import { Brain, Eye, Zap, Users, Shield, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Optimization",
      description: "Machine learning algorithms optimize nonce selection and GPU parameters in real-time for maximum efficiency."
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Fully open-source codebase with documented mining kernels and reproducible builds for community trust."
    },
    {
      icon: Zap,
      title: "Advanced Nonce Management",
      description: "Intelligent nonce allocation prevents collisions and maximizes search space coverage across multiple GPUs."
    },
    {
      icon: BarChart,
      title: "Real-time Monitoring",
      description: "Live dashboard with comprehensive statistics, share tracking, and GPU health monitoring."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built for collaboration with peer review, rapid iteration, and shared improvements for all miners."
    },
    {
      icon: Shield,
      title: "Pool Integration",
      description: "Full Ergo Stratum protocol support with accurate difficulty handling and optimized share submission."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cortex combines cutting-edge AI with proven mining protocols to deliver 
            unprecedented efficiency and transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 p-6 group hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
