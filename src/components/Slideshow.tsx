
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TitleSlide from './slides/TitleSlide';
import ProjectPurposeSlide from './slides/ProjectPurposeSlide';
import OriginalGoalsSlide from './slides/OriginalGoalsSlide';
import CurrentArchitectureSlide from './slides/CurrentArchitectureSlide';
import NodeManagerSlide from './slides/NodeManagerSlide';
import MinerManagerSlide from './slides/MinerManagerSlide';
import GPUMonitoringSlide from './slides/GPUMonitoringSlide';
import AIIntegrationSlide from './slides/AIIntegrationSlide';
import ProgressSummarySlide from './slides/ProgressSummarySlide';
import FinalSlide from './slides/FinalSlide';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: TitleSlide, title: "Title" },
    { component: ProjectPurposeSlide, title: "Project Purpose" },
    { component: OriginalGoalsSlide, title: "Original Goals" },
    { component: CurrentArchitectureSlide, title: "Current Architecture" },
    { component: NodeManagerSlide, title: "Node Manager" },
    { component: MinerManagerSlide, title: "Miner Manager" },
    { component: GPUMonitoringSlide, title: "GPU Monitoring" },
    { component: AIIntegrationSlide, title: "AI Integration" },
    { component: ProgressSummarySlide, title: "Progress Summary" },
    { component: FinalSlide, title: "Conclusion" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Slide Content */}
      <div className="relative z-10 min-h-screen">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-600">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-slate-500 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-20 bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-600">
        <span className="text-cyan-400 font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-8 right-8 z-20 text-slate-400 text-sm">
        Use ← → keys to navigate
      </div>
    </div>
  );
};

export default Slideshow;
