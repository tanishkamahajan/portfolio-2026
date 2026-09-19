import React, { useState } from 'react';
import LogoBadge from './LogoBadge';
import NavItem from './NavItem';

export default function Navbar() {
  // Active navigation section state ('home' by default)
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleLogoClick = () => {
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full flex justify-center items-center z-20 relative pt-4 pb-2">
      <nav 
        aria-label="Main Navigation" 
        className="inline-flex items-center justify-center gap-[16px] mx-auto text-center"
      >
        {/* Figma Component: LogoBadge - Scrolls to top/hero section */}
        <LogoBadge 
          active={activeSection === 'home'} 
          onClick={handleLogoClick} 
        />

        {/* Figma Component: NavItems (work, about, connect, resume) */}
        <NavItem 
          label="work" 
          href="#work" 
          active={activeSection === 'work'}
          onClick={() => handleNavClick('work')}
        />
        <NavItem 
          label="about" 
          href="#about" 
          active={activeSection === 'about'}
          onClick={() => handleNavClick('about')}
        />
        <NavItem 
          label="connect" 
          href="#connect" 
          active={activeSection === 'connect'}
          onClick={() => handleNavClick('connect')}
        />
        <NavItem 
          label="resume" 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          active={activeSection === 'resume'}
          onClick={() => handleNavClick('resume')}
        />
      </nav>
    </header>
  );
}
