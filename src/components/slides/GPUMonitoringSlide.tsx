
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, Thermometer, Wrench, Brain, AlertTriangle } from 'lucide-react';

const GPUMonitoringSlide = () => {
  const features = [
    {
      icon: Thermometer,
      emoji: "🧊",
      text: "Real-time temperature, power, fan speed, clock readings"
    },
    {
      icon: Wrench,
      emoji: "🔧",
      text: "Overclocking API via nvidia-smi and nvidia-settings"
    },
    {
      icon: Brain,
      emoji: "🧠",
      text: "FastAPI service records telemetry for ML model training"
    },
    {
      icon: AlertTriangle,
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
                <feature.icon className="w-6 h-6 text-green-400" />
                <p className="text-lg text-gray-300">{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Screenshot area */}
        <div className="bg-slate-800/30 border border-slate-600 rounded-lg p-4 text-center">
          <img 
            src="/lovable-uploads/a26fa6d0-5951-4282-a841-851f719cbf22.png" 
            alt="GPU Monitoring Dashboard" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GPUMonitoringSlide;
