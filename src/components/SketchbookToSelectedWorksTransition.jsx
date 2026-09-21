import React, { useState, useEffect, useRef } from 'react';
import SelectedWorks from './SelectedWorks';
import AlongTheWay from './AlongTheWay';
import Footer from './Footer';

export default function SketchbookToSelectedWorksTransition() {
  const trackRef = useRef(null);
  const selectedWorksRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');

  useEffect(() => {
    const updateHeight = () => {
      if (selectedWorksRef.current) {
        setContentHeight(selectedWorksRef.current.offsetHeight);
      }
    };

    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    if (selectedWorksRef.current) {
      ro.observe(selectedWorksRef.current);
    }
    window.addEventListener('resize', updateHeight);

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // rect.top is the distance from viewport top to top of transition track.
      // Total scroll distance for transition is 150vh (1.5 * windowHeight)
      const transitionDistance = 1.5 * windowHeight;

      const scrolled = -rect.top;
      const rawProgress = scrolled / transitionDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);

      if (rect.top <= 0 && rawProgress < 1) {
        setIsPinned(true);
      } else {
        setIsPinned(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Radius starts at 10px and expands to 72vmax (100% full screen opening)
  const holeRadius = `calc(10px + ${progress} * (72vmax - 10px))`;

  return (
    <div ref={trackRef} className="relative w-full">
      
      {/* Transition Scroll Track Distance (150vh) */}
      <div className="w-full h-[150vh] relative pointer-events-none">
        <div className="w-full max-w-[1440px] absolute inset-0 pointer-events-none mx-auto">
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
      </div>

      {/* SelectedWorks Document Flow Placeholder (Preserves total page height without layout shifts) */}
      <div style={{ height: isPinned ? contentHeight : 'auto' }} className="w-full relative">
        
        {/* SelectedWorks Component (Pinned stationary at top-0 during transition, normal flow afterwards) */}
        <div 
          ref={selectedWorksRef}
          className={
            isPinned 
                ? "fixed top-0 left-0 w-full z-10 flex flex-col items-center pointer-events-auto bg-white" 
              : "relative w-full z-10 flex flex-col items-center bg-white"
          }
        >
          {/* Global Page-Level Vertical Guide Threads Spanning Selected Works and Along The Way Continuously */}
          <div className="w-full max-w-[1440px] absolute inset-0 pointer-events-none z-10 mx-auto">
            <div className="hidden md:block absolute left-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
              <svg className="w-[1px] h-full" preserveAspectRatio="none">
                <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#000000" strokeWidth="0.5" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="hidden md:block absolute right-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
              <svg className="w-[1px] h-full" preserveAspectRatio="none">
                <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#000000" strokeWidth="0.5" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>

          <SelectedWorks />
          <AlongTheWay />
          <Footer />
        </div>

      </div>

      {/* Standalone Black Overlay with Expanding Transparent Circular Hole */}
      {isPinned && (
        <div 
          className="fixed top-0 left-0 w-full h-screen pointer-events-none z-20 bg-[#191818]"
          style={{
            maskImage: `radial-gradient(circle ${holeRadius} at 50% 50%, transparent 0%, transparent 99.5%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${holeRadius} at 50% 50%, transparent 0%, transparent 99.5%, black 100%)`,
          }}
        >
          {/* Vertical Guide Threads on the black overlay (masked with the circular hole) */}
          <div className="w-full max-w-[1440px] h-full relative mx-auto pointer-events-none">
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
        </div>
      )}

    </div>
  );
}
