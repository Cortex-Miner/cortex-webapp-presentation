
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const ProgressSummarySlide = () => {
  const progressItems = [
    {
      status: 'complete',
      icon: CheckCircle,
      text: "Node Manager + Ergo Node Deployment",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "GPU Monitoring with nvidia-smi integration",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "CUDA mining kernel development",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "Pool mining with Stratum protocol",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "Data-driven AI optimization (Random Forest)",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "Web UI Dashboard",
      color: "text-green-400"
    },
    {
      status: 'complete',
      icon: CheckCircle,
      text: "AI Feedback Loop with live recommendations",
      color: "text-green-400"
    },
    {
      status: 'partial',
      icon: AlertTriangle,
      text: "Share submission optimization",
      color: "text-yellow-400"
    },
    {
      status: 'incomplete',
      icon: XCircle,
      text: "Advanced overclocking automation",
      color: "text-red-400"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Progress Summary
          </h2>
          <p className="text-xl text-gray-300">ErgoHack 10 Achievements</p>
        </div>
        
        <div className="space-y-4">
          {progressItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:border-cyan-500/50 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4">
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <p className="text-lg text-gray-300">{item.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/60 border border-slate-600 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievement</h3>
            <p className="text-xl text-cyan-400 font-semibold">
              Successfully pivoted from testnet solo mining to production-ready pool mining with AI optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSummarySlide;
