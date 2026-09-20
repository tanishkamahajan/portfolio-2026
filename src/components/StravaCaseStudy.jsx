import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

const stravaImages = [
  {
    id: '01',
    sectionId: 'overview',
    src: '/Projects/Strava Cognitive Ergonomics/01-Cover.png',
    alt: 'Strava Case Study - 01 Cover',
  },
  {
    id: '02',
    sectionId: 'overview',
    src: '/Projects/Strava Cognitive Ergonomics/02-Content.png',
    alt: 'Strava Case Study - 02 Content',
  },
  {
    id: '03',
    sectionId: 'overview',
    src: '/Projects/Strava Cognitive Ergonomics/03-About.png',
    alt: 'Strava Case Study - 03 About',
  },
  {
    id: '04',
    sectionId: 'research',
    src: '/Projects/Strava Cognitive Ergonomics/04-Heuristic Evaluation.png',
    alt: 'Strava Case Study - 04 Heuristic Evaluation',
  },
  {
    id: '05',
    sectionId: 'research',
    src: '/Projects/Strava Cognitive Ergonomics/05-Tasks.png',
    alt: 'Strava Case Study - 05 Tasks',
  },
  {
    id: '06',
    sectionId: 'research',
    src: '/Projects/Strava Cognitive Ergonomics/06-HTA.png',
    alt: 'Strava Case Study - 06 HTA',
  },
  {
    id: '07',
    sectionId: 'evaluation',
    src: '/Projects/Strava Cognitive Ergonomics/07-SUS.png',
    alt: 'Strava Case Study - 07 SUS',
  },
  {
    id: '08',
    sectionId: 'evaluation',
    src: '/Projects/Strava Cognitive Ergonomics/08-NASA TLX.png',
    alt: 'Strava Case Study - 08 NASA TLX',
  },
  {
    id: '09',
    sectionId: 'evaluation',
    src: '/Projects/Strava Cognitive Ergonomics/09-Usability Metrics.png',
    alt: 'Strava Case Study - 09 Usability Metrics',
  },
  {
    id: '10',
    sectionId: 'principles',
    src: '/Projects/Strava Cognitive Ergonomics/10-HICKS LAW.png',
    alt: 'Strava Case Study - 10 Hicks Law',
  },
  {
    id: '11',
    sectionId: 'principles',
    src: '/Projects/Strava Cognitive Ergonomics/11-fits law.png',
    alt: 'Strava Case Study - 11 Fits Law',
  },
  {
    id: '12',
    sectionId: 'principles',
    src: '/Projects/Strava Cognitive Ergonomics/12-Cog Walkthru.png',
    alt: 'Strava Case Study - 12 Cog Walkthrough',
  },
  {
    id: '13',
    sectionId: 'redesign',
    src: '/Projects/Strava Cognitive Ergonomics/13-Redesign.png',
    alt: 'Strava Case Study - 13 Redesign',
  },
  {
    id: '14',
    sectionId: 'redesign',
    src: '/Projects/Strava Cognitive Ergonomics/14-TASK 1.png',
    alt: 'Strava Case Study - 14 Task 1',
  },
  {
    id: '15',
    sectionId: 'redesign',
    src: '/Projects/Strava Cognitive Ergonomics/15-TASK 2.png',
    alt: 'Strava Case Study - 15 Task 2',
  },
  {
    id: '16',
    sectionId: 'redesign',
    src: '/Projects/Strava Cognitive Ergonomics/16-TASK 3.png',
    alt: 'Strava Case Study - 16 Task 3',
  },
  {
    id: '17',
    sectionId: 'redesign',
    src: '/Projects/Strava Cognitive Ergonomics/17-TASK 4.png',
    alt: 'Strava Case Study - 17 Task 4',
  },
  {
    id: '18',
    sectionId: 'conclusion',
    src: '/Projects/Strava Cognitive Ergonomics/18-Thank you.png',
    alt: 'Strava Case Study - 18 Thank You',
  },
];

const allNavItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'evaluation', label: 'Evaluation' },
  { id: 'principles', label: 'Principles' },
  { id: 'redesign', label: 'Redesign' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function StravaCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [showBackButton, setShowBackButton] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isNearRightEdge, setIsNearRightEdge] = useState(false);
  const imageRefs = useRef({});
  const lastScrollY = useRef(0);
  const scrollStopTimerRef = useRef(null);
  const mouseEdgeTimerRef = useRef(null);
  const lenis = useLenis();

  // STRICT RULE: Reset scroll to top and set Overview as active section on page mount
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    setActiveSection('overview');
    setShowBackButton(true);
    setShowSidebar(true);
    lastScrollY.current = 0;
  }, [lenis]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setActiveSection('overview');
        setShowBackButton(true);
        setShowSidebar(true);
        if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
      } else {
        // Active section tracking for sidebar
        const scrollPosition = currentScrollY + window.innerHeight / 3;
        for (const img of stravaImages) {
          const el = imageRefs.current[img.id];
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(img.sectionId);
              break;
            }
          }
        }

        if (currentScrollY < lastScrollY.current - 6) {
          // Scrolling UP -> Fade back in
          setShowBackButton(true);
          setShowSidebar(true);

          if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
          scrollStopTimerRef.current = setTimeout(() => {
            if (window.scrollY > 50) {
              setShowSidebar(false);
            }
          }, 1200);
        } else if (currentScrollY > lastScrollY.current + 6) {
          // Scrolling DOWN -> Fade out
          setShowBackButton(false);
          setShowSidebar(false);

          if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
    };
  }, []);

  // Reveal sidebar when cursor moves near right edge of the viewport (~240px threshold)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rightEdgeThreshold = window.innerWidth - 240;
      if (e.clientX >= rightEdgeThreshold) {
        setIsNearRightEdge(true);
        if (mouseEdgeTimerRef.current) clearTimeout(mouseEdgeTimerRef.current);
      } else {
        if (mouseEdgeTimerRef.current) clearTimeout(mouseEdgeTimerRef.current);
        mouseEdgeTimerRef.current = setTimeout(() => {
          setIsNearRightEdge(false);
        }, 1200);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseEdgeTimerRef.current) clearTimeout(mouseEdgeTimerRef.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const targetImg = stravaImages.find((img) => img.sectionId === sectionId);
    if (targetImg) {
      const el = imageRefs.current[targetImg.id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <main className="w-full min-h-screen bg-[#191818] text-white flex flex-col p-0 m-0 selection:bg-[#afcc0f] selection:text-black overflow-x-hidden relative">
      
      {/* Context-Aware Floating Top-Left Back Button */}
      <a
        href="/"
        onClick={handleBack}
        className={`fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 text-white mix-blend-difference transition-all duration-300 ease-in-out cursor-pointer select-none origin-top-left p-0 m-0 bg-transparent border-none shadow-none scale-85 sm:scale-95 md:scale-100 ${
          showBackButton
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        aria-label="Back to Homepage"
      >
        <svg 
          width="101" 
          height="39" 
          viewBox="0 0 101 39" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="block w-[101px] h-[39px] pointer-events-none"
        >
          {/* Imperfect Hand-Drawn Oval Outline */}
          <path 
            d="M 18 5.5 C 38 1.5, 68 1.5, 84 5.5 C 96 9.5, 100 18.5, 96 27.5 C 90 35.5, 62 38, 30 37 C 12 36, 1 27, 4 16 C 7 7, 32 2.5, 54 3 C 72 3.5, 92 7, 96 15.5" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Hand-Drawn Left Arrow ← */}
          <path 
            d="M 27 19.5 L 16 19.5 M 16 19.5 L 21 14.5 M 16 19.5 L 21 24.5" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Hand-Drawn "Back" text in Gochi Hand */}
          <text 
            x="33" 
            y="26.5" 
            fontFamily="'Gochi Hand', cursive" 
            fontSize="22" 
            fontWeight="400" 
            fill="currentColor"
          >
            Back
          </text>
        </svg>
      </a>

      {/* Sticky Right Viewport Sidebar (Matching Zoo exact styling and spacing) */}
      <nav 
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-3.5 w-[170px] p-5 rounded-[22px] bg-[#1d1b1a]/90 backdrop-blur-md border border-white/10 shadow-2xl select-none transition-all duration-500 ease-in-out ${
          showSidebar || isSidebarHovered || isNearRightEdge
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        {allNavItems.map((item) => {
          const isActive = activeSection === item.id;
          const isAvailable = stravaImages.some((img) => img.sectionId === item.id);

          return (
            <button
              key={item.id}
              onClick={() => isAvailable && scrollToSection(item.id)}
              disabled={!isAvailable}
              className={`flex items-center justify-between gap-2 w-full text-[11px] md:text-xs font-neue tracking-wide transition-all duration-300 ${
                isActive
                  ? 'text-white font-bold opacity-100'
                  : isAvailable
                  ? 'text-[#888888] hover:text-white/90 font-medium opacity-80 cursor-pointer'
                  : 'text-white/20 cursor-not-allowed opacity-40'
              }`}
            >
              <span className="text-left leading-tight truncate">{item.label}</span>
              <span
                className={`rounded-full transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#afcc0f] shadow-[0_0_10px_#afcc0f] scale-110'
                    : 'w-2 h-2 bg-[#555555]'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Continuous 100% Full Viewport Width Presentation Stack */}
      <div className="w-full flex flex-col p-0 m-0 leading-none">
        {stravaImages.map((img) => (
          <div
            key={img.id}
            id={`img-${img.id}`}
            ref={(el) => (imageRefs.current[img.id] = el)}
            className="w-full p-0 m-0 leading-none"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto block m-0 p-0 leading-none align-bottom pointer-events-none select-none"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
