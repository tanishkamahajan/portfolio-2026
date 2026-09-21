import React, { useState } from 'react';

/**
 * Figma Component Sets & Exact Label Positions:
 * - work (421:182): left-[24%] top-[31.11%] bottom-[6.66%] right-[25%]
 * - about (421:206): left-[25%] top-[35.56%] bottom-[11.11%] right-[25%]
 * - connect (421:212): left-[19%] top-[31.11%] bottom-[15.55%] right-[19%]
 * - resume (421:218): left-[21%] top-[31.11%] bottom-[15.55%] right-[20%]
 */
const labelPositions = {
  work: "left-[24%] top-[31.11%] bottom-[6.66%] right-[25%] text-left",
  about: "left-[25%] top-[35.56%] bottom-[11.11%] right-[25%] text-left",
  connect: "left-[19%] top-[31.11%] bottom-[15.55%] right-[19%] text-left",
  resume: "left-[21%] top-[31.11%] bottom-[15.55%] right-[20%] text-left",
};

export default function NavItem({ 
  label = "work", 
  href = "#", 
  active = false, 
  onClick,
  target,
  rel,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const positionClass = labelPositions[label.toLowerCase()] || "inset-0 flex items-center justify-center";

  const isShowCircle = active || isHovered;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`nav-item-btn block cursor-pointer h-[36px] w-[58px] sm:h-[40px] sm:w-[72px] md:h-[44.998px] md:w-[100px] relative select-none group focus:outline-none transform transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.04] active:scale-95 shrink-0 ${className}`}
      data-name={`Property 1=${isShowCircle ? 'work circle' : 'Default'}`}
    >
      {/* Hand-drawn Lime Green Circle Overlay SVG */}
      <div 
        className={`absolute inset-[-3.3%_-1.44%_-3.03%_-1.65%] pointer-events-none z-0 transition-opacity duration-200 ${
          isShowCircle ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          alt="" 
          className="block max-w-none size-full object-contain" 
          src="/assets/work-circle.svg" 
        />
      </div>

      {/* Label Text - WHITE ONLY text */}
      <span 
        className={`nav-item-text [word-break:break-word] absolute font-gochi leading-[normal] not-italic text-white text-[15px] sm:text-[17px] md:text-[20px] whitespace-nowrap z-10 ${positionClass}`}
      >
        {label}
      </span>
    </a>
  );
}
