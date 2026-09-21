import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

const zooItems = [
  {
    id: '01',
    sectionId: 'overview',
    type: 'image',
    src: '/Projects/Zoo/01-Home.png',
    alt: 'Zoo Case Study - 01 Home',
  },
  {
    id: '02',
    sectionId: 'overview',
    type: 'image',
    src: '/Projects/Zoo/02-About the Project.png',
    alt: 'Zoo Case Study - 02 About the Project',
  },
  {
    id: '03',
    sectionId: 'problem',
    type: 'image',
    src: '/Projects/Zoo/03-The Problem.png',
    alt: 'Zoo Case Study - 03 The Problem',
  },
  {
    id: '04',
    sectionId: 'research',
    type: 'image',
    src: '/Projects/Zoo/04-Secondary Research.png',
    alt: 'Zoo Case Study - 04 Secondary Research',
  },
  {
    id: '05',
    sectionId: 'research',
    type: 'image',
    src: '/Projects/Zoo/05-Primary Research.png',
    alt: 'Zoo Case Study - 05 Primary Research',
  },
  {
    id: '06',
    sectionId: 'workflow',
    type: 'image',
    src: '/Projects/Zoo/06-Swimlane.png',
    alt: 'Zoo Case Study - 06 Swimlane Workflow',
  },
  {
    id: '07',
    sectionId: 'user-stories',
    type: 'image',
    src: '/Projects/Zoo/07-User Stories.png',
    alt: 'Zoo Case Study - 07 User Stories',
  },
  {
    id: '08',
    sectionId: 'object-action-mapping',
    type: 'image',
    src: '/Projects/Zoo/08-Object Action mapping.png',
    alt: 'Zoo Case Study - 08 Object Action Mapping',
  },
  {
    id: '09',
    sectionId: 'object-action-mapping',
    type: 'image',
    src: '/Projects/Zoo/09-Shrikant Diagram.png',
    alt: 'Zoo Case Study - 09 Shrikant Diagram',
  },
  {
    id: '10',
    sectionId: 'object-action-mapping',
    type: 'image',
    src: '/Projects/Zoo/10-Info arch wireframes.png',
    alt: 'Zoo Case Study - 10 Info Arch Wireframes',
  },
  {
    id: '11',
    sectionId: 'design-system',
    type: 'image',
    src: '/Projects/Zoo/11-Design System.png',
    alt: 'Zoo Case Study - 11 Design System',
  },
  {
    id: '12',
    sectionId: 'flows',
    type: 'image',
    src: '/Projects/Zoo/12- introducing Ecosys.png',
    alt: 'Zoo Case Study - 12 Introducing Ecosys',
  },
  {
    id: '13',
    sectionId: 'flows',
    type: 'image',
    src: '/Projects/Zoo/13-Design Decisons and ai reasoning (new).png',
    alt: 'Zoo Case Study - 13 Design Decisions and AI Reasoning New',
  },
  {
    id: '13.5',
    sectionId: 'flows',
    type: 'video',
    src: '/Projects/Zoo/zoo prototype.mp4',
    alt: 'Zoo Case Study - Prototype Video',
  },
  {
    id: '14',
    sectionId: 'flows',
    type: 'image',
    src: '/Projects/Zoo/14-Vet Flow new.png',
    alt: 'Zoo Case Study - 14 Vet Flow New',
  },
  {
    id: '15',
    sectionId: 'flows',
    type: 'image',
    src: '/Projects/Zoo/15-Director flow.png',
    alt: 'Zoo Case Study - 15 Director Flow',
  },
  {
    id: '16',
    sectionId: 'takeaways',
    type: 'image',
    src: '/Projects/Zoo/16-Takeaways.png',
    alt: 'Zoo Case Study - 16 Takeaways',
  },
];

const allNavItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'user-stories', label: 'User Stories' },
  { id: 'object-action-mapping', label: 'Object Action Mapping' },
  { id: 'design-system', label: 'Design System' },
  { id: 'flows', label: 'Flows' },
  { id: 'takeaways', label: 'Takeaways' },
];

function ZooPrototypeVideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVideoControls, setShowVideoControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setCurrentTime(cur);
      setDuration(dur);
      setProgress((cur / dur) * 100);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
      setProgress(parseFloat(e.target.value));
    }
  };

  const formatTime = (timeInSec) => {
    if (isNaN(timeInSec) || !timeInSec) return '0:00';
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="w-full bg-white py-10 md:py-16 px-4 md:px-8 flex justify-center items-center select-none">
      <div 
        className="relative w-full max-w-[1150px] group flex flex-col items-center justify-center"
        onMouseEnter={() => setShowVideoControls(true)}
        onMouseLeave={() => setShowVideoControls(false)}
        onTouchStart={() => setShowVideoControls(true)}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onClick={togglePlay}
          className="w-full max-w-[1150px] max-h-[85vh] h-auto object-contain block mx-auto border-none outline-none cursor-pointer bg-white"
        />

        {/* Custom Video Player Interface Controls (Play/Pause, Timeline Scrubber, Time Display, Mute/Unmute) */}
        <div 
          className={`absolute bottom-3 left-3 right-3 md:bottom-5 md:left-6 md:right-6 bg-[#191818]/90 backdrop-blur-md text-white rounded-xl p-3 flex items-center gap-3 md:gap-4 transition-all duration-300 z-20 ${
            showVideoControls || !isPlaying
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {/* Play / Pause Toggle Button */}
          <button 
            onClick={togglePlay}
            className="p-1.5 text-white hover:text-[#afcc0f] transition-colors focus:outline-none cursor-pointer shrink-0"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Timeline Scrubber Bar */}
          <div className="flex-1 flex items-center">
            <input 
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress || 0}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#afcc0f] focus:outline-none"
            />
          </div>

          {/* Time Display (Current / Duration) */}
          <span className="font-neue text-xs text-white/80 whitespace-nowrap min-w-[65px] text-right">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Mute / Unmute Toggle Button */}
          <button 
            onClick={toggleMute}
            className="p-1.5 text-white hover:text-[#afcc0f] transition-colors focus:outline-none cursor-pointer shrink-0"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ZooCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [showBackButton, setShowBackButton] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isNearRightEdge, setIsNearRightEdge] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        for (const item of zooItems) {
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
    const targetItem = zooItems.find((item) => item.sectionId === sectionId);
    if (targetItem) {
      const el = itemRefs.current[targetItem.id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/#work');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <main className="w-full min-h-screen bg-[#191818] text-white flex flex-col p-0 m-0 selection:bg-[#afcc0f] selection:text-black overflow-x-hidden relative">
      
      {/* Context-Aware Floating Top-Left Back Button */}
      <a
        href="/#work"
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

      {/* Mobile Floating Bottom Navigation (< md) */}
      <div className="fixed bottom-5 right-4 z-50 md:hidden select-none flex flex-col items-end">
        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mb-2 w-[180px] p-3 rounded-[18px] bg-[#1d1b1a]/95 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[11px] font-neue text-[#888888] px-1">
              <span>SECTIONS</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-[13px] leading-none"
              >
                ✕
              </button>
            </div>
            {allNavItems.map((item) => {
              const isActive = activeSection === item.id;
              const isAvailable = zooItems.some((i) => i.sectionId === item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (isAvailable) {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }
                  }}
                  disabled={!isAvailable}
                  className={`flex items-center justify-between gap-2 w-full text-[12px] font-neue px-1 py-0.5 transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold opacity-100'
                      : isAvailable
                      ? 'text-[#888888] active:text-white font-medium opacity-80'
                      : 'text-white/20 cursor-not-allowed opacity-30'
                  }`}
                >
                  <span className="text-left leading-tight truncate">{item.label}</span>
                  <span
                    className={`rounded-full transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'w-2 h-2 bg-[#afcc0f] shadow-[0_0_8px_#afcc0f]'
                        : 'w-1.5 h-1.5 bg-[#555555]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Mobile Pill Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1d1b1a]/90 backdrop-blur-md border border-white/15 shadow-xl text-white text-[12px] font-neue transition-all duration-300 active:scale-95 ${
            showBackButton || showSidebar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
          aria-label="Table of Contents"
        >
          <span className="w-2 h-2 rounded-full bg-[#afcc0f] shadow-[0_0_6px_#afcc0f] shrink-0" />
          <span className="capitalize font-medium truncate max-w-[100px]">
            {allNavItems.find((i) => i.id === activeSection)?.label || 'Sections'}
          </span>
          <span className="text-[10px] text-[#888888] ml-0.5">
            {mobileMenuOpen ? '▼' : '▲'}
          </span>
        </button>
      </div>

      {/* Sticky Right Viewport Sidebar (Desktop >= md) */}
      <nav 
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        className={`hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 md:gap-3.5 w-[170px] p-5 rounded-[22px] bg-[#1d1b1a]/90 backdrop-blur-md border border-white/10 shadow-2xl select-none transition-all duration-500 ease-in-out ${
          showSidebar || isSidebarHovered || isNearRightEdge
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        {allNavItems.map((item) => {
          const isActive = activeSection === item.id;
          const isAvailable = zooItems.some((i) => i.sectionId === item.id);

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
        {zooItems.map((item) => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            ref={(el) => (itemRefs.current[item.id] = el)}
            className="w-full p-0 m-0 leading-none"
          >
            {item.type === 'video' ? (
              <ZooPrototypeVideoPlayer src={item.src} />
            ) : (
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto block m-0 p-0 leading-none align-bottom pointer-events-none select-none"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
