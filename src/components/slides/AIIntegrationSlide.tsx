
import React from 'react';
import { Card } from "@/components/ui/card";
import { Brain, Database, RotateCcw, Wrench } from 'lucide-react';

const AIIntegrationSlide = () => {
  const features = [
    {
      icon: Brain,
      emoji: "🧠",
      text: "FastAPI AI module: Receives GPU + mining stats",
      status: "initiated"
    },
    {
      icon: Database,
      emoji: "📊",
      text: "Logs SQL-compatible dataset for future training",
      status: "initiated"
    }
  ];

  const plannedFeatures = [
    {
      icon: RotateCcw,
      text: "Nonce partitioning (real-time adaptation)"
    },
    {
      icon: Wrench,
      text: "Efficiency tuning (fan, power, clock)"
    },
    {
      icon: Brain,
      text: "Health monitoring (anomaly detection)"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
              AI Integration Framework
            </h2>
            <span className="text-yellow-400 font-bold text-lg">(🚧 Initiated)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Current Implementation</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800/60 border-slate-600 hover:border-purple-500/50 transition-all duration-300 p-6 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.emoji}
                    </span>
                    <feature.icon className="w-6 h-6 text-purple-400" />
                    <p className="text-lg text-gray-300">{feature.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-2xl mr-2">🔄</span>
              Planned Features
            </h3>
            <div className="space-y-4">
              {plannedFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800/60 border-slate-600 hover:border-cyan-500/50 transition-all duration-300 p-6 group"
                >
                  <div className="flex items-center gap-4">
                    <feature.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-lg text-gray-300">{feature.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="bg-slate-800/30 border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400 text-lg">Screenshot Area</p>
          <p className="text-slate-500 text-sm mt-2">AI Training Dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSlide;
