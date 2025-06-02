
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Mine Smarter?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of open-source mining with AI-optimized performance 
            and complete transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
              Download Cortex
            </Button>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg">
              Read Documentation
            </Button>
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/97c851ab-fa03-49d3-8098-22f2f90bf9a9.png" 
              alt="Cortex Logo" 
              className="w-8 h-8 mr-3"
            />
            <span className="text-xl font-bold text-white">Cortex</span>
          </div>
          
          <div className="flex gap-6">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
              <MessageSquare className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; 2024 Cortex Mining Project. Open source under MIT License.</p>
          <p className="mt-2">Built for ErgoHack 10 - Advancing the Future of Mining</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
