import React from 'react';
import Badge from './Badge';

export function HeroNotebookPage1() {
  return (
    <div className="relative w-[981px] h-[601px] max-w-full flex-shrink-0 transition-transform duration-300 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      
      {/* Outer Dark Frame & Texture SVG (Figma imgRectangle27) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/assets/card-bg-top.svg" 
          alt="" 
          className="w-full h-full object-fill" 
        />
      </div>

      {/* Gray Shadow Paper Layer */}
      <div className="absolute inset-[17px_20px_0_20px] bg-[#d4d1d1] border border-[#c0baba] rounded-t-[28px] shadow-[0_6px_14px_rgba(0,0,0,0.6)] pointer-events-none z-1" />

      {/* White Main Paper Layer */}
      <div className="absolute inset-[25px_23px_0_23px] bg-[#fff8f8] border border-[#c0baba] rounded-t-[28px] flex flex-col items-center justify-center px-12 z-2 shadow-[6px_0_16px_rgba(0,0,0,0.7),_-6px_0_16px_rgba(0,0,0,0.7),_0_-4px_12px_rgba(0,0,0,0.5),_0_3px_6px_rgba(0,0,0,0.2)]">
        
        {/* Name Graphic: "tanishka mahajan" */}
        <div className="w-[717px] h-[256px] max-w-full relative flex items-center justify-center mb-3">
          <img 
            src="/assets/name.png" 
            alt="tanishka mahajan" 
            className="max-w-full max-h-full object-contain filter drop-shadow-sm" 
          />
        </div>

        {/* Tagline */}
        <p className="font-gochi text-[20px] text-[#555151] text-center tracking-wide">
          I’ve been creating things all my life. Now, I make them count.
        </p>
      </div>

    </div>
  );
}

export function HeroNotebookPage2() {
  return (
    <div className="relative w-[1018px] h-[667px] max-w-full flex-shrink-0 select-none rounded-b-[28px] -mt-[1px] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]">
      
      {/* 1. Outer Dark Frame & Border SVG (Rotated 180deg per Figma node 333:86 specification) */}
      <div className="absolute inset-0 pointer-events-none z-0 transform rotate-180">
        <img 
          src="/assets/card-bg-bottom.svg" 
          alt="" 
          className="w-full h-full object-fill" 
        />
      </div>

      {/* 2. Inner Sketchbook Page & Grid Lines (Exact 25px distance from outer dark frame on all 4 sides) */}
      <div className="absolute inset-[25px] pointer-events-none rounded-b-[24px] z-1 filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.85)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
        <img 
          src="/assets/grid-lines.svg" 
          alt="" 
          className="w-full h-full object-fill rounded-b-[24px]" 
        />
      </div>

      {/* 3. Heading: "I like getting to the point." */}
      <h2 className="[word-break:break-word] absolute font-neue font-bold leading-[normal] left-[105px] not-italic text-[#484646] text-[32px] top-[84px] tracking-[-0.64px] w-[340px] z-10">
        I like getting to the point.
      </h2>

      {/* 4. Wavy Green Line Vector 16 */}
      <div className="absolute left-[-59px] top-0 w-[1112px] h-[644px] pointer-events-none z-2 flex items-center justify-center">
        <div className="rotate-[-23.93deg]">
          <img 
            src="/assets/wavy-line.svg" 
            alt="" 
            className="w-[1125px] h-[205px] max-w-none object-contain" 
          />
        </div>
      </div>

      {/* 5. Annotation "Who" */}
      <p className="[word-break:break-word] absolute font-gochi leading-[normal] left-[157px] not-italic text-[#555151] text-[28px] top-[238px] whitespace-nowrap z-10">
        Who
      </p>
      <div className="absolute left-[182px] top-[273px] w-[21px] h-[46px] pointer-events-none z-10 rotate-180">
        <img src="/assets/doodle-who.svg" alt="" className="block max-w-none size-full object-contain" />
      </div>
      <div className="absolute left-[156px] top-[326px] size-[86px] pointer-events-none z-10">
        <img src="/assets/spiral-who.png" alt="" className="block max-w-none size-full object-contain" />
      </div>

      {/* 6. Annotation "What" */}
      <p className="[word-break:break-word] absolute font-gochi leading-[normal] left-[635px] not-italic text-[#555151] text-[28px] top-[115px] whitespace-nowrap z-10">
        What
      </p>
      <div className="absolute left-[608px] top-[165px] w-[45px] h-[41px] pointer-events-none z-10 rotate-180">
        <img src="/assets/doodle-what.svg" alt="" className="block max-w-none size-full object-contain" />
      </div>
      <div className="absolute left-[560px] top-[198px] size-[86px] pointer-events-none z-10">
        <img src="/assets/spiral-who.png" alt="" className="block max-w-none size-full object-contain transform scale-95" />
      </div>

      {/* 7. Annotation "Why" */}
      <div className="absolute left-[777px] top-[248px] w-[84px] h-[77px] pointer-events-none z-10">
        <img src="/assets/spiral-why.png" alt="" className="block max-w-none size-full object-contain" />
      </div>
      <div className="absolute left-[811px] top-[321px] w-[48px] h-[42px] pointer-events-none z-10 rotate-180">
        <img src="/assets/doodle-underline.svg" alt="" className="block max-w-none size-full object-contain" />
      </div>
      <p className="[word-break:break-word] absolute font-gochi leading-[normal] left-[842px] not-italic text-[#555151] text-[28px] top-[370px] whitespace-nowrap z-10">
        Why
      </p>

      {/* 9. Explanatory Paragraph */}
      <p className="[word-break:break-word] absolute font-neue leading-[1.35] left-[380px] not-italic text-[16px] text-black text-right top-[500px] w-[520px] z-10">
        <span className="font-normal">I try to understand the whole picture</span>
        <span className="font-medium">....who it affects,</span>
        <br />
        <span className="font-medium">what’s getting in the way, and why it matters.</span>
      </p>

    </div>
  );
}

export default function HeroNotebookCard() {
  return (
    <div className="w-full flex flex-col items-center select-none z-10">
      <div className="relative z-20 w-full flex justify-center">
        <HeroNotebookPage1 />
      </div>
      <div className="relative z-10 -mt-[19px] w-full flex justify-center">
        <HeroNotebookPage2 />
      </div>
    </div>
  );
}
