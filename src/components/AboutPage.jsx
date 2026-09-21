import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { HeroNotebookPage1, HeroNotebookPage2 } from './HeroNotebookCard';
import FloatingNav from './FloatingNav';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#191818] text-white selection:bg-[#afcc0f] selection:text-black flex flex-col items-center overflow-x-clip">
      
      {/* Floating Hamburger Nav (Appears after leaving top header) */}
      <FloatingNav targetId="about-hero" />
      
      {/* Black About Page Container (Responsive 1440px centered container) */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center">
        
        {/* Continuous Vertical Guide/Thread Lines */}
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
          
          {/* Navbar */}
          <section id="about-hero" className="w-full flex flex-col items-center pt-2 md:pt-4 relative z-20">
            <Navbar activeSection="about" />
          </section>

          {/* Main Visual: Two Sketchbook Pages */}
          <main className="w-full flex justify-center relative z-20 mt-4 sm:mt-6 md:mt-[63px] pb-10 sm:pb-14 md:pb-20">
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
          </main>

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
