import React from 'react';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import SketchbookToSelectedWorksTransition from './components/SketchbookToSelectedWorksTransition';
import FloatingNav from './components/FloatingNav';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#191818] text-white selection:bg-[#afcc0f] selection:text-black flex flex-col items-center overflow-x-clip">
      
      {/* Floating Hamburger Nav (Appears after leaving Hero & mask transition) */}
      <FloatingNav targetId="work" />
      
      {/* Black Hero Section Container (Responsive 1440px centered container) */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center">
        
        {/* Homepage/Hero Continuous Vertical Guide/Thread Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden md:block absolute left-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
            <svg className="w-[1px] h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>
          <div className="hidden md:block absolute right-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
            <svg className="w-[1px] h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full flex flex-col items-center px-4">
          
          {/* Hero Section */}
          <section id="hero" className="w-full flex flex-col items-center pt-2 md:pt-4 pb-8 md:pb-12 relative z-20">
            <Navbar />
            <HeroContent />
          </section>

        </div>

      </div>

      {/* Standalone Black Transition Overlay with Pinned SelectedWorks */}
      <SketchbookToSelectedWorksTransition />

    </div>
  );
}
