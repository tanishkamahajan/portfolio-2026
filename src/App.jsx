import React from 'react';
import Navbar from './components/Navbar';
import { HeroNotebookPage1, HeroNotebookPage2 } from './components/HeroNotebookCard';
import SketchbookToSelectedWorksTransition from './components/SketchbookToSelectedWorksTransition';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#191818] text-white selection:bg-[#afcc0f] selection:text-black flex flex-col items-center overflow-x-clip">
      
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
          
          {/* Navbar: Centered at top */}
          <section className="w-full flex flex-col items-center pt-4 relative z-20">
            <Navbar />
          </section>

          {/* Sketchbook Unit: Page 1 + Page 2 scaled together proportionally as ONE visual unit */}
          <section id="about" className="w-full flex justify-center relative z-20 mt-[63px] pb-20">
            <div className="sketchbook-unit">
              <div className="sketchbook-scaler">
                {/* Page 1 ON TOP (z-20) */}
                <div className="relative z-20 flex justify-center w-full">
                  <HeroNotebookPage1 />
                </div>

                {/* Page 2 BEHIND Page 1 (z-10, exact -19px overlap) */}
                <div className="relative z-10 flex justify-center w-full -mt-[19px]">
                  <HeroNotebookPage2 />
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* Standalone Black Transition Overlay with Pinned SelectedWorks */}
      <SketchbookToSelectedWorksTransition />

    </div>
  );
}
