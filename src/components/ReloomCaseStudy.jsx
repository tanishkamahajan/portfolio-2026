import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

const reloomItems = [
  {
    id: '01',
    sectionId: 'overview',
    type: 'image',
    src: '/Projects/Sustainable fashion/1. Reloom Cover.png',
    alt: 'ReLoom Case Study - 01 Reloom Cover',
  },
  {
    id: '02',
    sectionId: 'overview',
    type: 'image',
    src: '/Projects/Sustainable fashion/2. About.png',
    alt: 'ReLoom Case Study - 02 About',
  },
  {
    id: '03',
    sectionId: 'research',
    type: 'image',
    src: '/Projects/Sustainable fashion/3. Research.png',
    alt: 'ReLoom Case Study - 03 Research',
  },
  {
    id: '04',
    sectionId: 'insights',
    type: 'image',
    src: '/Projects/Sustainable fashion/4. Insights.png',
    alt: 'ReLoom Case Study - 04 Insights',
  },
  {
    id: '05',
    sectionId: 'personas',
    type: 'image',
    src: '/Projects/Sustainable fashion/5. Personas.png',
    alt: 'ReLoom Case Study - 05 Personas',
  },
  {
    id: '06',
    sectionId: 'solution',
    type: 'image',
    src: '/Projects/Sustainable fashion/6. Reloom App Solution.png',
    alt: 'ReLoom Case Study - 06 Reloom App Solution',
  },
  {
    id: '07',
    sectionId: 'solution',
    type: 'image',
    src: '/Projects/Sustainable fashion/7. Reloom Ui screens.png',
    alt: 'ReLoom Case Study - 07 Reloom UI Screens',
  },
  {
    id: '08',
    sectionId: 'value-proposition',
    type: 'image',
    src: '/Projects/Sustainable fashion/8. Value Prop an Worth.png',
    alt: 'ReLoom Case Study - 08 Value Prop and Worth',
  },
  {
    id: '09',
    sectionId: 'testing',
    type: 'image',
    src: '/Projects/Sustainable fashion/9. Testing.png',
    alt: 'ReLoom Case Study - 09 Testing',
  },
  {
    id: '10',
    sectionId: 'reflection',
    type: 'image',
    src: '/Projects/Sustainable fashion/10. Reflection.png',
    alt: 'ReLoom Case Study - 10 Reflection',
  },
  {
    id: '11',
    sectionId: 'reflection',
    type: 'image',
    src: '/Projects/Sustainable fashion/11. thanks.png',
    alt: 'ReLoom Case Study - 11 Thanks',
  },
];

const allNavItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'insights', label: 'Insights' },
  { id: 'personas', label: 'Personas' },
  { id: 'solution', label: 'Solution' },
  { id: 'value-proposition', label: 'Value Proposition' },
  { id: 'testing', label: 'Testing' },
  { id: 'reflection', label: 'Reflection' },
];

export default function ReloomCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [showBackButton, setShowBackButton] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isNearRightEdge, setIsNearRightEdge] = useState(false);
  const itemRefs = useRef({});
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
        for (const item of reloomItems) {
          const el = itemRefs.current[item.id];
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(item.sectionId);
              break;
            }
          }
        }

        if (currentScrollY < lastScrollY.current - 6) {
          // Scrolling UP -> Fade back in
          setShowBackButton(true);
          setShowSidebar(true);

          // When scroll stops, hide sidebar after 1.2s of inactivity unless hovered/at top
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
  // Fade out again 1.2s after user stops interacting near the right edge
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
    const targetItem = reloomItems.find((item) => item.sectionId === sectionId);
    if (targetItem) {
      const el = itemRefs.current[targetItem.id];
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

      {/* Sticky Right Viewport Sidebar */}
      <nav 
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col justify-between w-[170px] h-[290px] p-5 rounded-[22px] bg-[#1d1b1a]/90 backdrop-blur-md border border-white/10 shadow-2xl select-none transition-all duration-500 ease-in-out ${
          showSidebar || isSidebarHovered || isNearRightEdge
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        {allNavItems.map((item) => {
          const isActive = activeSection === item.id;
          const isAvailable = reloomItems.some((i) => i.sectionId === item.id);

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
        {reloomItems.map((item) => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            ref={(el) => (itemRefs.current[item.id] = el)}
            className="w-full p-0 m-0 leading-none"
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-auto block m-0 p-0 leading-none align-bottom pointer-events-none select-none"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
