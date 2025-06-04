
import React from 'react';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const ProgressSummarySlide = () => {
  const features = [
    {
      name: "Node Manager Service",
      status: "completed",
      description: "Full node lifecycle management"
    },
    {
      name: "Miner Manager Service", 
      status: "completed",
      description: "Multi-miner coordination and monitoring"
    },
    {
      name: "GPU Monitoring & Metrics",
      status: "completed", 
      description: "Real-time hardware performance tracking"
    },
    {
      name: "RESTful API Framework",
      status: "completed",
      description: "Complete API for all services"
    },
    {
      name: "Web UI Dashboard",
      status: "completed",
      description: "Intuitive web-based management interface"
    },
    {
      name: "AI Feedback Loop",
      status: "completed",
      description: "Intelligent optimization system"
    },
    {
      name: "Pool mining with Stratum protocol",
      status: "in-progress",
      description: "Enhanced pool connectivity"
    },
    {
      name: "Advanced AI model training",
      status: "planned",
      description: "Deep learning optimization algorithms"
    },
    {
      name: "Cross-platform deployment",
      status: "planned", 
      description: "Docker containerization and multi-OS support"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'in-progress':
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case 'planned':
        return <Clock className="w-6 h-6 text-blue-400" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/30 bg-green-500/10';
      case 'in-progress':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'planned':
        return 'border-blue-500/30 bg-blue-500/10';
      default:
        return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Progress Summary
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tracking our journey from concept to implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${getStatusColor(feature.status)} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-start gap-4">
                {getStatusIcon(feature.status)}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">6</div>
            <div className="text-gray-300">Completed Features</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
            <div className="text-gray-300">In Progress</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
            <div className="text-gray-300">Planned</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSummarySlide;
