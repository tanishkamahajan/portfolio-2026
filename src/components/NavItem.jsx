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
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const positionClass = labelPositions[label.toLowerCase()] || "inset-0 flex items-center justify-center";

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block cursor-pointer h-[44.998px] relative w-[100px] select-none group focus:outline-none ${className}`}
      data-name={`Property 1=${active ? 'work circle' : 'Default'}`}
    >
      {/* Clicked / Active State: Exact Figma Circle Overlay SVG */}
      {active && (
        <div className="absolute inset-[-3.3%_-1.44%_-3.03%_-1.65%] pointer-events-none z-0">
          <img 
            alt="" 
            className="block max-w-none size-full object-contain" 
            src="/assets/work-circle.svg" 
          />
        </div>
      )}

      {/* Label Text with Exact Figma Alignment & Hover Pop Animation */}
      <span 
        className={`[word-break:break-word] absolute font-gochi leading-[normal] not-italic text-white text-[20px] whitespace-nowrap z-10 transition-transform duration-200 ${positionClass} ${isHovered ? 'scale-110' : 'scale-100'}`}
        style={{ transformOrigin: 'center center' }}
      >
        {label}
      </span>
    </a>
  );
}
