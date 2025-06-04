
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const OriginalGoalsSlide = () => {
  const goals = [
    {
      status: 'complete',
      icon: CheckCircle,
      text: "Solo CLI CUDA Miner",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "Node deployment via backend + UI",
      color: "text-green-400"
    },
    {
      status: 'partial',
      icon: AlertTriangle,
      text: "Basic Dashboard UI with node/miner control",
      color: "text-yellow-400"
    },
    {
      status: 'incomplete',
      icon: XCircle,
      text: "Testnet block mining directly via UI",
      color: "text-red-400"
    },
    {
      status: 'partial',
      icon: AlertTriangle,
      text: "AI-based GPU tuning and nonce optimization",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Original Goals
          </h2>
        </div>
        
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-cyan-500/50 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4">
                <goal.icon className={`w-6 h-6 ${goal.color}`} />
                <p className="text-lg text-gray-300">{goal.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginalGoalsSlide;
