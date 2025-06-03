
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, RotateCcw, Zap, Brain } from 'lucide-react';

const MinerManagerSlide = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Miner Manager
            </h2>
            <span className="text-green-400 font-bold text-lg">(Pivoted to Pool Mining ✅)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Web-Based Control Panel */}
          <Card className="bg-slate-800/60 border-slate-600 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎮</span>
              <h3 className="text-xl font-bold text-white">Web-Based Miner Control Panel</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Start/Stop miner from UI</li>
              <li>• Toggle between Solo and Pool modes (default: Pool)</li>
              <li>• Live status: accepted/rejected shares, GPU stats, logs</li>
            </ul>
          </Card>

          {/* Pivot to Pool Mining */}
          <Card className="bg-slate-800/60 border-slate-600 p-6">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Pivot to Pool Mining</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="text-red-400">❌ Testnet node mining was unreliable due to sync issues</li>
              <li className="text-green-400">✅ Switched focus to Stratum-based pool mining</li>
            </ul>
          </Card>

          {/* Pool Integration Progress */}
          <Card className="bg-slate-800/60 border-slate-600 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Pool Integration Progress</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="text-green-400">✅ Connected to Sigs Ergo Mining Pool</li>
              <li className="text-green-400">✅ Implemented Stratum handshake</li>
              <li className="text-yellow-400">⚙️ Currently finalizing job parsing and share submission</li>
            </ul>
          </Card>

          {/* Path Forward */}
          <Card className="bg-slate-800/60 border-slate-600 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Path Forward</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Live share submission</li>
              <li>• Valid hash validation</li>
              <li>• AI-assisted tuning post pool stability</li>
            </ul>
          </Card>
        </div>

        {/* Screenshot area */}
        <div className="bg-slate-800/30 border border-slate-600 rounded-lg p-4 text-center">
          <img 
            src="/lovable-uploads/5d4faa13-d154-42e6-8843-24b3811607c8.png" 
            alt="Miner Control Panel UI" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MinerManagerSlide;
