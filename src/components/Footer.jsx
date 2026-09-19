import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tanishkamahajan03@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#191818] text-white relative z-10 flex justify-center selection:bg-[#afcc0f] selection:text-black overflow-hidden">
      {/* 1440px Centered Figma Frame Container (Node 588:34) */}
      <div className="w-full max-w-[1440px] h-[526px] bg-[#191818] relative shrink-0 mx-auto select-none overflow-hidden">
        
        {/* Continuous Vertical Guide Threads for Footer (White on Dark Background) */}
        <div className="w-full max-w-[1440px] absolute inset-0 pointer-events-none z-10 mx-auto">
          <div className="absolute left-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
            <svg className="w-[1px] h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>
          <div className="absolute right-[5.55556%] top-0 bottom-0 w-[1px] pointer-events-none">
            <svg className="w-[1px] h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>
        </div>

        {/* Giant Text "let’s talk" (Figma Node 421:39) */}
        <p className="absolute font-neue font-bold text-[#636262] text-[342px] tracking-[-6.84px] leading-[0.82] left-[111.5px] top-[282px] select-none pointer-events-none whitespace-nowrap">
          let’s talk
        </p>

        {/* Social Links Stack (Figma Node 588:41 - Frame 100) */}
        <div className="absolute flex flex-col gap-[5px] items-start left-[1085px] top-[157.75px] w-[125.63px] z-20">
          
          {/* Resume Button (Figma Node 421:46) */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-[39px] w-[109px] relative shrink-0 block cursor-pointer group transform transition-transform duration-200 hover:scale-105"
          >
            <div className="absolute inset-[-3.16%_-0.97%_-2.47%_-0.93%] pointer-events-none">
              <img src="/assets/footer-resume-button.svg" alt="Resume" className="block w-full h-full object-contain" />
            </div>
            <p className="absolute left-[55.56px] top-[6.95px] -translate-x-1/2 font-gochi text-[#d8d1d1] text-[24px] leading-none text-center whitespace-nowrap group-hover:text-white transition-colors">
              resume
            </p>
          </a>

          {/* Behance Button (Figma Node 421:40) */}
          <a 
            href="https://www.behance.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-[50.2px] w-full items-center justify-center relative shrink-0 cursor-pointer group transform transition-transform duration-200 hover:scale-105"
          >
            <div className="flex-none rotate-[3.54deg] w-full">
              <div className="h-[42.53px] relative w-full">
                <div className="absolute inset-[-2.56%_-0.95%] pointer-events-none">
                  <img src="/assets/footer-behance-button.svg" alt="Behance" className="block w-full h-full object-contain" />
                </div>
                <p className="absolute left-[59.44px] top-[6.44px] -translate-x-1/2 font-gochi text-[#d8d1d1] text-[23.5px] leading-none text-center whitespace-nowrap group-hover:text-white transition-colors">
                  behance
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Button (Figma Node 421:43) */}
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-[44.26px] w-[108.51px] items-center justify-center relative shrink-0 cursor-pointer group transform transition-transform duration-200 hover:scale-105"
          >
            <div className="flex-none rotate-[-4.53deg]">
              <div className="h-[36px] relative w-[106px]">
                <div className="absolute inset-[-2.56%_-0.95%] pointer-events-none">
                  <img src="/assets/footer-linkedin-button.svg" alt="LinkedIn" className="block w-full h-full object-contain" />
                </div>
                <p className="absolute left-[52px] top-[4px] -translate-x-1/2 font-gochi text-[#d8d1d1] text-[24px] leading-none text-center whitespace-nowrap group-hover:text-white transition-colors">
                  linkedin
                </p>
              </div>
            </div>
          </a>

        </div>

        {/* Center Avatar & Email Stack (Figma Node 588:43 - Frame 101) */}
        <div className="absolute flex flex-col items-center left-[608px] top-[134.46px] w-[354.16px] pt-[8px] z-20">
          
          {/* Email Button (Figma Node 421:47 - Frame 54) */}
          <button 
            onClick={handleCopyEmail}
            className="cursor-pointer flex flex-col gap-[10px] items-center mb-[-20px] relative shrink-0 w-[106px] group transform transition-transform duration-200 hover:scale-105"
          >
            <div className="h-[36px] relative shrink-0 w-full">
              <div className="absolute inset-[-4.49%_-1.67%_-4.48%_-1.67%] pointer-events-none">
                <img src="/assets/footer-email-button.svg" alt="Email" className="block w-full h-full object-contain" />
              </div>
              <p className="absolute left-[46px] top-[3px] -translate-x-1/2 font-gochi text-[#d8d1d1] text-[24px] leading-none text-center whitespace-nowrap group-hover:text-white transition-colors">
                email
              </p>
            </div>
            <p className="font-gochi text-[14px] leading-none text-center text-white relative shrink-0 w-full whitespace-nowrap">
              {copied ? 'copied!' : 'tap to copy'}
            </p>
          </button>

          {/* Avatar & Hand-drawn Arrows (Figma Node 588:42 - Group 33) */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-none place-items-start relative shrink-0">
            
            {/* Avatar Image (Figma Node 421:82 - Image 99) */}
            <div className="col-1 row-1 flex h-[159.6px] items-center justify-center ml-[77px] mt-[24px] relative w-[219.85px]">
              <div className="flex-none rotate-[6.56deg]">
                <div className="h-[137.03px] w-[205.55px] relative">
                  <img 
                    src="/assets/footer-avatar.png" 
                    alt="Avatar" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                  />
                </div>
              </div>
            </div>

            {/* Right Arrow (Figma Node 421:282 - Vector 38) */}
            <div className="col-1 row-1 h-[116.21px] w-[76.16px] ml-[278px] mt-0 relative">
              <div className="absolute inset-[-1.66%_-2.29%_0_-1.16%] pointer-events-none">
                <img src="/assets/footer-arrow-right.svg" alt="" className="block w-full h-full object-contain" />
              </div>
            </div>

            {/* Left Arrow (Figma Node 421:285 - Vector 39) */}
            <div className="col-1 row-1 flex h-[138.39px] w-[121.96px] items-center justify-center ml-0 mt-[44px] relative">
              <div className="-scale-y-100 flex-none rotate-[151.87deg]">
                <div className="h-[116.21px] w-[76.16px] relative">
                  <div className="absolute inset-[-1.66%_-2.29%_0_-1.16%] pointer-events-none">
                    <img src="/assets/footer-arrow-left.svg" alt="" className="block w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
