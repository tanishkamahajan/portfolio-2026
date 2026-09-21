import React, { useState } from 'react';
import LogoBadge from './LogoBadge';
import NavItem from './NavItem';

export default function Navbar({ activeSection: overrideActive }) {
  const isAboutPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/about');
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
  
  const [activeSection, setActiveSection] = useState(
    overrideActive || (isAboutPage ? 'about' : 'home')
  );

  const navigateTo = (path, hash = '') => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.history.pushState({}, '', path + hash);
    window.dispatchEvent(new Event('popstate'));

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setActiveSection('home');
    if (!isHomePage) {
      navigateTo('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWorkClick = (e) => {
    setActiveSection('work');
    if (!isHomePage) {
      e.preventDefault();
      navigateTo('/', '#work');
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setActiveSection('about');
    if (!isAboutPage) {
      navigateTo('/about');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleConnectClick = (e) => {
    setActiveSection('connect');
    if (!isHomePage) {
      e.preventDefault();
      navigateTo('/', '#connect');
    }
  };

  return (
    <header className="w-full flex justify-center items-center z-20 relative pt-3 md:pt-4 pb-2 px-2">
      <nav 
        aria-label="Main Navigation" 
        className="nav-container inline-flex items-center justify-center gap-[6px] sm:gap-[10px] md:gap-[16px] mx-auto text-center"
      >
        {/* Figma Component: LogoBadge */}
        <LogoBadge 
          active={activeSection === 'home' && isHomePage} 
          onClick={handleLogoClick} 
        />

        {/* Figma Component: NavItems (work, about, connect, resume) */}
        <NavItem 
          label="work" 
          href="#work" 
          active={activeSection === 'work' && isHomePage}
          onClick={handleWorkClick}
        />
        <NavItem 
          label="about" 
          href="/about" 
          active={activeSection === 'about' || isAboutPage}
          onClick={handleAboutClick}
        />
        <NavItem 
          label="connect" 
          href="#connect" 
          active={activeSection === 'connect'}
          onClick={handleConnectClick}
        />
        <NavItem 
          label="resume" 
          href="https://drive.google.com/file/d/18WuJyJ21VY9MD36NreLYU_8sNyUku3E-/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          active={activeSection === 'resume'}
          onClick={() => setActiveSection('resume')}
        />
      </nav>
    </header>
  );
}
