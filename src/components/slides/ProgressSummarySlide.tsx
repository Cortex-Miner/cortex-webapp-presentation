
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const ProgressSummarySlide = () => {
  const progressItems = [
    { feature: "CLI CUDA Miner (Solo)", status: "Done", icon: CheckCircle, color: "text-green-400", emoji: "✅" },
    { feature: "Node Manager (Mainnet/Testnet)", status: "Done", icon: CheckCircle, color: "text-green-400", emoji: "✅" },
    { feature: "GPU Monitoring + Logging", status: "Done", icon: CheckCircle, color: "text-green-400", emoji: "✅" },
    { feature: "Web UI for control", status: "WIP", icon: AlertTriangle, color: "text-yellow-400", emoji: "⚠️" },
    { feature: "Mining directly to node (Testnet)", status: "Not Yet", icon: XCircle, color: "text-red-400", emoji: "🚫" },
    { feature: "Stratum Job Handling", status: "In Progress", icon: AlertTriangle, color: "text-yellow-400", emoji: "⚠️" },
    { feature: "AI Feedback Loop", status: "In Design", icon: XCircle, color: "text-red-400", emoji: "🚫" }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Progress Summary
          </h2>
        </div>
        
        <Card className="bg-slate-800/60 border-slate-600 p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-4 px-4 text-xl font-bold text-cyan-400">Feature</th>
                  <th className="text-center py-4 px-4 text-xl font-bold text-cyan-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {progressItems.map((item, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-lg text-gray-300">{item.feature}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className={`font-medium ${item.color}`}>{item.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProgressSummarySlide;
