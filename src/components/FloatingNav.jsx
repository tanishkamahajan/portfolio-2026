import React, { useState, useEffect, useRef } from 'react';

export default function FloatingNav({ targetId = 'work' }) {
  const [showHamburger, setShowHamburger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const isAboutPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/about');
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  // Scroll / Intersection observer to detect when user passes the Hero/transition boundary
  useEffect(() => {
    const handleScroll = () => {
      const targetEl = document.getElementById(targetId);
      if (!targetEl) {
        // Fallback if target element not found
        setShowHamburger(window.scrollY > 600);
        return;
      }

      const rect = targetEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (isHomePage) {
        // On Homepage: trigger hamburger ONLY when SelectedWorks (#work) is at or near the viewport top
        // (i.e. mask transition is completed and user has entered SelectedWorks)
        const isPastTransition = rect.top <= windowHeight * 0.75;
        setShowHamburger(isPastTransition);
        if (!isPastTransition) {
          setIsOpen(false); // Close menu if scrolling back up into Hero / mask transition
        }
      } else {
        // On other pages (e.g. /about): trigger hamburger when top header section has scrolled past
        const isPastHeader = rect.bottom <= 80;
        setShowHamburger(isPastHeader);
        if (!isPastHeader) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetId, isHomePage]);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navigateTo = (path, hash = '') => {
    setIsOpen(false);

    if (window.location.pathname === path) {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.history.pushState({}, '', path + hash);
      window.dispatchEvent(new Event('popstate'));

      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    navigateTo('/', '#work');
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigateTo('/about');
  };

  const handleConnectClick = (e) => {
    e.preventDefault();
    navigateTo('/', '#connect');
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.open(
      'https://drive.google.com/file/d/18WuJyJ21VY9MD36NreLYU_8sNyUku3E-/view?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      ref={menuRef}
      className={`fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 transition-all duration-300 ease-in-out ${
        showHamburger
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
    >
      {/* Floating Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#191818]/90 backdrop-blur-md border border-[#3e3d3d] hover:border-[#D7F917] flex items-center justify-center text-white shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none"
      >
        <div className="relative w-5 h-5 flex flex-col justify-center items-center">
          {/* Animated Hamburger Lines / Close X */}
          <span
            className={`block absolute h-[2px] w-5 bg-white group-hover:bg-[#D7F917] transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`block absolute h-[2px] w-5 bg-white group-hover:bg-[#D7F917] transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block absolute h-[2px] w-5 bg-white group-hover:bg-[#D7F917] transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`}
          />
        </div>
      </button>

      {/* Floating Compact Dropdown Navigation Menu */}
      <div
        className={`absolute top-14 right-0 w-48 sm:w-56 bg-[#191818]/95 backdrop-blur-xl border border-[#3e3d3d] rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col gap-1 z-50 origin-top-right transition-all duration-200 ease-out ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
        }`}
      >
        <a
          href="/#work"
          onClick={handleWorkClick}
          className="w-full text-left px-4 py-2 sm:py-2.5 rounded-xl font-gochi text-xl sm:text-2xl text-white hover:text-[#D7F917] hover:bg-[#252424] transition-all flex items-center justify-between cursor-pointer border-none bg-transparent select-none group"
        >
          <span>work</span>
          <span className="text-xs font-sans opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D7F917]">
            →
          </span>
        </a>

        <a
          href="/about"
          onClick={handleAboutClick}
          className="w-full text-left px-4 py-2 sm:py-2.5 rounded-xl font-gochi text-xl sm:text-2xl text-white hover:text-[#D7F917] hover:bg-[#252424] transition-all flex items-center justify-between cursor-pointer border-none bg-transparent select-none group"
        >
          <span>about</span>
          <span className="text-xs font-sans opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D7F917]">
            →
          </span>
        </a>

        <a
          href="/#connect"
          onClick={handleConnectClick}
          className="w-full text-left px-4 py-2 sm:py-2.5 rounded-xl font-gochi text-xl sm:text-2xl text-white hover:text-[#D7F917] hover:bg-[#252424] transition-all flex items-center justify-between cursor-pointer border-none bg-transparent select-none group"
        >
          <span>connect</span>
          <span className="text-xs font-sans opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D7F917]">
            →
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/18WuJyJ21VY9MD36NreLYU_8sNyUku3E-/view?usp=sharing"
          onClick={handleResumeClick}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-left px-4 py-2 sm:py-2.5 rounded-xl font-gochi text-xl sm:text-2xl text-white hover:text-[#D7F917] hover:bg-[#252424] transition-all flex items-center justify-between cursor-pointer border-none bg-transparent select-none group"
        >
          <span>resume</span>
          <span className="text-xs font-sans opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D7F917]">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
