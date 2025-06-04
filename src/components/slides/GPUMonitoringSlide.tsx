
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const GPUMonitoringSlide = () => {
  const features = [
    {
      emoji: "🧊",
      text: "Real-time temperature, power, fan speed, clock readings"
    },
    {
      emoji: "🔧",
      text: "Overclocking API via nvidia-smi and nvidia-settings"
    },
    {
      emoji: "🧠",
      text: "FastAPI service records telemetry for ML model training"
    },
    {
      emoji: "⚠️",
      text: "Some Linux restrictions exist for fan control without X"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              GPU Monitoring
            </h2>
            <CheckCircle className="w-8 h-8 text-green-400" />
            <span className="text-green-400 font-bold text-xl">Complete</span>
          </div>
        </div>
        
        <div className="space-y-4 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-green-500/50 transition-all duration-300 p-6 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
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
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80" 
            alt="GPU Monitoring Dashboard" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GPUMonitoringSlide;
