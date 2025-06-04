
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, Brain, Database, RotateCcw, Wrench, Zap } from 'lucide-react';

const AIIntegrationSlide = () => {
  const completedFeatures = [
    {
      icon: Database,
      emoji: "📊",
      text: "Real mining job, GPU, and share data collection in logs/nonces.jsonl"
    },
    {
      icon: Brain,
      emoji: "🤖",
      text: "Random Forest ML model trained on historic mining data"
    },
    {
      icon: Zap,
      emoji: "⚡",
      text: "Real-time nonce range predictions based on GPU stats & difficulty"
    },
    {
      icon: RotateCcw,
      emoji: "🔄",
      text: "Live AI recommendations with confidence scoring"
    }
  ];

  const pipelineSteps = [
    {
      step: "1",
      title: "Data Collection",
      description: "Miner logs all attempts, stats, and share results"
    },
    {
      step: "2", 
      title: "Model Training",
      description: "train.py processes JSONL and trains Random Forest on 5+ variables"
    },
    {
      step: "3",
      title: "Real-time Prediction",
      description: "ai-service.py loads model and predicts nonce range success likelihood"
    },
    {
      step: "4",
      title: "Dashboard Integration",
      description: "Live recommendations, confidence, and stats displayed"
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
            <CheckCircle className="w-8 h-8 text-green-400" />
            <span className="text-green-400 font-bold text-xl">Complete</span>
          </div>
          <p className="text-xl text-gray-300">Data-Driven ML Model, Not Rules</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-2xl mr-2">✅</span>
              Completed Implementation
            </h3>
            <div className="space-y-4">
              {completedFeatures.map((feature, index) => (
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
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-2xl mr-2">🔄</span>
              ML Pipeline
            </h3>
            <div className="space-y-4">
              {pipelineSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800/60 border-slate-600 hover:border-purple-500/50 transition-all duration-300 p-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="bg-slate-800/30 border border-slate-600 rounded-lg p-4 text-center">
          <img 
            src="/lovable-uploads/f103d373-752b-459e-ae03-7759fa953482.png" 
            alt="AI Nonce Insights Dashboard" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
          />
          <p className="text-cyan-400 text-sm mt-2 font-medium">Live AI Nonce Insights with 95% Confidence</p>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSlide;
