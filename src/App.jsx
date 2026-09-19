import React from 'react';
import Navbar from './components/Navbar';
import { HeroNotebookPage1, HeroNotebookPage2 } from './components/HeroNotebookCard';
import SketchbookToSelectedWorksTransition from './components/SketchbookToSelectedWorksTransition';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#191818] text-white selection:bg-[#afcc0f] selection:text-black flex flex-col items-center">
      
      {/* Black Hero Section Container (Responsive 1440px centered container) */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center">
        
        {/* Homepage/Hero Continuous Vertical Guide/Thread Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
            <svg className="w-[1px] h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>
          <div className="absolute right-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
            <svg className="w-[1px] h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full flex flex-col items-center px-4">
          
          {/* Section 1 (Initial Viewport): Navbar at top, Page 1 ON TOP (z-20) */}
          <section className="w-full h-screen min-h-[660px] flex flex-col justify-between items-center pt-4 relative z-20">
            <Navbar />
            <div className="w-full flex justify-center relative z-20">
              <HeroNotebookPage1 />
            </div>
          </section>

          {/* Section 2: Page 2 BEHIND Page 1 (z-10) */}
          <section className="w-full flex justify-center pb-20 relative z-10 -mt-[19px]">
            <HeroNotebookPage2 />
          </section>

        </div>

      </div>

      {/* Standalone Black Transition Overlay with Pinned SelectedWorks */}
      <SketchbookToSelectedWorksTransition />

    </div>
  );
}
