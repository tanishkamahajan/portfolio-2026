import React, { useState } from 'react';

/**
 * Figma Master Component: Frame 73 (Component Set 421:221)
 * Variants:
 * - Property 1=Variant2 (Lime green active home state)
 * - Property 1=Default (Greyed out state when not on home page)
 */
export default function LogoBadge({ active = true, onClick, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  const showLime = active || isHovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Home / TM Logo"
      className={`block cursor-pointer h-[39.051px] relative w-[51.399px] transform transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.04] active:scale-95 focus:outline-none ${className}`}
      data-node-id={showLime ? "421:227" : "421:222"}
      data-name={`Property 1=${showLime ? 'Variant2' : 'Default'}`}
    >
      <div className="absolute inset-[-1.8%_-1.69%_-1.87%_-1.8%]">
        <img 
          alt="TM Logo" 
          className="block max-w-none size-full object-contain transition-all duration-200" 
          src={showLime ? "/assets/logo-variant2.svg" : "/assets/logo-default.svg"} 
        />
      </div>
    </button>
  );
}
