
import React from 'react';
import { Card } from "@/components/ui/card";
import { Brain, Cpu, Activity, TrendingUp } from 'lucide-react';

const AIOptimizationSlide = () => {
  const optimizations = [
    {
      icon: Brain,
      title: "Dynamic Nonce Partitioning",
      description: "ML algorithms allocate work distribution to minimize overlap and maximize effective share rates.",
      metric: "15-25% efficiency gain"
    },
    {
      icon: Cpu,
      title: "Hardware Performance Tuning",
      description: "AI-managed temperature, clock rates, and power optimization across diverse GPU configurations.",
      metric: "Optimal stability"
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Early warning systems detect hardware anomalies and share submission issues before they impact mining.",
      metric: "99.9% uptime"
    },
    {
      icon: TrendingUp,
      title: "Adaptive Learning",
      description: "Continuous improvement through mining data analysis and pattern recognition for better performance.",
      metric: "Self-improving"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-r from-slate-900 via-blue-950/30 to-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI-Powered Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary machine learning integration that adapts to your hardware 
            and optimizes performance in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {optimizations.map((opt, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-slate-800/70 to-blue-900/30 border-slate-600 hover:border-cyan-400/50 transition-all duration-500 p-8 group"
            >
              <div className="flex items-start mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <opt.icon className="w-8 h-8 text-cyan-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{opt.title}</h3>
                  <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full mb-4">
                    {opt.metric}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{opt.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIOptimizationSlide;
