import React, { useState } from 'react';

/**
 * Figma Master Component Set: Frame 74 (Component Set 421:185)
 * Variants: Property 1=Default (421:186) | Property 1=Variant2 (421:189)
 */
export default function ResumeButton({ href = "https://drive.google.com/file/d/18WuJyJ21VY9MD36NreLYU_8sNyUku3E-/view?usp=sharing", className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[39px] relative w-[109px] block cursor-pointer select-none transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      data-node-id={isHovered ? "421:189" : "421:186"}
      data-name={`Property 1=${isHovered ? 'Variant2' : 'Default'}`}
    >
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-gochi leading-[normal] left-[55.56px] not-italic text-[#d8d1d1] text-[24px] text-center top-[6.95px] whitespace-nowrap z-10">
        resume
      </p>
      <div className="absolute h-[39px] left-0 top-0 w-[109px] z-0">
        <div className="absolute inset-[-3.16%_-0.97%_-2.47%_-0.93%]">
          <img 
            alt="" 
            className="block max-w-none size-full object-contain" 
            src={isHovered ? "/assets/resume-btn-variant2.svg" : "/assets/resume-btn-default.svg"} 
          />
        </div>
      </div>
    </a>
  );
}
